import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// ── Helpers ────────────────────────────────────────────────────────────────

function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  return digits.startsWith("1") ? `+${digits}` : `+1${digits}`;
}

async function sendEmail(apiKey: string, payload: object): Promise<void> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(`Resend error [${res.status}]: ${JSON.stringify(data)}`);
  }
}

async function sendSMS(accountSid: string, authToken: string, from: string, to: string, body: string): Promise<void> {
  const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
  const credentials = btoa(`${accountSid}:${authToken}`);
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${credentials}`,
    },
    body: new URLSearchParams({ To: to, From: from, Body: body }).toString(),
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(`Twilio error [${res.status}]: ${JSON.stringify(data)}`);
  }
}

// ── Main handler ────────────────────────────────────────────────────────────

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      name, phone, email, zip, service,
      bedrooms, bathrooms, frequency, date, message,
      smsConsent, emailConsent,
    } = await req.json();

    const RESEND_API_KEY      = Deno.env.get("RESEND_API_KEY");
    const TWILIO_ACCOUNT_SID  = Deno.env.get("TWILIO_ACCOUNT_SID");
    const TWILIO_AUTH_TOKEN   = Deno.env.get("TWILIO_AUTH_TOKEN");
    const TWILIO_FROM_NUMBER  = Deno.env.get("TWILIO_FROM_NUMBER");

    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY not configured");

    const firstName = (name as string).split(" ")[0];

    // ── 1. Business notification email ─────────────────────────────────────
    const businessHtml = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#1B3A2D;padding:20px 24px;border-radius:8px 8px 0 0;">
          <h2 style="color:#fff;margin:0;font-size:20px;">🏠 New Quote Request</h2>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${[
            ["Name", name], ["Phone", phone], ["Email", email], ["Zip Code", zip],
            ["Service", service], ["Bedrooms", bedrooms || "N/A"], ["Bathrooms", bathrooms || "N/A"],
            ["Frequency", frequency || "N/A"], ["Preferred Date", date || "N/A"],
            ["Message", message || "N/A"],
            ["SMS Consent", smsConsent ? "✅ Yes" : "No"],
            ["Email Consent", emailConsent ? "✅ Yes" : "No"],
          ].map(([k, v]) => `
            <tr>
              <td style="padding:10px 14px;border-bottom:1px solid #eee;font-weight:600;background:#f9f9f9;width:140px;">${k}</td>
              <td style="padding:10px 14px;border-bottom:1px solid #eee;">${v}</td>
            </tr>`).join("")}
        </table>
        <div style="background:#f9f9f9;padding:16px 24px;border-radius:0 0 8px 8px;text-align:center;">
          <a href="tel:${phone}" style="background:#1B3A2D;color:#fff;padding:10px 24px;border-radius:6px;text-decoration:none;font-weight:600;">
            Call ${name}
          </a>
        </div>
      </div>`.trim();

    await sendEmail(RESEND_API_KEY, {
      from: "Capital Clean Care <onboarding@resend.dev>",
      to: ["capitalcleancare@gmail.com"],
      subject: `🏠 New Quote Request from ${name} — ${zip}`,
      html: businessHtml,
      reply_to: email,
    });

    // ── 2. Client confirmation email (if consent or unconditionally) ────────
    const clientHtml = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#1B3A2D;padding:28px 24px;text-align:center;border-radius:8px 8px 0 0;">
          <h1 style="color:#fff;margin:0;font-size:24px;">Thank You, ${firstName}! 🏠</h1>
          <p style="color:rgba(255,255,255,0.75);margin:8px 0 0;font-size:14px;">Capital Clean Care — Eco-Friendly Cleaning in MD, DC & VA</p>
        </div>
        <div style="padding:32px 24px;background:#fff;">
          <p style="font-size:16px;color:#333;line-height:1.6;margin:0 0 20px;">
            We received your quote request and our team will contact you <strong>within a few hours</strong> with a personalized estimate.
          </p>
          <div style="background:#f0f9f4;border-left:4px solid #1B3A2D;border-radius:4px;padding:16px 20px;margin-bottom:24px;">
            <p style="margin:0;font-size:14px;color:#1B3A2D;font-weight:600;">Your request summary:</p>
            <p style="margin:6px 0 0;font-size:14px;color:#555;">
              Service: <strong>${service}</strong><br>
              Zip Code: <strong>${zip}</strong>${date ? `<br>Preferred Date: <strong>${date}</strong>` : ""}
            </p>
          </div>
          <p style="font-size:14px;color:#555;line-height:1.6;margin:0 0 24px;">
            In the meantime, if you have any questions or need to make changes, don't hesitate to reach out.
          </p>
          <div style="text-align:center;">
            <a href="tel:+12407042551" style="display:inline-block;background:#1B3A2D;color:#fff;padding:14px 32px;border-radius:50px;text-decoration:none;font-weight:700;font-size:15px;">
              📞 Call Us: (240) 704-2551
            </a>
          </div>
        </div>
        <div style="background:#f9f9f9;padding:16px 24px;text-align:center;border-radius:0 0 8px 8px;border-top:1px solid #eee;">
          <p style="margin:0;font-size:12px;color:#999;">
            Capital Clean Care · Silver Spring, MD · capitalcleancare.com<br>
            EPA Safer Choice Certified · 5.0 ⭐ on Google
          </p>
        </div>
      </div>`.trim();

    await sendEmail(RESEND_API_KEY, {
      from: "Capital Clean Care <onboarding@resend.dev>",
      to: [email],
      subject: `✅ We got your request, ${firstName}! Here's what happens next`,
      html: clientHtml,
    });

    // ── 3. Client SMS via Twilio (only if SMS consent given) ───────────────
    if (smsConsent && TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN && TWILIO_FROM_NUMBER) {
      const clientPhone = normalizePhone(phone as string);
      const smsBody =
        `Hi ${firstName}! 🏠 Thank you for choosing Capital Clean Care. ` +
        `We received your quote request and will contact you within a few hours. ` +
        `Questions? Call us: (240) 704-2551. ` +
        `Reply STOP to opt out.`;

      await sendSMS(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER, clientPhone, smsBody);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error: unknown) {
    console.error("send-quote error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
