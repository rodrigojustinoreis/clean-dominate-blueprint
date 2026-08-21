import { Link } from "react-router-dom";
import { RESOURCE_CATEGORIES } from "@/data/resource-categories";

// Pill navigation for the Resource Center. Rendered on /resources (active=undefined → "All Guides")
// and on each /resources/<category> index (active=slug). Every pill is a real <Link> to a
// prerendered, indexable category page — so it doubles as instant client-side navigation AND a
// crawlable internal link (hub-and-spoke). Mobile-first: horizontal scroll, no wrap.
export default function ResourceCategoryNav({ active, className = "mb-10" }: { active?: string; className?: string }) {
  const base =
    "shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors whitespace-nowrap border";
  const on = "bg-accent text-white border-accent shadow-sm";
  const off =
    "bg-secondary/40 text-foreground border-border hover:border-accent/60 hover:text-accent";
  return (
    <nav className={`-mx-4 overflow-x-auto px-4 scrollbar-none ${className}`} aria-label="Browse guides by category">
      <div className="flex items-center gap-2 w-max">
        <Link to="/resources" className={`${base} ${!active ? on : off}`} aria-current={!active ? "page" : undefined}>
          All Guides
        </Link>
        {RESOURCE_CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            to={`/resources/${c.slug}`}
            className={`${base} ${active === c.slug ? on : off}`}
            aria-current={active === c.slug ? "page" : undefined}
          >
            <span aria-hidden="true">{c.emoji}</span> {c.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
