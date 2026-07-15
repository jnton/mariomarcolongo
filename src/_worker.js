export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const acceptHeader = (request.headers.get("Accept") || "").toLowerCase();
        const wantsMarkdown = acceptHeader.includes("text/markdown");

        // 1. Markdown Negotiation Logic
        if (wantsMarkdown) {
            let path = url.pathname;
            if (path === "/" || path === "/index.html") path = "/index.md";
            else if (path.endsWith(".html")) path = path.replace(/\.html$/, ".md");
            else if (path.endsWith("/")) path = path.slice(0, -1) + ".md";
            else path = path + ".md";

            try {
                const assetResponse = await env.ASSETS.fetch(new Request(new URL(path, url.origin)));

                if (assetResponse.status === 200) {
                    const headers = new Headers(assetResponse.headers);
                    headers.set("Content-Type", "text/markdown; charset=utf-8");
                    headers.set("X-Worker-Active", "true"); // Debugging
                    headers.set("X-Wants-Markdown", "true"); // Debugging
                    return new Response(assetResponse.body, { status: 200, headers });
                }
            } catch (e) {
                // Fall through
            }
        }

        // 2. Default Fallback
        const response = await env.ASSETS.fetch(request);
        const headers = new Headers(response.headers);
        headers.set("X-Worker-Active", "true");
        headers.set("X-Wants-Markdown", "false");

        // Inject discovery links
        if (headers.get("Content-Type")?.includes("text/html")) {
            const discoveryLinks = [
                '<https://mariomarcolongo.com/.well-known/api-catalog>; rel="api-catalog"',
                '<https://mariomarcolongo.com/llms.txt>; rel="describedby"; type="text/plain"',
                '<https://mariomarcolongo.com/llms-full.txt>; rel="describedby"; type="text/plain"',
                '<https://mariomarcolongo.com/.well-known/agent-card.json>; rel="agent-card"',
                '<https://mariomarcolongo.com/.well-known/mcp/server-card.json>; rel="mcp-server-card"'
            ].join(", ");
            headers.append("Link", discoveryLinks);
        }

        return new Response(response.body, { status: response.status, headers });
    }
};