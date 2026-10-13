/**
 * Interactive pieces of the winter cleaning checklist page (2026-10-12):
 * - WinterProgress: thin reading-progress bar under the header.
 * - WinterJumpNav: sticky section nav with scroll-spy (aria-current on the section in view).
 * - WinterChecklist: the 8-row checklist with tick boxes and a "x of 8 done" counter, remembered in
 *   localStorage (try/catch; works without it). Server HTML renders every row unticked, so hydration
 *   matches; saved ticks load after mount. Reduced motion: no smooth scrolling, no bar transition.
 */
import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

export const WinterProgress = () => {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);
  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div className="h-full origin-left bg-[#2E7D32] motion-safe:transition-transform motion-safe:duration-150" style={{ transform: `scaleX(${p})` }} />
    </div>
  );
};

export const WinterJumpNav = ({ items }: { items: [string, string][] }) => {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const els = items.map(([id]) => document.getElementById(id)).filter((e): e is HTMLElement => Boolean(e));
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [items]);
  const go = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    setActive(id);
  };
  return (
    <nav aria-label="On this page" className="sticky top-[65px] z-40 border-y border-border bg-background/95 backdrop-blur md:top-[102px]">
      <div className="container mx-auto max-w-6xl px-4">
        <ul className="flex gap-1 overflow-x-auto py-2 text-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map(([id, label]) => {
            const on = active === id;
            return (
              <li key={id} className="shrink-0">
                <a
                  href={`#${id}`}
                  onClick={(e) => go(e, id)}
                  aria-current={on ? "location" : undefined}
                  className={`inline-flex min-h-11 items-center whitespace-nowrap rounded-full px-4 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32] ${on ? "bg-[#2E7D32] text-white" : "text-muted-foreground hover:bg-[#2E7D32]/10 hover:text-[#2E7D32]"}`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

const KEY = "ccc-winter-checklist-v1";

export const WinterChecklist = ({ rows }: { rows: [string, string, string][] }) => {
  const [done, setDone] = useState<boolean[]>(() => rows.map(() => false));
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "null");
      if (Array.isArray(saved) && saved.length === rows.length) setDone(saved.map(Boolean));
    } catch { /* storage unavailable: start unticked */ }
  }, [rows.length]);
  const toggle = (i: number) =>
    setDone((d) => {
      const n = d.map((v, j) => (j === i ? !v : v));
      try { localStorage.setItem(KEY, JSON.stringify(n)); } catch { /* ignore */ }
      return n;
    });
  const count = done.filter(Boolean).length;
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-foreground" aria-live="polite">{count} of {rows.length} done</p>
        <div className="h-2 w-40 overflow-hidden rounded-full bg-secondary" aria-hidden="true">
          <div className="h-full rounded-full bg-[#2E7D32] motion-safe:transition-[width] motion-safe:duration-300" style={{ width: `${(count / rows.length) * 100}%` }} />
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <table className="w-full border-collapse text-left text-[15px] leading-relaxed">
          <caption className="sr-only">Winter cleaning checklist: tick each task as you finish it</caption>
          <thead className="hidden bg-secondary sm:table-header-group">
            <tr>
              <th scope="col" className="p-4 font-semibold">Task</th>
              <th scope="col" className="p-4 font-semibold">What we do</th>
              <th scope="col" className="p-4 font-semibold">What to check</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([task, what, check], i) => (
              <tr key={task} className={`block border-t border-border p-5 first:border-t-0 sm:table-row sm:p-0 sm:first:border-t motion-safe:transition-colors ${done[i] ? "bg-[#2E7D32]/[0.06]" : ""}`}>
                <th scope="row" className="block pb-2 font-heading text-lg font-semibold text-foreground sm:table-cell sm:p-4 sm:align-top sm:text-[15px]">
                  <label className="inline-flex min-h-11 cursor-pointer items-center gap-3">
                    <input type="checkbox" checked={done[i]} onChange={() => toggle(i)} className="peer sr-only" />
                    <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-[#2E7D32] peer-focus-visible:ring-2 peer-focus-visible:ring-[#2E7D32] peer-focus-visible:ring-offset-2">
                      {done[i] && <CheckCircle className="h-5 w-5 text-[#2E7D32]" />}
                    </span>
                    <span className={done[i] ? "text-muted-foreground line-through decoration-[#2E7D32]/60" : ""}>{task}</span>
                  </label>
                </th>
                <td className="block pb-2 sm:table-cell sm:p-4 sm:align-top">
                  <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground sm:hidden" aria-hidden="true">What we do</span>
                  {what}
                </td>
                <td className="block text-muted-foreground sm:table-cell sm:p-4 sm:align-top">
                  <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground sm:hidden" aria-hidden="true">What to check</span>
                  {check}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
