// functions/_middleware.ts
export const onRequest: PagesFunction = async (context) => {
    const { request, next, env } = context;
    const acceptHeader = request.headers.get("Accept")?.toLowerCase() || "";
    const wantsMarkdown = acceptHeader.includes("text/markdown");

    if (wantsMarkdown) {
        const url = new URL(request.url);
        url.searchParams.delete("_fmt"); // Strip Transform Rule cache-split

        // Map URL path to .md replica path
        let path = url.pathname;
        if (path === "/" || path === "/index.html") path = "/index.md";
        else if (path.endsWith(".html")) path = path.replace(/\.html$/, ".md");
        else if (path.endsWith("/")) path = path.slice(0, -1) + ".md";
        else path = path + ".md";

        try {
            // Fetch the pre-generated Markdown asset
            const assetResponse = await env.ASSETS.fetch(new Request(new URL(path, url.origin)));

            if (assetResponse.status === 200) {
                const headers = new Headers(assetResponse.headers);
                headers.set("Content-Type", "text/markdown; charset=utf-8");
                headers.set("Content-Signal", "ai-train=yes, search=yes, ai-input=yes");
                headers.set("Vary", "Accept");
                headers.set("Cache-Control", "public, max-age=3600, s-maxage=86400");
                return new Response(assetResponse.body, { status: 200, headers });
            }
        } catch (e) {
            // If .md lookup fails, fall through to default HTML
        }
    }

    // Standard fallback
    const response = await next();
    const headers = new Headers(response.headers);
    headers.set("X-Content-Type-Options", "nosniff");

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
};