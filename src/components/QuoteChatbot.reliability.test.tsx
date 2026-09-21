/**
 * M02b — QuoteChatbot submission reliability (CODEX-M02B-COUNTERPROPOSAL.md / CLAUDE-M02B-ACK.md).
 * TEST-ONLY: fetch and analytics are mocked before any interaction; no real endpoint is ever hit.
 * Acceptance = HTTP ok da função receive-lead (mesmo destino do QuoteForm).
 * O FormSubmit foi removido em 21/09/2026: parou de responder ao navegador e, por ser o
 * destino crítico desde 18/09, derrubou os leads do chat, da calculadora e do popup.
 * A notificação por e-mail vai junto, sem decidir o sucesso — por isso a contagem de
 * chamadas filtra pelo destino crítico.
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
const CRITICO = "receive-lead";
/** Chamadas ao destino que decide o sucesso; ignora a notificação por e-mail. */
const chamadasCriticas = () => fetchMock.mock.calls.filter((c) => String(c[0]).includes(CRITICO));
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
    stubFetch(() => Promise.resolve(jsonRes(true, {})));
    await fillToService();
    expect(chamadasCriticas()).toHaveLength(0);
  });
  it("A) 200 + success:true → one event, done, submission text (no delivery promise)", async () => {
    stubFetch(() => Promise.resolve(jsonRes(true, {})));
    await fillToService(); clickService();
    await screen.findByText(SUCCESS);
    expect(track).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/Request submitted\./)).toBeInTheDocument();
    expect(screen.queryByText(/Our team will contact you/)).toBeNull();
    const call = chamadasCriticas()[0]; expect(String(call[0])).toContain(CRITICO); expect((call[1] as RequestInit).signal).toBeDefined();
  });
  it("B) 200 + success:\"true\" (string) → accepted", async () => {
    stubFetch(() => Promise.resolve(jsonRes(true, { success: "true" })));
    await fillToService(); clickService();
    await screen.findByText(SUCCESS); expect(track).toHaveBeenCalledTimes(1);
  });
  it("C1) 200 + success:false → unconfirmed, no event, retry offered", async () => {
    stubFetch(() => Promise.resolve(jsonRes(false, {})));
    await fillToService(); clickService();
    await screen.findByText(UNCONFIRMED); expect(track).not.toHaveBeenCalled();
    expect(screen.queryByText(SUCCESS)).toBeNull();
    expect(screen.getAllByRole("button", { name: "Standard Cleaning" }).length).toBeGreaterThanOrEqual(2); // options re-offered
  });
  // receive-lead confirma pelo status HTTP, como o QuoteForm sempre fez. O corpo não é lido,
  // então um 200 com JSON inválido ou vazio continua sendo aceite — e é o comportamento correto:
  // ler o corpo foi justamente o que quebrou os leads quando o provedor antigo mudou de resposta.
  it("C2) 200 com JSON inválido → aceito (quem decide é o status)", async () => {
    stubFetch(() => Promise.resolve(badJsonRes()));
    await fillToService(); clickService(); await screen.findByText(SUCCESS); expect(track).toHaveBeenCalledTimes(1);
  });
  it("C3) 200 com corpo vazio → aceito (quem decide é o status)", async () => {
    stubFetch(() => Promise.resolve(jsonRes(true, null)));
    await fillToService(); clickService(); await screen.findByText(SUCCESS); expect(track).toHaveBeenCalledTimes(1);
  });
  it("D) HTTP 500 → unconfirmed; manual retry then 200 → exactly one event", async () => {
    // Conta só o destino crítico: a notificação por e-mail viaja junto e não pode deslocar o contador.
    let n = 0;
    stubFetch((url) =>
      Promise.resolve(String(url).includes(CRITICO) ? (n++ === 0 ? jsonRes(false, {}) : jsonRes(true, {})) : jsonRes(true, {})),
    );
    await fillToService(); clickService();
    await screen.findByText(UNCONFIRMED); expect(track).not.toHaveBeenCalled();
    clickService();
    await screen.findByText(SUCCESS); expect(track).toHaveBeenCalledTimes(1); expect(chamadasCriticas()).toHaveLength(2);
    const body = JSON.parse(String((chamadasCriticas()[1][1] as RequestInit).body)); expect(body.name).toBe("Jane"); expect(body.phone).toBe("3015550100");
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
    await screen.findByText(UNCONFIRMED); expect(track).not.toHaveBeenCalled(); expect(chamadasCriticas()).toHaveLength(1);
  });
  it("G) two synchronous submits → one fetch; a second accepted submission is impossible without restart", async () => {
    stubFetch(() => Promise.resolve(jsonRes(true, {})));
    await fillToService();
    await act(async () => { clickService(); clickService(); });
    await screen.findByText(SUCCESS); expect(chamadasCriticas()).toHaveLength(1); expect(track).toHaveBeenCalledTimes(1);
  });
  it("H) analytics throwing does not revert an accepted submission nor allow a duplicate", async () => {
    track.mockImplementationOnce(() => { throw new Error("gtag boom"); });
    stubFetch(() => Promise.resolve(jsonRes(true, {})));
    await fillToService(); clickService();
    await screen.findByText(SUCCESS); expect(screen.queryByText(UNCONFIRMED)).toBeNull(); expect(chamadasCriticas()).toHaveLength(1);
  });
});
