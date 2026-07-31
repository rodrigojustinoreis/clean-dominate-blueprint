import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { GuideLink, RelatedLink } from "@/data/related-content";

// Presentational blocks for the automatic internal-linking system (Fase 1.3).
//  • GuideCards — the RelatedPosts grid, now on-brand colored cards (navy→blue→teal→light-blue)
//    matching the redesigned Resource Center. Anchor text is the real post title.
//  • LinkList   — the InternalLinksGrid text-link list (heading + arrow links).
// Callers pre-filter to indexable targets and exclude the current page, so these components
// just render what they're given.

const GUIDE_PALETTE = [
  "linear-gradient(150deg, #0D2B5E 0%, #163a73 100%)", // navy
  "linear-gradient(150deg, #1A6BAD 0%, #2079c0 100%)", // brand blue
  "linear-gradient(150deg, #0E7CA8 0%, #1591C4 100%)", // teal
  "linear-gradient(150deg, #2E90D0 0%, #4AACE8 100%)", // light blue
];

export function GuideCards({ heading, guides }: { heading: string; guides: GuideLink[] }) {
  if (guides.length === 0) return null;
  return (
    <section className="mt-14 pt-10 border-t border-border">
      <h2 className="font-heading text-xl font-bold mb-6">{heading}</h2>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {guides.map((g, i) => (
          <Link
            key={g.href}
            to={g.href}
            className="group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-2xl p-5 text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            style={{ background: GUIDE_PALETTE[i % GUIDE_PALETTE.length] }}
          >
            <span className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-white/70">
              {g.category}
            </span>
            <div className="mt-3">
              <h3 className="font-heading text-base font-bold leading-snug line-clamp-3">{g.title}</h3>
              <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-white/90">
                Read more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function LinkList({ heading, links }: { heading: string; links: RelatedLink[] }) {
  if (links.length === 0) return null;
  return (
    <div>
      <h3 className="font-heading text-base font-bold text-foreground mb-4 uppercase tracking-wide text-sm">
        {heading}
      </h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              to={l.href}
              className="flex items-center gap-2 text-sm text-primary hover:underline hover:text-primary/80 transition-colors"
            >
              <ArrowRight className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
              {l.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
