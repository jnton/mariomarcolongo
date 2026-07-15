export default {
    async fetch(request, env) {
        const acceptHeader = (request.headers.get("Accept") || "").toLowerCase();
        const wantsMarkdown = acceptHeader.includes("text/markdown");

        // Debugging information
        const debugHeaders = {
            "X-Worker-Active": "true",
            "X-Wants-Markdown": String(wantsMarkdown),
            "X-Accept-Header": acceptHeader
        };

        if (wantsMarkdown) {
            const url = new URL(request.url);
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
                    // Add debug headers
                    Object.entries(debugHeaders).forEach(([k, v]) => headers.set(k, v));
                    return new Response(assetResponse.body, { status: 200, headers });
                }
            } catch (e) {
                // Fall through
            }
        }

        // Default HTML Fallback
        const response = await env.ASSETS.fetch(request);
        const headers = new Headers(response.headers);
        Object.entries(debugHeaders).forEach(([k, v]) => headers.set(k, v));

        return new Response(response.body, { status: response.status, headers });
    }
};