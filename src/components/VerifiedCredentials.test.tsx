/**
 * Verifiable credentials (2026-10-09): exact links, honest link names, no rating/guarantee/seal
 * wording, native disclosure present in SSR, external links announce the new tab.
 */
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { CredentialChips, CredentialsCompact, CredentialsDisclosure } from "./VerifiedCredentials";
import { CREDENTIALS, GOOGLE_REVIEWS } from "@/data/verified-credentials";

const BBB = "https://www.bbb.org/us/md/silver-spring/profile/house-cleaning/capital-clean-care-llc-0241-236108525";
const GOOGLE_HELP = "https://support.google.com/localservices/answer/16498018?hl=en";
const MAPS = "https://www.google.com/maps?cid=1774420840079969097";
const FORBIDDEN = [/A\+/, /Google Guaranteed/i, /money[- ]back/i, /certified by Google/i, /Google Partner/i, /\bseal\b/i, /refund/i];

describe("verified credentials data", () => {
  it("links exactly to the BBB profile, the Google help page and the Maps reviews", () => {
    expect(CREDENTIALS.map((c) => c.href)).toEqual([BBB, GOOGLE_HELP]);
    expect(GOOGLE_REVIEWS.href).toBe(MAPS);
  });
  it("uses honest labels, link names and qualifiers", () => {
    expect(CREDENTIALS.map((c) => c.label)).toEqual(["BBB Accredited", "Google Verified"]);
    expect(CREDENTIALS.map((c) => c.detail)).toEqual(["Since October 2026", "Local Services Ads"]);
    expect(CREDENTIALS.map((c) => c.linkText)).toEqual(["Verify BBB accreditation", "About Google verification"]);
  });
});

describe("rendered components", () => {
  for (const [name, el] of [
    ["chips", <CredentialChips />],
    ["disclosure", <CredentialsDisclosure />],
    ["compact", <CredentialsCompact />],
  ] as const) {
    it(`${name}: never claims a rating, a Google guarantee or a seal (except the discontinued-guarantee disclaimer)`, () => {
      const html = renderToString(el).replace("This is not a Google money-back guarantee.", "");
      for (const re of FORBIDDEN) expect(html, String(re)).not.toMatch(re);
    });
  }

  it("chips are links with the new-tab notice and open the real destinations", () => {
    render(<div>{CredentialChips()}</div>);
    const links = screen.getAllByRole("link");
    expect(links.map((a) => a.getAttribute("href"))).toEqual([BBB, GOOGLE_HELP]);
    for (const a of links) {
      expect(a.getAttribute("target")).toBe("_blank");
      expect(a.getAttribute("rel")).toBe("noopener noreferrer");
      expect(a.textContent).toContain("(opens in a new tab)");
    }
  });

  it("disclosure is native, closed by default, and its text is in the server HTML", () => {
    const html = renderToString(<CredentialsDisclosure />);
    expect(html).toContain("<details");
    expect(html).not.toContain("<details open");
    expect(html).toContain("What do these credentials mean?");
    expect(html).toContain("This is not a Google money-back guarantee.");
    expect(html).toContain("Read customer reviews on Google");
    expect(html).toContain(`href="${MAPS}"`);
  });

  it("compact variant has both credential links and the reviews link, once each", () => {
    const html = renderToString(<CredentialsCompact />);
    expect(html.split(`href="${BBB}"`).length - 1).toBe(2); // line + disclosure
    expect(html.split(`href="${GOOGLE_HELP}"`).length - 1).toBe(2);
    expect(html.split(`href="${MAPS}"`).length - 1).toBe(1);
  });
});
