/**
 * sms-webhook — Twilio incoming SMS handler
 *
 * Configure in Twilio console:
 *   Phone Number → Messaging → "A Message Comes In" → Webhook
 *   URL: https://<project>.supabase.co/functions/v1/sms-webhook
 *   Method: POST
 *
 * Required env secrets (Supabase → Edge Functions → Secrets):
 *   ANTHROPIC_API_KEY
 *   TWILIO_ACCOUNT_SID
 *   TWILIO_AUTH_TOKEN
 *   TWILIO_FROM_NUMBER
 *   SUPABASE_URL          (auto-injected)
 *   SUPABASE_SERVICE_ROLE_KEY (auto-injected)
 */

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SYSTEM_PROMPT = `You are an AI assistant for Capital Clean Care, a premium eco-friendly house cleaning service serving Maryland, DC & Northern Virginia.

Your role: have a warm, professional, concise SMS conversation to help clients confirm their cleaning request and answer questions.

About Capital Clean Care:
- Phone: (240) 704-2551 | Website: capitalcleancare.com
- Services: Standard Cleaning, Deep Cleaning, Recurring (weekly/bi-weekly/monthly), Move In/Out, Post-Construction, Airbnb/Short-Term Rental, Office Cleaning
- Products: EPA Safer Choice certified, plant-based, non-toxic — safe for kids and pets
- Team: background-checked, insured, 9+ years serving DMV
- Guarantee: 100% satisfaction — re-clean free within 24h if not happy

Pricing estimates:
- Standard: 1-2bd $100-150 | 3bd $150-220 | 4bd+ $220-350
- Deep cleaning: add ~40-60% to standard price
- Recurring discount: weekly -25% | bi-weekly -15% | monthly -5%
- New clients: 15% OFF first clean

SMS conversation rules:
1. Keep messages SHORT — max 2-3 sentences per reply. This is SMS, not email.
2. Use the client's first name naturally.
3. Ask ONE question at a time.
4. If asked about price, give a range estimate based on info you have.
5. Goal: confirm service, preferred date, and any special notes.
6. When client confirms a date or says they're ready to book, tell them:
   "Perfect! Our team will call you within a few hours to finalize the details. 🏠"
   Then end with status: BOOKED
7. If client has a complex question you can't answer or wants to speak to someone,
   say: "I'll have our team call you right away! You can also call (240) 704-2551 anytime."
   Then end with status: HANDED_OFF
8. Never make up information. If unsure, say you'll have the team follow up.
9. Do NOT include "Capital Clean Care:" prefix in your message — Twilio adds the sender name.`;

// ── Helpers ──────────────────────────────────────────────────────────────────

async function callClaude(
  apiKey: string,
  messages: { role: string; content: string }[],
): Promise<string> {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Claude API error [${res.status}]: ${err}`);
  }

  const data = await res.json();
  return data.content[0].text.trim();
}

async function sendSMS(
  accountSid: string,
  authToken: string,
  from: string,
  to: string,
  body: string,
): Promise<void> {
  const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(`${accountSid}:${authToken}`)}`,
    },
    body: new URLSearchParams({ To: to, From: from, Body: body }).toString(),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(`Twilio error [${res.status}]: ${JSON.stringify(err)}`);
  }
}

// ── Main handler ─────────────────────────────────────────────────────────────

serve(async (req) => {
  // Twilio sends form-encoded POST
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const text = await req.text();
    const params = new URLSearchParams(text);
    const fromPhone = params.get("From") ?? "";
    const incomingBody = (params.get("Body") ?? "").trim();

    if (!fromPhone || !incomingBody) {
      return new Response("<Response/>", {
        headers: { "Content-Type": "text/xml" },
      });
    }

    const ANTHROPIC_API_KEY     = Deno.env.get("ANTHROPIC_API_KEY")!;
    const TWILIO_ACCOUNT_SID    = Deno.env.get("TWILIO_ACCOUNT_SID")!;
    const TWILIO_AUTH_TOKEN     = Deno.env.get("TWILIO_AUTH_TOKEN")!;
    const TWILIO_FROM_NUMBER    = Deno.env.get("TWILIO_FROM_NUMBER")!;
    const SUPABASE_URL          = Deno.env.get("SUPABASE_URL")!;
    const SUPABASE_SERVICE_KEY  = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

    // ── Load conversation ────────────────────────────────────────────────────
    const { data: conv, error: fetchErr } = await supabase
      .from("sms_conversations")
      .select("*")
      .eq("phone", fromPhone)
      .single();

    if (fetchErr || !conv) {
      // Unknown number — politely redirect
      await sendSMS(
        TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER, fromPhone,
        "Hi! This is Capital Clean Care. To get a quote, please visit capitalcleancare.com or call (240) 704-2551. We'd love to help! 🏠",
      );
      return new Response("<Response/>", { headers: { "Content-Type": "text/xml" } });
    }

    // Closed/handed-off conversations skip Claude
    if (conv.status === "closed" || conv.status === "handed_off") {
      await sendSMS(
        TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER, fromPhone,
        `Hi ${conv.client_name.split(" ")[0]}! Our team will be in touch soon. For immediate help call (240) 704-2551. 😊`,
      );
      return new Response("<Response/>", { headers: { "Content-Type": "text/xml" } });
    }

    // ── Build messages array for Claude ─────────────────────────────────────
    const history: { role: string; content: string }[] = conv.messages ?? [];
    history.push({ role: "user", content: incomingBody });

    // Inject client context into first user message as a system note
    const messagesForClaude = history.map((m, i) => {
      if (i === 0 && m.role === "assistant") {
        // First message is always from assistant (our opening), keep as-is
        return m;
      }
      return m;
    });

    // Prepend context so Claude knows who this is
    const contextNote = `[Context: Client is ${conv.client_name}, requested ${conv.service ?? "cleaning"}, zip ${conv.zip ?? "N/A"}. Conversation start.]`;
    const claudeMessages =
      messagesForClaude.length === 1 && messagesForClaude[0].role === "user"
        ? [{ role: "user", content: `${contextNote}\n\nClient says: ${incomingBody}` }]
        : [
            { role: "user", content: contextNote },
            { role: "assistant", content: "Got it! I'm here to help." },
            ...messagesForClaude,
          ];

    // ── Call Claude ──────────────────────────────────────────────────────────
    const reply = await callClaude(ANTHROPIC_API_KEY, claudeMessages);

    // ── Detect status changes ────────────────────────────────────────────────
    let newStatus = conv.status;
    const replyUpper = reply.toUpperCase();
    if (replyUpper.includes("STATUS: BOOKED")) newStatus = "booked";
    else if (replyUpper.includes("STATUS: HANDED_OFF")) newStatus = "handed_off";

    // Clean status markers from reply before sending
    const cleanReply = reply.replace(/\bSTATUS:\s*(BOOKED|HANDED_OFF)\b/gi, "").trim();

    // ── Save updated conversation ────────────────────────────────────────────
    history.push({ role: "assistant", content: cleanReply });
    await supabase
      .from("sms_conversations")
      .update({ messages: history, status: newStatus })
      .eq("phone", fromPhone);

    // ── Send reply via Twilio ────────────────────────────────────────────────
    await sendSMS(
      TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER,
      fromPhone, cleanReply,
    );

    // Return empty TwiML (we already sent via API)
    return new Response("<Response/>", { headers: { "Content-Type": "text/xml" } });

  } catch (err) {
    console.error("sms-webhook error:", err);
    return new Response("<Response/>", { headers: { "Content-Type": "text/xml" } });
  }
});
