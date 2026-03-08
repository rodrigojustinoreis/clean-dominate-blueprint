import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      name,
      phone,
      email,
      zip,
      service,
      bedrooms,
      bathrooms,
      frequency,
      date,
      message,
      smsConsent,
      emailConsent,
    } = await req.json();

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const emailBody = `
New Quote Request from Capital Clean Care Website

Name: ${name}
Phone: ${phone}
Email: ${email}
Zip Code: ${zip}
Service: ${service}
Bedrooms: ${bedrooms || "N/A"}
Bathrooms: ${bathrooms || "N/A"}
Frequency: ${frequency || "N/A"}
Preferred Date: ${date || "N/A"}
Message: ${message || "N/A"}

SMS Consent: ${smsConsent ? "Yes" : "No"}
Email Consent: ${emailConsent ? "Yes" : "No"}
    `.trim();

    const htmlBody = `
<h2>New Quote Request</h2>
<table style="border-collapse:collapse;width:100%;max-width:600px;">
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${phone}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Zip Code</td><td style="padding:8px;border:1px solid #ddd;">${zip}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Service</td><td style="padding:8px;border:1px solid #ddd;">${service}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Bedrooms</td><td style="padding:8px;border:1px solid #ddd;">${bedrooms || "N/A"}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Bathrooms</td><td style="padding:8px;border:1px solid #ddd;">${bathrooms || "N/A"}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Frequency</td><td style="padding:8px;border:1px solid #ddd;">${frequency || "N/A"}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Preferred Date</td><td style="padding:8px;border:1px solid #ddd;">${date || "N/A"}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${message || "N/A"}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">SMS Consent</td><td style="padding:8px;border:1px solid #ddd;">${smsConsent ? "Yes" : "No"}</td></tr>
  <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email Consent</td><td style="padding:8px;border:1px solid #ddd;">${emailConsent ? "Yes" : "No"}</td></tr>
</table>
    `.trim();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Capital Clean Care <onboarding@resend.dev>",
        to: ["capitalcleancare@gmail.com"],
        subject: `New Quote Request from ${name}`,
        text: emailBody,
        html: htmlBody,
        reply_to: email,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Resend API error [${res.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error sending quote email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
