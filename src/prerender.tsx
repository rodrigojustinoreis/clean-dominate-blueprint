import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "./AppRoutes";
import { slCities, slServices } from "./data/service-locations";
import { vanityLandingPages } from "./data/vanity-landings";
import { cities as locationCities } from "./data/locations";

function getAllRoutes(): string[] {
  const routes: string[] = [
    "/",
    "/services",
    "/about",
    "/reviews",
    "/contact",
    "/gift-cards",
    "/faq",
    "/blog",
    "/blog/how-to-clean-carpet-home-apartment",
    "/blog/how-to-remove-candle-wax-eco-friendly",
    "/blog/how-to-clean-your-washing-machine-eco-friendly",
    "/blog/how-to-get-rid-of-mildew-smell-naturally",
    "/blog/how-to-get-cigarette-smell-out-of-your-house",
    "/blog/how-to-remove-sharpie-safely",
    "/blog/how-to-remove-hard-water-stains-naturally",
    "/blog/how-to-clean-grout-without-bleach",
    "/blog/how-to-clean-oled-tv-screen-safely",
    "/blog/why-pet-skin-allergies-start-in-carpet",
    "/blog/how-to-remove-red-wine-stains",
    "/blog/how-to-get-rid-of-dog-smell-pet-safe",
    "/blog/spring-cleaning-checklist-maryland-2026",
    "/blog/eco-cleaning-tips-maryland-homes",
    "/blog/house-cleaning-prices-maryland-2026",
    "/blog/deep-cleaning-checklist-dmv-homeowners",
    "/blog/airbnb-cleaning-tips-dmv-hosts",
    "/blog/how-to-choose-cleaning-service-silver-spring",
    "/blog/move-out-cleaning-checklist-maryland-tenants",
    "/blog/eco-cleaning-tips-winters-maryland",
    "/blog/best-cleaning-schedule-busy-families-dmv",
    "/blog/remove-pet-hair-odors-dmv-homes",
    "/blog/post-renovation-cleaning-guide-maryland",
    "/blog/recurring-cleaning-weekly-biweekly-monthly",
    "/blog/how-to-clean-windows-streak-free-maryland-homes",
    "/blog/how-to-clean-windows-streak-free-maryland",
    "/blog/how-to-clean-windows-streak-free-maryland-spring",
    "/blog/how-to-clean-windows-streak-free-maryland",
    "/blog/how-to-remove-tough-stains-from-mattresses-eco-friendly-april-2026",
    "/blog/how-to-clean-bathroom-professionally-maryland-spring-2026",
    "/blog/how-to-remove-sticker-residue-natural",
    "/blog/deep-cleaning-tips-maryland-homes-spring-prep",
    "/blog/how-to-deep-clean-a-stove-maryland",
    "/blog/how-to-clean-a-bathroom-step-by-step",
    "/blog/mrs-meyers-clean-day-review-how-to-use",
    "/blog/house-cleaning-bethesda-md",
    "/blog/cleaning-service-arlington-va",
    "/blog/deep-cleaning-rockville-md",
    "/blog/house-cleaning-washington-dc",
    "/blog/cleaning-service-fairfax-va",
    "/blog/cleaning-service-georgetown-dc",
    "/blog/cleaning-service-alexandria-va",
    "/blog/move-in-cleaning-guide-dmv",
    "/blog/allergy-proofing-home-dmv",
    "/blog/fall-cleaning-checklist-maryland",
    "/blog/house-cleaning-gaithersburg-md",
    "/blog/cleaning-service-mclean-va",
    "/blog/cleaning-service-columbia-md",
    "/blog/house-cleaning-potomac-md",
    "/blog/cleaning-service-chevy-chase-md",
    "/blog/house-cleaning-frederick-md",
    "/blog/deep-cleaning-montgomery-county-md",
    "/blog/cleaning-service-reston-va",
    "/blog/office-cleaning-small-business-dmv",
    "/maryland",
    "/virginia",
    "/washington-dc",
    "/services/house-cleaning",
    "/services/deep-cleaning",
    "/services/move-out-cleaning",
    "/services/recurring-cleaning",
    "/services/eco-friendly-cleaning",
    "/services/airbnb-cleaning",
    "/services/office-cleaning",
    "/services/post-construction-cleaning",
    "/house-cleaning-near-me",
    "/why-eco-friendly-cleaning",
    "/careers",
    "/spring-cleaning-md",
    "/privacy-policy",
    "/terms-of-service",
    // Spanish pages — Fase 1 (17 pages)
    "/es/",
    "/es/limpieza-de-casas",
    "/es/limpieza-profunda",
    "/es/limpieza-de-mudanza",
    "/es/limpieza-airbnb",
    "/es/limpieza-post-construccion",
    "/es/limpieza-recurrente",
    "/es/nosotros",
    "/es/contacto",
    "/es/areas/silver-spring-md",
    "/es/areas/wheaton-md",
    "/es/areas/rockville-md",
    "/es/areas/gaithersburg-md",
    "/es/areas/germantown-md",
    "/es/areas/aspen-hill-md",
    "/es/areas/takoma-park-md",
    "/es/areas/montgomery-village-md",
  ];

  // City pages — auto-derived from locations.ts so adding a city there
  // automatically prerenders its hub page. No manual list to maintain.
  for (const city of locationCities) {
    routes.push(`/locations/${city.slug}`);
  }

  // Service-location combinations
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

export async function prerender(data: { url: string }) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false, staleTime: 0 } },
  });

  const helmetContext: Record<string, unknown> = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {/* Toaster and Sonner omitted — use browser APIs, no SEO value */}
          <StaticRouter location={data.url}>
            <AppRoutes />
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  const helmet = (helmetContext as any).helmet;

  // Build head elements Set — serializeElement handles raw strings directly
  const elements = new Set<string>();
  if (helmet) {
    // Canonical and other <link> tags
    const linkStr = helmet.link?.toString();
    if (linkStr) elements.add(linkStr);
    // <meta> tags (page-specific ones from Helmet, not the static index.html ones)
    const metaStr = helmet.meta?.toString();
    if (metaStr) elements.add(metaStr);
    // JSON-LD schema scripts
    const scriptStr = helmet.script?.toString();
    if (scriptStr) elements.add(scriptStr);
    // <noscript> tags
    const noscriptStr = helmet.noscript?.toString();
    if (noscriptStr) elements.add(noscriptStr);
  }

  // Page title from helmet — decode HTML entities before passing to plugin (plugin re-encodes)
  const titleText = helmet?.title?.toString()
    ? (() => {
        const m = helmet.title.toString().match(/<title[^>]*>([\s\S]*?)<\/title>/i);
        if (!m) return "";
        return m[1]
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'");
      })()
    : "";

  return {
    html,
    head: { lang: data.url.startsWith("/es") ? "es" : "en", title: titleText, elements },
    links: getAllRoutes(),
  };
}
