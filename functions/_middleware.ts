/**
 * Cloudflare Pages Middleware for Agent-Ready HTTP Negotiation & Discovery
 * 
 * Intercepts requests where `Accept: text/markdown` is requested, stripping `_fmt`
 * cache-key splitting query parameters and mapping routes to pristine `.md` replicas
 * generated during build time.
 */

interface Env {
  ASSETS: {
    fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
  };
}

interface EventContext<Env, P extends string, Data> {
  request: Request;
  env: Env;
  next: () => Promise<Response>;
  data: Data;
}

function getMarkdownCandidatePaths(pathname: string): string[] {
  if (pathname === "/" || pathname === "" || pathname === "/index.html") {
    return ["/index.md"];
  }
  if (pathname.endsWith(".html")) {
    return [pathname.replace(/\.html$/, ".md")];
  }
  if (pathname.endsWith(".md")) {
    return [pathname];
  }
  if (pathname.endsWith("/")) {
    const trimmed = pathname.slice(0, -1);
    return [`${pathname}index.md`, `${trimmed}.md`];
  }
  return [`${pathname}.md`, `${pathname}/index.md`];
}

export async function onRequest(context: EventContext<Env, any, any>): Promise<Response> {
  const { request, next, env } = context;
  const acceptHeader = (request.headers.get("Accept") || "").toLowerCase();

  // 1. Content Negotiation: Check if `Accept: text/markdown` is requested
  const wantsMarkdown = acceptHeader.includes("text/markdown") &&
    (!acceptHeader.includes("text/html") || acceptHeader.indexOf("text/markdown") <= acceptHeader.indexOf("text/html"));

  if (wantsMarkdown) {
    const url = new URL(request.url);

    // Cache Bypass: Strip _fmt query parameter injected upstream by Cloudflare Transform Rule
    if (url.searchParams.has("_fmt")) {
      url.searchParams.delete("_fmt");
    }

    const candidatePaths = getMarkdownCandidatePaths(url.pathname);

    for (const candidatePath of candidatePaths) {
      const assetUrl = new URL(url.toString());
      assetUrl.pathname = candidatePath;

      try {
        const assetResponse = await env.ASSETS.fetch(assetUrl, request);
        if (assetResponse && assetResponse.status === 200) {
          const newHeaders = new Headers(assetResponse.headers);
          newHeaders.set("Content-Type", "text/markdown; charset=utf-8");
          newHeaders.set("Content-Signal", "ai-train=yes, search=yes, ai-input=yes");
          newHeaders.set("Vary", "Accept");
          newHeaders.set("Cache-Control", "public, max-age=3600, s-maxage=86400");

          return new Response(assetResponse.body, {
            status: 200,
            statusText: "OK",
            headers: newHeaders
          });
        }
      } catch (e) {
        // Continue checking next candidate path
      }
    }
  }

  // 2. Fallback: Fail open by returning next() to serve standard HTML
  const response = await next();
  const newHeaders = new Headers(response.headers);

  // Ensure security nosniff header on all assets
  newHeaders.set("X-Content-Type-Options", "nosniff");

  // Preserve discovery Link headers on HTML responses
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
