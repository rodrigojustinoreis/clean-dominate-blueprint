import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { X, Gift, Clock } from "lucide-react";
import { isJuly4Promo, countdownParts } from "@/lib/july4Promo";

// One steady, truthful message — perpetual "limited spots this week" scarcity reads as spammy.
const MESSAGES = [
  { text: <>New clients get <strong>15% OFF</strong> their first clean in MD, DC & VA</>, cta: "Get a Free Quote →" },
];

// Twinkling stars, matching the popup's festive header.
const STARS = [
  { top: "22%", left: "9%", delay: "0ms" },
  { top: "62%", left: "24%", delay: "400ms" },
  { top: "30%", left: "88%", delay: "800ms" },
  { top: "58%", left: "73%", delay: "200ms" },
];

const ES_MESSAGE = {
  text: <>Clientes nuevos: <strong>15% OFF</strong> en tu primera limpieza en MD, DC y VA</>,
  cta: "Cotización Gratis →",
};

const AnnouncementBar = () => {
  const pathname = useLocation().pathname;
  const isSpanish = pathname.startsWith("/es");
  const [july4] = useState(() => isJuly4Promo());
  // Init server-safe (true / 0) so the client's first render matches the prerendered HTML.
  // The dismissed flag (sessionStorage) and the live clock are read AFTER mount, in effects
  // below — reading them during render would diverge server↔client and break hydration.
  const [visible, setVisible] = useState(true);
  const [msgIndex, setMsgIndex] = useState(0);
  const [now, setNow] = useState(0);

  // Apply the dismissed flag post-hydration (sessionStorage is client-only).
  useEffect(() => {
    const key = isJuly4Promo() ? "july4BarDismissed" : "announcementDismissed";
    if (sessionStorage.getItem(key) === "1") setVisible(false);
    setNow(Date.now());
  }, []);

  // Rotate the standard messages (non-promo only).
  useEffect(() => {
    if (!visible || july4) return;
    const interval = setInterval(() => setMsgIndex((i) => (i + 1) % MESSAGES.length), 4000);
    return () => clearInterval(interval);
  }, [visible, july4]);

  // Live countdown tick (promo only).
  useEffect(() => {
    if (!visible || !july4) return;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [visible, july4]);

  const dismiss = () => {
    sessionStorage.setItem(july4 ? "july4BarDismissed" : "announcementDismissed", "1");
    setVisible(false);
  };

  // Hidden on the home page per request; still shown on every other route.
  if (pathname === "/" || !visible) return null;

  // ── Festive 4th of July bar (same visual language as the popup) ──
  if (july4) {
    const c = countdownParts(now);
    return (
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0b1f4d] via-primary to-[#0b1f4d] text-white">
        {STARS.map((s, i) => (
          <span
            key={i}
            className="pointer-events-none absolute text-[8px] text-white/70 animate-pulse"
            style={{ top: s.top, left: s.left, animationDelay: s.delay }}
            aria-hidden
          >
            ★
          </span>
        ))}
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 px-10 py-2 text-sm">
          <span className="font-semibold">
            <span aria-hidden>🎆</span> 4th of July Sale —{" "}
            <span className="font-extrabold text-amber-300">25% OFF</span>
            <span className="hidden sm:inline"> your first clean</span>
          </span>

          {c.left > 0 && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold tabular-nums text-white/90">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              <span>
                {c.days}d {String(c.hours).padStart(2, "0")}h {String(c.mins).padStart(2, "0")}m{" "}
                {String(c.secs).padStart(2, "0")}s
              </span>
            </span>
          )}

          <a
            href="/#quote"
            className="rounded-full bg-white px-3 py-0.5 text-xs font-bold text-primary shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Claim 25% Off →
          </a>
        </div>

        <button
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-white/80 transition-colors hover:bg-white/15"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    );
  }

  // ── Standard rotating bar (original behavior, outside the promo window) ──
  const msg = isSpanish ? ES_MESSAGE : MESSAGES[msgIndex];
  const ctaHref = isSpanish ? "/es/contacto" : "/#quote";
  return (
    <div className="bg-primary text-primary-foreground text-sm py-2 px-4 flex items-center justify-center gap-3 relative">
      <Gift className="h-4 w-4 shrink-0" />
      <span className="font-medium transition-all duration-500">
        {msg.text} —{" "}
        <a href={ctaHref} className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity">
          {msg.cta}
        </a>
      </span>
      <button
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-primary-foreground/10 transition-colors"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
