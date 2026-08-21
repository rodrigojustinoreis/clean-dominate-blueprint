/**
 * Canonical URL enforcement at the edge.
 *
 * Netlify normalizes paths before evaluating redirect rules, which makes a
 * conventional `/path/ -> /path` rule unsafe: an exact rule can also match the
 * already-canonical URL and redirect it to itself. Edge Functions receive the
 * original request first, so trailing slashes and legacy Wix query parameters
 * can be removed without loops or redirect chains.
 */
export default async function canonicalUrl(
  request: Request,
  context: { next: () => Promise<Response> },
): Promise<Response> {
  const url = new URL(request.url);
  let redirect = false;

  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "");
    redirect = true;
  }

  const hasLegacyBlogQuery =
    url.searchParams.has("blog") || url.searchParams.has("blogcategory");

  if (hasLegacyBlogQuery) {
    if (url.pathname === "/") {
      url.pathname = "/resources";
    }
    url.searchParams.delete("blog");
    url.searchParams.delete("blogcategory");
    redirect = true;
  }

  if (redirect) {
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}

export const config = {
  path: "/*",
  excludedPath: [
    "/api/*",
    "/.netlify/*",
    "/*.css",
    "/*.js",
    "/*.mjs",
    "/*.map",
    "/*.xml",
    "/*.txt",
    "/*.json",
    "/*.png",
    "/*.jpg",
    "/*.jpeg",
    "/*.webp",
    "/*.svg",
    "/*.ico",
    "/*.woff",
    "/*.woff2",
  ],
};
