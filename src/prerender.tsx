import { Suspense } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "./AppRoutes";
import { slCities, slServices } from "./data/service-locations";
import { vanityLandingPages } from "./data/vanity-landings";
import { cities as locationCities } from "./data/locations";
import { RESOURCE_CATEGORIES } from "./data/resource-categories";

function getAllRoutes(): string[] {
  const routes: string[] = [
    "/",
    "/services",
    "/about",
    "/reviews",
    "/contact",
    "/gift-cards",
    "/faq",
    "/pricing",
    "/resources",
    "/resources/how-to-clean-carpet-home-apartment",
    "/resources/how-to-remove-candle-wax-eco-friendly",
    "/resources/how-to-clean-your-washing-machine-eco-friendly",
    "/resources/how-to-get-rid-of-mildew-smell-naturally",
    "/resources/how-to-get-cigarette-smell-out-of-your-house",
    "/resources/how-to-remove-sharpie-safely",
    "/resources/how-to-remove-hard-water-stains-naturally",
    "/resources/how-to-clean-grout-without-bleach",
    "/resources/how-to-clean-oled-tv-screen-safely",
    "/resources/why-pet-skin-allergies-start-in-carpet",
    "/resources/pet-dander-air-quality",
    "/resources/pet-sneezing-household-dust",
    "/resources/allergen-free-home-dog-cat-owners",
    "/resources/seasonal-vs-household-pet-allergies",
    "/resources/hepa-filters-pets-asthma",
    "/resources/cleaning-product-poisoning-in-pets",
    "/resources/what-pet-safe-cleaning-really-means",
    "/resources/how-often-to-clean-pet-bowls-and-toys",
    "/resources/choose-pet-safe-cleaning-company",
    "/resources/house-cleaning-cost-bethesda-md",
    "/resources/house-cleaning-cost-rockville-md",
    "/resources/house-cleaning-cost-silver-spring-md",
    "/resources/house-cleaning-cost-arlington-va",
    "/resources/house-cleaning-cost-alexandria-va",
    "/resources/deep-cleaning-vs-regular-cleaning",
    "/resources/what-is-included-in-a-deep-cleaning",
    "/resources/signs-aging-parent-needs-help-housekeeping",
    "/resources/clean-home-fall-prevention-seniors",
    "/resources/cleaning-service-vs-caregiver-elderly",
    "/resources/how-to-hire-cleaning-service-elderly-parents",
    "/resources/house-cleaning-seniors-silver-spring-leisure-world",
    "/resources/aging-in-place-montgomery-county-cleaning",
    "/resources/house-cleaning-for-seniors",
    "/resources/free-house-cleaning-for-seniors",
    "/resources/caregiver-guide-house-cleaning-aging-parent",
    "/resources/house-cleaning-after-hospital-surgery-seniors",
    "/resources/real-deep-cleaning-project-bethesda-home",
    "/resources/how-often-should-you-hire-a-cleaning-service",
    "/resources/one-time-vs-recurring-cleaning",
    "/resources/how-much-does-deep-cleaning-cost",
    "/resources/what-is-included-in-a-standard-cleaning",
    "/resources/is-professional-house-cleaning-worth-it",
    "/resources/move-out-cleaning-cost-maryland",
    "/resources/best-house-cleaning-service-rockville-md",
    "/resources/best-house-cleaning-service-silver-spring-md",
    "/resources/house-cleaning-guide-germantown-md",
    "/resources/house-cleaning-guide-clarksburg-md",
    "/resources/post-construction-cleaning-montgomery-county-md",
    "/resources/best-house-cleaning-service-bethesda-md",
    "/resources/deep-cleaning-cost-maryland",
    "/resources/how-to-clean-up-after-a-party",
    "/resources/cleaning-company-vs-independent-cleaner",
    "/resources/local-cleaning-company-vs-franchise",
    "/resources/questions-to-ask-before-hiring-house-cleaner",
    "/resources/why-first-house-cleaning-costs-more",
    "/resources/flat-rate-vs-hourly-house-cleaning",
    "/resources/red-flags-house-cleaning-service",
    "/resources/hidden-fees-house-cleaning",
    "/resources/house-too-messy-for-cleaning-service",
    "/resources/how-long-does-deep-cleaning-take",
    "/resources/how-often-should-you-deep-clean",
    "/resources/deep-cleaning-before-selling-house",
    "/resources/deep-cleaning-for-apartments",
    "/resources/eco-friendly-deep-cleaning",
    "/resources/airbnb-cleaning-checklist",
    "/resources/airbnb-cleaning-fee",
    "/resources/kitchen-cleaning-checklist",
    "/resources/living-room-cleaning-checklist",
    "/resources/how-much-tip-house-cleaner",
    "/resources/move-in-cleaning-checklist",
    "/resources/most-forgotten-areas-when-cleaning",
    "/resources/why-dust-builds-up-maryland-homes",
    "/resources/how-to-prepare-home-for-professional-cleaning",
    "/resources/how-to-keep-house-clean-between-cleanings",
    "/resources/summer-cleaning-checklist-maryland",
    "/resources/holiday-cleaning-checklist-dmv",
    "/resources/cleaning-tips-for-working-professionals",
    "/resources/how-to-remove-red-wine-stains",
    "/resources/how-to-get-rid-of-dog-smell-pet-safe",
    "/resources/spring-cleaning-checklist-maryland-2026",
    "/resources/eco-cleaning-tips-maryland-homes",
    "/resources/house-cleaning-prices-maryland-2026",
    "/resources/deep-cleaning-checklist-dmv-homeowners",
    "/resources/airbnb-cleaning-tips-dmv-hosts",
    "/resources/how-to-choose-cleaning-service-silver-spring",
    "/resources/move-out-cleaning-checklist-maryland-tenants",
    "/resources/eco-cleaning-tips-winters-maryland",
    "/resources/best-cleaning-schedule-busy-families-dmv",
    "/resources/remove-pet-hair-odors-dmv-homes",
    "/resources/post-renovation-cleaning-guide-maryland",
    "/resources/recurring-cleaning-weekly-biweekly-monthly",
    "/resources/how-to-remove-sticker-residue-natural",
    "/resources/deep-cleaning-tips-maryland-homes-spring-prep",
    "/resources/how-to-deep-clean-a-stove-maryland",
    "/resources/how-to-clean-a-bathroom-step-by-step",
    "/resources/mrs-meyers-clean-day-review-how-to-use",
    "/resources/house-cleaning-bethesda-md",
    "/resources/cleaning-service-arlington-va",
    "/resources/deep-cleaning-rockville-md",
    "/resources/house-cleaning-washington-dc",
    "/resources/cleaning-service-fairfax-va",
    "/resources/cleaning-service-georgetown-dc",
    "/resources/cleaning-service-alexandria-va",
    "/resources/move-in-cleaning-guide-dmv",
    "/resources/allergy-proofing-home-dmv",
    "/resources/fall-cleaning-checklist-maryland",
    "/resources/house-cleaning-gaithersburg-md",
    "/resources/cleaning-service-mclean-va",
    "/resources/cleaning-service-columbia-md",
    "/resources/house-cleaning-potomac-md",
    "/resources/cleaning-service-chevy-chase-md",
    "/resources/house-cleaning-frederick-md",
    "/resources/deep-cleaning-montgomery-county-md",
    "/resources/cleaning-service-reston-va",
    "/resources/office-cleaning-small-business-dmv",
    "/maryland",
    "/virginia",
    "/washington-dc",
    "/services/house-cleaning",
    "/services/deep-cleaning",
    "/services/move-out-cleaning",
    "/services/recurring-cleaning",
    "/services/eco-friendly-cleaning",
    "/services/airbnb-cleaning",
    "/services/condo-cleaning",
    "/services/maid-service",
    "/services/kitchen-cleaning",
    "/services/bathroom-cleaning",
    "/services/living-area-cleaning",
    "/checklist",
    "/services/office-cleaning",
    "/services/post-construction-cleaning",
    "/house-cleaning-near-me",
    "/senior-home-cleaning-montgomery-county-md",
    "/senior-home-cleaning-washington-dc",
    "/senior-home-cleaning-northern-virginia",
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

  // Resource Center category indexes — auto-derived from resource-categories.ts so the
  // 10 category pages are always prerendered + in the sitemap. (Replaces the 4 legacy
  // /resources/topic/* hubs, which are now 301'd to their category in netlify.toml.)
  for (const category of RESOURCE_CATEGORIES) {
    routes.push(`/resources/${category.slug}`);
  }

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

  // Vanity landing pages — except the 5 consolidated via 301 in netlify.toml
  // (Lote 3B Group 1). Excluding them here drops them from prerender + sitemap.
  const REDIRECTED_VANITY = new Set([
    "house-cleaning-silver-spring-md",
    "eco-cleaning-chevy-chase-md",
    "eco-cleaning-potomac-md",
    "eco-cleaning-bethesda-md",
    "recurring-cleaning-columbia-md",
  ]);
  for (const vp of vanityLandingPages) {
    if (REDIRECTED_VANITY.has(vp.slug)) continue;
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
            <Suspense fallback={null}>
              <AppRoutes />
            </Suspense>
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
