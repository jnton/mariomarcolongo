/**
 * Cloudflare Worker for Agent-Ready HTTP Negotiation & Discovery
 * Intercepts requests for `Accept: text/markdown`, stripping cache-key parameters
 * and mapping routes to pristine `.md` replicas generated at build time.
 */

export default {
  async fetch(request, env, ctx) {
    const acceptHeader = (request.headers.get("Accept") || "").toLowerCase();

    // 1. Content Negotiation
    const wantsMarkdown = acceptHeader.includes("text/markdown") &&
      (!acceptHeader.includes("text/html") || acceptHeader.indexOf("text/markdown") <= acceptHeader.indexOf("text/html"));

    if (wantsMarkdown) {
      const url = new URL(request.url);

      // Cache Bypass: Strip _fmt query parameter injected upstream by Transform Rule
      if (url.searchParams.has("_fmt")) {
        url.searchParams.delete("_fmt");
      }

      let pathname = url.pathname;
      let candidatePaths = [];

      if (pathname === "/" || pathname === "" || pathname === "/index.html") {
        candidatePaths = ["/index.md"];
      } else if (pathname.endsWith(".html")) {
        candidatePaths = [pathname.replace(/\.html$/, ".md")];
      } else if (pathname.endsWith(".md")) {
        candidatePaths = [pathname];
      } else if (pathname.endsWith("/")) {
        candidatePaths = [`${pathname}index.md`, `${pathname.slice(0, -1)}.md`];
      } else {
        candidatePaths = [`${pathname}.md`, `${pathname}/index.md`];
      }

      for (const candidatePath of candidatePaths) {
        const assetUrl = new URL(url.toString());
        assetUrl.pathname = candidatePath;

        try {
          const assetRequest = new Request(assetUrl.toString(), {
            method: request.method,
            headers: request.headers
          });

          const assetResponse = await env.ASSETS.fetch(assetRequest);

          if (assetResponse && assetResponse.ok) {
            const newHeaders = new Headers(assetResponse.headers);
            newHeaders.set("Content-Type", "text/markdown; charset=utf-8");
            newHeaders.set("Content-Signal", "ai-train=yes, search=yes, ai-input=yes");
            newHeaders.set("Vary", "Accept");
            newHeaders.set("Cache-Control", "public, max-age=3600, s-maxage=86400");

            return new Response(assetResponse.body, {
              status: assetResponse.status,
              statusText: assetResponse.statusText,
              headers: newHeaders
            });
          }
        } catch (e) {
          // Silently continue to next candidate
        }
      }
    }

    // 2. Fallback: Fail open by fetching standard HTML from ASSETS
    const response = await env.ASSETS.fetch(request);
    const newHeaders = new Headers(response.headers);

    newHeaders.set("X-Content-Type-Options", "nosniff");

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
};