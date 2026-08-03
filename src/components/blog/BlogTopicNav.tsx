import { Link } from "react-router-dom";
import { BLOG_TOPICS } from "@/data/blog-topics";

// Pill navigation for the blog. Rendered on /resources (active=undefined → "All Posts")
// and on each /resources/topic/<slug> hub (active=slug). Each pill is a real <Link> to a
// prerendered, indexable page — so it doubles as instant client-side navigation AND a
// crawlable internal link (hub-and-spoke). Mobile-first: horizontal scroll, no wrap.
export default function BlogTopicNav({ active }: { active?: string }) {
  const base =
    "shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors whitespace-nowrap border";
  const on = "bg-accent text-white border-accent shadow-sm";
  const off =
    "bg-secondary/40 text-foreground border-border hover:border-accent/60 hover:text-accent";
  return (
    <nav className="-mx-4 px-4 mb-10 overflow-x-auto scrollbar-none" aria-label="Browse blog by topic">
      <div className="flex items-center gap-2 w-max">
        <Link to="/resources" className={`${base} ${!active ? on : off}`} aria-current={!active ? "page" : undefined}>
          All Posts
        </Link>
        {BLOG_TOPICS.map((t) => (
          <Link
            key={t.slug}
            to={`/resources/topic/${t.slug}`}
            className={`${base} ${active === t.slug ? on : off}`}
            aria-current={active === t.slug ? "page" : undefined}
          >
            <span aria-hidden="true">{t.emoji}</span> {t.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
