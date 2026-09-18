/**
 * M02b — QuoteChatbot submission reliability (CODEX-M02B-COUNTERPROPOSAL.md / CLAUDE-M02B-ACK.md).
 * TEST-ONLY: fetch and analytics are mocked before any interaction; no real endpoint is ever hit.
 * Acceptance = HTTP ok AND JSON object with success === true | "true" (defensive policy, not a provider contract).
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor, act, cleanup } from "@testing-library/react";
import QuoteChatbot from "@/components/QuoteChatbot";
import { trackQuoteFormSubmit } from "@/lib/analytics";

vi.mock("@/lib/analytics", () => ({ trackQuoteFormSubmit: vi.fn() }));
if (!Element.prototype.scrollIntoView) Element.prototype.scrollIntoView = () => {};
const track = vi.mocked(trackQuoteFormSubmit);
const SUCCESS = /Your quote request has been submitted/;
const UNCONFIRMED = /We couldn't confirm your request/;

type Res = { ok: boolean; status: number; json: () => Promise<unknown> };
const jsonRes = (ok: boolean, body: unknown): Res => ({ ok, status: ok ? 200 : 500, json: () => Promise.resolve(body) });
const badJsonRes = (): Res => ({ ok: true, status: 200, json: () => Promise.reject(new SyntaxError("bad json")) });
let fetchMock: ReturnType<typeof vi.fn>;
function stubFetch(impl: (url: string, init: RequestInit) => Promise<Res>) {
  fetchMock = vi.fn(impl);
  global.fetch = fetchMock as unknown as typeof fetch;
}

async function fillToService() {
  render(<QuoteChatbot />);
  fireEvent.click(screen.getByRole("button", { name: /chat with us/i }));
  for (const v of ["Jane", "20850", "3015550100", "1 Main St"]) {
    const input = await screen.findByRole("textbox");
    fireEvent.change(input, { target: { value: v } });
    fireEvent.submit(input.closest("form")!);
    await act(async () => { await new Promise((r) => setTimeout(r, 450)); });
  }
  await screen.findByRole("button", { name: "Standard Cleaning" });
}
const clickService = () => fireEvent.click(screen.getAllByRole("button", { name: "Standard Cleaning" }).at(-1)!);

beforeEach(() => { vi.clearAllMocks(); });
afterEach(() => { cleanup(); vi.useRealTimers(); });

describe("QuoteChatbot submit — success only when the service accepts", { timeout: 20000 }, () => {
  it("no fetch before the last step", async () => {
    stubFetch(() => Promise.resolve(jsonRes(true, { success: true })));
    await fillToService();
    expect(fetchMock).not.toHaveBeenCalled();
  });
  it("A) 200 + success:true → one event, done, submission text (no delivery promise)", async () => {
    stubFetch(() => Promise.resolve(jsonRes(true, { success: true })));
    await fillToService(); clickService();
    await screen.findByText(SUCCESS);
    expect(track).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/Request submitted\./)).toBeInTheDocument();
    expect(screen.queryByText(/Our team will contact you/)).toBeNull();
    const call = fetchMock.mock.calls[0]; expect(String(call[0])).toContain("formsubmit.co/ajax/"); expect((call[1] as RequestInit).signal).toBeDefined();
  });
  it("B) 200 + success:\"true\" (string) → accepted", async () => {
    stubFetch(() => Promise.resolve(jsonRes(true, { success: "true" })));
    await fillToService(); clickService();
    await screen.findByText(SUCCESS); expect(track).toHaveBeenCalledTimes(1);
  });
  it("C1) 200 + success:false → unconfirmed, no event, retry offered", async () => {
    stubFetch(() => Promise.resolve(jsonRes(true, { success: false })));
    await fillToService(); clickService();
    await screen.findByText(UNCONFIRMED); expect(track).not.toHaveBeenCalled();
    expect(screen.queryByText(SUCCESS)).toBeNull();
    expect(screen.getAllByRole("button", { name: "Standard Cleaning" }).length).toBeGreaterThanOrEqual(2); // options re-offered
  });
  it("C2) 200 + invalid JSON → unconfirmed, no event", async () => {
    stubFetch(() => Promise.resolve(badJsonRes()));
    await fillToService(); clickService(); await screen.findByText(UNCONFIRMED); expect(track).not.toHaveBeenCalled();
  });
  it("C3) 200 + empty/unknown body → unconfirmed, no event", async () => {
    stubFetch(() => Promise.resolve(jsonRes(true, null)));
    await fillToService(); clickService(); await screen.findByText(UNCONFIRMED); expect(track).not.toHaveBeenCalled();
  });
  it("D) HTTP 500 → unconfirmed; manual retry then 200 → exactly one event", async () => {
    let n = 0;
    stubFetch(() => Promise.resolve(n++ === 0 ? jsonRes(false, { success: false }) : jsonRes(true, { success: true })));
    await fillToService(); clickService();
    await screen.findByText(UNCONFIRMED); expect(track).not.toHaveBeenCalled();
    clickService();
    await screen.findByText(SUCCESS); expect(track).toHaveBeenCalledTimes(1); expect(fetchMock).toHaveBeenCalledTimes(2);
    const body = JSON.parse(String((fetchMock.mock.calls[1][1] as RequestInit).body)); expect(body.Name).toBe("Jane"); expect(body.Phone).toBe("3015550100");
  });
  it("E) network rejection → unconfirmed, no event, answers preserved", async () => {
    stubFetch(() => Promise.reject(new Error("network")));
    await fillToService(); clickService();
    await screen.findByText(UNCONFIRMED); expect(track).not.toHaveBeenCalled(); expect(screen.getByText("1 Main St")).toBeInTheDocument();
  });
  it("F) timeout (abort at 15s) → unconfirmed, no automatic retry, single fetch", async () => {
    stubFetch((_u, init) => new Promise((_res, rej) => { init.signal!.addEventListener("abort", () => rej(new DOMException("aborted", "AbortError"))); }));
    await fillToService();
    vi.useFakeTimers({ shouldAdvanceTime: true });
    clickService();
    await act(async () => { await vi.advanceTimersByTimeAsync(15100); });
    vi.useRealTimers();
    await screen.findByText(UNCONFIRMED); expect(track).not.toHaveBeenCalled(); expect(fetchMock).toHaveBeenCalledTimes(1);
  });
  it("G) two synchronous submits → one fetch; a second accepted submission is impossible without restart", async () => {
    stubFetch(() => Promise.resolve(jsonRes(true, { success: true })));
    await fillToService();
    await act(async () => { clickService(); clickService(); });
    await screen.findByText(SUCCESS); expect(fetchMock).toHaveBeenCalledTimes(1); expect(track).toHaveBeenCalledTimes(1);
  });
  it("H) analytics throwing does not revert an accepted submission nor allow a duplicate", async () => {
    track.mockImplementationOnce(() => { throw new Error("gtag boom"); });
    stubFetch(() => Promise.resolve(jsonRes(true, { success: true })));
    await fillToService(); clickService();
    await screen.findByText(SUCCESS); expect(screen.queryByText(UNCONFIRMED)).toBeNull(); expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
