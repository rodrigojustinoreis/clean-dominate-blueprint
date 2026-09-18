/**
 * SEO master plan — lot 1 (2026-09-18, CODEX-BATCH-1-REVIEW.md, CLAUDE-BATCH-1-ACK.md).
 *
 * L1 /locations/rockville-md/house-cleaning: the hero CTAs (quote + phone) render right after the H1/updated
 * line and before the lead paragraph through the opt-in `ctaAfterHeading` prop of HeroLocation, so both fit the
 * first 360×740 viewport (measured: quote 378–422, phone 434–478). Lead text, pills, title/meta/H1 and schema are
 * unchanged; the six specialty links at the end of the FAQ use text-primary (9.25:1) instead of text-accent (2.83:1).
 * L2 /resources/clean-home-fall-prevention-seniors: the NIA link points to the current article
 * (preventing-falls-home-room-room; the old fall-proofing-your-home URL returns 404) with a descriptive anchor.
 * Controls: HeroLocation defaults (Gaithersburg house) and the ctaBeforePills variant (Rockville deep) keep their
 * original order; /es titles are not part of this lot (L3 NO-OP).
 *
 * Pages are rendered through the same providers as src/prerender.tsx (eager AppRoutes), like the other page
 * tests; Helmet output is verified on the built dist by the lot gate instead.
 */
import { describe, it, expect } from "vitest";
import { Suspense } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "@/AppRoutes";
import HeroLocation from "@/components/location/HeroLocation";

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
  const decode = (s: string) =>
    s.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/<!-- -->/g, "");
  const text = decode(main.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ");
  const count = (needle: string) => decode(main).split(needle).length - 1;
  return { html, main: decode(main), text, count };
}

const heroProps = {
  h1: "Test H1",
  lead: "Lead paragraph for the order test.",
  cityName: "Testville",
  state: "MD",
  zipRange: "00000",
  heroImage: "/images/team/team-mopping-bright-room.jpg",
  heroImageAlt: "alt",
};

function renderHero(extra: Record<string, unknown> = {}) {
  const html = renderToString(
    <StaticRouter location="/">
      <HeroLocation {...heroProps} {...extra} />
    </StaticRouter>
  );
  const idx = (needle: string) => html.indexOf(needle);
  return { html, h1: idx("<h1"), lead: idx("Lead paragraph for the order test."), quote: idx('href="#quote"'), pills: idx('aria-label="Trust signals"') };
}

describe("HeroLocation CTA order contract", () => {
  it("default: H1 → lead → pills → CTAs (unchanged for every other consumer)", () => {
    const r = renderHero();
    expect(r.h1).toBeGreaterThan(-1);
    expect(r.lead).toBeGreaterThan(r.h1);
    expect(r.pills).toBeGreaterThan(r.lead);
    expect(r.quote).toBeGreaterThan(r.pills);
    expect(r.html.split('href="#quote"').length - 1).toBe(1);
  });
  it("ctaBeforePills: H1 → lead → CTAs → pills (existing variant unchanged)", () => {
    const r = renderHero({ ctaBeforePills: true });
    expect(r.lead).toBeGreaterThan(r.h1);
    expect(r.quote).toBeGreaterThan(r.lead);
    expect(r.pills).toBeGreaterThan(r.quote);
    expect(r.html.split('href="#quote"').length - 1).toBe(1);
  });
  it("ctaAfterHeading: H1 → CTAs → lead → pills, lead intact, CTAs rendered once", () => {
    const r = renderHero({ ctaAfterHeading: true, stackCtas: true });
    expect(r.quote).toBeGreaterThan(r.h1);
    expect(r.lead).toBeGreaterThan(r.quote);
    expect(r.pills).toBeGreaterThan(r.lead);
    expect(r.html.split('href="#quote"').length - 1).toBe(1);
    expect(r.html.split('href="tel:+12407042551"').length - 1).toBe(1);
  });
  it("ctaAfterHeading takes precedence over ctaBeforePills without duplicating CTAs", () => {
    const r = renderHero({ ctaAfterHeading: true, ctaBeforePills: true });
    expect(r.lead).toBeGreaterThan(r.quote);
    expect(r.html.split('href="#quote"').length - 1).toBe(1);
  });
});

describe("L1 — Rockville house cleaning", () => {
  const page = renderRoute("/locations/rockville-md/house-cleaning");
  const LEAD = "Capital Clean Care brings professional house cleaning to Rockville homes — from King Farm to Twinbrook.";
  it("renders the quote and phone CTAs before the lead paragraph", () => {
    const quote = page.main.indexOf("Request a Free Written Quote");
    const phone = page.main.indexOf('href="tel:+12407042551"');
    const lead = page.main.indexOf(LEAD);
    const pills = page.main.indexOf('aria-label="Trust signals"');
    expect(quote).toBeGreaterThan(-1);
    expect(lead).toBeGreaterThan(quote);
    expect(lead).toBeGreaterThan(phone);
    expect(pills).toBeGreaterThan(lead);
  });
  it("keeps the H1, the full lead, the updated label and the CTA note", () => {
    expect(page.count("<h1")).toBe(1);
    expect(page.text).toContain("Professional House Cleaning in Rockville, MD");
    expect(page.text).toContain(
      "records the sensitivities you tell us about before the visit, and backs every visit with our re-clean guarantee."
    );
    expect(page.count("September 2026")).toBeGreaterThan(0);
    expect(page.count("No commitment · Date confirmed at booking · 100% satisfaction guaranteed")).toBe(1);
  });
  it("uses the shorter breadcrumb wrapper padding of the Rockville deep page", () => {
    expect(page.count('class="pt-12 md:pt-16 bg-gradient-to-br')).toBe(1);
    expect(page.count('class="pt-24 bg-gradient-to-br')).toBe(0);
  });
  it("renders the six specialty links with text-primary and no text-accent underline links", () => {
    expect(page.count('class="text-primary underline hover:no-underline"')).toBe(6);
    expect(page.count('class="text-accent underline hover:no-underline"')).toBe(0);
    for (const href of [
      "/services/kitchen-cleaning",
      "/services/bathroom-cleaning",
      "/services/living-area-cleaning",
      "/services/condo-cleaning",
      "/services/maid-service",
      "/services/office-cleaning",
    ]) {
      expect(page.count(`href="${href}"`)).toBeGreaterThan(0);
    }
  });
});

describe("L2 — clean home fall prevention guide", () => {
  const page = renderRoute("/resources/clean-home-fall-prevention-seniors");
  it("links to the current NIA article with a descriptive anchor", () => {
    expect(
      page.count('href="https://www.nia.nih.gov/health/falls-and-falls-prevention/preventing-falls-home-room-room"')
    ).toBe(1);
    expect(page.text).toContain("guidance on preventing falls at home, room by room");
    expect(page.count("fall-proofing-your-home")).toBe(0);
    expect(page.count("fall-proofing the home")).toBe(0);
  });
});

describe("controls", () => {
  // Lot 3 (2026-09-18) moved Gaithersburg house out of the control set by allowlist; Bethesda house (protected) is the
  // default-order control from then on.
  it("Bethesda house keeps the default order (lead before CTAs)", () => {
    const page = renderRoute("/locations/bethesda-md/house-cleaning");
    const lead = page.main.indexOf('class="text-lg text-muted-foreground mb-6 leading-relaxed max-w-prose mt-4"');
    const quote = page.main.indexOf('href="#quote"');
    const pills = page.main.indexOf('aria-label="Trust signals"');
    expect(lead).toBeGreaterThan(-1);
    expect(pills).toBeGreaterThan(lead);
    expect(quote).toBeGreaterThan(pills);
  });
  it("Rockville deep keeps the ctaBeforePills order (lead → CTAs → pills)", () => {
    const page = renderRoute("/locations/rockville-md/deep-cleaning");
    const lead = page.main.indexOf('class="text-lg text-muted-foreground mb-6 leading-relaxed max-w-prose mt-4"');
    const quote = page.main.indexOf('href="#quote"');
    const pills = page.main.indexOf('aria-label="Trust signals"');
    expect(quote).toBeGreaterThan(lead);
    expect(pills).toBeGreaterThan(quote);
  });
});
