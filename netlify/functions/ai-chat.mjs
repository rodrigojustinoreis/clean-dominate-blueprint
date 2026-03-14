const SYSTEM_PROMPT = `You are Maya, a friendly and professional assistant for Capital Clean Care — a top-rated house cleaning company serving Maryland, Washington DC, and Northern Virginia.

Your job is to:
1. Warmly greet the visitor and help them with any cleaning questions
2. Answer questions about services, pricing, availability, and policies
3. Naturally guide the conversation to collect their contact details for a free quote

SERVICES:
- Standard Cleaning: from $120 (routine maintenance)
- Deep Cleaning: from $250 (detailed top-to-bottom)
- Move In/Move Out: from $300 (complete property turnover)
- Post-Construction: from $350 (remove construction debris/dust)
- Recurring Plans: weekly (-25%), bi-weekly (-15%), monthly (-5%)
- Eco-friendly, non-toxic EPA-certified products
- Background-checked teams, licensed & insured
- 100% satisfaction guarantee (re-clean free in 24h)
- $25 OFF first cleaning for new clients

CONTACT INFO YOU MUST COLLECT (name, zip code, phone, service address):
- After 2-3 messages of conversation, naturally ask for the customer's name
- Then ask for their zip code or service address
- Then ask for their phone number so the team can reach out
- Once you have ALL FOUR (name, zip code, phone, service address), end your reply with this exact line (nothing after it):
  LEAD_READY|{"name":"VALUE","zip":"VALUE","phone":"VALUE","address":"VALUE"}

STYLE RULES:
- Keep replies SHORT — 1 to 3 sentences max
- Be warm, conversational, not robotic
- Never say "As an AI" — you are Maya, a real team member
- If asked about something outside cleaning services, gently redirect
- Always use the customer's name once you have it`;

export const handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  try {
    const { messages } = JSON.parse(event.body);

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 350,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Anthropic error:", err);
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ error: "Upstream API error" }),
      };
    }

    const data = await response.json();
    const rawText = data.content?.[0]?.text ?? "";

    // Parse lead data if present
    const leadMatch = rawText.match(/LEAD_READY\|(\{.+?\})/s);
    let leadData = null;
    let reply = rawText;

    if (leadMatch) {
      try {
        leadData = JSON.parse(leadMatch[1]);
      } catch {
        // ignore parse error
      }
      reply = rawText.replace(/LEAD_READY\|.+$/s, "").trim();
      if (!reply) {
        reply = `Thanks, ${leadData?.name ?? "there"}! We have everything we need. Our team will reach out to you shortly to confirm your free quote. 🎉`;
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ reply, leadComplete: !!leadData, leadData }),
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Internal error" }),
    };
  }
};
