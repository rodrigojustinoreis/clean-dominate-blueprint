import { useEffect, useState, type MouseEvent } from "react";

export interface JumpItem {
  id: string;
  label: string;
}

/**
 * Sticky, horizontally scrollable "jump to section" pills that sit under the site header.
 * The active pill follows the section in view (IntersectionObserver). Clicks scroll smoothly,
 * unless the reader prefers reduced motion. Plain anchors, so it also works without JS.
 */
const SectionJumpNav = ({ items, headerOffset = 64 }: { items: JumpItem[]; headerOffset?: number }) => {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const targets = items.map((i) => document.getElementById(i.id)).filter((el): el is HTMLElement => Boolean(el));
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the visible section closest to the top of the viewport.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: `-${headerOffset + 56}px 0px -55% 0px`, threshold: [0, 0.25] },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [items, headerOffset]);

  const onClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset - 56;
    window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    window.history.replaceState(null, "", `#${id}`);
    setActive(id);
  };

  return (
    <nav aria-label="Jump to section" className="sticky z-40 border-b border-border bg-background/90 backdrop-blur" style={{ top: headerOffset }}>
      <div className="container mx-auto px-4">
        <ul className="flex gap-2 overflow-x-auto py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((it) => {
            const isActive = it.id === active;
            return (
              <li key={it.id} className="shrink-0">
                <a
                  href={`#${it.id}`}
                  onClick={(e) => onClick(e, it.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {it.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default SectionJumpNav;
