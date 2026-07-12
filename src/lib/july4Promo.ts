// Single source of truth for the 4th of July promo (used by the popup + top bar).
// Festive 25% OFF runs Jun 24 → Jul 6, 2026; outside that window the standard
// offer shows. Excluded from the active Google Ads landing (/services/house-cleaning).

export const OFFER_END = new Date("2026-07-06T23:59:59-04:00").getTime();
const PROMO_START = new Date("2026-06-24T00:00:00-04:00").getTime();

// Master switch — the 4th of July promo is OVER. Flip back to true (within the date
// window above) to re-run it; the popup + top bar both revert to the standard 15% offer.
const PROMO_ACTIVE = false;

export const isJuly4Promo = (): boolean => {
  if (!PROMO_ACTIVE) return false;
  const now = Date.now();
  if (now < PROMO_START || now > OFFER_END) return false;
  if (typeof window !== "undefined") {
    const path = window.location.pathname.replace(/\/+$/, "");
    if (path === "/services/house-cleaning") return false;
  }
  return true;
};

export interface Countdown {
  left: number;
  days: number;
  hours: number;
  mins: number;
  secs: number;
}

export const countdownParts = (now: number): Countdown => {
  const left = Math.max(0, OFFER_END - now);
  return {
    left,
    days: Math.floor(left / 86400000),
    hours: Math.floor((left % 86400000) / 3600000),
    mins: Math.floor((left % 3600000) / 60000),
    secs: Math.floor((left % 60000) / 1000),
  };
};
