/**
 * @vitest-environment jsdom
 * @vitest-environment-options { "url": "https://capitalcleancare.com/services/house-cleaning" }
 *
 * Reliability of the inline quote form on /services/house-cleaning (measurement prototype, 2026-09-27).
 *
 * TEST-ONLY: Supabase, fetch, analytics and toast are mocked; no real endpoint is hit and no lead or
 * e-mail is produced. Contract under test: success only after receive-lead accepts; the Supabase row is
 * a backup that never decides; e-mail and Netlify Forms are auxiliary. Cases B, C, D and E fail on the
 * baseline (which showed success after firing four un-awaited requests) and pass with the patch.
 *
 * Documented limits: the double-click / retry guards live in this mount only. A remount or reload
 * starts from nothing, and a receiver that accepted after our timeout can still hold a request we
 * later re-send (no server-side idempotency key).
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";

class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
(globalThis as unknown as { ResizeObserver: unknown }).ResizeObserver = ResizeObserverStub;
if (!Element.prototype.scrollIntoView) Element.prototype.scrollIntoView = () => {};

// ── Mocks ──────────────────────────────────────────────────────────────────
const insertMock = vi.fn();
vi.mock("@/integrations/supabase/client", () => ({
  // One shape for both call styles: the helper chains .insert(row).abortSignal(signal); the pre-patch
  // handler chained .insert(row).then(...). The same file therefore runs unchanged against the baseline,
  // so a RED there is functional and not a mock/import mismatch.
  supabase: {
    from: () => ({
      insert: (row: unknown) => {
        const p = Promise.resolve().then(() => insertMock(row)) as Promise<unknown> & { abortSignal: () => Promise<unknown> };
        p.abortSignal = () => p;
        return p;
      },
    }),
  },
}));
vi.mock("@/lib/analytics", () => ({
  trackQuoteFormSubmit: vi.fn(),
  trackQuoteFormStart: vi.fn(),
  trackBookNowClick: vi.fn(),
  trackPhoneClick: vi.fn(),
}));
vi.mock("sonner", () => ({ toast: { error: vi.fn(), success: vi.fn(), message: vi.fn() } }));

import { QuoteFormInline } from "./HouseCleaningPage";
import { trackQuoteFormSubmit } from "@/lib/analytics";
import { toast } from "sonner";
import { LEAD_UNCONFIRMED_TEXT } from "@/lib/submit-lead-dual";

const trackMock = vi.mocked(trackQuoteFormSubmit);
const toastError = vi.mocked(toast.error);

type Res = { ok: boolean; status: number };
const okRes = (): Promise<Res> => Promise.resolve({ ok: true, status: 200 });
const res500 = (): Promise<Res> => Promise.resolve({ ok: false, status: 500 });

/** Route fetch by URL and count every destination; the auxiliaries (e-mail, Netlify Forms) answer 200 unless told otherwise. */
const calls = { receiver: 0, email: 0, netlify: 0 };
function stubFetch(receiveLead: () => Promise<Res>, aux: () => Promise<Res> = okRes) {
  calls.receiver = 0; calls.email = 0; calls.netlify = 0;
  global.fetch = vi.fn((url: unknown) => {
    const u = String(url);
    if (u.includes("receive-lead")) { calls.receiver++; return receiveLead(); }
    if (u.includes("/api/send-quote-email")) { calls.email++; return aux(); }
    calls.netlify++; // POST "/" (Netlify Forms)
    return aux();
  }) as unknown as typeof fetch;
}

const FIELDS = { name: "Jane Test", phone: "2400000000", email: "jane@example.test", zip: "20850", address: "1 Main St" };
function fill(container: HTMLElement, overrides: Partial<typeof FIELDS> = {}) {
  const v = { ...FIELDS, ...overrides };
  for (const k of Object.keys(v) as (keyof typeof v)[]) {
    const el = container.querySelector(`#hc-${k}`);
    if (el) fireEvent.change(el, { target: { value: v[k] } }); // the footer variant has no address field
  }
}
const form = (c: HTMLElement) => c.querySelector("form");
const submit = (c: HTMLElement) => fireEvent.submit(form(c)!);

beforeEach(() => {
  vi.clearAllMocks();
  insertMock.mockResolvedValue({ error: null });
});
afterEach(() => {
  vi.useRealTimers();
});

describe("inline quote form — success only after receive-lead accepts", () => {
  it("A) receiver accepts → success screen, one tracking call, each destination exactly once", async () => {
    stubFetch(okRes);
    const { container } = render(<QuoteFormInline variant="hero" />);
    fill(container);
    submit(container);
    await waitFor(() => expect(form(container)).toBeNull()); // form replaced by the success screen
    expect(trackMock).toHaveBeenCalledTimes(1);
    expect(trackMock).toHaveBeenCalledWith("house-cleaning", "/services/house-cleaning:hero");
    expect(calls).toEqual({ receiver: 1, email: 1, netlify: 1 });
    expect(insertMock).toHaveBeenCalledTimes(1);
    expect(toastError).not.toHaveBeenCalled();
  });

  it("B) receiver 500, Supabase ok → NO success (backup never decides), values kept, button usable", async () => {
    stubFetch(res500);
    const { container } = render(<QuoteFormInline variant="hero" />);
    fill(container);
    submit(container);
    await waitFor(() => expect(toastError).toHaveBeenCalledWith(LEAD_UNCONFIRMED_TEXT));
    expect(form(container)).not.toBeNull();
    expect((container.querySelector("#hc-name") as HTMLInputElement).value).toBe(FIELDS.name);
    expect((container.querySelector("#hc-phone") as HTMLInputElement).value).toBe(FIELDS.phone);
    await waitFor(() => expect((container.querySelector('button[type="submit"]') as HTMLButtonElement).disabled).toBe(false));
    expect(trackMock).not.toHaveBeenCalled();
    expect(insertMock).toHaveBeenCalledTimes(1); // backup row was still attempted
  });

  it("C) every destination fails (receiver 500, Supabase error, e-mail 500, Netlify 500) → error, no tracking, form intact", async () => {
    insertMock.mockResolvedValue({ error: { message: "PGRST" } });
    stubFetch(res500, res500);
    const { container } = render(<QuoteFormInline variant="hero" />);
    fill(container);
    submit(container);
    await waitFor(() => expect(toastError).toHaveBeenCalledWith(LEAD_UNCONFIRMED_TEXT));
    expect(form(container)).not.toBeNull();
    expect(trackMock).not.toHaveBeenCalled();
    expect(calls).toEqual({ receiver: 1, email: 1, netlify: 1 });
  });

  it("I) receiver accepts, Supabase never answers → the known acceptance is not lost: success after the limit, tracking once", async () => {
    stubFetch(okRes);
    insertMock.mockReturnValue(new Promise(() => {})); // backup insert pending forever
    const { container } = render(<QuoteFormInline variant="hero" />);
    fill(container);
    vi.useFakeTimers();
    submit(container);
    await vi.advanceTimersByTimeAsync(16000); // DUAL_SUBMIT_TIMEOUT_MS + hard limit
    vi.useRealTimers();
    await waitFor(() => expect(form(container)).toBeNull());
    expect(trackMock).toHaveBeenCalledTimes(1);
    expect(toastError).not.toHaveBeenCalled();
    expect(calls.receiver).toBe(1);
  });

  it("D) receiver times out, then accepts late → retry re-sends nothing and announces success exactly once", async () => {
    let resolveLate: (r: Res) => void = () => {};
    stubFetch(() => new Promise<Res>((r) => { resolveLate = r; }));
    insertMock.mockReturnValue(new Promise(() => {})); // never resolves
    const { container } = render(<QuoteFormInline variant="hero" />);
    fill(container);
    vi.useFakeTimers();
    submit(container);
    await vi.advanceTimersByTimeAsync(16000); // past DUAL_SUBMIT_TIMEOUT_MS (15000) + hard limit
    vi.useRealTimers();
    await waitFor(() => expect(toastError).toHaveBeenCalledWith(LEAD_UNCONFIRMED_TEXT));
    expect(form(container)).not.toBeNull();
    expect(trackMock).not.toHaveBeenCalled();
    expect(calls.receiver).toBe(1);

    resolveLate({ ok: true, status: 200 }); // acceptance arrives after the limit
    await new Promise((r) => setTimeout(r, 10));
    submit(container); // same payload: manual retry
    await waitFor(() => expect(form(container)).toBeNull());
    expect(calls.receiver).toBe(1); // the accepted POST was not repeated
    expect(trackMock).toHaveBeenCalledTimes(1);
  });

  it("E) double click → a single flow, one receiver POST", async () => {
    let resolveFirst: (r: Res) => void = () => {};
    stubFetch(() => new Promise<Res>((r) => { resolveFirst = r; }));
    const { container } = render(<QuoteFormInline variant="hero" />);
    fill(container);
    submit(container);
    submit(container);
    await new Promise((r) => setTimeout(r, 10));
    expect(calls.receiver).toBe(1);
    resolveFirst({ ok: true, status: 200 });
    await waitFor(() => expect(form(container)).toBeNull());
    expect(trackMock).toHaveBeenCalledTimes(1);
  });

  it("F) failed attempt, same payload retried → receiver again, Netlify Forms NOT again; changed payload → both again", async () => {
    stubFetch(res500);
    const { container } = render(<QuoteFormInline variant="hero" />);
    fill(container);
    submit(container);
    await waitFor(() => expect(toastError).toHaveBeenCalledTimes(1));
    expect(calls).toEqual({ receiver: 1, email: 1, netlify: 1 });

    submit(container); // same payload
    await waitFor(() => expect(toastError).toHaveBeenCalledTimes(2));
    expect(calls.receiver).toBe(2);
    expect(calls.netlify).toBe(1); // once per payload in this mount
    expect(calls.email).toBe(2); // the helper notifies on every receiver attempt — documented, not deduplicated

    fill(container, { name: "Jane Changed" }); // new payload → new key
    submit(container);
    await waitFor(() => expect(toastError).toHaveBeenCalledTimes(3));
    expect(calls.receiver).toBe(3);
    expect(calls.netlify).toBe(2);
  });

  it("G) analytics parameters carry no contact data", async () => {
    stubFetch(okRes);
    const { container } = render(<QuoteFormInline variant="footer" />);
    fill(container);
    submit(container);
    await waitFor(() => expect(trackMock).toHaveBeenCalledTimes(1));
    const args = JSON.stringify(trackMock.mock.calls[0]);
    for (const pii of [FIELDS.name, FIELDS.phone, FIELDS.email, FIELDS.address]) expect(args).not.toContain(pii);
    expect(trackMock).toHaveBeenCalledWith("house-cleaning", "/services/house-cleaning:footer");
  });

  it("H) validation failure sends nothing at all", async () => {
    stubFetch(okRes);
    const { container } = render(<QuoteFormInline variant="hero" />);
    fill(container, { name: "" });
    submit(container);
    await new Promise((r) => setTimeout(r, 20));
    expect(calls).toEqual({ receiver: 0, email: 0, netlify: 0 });
    expect(insertMock).not.toHaveBeenCalled();
    expect(trackMock).not.toHaveBeenCalled();
    expect(form(container)).not.toBeNull();
  });
});
