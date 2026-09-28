/**
 * @vitest-environment jsdom
 * @vitest-environment-options { "url": "https://capitalcleancare.com/es/contacto" }
 *
 * Confiabilidade do formulário em espanhol (protótipo de medição, 27/09/2026).
 *
 * SÓ TESTE: Supabase, fetch, analytics e o Select do Radix são simulados; nenhum destino real é
 * tocado, nenhum lead ou e-mail é produzido. Contrato sob teste: o insert no Supabase decide; a
 * notificação por e-mail é observável (HTTP ok + `channel: "resend"`) e nunca significa entrega;
 * Netlify Forms é auxiliar. Os casos B, C1–C3, D, E, G e H falham no baseline (que anunciava sucesso
 * sem aguardar nada e prometia "menos de 2 horas") e passam com o patch.
 *
 * O Radix Select não é acionável de forma confiável no jsdom; o módulo de UI é substituído por
 * <select> nativos apenas aqui. O componente não muda por causa disso.
 *
 * Limites documentados: travas e estado valem só nesta montagem; remount, reload e resposta incerta
 * do servidor não são cobertos (sem chave de idempotência no receptor).
 */
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import type { ReactNode } from "react";

// ── Mocks ──────────────────────────────────────────────────────────────────
const insertMock = vi.fn();
vi.mock("@/integrations/supabase/client", () => ({
  // Uma forma para os dois estilos: o helper encadeia .insert(row).abortSignal(signal); o handler
  // antigo encadeava .insert(row).then(...). O mesmo arquivo roda inalterado contra o baseline.
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
vi.mock("@/lib/analytics", () => ({ trackQuoteFormSubmit: vi.fn(), trackQuoteFormStart: vi.fn() }));
vi.mock("@/components/ui/select", () => ({
  Select: ({ value, onValueChange, children }: { value: string; onValueChange: (v: string) => void; children: ReactNode }) => (
    <select value={value} onChange={(e) => onValueChange(e.target.value)}>
      <option value="">-</option>
      {children}
    </select>
  ),
  SelectTrigger: () => null,
  SelectValue: () => null,
  SelectContent: ({ children }: { children: ReactNode }) => <>{children}</>,
  SelectItem: ({ value, children }: { value: string; children: ReactNode }) => <option value={value}>{children}</option>,
}));

import QuoteFormES from "./QuoteFormES";
import { isEmailAccepted } from "./submit-lead-es";
import { trackQuoteFormSubmit } from "@/lib/analytics";

const trackMock = vi.mocked(trackQuoteFormSubmit);

type Res = { ok: boolean; status: number; json: () => Promise<unknown> };
const jsonRes = (ok: boolean, body: unknown, status = ok ? 200 : 500): Promise<Res> =>
  Promise.resolve({ ok, status, json: () => Promise.resolve(body) });
const resendOk = () => jsonRes(true, { success: true, channel: "resend" });
const resendFallback = () => jsonRes(true, { success: true, channel: "netlify-forms-only" });
const res500 = () => jsonRes(false, { error: "x" });
const invalidJson = (): Promise<Res> => Promise.resolve({ ok: true, status: 200, json: () => Promise.reject(new SyntaxError("bad json")) });

const calls = { email: 0, netlify: 0 };
function stubFetch(email: () => Promise<Res>) {
  calls.email = 0; calls.netlify = 0;
  global.fetch = vi.fn((url: unknown) => {
    const u = String(url);
    if (u.includes("/api/send-quote-email")) { calls.email++; return email(); }
    calls.netlify++; // POST "/" (Netlify Forms quote-es)
    return jsonRes(true, {});
  }) as unknown as typeof fetch;
}

const FIELDS = { name: "María Prueba", phone: "2400000000", email: "maria@example.test", zip: "20850" };
function mount() {
  return render(<MemoryRouter initialEntries={["/es/contacto"]}><QuoteFormES /></MemoryRouter>);
}
function fill(container: HTMLElement, overrides: Partial<typeof FIELDS> = {}) {
  const v = { ...FIELDS, ...overrides };
  for (const k of Object.keys(v) as (keyof typeof v)[]) fireEvent.change(container.querySelector(`#es-${k}`)!, { target: { value: v[k] } });
  const selects = container.querySelectorAll("select"); // service, size, timing (ordem do DOM)
  fireEvent.change(selects[0], { target: { value: "deep" } });
  fireEvent.change(selects[1], { target: { value: "house-3" } });
  fireEvent.click(container.querySelector('input[type="checkbox"]')!); // consentimento: regra da base, preservada
}
const form = (c: HTMLElement) => c.querySelector("form");
const submit = (c: HTMLElement) => fireEvent.submit(form(c)!);
const ERROR = /No pudimos confirmar tu solicitud/;
const CONFIRMED = /Tu solicitud quedó registrada\. Para ayuda inmediata/;
const UNCONFIRMED = /no pudimos confirmar el aviso al equipo/;
const OLD_PROMISE = /menos de 2 horas|ya avisamos al equipo/;

describe("isEmailAccepted — aceite da API do Resend, nunca inbox", () => {
  it("aceita só HTTP ok + objeto com channel resend e success ausente ou booleano true", () => {
    expect(isEmailAccepted(true, { channel: "resend" })).toBe(true);
    expect(isEmailAccepted(true, { channel: "resend", success: true })).toBe(true);
  });
  it("recusa string 'true', false, null, array, corpo não-objeto, outro channel e HTTP não-ok", () => {
    expect(isEmailAccepted(true, { channel: "resend", success: "true" })).toBe(false);
    expect(isEmailAccepted(true, { channel: "resend", success: false })).toBe(false);
    expect(isEmailAccepted(true, { channel: "resend", success: null })).toBe(false);
    expect(isEmailAccepted(true, null)).toBe(false);
    expect(isEmailAccepted(true, "resend")).toBe(false);
    expect(isEmailAccepted(true, [{ channel: "resend" }])).toBe(false);
    expect(isEmailAccepted(true, { channel: "netlify-forms-only", success: true })).toBe(false);
    expect(isEmailAccepted(true, { channel: "netlify-forms-fallback", success: true })).toBe(false);
    expect(isEmailAccepted(false, { channel: "resend", success: true })).toBe(false);
  });
});

beforeEach(() => {
  vi.clearAllMocks();
  insertMock.mockResolvedValue({ error: null });
});
afterEach(() => {
  vi.useRealTimers();
});

describe("QuoteFormES — o registro no Supabase decide; e-mail é observável", () => {
  it("A) insert aceito + Resend aceito → sucesso confirmado, tracking uma vez, cada destino uma vez, sem promessa de prazo", async () => {
    stubFetch(resendOk);
    const { container } = mount();
    fill(container);
    submit(container);
    await waitFor(() => expect(form(container)).toBeNull());
    expect(screen.getByText(CONFIRMED)).toBeTruthy();
    expect(screen.queryByText(OLD_PROMISE)).toBeNull();
    expect(trackMock).toHaveBeenCalledTimes(1);
    expect(trackMock).toHaveBeenCalledWith("deep", "/es/contacto", "es");
    expect(insertMock).toHaveBeenCalledTimes(1);
    expect(calls).toEqual({ email: 1, netlify: 1 });
    const row = insertMock.mock.calls[0][0] as Record<string, unknown>;
    expect(row).not.toHaveProperty("source"); // coluna inexistente: nunca enviada
    expect(row.email).toBe(FIELDS.email);
  });

  it("A2) e-mail ausente → dbRow.email é string vazia (NOT NULL no schema), notificação segue com null", async () => {
    stubFetch(resendOk);
    const { container } = mount();
    fill(container, { email: "" });
    submit(container);
    await waitFor(() => expect(form(container)).toBeNull());
    expect((insertMock.mock.calls[0][0] as Record<string, unknown>).email).toBe("");
    const emailCall = (global.fetch as unknown as { mock: { calls: unknown[][] } }).mock.calls.find((c) => String(c[0]).includes("send-quote-email"))!;
    expect(JSON.parse((emailCall[1] as { body: string }).body).email).toBeNull();
  });

  it("B) insert falha + Resend aceito → SEM sucesso, campos preservados, botão utilizável, zero tracking", async () => {
    insertMock.mockResolvedValue({ error: { message: "42703" } });
    stubFetch(resendOk);
    const { container } = mount();
    fill(container);
    submit(container);
    await waitFor(() => expect(screen.getByText(ERROR)).toBeTruthy());
    expect(form(container)).not.toBeNull();
    expect((container.querySelector("#es-name") as HTMLInputElement).value).toBe(FIELDS.name);
    await waitFor(() => expect((container.querySelector('button[type="submit"]') as HTMLButtonElement).disabled).toBe(false));
    expect(trackMock).not.toHaveBeenCalled();
  });

  it("C1) insert aceito + e-mail HTTP 500 → sucesso com aviso de notificação não confirmada e telefone", async () => {
    stubFetch(res500);
    const { container } = mount();
    fill(container);
    submit(container);
    await waitFor(() => expect(form(container)).toBeNull());
    expect(screen.getByText(UNCONFIRMED)).toBeTruthy();
    expect(screen.queryByText(CONFIRMED)).toBeNull();
    expect(trackMock).toHaveBeenCalledTimes(1);
  });

  it("C2) insert aceito + HTTP 200 com channel netlify-forms-only → não confirmada (status 200 não vale)", async () => {
    stubFetch(resendFallback);
    const { container } = mount();
    fill(container);
    submit(container);
    await waitFor(() => expect(form(container)).toBeNull());
    expect(screen.getByText(UNCONFIRMED)).toBeTruthy();
  });

  it("C3) insert aceito + corpo inválido → não confirmada, sem lançar", async () => {
    stubFetch(invalidJson);
    const { container } = mount();
    fill(container);
    submit(container);
    await waitFor(() => expect(form(container)).toBeNull());
    expect(screen.getByText(UNCONFIRMED)).toBeTruthy();
  });

  it("D) tudo falha → erro, formulário intacto, zero tracking", async () => {
    insertMock.mockResolvedValue({ error: { message: "PGRST" } });
    stubFetch(res500);
    const { container } = mount();
    fill(container);
    submit(container);
    await waitFor(() => expect(screen.getByText(ERROR)).toBeTruthy());
    expect(form(container)).not.toBeNull();
    expect(trackMock).not.toHaveBeenCalled();
    expect(calls).toEqual({ email: 1, netlify: 1 });
  });

  it("E) insert e e-mail sem resposta → erro após o limite; aceite tardio do banco → retry não repete o insert e anuncia sucesso uma vez", async () => {
    let resolveDb: (r: unknown) => void = () => {};
    insertMock.mockReturnValue(new Promise((r) => { resolveDb = r; }));
    stubFetch(() => new Promise<Res>(() => {}));
    const { container } = mount();
    fill(container);
    vi.useFakeTimers();
    submit(container);
    await vi.advanceTimersByTimeAsync(16000); // ES_SUBMIT_TIMEOUT_MS + limite duro
    vi.useRealTimers();
    await waitFor(() => expect(screen.getByText(ERROR)).toBeTruthy());
    expect(trackMock).not.toHaveBeenCalled();
    expect(insertMock).toHaveBeenCalledTimes(1);

    resolveDb({ error: null }); // aceite chega depois do limite
    await new Promise((r) => setTimeout(r, 10));
    stubFetch(resendOk); // o e-mail, incerto, pode ser reenviado (documentado)
    submit(container); // mesmo payload
    await waitFor(() => expect(form(container)).toBeNull());
    expect(insertMock).toHaveBeenCalledTimes(1); // insert aceito não repetido
    expect(trackMock).toHaveBeenCalledTimes(1);
  });

  it("E2) timeout SEM aceite tardio → o retry manual chama o banco de novo e pode concluir (banco é crítico, não backup)", async () => {
    insertMock.mockReturnValueOnce(new Promise(() => {})); // 1ª tentativa: nunca responde → uncertain
    stubFetch(() => new Promise<Res>(() => {}));
    const { container } = mount();
    fill(container);
    vi.useFakeTimers();
    submit(container);
    await vi.advanceTimersByTimeAsync(16000);
    vi.useRealTimers();
    await waitFor(() => expect(screen.getByText(ERROR)).toBeTruthy());
    expect(insertMock).toHaveBeenCalledTimes(1);

    insertMock.mockResolvedValue({ error: null }); // 2ª tentativa responde
    stubFetch(resendOk);
    submit(container); // mesmo payload, ação manual
    await waitFor(() => expect(form(container)).toBeNull());
    expect(insertMock).toHaveBeenCalledTimes(2); // insert incerto foi tentado de novo
    expect(screen.getByText(CONFIRMED)).toBeTruthy();
    expect(trackMock).toHaveBeenCalledTimes(1);
  });

  it("E3) e-mail já aceito não é reenviado: insert falha + Resend aceito, retry → banco de novo, e-mail NÃO", async () => {
    insertMock.mockResolvedValueOnce({ error: { message: "PGRST" } });
    stubFetch(resendOk);
    const { container } = mount();
    fill(container);
    submit(container);
    await waitFor(() => expect(screen.getByText(ERROR)).toBeTruthy());
    expect(calls.email).toBe(1);

    insertMock.mockResolvedValue({ error: null });
    submit(container); // mesmo payload
    await waitFor(() => expect(form(container)).toBeNull());
    expect(insertMock).toHaveBeenCalledTimes(2);
    expect(calls.email).toBe(1); // aceite conhecido do e-mail não se repete
    expect(screen.getByText(CONFIRMED)).toBeTruthy(); // e o aceite conhecido conta na tela
    expect(trackMock).toHaveBeenCalledTimes(1);
  });

  it("F) insert aceito + e-mail pendente até o limite → aceite conhecido não se perde: sucesso não confirmado, tracking uma vez", async () => {
    stubFetch(() => new Promise<Res>(() => {}));
    const { container } = mount();
    fill(container);
    vi.useFakeTimers();
    submit(container);
    await vi.advanceTimersByTimeAsync(16000);
    vi.useRealTimers();
    await waitFor(() => expect(form(container)).toBeNull());
    expect(screen.getByText(UNCONFIRMED)).toBeTruthy();
    expect(trackMock).toHaveBeenCalledTimes(1);
    expect(insertMock).toHaveBeenCalledTimes(1);
  });

  it("G) duplo clique → um único fluxo, um insert", async () => {
    let resolveDb: (r: unknown) => void = () => {};
    insertMock.mockReturnValue(new Promise((r) => { resolveDb = r; }));
    stubFetch(resendOk);
    const { container } = mount();
    fill(container);
    submit(container);
    submit(container);
    await new Promise((r) => setTimeout(r, 10));
    expect(insertMock).toHaveBeenCalledTimes(1);
    resolveDb({ error: null });
    await waitFor(() => expect(form(container)).toBeNull());
    expect(trackMock).toHaveBeenCalledTimes(1);
  });

  it("H) insert falhou → retry mesmo payload repete o insert (falha conhecida), Netlify NÃO; payload novo → ambos de novo", async () => {
    insertMock.mockResolvedValue({ error: { message: "PGRST" } });
    stubFetch(res500);
    const { container } = mount();
    fill(container);
    submit(container);
    await waitFor(() => expect(screen.getByText(ERROR)).toBeTruthy());
    expect(insertMock).toHaveBeenCalledTimes(1);
    expect(calls.netlify).toBe(1);

    submit(container); // mesmo payload
    await waitFor(() => expect(insertMock).toHaveBeenCalledTimes(2));
    await new Promise((r) => setTimeout(r, 10));
    expect(calls.netlify).toBe(1); // uma vez por payload nesta montagem

    fireEvent.change(container.querySelector("#es-name")!, { target: { value: "María Cambiada" } });
    submit(container);
    await waitFor(() => expect(insertMock).toHaveBeenCalledTimes(3));
    expect(calls.netlify).toBe(2);
  });

  it("I) parâmetros de analytics sem dados de contato", async () => {
    stubFetch(resendOk);
    const { container } = mount();
    fill(container);
    submit(container);
    await waitFor(() => expect(trackMock).toHaveBeenCalledTimes(1));
    const args = JSON.stringify(trackMock.mock.calls[0]);
    for (const pii of [FIELDS.name, FIELDS.phone, FIELDS.email]) expect(args).not.toContain(pii);
  });

  it("J) SMS desmarcado é PERMITIDO (consentimento opcional, fonte de produção 26/09): envia, registra sms_consent=false e mostra sucesso", async () => {
    stubFetch(resendOk);
    const { container } = mount();
    fill(container);
    fireEvent.click(container.querySelector('input[type="checkbox"]')!); // desmarca: continua válido
    submit(container);
    await waitFor(() => expect(form(container)).toBeNull());
    expect(insertMock).toHaveBeenCalledTimes(1);
    expect((insertMock.mock.calls[0][0] as Record<string, unknown>).sms_consent).toBe(false);
    expect(calls).toEqual({ email: 1, netlify: 1 });
    expect(trackMock).toHaveBeenCalledTimes(1);
    expect(container.querySelector("#consent-err")?.textContent ?? "").toBe(""); // sem erro de consentimento
  });

  it("K) sucesso → 'Otra solicitud' → MESMO payload: pedido novo e explícito NÃO reaproveita o aceite anterior (QA do Codex, 27/09)", async () => {
    stubFetch(resendOk);
    const { container } = mount();
    fill(container);
    submit(container);
    await waitFor(() => expect(form(container)).toBeNull());
    expect(insertMock).toHaveBeenCalledTimes(1);
    expect(calls).toEqual({ email: 1, netlify: 1 });
    expect(trackMock).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByRole("button", { name: /Otra solicitud/ }));
    expect(form(container)).not.toBeNull();
    fill(container); // exatamente os mesmos dados do pedido anterior
    insertMock.mockResolvedValueOnce({ error: { code: "503", message: "unavailable" } });
    submit(container);
    // Falha do banco no pedido novo → NÃO pode mostrar sucesso; destinos foram chamados de novo.
    await waitFor(() => expect(screen.getByText(ERROR)).toBeTruthy());
    expect(form(container)).not.toBeNull();
    expect(insertMock).toHaveBeenCalledTimes(2);
    expect(calls.netlify).toBe(2);
    expect(trackMock).toHaveBeenCalledTimes(1);

    // Retry desse segundo pedido → aceito; tracking uma vez por fluxo (2 no total).
    submit(container);
    await waitFor(() => expect(insertMock).toHaveBeenCalledTimes(3));
    await waitFor(() => expect(form(container)).toBeNull());
    expect(trackMock).toHaveBeenCalledTimes(2);
  });

  it("K2) 'Otra solicitud' não existe em falha/retry: o retry do MESMO pedido continua sem repetir destino já aceito", async () => {
    // Regressão guardada por E3/H: o reset é exclusivo do botão pós-sucesso; falha mantém o estado.
    stubFetch(resendOk);
    const { container } = mount();
    fill(container);
    insertMock.mockResolvedValueOnce({ error: { code: "503", message: "unavailable" } });
    submit(container);
    await waitFor(() => expect(screen.getByText(ERROR)).toBeTruthy());
    expect(screen.queryByRole("button", { name: /Otra solicitud/ })).toBeNull();
    submit(container);
    await waitFor(() => expect(insertMock).toHaveBeenCalledTimes(2));
    await waitFor(() => expect(form(container)).toBeNull());
    expect(calls).toEqual({ email: 1, netlify: 1 }); // e-mail aceito na 1ª não repete; Netlify uma vez por payload
    expect(trackMock).toHaveBeenCalledTimes(1);
  });

  it("J2) consentimento marcado continua sendo gravado como true", async () => {
    stubFetch(resendOk);
    const { container } = mount();
    fill(container); // fill marca o checkbox
    submit(container);
    await waitFor(() => expect(form(container)).toBeNull());
    expect((insertMock.mock.calls[0][0] as Record<string, unknown>).sms_consent).toBe(true);
  });
});
