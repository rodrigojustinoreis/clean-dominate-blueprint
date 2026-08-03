import { useState, useEffect, useCallback, Fragment } from "react";
import { X, Star, ShieldCheck, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { isJuly4Promo, OFFER_END } from "@/lib/july4Promo";
import { BUSINESS_INFO } from "@/data/business-info";

const EXIT_INTENT_KEY = "ccc_exit_popup_dismissed";

// Decorative twinkling stars for the festive header (deterministic positions).
const STARS = [
  { top: "14%", left: "10%", size: "text-[10px]", delay: "0ms" },
  { top: "24%", left: "84%", size: "text-[8px]", delay: "300ms" },
  { top: "50%", left: "18%", size: "text-[7px]", delay: "600ms" },
  { top: "18%", left: "46%", size: "text-[7px]", delay: "900ms" },
  { top: "58%", left: "78%", size: "text-[10px]", delay: "200ms" },
  { top: "66%", left: "38%", size: "text-[8px]", delay: "500ms" },
];

// Bursting fireworks — each explodes into radiating particles, looped w/ staggered delays.
const FIREWORKS = [
  { top: "30%", left: "22%", c: "#FF4D5E", d: "0s" },
  { top: "22%", left: "54%", c: "#FFD36B", d: "0.7s" },
  { top: "34%", left: "80%", c: "#8ECAE6", d: "1.35s" },
];

// Sparkles for the standard (15%) header — the "sparkling clean" feel.
const SPARKLES = [
  { top: "20%", left: "12%", size: "text-sm", delay: "0ms" },
  { top: "30%", left: "82%", size: "text-xs", delay: "500ms" },
  { top: "62%", left: "24%", size: "text-[10px]", delay: "1000ms" },
  { top: "56%", left: "72%", size: "text-sm", delay: "300ms" },
  { top: "16%", left: "50%", size: "text-[10px]", delay: "800ms" },
];

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const [july4, setJuly4] = useState(false);
  const [now, setNow] = useState(() => Date.now());
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const trigger = useCallback(() => {
    // Preview override: ?ccpromo=15 forces the standard offer, ?ccpromo=july4 forces the festive
    // one (and re-shows freely, ignoring the once-per-session guard).
    const preview = new URLSearchParams(window.location.search).get("ccpromo");
    if (!preview && sessionStorage.getItem(EXIT_INTENT_KEY)) return;
    setJuly4(preview === "15" ? false : preview === "july4" ? true : isJuly4Promo());
    setShow(true);
    if (!preview) sessionStorage.setItem(EXIT_INTENT_KEY, "1");
  }, []);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    },
    [trigger]
  );

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    let showTimer: number | undefined;
    let leaveTimer: number | undefined;
    let onScroll: (() => void) | undefined;
    if (isMobile) {
      // Mobile: engagement-based trigger (45% scroll depth) — never a timed entry
      // interstitial, which Google penalizes and users hate.
      onScroll = () => {
        const depth = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
        if (depth >= 0.45) {
          trigger();
          window.removeEventListener("scroll", onScroll!);
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
    } else {
      showTimer = window.setTimeout(trigger, 30000);
      leaveTimer = window.setTimeout(() => {
        document.addEventListener("mouseleave", handleMouseLeave);
      }, 4000);
    }
    return () => {
      if (showTimer) clearTimeout(showTimer);
      if (leaveTimer) clearTimeout(leaveTimer);
      if (onScroll) window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [trigger, handleMouseLeave]);

  // Live countdown tick (only while the festive promo is showing).
  useEffect(() => {
    if (!show || !july4) return;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [show, july4]);

  const discount = july4 ? "25%" : "15%";
  const left = Math.max(0, OFFER_END - now);
  const countdown = [
    { v: Math.floor(left / 86400000), l: "Days" },
    { v: Math.floor((left % 86400000) / 3600000), l: "Hrs" },
    { v: Math.floor((left % 3600000) / 60000), l: "Min" },
    { v: Math.floor((left % 60000) / 1000), l: "Sec" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitting(true);
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      await supabase.from("quote_requests").insert({
        name,
        phone,
        service: "recurring",
        message: july4
          ? "Exit popup — 4th of July 25% OFF (first clean, bi-weekly plan)"
          : "Exit intent popup — 15% discount claimed",
      });
      await fetch("https://formsubmit.co/ajax/capitalcleancare@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: july4 ? `🎆 July 4th Lead: ${name}` : `Exit Intent Lead: ${name}`,
          Name: name,
          Phone: phone,
          Source: july4 ? "Exit Popup — 4th of July 25% OFF (bi-weekly)" : "Exit Intent Popup — 15% Discount",
        }),
      });
      toast.success(`Got it! We'll call you shortly with your ${discount} discount.`);
      setShow(false);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-md p-4"
      role="dialog"
      aria-modal="true"
      aria-label={july4 ? "4th of July discount offer" : "Special discount offer"}
      onClick={() => setShow(false)}
    >
      <style>{`
        .ccc-modern{font-family:'Outfit',ui-sans-serif,system-ui,sans-serif}
        @keyframes ccc-shine { 0%{transform:translateX(-130%) skewX(-20deg)} 55%,100%{transform:translateX(320%) skewX(-20deg)} }
        @keyframes ccc-rise { 0%{opacity:0;transform:translateY(12px)} 100%{opacity:1;transform:translateY(0)} }
        @keyframes ccc-explode {
          0%{opacity:0;transform:rotate(var(--a)) translateY(0)}
          8%{opacity:1}
          70%{opacity:.85}
          100%{opacity:0;transform:rotate(var(--a)) translateY(-32px)}
        }
        .ccc-shine{animation:ccc-shine 3.4s ease-in-out infinite}
        .ccc-rise{animation:ccc-rise .55s cubic-bezier(.16,1,.3,1) both}
        .ccc-fw{position:absolute}
        .ccc-particle{position:absolute;left:0;top:0;height:3px;width:3px;border-radius:9999px;background:var(--c,#fff);box-shadow:0 0 6px 1px var(--c,#fff);opacity:0;transform:rotate(var(--a)) translateY(0);animation:ccc-explode 1.9s ease-out infinite;animation-delay:var(--d,0s)}
        @keyframes ccc-flip {0%{transform:translateY(-30%) rotateX(-90deg);opacity:0}55%{opacity:1}100%{transform:translateY(0) rotateX(0);opacity:1}}
        @keyframes ccc-colon {0%,100%{opacity:.25}50%{opacity:1}}
        @keyframes ccc-sparkle {0%,100%{opacity:0;transform:scale(.3) rotate(0deg)}50%{opacity:1;transform:scale(1) rotate(90deg)}}
        .ccc-flip{animation:ccc-flip .5s cubic-bezier(.2,.85,.25,1) both}
        .ccc-colon{animation:ccc-colon 1s ease-in-out infinite}
        .ccc-sparkle{animation:ccc-sparkle 2.4s ease-in-out infinite}
        @media (prefers-reduced-motion: reduce){.ccc-shine,.ccc-rise,.ccc-particle,.ccc-flip,.ccc-colon,.ccc-sparkle{animation:none!important}}
      `}</style>

      <div
        className="relative w-full max-w-[400px] overflow-hidden rounded-3xl bg-card shadow-2xl ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3.5 right-3.5 z-20 flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/20 hover:text-white"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        {/* ── Visual header ── */}
        <div
          className={`relative overflow-hidden px-8 pb-8 pt-8 text-center text-white ${
            july4 ? "bg-[#0b1f4d]" : "bg-gradient-to-br from-primary via-primary to-accent"
          }`}
        >
          {july4 && (
            <>
              {/* real fireworks photo backdrop (generated) */}
              <img
                src="/images/promo/july4-fireworks.webp"
                alt=""
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1f4d]/35 via-[#0b1f4d]/55 to-[#0b1f4d]/85" />
              {/* bursting fireworks (animated particles) */}
              {FIREWORKS.map((f, i) => (
                <span
                  key={`fw${i}`}
                  className="ccc-fw pointer-events-none"
                  style={{ top: f.top, left: f.left, "--c": f.c, "--d": f.d } as React.CSSProperties}
                  aria-hidden
                >
                  {Array.from({ length: 12 }).map((_, k) => (
                    <span
                      key={k}
                      className="ccc-particle"
                      style={{ "--a": `${k * 30}deg` } as React.CSSProperties}
                    />
                  ))}
                </span>
              ))}
              {/* twinkling stars */}
              {STARS.map((s, i) => (
                <span
                  key={`s${i}`}
                  className={`pointer-events-none absolute ${s.size} text-white/80 animate-pulse`}
                  style={{ top: s.top, left: s.left, animationDelay: s.delay }}
                  aria-hidden
                >
                  ★
                </span>
              ))}
            </>
          )}

          {!july4 && (
            <>
              {/* clean-home photo backdrop (generated) */}
              <img
                src="/images/promo/clean-home.webp"
                alt=""
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              />
              {/* brand tint keeps the offer text crisp over the photo */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/80" />
              {/* sparkling-clean sparkles */}
              {SPARKLES.map((s, i) => (
                <span
                  key={`sp${i}`}
                  className={`ccc-sparkle pointer-events-none absolute ${s.size} text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]`}
                  style={{ top: s.top, left: s.left, animationDelay: s.delay }}
                  aria-hidden
                >
                  ✦
                </span>
              ))}
            </>
          )}

          <p className="ccc-rise ccc-modern relative text-[11px] font-bold uppercase tracking-[0.28em] text-white/90 drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)]">
            {july4 ? "★ Independence Day Special ★" : "New Client Special"}
          </p>

          <div
            className="ccc-rise relative mt-3 flex items-center justify-center gap-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
            style={{ animationDelay: "80ms" }}
          >
            <span className="ccc-modern text-6xl font-bold leading-none tracking-tighter">
              {july4 ? "25" : "15"}
            </span>
            <div className="text-left leading-none">
              <span className="ccc-modern block text-3xl font-bold">% OFF</span>
              <span className="mt-1 block text-xs font-medium text-white/85">your first clean</span>
            </div>
          </div>

          <p
            className="ccc-rise relative mt-3 text-sm font-medium text-white/90"
            style={{ animationDelay: "160ms" }}
          >
            {july4 ? "🎆 Save big this 4th of July" : "Welcome to Capital Clean Care"}
          </p>
        </div>

        {/* ── Body ── */}
        <div className="px-8 pb-7 pt-6 text-center">
          <h2 className="ccc-rise ccc-modern text-xl font-bold tracking-tight text-foreground">
            {july4 ? "Get your home spotless for the 4th" : "Start with 15% off your first clean"}
          </h2>
          <p
            className="ccc-rise mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground"
            style={{ animationDelay: "60ms" }}
          >
            Book your first cleaning anywhere in the DMV and save {discount} — eco-friendly products
            safe for kids &amp; pets, background-checked teams, satisfaction guaranteed.
          </p>

          {/* ── Live countdown (festive promo only) — flip-clock style ── */}
          {july4 && left > 0 && (
            <div className="ccc-rise mt-4" style={{ animationDelay: "120ms" }}>
              <p className="flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#C8102E]">
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#C8102E]" />
                Hurry — offer ends in
              </p>
              <div className="mt-2.5 flex items-center justify-center gap-1">
                {countdown.map((u, i) => (
                  <Fragment key={u.l}>
                    <div
                      className="relative flex min-w-[52px] flex-col items-center rounded-xl bg-gradient-to-b from-[#173163] to-[#0b1f4d] px-2 py-2 shadow-lg shadow-[#0b1f4d]/25 ring-1 ring-white/10"
                      style={{ perspective: "320px" }}
                    >
                      <span
                        key={u.v}
                        className="ccc-flip ccc-modern block text-2xl font-bold tabular-nums leading-none text-white"
                      >
                        {String(u.v).padStart(2, "0")}
                      </span>
                      <span className="mt-1.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-white/50">
                        {u.l}
                      </span>
                    </div>
                    {i < countdown.length - 1 && (
                      <span className="ccc-colon -mt-2 text-lg font-bold text-[#0b1f4d]/40">:</span>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          )}

          <div className="mt-3.5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <span className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="font-semibold text-foreground">{BUSINESS_INFO.rating.value}</span>
            <span>· {BUSINESS_INFO.rating.count} Google reviews</span>
          </div>

          <form onSubmit={handleSubmit} className="ccc-rise mt-5 space-y-2.5 text-left" style={{ animationDelay: "180ms" }}>
            <Input
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-11 rounded-xl"
            />
            <Input
              required
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-11 rounded-xl"
            />
            <div className="relative overflow-hidden rounded-xl">
              <Button
                variant="cta"
                size="lg"
                className="ccc-modern h-12 w-full rounded-xl text-base font-semibold shadow-lg shadow-accent/25 transition-transform hover:-translate-y-0.5"
                type="submit"
                disabled={submitting}
              >
                {submitting ? "Sending…" : `Claim My ${discount} OFF`}
              </Button>
              {!submitting && (
                <span className="ccc-shine pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-white/30 blur-md" aria-hidden />
              )}
            </div>
          </form>

          <div className="mt-3.5 flex items-center justify-center gap-4 text-[11px] text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Bonded &amp; insured
            </span>
            <span className="inline-flex items-center gap-1">
              <Leaf className="h-3.5 w-3.5 text-accent" /> Eco-friendly
            </span>
          </div>

          {/* Fine print / terms */}
          <p className="mx-auto mt-3 max-w-[19rem] text-[10px] leading-snug text-muted-foreground/80">
            {july4
              ? "*25% off applies to your first clean on a new bi-weekly (every-2-weeks) plan. New clients only · offer ends July 6, 2026."
              : "*15% off applies to your first clean. New clients only."}
          </p>

          <button
            onClick={() => setShow(false)}
            className="mt-3 block w-full text-center text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            No thanks, I'll pay full price
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
