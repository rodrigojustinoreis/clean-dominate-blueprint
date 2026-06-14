// Allowlist of (city, service) pairs that have dedicated TSX pages with unique content.
// Any other combination served through ServiceLocationPage.tsx will be marked noindex
// to prevent thin-content / duplicate-template pages from polluting Google's index.

export const STATIC_CITIES = [
  "rockville-md",
  "bethesda-md",
  "north-bethesda-md",
  "potomac-md",
  "chevy-chase-md",
  "gaithersburg-md",
  "germantown-md",
  "kensington-md",
  "olney-md",
  "silver-spring-md",
  "wheaton-md",
] as const;

export const STATIC_SERVICES = [
  "house-cleaning",
  "recurring-cleaning",
  "deep-cleaning",
  "move-out-cleaning",
  "airbnb-cleaning",
  "office-cleaning",
  "post-construction-cleaning",
  // Kept indexable because Potomac's /eco-friendly-cleaning is the #2 traffic page
  // (pos 2 for "green cleaning services potomac", 4% of total organic traffic).
  // Rendered through the dynamic template but content-overridden in service-location-overrides.ts.
  "eco-friendly-cleaning",
] as const;

export type StaticCity = (typeof STATIC_CITIES)[number];
export type StaticService = (typeof STATIC_SERVICES)[number];

// Specific high-value (city, service) pairs that fall OUTSIDE the STATIC_CITIES grid
// but earn indexation individually: they have proven search demand / conversions and a
// unique-content override in service-location-overrides.ts. Kept as explicit pairs (not
// whole cities) so we never flip an entire off-grid city's 8 service permutations to
// indexable and re-create thin-content zombie pages. Format: "citySlug/serviceSlug".
export const EXTRA_INDEXABLE_PAIRS: ReadonlySet<string> = new Set([
  "arlington-va/deep-cleaning",            // ranked for "deep cleaning arlington", converted, then noindex'd
  "takoma-park-md/eco-friendly-cleaning",  // ranked ~pos 2.4 for eco cleaning Takoma Park, then noindex'd
]);

export function isAllowlistedServiceLocation(
  citySlug: string | undefined,
  serviceSlug: string | undefined
): boolean {
  if (!citySlug || !serviceSlug) return false;
  if (EXTRA_INDEXABLE_PAIRS.has(`${citySlug}/${serviceSlug}`)) return true;
  return (
    (STATIC_CITIES as readonly string[]).includes(citySlug) &&
    (STATIC_SERVICES as readonly string[]).includes(serviceSlug)
  );
}

export function getAllowlistedPaths(): string[] {
  const paths: string[] = [];
  for (const city of STATIC_CITIES) {
    for (const service of STATIC_SERVICES) {
      paths.push(`/locations/${city}/${service}`);
    }
  }
  // Include the off-grid individually-indexable pairs so any sitemap helper that relies
  // on this list stays in sync with isAllowlistedServiceLocation().
  for (const pair of EXTRA_INDEXABLE_PAIRS) {
    paths.push(`/locations/${pair}`);
  }
  return paths;
}
