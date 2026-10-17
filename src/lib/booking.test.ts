import { describe, expect, it } from "vitest";
import { addDays, isDateOpen, quoteBooking, todayInBusinessTz, weekdayOf, MIN_LEAD_DAYS, MAX_DAYS_AHEAD } from "./booking";
import { verifyStripeSignature } from "../../netlify/lib/booking-server";

describe("quoteBooking", () => {
  it("prices a deep clean 3 bed / 2 bath at the starting price with a 30% deposit", () => {
    const q = quoteBooking({ service: "deep", sizeIndex: 3 });
    expect(q).toMatchObject({ ok: true, base: 375, total: 375, deposit: 113, balance: 262 });
  });

  it("adds add-ons and ignores duplicates", () => {
    const q = quoteBooking({ service: "standard", sizeIndex: 0, addons: ["Inside Oven", "Inside Oven", "Inside Refrigerator"] });
    expect(q).toMatchObject({ ok: true, total: 160 + 35 + 30 });
  });

  it("applies recurring frequencies (bi-weekly = table, weekly cheaper, monthly dearer)", () => {
    const bi = quoteBooking({ service: "recurring", sizeIndex: 3, frequency: "biweekly" });
    const wk = quoteBooking({ service: "recurring", sizeIndex: 3, frequency: "weekly" });
    const mo = quoteBooking({ service: "recurring", sizeIndex: 3, frequency: "monthly" });
    expect(bi.ok && bi.base).toBe(215);
    expect(wk.ok && mo.ok && wk.base < 215 && mo.base > 215).toBe(true);
    expect(quoteBooking({ service: "recurring", sizeIndex: 3 }).ok).toBe(false);
  });

  it("refuses custom-quote sizes, unknown services and unknown add-ons", () => {
    expect(quoteBooking({ service: "post-construction", sizeIndex: 5 }).ok).toBe(false);
    expect(quoteBooking({ service: "office", sizeIndex: 0 }).ok).toBe(false);
    expect(quoteBooking({ service: "deep", sizeIndex: 0, addons: ["Free pizza"] }).ok).toBe(false);
  });
});

describe("isDateOpen", () => {
  const now = new Date("2026-10-17T15:00:00Z");
  const today = todayInBusinessTz(now);
  it("respects lead time, horizon and closed Sundays", () => {
    expect(isDateOpen(addDays(today, MIN_LEAD_DAYS - 1), now)).toBe(false);
    expect(isDateOpen(addDays(today, MAX_DAYS_AHEAD + 1), now)).toBe(false);
    let d = addDays(today, MIN_LEAD_DAYS);
    while (weekdayOf(d) !== 0) d = addDays(d, 1);
    expect(isDateOpen(d, now)).toBe(false);
    expect(isDateOpen(addDays(d, 1), now)).toBe(true);
    expect(isDateOpen("not-a-date", now)).toBe(false);
  });
});

describe("verifyStripeSignature", () => {
  it("accepts a correct signature and rejects a wrong one", async () => {
    const secret = "whsec_test";
    const payload = '{"id":"evt_1"}';
    const t = Math.floor(Date.now() / 1000);
    const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
    const mac = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${t}.${payload}`));
    const sig = Array.from(new Uint8Array(mac)).map((b) => b.toString(16).padStart(2, "0")).join("");
    expect(await verifyStripeSignature(payload, `t=${t},v1=${sig}`, secret)).toBe(true);
    expect(await verifyStripeSignature(payload, `t=${t},v1=${"0".repeat(64)}`, secret)).toBe(false);
    expect(await verifyStripeSignature(payload + " ", `t=${t},v1=${sig}`, secret)).toBe(false);
  });
});
