/**
 * SEO master plan — lot 2, commit A (A02 item 10, CODEX-NEXT-BATCH-CONSENSUS.md / CLAUDE-NEXT-BATCH-ACK.md).
 *
 * The "Move-out cleaning" label of the "What Is Included at Each Cleaning Price Level?" table in the shared cost
 * guide renders as a link to the city's dedicated move-out page only when `CostCity.moveOutPath` is set. Only
 * Rockville sets it; the other four cost guides keep the plain-text label. No other text, price or SEO field changes.
 */
import { describe, it, expect } from "vitest";
import { Suspense } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "@/AppRoutes";
import { COST_CITIES } from "@/data/cost-cities";

function renderRoute(url: string) {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false, staleTime: 0 } } });
  const html = renderToString(
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <Suspense fallback={null}>
              <AppRoutes />
            </Suspense>
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
  const main = html.match(/<main[^>]*>([\s\S]*)<\/main>/)?.[1] ?? html;
  const count = (needle: string) => main.split(needle).length - 1;
  return { main, count };
}

const MOVE_OUT_LINK = '<a class="text-primary underline hover:no-underline" href="/locations/rockville-md/move-out-cleaning"';
const TABLE_ROW_SCOPE = "An empty-home reset with detailed kitchens, bathrooms, floors, cabinets, and selected appliance interiors.";

describe("cost-cities data", () => {
  it("only Rockville declares a move-out path, pointing at its indexable move-out page", () => {
    const withPath = COST_CITIES.filter((c) => c.moveOutPath);
    expect(withPath.map((c) => c.slug)).toEqual(["rockville-md"]);
    expect(withPath[0].moveOutPath).toBe("/locations/rockville-md/move-out-cleaning");
  });
});

describe("/resources/house-cleaning-cost-rockville-md (A02 item 10)", () => {
  const page = renderRoute("/resources/house-cleaning-cost-rockville-md");
  it("renders the existing Move-out cleaning label as a single link to the Rockville move-out page", () => {
    expect(page.count(MOVE_OUT_LINK)).toBe(1);
    expect(page.count('href="/locations/rockville-md/move-out-cleaning"')).toBe(1);
    expect(page.main).toContain(`${MOVE_OUT_LINK} data-discover="true">Move-out cleaning</a></td>`);
    expect(page.count(TABLE_ROW_SCOPE)).toBe(1);
  });
});

describe("controls — the other cost guides keep the plain-text label", () => {
  for (const slug of COST_CITIES.map((c) => c.slug).filter((s) => s !== "rockville-md")) {
    it(`/resources/house-cleaning-cost-${slug} has no move-out link in the table`, () => {
      const page = renderRoute(`/resources/house-cleaning-cost-${slug}`);
      expect(page.count('<td class="px-4 py-4 font-bold text-foreground">Move-out cleaning</td>')).toBe(1);
      expect(page.count("/move-out-cleaning")).toBe(0);
      expect(page.count(TABLE_ROW_SCOPE)).toBe(1);
    });
  }
});
