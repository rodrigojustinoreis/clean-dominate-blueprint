/**
 * Server-only helpers for the booking functions: Supabase REST (service role), Stripe REST and
 * Resend e-mail. Plain fetch, no SDKs, so the functions stay small.
 *
 * Required Netlify env vars:
 *   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY   — bookings table (never exposed to the browser)
 *   STRIPE_SECRET_KEY                          — sk_live_… (or sk_test_… while testing)
 *   STRIPE_WEBHOOK_SECRET                      — whsec_… from the Stripe webhook endpoint
 *   RESEND_API_KEY                             — already used by the quote form
 * Optional: BOOKING_NOTIFY_EMAIL (defaults to capitalcleancare@gmail.com)
 *           BOOKING_FROM_EMAIL (e.g. "Capital Clean Care <booking@capitalcleancare.com>") — Resend only
 *           delivers to clients from a VERIFIED domain; with the default onboarding@resend.dev sender
 *           only the owner copy arrives (Stripe still e-mails the client its payment receipt).
 */
import { HOLD_MINUTES } from "../../src/lib/booking";

export const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });

const env = (k: string) => process.env[k] ?? "";

export function supabaseConfigured() {
  return Boolean(env("SUPABASE_URL") && env("SUPABASE_SERVICE_ROLE_KEY"));
}

export async function sb(path: string, init: RequestInit & { prefer?: string } = {}) {
  const key = env("SUPABASE_SERVICE_ROLE_KEY");
  const headers: Record<string, string> = {
    apikey: key,
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  };
  if (init.prefer) headers.Prefer = init.prefer;
  const res = await fetch(`${env("SUPABASE_URL").replace(/\/$/, "")}/rest/v1/${path}`, { ...init, headers });
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  return { ok: res.ok, status: res.status, data };
}

/** Release slots held by checkouts that were abandoned. */
export async function expireStalePendings() {
  const cutoff = new Date(Date.now() - HOLD_MINUTES * 60_000).toISOString();
  await sb(`bookings?status=eq.pending&created_at=lt.${encodeURIComponent(cutoff)}`, {
    method: "PATCH",
    body: JSON.stringify({ status: "expired" }),
  });
}

/** date → unavailable slot ids ("*" = whole day closed by the owner). */
export async function unavailableBetween(from: string, to: string): Promise<Record<string, string[]>> {
  await expireStalePendings();
  const out: Record<string, string[]> = {};
  const add = (d: string, s: string) => {
    (out[d] ??= []).includes(s) || out[d].push(s);
  };
  const [bookings, blocks] = await Promise.all([
    sb(`bookings?select=service_date,slot&status=in.(pending,paid)&service_date=gte.${from}&service_date=lte.${to}`),
    sb(`booking_blocks?select=block_date,slot&block_date=gte.${from}&block_date=lte.${to}`),
  ]);
  if (!bookings.ok || !blocks.ok) throw new Error("Supabase read failed");
  for (const b of bookings.data as { service_date: string; slot: string }[]) add(b.service_date, b.slot);
  for (const b of blocks.data as { block_date: string; slot: string | null }[]) add(b.block_date, b.slot ?? "*");
  return out;
}

export async function stripe(path: string, params: Record<string, string>) {
  const res = await fetch(`https://api.stripe.com/v1/${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${env("STRIPE_SECRET_KEY")}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(params).toString(),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Stripe ${res.status}: ${data?.error?.message ?? "unknown error"}`);
  return data;
}

/** Stripe-Signature check (t=…,v1=…) with a 5-minute tolerance, using Web Crypto. */
export async function verifyStripeSignature(payload: string, header: string | null, secret: string): Promise<boolean> {
  if (!header || !secret) return false;
  const parts = Object.fromEntries(header.split(",").map((p) => p.split("=") as [string, string]).filter((p) => p.length === 2));
  const t = parts.t;
  const sigs = header.split(",").filter((p) => p.startsWith("v1=")).map((p) => p.slice(3));
  if (!t || sigs.length === 0) return false;
  if (Math.abs(Date.now() / 1000 - Number(t)) > 300) return false;
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const mac = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${t}.${payload}`));
  const expected = Array.from(new Uint8Array(mac)).map((b) => b.toString(16).padStart(2, "0")).join("");
  return sigs.some((s) => s.length === expected.length && timingSafeEqual(s, expected));
}

function timingSafeEqual(a: string, b: string) {
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

export async function sendEmail(to: string | string[], subject: string, html: string, replyTo?: string) {
  const key = env("RESEND_API_KEY");
  if (!key) {
    console.warn("RESEND_API_KEY not set — booking e-mail skipped");
    return;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      from: env("BOOKING_FROM_EMAIL") || "Capital Clean Care <onboarding@resend.dev>",
      to,
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });
  if (!res.ok) console.error("Resend error", res.status, await res.text());
}

export const notifyEmail = () => env("BOOKING_NOTIFY_EMAIL") || "capitalcleancare@gmail.com";

export const esc = (s: unknown) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
