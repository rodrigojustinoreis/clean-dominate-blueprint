/**
 * Lot 4 (2026-09-18, owner-confirmed facts): (a) availability published as 24/7 for calls, email and booking
 * (footer EN/ES, contact page, service-page phone lines, ES pages, schema hours data) — replacing the wrong
 * "Mon–Sat 8 AM – 6 PM"; (b) SeniorQuoteForm confirms only when a critical destination accepts (Supabase insert or
 * receive-lead), mirroring QuoteForm, with no "we will call you shortly" promise.
 * TEST-ONLY mocks for fetch/Supabase/analytics/sonner: no real endpoint is ever hit.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Suspense } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { render, screen, fireEvent, waitFor, act, cleanup } from "@testing-library/react";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "@/AppRoutes";
import { BUSINESS_INFO } from "@/data/business-info";
import SeniorQuoteForm from "@/components/SeniorQuoteForm";
import { trackQuoteFormSubmit } from "@/lib/analytics";

const { insertImpl, sonner } = vi.hoisted(() => ({ insertImpl: vi.fn<(row: unknown) => Promise<{ error: unknown }>>(), sonner: { success: vi.fn(), error: vi.fn(), message: vi.fn() } }));
vi.mock("@/integrations/supabase/client", () => ({ supabase: { from: () => ({ insert: (row: unknown) => insertImpl(row) }) } }));
vi.mock("@/lib/analytics", () => ({ trackQuoteFormSubmit: vi.fn(), trackQuoteFormStart: vi.fn() }));
vi.mock("sonner", () => ({ toast: sonner }));
const track = vi.mocked(trackQuoteFormSubmit);

function renderRoute(url: string) {
  const qc = new QueryClient({ defaultOptions: { queries: { retry: false, staleTime: 0 } } });
  const html = renderToString(<HelmetProvider><QueryClientProvider client={qc}><TooltipProvider><StaticRouter location={url}><Suspense fallback={null}><AppRoutes /></Suspense></StaticRouter></TooltipProvider></QueryClientProvider></HelmetProvider>);
  return html.replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/<!-- -->/g, "");
}
const OLD = /Mon–Sat|Lun–Sáb|8 ?AM ?– ?6 ?PM|8am–6pm|8:00 AM – 6:00 PM/;

describe("availability published as 24/7 (owner-confirmed)", () => {
  it("schema hours data: 7 days, 00:00–23:59", () => {
    expect(BUSINESS_INFO.hours.days).toEqual(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]);
    expect(BUSINESS_INFO.hours.opens).toBe("00:00"); expect(BUSINESS_INFO.hours.closes).toBe("23:59");
  });
  it("footer EN and ES, contact, about, home, senior page, service pages and ES pages carry the new text and no old hours", () => {
    const pages: Array<[string, RegExp]> = [
      ["/contact", /Calls, email & booking: 24\/7/], ["/contact", /24\/7 \(calls, email & booking\)/], ["/about", /Calls, email & booking: 24\/7/],
      ["/", /Calls, email & booking 24\/7\. We also respond to texts!/], ["/senior-home-cleaning-montgomery-county-md", /Calls answered 24\/7 · We also answer texts/],
      ["/services/deep-cleaning", /— calls answered 24\/7/], ["/services/kitchen-cleaning", /— calls answered 24\/7/], ["/why-eco-friendly-cleaning", /— calls answered 24\/7\. Prefer/],
      ["/resources/faq", /calls, email and booking are answered 24\/7/], ["/es", /Llamadas, e-mail y reservas: 24\/7/], ["/es/limpieza-de-casas", /Llamadas, e-mail y reservas: 24\/7/], ["/es/areas/rockville-md", /Llamadas, e-mail y reservas: 24\/7/],
    ];
    for (const [url, re] of pages) { const h = renderRoute(url); expect(h, url).toMatch(re); expect(h, url).not.toMatch(OLD); }
  });
  it("Ads landing keeps no hours line and only gains the footer text", () => {
    const h = renderRoute("/services/house-cleaning"); expect(h).not.toMatch(OLD); expect(h).toMatch(/Calls, email & booking: 24\/7/);
  });
});

// ── SeniorQuoteForm ────────────────────────────────────────────────────────────────────────────────────────
type Res = { ok: boolean; status: number };
let fetchMock: ReturnType<typeof vi.fn>;
function stubFetch(receiveLead: () => Promise<Res>) {
  fetchMock = vi.fn((url: unknown) => (String(url).includes("receive-lead") ? receiveLead() : Promise.resolve({ ok: true, status: 200 })));
  global.fetch = fetchMock as unknown as typeof fetch;
}
const ok = () => Promise.resolve({ ok: true, status: 200 }); const bad = () => Promise.resolve({ ok: false, status: 500 });
function fillAndSubmit() {
  const { container } = render(<SeniorQuoteForm />);
  const inputs = container.querySelectorAll("input");
  fireEvent.change(inputs[0], { target: { value: "Ann Lee" } }); fireEvent.change(inputs[1], { target: { value: "3015550100" } }); fireEvent.change(inputs[2], { target: { value: "Rockville" } });
  fireEvent.submit(container.querySelector("form")!);
  return container;
}
beforeEach(() => { vi.clearAllMocks(); insertImpl.mockReset(); });
afterEach(() => cleanup());

describe("SeniorQuoteForm — success only when a critical destination confirms", () => {
  it("db ok + receive-lead ok → submitted, one event, no call-back promise", async () => {
    stubFetch(ok); insertImpl.mockResolvedValue({ error: null }); fillAndSubmit();
    await screen.findByText(/Your request has been submitted/); expect(track).toHaveBeenCalledTimes(1);
    expect(screen.queryByText(/will call you shortly/)).toBeNull(); expect(screen.getByText(/Thank you, Ann!/)).toBeInTheDocument();
  });
  it("db fails + receive-lead ok → submitted", async () => {
    stubFetch(ok); insertImpl.mockResolvedValue({ error: { message: "db" } }); fillAndSubmit();
    await screen.findByText(/Your request has been submitted/); expect(track).toHaveBeenCalledTimes(1);
  });
  it("db ok + receive-lead 500 → submitted (one critical confirmed)", async () => {
    stubFetch(bad); insertImpl.mockResolvedValue({ error: null }); fillAndSubmit();
    await screen.findByText(/Your request has been submitted/);
  });
  it("both critical fail → error toast, data preserved, no event, no success", async () => {
    stubFetch(bad); insertImpl.mockResolvedValue({ error: { message: "db" } }); const c = fillAndSubmit();
    await waitFor(() => expect(sonner.error).toHaveBeenCalled());
    expect(String(sonner.error.mock.calls[0][0])).toMatch(/couldn't confirm/); expect(track).not.toHaveBeenCalled();
    expect((c.querySelectorAll("input")[0] as HTMLInputElement).value).toBe("Ann Lee"); expect(screen.queryByText(/has been submitted/)).toBeNull();
  });
  it("double submit in the same tick → single insert and single receive-lead call", async () => {
    stubFetch(ok); insertImpl.mockResolvedValue({ error: null });
    const { container } = render(<SeniorQuoteForm />); const inputs = container.querySelectorAll("input");
    fireEvent.change(inputs[0], { target: { value: "Ann Lee" } }); fireEvent.change(inputs[1], { target: { value: "3015550100" } }); fireEvent.change(inputs[2], { target: { value: "Rockville" } });
    await act(async () => { fireEvent.submit(container.querySelector("form")!); fireEvent.submit(container.querySelector("form")!); });
    await screen.findByText(/Your request has been submitted/);
    expect(insertImpl).toHaveBeenCalledTimes(1); expect(fetchMock.mock.calls.filter((c) => String(c[0]).includes("receive-lead"))).toHaveLength(1);
  });
  it("analytics throwing does not revert a confirmed submission", async () => {
    track.mockImplementationOnce(() => { throw new Error("gtag"); }); stubFetch(ok); insertImpl.mockResolvedValue({ error: null }); fillAndSubmit();
    await screen.findByText(/Your request has been submitted/);
  });
});
