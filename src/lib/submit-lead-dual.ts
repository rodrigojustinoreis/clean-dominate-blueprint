/**
 * Dual-destination lead submission for the price calculator and the exit-intent popup (M02c, 2026-09-18).
 *
 * Semantics agreed in CODEX-M02C-COUNTERPROPOSAL.md / CLAUDE-M02C-ACK.md:
 * - The e-mail notification (FormSubmit) is the operational channel the team actually reads → it is the CRITICAL
 *   destination. Acceptance = HTTP ok AND a JSON object whose `success` is `true` or `"true"` (defensive
 *   compatibility policy, not a documented provider contract). Anything else is "unconfirmed".
 * - The Supabase insert is BACKUP storage. Its failure never blocks or invalidates the e-mail attempt.
 * - Both destinations are attempted concurrently, each with its own AbortController and a hard 15s limit that also
 *   covers the dynamic import of the Supabase client. Nothing starts after an abort; late settlements of an earlier
 *   attempt never overwrite a later one (attempt token).
 * - Per-payload idempotency inside the current mount: destination states (`not_tried | accepted | failed |
 *   uncertain`) are kept in a ref keyed by a deterministic snapshot of the payload. Manual retry of the SAME payload
 *   never repeats an accepted insert, never repeats an uncertain insert either (backup), and only re-sends the
 *   e-mail when it was not accepted. Editing any field produces a new key and both destinations are tried again.
 *   Only the last snapshot is kept (declared limit). Nothing is persisted in storage/URL/analytics/console.
 * - Acceptance of the e-mail service does not prove inbox delivery nor a booking; wording is the caller's job.
 */
import type { MutableRefObject } from "react";
import type { Database } from "@/integrations/supabase/types";

export type QuoteRequestInsert = Database["public"]["Tables"]["quote_requests"]["Insert"];

export type DestinationState = "not_tried" | "accepted" | "failed" | "uncertain";

export interface DualLeadState {
  key: string;
  email: DestinationState;
  db: DestinationState;
  attempt: number;
}

export interface DualLeadResult {
  email: DestinationState;
  db: DestinationState;
  /** True only on the attempt in which the e-mail service accepted the request (never twice for one key). */
  emailJustAccepted: boolean;
  /** Skipped because the same payload was already accepted / uncertain earlier in this mount. */
  dbSkipped: boolean;
}

export const FORMSUBMIT_URL = "https://formsubmit.co/ajax/capitalcleancare@gmail.com";
export const DUAL_SUBMIT_TIMEOUT_MS = 15000;
export const LEAD_SUBMITTED_TEXT = "Your quote request has been submitted. For immediate assistance, call (240) 704-2551.";
export const LEAD_UNCONFIRMED_TEXT = "We couldn't confirm your request. Please try again or call (240) 704-2551.";

export const isAcceptedBody = (body: unknown): boolean =>
  !!body &&
  typeof body === "object" &&
  ((body as { success?: unknown }).success === true || (body as { success?: unknown }).success === "true");

/** Deterministic in-memory key for a payload (stable key order). Never logged or persisted. */
export function payloadKey(payload: Record<string, unknown>): string {
  return JSON.stringify(payload, Object.keys(payload).sort());
}

const isAbort = (e: unknown) => (e as { name?: string } | null)?.name === "AbortError";

async function sendEmail(body: Record<string, unknown>, signal: AbortSignal): Promise<DestinationState> {
  try {
    const res = await fetch(FORMSUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
      signal,
    });
    let parsed: unknown = null;
    try {
      parsed = await res.json();
    } catch {
      parsed = null;
    }
    return res.ok && isAcceptedBody(parsed) ? "accepted" : "failed";
  } catch (e) {
    return signal.aborted || isAbort(e) ? "uncertain" : "failed";
  }
}

async function insertRow(row: QuoteRequestInsert, signal: AbortSignal): Promise<DestinationState> {
  try {
    // Dynamic import keeps the Supabase client out of the initial bundle; a slow/rejected import must not block
    // the e-mail attempt (it runs concurrently) and must not start an insert after the deadline.
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

  const tryEmail = state.email !== "accepted";
  const tryDb = state.db === "not_tried" || state.db === "failed"; // never repeat accepted or uncertain inserts
  const emailCtl = new AbortController();
  const dbCtl = new AbortController();
  const timer = setTimeout(() => {
    emailCtl.abort();
    dbCtl.abort();
  }, timeoutMs);

  const emailP: Promise<DestinationState> = tryEmail ? sendEmail(emailBody, emailCtl.signal) : Promise.resolve(state.email);
  const dbP: Promise<DestinationState> = tryDb ? insertRow(dbRow, dbCtl.signal) : Promise.resolve(state.db);

  // Hard UI limit even if a promise does not cooperate with abort: whatever has not settled is "uncertain".
  let settled = false;
  let hardTimer: ReturnType<typeof setTimeout> | undefined;
  const hardLimit = new Promise<[DestinationState, DestinationState]>((resolve) => {
    hardTimer = setTimeout(() => {
      if (!settled) resolve(["uncertain", "uncertain"]);
    }, timeoutMs + 500);
  });
  let email: DestinationState;
  let db: DestinationState;
  try {
    [email, db] = await Promise.race([
      Promise.all([emailP, dbP]) as Promise<[DestinationState, DestinationState]>,
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
  const emailJustAccepted = tryEmail && email === "accepted";
  state.email = tryEmail ? email : state.email;
  state.db = tryDb ? db : state.db;
  return { email: state.email, db: state.db, emailJustAccepted, dbSkipped: !tryDb };
}
