// functions/[[path]].js
export async function onRequest(context) {
    const { request, next } = context;
    const url = new URL(request.url);
    const accept = (request.headers.get("Accept") || "").toLowerCase();
    const wantsMarkdown = accept.includes("text/markdown");

    // 1. Markdown Negotiation
    if (wantsMarkdown) {
        let path = url.pathname === "/" ? "/index.md" : url.pathname.replace(".html", ".md");
        
        // Fetch the file using the Pages internal fetch
        const response = await fetch(new Request(new URL(path, url.origin), request));
        
        if (response.status === 200) {
            return new Response(response.body, {
                headers: {
                    "Content-Type": "text/markdown; charset=utf-8",
                    "X-Worker-Active": "true"
                }
            });
        }
    }

    // 2. Default Fallback
    const response = await next();
    const headers = new Headers(response.headers);
    
    // Inject Discovery Links
    if (headers.get("Content-Type")?.includes("text/html")) {
        headers.append("Link", '<https://mariomarcolongo.com/.well-known/api-catalog>; rel="api-catalog"');
        headers.append("Link", '<https://mariomarcolongo.com/llms.txt>; rel="describedby"; type="text/plain"');
        headers.append("Link", '<https://mariomarcolongo.com/llms-full.txt>; rel="describedby"; type="text/plain"');
    }
    
    headers.set("X-Worker-Active", "true");
    return new Response(response.body, { status: response.status, headers });
}