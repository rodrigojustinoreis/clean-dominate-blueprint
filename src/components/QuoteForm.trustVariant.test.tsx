/**
 * QuoteForm trust row variant (2026-10-10): opt-in "credentials" swaps the Facebook and Nextdoor
 * cards for the BBB and Google Verified cards; the default stays exactly as before; the form
 * itself (fields, names, required flags, submit button) is identical in both.
 */
import { describe, it, expect, vi } from "vitest";
import { renderToString } from "react-dom/server";

vi.mock("@/integrations/supabase/client", () => ({ supabase: { from: () => ({ insert: vi.fn() }) } }));
vi.mock("@/lib/analytics", () => ({ trackQuoteFormSubmit: vi.fn(), trackQuoteFormStart: vi.fn() }));
vi.mock("sonner", () => ({ toast: { error: vi.fn(), success: vi.fn(), message: vi.fn() } }));

import QuoteForm from "./QuoteForm";

const BBB = "https://www.bbb.org/us/md/silver-spring/profile/house-cleaning/capital-clean-care-llc-0241-236108525";
const GOOGLE_PROFILE = "https://share.google/FhWh6I5kFwqwg8mnN";
const GOOGLE_HELP = "https://support.google.com/localservices/answer/16498018?hl=en";

const fields = (html: string) => [...html.matchAll(/<(input|select|textarea|button)\b[^>]*>/g)].map((m) => m[0]);
const formPart = (html: string) => html.slice(html.indexOf("<form"), html.indexOf("</form>") + 7);

describe("QuoteForm trust row variant", () => {
  const def = renderToString(<QuoteForm />);
  const cred = renderToString(<QuoteForm trustVariant="credentials" />);

  it("default keeps Facebook and Nextdoor and has no credential cards", () => {
    expect(def).toContain("https://www.facebook.com/capital.clean.care");
    expect(def).toContain("Nextdoor");
    expect(def).not.toContain(BBB);
    expect(def).not.toContain(GOOGLE_PROFILE);
    expect(def).not.toContain("BBB Accredited");
    expect(def).not.toContain("/images/trust/");
  });

  it("credentials variant: Licensed & Insured and Google reviews stay at the top, the marquee with the two credentials replaces Facebook/Nextdoor, nothing after the form", () => {
    const formStart = cred.indexOf("<form");
    const before = cred.slice(0, formStart);
    const after = cred.slice(cred.indexOf("</form>") + 7);
    expect(after).toBe("</div>");
    for (const s of ["Licensed &amp; Insured", "on Google", BBB, GOOGLE_PROFILE, "Google Verified", "Local Services Ads", "/images/trust/google-verified.svg", "/images/trust/bbb-accredited-business.png", "BBB Accredited Business seal", 'role="region"', 'aria-label="Trust and verification"']) {
      expect(before, `${s} must appear above the form`).toContain(s);
    }
    expect(before.split(`href="${BBB}"`).length - 1).toBe(1);
    expect(before.split(`href="${GOOGLE_PROFILE}"`).length - 1).toBe(1);
    expect(before.split("https://www.google.com/maps?cid=1774420840079969097").length - 1).toBe(1);
    expect(before.split("<li").length - 1).toBe(2);
    expect(cred).not.toContain("https://www.facebook.com/capital.clean.care");
    expect(cred).not.toContain("Nextdoor");
    expect(cred).not.toContain(GOOGLE_HELP);
    for (const bad of ["A+", "Google Guaranteed", "money-back", "Nextdoor", "Facebook"]) expect(cred).not.toMatch(new RegExp(bad.replace("+", "\\+")));
  });

  it("the marquee region has no button in the server HTML (arrows exist only for reduced motion) and sits before the form", () => {
    const region = cred.slice(cred.indexOf('aria-label="Trust and verification"'), cred.indexOf("<form"));
    expect(region.length).toBeGreaterThan(0);
    expect(region).not.toMatch(/<button/);
  });

  it("the form markup (fields, names, types, required flags, submit) is byte-identical in both variants, and the default has nothing after the form", () => {
    expect(formPart(cred)).toBe(formPart(def));
    expect(def.slice(def.indexOf("</form>") + 7)).toBe("</div>");
    expect(def).toContain("Nextdoor");
    expect(fields(formPart(cred))).toEqual(fields(formPart(def)));
    expect(fields(formPart(def)).length).toBeGreaterThan(8);
  });

  it("shows no visible link captions and the official marks have alt/aria text", () => {
    for (const caption of ["View Google profile", "Verify BBB profile", "About verification", "Verify profile"]) expect(cred).not.toContain(caption);
    expect(cred).toContain('alt="BBB Accredited Business seal"');
    expect(cred.indexOf("Google Verified")).toBeLessThan(cred.indexOf("BBB Accredited Business seal"));
  });

  it("credential cards are links that open in a new tab with an accessible name", () => {
    expect(cred).toMatch(new RegExp(`<a[^>]*href="${BBB.replace(/[.?]/g, "\\$&")}"[^>]*target="_blank"[^>]*rel="noopener noreferrer"[^>]*aria-label="BBB Accredited Business since October 2026: open our BBB profile \\(opens in a new tab\\)"`));
    expect(cred).toMatch(new RegExp(`<a[^>]*href="${GOOGLE_PROFILE.replace(/[./?]/g, "\\$&")}"[^>]*target="_blank"[^>]*rel="noopener noreferrer"[^>]*aria-label="Google Verified, Local Services Ads: open our Google Business Profile \\(opens in a new tab\\)"`));
  });
});
