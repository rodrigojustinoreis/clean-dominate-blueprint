import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { ResourceCategory } from "@/data/resource-categories";

// Category tile for the /resources hub grid. Links to the prerendered category index at
// /resources/<slug>. Shows the category label, its guide count, and a one-line teaser so the
// hub reads as a real library table-of-contents (and gives Google a crawlable internal link).
// Mobile-first: renders as a compact tile (emoji + label + count) in a 2-col grid; the teaser
// and "Browse" affordance appear from sm up where there's room.
export default function CategoryCard({ category, count }: { category: ResourceCategory; count: number }) {
  return (
    <Card className="group h-full rounded-2xl border-border shadow-sm outline-none transition-all duration-200 hover:border-accent/50 hover:shadow-xl focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 motion-safe:hover:-translate-y-1">
      <Link
        to={`/resources/${category.slug}`}
        className="flex h-full flex-col p-4 sm:p-5 md:p-6 outline-none"
      >
        <div className="mb-0 sm:mb-3 flex items-center gap-3">
          <span
            className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-lg sm:text-xl"
            aria-hidden="true"
          >
            {category.emoji}
          </span>
          <div className="min-w-0">
            <h3 className="font-heading text-sm sm:text-lg font-bold leading-tight group-hover:text-accent transition-colors">
              {category.label}
            </h3>
            <p className="text-xs text-muted-foreground">
              {count} {count === 1 ? "guide" : "guides"}
            </p>
          </div>
        </div>
        <p className="hidden sm:block text-sm text-muted-foreground line-clamp-2">{category.seoDescription}</p>
        <span className="mt-4 hidden sm:inline-flex items-center text-sm font-semibold text-accent">
          Browse <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform motion-safe:group-hover:translate-x-0.5" />
        </span>
      </Link>
    </Card>
  );
}
