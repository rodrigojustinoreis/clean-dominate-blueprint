/**
 * M02c — PriceCalculator and ExitIntentPopup with real components; fetch, Supabase client and analytics mocked
 * before any interaction. No real endpoint is ever hit. Popup: zero analytics events. Calculator: one event, only
 * after the e-mail service accepts.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor, act, cleanup, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PriceCalculator from "@/components/PriceCalculator";
import { trackQuoteFormSubmit } from "@/lib/analytics";

const { insertImpl, toastSpy, sonner } = vi.hoisted(() => ({
  insertImpl: vi.fn<(row: unknown) => Promise<{ error: unknown }>>(),
  toastSpy: vi.fn(),
  sonner: { success: vi.fn(), error: vi.fn(), message: vi.fn() },
}));
vi.mock("@/integrations/supabase/client", () => ({ supabase: { from: () => ({ insert: (row: unknown) => ({ abortSignal: () => insertImpl(row) }) }) } }));
vi.mock("@/lib/analytics", () => ({ trackQuoteFormSubmit: vi.fn(), trackQuoteFormStart: vi.fn() }));
vi.mock("@/hooks/use-toast", () => ({ useToast: () => ({ toast: toastSpy }) }));
vi.mock("sonner", () => ({ toast: sonner }));
vi.mock("@/lib/july4Promo", () => ({ isJuly4Promo: () => false, OFFER_END: Date.now() + 86400000 }));

class RO { observe() {} unobserve() {} disconnect() {} }
(globalThis as unknown as { ResizeObserver: unknown }).ResizeObserver = RO;
if (!Element.prototype.scrollIntoView) Element.prototype.scrollIntoView = () => {};
if (!Element.prototype.hasPointerCapture) Element.prototype.hasPointerCapture = () => false;
if (!Element.prototype.releasePointerCapture) Element.prototype.releasePointerCapture = () => {};

type Res = { ok: boolean; json: () => Promise<unknown> };
const okBody = (b: unknown): Res => ({ ok: true, json: () => Promise.resolve(b) });
let fetchMock: ReturnType<typeof vi.fn>;
const stubFetch = (impl: () => Promise<Res>) => { fetchMock = vi.fn(impl); global.fetch = fetchMock as unknown as typeof fetch; };
const track = vi.mocked(trackQuoteFormSubmit);

beforeEach(() => { vi.clearAllMocks(); insertImpl.mockReset(); sessionStorage.clear(); });
afterEach(() => { cleanup(); });

// ── Calculator ─────────────────────────────────────────────────────────────────────────────────────────────
async function pick(name: RegExp, option: string) {
  const trigger = screen.getByRole("combobox", { name });
  trigger.focus(); fireEvent.keyDown(trigger, { key: "ArrowDown" });
  const listbox = await screen.findByRole("listbox");
  fireEvent.keyDown(within(listbox).getByRole("option", { name: option }), { key: "Enter" });
}
async function fillCalculatorSafe() {
  render(<MemoryRouter><PriceCalculator /></MemoryRouter>);
  await pick(/service type/i, "Standard Cleaning");
  const trigger = screen.getByRole("combobox", { name: /frequency/i }); trigger.focus(); fireEvent.keyDown(trigger, { key: "ArrowDown" });
  const lb = await screen.findByRole("listbox"); fireEvent.keyDown(within(lb).getAllByRole("option")[0], { key: "Enter" });
  await pick(/bedrooms/i, "2"); await pick(/bathrooms/i, "2");
  fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "Jane Doe" } });
  fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: "3015550100" } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "jane@example.com" } });
  fireEvent.change(screen.getByLabelText(/address/i), { target: { value: "1 Main St" } });
}
const submitCalc = () => fireEvent.submit(screen.getByLabelText(/full name/i).closest("form")!);
const lastToast = () => toastSpy.mock.calls.at(-1)?.[0] as { title?: string; description?: string; variant?: string } | undefined;

describe("PriceCalculator — dual destination", { timeout: 20000 }, () => {
  it("email accepted + db ok → one event, 'Request submitted', fields reset", async () => {
    stubFetch(() => Promise.resolve(okBody({ success: true }))); insertImpl.mockResolvedValue({ error: null });
    await fillCalculatorSafe(); submitCalc();
    await waitFor(() => expect(lastToast()?.title).toBe("Request submitted"));
    expect(track).toHaveBeenCalledTimes(1); expect(fetchMock).toHaveBeenCalledTimes(1); expect(insertImpl).toHaveBeenCalledTimes(1);
    expect((screen.getByLabelText(/full name/i) as HTMLInputElement).value).toBe("");
    expect(lastToast()?.description).toMatch(/has been submitted/);
  });
  it("email accepted + db failed → still submitted, one event", async () => {
    stubFetch(() => Promise.resolve(okBody({ success: true }))); insertImpl.mockResolvedValue({ error: { message: "db" } });
    await fillCalculatorSafe(); submitCalc();
    await waitFor(() => expect(lastToast()?.title).toBe("Request submitted")); expect(track).toHaveBeenCalledTimes(1);
  });
  it("email 500 + db ok → not confirmed, no event, fields kept; retry sends only the e-mail then succeeds once", async () => {
    let n = 0; stubFetch(() => Promise.resolve(n++ === 0 ? { ok: false, json: () => Promise.resolve({ success: false }) } : okBody({ success: true }))); insertImpl.mockResolvedValue({ error: null });
    await fillCalculatorSafe(); submitCalc();
    await waitFor(() => expect(lastToast()?.title).toBe("Request not confirmed"));
    expect(track).not.toHaveBeenCalled(); expect((screen.getByLabelText(/full name/i) as HTMLInputElement).value).toBe("Jane Doe");
    expect(lastToast()?.description).toMatch(/couldn't confirm/);
    submitCalc();
    await waitFor(() => expect(lastToast()?.title).toBe("Request submitted"));
    expect(fetchMock).toHaveBeenCalledTimes(2); expect(insertImpl).toHaveBeenCalledTimes(1); expect(track).toHaveBeenCalledTimes(1);
  });
  it("double submit in the same tick → one fetch and one insert", async () => {
    stubFetch(() => Promise.resolve(okBody({ success: true }))); insertImpl.mockResolvedValue({ error: null });
    await fillCalculatorSafe(); await act(async () => { submitCalc(); submitCalc(); });
    await waitFor(() => expect(lastToast()?.title).toBe("Request submitted"));
    expect(fetchMock).toHaveBeenCalledTimes(1); expect(insertImpl).toHaveBeenCalledTimes(1); expect(track).toHaveBeenCalledTimes(1);
  });
  it("analytics throwing does not revert the confirmation", async () => {
    track.mockImplementationOnce(() => { throw new Error("gtag"); });
    stubFetch(() => Promise.resolve(okBody({ success: true }))); insertImpl.mockResolvedValue({ error: null });
    await fillCalculatorSafe(); submitCalc();
    await waitFor(() => expect(lastToast()?.title).toBe("Request submitted"));
  });
  it("no request when the contact fields are empty", async () => {
    stubFetch(() => Promise.resolve(okBody({ success: true }))); insertImpl.mockResolvedValue({ error: null });
    await fillCalculatorSafe();
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "" } });
    submitCalc();
    await waitFor(() => expect(toastSpy).toHaveBeenCalled());
    expect(fetchMock).not.toHaveBeenCalled(); expect(insertImpl).not.toHaveBeenCalled(); expect(track).not.toHaveBeenCalled();
  });
});

// ── Exit popup ─────────────────────────────────────────────────────────────────────────────────────────────
import ExitIntentPopup from "@/components/ExitIntentPopup";
async function openPopup() {
  // Desktop branch: the mouseleave listener is armed 4s after mount; exit intent = mouseleave with clientY <= 0.
  vi.useFakeTimers({ shouldAdvanceTime: true });
  render(<MemoryRouter><ExitIntentPopup /></MemoryRouter>);
  await act(async () => { await vi.advanceTimersByTimeAsync(4100); });
  await act(async () => { document.dispatchEvent(new MouseEvent("mouseleave", { clientY: 0, bubbles: false })); });
  vi.useRealTimers();
  return screen.queryAllByRole("textbox")[0] ?? null;
}
describe("ExitIntentPopup — dual destination, zero analytics events", { timeout: 20000 }, () => {
  it("email accepted → success toast (submitted wording), popup closes; no analytics", async () => {
    stubFetch(() => Promise.resolve(okBody({ success: true }))); insertImpl.mockResolvedValue({ error: null });
    const first = await openPopup(); expect(first).not.toBeNull();
    const inputs = screen.getAllByRole("textbox"); fireEvent.change(inputs[0], { target: { value: "Jane" } }); fireEvent.change(inputs[1], { target: { value: "3015550100" } });
    fireEvent.submit(inputs[0].closest("form")!);
    await waitFor(() => expect(sonner.success).toHaveBeenCalled());
    expect(String(sonner.success.mock.calls[0][0])).toMatch(/Request submitted/); expect(String(sonner.success.mock.calls[0][0])).not.toMatch(/call you shortly/);
    expect(track).not.toHaveBeenCalled();
  });
  it("email 500 → error toast, popup stays open with the data; no analytics", async () => {
    stubFetch(() => Promise.resolve({ ok: false, json: () => Promise.resolve({ success: false }) })); insertImpl.mockResolvedValue({ error: null });
    const first = await openPopup(); expect(first).not.toBeNull();
    const inputs = screen.getAllByRole("textbox"); fireEvent.change(inputs[0], { target: { value: "Jane" } }); fireEvent.change(inputs[1], { target: { value: "3015550100" } });
    fireEvent.submit(inputs[0].closest("form")!);
    await waitFor(() => expect(sonner.error).toHaveBeenCalled());
    expect(String(sonner.error.mock.calls[0][0])).toMatch(/couldn't confirm/); expect((screen.getAllByRole("textbox")[0] as HTMLInputElement).value).toBe("Jane"); expect(track).not.toHaveBeenCalled();
  });
});
