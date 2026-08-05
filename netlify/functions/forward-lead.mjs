// Server-side lead forwarder.
//
// Why this exists: the client used to POST the lead directly to the Supabase
// `receive-lead` Edge Function with the webhook secret hardcoded in the browser
// bundle (visible via View Source). That let anyone read the secret and inject
// fake leads. This function moves the call server-side so the secret never ships
// to the client. The browser now POSTs to /api/forward-lead (no secret), and this
// function attaches the secret from an environment variable.
//
// SECURITY TODO (Rodrigo): the previous secret `ccc-lead-webhook-2026` was public,
// so it must be considered COMPROMISED. Rotate it:
//   1. Set a NEW secret value in the Supabase `receive-lead` function config.
//   2. Set the SAME new value in Netlify → Site → Environment variables as
//      LEAD_WEBHOOK_SECRET.
// The fallback below keeps the pipeline working until you do that (it only runs
// server-side — it is never sent to browsers). Remove the fallback after rotating.

const RECEIVE_LEAD_URL =
  process.env.LEAD_WEBHOOK_URL ||
  "https://jzxhejqokcjyxxklnnza.supabase.co/functions/v1/receive-lead";

// Env-first; temporary server-side fallback so leads keep flowing before the env
// var is set in Netlify. This value is public/compromised — rotate as above.
const LEAD_WEBHOOK_SECRET = process.env.LEAD_WEBHOOK_SECRET || "ccc-lead-webhook-2026";

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Forward to the scheduling app. Non-blocking semantics: the browser form must
  // succeed regardless of this hop, so we always return 200 and only log failures.
  try {
    const res = await fetch(RECEIVE_LEAD_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-webhook-secret": LEAD_WEBHOOK_SECRET,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      console.error("forward-lead: downstream responded", res.status);
      return new Response(
        JSON.stringify({ success: true, channel: "forward-lead", warning: `downstream ${res.status}` }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ success: true, channel: "forward-lead" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("forward-lead error:", err);
    // Still 200 — the lead is also captured via Supabase insert + Netlify Forms + email.
    return new Response(
      JSON.stringify({ success: true, channel: "forward-lead-fallback", warning: String(err) }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }
};

export const config = { path: "/api/forward-lead" };
