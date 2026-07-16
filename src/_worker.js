export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const accept = (request.headers.get("Accept") || "").toLowerCase();
    const isMarkdown = accept.includes("text/markdown");

    // 1. Markdown Negotiation
    if (isMarkdown) {
        let path = url.pathname === "/" ? "/index.md" : url.pathname.replace(".html", ".md");
        try {
            const assetResponse = await env.ASSETS.fetch(new Request(new URL(path, url.origin)));
            if (assetResponse.status === 200) {
                return new Response(assetResponse.body, {
                    headers: {
                        "Content-Type": "text/markdown; charset=utf-8",
                        "X-Worker-Active": "true",
                        "Cache-Control": "no-cache" // Force validation
                    }
                });
            }
        } catch (e) {}
    }

    // 2. Fallback to HTML
    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    
    // Crucial: Tell Cloudflare to run the worker and NOT cache this HTML response
    headers.set("X-Worker-Active", "true");
    headers.set("Cache-Control", "no-cache, no-store, must-revalidate");

    return new Response(response.body, { status: response.status, headers });
  }
};