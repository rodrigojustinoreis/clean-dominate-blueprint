/**
 * Footer trust marquee (2026-10-11): five cards once in the server HTML, real destinations, Nextdoor
 * and Licensed & Insured without links, no buttons in SSR (arrows only under reduced motion), no
 * rating letter or discontinued-guarantee wording.
 */
import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import TrustMarquee from "./TrustMarquee";

const BBB = "https://www.bbb.org/us/md/silver-spring/profile/house-cleaning/capital-clean-care-llc-0241-236108525";
const GOOGLE_PROFILE = "https://share.google/FhWh6I5kFwqwg8mnN";
const MAPS = "https://www.google.com/maps?cid=1774420840079969097";

describe("TrustMarquee", () => {
  const html = renderToString(<TrustMarquee tone="dark" label="Verified by" />);

  it("renders the five cards once (clone only on the client) inside a labelled region", () => {
    expect(html).toContain('role="region"');
    expect(html).toContain('aria-label="Trust and verification"');
    expect(html.split("<li").length - 1).toBe(5);
    expect(html).not.toContain('aria-hidden="true"><div class="group');
    for (const s of ["Licensed &amp; Insured", "Google Reviews", "Google Verified", "Local Services Ads", "BBB Accredited Business seal", "Nextdoor", "Verified by"]) expect(html).toContain(s);
  });

  it("links the right cards to the right destinations and leaves Licensed & Insured and Nextdoor without links", () => {
    expect(html.split(`href="${MAPS}"`).length - 1).toBe(1);
    expect(html.split(`href="${GOOGLE_PROFILE}"`).length - 1).toBe(1);
    expect(html.split(`href="${BBB}"`).length - 1).toBe(1);
    expect(html.split("<a ").length - 1).toBe(3);
    expect(html).toMatch(/aria-label="Google Verified, Local Services Ads: open our Google Business Profile \(opens in a new tab\)"/);
    expect(html).toMatch(/aria-label="BBB Accredited Business since October 2026: open our BBB profile \(opens in a new tab\)"/);
    expect(html).toContain('src="/images/trust/google-verified.svg"');
    expect(html).toContain('src="/images/trust/bbb-accredited-business.png"');
  });

  it("has no buttons in the server HTML and no forbidden wording", () => {
    expect(html).not.toContain("<button");
    for (const bad of [/A\+/, /Google Guaranteed/i, /money[- ]back/i, /facebook/i, /View Google profile/, /Verify BBB profile/]) expect(html).not.toMatch(bad);
  });
});
