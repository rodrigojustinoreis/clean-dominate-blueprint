/**
 * M02c — submitLeadDual matrix (CODEX-M02C-COUNTERPROPOSAL.md / CLAUDE-M02C-ACK.md).
 * TEST-ONLY: fetch and the Supabase client module are mocked before any call; no real endpoint is ever hit.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { submitLeadDual, payloadKey, type DualLeadState } from "./submit-lead-dual";

// ── Supabase mock: insert(row).abortSignal(signal) → { error } ─────────────────────────────────────────────
const insertImpl = vi.fn<(row: unknown, signal: AbortSignal) => Promise<{ error: unknown }>>();
const importImpl: () => Promise<unknown> = async () => ({ supabase: { from: () => ({ insert: (row: unknown) => ({ abortSignal: (signal: AbortSignal) => insertImpl(row, signal) }) }) } });
vi.mock("@/integrations/supabase/client", () => ({ get supabase() { return (globalThis as { __sb?: unknown }).__sb; } }));

type Res = { ok: boolean; json: () => Promise<unknown> };
const okBody = (body: unknown): Res => ({ ok: true, json: () => Promise.resolve(body) });
const res500 = (): Res => ({ ok: false, json: () => Promise.resolve({ success: false }) });
let fetchMock: ReturnType<typeof vi.fn>;
const CRITICO = "receive-lead";
/** Só o destino que decide o sucesso; a notificação por e-mail viaja junto e não conta. */
const chamadasCriticas = () => fetchMock.mock.calls.filter((c) => String(c[0]).includes(CRITICO));
const stubFetch = (impl: (url: string, init: RequestInit) => Promise<Res>) => { fetchMock = vi.fn(impl); global.fetch = fetchMock as unknown as typeof fetch; };
const hang = (init: RequestInit) => new Promise<Res>((_r, rej) => init.signal!.addEventListener("abort", () => rej(new DOMException("aborted", "AbortError"))));

const email = { Name: "Jane", Phone: "3015550100", _subject: "x" };
const row = { name: "Jane", phone: "3015550100", email: "jane@example.com", zip: "20850", service: "recurring", message: "m" };
let ref: { current: DualLeadState | null };
const run = (extra: Record<string, unknown> = {}) => submitLeadDual({ stateRef: ref, key: payloadKey(email), emailBody: email, dbRow: row, timeoutMs: 200, ...extra });

beforeEach(async () => {
  ref = { current: null }; insertImpl.mockReset(); vi.clearAllMocks();
  (globalThis as { __sb?: unknown }).__sb = (await importImpl() as { supabase: unknown }).supabase;
});
afterEach(() => { vi.useRealTimers(); });

describe("submitLeadDual — e-mail critical, db backup", () => {
  it("200 do receive-lead + db ok → accepted/accepted, emailJustAccepted uma vez", async () => {
    stubFetch(() => Promise.resolve(okBody({}))); insertImpl.mockResolvedValue({ error: null });
    const r = await run(); expect(r).toMatchObject({ email: "accepted", db: "accepted", emailJustAccepted: true, dbSkipped: false });
    const r2 = await run(); expect(r2).toMatchObject({ email: "accepted", db: "accepted", emailJustAccepted: false, dbSkipped: true });
    expect(chamadasCriticas()).toHaveLength(1); expect(insertImpl).toHaveBeenCalledTimes(1);
  });
  // Quem decide é o status. Ler o corpo foi o que derrubou os leads quando o provedor
  // antigo passou a responder outra coisa, então um 200 com corpo estranho é aceite.
  it("200 com corpo inválido ou vazio → aceito (o status decide)", async () => {
    insertImpl.mockResolvedValue({ error: null });
    stubFetch(() => Promise.resolve(okBody(null))); expect((await run()).email).toBe("accepted");
    ref.current = null; stubFetch(() => Promise.resolve({ ok: true, json: () => Promise.reject(new SyntaxError("bad")) })); expect((await run()).email).toBe("accepted");
  });
  it("email accepted + db failed → still accepted (backup only)", async () => {
    stubFetch(() => Promise.resolve(okBody({}))); insertImpl.mockResolvedValue({ error: { message: "db down" } });
    const r = await run(); expect(r).toMatchObject({ email: "accepted", db: "failed", emailJustAccepted: true });
  });
  it("email accepted even when the Supabase import rejects or the insert throws", async () => {
    stubFetch(() => Promise.resolve(okBody({})));
    (globalThis as { __sb?: unknown }).__sb = { from: () => { throw new Error("client broken"); } };
    const r = await run(); expect(r.email).toBe("accepted"); expect(r.db).toBe("failed");
  });
  it("email 500 + db accepted → unconfirmed; manual retry sends only the e-mail (no second insert)", async () => {
    let n = 0; stubFetch((url) => !String(url).includes(CRITICO) ? Promise.resolve(okBody({})) : Promise.resolve(n++ === 0 ? res500() : okBody({}))); insertImpl.mockResolvedValue({ error: null });
    const r1 = await run(); expect(r1).toMatchObject({ email: "failed", db: "accepted", emailJustAccepted: false });
    const r2 = await run(); expect(r2).toMatchObject({ email: "accepted", db: "accepted", emailJustAccepted: true, dbSkipped: true });
    expect(chamadasCriticas()).toHaveLength(2); expect(insertImpl).toHaveBeenCalledTimes(1);
  });
  it("email rejected + db failed → both failed; retry tries both again", async () => {
    stubFetch(() => Promise.reject(new Error("network"))); insertImpl.mockResolvedValue({ error: { message: "x" } });
    const r1 = await run(); expect(r1).toMatchObject({ email: "failed", db: "failed" });
    const r2 = await run(); expect(chamadasCriticas()).toHaveLength(2); expect(insertImpl).toHaveBeenCalledTimes(2); expect(r2.dbSkipped).toBe(false);
  });
  it("timeout: e-mail hanging → uncertain, db hanging → uncertain; retry never repeats an uncertain insert", async () => {
    stubFetch((_u, init) => hang(init)); insertImpl.mockImplementation((_r, signal) => new Promise((_res, rej) => signal.addEventListener("abort", () => rej(new DOMException("aborted", "AbortError")))));
    const r1 = await run(); expect(r1).toMatchObject({ email: "uncertain", db: "uncertain" });
    stubFetch(() => Promise.resolve(okBody({})));
    const r2 = await run(); expect(r2).toMatchObject({ email: "accepted", db: "uncertain", emailJustAccepted: true, dbSkipped: true });
    expect(insertImpl).toHaveBeenCalledTimes(1);
  });
  it("hard limit: a promise that ignores abort still ends the wait as uncertain", async () => {
    stubFetch(() => new Promise(() => {})); insertImpl.mockImplementation(() => new Promise(() => {}));
    const t0 = Date.now(); const r = await run({ timeoutMs: 100 }); expect(Date.now() - t0).toBeLessThan(2000);
    expect(r).toMatchObject({ email: "uncertain", db: "uncertain" });
  });
  it("edited payload → new key → both destinations tried again", async () => {
    stubFetch(() => Promise.resolve(okBody({}))); insertImpl.mockResolvedValue({ error: null });
    await run(); const email2 = { ...email, Phone: "3015550199" };
    const r = await submitLeadDual({ stateRef: ref, key: payloadKey(email2), emailBody: email2, dbRow: row, timeoutMs: 200 });
    expect(r).toMatchObject({ email: "accepted", emailJustAccepted: true, dbSkipped: false }); expect(insertImpl).toHaveBeenCalledTimes(2);
  });
  it("payloadKey is deterministic regardless of key order and never leaks to console", () => {
    const warn = vi.spyOn(console, "error"); const log = vi.spyOn(console, "log");
    expect(payloadKey({ b: 1, a: 2 })).toBe(payloadKey({ a: 2, b: 1 }));
    expect(warn).not.toHaveBeenCalled(); expect(log).not.toHaveBeenCalled();
  });
});
