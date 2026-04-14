import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/pages/Blog";
import { autoBlogPosts } from "@/data/auto-blog-posts";

// Manual related-post mapping: slug → up to 3 related slugs
const RELATED_MAP: Record<string, string[]> = {
  "spring-cleaning-checklist-maryland-2026": [
    "deep-cleaning-checklist-dmv-homeowners",
    "eco-cleaning-tips-maryland-homes",
    "best-cleaning-schedule-busy-families-dmv",
  ],
  "eco-cleaning-tips-maryland-homes": [
    "allergy-proofing-home-dmv",
    "remove-pet-hair-odors-dmv-homes",
    "eco-cleaning-tips-winters-maryland",
  ],
  "house-cleaning-prices-maryland-2026": [
    "recurring-cleaning-weekly-biweekly-monthly",
    "how-to-choose-cleaning-service-silver-spring",
    "deep-cleaning-checklist-dmv-homeowners",
  ],
  "deep-cleaning-checklist-dmv-homeowners": [
    "spring-cleaning-checklist-maryland-2026",
    "post-renovation-cleaning-guide-maryland",
    "recurring-cleaning-weekly-biweekly-monthly",
  ],
  "airbnb-cleaning-tips-dmv-hosts": [
    "move-out-cleaning-checklist-maryland-tenants",
    "move-in-cleaning-guide-dmv",
    "recurring-cleaning-weekly-biweekly-monthly",
  ],
  "how-to-choose-cleaning-service-silver-spring": [
    "house-cleaning-prices-maryland-2026",
    "house-cleaning-bethesda-md",
    "recurring-cleaning-weekly-biweekly-monthly",
  ],
  "move-out-cleaning-checklist-maryland-tenants": [
    "house-cleaning-prices-maryland-2026",
    "post-renovation-cleaning-guide-maryland",
    "best-cleaning-schedule-busy-families-dmv",
  ],
  "eco-cleaning-tips-winters-maryland": [
    "eco-cleaning-tips-maryland-homes",
    "best-cleaning-schedule-busy-families-dmv",
    "remove-pet-hair-odors-dmv-homes",
  ],
  "best-cleaning-schedule-busy-families-dmv": [
    "recurring-cleaning-weekly-biweekly-monthly",
    "how-to-choose-cleaning-service-silver-spring",
    "deep-cleaning-checklist-dmv-homeowners",
  ],
  "remove-pet-hair-odors-dmv-homes": [
    "eco-cleaning-tips-maryland-homes",
    "deep-cleaning-checklist-dmv-homeowners",
    "recurring-cleaning-weekly-biweekly-monthly",
  ],
  "post-renovation-cleaning-guide-maryland": [
    "deep-cleaning-checklist-dmv-homeowners",
    "house-cleaning-prices-maryland-2026",
    "move-out-cleaning-checklist-maryland-tenants",
  ],
  "recurring-cleaning-weekly-biweekly-monthly": [
    "best-cleaning-schedule-busy-families-dmv",
    "house-cleaning-prices-maryland-2026",
    "how-to-choose-cleaning-service-silver-spring",
  ],
  "deep-cleaning-tips-maryland-homes-spring-prep-march-2026": [
    "spring-cleaning-checklist-maryland-2026",
    "deep-cleaning-checklist-dmv-homeowners",
    "eco-cleaning-tips-maryland-homes",
  ],
  "house-cleaning-bethesda-md": [
    "house-cleaning-prices-maryland-2026",
    "allergy-proofing-home-dmv",
    "deep-cleaning-rockville-md",
  ],
  "cleaning-service-arlington-va": [
    "house-cleaning-washington-dc",
    "move-out-cleaning-checklist-maryland-tenants",
    "remove-pet-hair-odors-dmv-homes",
  ],
  "deep-cleaning-rockville-md": [
    "spring-cleaning-checklist-maryland-2026",
    "deep-cleaning-checklist-dmv-homeowners",
    "allergy-proofing-home-dmv",
  ],
  "house-cleaning-washington-dc": [
    "cleaning-service-georgetown-dc",
    "cleaning-service-arlington-va",
    "move-in-cleaning-guide-dmv",
  ],
  "cleaning-service-fairfax-va": [
    "cleaning-service-arlington-va",
    "recurring-cleaning-weekly-biweekly-monthly",
    "remove-pet-hair-odors-dmv-homes",
  ],
  "cleaning-service-georgetown-dc": [
    "house-cleaning-washington-dc",
    "cleaning-service-alexandria-va",
    "eco-cleaning-tips-maryland-homes",
  ],
  "cleaning-service-alexandria-va": [
    "cleaning-service-arlington-va",
    "move-out-cleaning-checklist-maryland-tenants",
    "move-in-cleaning-guide-dmv",
  ],
  "move-in-cleaning-guide-dmv": [
    "move-out-cleaning-checklist-maryland-tenants",
    "deep-cleaning-checklist-dmv-homeowners",
    "house-cleaning-prices-maryland-2026",
  ],
  "allergy-proofing-home-dmv": [
    "remove-pet-hair-odors-dmv-homes",
    "spring-cleaning-checklist-maryland-2026",
    "eco-cleaning-tips-maryland-homes",
  ],
  "fall-cleaning-checklist-maryland": [
    "spring-cleaning-checklist-maryland-2026",
    "eco-cleaning-tips-winters-maryland",
    "allergy-proofing-home-dmv",
  ],
};

const allPosts = [...blogPosts, ...autoBlogPosts];

interface RelatedPostsProps {
  currentSlug: string;
}

const RelatedPosts = ({ currentSlug }: RelatedPostsProps) => {
  const relatedSlugs = RELATED_MAP[currentSlug] ?? [];

  const related = relatedSlugs
    .map((slug) => allPosts.find((p) => p.slug === slug))
    .filter(Boolean) as typeof allPosts;

  if (related.length === 0) return null;

  return (
    <section className="mt-14 pt-10 border-t border-border">
      <h2 className="font-heading text-xl font-bold mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {related.map((post) => (
          <Card key={post.slug} className="group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
            <Link to={`/blog/${post.slug}`}>
              {post.coverImage && (
                <div className="h-36 overflow-hidden rounded-t-lg">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              <CardContent className="p-4">
                <span className="text-xs bg-accent/10 text-accent font-medium px-2 py-0.5 rounded-full">
                  {post.category}
                </span>
                <h3 className="font-heading font-semibold text-sm mt-2 mb-2 leading-tight group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
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
};

export default RelatedPosts;
