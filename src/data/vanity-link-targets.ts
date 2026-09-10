// Direct internal-link targets for vanity landing slugs that already 301 to a consolidated page
// (internal links batch 3, 2026-09-10). The redirect rules in netlify.toml stay the source of
// truth for the URLs themselves; this map only lets internal links point straight at the final,
// indexable URL instead of passing through the 301 (Google: link consistently to the canonical URL).
//
// Deliberately tiny and dependency-free: it is imported by the home page, which must not pull the
// full vanity-landings / services / blog modules into its bundle. Slug identity (data, prerender,
// sitemap, redirectedVanitySlugs) is untouched; only the href changes.
//
// Kensington intentionally resolves to the indexable city hub, mirroring its 301: the
// /locations/kensington-md/deep-cleaning child is noindex.
export const VANITY_LINK_TARGETS: Readonly<Record<string, string>> = {
  "deep-cleaning-gaithersburg-md": "/locations/gaithersburg-md/deep-cleaning",
  "deep-cleaning-germantown-md": "/locations/germantown-md/deep-cleaning",
  "deep-cleaning-kensington-md": "/locations/kensington-md",
  "eco-cleaning-bethesda-md": "/locations/bethesda-md/eco-friendly-cleaning",
  "eco-cleaning-chevy-chase-md": "/locations/chevy-chase-md/eco-friendly-cleaning",
  "eco-cleaning-potomac-md": "/locations/potomac-md/eco-friendly-cleaning",
  "house-cleaning-silver-spring-md": "/locations/silver-spring-md/house-cleaning",
  "house-cleaning-wheaton-md": "/locations/wheaton-md/house-cleaning",
  "move-out-cleaning-rockville-md": "/locations/rockville-md/move-out-cleaning",
  "recurring-cleaning-columbia-md": "/locations/columbia-md/recurring-cleaning",
};

/** href for a vanity landing slug: the consolidated URL when the slug is redirected, otherwise its own path. */
export function vanityLinkHref(slug: string): string {
  return VANITY_LINK_TARGETS[slug] ?? `/${slug}`;
}

/**
 * Service overview link used by vanity landing pages. "apartment-cleaning" points straight at the
 * house-cleaning overview, mirroring its existing 301 (batch 3). The "eco-friendly-cleaning" case
 * reproduces the overview link the page already used before this batch (behaviour preserved as-is,
 * not reviewed here). Every other service keeps /services/<slug>.
 */
export function serviceOverviewHref(serviceSlug: string): string {
  if (serviceSlug === "apartment-cleaning") return "/services/house-cleaning";
  if (serviceSlug === "eco-friendly-cleaning") return "/services/standard-cleaning";
  return `/services/${serviceSlug}`;
}
