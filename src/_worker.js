/**
 * Cloudflare Worker for Agent-Ready HTTP Negotiation & Discovery
 */

export default {
    async fetch(request, env, ctx) {
        const acceptHeader = (request.headers.get("Accept") || "").toLowerCase();

        // 1. Content Negotiation
        const wantsMarkdown = acceptHeader.includes("text/markdown");

        if (wantsMarkdown) {
            const url = new URL(request.url);
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
                // Strip search params so ASSETS looks for the exact static file
                assetUrl.search = "";

                try {
                    // Fetch the static .md file cleanly without copying client cache headers
                    const assetResponse = await env.ASSETS.fetch(new Request(assetUrl));

                    if (assetResponse.status === 200) {
                        const newHeaders = new Headers(assetResponse.headers);
                        newHeaders.set("Content-Type", "text/markdown; charset=utf-8");
                        newHeaders.set("Content-Signal", "ai-train=yes, search=yes, ai-input=yes");
                        newHeaders.set("Vary", "Accept");
                        newHeaders.set("Cache-Control", "public, max-age=3600, s-maxage=86400");

                        // Debug header to prove negotiation succeeded
                        newHeaders.set("X-Markdown-Negotiation", "Success");

                        return new Response(assetResponse.body, {
                            status: 200,
                            headers: newHeaders
                        });
                    }
                } catch (e) {
                    // Silently continue to next candidate path
                }
            }
        }

        // 2. Fallback: Fetch original HTML. Clean the URL so _fmt=md doesn't break Astro routing.
        const cleanUrl = new URL(request.url);
        cleanUrl.searchParams.delete("_fmt");

        // Pass original request method and headers to the fallback HTML
        const cleanRequest = new Request(cleanUrl.toString(), request);
        const response = await env.ASSETS.fetch(cleanRequest);
        const newHeaders = new Headers(response.headers);

        newHeaders.set("X-Content-Type-Options", "nosniff");
        newHeaders.set("X-Markdown-Negotiation", "Fallback");

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