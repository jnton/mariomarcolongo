/**
  * Cloudflare Pages Middleware for Agent-Ready HTTP Negotiation & Discovery
  * 
  * Automatically intercepts requests where `Accept: text/markdown` or `Accept: application/json` is favored over HTML,
  * returning pristine machine-actionable summaries (`/llms-full.txt` or `/llms.txt`) to AI agents, LLM crawlers, and terminals (`curl`).
  */
export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const acceptHeader = (request.headers.get("Accept") || "").toLowerCase();
  const userAgent = (request.headers.get("User-Agent") || "").toLowerCase();

  // 1. Content Negotiation: Check if `Accept: text/markdown` is requested (and not superseded by HTML preference)
  const wantsMarkdown = acceptHeader.includes("text/markdown") &&
    (!acceptHeader.includes("text/html") || acceptHeader.indexOf("text/markdown") <= acceptHeader.indexOf("text/html"));

  if (wantsMarkdown) {
    if (url.pathname === "/" || url.pathname === "" || url.pathname === "/index.html") {
      const response = await context.env.ASSETS.fetch(new URL("/llms-full.txt", request.url));
      const textBody = await response.text();
      const tokens = Math.ceil(textBody.length / 4);
      const newHeaders = new Headers(response.headers);
      newHeaders.set("Content-Type", "text/markdown; charset=utf-8");
      newHeaders.set("x-markdown-tokens", String(tokens));
      newHeaders.set("Vary", "Accept");
      newHeaders.set("X-Content-Negotiated-By", "Cloudflare-Pages-Agent-Middleware");
      return new Response(textBody, { status: 200, headers: newHeaders });
    }
    if (url.pathname === "/cv" || url.pathname === "/cv/" || url.pathname === "/cv.html") {
      const response = await context.env.ASSETS.fetch(new URL("/cv-llm.txt", request.url));
      const textBody = await response.text();
      const tokens = Math.ceil(textBody.length / 4);
      const newHeaders = new Headers(response.headers);
      newHeaders.set("Content-Type", "text/markdown; charset=utf-8");
      newHeaders.set("x-markdown-tokens", String(tokens));
      newHeaders.set("Vary", "Accept");
      newHeaders.set("X-Content-Negotiated-By", "Cloudflare-Pages-Agent-Middleware");
      return new Response(textBody, { status: 200, headers: newHeaders });
    }
  }

  // 2. Pass through all other requests, but ensure security and discovery headers are preserved/injected
  const response = await next();
  const newHeaders = new Headers(response.headers);

  // Ensure security nosniff header on all assets
  newHeaders.set("X-Content-Type-Options", "nosniff");

  // Inject RFC 8288 Link headers on HTML responses if not already set by static _headers
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
