/**
 * Home trust strip (2026-10-11): four chips once in the server HTML, no links, official marks,
 * no buttons in SSR (arrows only under reduced motion), no exposed credential URLs.
 */
import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import HomeTrustMarquee from "./HomeTrustMarquee";

describe("HomeTrustMarquee", () => {
  const html = renderToString(<HomeTrustMarquee />);

  it("renders the four chips once, in order, without links or buttons", () => {
    expect(html.split("<li").length - 1).toBe(4);
    const order = ["BBB Accredited", "Google Verified", "EPA Safer Choice", "24-Hour Re-Clean Guarantee"].map((s) => html.indexOf(s));
    expect(order.every((i) => i >= 0)).toBe(true);
    expect([...order].sort((a, b) => a - b)).toEqual(order);
    expect(html).not.toContain("<a ");
    expect(html).not.toContain("<button");
    expect(html).not.toContain("bbb.org");
    expect(html).not.toContain("support.google.com");
    expect(html).not.toContain('aria-hidden="true" class="group'); // clone only on the client
  });

  it("uses the official marks and a labelled region", () => {
    expect(html).toContain('src="/images/trust/bbb-logo.png"');
    expect(html).toContain('src="/images/trust/google-verified.svg"');
    expect(html).toContain('aria-label="Credentials and guarantees"');
    for (const bad of [/A\+/, /Google Guaranteed/i, /money[- ]back/i, /\bseal\b/i]) expect(html).not.toMatch(bad);
  });
});
