/**
 * Envio do formulário em espanhol (QuoteFormES) — helper PRIVADO deste formulário.
 *
 * Contrato (consenso Codex/Claude, 27/09/2026):
 * - O registro no Supabase (`quote_requests`) é o destino que DECIDE: só com o insert aceito o
 *   formulário pode anunciar sucesso, disparar tracking e limpar os campos.
 * - A notificação por e-mail (Resend, via `/api/send-quote-email`) é auxiliar e OBSERVÁVEL: ela
 *   conta como aceita apenas com HTTP ok E corpo JSON com `channel === "resend"` (e `success`
 *   ausente ou `true`). Essa função devolve 200 mesmo quando não envia (`netlify-forms-only`,
 *   `netlify-forms-fallback`), por isso o status sozinho não vale. "Aceita" significa que a API do
 *   Resend aceitou a chamada; nunca significa entrega na caixa de entrada.
 * - Um limite duro cobre import do client, insert, fetch e parse do e-mail. A lentidão ou a falha
 *   de um destino não apaga o aceite conhecido do outro: o que já resolveu é registrado como tal e
 *   um aceite que chega depois do limite é gravado para a próxima tentativa, sem repetir o envio.
 * - Estado por payload e por montagem (ref do componente). Um destino aceito nunca é reenviado no
 *   mesmo fluxo; um insert "uncertain" (pode ter acontecido) também não é repetido. Um e-mail
 *   "uncertain" pode ser reenviado numa nova tentativa, o que pode gerar segunda notificação.
 *
 * Limites declarados: nada disto sobrevive a remount, reload ou troca de dispositivo, e não há
 * chave de idempotência no servidor. Não é idempotência global.
 *
 * Não substitui nem altera `@/lib/submit-lead-dual` (cujo destino decisor é o receive-lead).
 */
import type { MutableRefObject } from "react";
import type { QuoteRequestInsert } from "@/lib/submit-lead-dual";

export type EsDestinationState = "not_tried" | "accepted" | "failed" | "uncertain";

export interface EsLeadState {
  key: string;
  db: EsDestinationState;
  email: EsDestinationState;
  attempt: number;
}

export interface EsLeadResult {
  db: EsDestinationState;
  email: EsDestinationState;
  /** True exatamente uma vez por chave, na chamada que anuncia o aceite do banco ao chamador. */
  dbJustAccepted: boolean;
}

export const ES_SUBMIT_TIMEOUT_MS = 15000;
export const EMAIL_NOTIFY_URL = "/api/send-quote-email";

/** Chave determinística do payload (ordem de chaves estável). Nunca é registrada nem persistida. */
export function esPayloadKey(payload: Record<string, unknown>): string {
  return JSON.stringify(payload, Object.keys(payload).sort());
}

/** A API de e-mail aceitou a chamada: HTTP ok, `channel === "resend"`, `success` ausente ou true. */
export function isEmailAccepted(ok: boolean, body: unknown): boolean {
  if (!ok || !body || typeof body !== "object") return false;
  const b = body as { channel?: unknown; success?: unknown };
  if (b.channel !== "resend") return false;
  return b.success === undefined || b.success === true || b.success === "true";
}

const isAbort = (e: unknown) => (e as { name?: string } | null)?.name === "AbortError";

/** Por objeto de estado (portanto por chave e por montagem): o aceite do banco já foi anunciado? */
const aceiteAnunciado = new WeakMap<EsLeadState, boolean>();

async function insertRow(row: QuoteRequestInsert, signal: AbortSignal): Promise<EsDestinationState> {
  try {
    const { supabase } = await import("@/integrations/supabase/client");
    if (signal.aborted) return "uncertain";
    const { error } = await supabase.from("quote_requests").insert(row).abortSignal(signal);
    if (error) return signal.aborted ? "uncertain" : "failed";
    return "accepted";
  } catch (e) {
    return signal.aborted || isAbort(e) ? "uncertain" : "failed";
  }
}

async function notifyByEmail(body: Record<string, unknown>, signal: AbortSignal): Promise<EsDestinationState> {
  try {
    const res = await fetch(EMAIL_NOTIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal,
    });
    let parsed: unknown = null;
    try {
      parsed = await res.json();
    } catch {
      return signal.aborted ? "uncertain" : "failed";
    }
    return isEmailAccepted(res.ok, parsed) ? "accepted" : "failed";
  } catch (e) {
    return signal.aborted || isAbort(e) ? "uncertain" : "failed";
  }
}

export interface SubmitLeadEsOptions {
  stateRef: MutableRefObject<EsLeadState | null>;
  key: string;
  dbRow: QuoteRequestInsert;
  emailBody: Record<string, unknown>;
  timeoutMs?: number;
}

export async function submitLeadES(opts: SubmitLeadEsOptions): Promise<EsLeadResult> {
  const { stateRef, key, dbRow, emailBody } = opts;
  const timeoutMs = opts.timeoutMs ?? ES_SUBMIT_TIMEOUT_MS;
  if (!stateRef.current || stateRef.current.key !== key) {
    stateRef.current = { key, db: "not_tried", email: "not_tried", attempt: 0 };
  }
  const state = stateRef.current;
  const attempt = ++state.attempt;

  const tryDb = state.db === "not_tried" || state.db === "failed"; // nunca repete insert aceito ou incerto
  const tryEmail = state.email !== "accepted";
  const dbCtl = new AbortController();
  const emailCtl = new AbortController();
  const timer = setTimeout(() => {
    dbCtl.abort();
    emailCtl.abort();
  }, timeoutMs);

  let dbSettled: EsDestinationState | undefined;
  let emailSettled: EsDestinationState | undefined;
  let settled = false;

  // Registra cada destino assim que resolve. Depois de o limite já ter respondido ao chamador, só um
  // aceite é gravado, e só enquanto esta tentativa ainda for a atual: é isso que impede a próxima
  // tentativa manual de repetir um envio já aceito. Não emite evento nem toca a UI.
  const record = (dest: "db" | "email") => (result: EsDestinationState): EsDestinationState => {
    if (dest === "db") dbSettled = result;
    else emailSettled = result;
    const current = stateRef.current === state && state.attempt === attempt;
    if (settled && result === "accepted" && current) {
      if (dest === "db" && tryDb) state.db = "accepted";
      if (dest === "email" && tryEmail) state.email = "accepted";
    }
    return result;
  };

  const dbP: Promise<EsDestinationState> = (tryDb ? insertRow(dbRow, dbCtl.signal) : Promise.resolve(state.db)).then(record("db"));
  const emailP: Promise<EsDestinationState> = (
    tryEmail ? notifyByEmail(emailBody, emailCtl.signal) : Promise.resolve(state.email)
  ).then(record("email"));

  // Limite duro mesmo que uma promessa ignore o abort: só o que ainda está pendente vira "uncertain".
  let hardTimer: ReturnType<typeof setTimeout> | undefined;
  const hardLimit = new Promise<[EsDestinationState, EsDestinationState]>((resolve) => {
    hardTimer = setTimeout(() => {
      if (!settled) resolve([dbSettled ?? "uncertain", emailSettled ?? "uncertain"]);
    }, timeoutMs + 500);
  });
  let db: EsDestinationState;
  let email: EsDestinationState;
  try {
    [db, email] = await Promise.race([Promise.all([dbP, emailP]) as Promise<[EsDestinationState, EsDestinationState]>, hardLimit]);
  } finally {
    settled = true;
    clearTimeout(timer);
    clearTimeout(hardTimer);
  }

  // Resultado tardio de uma tentativa superada não sobrescreve o estado atual.
  if (stateRef.current !== state || state.attempt !== attempt) {
    return { db: state.db, email: state.email, dbJustAccepted: false };
  }
  state.db = tryDb ? db : state.db;
  state.email = tryEmail ? email : state.email;
  const dbJustAccepted = state.db === "accepted" && aceiteAnunciado.get(state) !== true;
  if (dbJustAccepted) aceiteAnunciado.set(state, true);
  return { db: state.db, email: state.email, dbJustAccepted };
}
