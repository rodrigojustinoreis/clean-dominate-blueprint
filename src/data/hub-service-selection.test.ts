import { describe, expect, it } from "vitest";
import { CURATED_HUBS, hubServiceSelection } from "./hub-service-selection";
import { isIndexable, serviceCardHref, nationalServiceHref } from "./related-content";
import { services } from "./services";
import { slServices } from "./service-locations";

const NAMES: Record<string, string> = { "bethesda-md": "Bethesda", "gaithersburg-md": "Gaithersburg", "fairfax-va": "Fairfax", "alexandria-va": "Alexandria" };

/** Every destination the default hub cards link today (local list + national grid), indexable only. */
function legacyDestinations(citySlug: string): Set<string> {
  const out = new Set<string>();
  for (const sl of slServices) {
    const href = serviceCardHref(citySlug, sl.slug);
    if (href) out.add(href);
  }
  for (const s of services) {
    const href = `/services/${s.slug}`;
    if (isIndexable(href)) out.add(href);
  }
  return out;
}

describe("hub service selection (opt-in hubs)", () => {
  it("is null for hubs that are not curated (negative control: Rockville, Silver Spring)", () => {
    expect(hubServiceSelection("rockville-md", "Rockville")).toBeNull();
    expect(hubServiceSelection("silver-spring-md", "Silver Spring")).toBeNull();
    expect(CURATED_HUBS.size).toBe(4);
  });

  for (const slug of CURATED_HUBS) {
    describe(slug, () => {
      const sel = hubServiceSelection(slug, NAMES[slug])!;
      const all = [...sel.primary, ...sel.more];

      it("shows at most eight main choices", () => {
        expect(sel.primary.length).toBeGreaterThan(0);
        expect(sel.primary.length).toBeLessThanOrEqual(8);
      });

      it("never repeats an href and never links noindex, the hub itself or the Ads landing as a city card", () => {
        const hrefs = all.map((c) => c.href);
        expect(new Set(hrefs).size).toBe(hrefs.length);
        for (const c of all) {
          expect(isIndexable(c.href)).toBe(true);
          expect(c.href).not.toBe(`/locations/${slug}`);
        }
        const ads = sel.primary.find((c) => c.href === "/services/house-cleaning");
        expect(ads).toBeUndefined();
      });

      it("labels national fallbacks without the city name and local pages with it", () => {
        for (const c of all) {
          if (c.national) {
            expect(c.href.startsWith("/services/")).toBe(true);
            expect(c.label).not.toContain(NAMES[slug]);
          } else {
            expect(c.href.startsWith(`/locations/${slug}/`)).toBe(true);
            expect(c.label).toContain(NAMES[slug]);
          }
        }
      });

      it("keeps every indexable destination the default cards link today", () => {
        const kept = new Set(all.map((c) => c.href));
        for (const href of legacyDestinations(slug)) expect(kept.has(href), href).toBe(true);
      });

      it("puts the national overview of each local main choice in the complement", () => {
        for (const p of sel.primary) {
          if (p.national) continue;
          const nat = nationalServiceHref(p.slug);
          if (nat) expect(sel.more.some((m) => m.href === nat)).toBe(true);
        }
      });
    });
  }
});
