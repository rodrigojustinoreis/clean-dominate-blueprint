import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "./AppRoutes";
import { slCities, slServices } from "./data/service-locations";
import { vanityLandingPages } from "./data/vanity-landings";

function getAllRoutes(): string[] {
  const routes: string[] = [
    "/",
    "/about",
    "/reviews",
    "/contact",
    "/faq",
    "/blog",
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
    "/blog/how-to-remove-tough-stains-from-mattresses-eco-friendly-april-2026",
    "/blog/how-to-clean-bathroom-professionally-maryland-spring-2026",
    "/blog/deep-cleaning-tips-maryland-homes-spring-prep",
    "/blog/how-to-deep-clean-a-stove-maryland",
    "/blog/how-to-clean-a-bathroom-step-by-step",
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
  ];

  // City pages
  const citySlugs = [
    "rockville-md", "bethesda-md", "silver-spring-md", "gaithersburg-md",
    "germantown-md", "frederick-md", "potomac-md", "kensington-md",
    "chevy-chase-md", "north-bethesda-md", "college-park-md", "laurel-md", "bowie-md",
    "olney-md", "hyattsville-md", "takoma-park-md", "burtonsville-md",
    "montgomery-village-md", "wheaton-md", "arlington-va", "alexandria-va", "fairfax-va",
    "mclean-va", "reston-va", "vienna-va", "tysons-va", "washington-dc", "washington-dc-ne",
    "montgomery-county-md", "frederick-county-md", "howard-county-md", "prince-georges-county-md",
    "columbia-md", "ellicott-city-md", "clarksburg-md", "damascus-md",
    "urbana-md", "new-market-md",
    "capitol-hill-dc", "georgetown-dc", "dupont-circle-dc", "adams-morgan-dc", "downtown-dc",
    "falls-church-va", "shaw-dc", "columbia-heights-dc", "navy-yard-dc", "herndon-va", "annandale-va",
  ];
  for (const c of citySlugs) {
    routes.push(`/locations/${c}`);
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
    head: { lang: "en", title: titleText, elements },
    links: getAllRoutes(),
  };
}
