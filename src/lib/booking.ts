/**
 * Online booking rules — shared by the /book page AND the Netlify functions, so the price the
 * client sees is exactly the price the server charges (the server never trusts a price from the browser).
 *
 * OWNER SETTINGS (edit here, then deploy):
 *  - BOOKING_SLOTS ........ the arrival windows the client can pick (only these, never a free time)
 *  - CLOSED_WEEKDAYS ...... days you never work online bookings (0 = Sunday … 6 = Saturday)
 *  - MIN_LEAD_DAYS ........ earliest bookable day, counted from today
 *  - MAX_DAYS_AHEAD ....... how far ahead the calendar opens
 *  - DEPOSIT_RATE ......... share charged online to hold the date (rest is paid on the day)
 *  - PRICE_POINT .......... which end of each published range is the online price
 * Single days or single slots are blocked in Supabase (table booking_blocks) — no deploy needed.
 *
 * Relative imports only: this file is also bundled into netlify/functions (no "@/" alias there).
 */
import { PRICE_SERVICES, PRICE_ADDONS } from "../data/price-data";

export const BOOKING_TIMEZONE = "America/New_York";

export const BOOKING_SLOTS = [
  { id: "08:00", label: "8:00 AM", hint: "Morning arrival" },
  { id: "12:00", label: "12:00 PM", hint: "Midday arrival" },
] as const;
export type SlotId = (typeof BOOKING_SLOTS)[number]["id"];

export const CLOSED_WEEKDAYS: number[] = [0];
export const MIN_LEAD_DAYS = 2;
export const MAX_DAYS_AHEAD = 60;
export const DEPOSIT_RATE = 0.3;
/** "low" = the starting price of each range on /pricing. */
export const PRICE_POINT: "low" | "high" = "low";
/** An unpaid checkout holds its slot this long before it is released. */
export const HOLD_MINUTES = 35;

export const BOOKABLE_SERVICES = ["recurring", "standard", "deep", "move", "post-construction"] as const;
export type BookableService = (typeof BOOKABLE_SERVICES)[number];

export const FREQUENCIES = [
  { id: "weekly", label: "Weekly", factor: 0.75 / 0.85 },
  { id: "biweekly", label: "Bi-weekly", factor: 1 },
  { id: "monthly", label: "Monthly", factor: 0.95 / 0.85 },
] as const;
export type FrequencyId = (typeof FREQUENCIES)[number]["id"];

export const SERVICE_NAMES: Record<BookableService, string> = {
  recurring: "Recurring Cleaning",
  standard: "One-Time Standard Cleaning",
  deep: "Deep Cleaning",
  move: "Move In / Move Out Cleaning",
  "post-construction": "Post-Construction Cleaning",
};

const nums = (s: string) => (s.match(/\d[\d,]*/g) || []).map((x) => Number(x.replace(/,/g, "")));
const round5 = (n: number) => Math.round(n / 5) * 5;

export interface BookingSelection {
  service: string;
  sizeIndex: number;
  frequency?: string;
  addons?: string[];
}

export interface BookingQuote {
  ok: true;
  serviceName: string;
  sizeLabel: string;
  frequencyLabel: string | null;
  base: number;
  addonLines: { label: string; price: number }[];
  total: number;
  deposit: number;
  balance: number;
}

export type QuoteResult = BookingQuote | { ok: false; reason: string };

/** Price for one visit (the first visit for recurring plans). Whole dollars. */
export function quoteBooking(sel: BookingSelection): QuoteResult {
  if (!BOOKABLE_SERVICES.includes(sel.service as BookableService)) return { ok: false, reason: "Unknown service" };
  const svc = PRICE_SERVICES.find((s) => s.id === sel.service);
  const row = svc?.rows[sel.sizeIndex];
  if (!svc || !row) return { ok: false, reason: "Unknown home size" };
  const n = nums(row.price);
  if (n.length === 0) return { ok: false, reason: "This home size needs a custom quote" };

  let base = PRICE_POINT === "high" && n.length > 1 ? n[1] : n[0];
  let frequencyLabel: string | null = null;
  if (sel.service === "recurring") {
    const f = FREQUENCIES.find((x) => x.id === sel.frequency);
    if (!f) return { ok: false, reason: "Pick a frequency" };
    base = round5(base * f.factor);
    frequencyLabel = f.label;
  }

  const wanted = Array.from(new Set(sel.addons ?? []));
  const addonLines = PRICE_ADDONS.filter((a) => wanted.includes(a.label)).map((a) => ({ label: a.label, price: nums(a.price)[0] ?? 0 }));
  if (addonLines.length !== wanted.length) return { ok: false, reason: "Unknown add-on" };

  const total = base + addonLines.reduce((s, a) => s + a.price, 0);
  const deposit = Math.ceil(total * DEPOSIT_RATE);
  return {
    ok: true,
    serviceName: SERVICE_NAMES[sel.service as BookableService],
    sizeLabel: row.config,
    frequencyLabel,
    base,
    addonLines,
    total,
    deposit,
    balance: total - deposit,
  };
}

/** Today's date (YYYY-MM-DD) in the business time zone. */
export function todayInBusinessTz(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: BOOKING_TIMEZONE, year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

export function addDays(ymd: string, days: number): string {
  const [y, m, d] = ymd.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + days));
  return dt.toISOString().slice(0, 10);
}

export function weekdayOf(ymd: string): number {
  const [y, m, d] = ymd.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
}

/** Calendar rules only (no Supabase): lead time, horizon, closed weekdays. */
export function isDateOpen(ymd: string, now = new Date()): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(ymd)) return false;
  const today = todayInBusinessTz(now);
  if (ymd < addDays(today, MIN_LEAD_DAYS)) return false;
  if (ymd > addDays(today, MAX_DAYS_AHEAD)) return false;
  return !CLOSED_WEEKDAYS.includes(weekdayOf(ymd));
}

export const isSlotId = (s: string): s is SlotId => BOOKING_SLOTS.some((x) => x.id === s);
export const slotLabel = (s: string) => BOOKING_SLOTS.find((x) => x.id === s)?.label ?? s;

export function formatLongDate(ymd: string): string {
  const [y, m, d] = ymd.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

/** Availability payload returned by /api/booking-availability: date → slot ids that are NOT available. */
export type UnavailableMap = Record<string, string[]>;
