import { formatLongDate, slotLabel, SERVICE_NAMES } from "../../src/lib/booking";
import { esc, json, notifyEmail, sb, sendEmail, verifyStripeSignature } from "../lib/booking-server";

/**
 * POST /api/stripe-webhook — Stripe endpoint for checkout.session.completed and checkout.session.expired.
 * In Stripe: Developers → Webhooks → Add endpoint → https://capitalcleancare.com/api/stripe-webhook,
 * events: checkout.session.completed, checkout.session.expired. Copy the signing secret into
 * STRIPE_WEBHOOK_SECRET on Netlify.
 */
const usd = (cents: number) => `$${(cents / 100).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;

export default async (req: Request) => {
  if (req.method !== "POST") return json(405, { error: "Method not allowed" });
  const payload = await req.text();
  const valid = await verifyStripeSignature(payload, req.headers.get("stripe-signature"), process.env.STRIPE_WEBHOOK_SECRET ?? "");
  if (!valid) return json(400, { error: "Bad signature" });

  const event = JSON.parse(payload);
  const session = event?.data?.object;
  const bookingId = session?.metadata?.booking_id;
  if (!bookingId) return json(200, { ignored: true });

  if (event.type === "checkout.session.expired") {
    await sb(`bookings?id=eq.${bookingId}&status=eq.pending`, { method: "PATCH", body: JSON.stringify({ status: "expired" }) });
    return json(200, { ok: true });
  }

  if (event.type !== "checkout.session.completed" || session.payment_status !== "paid") return json(200, { ignored: true });

  // Mark paid even if the hold had been expired a moment earlier: the money is in, the slot is theirs.
  const upd = await sb(`bookings?id=eq.${bookingId}&status=neq.paid`, {
    method: "PATCH",
    prefer: "return=representation",
    body: JSON.stringify({ status: "paid", paid_at: new Date().toISOString(), stripe_session_id: session.id }),
  });
  if (!upd.ok) {
    console.error("Booking update failed", upd.data);
    // Most likely the slot was re-booked after this hold expired (unique index). Alert the owner loudly.
    await sendEmail(notifyEmail(), `⚠️ Paid booking needs attention (${bookingId})`, `<p>A deposit was paid (Stripe session ${esc(session.id)}) but the booking could not be confirmed automatically — the slot may be double-booked. Check Supabase table <b>bookings</b>, id ${esc(bookingId)}, and contact the client.</p>`);
    return json(200, { ok: false });
  }
  const b = upd.data?.[0];
  if (!b) return json(200, { duplicate: true }); // already processed (Stripe retries)

  const when = `${formatLongDate(b.service_date)} — ${slotLabel(b.slot)} arrival`;
  const rows: [string, string][] = [
    ["When", when],
    ["Service", [SERVICE_NAMES[b.service as keyof typeof SERVICE_NAMES] ?? b.service, b.frequency, b.size_label].filter(Boolean).join(" · ")],
    ["Add-ons", b.addons?.length ? b.addons.join(", ") : "None"],
    ["Total", usd(b.total_cents)],
    ["Deposit paid", usd(b.deposit_cents)],
    ["Balance due on the day", usd(b.total_cents - b.deposit_cents)],
    ["Client", `${b.name} · ${b.phone} · ${b.email}`],
    ["Address", `${b.address}, ${b.zip}`],
    ["Notes", b.notes || "—"],
  ];
  const toTable = (list: [string, string][]) =>
    `<table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${list
      .map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#555;vertical-align:top">${esc(k)}</td><td style="padding:6px 0;font-weight:600">${esc(v)}</td></tr>`)
      .join("")}</table>`;
  const table = toTable(rows);

  await sendEmail(notifyEmail(), `New online booking — ${b.name} — ${when}`, `<h2 style="font-family:Arial">New paid booking</h2>${table}`, b.email);

  const clientTable = toTable(rows.filter(([k]) => k !== "Client"));
  await sendEmail(
    b.email,
    `Your cleaning is booked — ${when}`,
    `<div style="font-family:Arial,sans-serif;font-size:15px;color:#0D2B5E"><h2>Thank you, ${esc(String(b.name).split(" ")[0])}! Your date is reserved.</h2>${clientTable}<p>The remaining balance is paid on the day of service (Zelle or card). The deposit is non-refundable. Need to change something? Call or text (240) 704-2551.</p><p>— Capital Clean Care</p></div>`,
  );

  return json(200, { ok: true });
};

export const config = { path: "/api/stripe-webhook" };
