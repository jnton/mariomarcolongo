// functions/_middleware.ts
export const onRequest: PagesFunction = async (context) => {
    const { request, next, env } = context;
    const acceptHeader = request.headers.get("Accept")?.toLowerCase() || "";

    if (acceptHeader.includes("text/markdown")) {
        const url = new URL(request.url);
        url.searchParams.delete("_fmt"); // Clean cache-split param

        // Try mapping to .md files
        const path = url.pathname === "/" ? "/index.md" : url.pathname.replace(/\/$/, "") + ".md";

        try {
            const assetResponse = await env.ASSETS.fetch(new Request(new URL(path, url.origin)));
            if (assetResponse.status === 200) {
                const headers = new Headers(assetResponse.headers);
                headers.set("Content-Type", "text/markdown; charset=utf-8");
                headers.set("Content-Signal", "ai-train=yes, search=yes, ai-input=yes");
                return new Response(assetResponse.body, { status: 200, headers });
            }
        } catch { }
    }

    return await next();
};