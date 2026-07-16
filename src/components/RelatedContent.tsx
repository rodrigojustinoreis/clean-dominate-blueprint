import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { GuideLink, RelatedLink } from "@/data/related-content";

// Presentational blocks for the automatic internal-linking system (Fase 1.3). Two patterns,
// both reused from existing components so no new design is introduced:
//  • GuideCards — the RelatedPosts card grid (image + category + title + meta).
//  • LinkList   — the InternalLinksGrid text-link list (heading + arrow links).
// Anchor text is always the real title / a descriptive label. Callers pre-filter to indexable
// targets and exclude the current page, so these components just render what they're given.

export function GuideCards({ heading, guides }: { heading: string; guides: GuideLink[] }) {
  if (guides.length === 0) return null;
  return (
    <section className="mt-14 pt-10 border-t border-border">
      <h2 className="font-heading text-xl font-bold mb-6">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {guides.map((g) => (
          <Card key={g.href} className="group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
            <Link to={g.href}>
              {g.coverImage && (
                <div className="h-36 overflow-hidden rounded-t-lg">
                  <img
                    src={g.coverImage}
                    alt={g.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              <CardContent className="p-4">
                <span className="text-xs bg-accent/10 text-accent font-medium px-2 py-0.5 rounded-full">
                  {g.category}
                </span>
                <h3 className="font-heading font-semibold text-sm mt-2 mb-2 leading-tight group-hover:text-accent transition-colors line-clamp-2">
                  {g.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(g.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {g.readTime}
                  </span>
                </div>
                <span className="text-accent text-xs font-medium mt-2 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read more <ArrowRight className="h-3 w-3" />
                </span>
              </CardContent>
            </Link>
          </Card>
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
