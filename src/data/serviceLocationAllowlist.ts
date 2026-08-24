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
// Impression figures are GSC 16-month historical data — these pages were getting real
// search demand while stuck on noindex (the MD-only STATIC_CITIES grid excluded them).
export const EXTRA_INDEXABLE_PAIRS: ReadonlySet<string> = new Set([
  "arlington-va/deep-cleaning",            // ranked for "deep cleaning arlington", converted, then noindex'd
  "takoma-park-md/eco-friendly-cleaning",  // ranked ~pos 2.4 for eco cleaning Takoma Park, then noindex'd
  // Tier 1 — high demand
  "fairfax-va/house-cleaning",             // 829 impr
  "alexandria-va/house-cleaning",          // 705 impr
  "arlington-va/house-cleaning",           // 705 impr
  "mclean-va/house-cleaning",              // 234 impr
  "washington-dc/airbnb-cleaning",         // 138 impr
  "washington-dc/recurring-cleaning",      // 113 impr
  "burtonsville-md/post-construction-cleaning", // pos 8.8
  "damascus-md/office-cleaning",           // pos 5.3
  "kentlands-md/house-cleaning",           // pos 6
  // Tier 2 — moderate demand
  "arlington-va/recurring-cleaning",       // 90 impr
  "montgomery-village-md/house-cleaning",  // 70 impr
  "capitol-hill-dc/house-cleaning",        // 37 impr
  "columbia-md/recurring-cleaning",        // 30 impr
  "burtonsville-md/deep-cleaning",         // 21 impr, pos 11
  // Tier 3 — long tail
  "ellicott-city-md/deep-cleaning",        // 17 impr
  "damascus-md/move-out-cleaning",         // 15 impr
  "downtown-dc/house-cleaning",            // 10 impr
  "dupont-circle-dc/house-cleaning",       // 9 impr
  "alexandria-va/office-cleaning",         // 7 impr
  "ellicott-city-md/recurring-cleaning",   // 4 impr
  "adams-morgan-dc/house-cleaning",        // 2 impr
  "mount-airy-md/house-cleaning",          // 2 impr
  "boyds-md/deep-cleaning",                // 1 impr
  "navy-yard-dc/eco-friendly-cleaning",    // 1 impr
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
