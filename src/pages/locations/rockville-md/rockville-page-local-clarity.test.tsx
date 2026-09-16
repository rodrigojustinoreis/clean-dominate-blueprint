/**
 * Rockville page-local clarity (2026-09-11, gate IMPLEMENTATION-GATE.md): four Rockville service pages stop
 * inheriting the shared "Same-day slots" / "Same Team Every Visit" defaults through page-local props, the
 * recurring FAQ/Service copy says "whenever possible", move-out drops the deposit-outcome wording, and the
 * Montgomery County guide gains one contextual link. Final preview gate (2026-09-11): move-out hero lead without
 * deposit-outcome wording, true local revision dates on post-construction/recurring/move-out, and post-construction
 * answer label + WebPage dateModified aligned to 2026-09-11. Pages are rendered through the same providers as
 * src/prerender.tsx (eager AppRoutes) so the assertions run on the HTML the prerender emits. Helmet output
 * (title/meta/canonical and the JSON-LD blocks) is not collected under jsdom; those fields are verified on the
 * built dist by the release comparison script instead.
 */
import { describe, it, expect } from "vitest";
import { Suspense } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "@/AppRoutes";
import { getServiceLocationOverride } from "@/data/service-location-overrides";

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

const SAME_DAY = /same-day slots/i;
const SAME_TEAM_PILL = "Same Team Every Visit";
const PILL = "Background-Checked Team</span>";
const DATE_LABEL = "Updated September 11, 2026";
const occurrences = (text: string, needle: string) => text.split(needle).length - 1;

describe("Rockville post-construction (P1)", () => {
  const page = renderRoute("/locations/rockville-md/post-construction-cleaning");
  it("no longer renders the shared availability/team defaults", () => {
    expect(page.text).not.toMatch(SAME_DAY);
    expect(page.count(SAME_TEAM_PILL)).toBe(0);
  });
  it("renders the four page-local strings", () => {
    expect(page.count(PILL)).toBe(1);
    expect(page.count("No commitment · Written scope before service · Satisfaction guarantee applies")).toBe(1);
    expect(page.count("Availability is confirmed from your project address and requested date.")).toBe(1);
    expect(page.count("Written scope before service · 100% satisfaction guaranteed · Bonded & Insured")).toBe(1);
  });
  it("keeps H1, carries the true revision date twice (hero + answer block) and the nine FAQ questions", () => {
    expect(page.main).toContain("Post-Construction Cleaning in Rockville, MD</h1>");
    expect(page.text).not.toContain("Updated August 23, 2026");
    expect(page.text).not.toContain("Updated May 2026");
    expect(occurrences(page.text, DATE_LABEL)).toBe(2);
    expect((page.main.match(/date[tT]ime="2026-09-11"/g) || []).length).toBe(1); // attribute casing differs between SSR builds
    expect(page.count("Are Capital Clean Care teams insured and background-checked?")).toBe(1);
    expect(page.count("Which Rockville areas do you serve for post-renovation cleaning?")).toBe(1);
  });
});

describe("Rockville recurring (P2 + P2b)", () => {
  const page = renderRoute("/locations/rockville-md/recurring-cleaning");
  const NEW_ANSWER =
    "We aim to send the same background-checked, bonded crew to your Rockville home whenever possible, so they learn your layout, preferences, and the spots that need extra attention. If a regular team member is unavailable, a trained replacement follows the same checklist.";
  it("no longer renders the shared availability/team defaults nor the template variant", () => {
    expect(page.text).not.toMatch(SAME_DAY);
    expect(page.count(SAME_TEAM_PILL)).toBe(0);
    expect(page.count(PILL)).toBe(1);
    expect(page.count("No commitment · Date confirmed at booking · 100% satisfaction guaranteed")).toBe(1);
    expect(page.count("Tell us about your Rockville home and we'll send a clear, no-obligation recurring cleaning quote. Your first visit date is confirmed at booking.")).toBe(1);
    expect(page.count("Date confirmed at booking · 100% satisfaction guaranteed · Bonded & Insured")).toBe(1);
  });
  it("visible FAQ answer and the override that feeds FAQSchema carry the same 'whenever possible' answer", () => {
    expect(page.count(NEW_ANSWER)).toBe(1);
    expect(page.text).not.toContain("Consistency is the whole point of recurring service");
    const faqs = getServiceLocationOverride("rockville-md", "recurring-cleaning")?.faqs ?? [];
    expect(faqs).toHaveLength(4);
    expect(faqs.find((f) => f.q === "Will I have the same cleaning team every visit in Rockville?")?.a).toBe(NEW_ANSWER);
    // the other three Rockville answers are untouched
    expect(faqs.filter((f) => f.a.includes("whenever possible"))).toHaveLength(1);
  });
  it("keeps H1 and carries the true revision date instead of the LastUpdated default", () => {
    expect(page.main).toContain("Recurring House Cleaning in Rockville, MD</h1>");
    expect(page.text).not.toContain("Updated May 2026");
    expect(occurrences(page.text, DATE_LABEL)).toBe(1);
    expect((page.main.match(/date[tT]ime="2026-09-11"/g) || []).length).toBe(1); // attribute casing differs between SSR builds
  });
});

describe("Rockville deep (P3)", () => {
  const page = renderRoute("/locations/rockville-md/deep-cleaning");
  it("quote section no longer promises same-day; hero note preserved", () => {
    expect(page.text).not.toMatch(SAME_DAY);
    expect(page.count("Your date is confirmed at booking.")).toBe(1);
    expect(page.count("Written quote before service · 100% satisfaction guaranteed · Bonded & Insured")).toBe(1);
    expect(page.count("No commitment · Written quote before service · Satisfaction guarantee applies")).toBe(1);
  });
  it("keeps H1 and the documented photos", () => {
    expect(page.main).toContain("Deep Cleaning Services in Rockville, MD</h1>");
    expect(page.count("window-frame-cleaning")).toBeGreaterThan(0);
  });
});

describe("Rockville move-out (P4)", () => {
  const page = renderRoute("/locations/rockville-md/move-out-cleaning");
  it("chip, alt and deposit-outcome wording replaced", () => {
    expect(page.count(SAME_TEAM_PILL)).toBe(0);
    expect(page.count(PILL)).toBe(1);
    expect(page.count("deposit-ready landlord inspection results")).toBe(0);
    expect(page.count("final walkthrough preparation")).toBe(1);
    expect(page.text).not.toContain("is the most reliable way to protect your deposit");
    expect(page.text).not.toContain("our checklist covers all of it");
    expect(page.text).not.toContain("will have the property deposit-ready before your inspection");
    expect(page.text).toContain(
      "Our Rockville move-out cleaning focuses on the cleaning tasks agreed in your written scope. Share your property manager's move-out checklist before booking so we can confirm which items are included. Cleaning does not guarantee the outcome of an inspection or a security-deposit refund."
    );
    expect(page.text).toContain("our bonded, background-checked team cleans the property to the agreed written scope before your scheduled walkthrough.");
  });
  it("hero lead no longer promises deposit outcomes (case-insensitive) and keeps the no-guarantee statement", () => {
    const lower = page.text.toLowerCase();
    expect(lower).not.toContain("deposit-ready");
    expect(lower).not.toContain("covers every inch");
    expect(page.text).toContain(
      "Moving out of your Rockville home? Capital Clean Care provides move-out cleaning with a written scope for your final walkthrough. Share your property manager's checklist so we can confirm what is included. Your date is confirmed at booking, and our satisfaction guarantee applies to the cleaning service."
    );
    expect(page.text).toContain("Cleaning does not guarantee the outcome of an inspection or a security-deposit refund.");
    expect(page.text).not.toContain("Updated May 2026");
    expect(occurrences(page.text, DATE_LABEL)).toBe(1);
    expect((page.main.match(/date[tT]ime="2026-09-11"/g) || []).length).toBe(1); // attribute casing differs between SSR builds
  });
  it("keeps date-confirmed copy, the upright hero photo and H1", () => {
    expect(page.count("Date confirmed at booking")).toBe(2); // hero note + trust line
    expect(page.count("Your date is confirmed at booking")).toBe(3); // hero lead + availability note + cost FAQ answer
    expect(page.count("rotate-90")).toBe(1);
    expect(page.main).toContain("Move Out Cleaning in Rockville, MD</h1>");
  });
});

describe("Montgomery County post-construction guide (P5)", () => {
  const page = renderRoute("/resources/post-construction-cleaning-montgomery-county-md");
  it("gains exactly one contextual link to the Rockville page and keeps the existing links", () => {
    expect(page.count('href="/locations/rockville-md/post-construction-cleaning"')).toBe(1);
    expect(page.main).toMatch(/<a[^>]*href="\/locations\/rockville-md\/post-construction-cleaning"[^>]*>post-construction cleaning in Rockville<\/a>/);
    expect(page.count('href="/locations/silver-spring-md/post-construction-cleaning"')).toBe(1);
    // UX batch 2026-09-16: the inline CTA (one of the former 3 plain links) now targets the service page #quote,
    // and the hero/final CTAs moved from /#quote to the same target — total service-page links 3 → 5.
    expect(page.count('href="/services/post-construction-cleaning"')).toBe(2);
    expect(page.count('href="/services/post-construction-cleaning#quote"')).toBe(3);
    expect(page.count('href="/services/post-construction-cleaning')).toBe(5);
    expect(page.count('href="/#quote"')).toBe(0);
  });
  it("keeps its H1", () => {
    expect(page.main).toMatch(/<h1[^>]*>Post-Construction Cleaning in Montgomery County/);
  });
});

describe("controls (hub and house untouched)", () => {
  it("hub and house keep their existing copy", () => {
    const hub = renderRoute("/locations/rockville-md");
    const house = renderRoute("/locations/rockville-md/house-cleaning");
    expect(hub.count(SAME_TEAM_PILL)).toBe(0);
    expect(house.count(SAME_TEAM_PILL)).toBe(0);
    expect(house.text).not.toMatch(SAME_DAY);
    expect(house.count(PILL)).toBe(1);
  });
});
