import { useEffect, useRef, useState } from "react";

interface CounterProps {
  /** Final number to count up to (e.g. 500). */
  to: number;
  /** Decimal places to render (e.g. 1 → "5.0"). Default 0. */
  decimals?: number;
  /** Text appended after the number (e.g. "+", "%", "★"). */
  suffix?: string;
  /** Animation length in ms. Default 1600. */
  duration?: number;
  className?: string;
}

/**
 * Lightweight, dependency-free scroll-triggered count-up.
 *
 * It renders the FINAL value by default, so the prerendered HTML, no-JS visitors,
 * and anyone with reduced-motion enabled always see the real number (SEO-safe).
 * Only an interactive client animates 0 → `to` once the element scrolls into view.
 */
const Counter = ({ to, decimals = 0, suffix = "", duration = 1600, className = "" }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Respect reduced-motion: keep the final value, never animate.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    // If it starts below the fold, reset to 0 now — it's off-screen, so no flash.
    if (el.getBoundingClientRect().top > window.innerHeight) setVal(0);

    let raf = 0;
    let started = false;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        obs.unobserve(el);
        setVal(0);
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
          setVal(to * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
          else setVal(to);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default Counter;
