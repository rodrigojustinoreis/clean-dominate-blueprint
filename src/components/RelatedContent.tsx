import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { GuideLink, RelatedLink } from "@/data/related-content";
import FeaturedResourceCard from "@/components/blog/FeaturedResourceCard";

// Presentational blocks for the automatic internal-linking system (Fase 1.3).
//  • GuideCards — the RelatedPosts grid, rendered with the shared image-backed card so post,
//    category, and related grids are one identical card system across the Resource Center.
//  • LinkList   — the InternalLinksGrid text-link list (heading + arrow links).
// Callers pre-filter to indexable targets and exclude the current page, so these components
// just render what they're given.

export function GuideCards({ heading, guides }: { heading: string; guides: GuideLink[] }) {
  if (guides.length === 0) return null;
  return (
    <section className="mt-14 pt-10 border-t border-border">
      <h2 className="font-heading text-2xl font-bold mb-6">{heading}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <FeaturedResourceCard
            key={g.href}
            href={g.href}
            title={g.title}
            category={g.category}
            coverImage={g.coverImage}
          />
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
