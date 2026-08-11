/**
 * Reliability tests for the shared QuoteForm submit flow (ETAPA 9H).
 *
 * These are TEST-ONLY: they mock Supabase, fetch, analytics and toast, so NO real
 * endpoint is ever hit and nothing here ships in the production bundle. They prove the
 * "success only when ≥1 critical destination confirms" behaviour across scenarios A–G.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

// jsdom lacks ResizeObserver (used by the Radix Slider) and scrollIntoView (Radix Select).
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
  supabase: { from: () => ({ insert: (...args: unknown[]) => insertMock(...args) }) },
}));

vi.mock("@/lib/analytics", () => ({ trackQuoteFormSubmit: vi.fn() }));
vi.mock("sonner", () => ({ toast: { error: vi.fn(), success: vi.fn(), message: vi.fn() } }));

import QuoteForm from "./QuoteForm";
import { trackQuoteFormSubmit } from "@/lib/analytics";
import { toast } from "sonner";

const trackMock = vi.mocked(trackQuoteFormSubmit);
const toastError = vi.mocked(toast.error);

const RECEIVE_LEAD = "receive-lead";
const SUCCESS_TEXT = /thank you for trusting capital clean care/i;
const ERROR_MSG = "We couldn't confirm your request. Please try again or call (240) 704-2551.";

/** Route fetch by URL: receive-lead uses the supplied impl; the two backups always 200. */
function stubFetch(receiveLead: () => Promise<{ ok: boolean; status: number }>) {
  global.fetch = vi.fn((url: unknown) =>
    String(url).includes(RECEIVE_LEAD)
      ? receiveLead()
      : Promise.resolve({ ok: true, status: 200 }),
  ) as unknown as typeof fetch;
}

const okRes = () => Promise.resolve({ ok: true, status: 200 });
const res500 = () => Promise.resolve({ ok: false, status: 500 });
const netErr = () => Promise.reject(new Error("network"));

function submitForm() {
  const { container } = render(<QuoteForm />);
  // Pre-fill the name so we can assert the form is NOT cleared on failure.
  fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "Jane Doe" } });
  // fireEvent.submit runs handleSubmit directly (bypasses HTML/Radix validation).
  fireEvent.submit(container.querySelector("form")!);
  return container;
}

beforeEach(() => {
  vi.clearAllMocks();
});
afterEach(() => {
  vi.useRealTimers();
});

describe("QuoteForm reliability — success requires ≥1 critical destination", () => {
  it("A) Supabase OK + receive-lead OK → success + tracking", async () => {
    insertMock.mockResolvedValue({ error: null });
    stubFetch(okRes);
    submitForm();
    expect(await screen.findByText(SUCCESS_TEXT)).toBeInTheDocument();
    expect(trackMock).toHaveBeenCalledTimes(1);
    expect(toastError).not.toHaveBeenCalled();
  });

  it("B) Supabase OK + receive-lead fails → success + tracking", async () => {
    insertMock.mockResolvedValue({ error: null });
    stubFetch(netErr);
    submitForm();
    expect(await screen.findByText(SUCCESS_TEXT)).toBeInTheDocument();
    expect(trackMock).toHaveBeenCalledTimes(1);
    expect(toastError).not.toHaveBeenCalled();
  });

  it("C) Supabase fails + receive-lead OK → success + tracking", async () => {
    insertMock.mockResolvedValue({ error: { message: "PGRST" } });
    stubFetch(okRes);
    submitForm();
    expect(await screen.findByText(SUCCESS_TEXT)).toBeInTheDocument();
    expect(trackMock).toHaveBeenCalledTimes(1);
    expect(toastError).not.toHaveBeenCalled();
  });

  it("D) both fail → error, data preserved, no tracking", async () => {
    insertMock.mockResolvedValue({ error: { message: "PGRST" } });
    stubFetch(netErr);
    const container = submitForm();
    await waitFor(() => expect(toastError).toHaveBeenCalledWith(ERROR_MSG));
    expect(trackMock).not.toHaveBeenCalled();
    expect(screen.queryByText(SUCCESS_TEXT)).toBeNull();
    // form preserved
    expect(container.querySelector<HTMLInputElement>("#name")!.value).toBe("Jane Doe");
  });

  it("E) both time out → error, no tracking", async () => {
    insertMock.mockReturnValue(new Promise(() => {})); // never resolves
    stubFetch(() => new Promise(() => {})); // never resolves
    render(<QuoteForm />);
    vi.useFakeTimers();
    fireEvent.submit(document.querySelector("form")!);
    await vi.advanceTimersByTimeAsync(9500); // past CRITICAL_TIMEOUT_MS (9000)
    vi.useRealTimers();
    await waitFor(() => expect(toastError).toHaveBeenCalledWith(ERROR_MSG));
    expect(trackMock).not.toHaveBeenCalled();
  });

  it("F) receive-lead 500 + Supabase fails → error", async () => {
    insertMock.mockResolvedValue({ error: { message: "PGRST" } });
    stubFetch(res500);
    submitForm();
    await waitFor(() => expect(toastError).toHaveBeenCalledWith(ERROR_MSG));
    expect(trackMock).not.toHaveBeenCalled();
    expect(screen.queryByText(SUCCESS_TEXT)).toBeNull();
  });

  it("G) honeypot filled → no sends, no tracking, no success", async () => {
    insertMock.mockResolvedValue({ error: null });
    stubFetch(okRes);
    const { container } = render(<QuoteForm />);
    fireEvent.change(container.querySelector('input[name="bot-field"]')!, {
      target: { value: "spam-bot" },
    });
    fireEvent.submit(container.querySelector("form")!);
    // Give any stray async a tick — nothing should happen.
    await new Promise((r) => setTimeout(r, 20));
    expect(global.fetch).not.toHaveBeenCalled();
    expect(insertMock).not.toHaveBeenCalled();
    expect(trackMock).not.toHaveBeenCalled();
    expect(toastError).not.toHaveBeenCalled();
    expect(screen.queryByText(SUCCESS_TEXT)).toBeNull();
  });
});
