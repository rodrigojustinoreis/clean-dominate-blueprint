// Single source of truth for EN↔ES URL mapping.
// Used by: LanguageSwitcher, useSEO (hreflang), sitemap generator.
// IMPORTANT: add BOTH directions when adding a new page.

export const ROUTE_MAP_EN_TO_ES: Record<string, string> = {
  "/": "/es/",
  "/about": "/es/nosotros",
  "/contact": "/es/contacto",
  "/services/house-cleaning": "/es/limpieza-de-casas",
  "/services/deep-cleaning": "/es/limpieza-profunda",
  "/services/move-out-cleaning": "/es/limpieza-de-mudanza",
  "/services/airbnb-cleaning": "/es/limpieza-airbnb",
  "/services/post-construction-cleaning": "/es/limpieza-post-construccion",
  "/services/recurring-cleaning": "/es/limpieza-recurrente",
  "/locations/silver-spring-md": "/es/areas/silver-spring-md",
  "/locations/wheaton-md": "/es/areas/wheaton-md",
  "/locations/rockville-md": "/es/areas/rockville-md",
  "/locations/gaithersburg-md": "/es/areas/gaithersburg-md",
  "/locations/germantown-md": "/es/areas/germantown-md",
  "/locations/aspen-hill-md": "/es/areas/aspen-hill-md",
  "/locations/takoma-park-md": "/es/areas/takoma-park-md",
  "/locations/montgomery-village-md": "/es/areas/montgomery-village-md",
};

export const ROUTE_MAP_ES_TO_EN: Record<string, string> = Object.fromEntries(
  Object.entries(ROUTE_MAP_EN_TO_ES).map(([en, es]) => [es, en])
);

export function getRoutePair(pathname: string): { en: string; es: string } | null {
  // React Router v6 strips trailing slash from /es/ → /es in StaticRouter
  const p = pathname === "/es" ? "/es/" : pathname;
  if (ROUTE_MAP_EN_TO_ES[p]) return { en: p, es: ROUTE_MAP_EN_TO_ES[p] };
  if (ROUTE_MAP_ES_TO_EN[p]) return { en: ROUTE_MAP_ES_TO_EN[p], es: p };
  return null;
}

export function getCanonicalUrl(pathname: string): string {
  return `https://capitalcleancare.com${pathname}`;
}
