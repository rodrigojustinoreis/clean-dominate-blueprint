/**
 * Reveals each direct child in sequence when the row scrolls into view (same pattern as
 * ScrollReveal: styles are applied only in the browser, so the server HTML and no-JS visitors see
 * everything at full opacity). Skipped entirely under prefers-reduced-motion.
 */
import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  /** Delay between consecutive children, in ms. */
  step?: number;
}

const StaggerReveal = ({ children, className = "", step = 90 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = Array.from(el.children) as HTMLElement[];
    items.forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(12px)";
      item.style.transition = `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${i * step}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${i * step}ms`;
    });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        items.forEach((item) => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        });
        observer.unobserve(el);
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      items.forEach((item) => {
        item.style.opacity = "";
        item.style.transform = "";
        item.style.transition = "";
      });
    };
  }, [step]);

  return <div ref={ref} className={className}>{children}</div>;
};

export default StaggerReveal;
