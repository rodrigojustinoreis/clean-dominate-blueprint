export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const RESEND_API_KEY = Deno?.env?.get?.("RESEND_API_KEY") ?? process.env.RESEND_API_KEY;

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

  const {
    name, phone, email, zip, service,
    bedrooms, bathrooms, frequency, preferred_date, message,
  } = body;

  const row = (label, value) =>
    `<tr>
      <td style="padding:10px 16px;background:#f8f9fa;font-weight:600;font-size:14px;color:#374151;width:160px;border-bottom:1px solid #e5e7eb;">${label}</td>
      <td style="padding:10px 16px;font-size:14px;color:#111827;border-bottom:1px solid #e5e7eb;">${value || "—"}</td>
    </tr>`;

  const serviceLabels = {
    standard: "Standard Cleaning",
    deep: "Deep Cleaning",
    recurring: "Recurring Cleaning",
    move: "Move In / Move Out",
    "post-construction": "Post-Construction",
    airbnb: "Airbnb / Short-Term Rental",
    office: "Office & Commercial",
  };

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#1B3A2D;padding:24px 28px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.6);">Capital Clean Care</p>
                  <h1 style="margin:6px 0 0;font-size:22px;font-weight:700;color:#ffffff;">🏠 New Quote Request</h1>
                </td>
                <td align="right">
                  <span style="display:inline-block;background:rgba(255,255,255,0.15);color:#ffffff;font-size:12px;font-weight:600;padding:6px 14px;border-radius:20px;">${new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Client Info -->
        <tr>
          <td style="padding:24px 28px 8px;">
            <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;">Client Information</p>
          </td>
        </tr>
        <tr>
          <td style="padding:0 28px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
              ${row("Full Name", name)}
              ${row("Phone", `<a href="tel:${phone}" style="color:#1B3A2D;font-weight:600;text-decoration:none;">${phone}</a>`)}
              ${row("Email", `<a href="mailto:${email}" style="color:#1B3A2D;text-decoration:none;">${email}</a>`)}
              ${row("Zip Code", zip)}
            </table>
          </td>
        </tr>

        <!-- Service Details -->
        <tr>
          <td style="padding:20px 28px 8px;">
            <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;">Service Details</p>
          </td>
        </tr>
        <tr>
          <td style="padding:0 28px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
              ${row("Service Type", `<strong>${serviceLabels[service] || service}</strong>`)}
              ${row("Bedrooms", bedrooms)}
              ${row("Bathrooms", bathrooms)}
              ${row("Frequency", frequency)}
              ${row("Preferred Date", preferred_date)}
              ${message ? row("Special Requests", message) : ""}
            </table>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:24px 28px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center" style="padding:16px;background:#f0fdf4;border-radius:8px;border:1px solid #bbf7d0;">
                  <p style="margin:0 0 12px;font-size:14px;font-weight:600;color:#166534;">Respond within 2 hours to maximize conversion</p>
                  <a href="tel:${phone}" style="display:inline-block;background:#1B3A2D;color:#ffffff;font-weight:700;font-size:14px;padding:12px 28px;border-radius:6px;text-decoration:none;">📞 Call ${name.split(" ")[0]} Now</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;padding:16px 28px;border-top:1px solid #e5e7eb;">
            <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center;">Capital Clean Care · capitalcleancare.com · (240) 704-2551</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Capital Clean Care <onboarding@resend.dev>",
        to: ["capitalcleancare@gmail.com"],
        reply_to: email,
        subject: `🏠 New Quote — ${name} · ${serviceLabels[service] || service} · ${zip}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(JSON.stringify(err));
    }

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
