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

// jsdom has no ResizeObserver; a client-only widget on the full routes calls it after mount.
// Test-local stub (not in the global setup) so the route-level mounts below can run.
class ObserverStub { observe() {} unobserve() {} disconnect() {} takeRecords() { return []; } }
const g = globalThis as unknown as { ResizeObserver?: unknown; IntersectionObserver?: unknown };
if (typeof g.ResizeObserver === "undefined") g.ResizeObserver = ObserverStub;
if (typeof g.IntersectionObserver === "undefined") g.IntersectionObserver = ObserverStub;

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
  it("control: Bethesda house page (HeroLocation without ctaBeforePills) keeps pills before CTAs", () => {
    const main = renderRoute("/locations/bethesda-md/house-cleaning");
    const cta = main.indexOf('href="#quote"');
    const pills = main.indexOf("Latino-Owned &amp; Operated");
    expect(cta).toBeGreaterThan(-1);
    expect(pills).toBeGreaterThan(-1);
    expect(pills).toBeLessThan(cta);
    expect(main).not.toContain("max-w-md flex-col");
  });
});

describe("Layout owns the single sticky mobile bar — one bar per route, page-local href, dismiss removes it", () => {
  function mountRoute(url: string) {
    return render(
      <HelmetProvider>
        <QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}>
          <TooltipProvider>
            <MemoryRouter initialEntries={[url]}>
              <Suspense fallback={null}><AppRoutes /></Suspense>
            </MemoryRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    );
  }
  const bars = () => [...document.querySelectorAll("div.fixed.bottom-0")].filter((d) => /Free Quote|Cotización Gratis/.test(d.textContent ?? ""));
  const CASES: [string, string][] = [
    ["/locations/rockville-md/post-construction-cleaning", "#quote"],
    ["/locations/rockville-md/recurring-cleaning", "#quote"],
    ["/locations/rockville-md/deep-cleaning", "#quote"],
    ["/locations/rockville-md/move-out-cleaning", "#quote"],
    ["/resources/post-construction-cleaning-montgomery-county-md", "/services/post-construction-cleaning#quote"],
    ["/locations/bethesda-md/house-cleaning", "/contact#quote"], // control: shared default
    ["/es/areas/rockville-md", "/es/contacto#cotizacion"], // control: Spanish default
  ];
  for (const [url, href] of CASES) {
    it(`${url} → exactly one bar with href ${href}`, () => {
      const { unmount } = mountRoute(url);
      // jsdom reports every rect as 0×0 at (0,0); the bar hides itself when #quote is "in view", so place the
      // page's quote section far below the fold the way a real scroll-from-top would see it.
      const quoteSection = document.getElementById("quote");
      if (quoteSection) quoteSection.getBoundingClientRect = () => ({ top: 5000, bottom: 5600, left: 0, right: 0, width: 0, height: 600, x: 0, y: 5000, toJSON: () => ({}) }) as DOMRect;
      revealSticky();
      const found = bars();
      expect(found).toHaveLength(1);
      const quote = [...found[0].querySelectorAll("a")].find((a) => /Free Quote|Cotización Gratis/.test(a.textContent ?? ""));
      expect(quote).toHaveAttribute("href", href);
      expect(found[0].querySelectorAll('a[href^="tel:+12407042551"]')).toHaveLength(1);
      const dismiss = found[0].querySelector('button[aria-label="Dismiss"]') as HTMLButtonElement;
      expect(dismiss).not.toBeNull();
      act(() => { dismiss.click(); });
      expect(bars()).toHaveLength(0);
      unmount();
    });
  }
});

describe("LocationSocialProof closing CTA — shorter labels only on the four Rockville pages", () => {
  const CASES: [string, string][] = [
    ["/locations/rockville-md/post-construction-cleaning", "Get a Post-Construction Quote →"],
    ["/locations/rockville-md/recurring-cleaning", "Get a Recurring Cleaning Quote →"],
    ["/locations/rockville-md/deep-cleaning", "Get a Deep Cleaning Quote →"],
    ["/locations/rockville-md/move-out-cleaning", "Get a Move-Out Cleaning Quote →"],
  ];
  for (const [url, label] of CASES) {
    it(`${url}: "${label}" on the #quote anchor, old label gone`, () => {
      const main = renderRoute(url);
      expect(main).toContain(`>${label}</a>`);
      expect(main).not.toContain("Get My Free Rockville");
    });
  }
  it("control: Bethesda house keeps the shared default label", () => {
    // the default label interpolates city/service, so SSR inserts <!-- --> markers between the text nodes
    const main = renderRoute("/locations/bethesda-md/house-cleaning").replace(/<!-- -->/g, "");
    expect(main).toContain("Get My Free Bethesda House Cleaning Quote →");
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
