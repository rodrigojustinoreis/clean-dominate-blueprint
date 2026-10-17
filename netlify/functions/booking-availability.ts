import { addDays, MAX_DAYS_AHEAD, todayInBusinessTz } from "../../src/lib/booking";
import { json, supabaseConfigured, unavailableBetween } from "../lib/booking-server";

/** GET /api/booking-availability → { unavailable: { "2026-10-21": ["08:00"], "2026-10-24": ["*"] } } */
export default async (req: Request) => {
  if (req.method !== "GET") return json(405, { error: "Method not allowed" });
  if (!supabaseConfigured()) return json(503, { error: "Online booking is not configured yet" });
  const today = todayInBusinessTz();
  try {
    const unavailable = await unavailableBetween(today, addDays(today, MAX_DAYS_AHEAD));
    return json(200, { unavailable });
  } catch (e) {
    console.error(e);
    return json(502, { error: "Could not load availability" });
  }
};

export const config = { path: "/api/booking-availability" };
