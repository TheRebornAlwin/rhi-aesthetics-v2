const FRESHA_BASE = "https://www.fresha.com";

// Headers that block iframe embedding
const BLOCKED_HEADERS = [
  "content-security-policy",
  "x-frame-options",
  "x-content-type-options",
  "cross-origin-embedder-policy",
  "cross-origin-opener-policy",
  "cross-origin-resource-policy",
];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const allowedOrigins = (env.ALLOWED_ORIGINS || "").split(",");
    const origin = request.headers.get("Origin") || "";

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(origin, allowedOrigins),
      });
    }

    // Build the Fresha URL from the incoming path
    // e.g. /a/rhiaesthetics-eastleigh-... -> https://www.fresha.com/a/rhiaesthetics-eastleigh-...
    const freshaPath = url.pathname + url.search;
    const freshaUrl = FRESHA_BASE + freshaPath;

    // Forward the request to Fresha
    const freshaRequest = new Request(freshaUrl, {
      method: request.method,
      headers: forwardHeaders(request.headers),
      body: request.method !== "GET" && request.method !== "HEAD" ? request.body : undefined,
      redirect: "follow",
    });

    let response;
    try {
      response = await fetch(freshaRequest);
    } catch (err) {
      return new Response(`Proxy error: ${err.message}`, { status: 502 });
    }

    // Clone headers and strip the ones that block iframing
    const newHeaders = new Headers(response.headers);
    for (const header of BLOCKED_HEADERS) {
      newHeaders.delete(header);
    }

    // Add CORS headers
    const cors = corsHeaders(origin, allowedOrigins);
    for (const [key, value] of Object.entries(cors)) {
      newHeaders.set(key, value);
    }

    // For HTML responses, rewrite relative URLs to absolute so assets still load
    const contentType = newHeaders.get("content-type") || "";
    if (contentType.includes("text/html")) {
      let html = await response.text();

      // Rewrite relative URLs to point to Fresha directly
      // href="/something" -> href="https://www.fresha.com/something"
      html = html.replace(/(href|src|action)="\/(?!\/)/g, `$1="${FRESHA_BASE}/`);

      // Rewrite url(/something) in inline CSS
      html = html.replace(/url\(\/(?!\/)/g, `url(${FRESHA_BASE}/`);

      return new Response(html, {
        status: response.status,
        headers: newHeaders,
      });
    }

    // For non-HTML (JS, CSS, images), pass through with cleaned headers
    return new Response(response.body, {
      status: response.status,
      headers: newHeaders,
    });
  },
};

// Build headers to forward to Fresha (strip host-specific headers)
function forwardHeaders(incoming) {
  const headers = new Headers();
  for (const [key, value] of incoming.entries()) {
    const lower = key.toLowerCase();
    if (lower === "host" || lower === "cf-connecting-ip" || lower === "cf-ray") continue;
    headers.set(key, value);
  }
  headers.set("Host", "www.fresha.com");
  headers.set("Referer", "https://www.fresha.com/");
  headers.set("Origin", "https://www.fresha.com");
  return headers;
}

// CORS headers - only allow listed origins
function corsHeaders(origin, allowedOrigins) {
  const headers = {
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Max-Age": "86400",
  };

  if (allowedOrigins.includes(origin) || allowedOrigins.includes("*")) {
    headers["Access-Control-Allow-Origin"] = origin;
  }

  return headers;
}
