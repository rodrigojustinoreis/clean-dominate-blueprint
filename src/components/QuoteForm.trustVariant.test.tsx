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

  it("credentials variant: only Licensed & Insured and Google reviews above the form; the marquee (five cards) right after the form", () => {
    const before = cred.slice(0, cred.indexOf("<form"));
    const after = cred.slice(cred.indexOf("</form>") + 7);
    expect(before).toContain("Licensed &amp; Insured");
    expect(before).toContain("on Google");
    for (const s of ["Trust and verification", BBB, GOOGLE_PROFILE, "/images/trust/", "Google Verified", "Nextdoor", "facebook.com/capital"]) expect(before, `${s} above the form`).not.toContain(s);
    expect(after).toContain('aria-label="Trust and verification"');
    expect(after.split("<li").length - 1).toBe(5);
    expect(after.split(`href="${BBB}"`).length - 1).toBe(1);
    expect(after.split(`href="${GOOGLE_PROFILE}"`).length - 1).toBe(1);
    expect(after).toContain("Nextdoor");
    expect(after).not.toMatch(/<button/);
    expect(cred).not.toContain("facebook.com/capital");
    expect(cred).not.toContain(GOOGLE_HELP);
    for (const bad of ["A+", "Google Guaranteed", "money-back"]) expect(cred).not.toMatch(new RegExp(bad.replace("+", "\\+")));
  });

  it("the form markup (fields, names, types, required flags, submit) is byte-identical in both variants, and the default has nothing after the form", () => {
    expect(formPart(cred)).toBe(formPart(def));
    expect(def.slice(def.indexOf("</form>") + 7)).toBe("</div>");
    expect(def).toContain("Nextdoor");
    expect(def).not.toContain("Trust and verification");
    expect(fields(formPart(cred))).toEqual(fields(formPart(def)));
    expect(fields(formPart(def)).length).toBeGreaterThan(8);
  });
});
