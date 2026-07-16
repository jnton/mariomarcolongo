export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Check if ASSETS is actually bound
    if (!env.ASSETS) {
        return new Response("Error: env.ASSETS is undefined. The Worker is not correctly bound to your static assets.", {
            status: 500,
            headers: { "X-Worker-Error": "binding-missing" }
        });
    }

    const accept = (request.headers.get("Accept") || "").toLowerCase();
    const wantsMarkdown = accept.includes("text/markdown");

    if (wantsMarkdown) {
        let path = url.pathname === "/" ? "/index.md" : url.pathname.replace(".html", ".md");
        try {
            const assetResponse = await env.ASSETS.fetch(new Request(new URL(path, url.origin)));
            if (assetResponse.status === 200) {
                return new Response(assetResponse.body, {
                    headers: {
                        "Content-Type": "text/markdown; charset=utf-8",
                        "X-Worker-Active": "true"
                    }
                });
            }
        } catch (e) {
            return new Response("Markdown fetch error: " + e.message, { status: 500 });
        }
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    headers.set("X-Worker-Active", "true");
    return new Response(response.body, { status: response.status, headers });
  }
};