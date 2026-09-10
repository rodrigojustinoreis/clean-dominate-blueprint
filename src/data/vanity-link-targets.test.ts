/**
 * Internal links batch 3 (2026-09-10): the vanity link resolver must mirror the CURRENT 301 rules in
 * netlify.toml (no invented destination), keep the five non-redirected vanity pages on their own path,
 * send Kensington to the indexable hub, and map the apartment-cleaning overview to house-cleaning while
 * preserving every other service overview link.
 */
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { VANITY_LINK_TARGETS, vanityLinkHref, serviceOverviewHref } from "./vanity-link-targets";
import { redirectedVanitySlugs, vanityLandingPages } from "./vanity-landings";

const APPROVED: Record<string, string> = {
  "deep-cleaning-gaithersburg-md": "/locations/gaithersburg-md/deep-cleaning",
  "deep-cleaning-germantown-md": "/locations/germantown-md/deep-cleaning",
  "eco-cleaning-bethesda-md": "/locations/bethesda-md/eco-friendly-cleaning",
  "eco-cleaning-potomac-md": "/locations/potomac-md/eco-friendly-cleaning",
  "house-cleaning-silver-spring-md": "/locations/silver-spring-md/house-cleaning",
  "house-cleaning-wheaton-md": "/locations/wheaton-md/house-cleaning",
  "move-out-cleaning-rockville-md": "/locations/rockville-md/move-out-cleaning",
  "recurring-cleaning-columbia-md": "/locations/columbia-md/recurring-cleaning",
  "deep-cleaning-kensington-md": "/locations/kensington-md",
  "eco-cleaning-chevy-chase-md": "/locations/chevy-chase-md/eco-friendly-cleaning",
};

/** Exact 301 rules from netlify.toml (from -> to), the source of truth the map must mirror. */
function netlifyRedirects(): Record<string, string> {
  const toml = readFileSync(resolve(__dirname, "../../netlify.toml"), "utf-8");
  const rules: Record<string, string> = {};
  // Rules may carry comment lines between the fields (e.g. the Kensington rule); tolerate them.
  const re = /\[\[redirects\]\]\s*\n(?:\s*#[^\n]*\n)*\s*from\s*=\s*"([^"]+)"\s*\n(?:\s*#[^\n]*\n)*\s*to\s*=\s*"([^"]+)"\s*\n(?:\s*#[^\n]*\n)*\s*status\s*=\s*301/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(toml))) if (!(m[1] in rules)) rules[m[1]] = m[2];
  return rules;
}

describe("vanity link targets — mirror of the current 301 rules", () => {
  it("contains exactly the ten approved slugs with the approved destinations", () => {
    expect(VANITY_LINK_TARGETS).toEqual(APPROVED);
  });

  it("every destination equals the 301 rule for the same slug in netlify.toml (no invented targets)", () => {
    const rules = netlifyRedirects();
    for (const [slug, target] of Object.entries(VANITY_LINK_TARGETS)) {
      expect(rules[`/${slug}`], slug).toBe(target);
    }
    expect(rules["/services/apartment-cleaning"]).toBe("/services/house-cleaning");
  });

  it("the mapped slugs are exactly the redirected vanity slugs declared in vanity-landings.ts", () => {
    expect(new Set(Object.keys(VANITY_LINK_TARGETS))).toEqual(redirectedVanitySlugs);
  });

  it("Kensington resolves to the indexable city hub, not the noindex deep-cleaning child", () => {
    expect(vanityLinkHref("deep-cleaning-kensington-md")).toBe("/locations/kensington-md");
  });

  it("the five vanity pages that are not redirected keep their own path", () => {
    const own = vanityLandingPages.filter((vp) => !redirectedVanitySlugs.has(vp.slug)).map((vp) => vp.slug);
    expect(own.sort()).toEqual(
      [
        "apartment-cleaning-takoma-park-md",
        "house-cleaning-damascus-md",
        "house-cleaning-ellicott-city-md",
        "house-cleaning-frederick-md",
        "post-construction-cleaning-clarksburg-md",
      ].sort(),
    );
    for (const slug of own) expect(vanityLinkHref(slug)).toBe(`/${slug}`);
  });

  it("resolves every vanity landing slug to a path that is either its own or the mapped destination", () => {
    for (const vp of vanityLandingPages) {
      const href = vanityLinkHref(vp.slug);
      expect(href).toBe(redirectedVanitySlugs.has(vp.slug) ? APPROVED[vp.slug] : `/${vp.slug}`);
    }
  });
});

describe("service overview href (vanity landing pages)", () => {
  it("apartment-cleaning goes straight to the house-cleaning overview (mirrors its 301)", () => {
    expect(serviceOverviewHref("apartment-cleaning")).toBe("/services/house-cleaning");
  });

  it("eco-friendly-cleaning keeps its pre-existing standard-cleaning link", () => {
    expect(serviceOverviewHref("eco-friendly-cleaning")).toBe("/services/standard-cleaning");
  });

  it("every other service keeps /services/<slug>", () => {
    for (const slug of ["house-cleaning", "deep-cleaning", "move-out-cleaning", "recurring-cleaning", "post-construction-cleaning"]) {
      expect(serviceOverviewHref(slug)).toBe(`/services/${slug}`);
    }
  });
});
