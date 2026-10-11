/**
 * Trust marquee for the site footer (owner's request, 2026-10-11): Licensed & Insured, Google
 * reviews, Google Verified (Local Services Ads), BBB Accredited Business and Nextdoor glide in a
 * continuous, uniform loop. Native Web Animations API, no library, no autoplay sound; pauses on
 * hover, keyboard focus, touch and hidden tab; with prefers-reduced-motion it is a static scroller
 * with arrows. Official marks only (public/images/trust/SOURCES.md); the whole card is the link
 * where a destination exists. Shared credential data: src/data/verified-credentials.ts.
 */
import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { GOOGLE_LISTING_URL } from "@/data/realReviews";
import { BUSINESS_INFO } from "@/data/business-info";
import { CREDENTIALS } from "@/data/verified-credentials";

/* BBB link = the accredited profile from the shared source; the Google Verified card goes to the
 * owner's Business Profile share link (2026-10-10), not to GOOGLE_LISTING_URL (the reviews card). */
const BBB = CREDENTIALS.find((c) => c.id === "bbb")!;
const GOOGLE_PROFILE_URL = "https://share.google/FhWh6I5kFwqwg8mnN";

const glossOverlay = (
  <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl" style={{ background: "linear-gradient(to bottom,rgba(255,255,255,0.55),transparent)" }} />
);

const trustSlide = "shrink-0";
/* Trust cards: uniform 80px tiles, slightly larger type than the default row for legibility. */
const trustCard =
  "group relative flex h-24 w-[224px] items-center gap-3 overflow-hidden rounded-2xl pl-3 pr-4 text-left transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";
const trustCardStyle = (glow: string): React.CSSProperties => ({
  background: "linear-gradient(145deg,#ffffff 0%,#f4f7fb 100%)",
  boxShadow: `0 1px 1px rgba(255,255,255,0.95) inset, 0 -1px 2px rgba(0,0,0,0.04) inset, 0 10px 22px ${glow}, 0 2px 4px rgba(15,30,54,0.06)`,
  border: "1px solid rgba(23,69,130,0.10)",
});
const trustIconBox = "relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105";
const trustIconStyle: React.CSSProperties = { background: "linear-gradient(145deg,#ffffff,#eaf0f8)", boxShadow: "0 3px 8px rgba(15,30,54,0.12), 0 1px 1px rgba(255,255,255,0.9) inset" };
const trustTitle = "block text-[14px] font-extrabold leading-tight tracking-tight text-gray-900";
const trustSub = "mt-0.5 block text-[11.5px] font-medium leading-tight text-gray-600";
/* Marquee speed in CSS px per second (uniform, linear). */
const MARQUEE_PX_PER_S = 36;

/** The four trust cards. `clone` marks the second copy used only to make the loop seamless. */
const TrustCards = ({ clone = false }: { clone?: boolean }) => (
  <>
      {/* Licensed & Insured (no link: there is no public document to point to) */}
      <li className={trustSlide} aria-hidden={clone || undefined}>
        <div className={trustCard} style={trustCardStyle("hsl(195 85% 45% / 0.18)")}>
          {glossOverlay}
          <span className={trustIconBox} style={trustIconStyle}>
            <svg viewBox="0 0 24 24" className="h-7 w-7 drop-shadow-sm" aria-hidden="true">
              <path d="M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5l8-3z" fill="hsl(195 85% 45%)" opacity="0.15" />
              <path d="M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5l8-3z" fill="none" stroke="hsl(195 85% 45%)" strokeWidth="1.6" />
              <path d="M8.5 12l2.4 2.4L15.6 9.6" fill="none" stroke="hsl(195 85% 45%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="relative min-w-0">
            <span className={trustTitle}>Licensed &amp; Insured</span>
            <span className={trustSub}>Guaranteed</span>
          </span>
        </div>
      </li>
      {/* Google reviews — the verified listing */}
      <li className={trustSlide} aria-hidden={clone || undefined}>
        <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer" aria-label="Read our 5.0-star Google reviews (opens in a new tab)"
          className={trustCard} style={trustCardStyle("rgba(15,30,54,0.12)")}>
          {glossOverlay}
          <span className={trustIconBox} style={trustIconStyle}>
            <svg className="h-6 w-6 drop-shadow-sm" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </span>
          <span className="relative min-w-0">
            <span className={trustTitle}>Google Reviews</span>
            <span className="flex items-center gap-0.5 py-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
            </span>
            <span className={trustSub}>{BUSINESS_INFO.rating.value} rating</span>
          </span>
        </a>
      </li>
          {/* Google Verified — official badge (public/images/trust/SOURCES.md), current program name,
              whole card links to the owner's Google Business Profile (share link, 2026-10-10). */}
          <li className={trustSlide} aria-hidden={clone || undefined}>
            <a href={GOOGLE_PROFILE_URL} target="_blank" rel="noopener noreferrer"
              aria-label="Google Verified, Local Services Ads: open our Google Business Profile (opens in a new tab)"
              className={trustCard} style={trustCardStyle("rgba(26,115,232,0.18)")}>
              {glossOverlay}
              <span className={trustIconBox} style={trustIconStyle}>
                <img src="/images/trust/google-verified.svg" alt="" width={25} height={25} className="h-9 w-9" decoding="async" />
              </span>
              <span className="relative min-w-0">
                <span className={trustTitle}>Google Verified</span>
                <span className={trustSub}>Local Services Ads</span>
              </span>
            </a>
          </li>
          {/* BBB Accredited Business — official seal only; the PNG is 1200x1030 with the mark (incl. TM)
              between 28.4% and 71.6% of its height, so the box hides only the transparent 24% above
              and below; the file is untouched. Whole card links to the BBB profile from CREDENTIALS. */}
          <li className={trustSlide} aria-hidden={clone || undefined}>
            <a href={BBB.href} target="_blank" rel="noopener noreferrer"
              aria-label="BBB Accredited Business since October 2026: open our BBB profile (opens in a new tab)"
              className={`${trustCard} justify-center px-3`} style={trustCardStyle("rgba(23,69,130,0.18)")}>
              {glossOverlay}
              <span className="relative block w-[176px] overflow-hidden transition-transform duration-300 group-hover:scale-105" style={{ aspectRatio: "1200 / 448" }}>
                <img src="/images/trust/bbb-accredited-business.png" alt="BBB Accredited Business seal" width={1200} height={1030}
                  className="h-auto w-full" style={{ marginTop: "-24.3%" }} decoding="async" />
              </span>
            </a>
          </li>
      {/* Nextdoor — same card as the quote form's default row (no live profile URL to link to) */}
      <li className={trustSlide} aria-hidden={clone || undefined}>
        <div className={trustCard} style={trustCardStyle("rgba(0,179,108,0.18)")} aria-label="Capital Clean Care on Nextdoor">
          {glossOverlay}
          <span className={trustIconBox} style={{ background: "linear-gradient(145deg,#00C77A,#00A862)", boxShadow: "0 3px 8px rgba(0,179,108,0.40), 0 1px 1px rgba(255,255,255,0.4) inset" }}>
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
              <path d="M16.5 15.5v-3.2c0-1.6-1-2.6-2.5-2.6-.9 0-1.6.4-2 1v-.8H9.5v5.6H11v-3c0-.8.5-1.3 1.2-1.3.7 0 1.1.5 1.1 1.3v3h2.2zM8.2 9.9c.6 0 1.1-.5 1.1-1.1S8.8 7.7 8.2 7.7s-1.1.5-1.1 1.1.5 1.1 1.1 1.1zm.8 5.6V9.9H7.4v5.6H9z"/>
            </svg>
          </span>
          <span className="relative min-w-0">
            <span className={trustTitle}>Nextdoor</span>
            <span className={trustSub}>Neighbor Fave</span>
          </span>
        </div>
      </li>
  </>
);

/* Continuous, uniform motion (owner's request, 10/10/2026): the row glides like a ticker, using the
 * Web Animations API on the track (no library, no CSS file changes). A second, aria-hidden copy of the
 * four cards makes the loop seamless. It pauses while the pointer is over it, while anything inside
 * has keyboard focus, while the user touches it, and when the tab is hidden. With
 * prefers-reduced-motion the row does not move: it becomes a plain horizontal scroller with arrows. */
const TrustMarquee = ({ tone = "light", label = "Verified by" }: { tone?: "light" | "dark"; label?: string }) => {
  const track = useRef<HTMLUListElement>(null);
  const anim = useRef<Animation | null>(null);
  const [reduced, setReduced] = useState(false);
  // The seamless clone is added only on the client, so the prerendered HTML has the four cards once.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Marquee animation (not in reduced motion).
  useEffect(() => {
    const el = track.current;
    if (!el || reduced || !mounted || typeof el.animate !== "function") return;
    const start = () => {
      anim.current?.cancel();
      const first = el.children[el.children.length / 2] as HTMLElement | undefined;
      const distance = first ? first.offsetLeft : el.scrollWidth / 2; // start of the clone set
      if (distance < 10) return;
      anim.current = el.animate([{ transform: "translateX(0)" }, { transform: `translateX(-${distance}px)` }], {
        duration: (distance / MARQUEE_PX_PER_S) * 1000,
        iterations: Infinity,
        easing: "linear",
      });
    };
    start();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(start) : null;
    ro?.observe(el);
    const onVis = () => (document.hidden ? anim.current?.pause() : anim.current?.play());
    document.addEventListener("visibilitychange", onVis);
    return () => {
      ro?.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      anim.current?.cancel();
      anim.current = null;
    };
  }, [reduced, mounted]);
  const pause = () => anim.current?.pause();
  const play = () => anim.current?.play();

  // Reduced-motion fallback: manual scroll with arrows.
  const update = () => {
    const el = track.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  };
  useEffect(() => {
    if (!reduced) return;
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [reduced]);
  const scrollByCard = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    el.scrollBy({ left: dir * (card ? card.getBoundingClientRect().width + 12 : 200), behavior: "auto" });
  };
  const arrow =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/15 bg-white text-primary shadow-sm transition-colors hover:bg-primary hover:text-white disabled:cursor-default disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

  return (
    <div
      role="region"
      aria-label="Trust and verification"
      className={`rounded-2xl px-3 pb-0 pt-3 sm:px-4 ${tone === "dark" ? "bg-white/[0.06] ring-1 ring-white/10" : "bg-gradient-to-br from-primary/[0.05] via-white to-accent/[0.06]"}`}
      onMouseEnter={pause}
      onMouseLeave={play}
      onFocusCapture={pause}
      onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) play(); }}
      onTouchStart={pause}
      onTouchEnd={play}
      onTouchCancel={play}
    >
      <p className={`mb-1 text-center text-[11px] font-bold uppercase tracking-[0.16em] ${tone === "dark" ? "text-white/85" : "text-primary"}`}>{label}</p>
      <div className="flex items-center gap-2">
        {reduced && (
          <button type="button" onClick={() => scrollByCard(-1)} disabled={!canPrev} aria-label="Previous trust card" className={arrow}>
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
        {/* Edge fades so cards glide in and out instead of being cut. */}
        <div
          className="relative -mx-3 min-w-0 flex-1 overflow-hidden sm:-mx-4"
          style={{ maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)" }}
        >
          <ul
            ref={track}
            onScroll={reduced ? update : undefined}
            className={`flex gap-3 py-6 ${reduced ? "w-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" : "w-max"}`}
            style={{ perspective: "800px" }}
          >
            <TrustCards />
            {mounted && !reduced && <TrustCards clone />}
          </ul>
        </div>
        {reduced && (
          <button type="button" onClick={() => scrollByCard(1)} disabled={!canNext} aria-label="Next trust card" className={arrow}>
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
};


export default TrustMarquee;
