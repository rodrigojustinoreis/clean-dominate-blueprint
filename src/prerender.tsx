import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { createElement } from "react";

// Import all pages eagerly for prerendering
import Index from "./pages/Index";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import ServicePage from "./pages/ServicePage";
import LocationHub from "./pages/LocationHub";
import CityPage from "./pages/CityPage";
import FAQPage from "./pages/FAQPage";
import ServiceLocationPage from "./pages/ServiceLocationPage";
import NotFound from "./pages/NotFound";

import { slCities, slServices } from "./data/service-locations";

// Generate all routes for prerendering
function getAllRoutes(): string[] {
  const routes: string[] = [
    "/",
    "/about",
    "/reviews",
    "/contact",
    "/faq",
    "/maryland",
    "/virginia",
    "/washington-dc",
  ];

  // Service pages
  const serviceSlugs = [
    "house-cleaning", "deep-cleaning", "move-out-cleaning",
    "recurring-cleaning", "eco-friendly-cleaning",
  ];
  for (const s of serviceSlugs) {
    routes.push(`/services/${s}`);
  }

  // City pages
  const citySlugs = [
    "rockville-md", "bethesda-md", "silver-spring-md", "gaithersburg-md",
    "germantown-md", "frederick-md", "potomac-md", "kensington-md",
    "chevy-chase-md", "college-park-md", "laurel-md", "bowie-md",
    "takoma-park-md", "arlington-va", "alexandria-va", "fairfax-va",
    "mclean-va", "reston-va", "washington-dc",
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

  return routes;
}

// Route matcher for prerendering
function getRouteElement(path: string) {
  const { Routes, Route } = require("react-router-dom");

  return createElement(Routes, null,
    createElement(Route, { path: "/", element: createElement(Index) }),
    createElement(Route, { path: "/about", element: createElement(About) }),
    createElement(Route, { path: "/reviews", element: createElement(Reviews) }),
    createElement(Route, { path: "/contact", element: createElement(Contact) }),
    createElement(Route, { path: "/services/:slug", element: createElement(ServicePage) }),
    createElement(Route, { path: "/faq", element: createElement(FAQPage) }),
    createElement(Route, { path: "/:stateSlug", element: createElement(LocationHub) }),
    createElement(Route, { path: "/locations/:slug/:serviceSlug", element: createElement(ServiceLocationPage) }),
    createElement(Route, { path: "/locations/:slug", element: createElement(CityPage) }),
    createElement(Route, { path: "*", element: createElement(NotFound) }),
  );
}

export async function prerender(data: { url: string }) {
  const helmetContext: { helmet?: any } = {};
  const queryClient = new QueryClient();

  const app = createElement(
    HelmetProvider,
    { context: helmetContext },
    createElement(
      QueryClientProvider,
      { client: queryClient },
      createElement(
        TooltipProvider,
        null,
        createElement(
          StaticRouter,
          { location: data.url },
          getRouteElement(data.url)
        )
      )
    )
  );

  const html = renderToString(app);

  // Extract helmet meta tags
  const { helmet } = helmetContext;
  const head = helmet
    ? [
        helmet.title?.toString() || "",
        helmet.meta?.toString() || "",
        helmet.link?.toString() || "",
      ].join("\n")
    : "";

  return {
    html,
    head,
    links: getAllRoutes(),
  };
}
