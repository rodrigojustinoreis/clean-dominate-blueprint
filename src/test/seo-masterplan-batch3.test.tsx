/**
 * SEO master plan — lot 3 (CODEX-BATCH-3-IMPLEMENTATION-CONSENSUS.md / CLAUDE-BATCH-3-ACK.md).
 * 17 dedicated location pages: hero CTAs (quote + phone) render after the H1/updated line and before the lead,
 * through HeroLocation's opt-in ctaAfterHeading + stackCtas; breadcrumb wrapper pt-12 md:pt-16. Leads are compared
 * verbatim against the production build 533f0aa (extracted at test-generation time). Three labels were shortened as
 * approved; the other 14 keep their original label. Silver Spring airbnb drops the duplicated 'Reviewed'.
 * Controls: Bethesda house (default order), Rockville deep (ctaBeforePills order), Rockville airbnb (default).
 */
import { describe, it, expect } from "vitest";
import { Suspense } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "@/AppRoutes";

function renderRoute(url: string) {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false, staleTime: 0 } } });
  const html = renderToString(
    <HelmetProvider><QueryClientProvider client={queryClient}><TooltipProvider><StaticRouter location={url}><Suspense fallback={null}><AppRoutes /></Suspense></StaticRouter></TooltipProvider></QueryClientProvider></HelmetProvider>
  );
  const main = html.match(/<main[^>]*>([\s\S]*)<\/main>/)?.[1] ?? html;
  const decode = (s: string) => s.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/<!-- -->/g, "");
  const m = decode(main);
  const heroCol = m.match(/<h1[\s\S]*?aria-label="Trust signals"[\s\S]*?<\/div>/)?.[0] ?? "";
  const leadText = decode((m.match(/<p class="text-lg text-muted-foreground mb-6 leading-relaxed max-w-prose mt-4">([\s\S]*?)<\/p>/)?.[1] ?? "").replace(/<[^>]+>/g, "")).trim();
  const count = (needle: string) => m.split(needle).length - 1;
  return { m, heroCol, leadText, count, h1Count: html.split("<h1").length - 1 };
}

const PAGES: Array<[string, string, string]> = [
  ["/locations/gaithersburg-md/deep-cleaning", "Schedule a Deep Clean in Gaithersburg", "When a standard clean isn't enough, Capital Clean Care's deep cleaning goes top-to-bottom through every corner of your Gaithersburg home \u2014 from Lakelands to Crown Farm. Baseboards, grout lines, inside appliances, ceiling fans \u2014 we cover everything a routine cleaning skips. EPA Safer Choice\u2122 products only."],
  ["/locations/gaithersburg-md/house-cleaning", "Get a Free Quote in Gaithersburg", "Capital Clean Care brings professional, eco-friendly house cleaning to Gaithersburg homes \u2014 from Kentlands to Lakelands. Our background-checked, bonded team uses EPA Safer Choice\u2122 certified products, safe for your kids and pets, and backs every visit with 100% satisfaction: we re-clean if you're not happy."],
  ["/locations/gaithersburg-md/recurring-cleaning", "Set Up Recurring Cleaning in Gaithersburg", "Stop cleaning on weekends. Capital Clean Care's recurring service comes to your Gaithersburg home \u2014 from Kentlands to Lakelands to Crown Farm \u2014 weekly or bi-weekly, with the same trusted, background-checked team every single visit. Eco-friendly products, 100% satisfaction guaranteed."],
  ["/locations/germantown-md/deep-cleaning", "Schedule a Deep Clean in Germantown", "When a standard clean isn't enough, Capital Clean Care's deep cleaning goes top-to-bottom through every corner of your Germantown home \u2014 from Churchill Village to Kingsview. Baseboards, grout lines, inside appliances, ceiling fans \u2014 we cover everything a routine cleaning skips. EPA Safer Choice\u2122 products only."],
  ["/locations/germantown-md/house-cleaning", "Get a Free Quote in Germantown", "Capital Clean Care brings professional, eco-friendly house cleaning to Germantown homes \u2014 from Milestone to Churchill Village. Our background-checked, bonded team uses EPA Safer Choice\u2122 certified products, safe for your kids and pets, and backs every visit with 100% satisfaction: we re-clean if you're not happy."],
  ["/locations/kensington-md/recurring-cleaning", "Set Up Recurring Cleaning in Kensington", "Stop cleaning on weekends. Capital Clean Care's recurring service comes to your Kensington home \u2014 from Kensington Historic District to Rock Creek Hills to Rock Creek Knolls \u2014 weekly or bi-weekly, with the same trusted, background-checked team every single visit. Eco-friendly products, 100% satisfaction guaranteed."],
  ["/locations/north-bethesda-md/house-cleaning", "Get a Free Quote in North Bethesda", "Capital Clean Care brings professional, eco-friendly house cleaning to North Bethesda homes \u2014 from White Flint to Luxmanor. Our background-checked, bonded team uses EPA Safer Choice\u2122 certified products, safe for your kids and pets, and backs every visit with 100% satisfaction: we re-clean if you're not happy."],
  ["/locations/north-bethesda-md/recurring-cleaning", "Get a Recurring Cleaning Quote", "Stop cleaning on weekends. Capital Clean Care's recurring service comes to your North Bethesda home \u2014 from White Flint to Luxmanor to Garrett Park \u2014 weekly or bi-weekly, with the same trusted, background-checked team every single visit. Eco-friendly products, 100% satisfaction guaranteed."],
  ["/locations/olney-md/office-cleaning", "Get a Commercial Cleaning Quote in Olney", "Capital Clean Care brings the same reliability Olney families trust to commercial spaces \u2014 from small offices in Olney Mill to professional suites near Olney Theatre Center. Background-checked, bonded team. Eco-friendly products. Flexible scheduling before, during, or after business hours."],
  ["/locations/potomac-md/house-cleaning", "Get a Free Quote in Potomac", "Capital Clean Care brings professional, eco-friendly house cleaning to Potomac homes \u2014 from Avenel to Glen Echo and the River Road corridor. Our background-checked, bonded team uses EPA Safer Choice\u2122 certified products, safe for your kids and pets, and backs every visit with 100% satisfaction: we re-clean if you're not happy."],
  ["/locations/potomac-md/move-out-cleaning", "Book Your Move Out Clean in Potomac", "Moving in or out of Potomac? Capital Clean Care prepares empty and nearly empty homes with a written room-by-room scope\u2014from appliance interiors selected in your quote to cabinets, bathrooms, baseboards and floors. We serve ZIP codes 20854 and 20859, including River Falls and Avenel."],
  ["/locations/silver-spring-md/airbnb-cleaning", "Get an Airbnb Cleaning Quote", "Capital Clean Care provides Airbnb cleaning service in Silver Spring for guest turnovers, with a written property checklist, host-supplied linen changes, restocking options and completion updates. We confirm access, scope and the checkout-to-check-in window before each accepted visit."],
  ["/locations/silver-spring-md/deep-cleaning", "Schedule a Deep Clean in Silver Spring", "When a standard clean isn't enough, Capital Clean Care's deep cleaning goes top-to-bottom through every corner of your Silver Spring home \u2014 from Four Corners to Woodside. Baseboards, grout lines, inside appliances, ceiling fans \u2014 we cover everything a routine cleaning skips. EPA Safer Choice\u2122 products only."],
  ["/locations/silver-spring-md/house-cleaning", "Get a Free Quote in Silver Spring", "Capital Clean Care brings professional, eco-friendly house cleaning to Silver Spring homes \u2014 from Downtown Silver Spring to Four Corners to Fenton Village. Our background-checked, bonded team uses EPA Safer Choice\u2122 certified products, safe for your kids and pets, and backs every visit with 100% satisfaction: we re-clean if you're not happy."],
  ["/locations/silver-spring-md/post-construction-cleaning", "Get a Post-Construction Quote", "Renovation done \u2014 now comes the real challenge. Construction dust, drywall residue, paint splatters, and debris settle into every corner of your Silver Spring home, from Downtown Silver Spring to Four Corners. Capital Clean Care's HEPA-equipped team delivers a complete, dust-free clean that leaves your property genuinely move-in ready."],
  ["/locations/silver-spring-md/recurring-cleaning", "Set Up Recurring Cleaning in Silver Spring", "Stop cleaning on weekends. Capital Clean Care's recurring service comes to your Silver Spring home \u2014 from Downtown Silver Spring to Four Corners to Woodside \u2014 weekly or bi-weekly, with the same trusted, background-checked team every single visit. Eco-friendly products, 100% satisfaction guaranteed: we re-clean if you're not happy."],
  ["/locations/wheaton-md/house-cleaning", "Get a Free Quote in Wheaton", "Capital Clean Care brings professional, eco-friendly house cleaning to Wheaton homes \u2014 from Glenmont to Kemp Mill. Our background-checked, bonded team uses EPA Safer Choice\u2122 certified products, safe for your kids and pets, and backs every visit with 100% satisfaction: we re-clean if you're not happy."],
];

describe("lot 3 — 17 dedicated pages: CTA order, labels and intact leads", () => {
  for (const [url, label, lead] of PAGES) {
    it(`${url}`, () => {
      const p = renderRoute(url);
      expect(p.h1Count).toBe(1);
      const h1 = p.m.indexOf("<h1"); const time = p.m.indexOf("<time", h1); const quote = p.m.indexOf('href="#quote"', h1); const tel = p.m.indexOf('href="tel:+12407042551"', h1); const leadIdx = p.m.indexOf(lead); const pills = p.m.indexOf('aria-label="Trust signals"');
      expect(leadIdx).toBeGreaterThan(-1);
      expect(time).toBeGreaterThan(h1); expect(quote).toBeGreaterThan(time); expect(tel).toBeGreaterThan(quote); expect(leadIdx).toBeGreaterThan(tel); expect(pills).toBeGreaterThan(leadIdx);
      expect(p.leadText).toBe(lead);
      expect(p.heroCol.split('href="#quote"').length - 1).toBe(1); expect(p.heroCol.split('href="tel:+12407042551"').length - 1).toBe(1);
      expect(p.m).toContain(`>${label} <svg`);
      expect(p.count('class="pt-12 md:pt-16 bg-gradient-to-br')).toBe(1); expect(p.count('class="pt-24 bg-gradient-to-br')).toBe(0);
    });
  }
  it("Silver Spring airbnb shows a single Updated prefix with the same date", () => {
    const p = renderRoute("/locations/silver-spring-md/airbnb-cleaning");
    expect(p.m).toContain(">Updated August 31, 2026<"); expect(p.m).not.toContain("Updated Reviewed"); expect(p.m).toContain('dateTime="2026-08-31"');
  });
});

describe("controls keep their order", () => {
  it("Bethesda house: default (lead before CTAs, CTAs after pills)", () => { const p = renderRoute("/locations/bethesda-md/house-cleaning"); const lead = p.m.indexOf('class="text-lg text-muted-foreground mb-6 leading-relaxed max-w-prose mt-4"'); const pills = p.m.indexOf('aria-label="Trust signals"'); const quote = p.m.indexOf('href="#quote"'); expect(pills).toBeGreaterThan(lead); expect(quote).toBeGreaterThan(pills); });
  it("Rockville deep: ctaBeforePills (lead → CTAs → pills)", () => { const p = renderRoute("/locations/rockville-md/deep-cleaning"); const lead = p.m.indexOf('class="text-lg text-muted-foreground mb-6 leading-relaxed max-w-prose mt-4"'); const quote = p.m.indexOf('href="#quote"'); const pills = p.m.indexOf('aria-label="Trust signals"'); expect(quote).toBeGreaterThan(lead); expect(pills).toBeGreaterThan(quote); });
  it("Rockville airbnb: default order untouched", () => { const p = renderRoute("/locations/rockville-md/airbnb-cleaning"); const lead = p.m.indexOf('class="text-lg text-muted-foreground mb-6 leading-relaxed max-w-prose mt-4"'); const pills = p.m.indexOf('aria-label="Trust signals"'); const quote = p.m.indexOf('href="#quote"'); expect(pills).toBeGreaterThan(lead); expect(quote).toBeGreaterThan(pills); });
});
