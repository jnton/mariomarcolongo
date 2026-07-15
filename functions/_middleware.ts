// functions/_middleware.ts
export const onRequest: PagesFunction = async (context) => {
  const { request, next } = context;
  const acceptHeader = request.headers.get("Accept")?.toLowerCase() || "";
  const wantsMarkdown = acceptHeader.includes("text/markdown");

  // 1. Markdown Negotiation Logic
  if (wantsMarkdown) {
    const url = new URL(request.url);
    let path = url.pathname;
    
    // Map URL path to .md replica path
    if (path === "/" || path === "/index.html") path = "/index.md";
    else if (path.endsWith(".html")) path = path.replace(/\.html$/, ".md");
    else if (path.endsWith("/")) path = path.slice(0, -1) + ".md";
    else path = path + ".md";

    try {
      // Use the fetch API to fetch from your own site
      const response = await fetch(new Request(new URL(path, url.origin), request));
      
      if (response.status === 200) {
        const headers = new Headers(response.headers);
        headers.set("Content-Type", "text/markdown; charset=utf-8");
        headers.set("Content-Signal", "ai-train=yes, search=yes, ai-input=yes");
        headers.set("Vary", "Accept");
        headers.set("Cache-Control", "public, max-age=3600");
        return new Response(response.body, { status: 200, headers });
      }
    } catch (e) {
      // Fall through to HTML
    }
  }

  // 2. Default Fallback
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