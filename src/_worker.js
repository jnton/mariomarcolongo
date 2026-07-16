export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const acceptHeader = (request.headers.get("Accept") || "").toLowerCase();
    const wantsMarkdown = acceptHeader.includes("text/markdown");

    // 1. Diagnostic/Test Trigger (Keep this to prove the Worker is running)
    if (url.pathname.includes("test-worker")) {
        return new Response("Worker is alive!", { 
            headers: { "X-Worker-Active": "true" } 
        });
    }

    // 2. Markdown Negotiation
    if (wantsMarkdown) {
        let path = url.pathname === "/" ? "/index.md" : url.pathname.replace(".html", ".md");
        try {
            const assetResponse = await env.ASSETS.fetch(new Request(new URL(path, url.origin)));
            if (assetResponse.status === 200) {
                const headers = new Headers(assetResponse.headers);
                headers.set("Content-Type", "text/markdown; charset=utf-8");
                headers.set("X-Worker-Active", "true");
                return new Response(assetResponse.body, { status: 200, headers });
            }
        } catch (e) {}
    }

    // 3. HTML Fallback
    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    headers.set("X-Worker-Active", "true"); // Confirmation header
    
    // Inject discovery links
    if (headers.get("Content-Type")?.includes("text/html")) {
        const links = [
            '<https://mariomarcolongo.com/.well-known/api-catalog>; rel="api-catalog"',
            '<https://mariomarcolongo.com/llms.txt>; rel="describedby"; type="text/plain"',
            '<https://mariomarcolongo.com/llms-full.txt>; rel="describedby"; type="text/plain"',
            '<https://mariomarcolongo.com/.well-known/agent-card.json>; rel="agent-card"',
            '<https://mariomarcolongo.com/.well-known/mcp/server-card.json>; rel="mcp-server-card"'
        ].join(", ");
        headers.append("Link", links);
    }

    return new Response(response.body, { status: response.status, headers });
  }
};