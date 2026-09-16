/**
 * Rockville UX small batch (2026-09-16): hero CTAs before the trust pills on the three remaining Rockville
 * service pages (deep already did), StickyMobileCTA gets an optional `quoteHref` (shared default untouched; the bar
 * mounts only after hydration on scroll, so this is href coherence, not a no-JS fallback),
 * the Montgomery County guide's three CTAs point at the service page's own #quote, StickyCTA gets an
 * optional `to` (shared default untouched). Pages are rendered through the prerender providers.
 */
import { describe, it, expect, vi } from "vitest";
import { Suspense, act } from "react";
import { renderToString } from "react-dom/server";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, StaticRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "@/AppRoutes";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import StickyCTA from "@/components/blog/StickyCTA";

vi.mock("@/lib/analytics", () => ({ trackPhoneClick: vi.fn(), trackBookNowClick: vi.fn() }));

function renderRoute(url: string) {
  const html = renderToString(
    <HelmetProvider>
      <QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <Suspense fallback={null}><AppRoutes /></Suspense>
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
  return html.match(/<main[^>]*>([\s\S]*)<\/main>/)?.[1] ?? html;
}

function revealSticky() {
  Object.defineProperty(window, "scrollY", { value: 600, configurable: true });
  act(() => { window.dispatchEvent(new Event("scroll")); });
}

describe("StickyMobileCTA — shared default preserved, page-local override", () => {
  it("default EN href stays /contact#quote", () => {
    render(<MemoryRouter initialEntries={["/locations/bethesda-md/house-cleaning"]}><StickyMobileCTA /></MemoryRouter>);
    revealSticky();
    expect(screen.getByRole("link", { name: /Free Quote/ })).toHaveAttribute("href", "/contact#quote");
  });
  it("default ES href stays /es/contacto#cotizacion", () => {
    render(<MemoryRouter initialEntries={["/es/areas/rockville-md"]}><StickyMobileCTA /></MemoryRouter>);
    revealSticky();
    expect(screen.getByRole("link", { name: /Cotización Gratis/ })).toHaveAttribute("href", "/es/contacto#cotizacion");
  });
  it("quoteHref=\"#quote\" becomes the native href; call link and dismiss untouched", () => {
    render(<MemoryRouter initialEntries={["/locations/rockville-md/deep-cleaning"]}><StickyMobileCTA quoteHref="#quote" /></MemoryRouter>);
    revealSticky();
    expect(screen.getByRole("link", { name: /Free Quote/ })).toHaveAttribute("href", "#quote");
    expect(screen.getByRole("link", { name: /Call us/ })).toHaveAttribute("href", "tel:+12407042551");
    expect(screen.getByRole("button", { name: /Dismiss/ })).toBeInTheDocument();
  });
});

describe("StickyCTA (blog desktop pill) — shared default preserved, guide override", () => {
  it("defaults to /#quote", () => {
    render(<MemoryRouter><StickyCTA /></MemoryRouter>);
    revealSticky();
    expect(screen.getByRole("link", { name: /Get Free Quote/ })).toHaveAttribute("href", "/#quote");
  });
  it("accepts a destination", () => {
    render(<MemoryRouter><StickyCTA to="/services/post-construction-cleaning#quote" /></MemoryRouter>);
    revealSticky();
    expect(screen.getByRole("link", { name: /Get Free Quote/ })).toHaveAttribute("href", "/services/post-construction-cleaning#quote");
  });
});

describe("Rockville service pages — hero CTAs rendered before the trust pills", () => {
  const PAGES = ["post-construction-cleaning", "recurring-cleaning", "deep-cleaning", "move-out-cleaning"];
  for (const slug of PAGES) {
    it(`/locations/rockville-md/${slug}`, () => {
      const main = renderRoute(`/locations/rockville-md/${slug}`);
      const cta = main.indexOf('href="#quote"');
      const pills = main.indexOf("Latino-Owned &amp; Operated");
      expect(cta).toBeGreaterThan(-1);
      expect(pills).toBeGreaterThan(-1);
      expect(cta).toBeLessThan(pills);
      expect(main).toContain("max-w-md flex-col"); // stackCtas layout
      expect(main).toMatch(/<h1[^>]*>[^<]*Rockville, MD<\/h1>/);
    });
  }
  it("control: Bethesda house page keeps the shared default order (pills before CTAs)", () => {
    const main = renderRoute("/locations/bethesda-md/house-cleaning");
    const cta = main.indexOf('href="#quote"');
    const pills = main.indexOf("Latino-Owned &amp; Operated");
    if (cta > -1 && pills > -1) expect(pills).toBeLessThan(cta);
  });
});

describe("Montgomery County post-construction guide — CTAs go to the service page #quote", () => {
  it("hero, inline and final CTAs use /services/post-construction-cleaning#quote; other links unchanged", () => {
    const main = renderRoute("/resources/post-construction-cleaning-montgomery-county-md");
    const target = 'href="/services/post-construction-cleaning#quote"';
    expect(main.split(target).length - 1).toBe(3);
    expect(main).not.toContain('href="/#quote"');
    expect(main.split('href="/services/post-construction-cleaning"').length - 1).toBe(2); // the two plain service links stay
    expect(main).toContain('href="/locations/rockville-md/post-construction-cleaning"');
    expect(main).toContain('href="/locations/silver-spring-md/post-construction-cleaning"');
  });
  it("the service page exposes the #quote section with Post-Construction preselected", () => {
    const main = renderRoute("/services/post-construction-cleaning");
    expect(main).toContain('id="quote"');
    expect(main).toContain("Post-Construction Cleaning");
  });
});
