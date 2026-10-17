import { isDateOpen, isSlotId, quoteBooking, slotLabel, formatLongDate, HOLD_MINUTES } from "../../src/lib/booking";
import { expireStalePendings, json, sb, stripe, supabaseConfigured, unavailableBetween } from "../lib/booking-server";

/**
 * POST /api/create-booking-checkout
 * Body: { service, sizeIndex, frequency?, addons[], date, slot, name, email, phone, address, zip, notes?, smsConsent? }
 * The price is recomputed here from src/lib/booking.ts; anything the browser says about money is ignored.
 * Flow: validate → slot free? → insert pending booking (unique index holds the slot) → Stripe Checkout → URL.
 */
const clean = (v: unknown, max = 200) => String(v ?? "").trim().slice(0, max);

export default async (req: Request) => {
  if (req.method !== "POST") return json(405, { error: "Method not allowed" });
  if (!supabaseConfigured() || !process.env.STRIPE_SECRET_KEY) return json(503, { error: "Online booking is not configured yet. Please call (240) 704-2551." });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json(400, { error: "Invalid request" });
  }

  const quote = quoteBooking({
    service: clean(body.service, 40),
    sizeIndex: Number(body.sizeIndex),
    frequency: clean(body.frequency, 20) || undefined,
    addons: Array.isArray(body.addons) ? body.addons.map((a) => clean(a, 60)) : [],
  });
  if (!quote.ok) return json(400, { error: quote.reason });

  const date = clean(body.date, 10);
  const slot = clean(body.slot, 5);
  if (!isDateOpen(date)) return json(400, { error: "That date is not available for online booking." });
  if (!isSlotId(slot)) return json(400, { error: "Pick one of the available arrival times." });

  const name = clean(body.name, 120);
  const email = clean(body.email, 160).toLowerCase();
  const phone = clean(body.phone, 30);
  const address = clean(body.address, 240);
  const zip = clean(body.zip, 10);
  if (!name || !address || !/^\S+@\S+\.\S+$/.test(email) || phone.replace(/\D/g, "").length < 10 || !/^\d{5}$/.test(zip)) {
    return json(400, { error: "Please fill in your name, e-mail, phone, address and a 5-digit ZIP." });
  }

  try {
    const taken = (await unavailableBetween(date, date))[date] ?? [];
    if (taken.includes("*") || taken.includes(slot)) return json(409, { error: "Sorry — that time was just taken. Please pick another." });

    await expireStalePendings();
    const insert = await sb("bookings", {
      method: "POST",
      prefer: "return=representation",
      body: JSON.stringify({
        service_date: date,
        slot,
        service: clean(body.service, 40),
        size_label: quote.sizeLabel,
        frequency: quote.frequencyLabel,
        addons: quote.addonLines.map((a) => a.label),
        total_cents: quote.total * 100,
        deposit_cents: quote.deposit * 100,
        name,
        email,
        phone,
        address,
        zip,
        notes: clean(body.notes, 1000) || null,
        sms_consent: body.smsConsent === true,
      }),
    });
    if (insert.status === 409) return json(409, { error: "Sorry — that time was just taken. Please pick another." });
    if (!insert.ok) throw new Error(`Insert failed: ${JSON.stringify(insert.data)}`);
    const booking = insert.data[0];

    const origin = new URL(req.url).origin;
    const when = `${formatLongDate(date)} · ${slotLabel(slot)} arrival`;
    const what = [quote.serviceName, quote.frequencyLabel, quote.sizeLabel].filter(Boolean).join(" · ");
    const session = await stripe("checkout/sessions", {
      mode: "payment",
      customer_email: email,
      client_reference_id: booking.id,
      "metadata[booking_id]": booking.id,
      "payment_intent_data[metadata][booking_id]": booking.id,
      "payment_intent_data[description]": `Deposit — ${what} — ${when}`,
      "line_items[0][quantity]": "1",
      "line_items[0][price_data][currency]": "usd",
      "line_items[0][price_data][unit_amount]": String(quote.deposit * 100),
      "line_items[0][price_data][product_data][name]": `30% deposit — ${quote.serviceName}`,
      "line_items[0][price_data][product_data][description]": `${what}. ${when}. Total $${quote.total}; remaining $${quote.balance} due on the day of service. Deposit is non-refundable.`,
      expires_at: String(Math.floor(Date.now() / 1000) + Math.max(30, HOLD_MINUTES - 2) * 60),
      success_url: `${origin}/book/confirmed?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/book?canceled=1`,
    });

    await sb(`bookings?id=eq.${booking.id}`, { method: "PATCH", body: JSON.stringify({ stripe_session_id: session.id }) });
    return json(200, { url: session.url });
  } catch (e) {
    console.error(e);
    return json(502, { error: "We couldn't start the payment. Please try again or call (240) 704-2551." });
  }
};

export const config = { path: "/api/create-booking-checkout" };
