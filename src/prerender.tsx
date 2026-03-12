import { slCities, slServices } from "./data/service-locations";
import { vanityLandingPages } from "./data/vanity-landings";

/**
 * Prerender entry point for vite-prerender-plugin.
 * Exports all routes and a prerender function that captures rendered HTML.
 */

function getAllRoutes(): string[] {
  const routes: string[] = [
    "/",
    "/about",
    "/reviews",
    "/contact",
    "/faq",
    "/blog",
    "/blog/eco-cleaning-tips-maryland-homes",
    "/blog/deep-cleaning-checklist-dmv-homeowners",
    "/blog/how-to-choose-cleaning-service-silver-spring",
    "/blog/eco-cleaning-tips-winters-maryland",
    "/blog/best-cleaning-schedule-busy-families-dmv",
    "/blog/post-renovation-cleaning-guide-maryland",
    "/maryland",
    "/virginia",
    "/washington-dc",
    "/services/house-cleaning",
    "/services/deep-cleaning",
    "/services/move-out-cleaning",
    "/services/recurring-cleaning",
    "/services/eco-friendly-cleaning",
    "/spring-cleaning-md",
    "/privacy-policy",
    "/terms-of-service",
  ];

  // City pages
  const citySlugs = [
    "rockville-md", "bethesda-md", "silver-spring-md", "gaithersburg-md",
    "germantown-md", "frederick-md", "potomac-md", "kensington-md",
    "chevy-chase-md", "college-park-md", "laurel-md", "bowie-md",
    "takoma-park-md", "wheaton-md", "arlington-va", "alexandria-va", "fairfax-va",
    "mclean-va", "reston-va", "washington-dc",
  ];
  for (const c of citySlugs) {
    routes.push(`/locations/${c}`);
  }

  // Service-location combinations (160 pages)
  for (const city of slCities) {
    for (const service of slServices) {
      routes.push(`/locations/${city.slug}/${service.slug}`);
    }
  }

  // Vanity landing pages
  for (const vp of vanityLandingPages) {
    routes.push(`/${vp.slug}`);
  }

  return routes;
}

export async function prerender() {
  const root = typeof document !== "undefined" ? document.getElementById("root") : null;
  return {
    html: root?.innerHTML || "",
    head: typeof document !== "undefined" ? document.head.innerHTML : "",
    links: getAllRoutes(),
  };
}
