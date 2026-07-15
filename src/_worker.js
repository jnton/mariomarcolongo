/**
 * Cloudflare Worker for Agent-Ready HTTP Negotiation & Discovery
 */

export default {
    async fetch(request, env, ctx) {
        const acceptHeader = (request.headers.get("Accept") || "").toLowerCase();

        // 1. Content Negotiation
        const wantsMarkdown = acceptHeader.includes("text/markdown");

        const url = new URL(request.url);
        if (url.searchParams.has("_fmt")) {
            url.searchParams.delete("_fmt");
        }

        let debugLog = [];

        if (wantsMarkdown) {
            let pathname = url.pathname;
            let candidatePaths = [];

            if (pathname === "/" || pathname === "" || pathname === "/index.html") {
                candidatePaths = ["/index.md"];
            } else if (pathname.endsWith(".html")) {
                candidatePaths = [pathname.replace(/\.html$/, ".md")];
            } else if (pathname.endsWith(".md")) {
                candidatePaths = [pathname];
            } else if (pathname.endsWith("/")) {
                candidatePaths = [`${pathname}index.md`, `${pathname.slice(0, -1)}.md`];
            } else {
                candidatePaths = [`${pathname}.md`, `${pathname}/index.md`];
            }

            for (const candidatePath of candidatePaths) {
                const assetUrl = new URL(url.toString());
                assetUrl.pathname = candidatePath;
                assetUrl.search = "";

                try {
                    // Clone request headers to satisfy Cloudflare internal routing
                    const assetHeaders = new Headers(request.headers);

                    // CRITICAL: Strip conditional cache headers to force a 200 response instead of 304
                    assetHeaders.delete('if-none-match');
                    assetHeaders.delete('if-modified-since');

                    const assetRequest = new Request(assetUrl.toString(), {
                        method: request.method,
                        headers: assetHeaders
                    });

                    const assetResponse = await env.ASSETS.fetch(assetRequest);
                    debugLog.push(`${candidatePath}:${assetResponse.status}`);

                    if (assetResponse.status === 200) {
                        const newHeaders = new Headers(assetResponse.headers);
                        newHeaders.set("Content-Type", "text/markdown; charset=utf-8");
                        newHeaders.set("Content-Signal", "ai-train=yes, search=yes, ai-input=yes");
                        newHeaders.set("Vary", "Accept");
                        newHeaders.set("Cache-Control", "public, max-age=3600, s-maxage=86400");

                        // Inject telemetry for debugging
                        newHeaders.set("X-MD-Debug", debugLog.join(","));

                        return new Response(assetResponse.body, {
                            status: 200,
                            headers: newHeaders
                        });
                    }
                } catch (e) {
                    debugLog.push(`${candidatePath}:ERR`);
                }
            }
        }

        // 2. Fallback
        const cleanUrl = new URL(request.url);
        cleanUrl.searchParams.delete("_fmt");
        const cleanRequest = new Request(cleanUrl.toString(), request);

        const response = await env.ASSETS.fetch(cleanRequest);
        const newHeaders = new Headers(response.headers);

        newHeaders.set("X-Content-Type-Options", "nosniff");

        // Output the telemetry even if it fails, so we can see why
        newHeaders.set("X-MD-Debug", debugLog.length > 0 ? debugLog.join(",") : "No-MD-Requested");

        const contentType = newHeaders.get("Content-Type") || "";
        if (contentType.includes("text/html")) {
            const existingLinks = newHeaders.get("Link") || "";
            const discoveryLinks = [
                '<https://mariomarcolongo.com/.well-known/api-catalog>; rel="api-catalog"',
                '<https://mariomarcolongo.com/llms.txt>; rel="describedby"; type="text/plain"',
                '<https://mariomarcolongo.com/llms-full.txt>; rel="describedby"; type="text/plain"',
                '<https://mariomarcolongo.com/.well-known/agent-card.json>; rel="agent-card"',
                '<https://mariomarcolongo.com/.well-known/mcp/server-card.json>; rel="mcp-server-card"'
            ].join(", ");
            newHeaders.set("Link", existingLinks ? `${existingLinks}, ${discoveryLinks}` : discoveryLinks);
        }

        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders
        });
    }
};