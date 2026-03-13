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
    "/services/airbnb-cleaning",
    "/services/office-cleaning",
    "/house-cleaning-near-me",
    "/careers",
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
    "montgomery-county-md", "frederick-county-md", "howard-county-md", "prince-georges-county-md",
    "columbia-md", "ellicott-city-md", "clarksburg-md", "damascus-md",
    "urbana-md", "new-market-md",
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
  const head = helmet
    ? [helmet.title?.toString(), helmet.meta?.toString(), helmet.link?.toString()]
        .filter(Boolean)
        .join("\n")
    : "";

  return { html, head, links: getAllRoutes() };
}
