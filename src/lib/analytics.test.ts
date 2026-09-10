/**
 * Documentation tests for the analytics event map (SEO strategy batch 1, 2026-09-09, lot C).
 *
 * TEST-ONLY: `window.gtag` is a local stub; nothing reaches Google. These tests pin what each helper
 * sends today so the limits are explicit and reproducible:
 *  - a phone click records intent (phone_click + generate_lead lead_method=phone + Ads call conversion);
 *    it does not prove a call was answered;
 *  - the quote-form conversion is sent by trackQuoteFormSubmit, which QuoteForm calls only after at least
 *    one critical destination confirms the lead (see QuoteForm.reliability.test.tsx, scenarios A–G);
 *  - form fields (name, phone, email, address, ZIP, message) are never part of the payload; BUT page_location and
 *    page_path forward the current URL including its query string, so a URL that carries personal data would be
 *    forwarded as-is — the payload is not "PII-free" by construction.
 * They change no runtime code and no Ads/GA configuration.
 */
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  trackPhoneClick,
  trackQuoteFormStart,
  trackQuoteFormSubmit,
  trackBookNowClick,
  trackSmsClick,
  trackEmailClick,
} from "./analytics";

type Call = unknown[];
const PII_KEYS = ["name", "full_name", "first_name", "phone", "phone_number", "email", "address", "zip", "zip_code", "message", "user_id"];

let calls: Call[];
const w = window as unknown as { gtag?: (...args: unknown[]) => void };

const events = (name: string) => calls.filter((c) => c[0] === "event" && c[1] === name);
const paramsOf = (call: Call) => (call[2] ?? {}) as Record<string, unknown>;

beforeEach(() => {
  calls = [];
  w.gtag = (...args: unknown[]) => {
    calls.push(args);
  };
});
afterEach(() => {
  delete w.gtag;
});

describe("analytics event map — what each helper sends", () => {
  it("phone click: phone_click + generate_lead(lead_method=phone) + Ads call conversion — intent only, no form fields", () => {
    trackPhoneClick("hero_location");
    expect(events("phone_click")).toHaveLength(1);
    expect(events("generate_lead")).toHaveLength(1);
    expect(paramsOf(events("generate_lead")[0])).toMatchObject({ cta_location: "hero_location", lead_method: "phone" });
    const conv = events("conversion");
    expect(conv).toHaveLength(1);
    expect(paramsOf(conv[0]).send_to).toMatch(/^AW-16450100951\//);
    for (const c of calls) for (const k of Object.keys(paramsOf(c))) expect(PII_KEYS).not.toContain(k);
    expect(calls).toHaveLength(3);
  });

  it("quote form submit: quote_form_submit + generate_lead(lead_method=quote_form) + Ads conversion (value 50 USD); no form fields", () => {
    trackQuoteFormSubmit("deep", "/locations/rockville-md/house-cleaning");
    expect(events("quote_form_submit")).toHaveLength(1);
    expect(events("generate_lead")).toHaveLength(1);
    expect(paramsOf(events("generate_lead")[0])).toMatchObject({
      form_location: "/locations/rockville-md/house-cleaning",
      service_type: "deep",
      lead_method: "quote_form",
      language: "en",
    });
    const conv = events("conversion");
    expect(conv).toHaveLength(1);
    expect(paramsOf(conv[0])).toMatchObject({ value: 50, currency: "USD" });
    expect(String(paramsOf(conv[0]).send_to)).toMatch(/^AW-16450100951\//);
    for (const c of calls) for (const k of Object.keys(paramsOf(c))) expect(PII_KEYS).not.toContain(k);
  });

  it("an empty service is reported as not_selected (form start and submit)", () => {
    trackQuoteFormStart("", "/contact");
    trackQuoteFormSubmit("", "/contact", "es");
    expect(paramsOf(events("quote_form_start")[0])).toMatchObject({ service_type: "not_selected", form_location: "/contact" });
    expect(paramsOf(events("quote_form_submit")[0])).toMatchObject({ service_type: "not_selected", language: "es" });
  });

  it("a quote CTA click is quote_cta_click (never begin_checkout) and sends no lead or conversion", () => {
    trackBookNowClick("sticky_mobile_cta");
    expect(events("quote_cta_click")).toHaveLength(1);
    expect(events("begin_checkout")).toHaveLength(0);
    expect(events("generate_lead")).toHaveLength(0);
    expect(events("conversion")).toHaveLength(0);
  });

  it("sms and email clicks are intent events only (no generate_lead, no conversion)", () => {
    trackSmsClick("footer");
    trackEmailClick("footer");
    expect(events("sms_click")).toHaveLength(1);
    expect(events("email_click")).toHaveLength(1);
    expect(events("generate_lead")).toHaveLength(0);
    expect(events("conversion")).toHaveLength(0);
  });

  it("page context is limited to page_location and page_path", () => {
    trackPhoneClick("header");
    const p = paramsOf(events("phone_click")[0]);
    expect(Object.keys(p).sort()).toEqual(["cta_location", "lead_method", "page_location", "page_path"]);
    expect(p.page_location).toBe(window.location.href);
  });

  it("LIMIT: the URL query string is forwarded verbatim in page_location/page_path (personal data in a URL would be sent)", () => {
    window.history.replaceState({}, "", "/contact?email=someone%40example.com&utm_source=test");
    try {
      trackPhoneClick("header");
      const p = paramsOf(events("phone_click")[0]);
      expect(String(p.page_path)).toBe("/contact?email=someone%40example.com&utm_source=test");
      expect(String(p.page_location)).toContain("email=someone%40example.com");
    } finally {
      window.history.replaceState({}, "", "/");
    }
  });

  it("without gtag (blocked, not loaded yet, or consent withheld) nothing is sent and nothing throws", () => {
    delete w.gtag;
    expect(() => {
      trackPhoneClick("header");
      trackQuoteFormSubmit("standard");
      trackBookNowClick("hero");
    }).not.toThrow();
    expect(calls).toHaveLength(0);
  });
});
