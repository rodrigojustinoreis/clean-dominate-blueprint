const sendEmail = async (apiKey, payload) => {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(JSON.stringify(err));
  }
};

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY not set");
    return new Response(JSON.stringify({ error: "Email service not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  const { name, phone, email, zip, service, bedrooms, bathrooms, frequency, preferred_date, message } = body;

  const serviceLabels = {
    standard: "Standard Cleaning",
    deep: "Deep Cleaning",
    recurring: "Recurring Cleaning",
    move: "Move In / Move Out",
    "post-construction": "Post-Construction Cleaning",
    airbnb: "Airbnb / Short-Term Rental Cleaning",
    office: "Office & Commercial Cleaning",
  };

  const firstName = (name || "").split(" ")[0];
  const serviceName = serviceLabels[service] || service;
  const dateStr = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  const row = (label, value) =>
    `<tr>
      <td style="padding:10px 16px;background:#f8f9fa;font-weight:600;font-size:14px;color:#374151;width:160px;border-bottom:1px solid #e5e7eb;">${label}</td>
      <td style="padding:10px 16px;font-size:14px;color:#111827;border-bottom:1px solid #e5e7eb;">${value || "—"}</td>
    </tr>`;

  // ── 1. Business notification email ─────────────────────────────────────
  const businessHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:#1B3A2D;padding:24px 28px;">
            <table width="100%" cellpadding="0" cellspacing="0"><tr>
              <td>
                <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.6);">Capital Clean Care</p>
                <h1 style="margin:6px 0 0;font-size:22px;font-weight:700;color:#ffffff;">🏠 New Quote Request</h1>
              </td>
              <td align="right">
                <span style="display:inline-block;background:rgba(255,255,255,0.15);color:#ffffff;font-size:12px;font-weight:600;padding:6px 14px;border-radius:20px;">${dateStr}</span>
              </td>
            </tr></table>
          </td>
        </tr>
        <tr><td style="padding:24px 28px 8px;">
          <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;">Client Information</p>
        </td></tr>
        <tr><td style="padding:0 28px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
            ${row("Full Name", name)}
            ${row("Phone", `<a href="tel:${phone}" style="color:#1B3A2D;font-weight:600;text-decoration:none;">${phone}</a>`)}
            ${row("Email", `<a href="mailto:${email}" style="color:#1B3A2D;text-decoration:none;">${email}</a>`)}
            ${row("Zip Code", zip)}
          </table>
        </td></tr>
        <tr><td style="padding:20px 28px 8px;">
          <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;">Service Details</p>
        </td></tr>
        <tr><td style="padding:0 28px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
            ${row("Service", `<strong>${serviceName}</strong>`)}
            ${row("Bedrooms", bedrooms)}
            ${row("Bathrooms", bathrooms)}
            ${row("Frequency", frequency)}
            ${row("Preferred Date", preferred_date)}
            ${message ? row("Special Requests", message) : ""}
          </table>
        </td></tr>
        <tr><td style="padding:24px 28px;">
          <table width="100%" cellpadding="0" cellspacing="0"><tr>
            <td align="center" style="padding:16px;background:#f0fdf4;border-radius:8px;border:1px solid #bbf7d0;">
              <p style="margin:0 0 12px;font-size:14px;font-weight:600;color:#166534;">Respond within 2 hours to maximize conversion</p>
              <a href="tel:${phone}" style="display:inline-block;background:#1B3A2D;color:#ffffff;font-weight:700;font-size:14px;padding:12px 28px;border-radius:6px;text-decoration:none;">📞 Call ${firstName} Now</a>
            </td>
          </tr></table>
        </td></tr>
        <tr><td style="background:#f9fafb;padding:16px 28px;border-top:1px solid #e5e7eb;">
          <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center;">Capital Clean Care · capitalcleancare.com · (240) 704-2551</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  // ── 2. Client confirmation email ────────────────────────────────────────
  const clientHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:#1B3A2D;padding:32px 28px;text-align:center;">
            <h1 style="margin:0 0 8px;font-size:26px;font-weight:700;color:#ffffff;">Thank you, ${firstName}! 🏠</h1>
            <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.75);">We received your quote request and will be in touch shortly.</p>
          </td>
        </tr>
        <tr><td style="padding:32px 28px;">
          <p style="margin:0 0 20px;font-size:15px;color:#374151;line-height:1.7;">
            Hi <strong>${firstName}</strong>, your request for <strong>${serviceName}</strong> in <strong>${zip}</strong> has been received. Our team will contact you <strong>within a few hours</strong> with a personalized quote.
          </p>
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;margin-bottom:24px;">
            ${row("Service", `<strong>${serviceName}</strong>`)}
            ${row("Zip Code", zip)}
            ${preferred_date ? row("Preferred Date", preferred_date) : ""}
          </table>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#fefce8;border:1px solid #fde68a;border-radius:8px;padding:16px;margin-bottom:24px;">
            <tr><td style="padding:16px;">
              <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#92400e;">🎁 Don't forget your discount</p>
              <p style="margin:0;font-size:14px;color:#78350f;">Mention <strong>15% OFF</strong> when we call you to get your first clean at a discount.</p>
            </td></tr>
          </table>
          <table width="100%" cellpadding="0" cellspacing="0"><tr>
            <td style="padding-right:8px;" width="50%">
              <a href="tel:+12407042551" style="display:block;text-align:center;background:#1B3A2D;color:#ffffff;font-weight:700;font-size:14px;padding:13px 0;border-radius:8px;text-decoration:none;">📞 Call Us Now</a>
            </td>
            <td style="padding-left:8px;" width="50%">
              <a href="https://capitalcleancare.com" style="display:block;text-align:center;background:#f3f4f6;color:#374151;font-weight:600;font-size:14px;padding:13px 0;border-radius:8px;text-decoration:none;border:1px solid #e5e7eb;">Visit Website</a>
            </td>
          </tr></table>
        </td></tr>
        <tr><td style="background:#f9fafb;padding:20px 28px;border-top:1px solid #e5e7eb;text-align:center;">
          <p style="margin:0 0 4px;font-size:13px;color:#6b7280;">Capital Clean Care · Silver Spring, MD</p>
          <p style="margin:0;font-size:12px;color:#9ca3af;">⭐⭐⭐⭐⭐ 5.0 on Google · EPA Safer Choice Certified · Licensed & Insured</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  try {
    // Send both emails in parallel
    await Promise.all([
      sendEmail(RESEND_API_KEY, {
        from: "Capital Clean Care <onboarding@resend.dev>",
        to: ["capitalcleancare@gmail.com"],
        reply_to: email,
        subject: `🏠 New Quote — ${name} · ${serviceName} · ${zip}`,
        html: businessHtml,
      }),
      sendEmail(RESEND_API_KEY, {
        from: "Capital Clean Care <onboarding@resend.dev>",
        to: [email],
        subject: `✅ We got your request, ${firstName}! Here's what happens next`,
        html: clientHtml,
      }),
    ]);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Resend error:", err);
    return new Response(JSON.stringify({ success: false, error: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const config = { path: "/api/send-quote-email" };
