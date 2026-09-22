/**
 * Dual-destination lead submission for the price calculator and the exit-intent popup (M02c, 2026-09-18).
 *
 * Semantics in force:
 * - The CRITICAL destination is the `receive-lead` function, the same one the QuoteForm uses.
 *   Acceptance is decided by the HTTP status alone; the response body is never read. A 2xx with an
 *   odd body is an acceptance.
 * - The e-mail notification (Resend, via `/api/send-quote-email`) is fire-and-forget and can never
 *   decide, block or invalidate a lead.
 * - The Supabase insert is BACKUP storage. Its failure never blocks or invalidates the receiver attempt.
 * - Both destinations are attempted concurrently, each with its own AbortController and a hard 15s limit
 *   that also covers the dynamic import of the Supabase client. Nothing starts after an abort; late
 *   settlements of a superseded attempt never overwrite a later one (attempt token).
 * - At the hard limit, a destination that has ALREADY settled keeps its real result; only a destination
 *   still pending becomes "uncertain" (N02, 2026-09-22). Before this, the hard limit discarded a known
 *   acceptance and the manual retry called the receiver a second time.
 * - A destination that settles AFTER the hard limit records its result only when it is an acceptance, and
 *   only while the same key and attempt are still current. The helper itself emits nothing: no event, no
 *   analytics, no UI. Recording it stops the next manual retry from re-sending an already accepted POST.
 * - An acceptance is announced to the caller (`emailJustAccepted`) EXACTLY ONCE per key. If the acceptance
 *   arrived late and was therefore never announced, the next call announces it without sending anything;
 *   any call after that returns false. Private bookkeeping in a WeakMap keyed by the state object, so the
 *   public API is unchanged.
 * - Per-payload idempotency inside the current mount: destination states (`not_tried | accepted | failed |
 *   uncertain`) are kept in a ref keyed by a deterministic snapshot of the payload. Manual retry of the SAME
 *   payload never repeats an accepted receiver POST, never repeats an accepted or uncertain insert (backup),
 *   and re-sends to the receiver only when it was not accepted. Editing any field produces a new key and both
 *   destinations are tried again. Only the last snapshot is kept (declared limit). Nothing is persisted in
 *   storage/URL/analytics/console.
 * - KNOWN RESIDUAL, not solved here: a receiver attempt that never settles stays "uncertain", and the current
 *   policy retries it. If the server had in fact accepted that request, the retry produces a duplicate. Only
 *   an idempotency key plus server-side deduplication removes this; both are out of scope for N02 and remain
 *   pending. This module must not be described as "does not duplicate".
 * - Acceptance by the receiver does not prove inbox delivery, a booking or a sale; wording is the caller's job.
 *
 * Public API note: the fields `email`, `emailBody` and `emailJustAccepted` are kept for compatibility with
 * the components that call this helper. They refer to the CRITICAL destination, which is `receive-lead`,
 * not to the e-mail notification. Internally the same thing is called `receiver`.
 */
import type { MutableRefObject } from "react";
import type { Database } from "@/integrations/supabase/types";

export type QuoteRequestInsert = Database["public"]["Tables"]["quote_requests"]["Insert"];

export type DestinationState = "not_tried" | "accepted" | "failed" | "uncertain";

export interface DualLeadState {
  key: string;
  /** Critical destination (`receive-lead`). Legacy field name, kept for the callers. */
  email: DestinationState;
  db: DestinationState;
  attempt: number;
}

export interface DualLeadResult {
  /** Critical destination (`receive-lead`). Legacy field name, kept for the callers. */
  email: DestinationState;
  db: DestinationState;
  /**
   * True on the call that announces the acceptance to the caller for the first time, exactly once per key.
   * This is NOT necessarily the attempt in which the receiver replied: an acceptance that arrived after the
   * hard limit is announced by the next call, which sends nothing. Every call after that returns false.
   */
  emailJustAccepted: boolean;
  /** Skipped because the same payload was already accepted / uncertain earlier in this mount. */
  dbSkipped: boolean;
}

/**
 * Destino crítico dos leads. Era FormSubmit até 21/09/2026, quando se constatou que o serviço
 * deixou de responder: do navegador, "Failed to fetch"; do servidor, 403 com desafio do
 * Cloudflare. Os commits de 18/09 tinham tornado a aceitação do FormSubmit a condição de
 * sucesso da calculadora, do popup e do chat, de modo que esses três canais passaram a falhar.
 * A extensão do efeito sobre leads reais no período não foi medida e não se afirma aqui.
 *
 * Agora os três usam o mesmo caminho do QuoteForm, que nunca parou: a função receive-lead.
 */
export const RECEIVE_LEAD_URL = "https://jzxhejqokcjyxxklnnza.supabase.co/functions/v1/receive-lead";
const RECEIVE_LEAD_SECRET = "ccc-lead-webhook-2026";
/** Notificação por e-mail (Resend). Melhor esforço: nunca decide o sucesso do lead. */
const EMAIL_NOTIFY_URL = "/api/send-quote-email";
export const DUAL_SUBMIT_TIMEOUT_MS = 15000;
export const LEAD_SUBMITTED_TEXT = "Your quote request has been submitted. For immediate assistance, call (240) 704-2551.";
export const LEAD_UNCONFIRMED_TEXT = "We couldn't confirm your request. Please try again or call (240) 704-2551.";

/**
 * Legado do FormSubmit, quando a aceitação era lida no corpo da resposta. O receive-lead decide
 * pelo status HTTP e este predicado não participa mais de nenhuma decisão. Mantido apenas como
 * export público para não quebrar quem o importe.
 */
export const isAcceptedBody = (body: unknown): boolean =>
  !!body &&
  typeof body === "object" &&
  ((body as { success?: unknown }).success === true || (body as { success?: unknown }).success === "true");

/** Deterministic in-memory key for a payload (stable key order). Never logged or persisted. */
export function payloadKey(payload: Record<string, unknown>): string {
  return JSON.stringify(payload, Object.keys(payload).sort());
}

const isAbort = (e: unknown) => (e as { name?: string } | null)?.name === "AbortError";

/**
 * Bookkeeping privado: por objeto de estado (portanto por chave de payload e por mount), guarda se a
 * aceitação do destino crítico já foi anunciada ao chamador. Não faz parte da API pública, não é
 * persistido e não sobrevive à troca de payload, que cria um novo objeto de estado.
 */
const aceiteAnunciado = new WeakMap<DualLeadState, boolean>();

async function postToReceiver(body: Record<string, unknown>, signal: AbortSignal): Promise<DestinationState> {
  // Notificação por e-mail: disparada e esquecida, porque não pode decidir o sucesso do lead.
  void fetch(EMAIL_NOTIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).catch(() => undefined);

  try {
    const res = await fetch(RECEIVE_LEAD_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-webhook-secret": RECEIVE_LEAD_SECRET },
      body: JSON.stringify(body),
      signal,
    });
    // receive-lead confirma pelo status; não devolve o envelope {success} do FormSubmit.
    return res.ok ? "accepted" : "failed";
  } catch (e) {
    return signal.aborted || isAbort(e) ? "uncertain" : "failed";
  }
}

async function insertRow(row: QuoteRequestInsert, signal: AbortSignal): Promise<DestinationState> {
  try {
    // Dynamic import keeps the Supabase client out of the initial bundle; a slow/rejected import must not block
    // the receiver attempt (it runs concurrently) and must not start an insert after the deadline.
    const { supabase } = await import("@/integrations/supabase/client");
    if (signal.aborted) return "uncertain";
    const { error } = await supabase.from("quote_requests").insert(row).abortSignal(signal);
    if (error) return signal.aborted ? "uncertain" : "failed";
    return "accepted";
  } catch (e) {
    return signal.aborted || isAbort(e) ? "uncertain" : "failed";
  }
}

export interface SubmitLeadDualOptions {
  /** Ref owned by the component; keeps per-payload destination states for the current mount only. */
  stateRef: MutableRefObject<DualLeadState | null>;
  /** Deterministic snapshot of what is being sent (use `payloadKey`). */
  key: string;
  /** Body sent to the critical destination. Legacy name, kept for the callers. */
  emailBody: Record<string, unknown>;
  dbRow: QuoteRequestInsert;
  timeoutMs?: number;
}

export async function submitLeadDual(opts: SubmitLeadDualOptions): Promise<DualLeadResult> {
  const { stateRef, key, emailBody, dbRow } = opts;
  const timeoutMs = opts.timeoutMs ?? DUAL_SUBMIT_TIMEOUT_MS;
  if (!stateRef.current || stateRef.current.key !== key) {
    stateRef.current = { key, email: "not_tried", db: "not_tried", attempt: 0 };
  }
  const state = stateRef.current;
  const attempt = ++state.attempt;

  const tryReceiver = state.email !== "accepted";
  const tryDb = state.db === "not_tried" || state.db === "failed"; // never repeat accepted or uncertain inserts
  const receiverCtl = new AbortController();
  const dbCtl = new AbortController();
  const timer = setTimeout(() => {
    receiverCtl.abort();
    dbCtl.abort();
  }, timeoutMs);

  // Whatever has already settled when the hard limit fires, so a known result is never thrown away.
  let receiverSettled: DestinationState | undefined;
  let dbSettled: DestinationState | undefined;
  let settled = false;

  /**
   * Records a destination as soon as it resolves. After the hard limit has already answered the caller,
   * only an acceptance is written back, and only while this very attempt is still the current one. Writing
   * an acceptance late is what stops the next manual retry from re-sending an already accepted POST. It
   * emits no event and touches no UI, so an acceptance is never communicated twice.
   */
  const record = (dest: "receiver" | "db") => (result: DestinationState): DestinationState => {
    if (dest === "receiver") receiverSettled = result;
    else dbSettled = result;
    const current = stateRef.current === state && state.attempt === attempt;
    if (settled && result === "accepted" && current) {
      if (dest === "receiver" && tryReceiver) state.email = "accepted";
      if (dest === "db" && tryDb) state.db = "accepted";
    }
    return result;
  };

  const receiverP: Promise<DestinationState> = (
    tryReceiver ? postToReceiver(emailBody, receiverCtl.signal) : Promise.resolve(state.email)
  ).then(record("receiver"));
  const dbP: Promise<DestinationState> = (
    tryDb ? insertRow(dbRow, dbCtl.signal) : Promise.resolve(state.db)
  ).then(record("db"));

  // Hard UI limit even if a promise does not cooperate with abort: only what is STILL pending is "uncertain".
  let hardTimer: ReturnType<typeof setTimeout> | undefined;
  const hardLimit = new Promise<[DestinationState, DestinationState]>((resolve) => {
    hardTimer = setTimeout(() => {
      if (!settled) resolve([receiverSettled ?? "uncertain", dbSettled ?? "uncertain"]);
    }, timeoutMs + 500);
  });
  let receiver: DestinationState;
  let db: DestinationState;
  try {
    [receiver, db] = await Promise.race([
      Promise.all([receiverP, dbP]) as Promise<[DestinationState, DestinationState]>,
      hardLimit,
    ]);
  } finally {
    settled = true;
    clearTimeout(timer);
    clearTimeout(hardTimer);
  }

  // Ignore late results of a superseded attempt.
  if (stateRef.current !== state || state.attempt !== attempt) {
    return { email: state.email, db: state.db, emailJustAccepted: false, dbSkipped: !tryDb };
  }
  state.email = tryReceiver ? receiver : state.email;
  state.db = tryDb ? db : state.db;
  // Exatamente uma vez por chave, inclusive quando o aceite chegou tarde e não pôde ser anunciado antes.
  const emailJustAccepted = state.email === "accepted" && aceiteAnunciado.get(state) !== true;
  if (emailJustAccepted) aceiteAnunciado.set(state, true);
  return { email: state.email, db: state.db, emailJustAccepted, dbSkipped: !tryDb };
}
