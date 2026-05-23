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

export function isAllowlistedServiceLocation(
  citySlug: string | undefined,
  serviceSlug: string | undefined
): boolean {
  if (!citySlug || !serviceSlug) return false;
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
  return paths;
}
