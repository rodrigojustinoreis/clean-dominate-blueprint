import AuthorBio from "@/components/blog/AuthorBio";
import TransformationsGallery from "@/components/TransformationsGallery";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/pages/Blog";
import { autoBlogPosts } from "@/data/auto-blog-posts";

// Manual related-post mapping: slug → up to 3 related slugs
const RELATED_MAP: Record<string, string[]> = {
  "best-house-cleaning-service-bethesda-md": [
    "house-cleaning-cost-bethesda-md",
    "questions-to-ask-before-hiring-house-cleaner",
    "red-flags-house-cleaning-service",
  ],
  "move-in-cleaning-checklist": [
    "move-out-cleaning-checklist-maryland-tenants",
    "why-first-house-cleaning-costs-more",
    "move-out-cleaning-cost-maryland",
  ],
  "deep-cleaning-cost-maryland": [
    "how-much-does-deep-cleaning-cost",
    "why-first-house-cleaning-costs-more",
    "how-long-does-deep-cleaning-take",
  ],
  "how-long-does-deep-cleaning-take": [
    "deep-cleaning-cost-maryland",
    "what-is-included-in-a-deep-cleaning",
    "deep-cleaning-vs-regular-cleaning",
  ],
  "airbnb-cleaning-checklist": [
    "airbnb-cleaning-tips-dmv-hosts",
    "move-in-cleaning-checklist",
    "how-often-should-you-hire-a-cleaning-service",
  ],
  "how-much-tip-house-cleaner": [
    "how-often-should-you-hire-a-cleaning-service",
    "hidden-fees-house-cleaning",
    "is-professional-house-cleaning-worth-it",
  ],
  "how-to-clean-up-after-a-party": [
    "deep-cleaning-cost-maryland",
    "how-long-does-deep-cleaning-take",
  ],
  "cleaning-company-vs-independent-cleaner": [
    "local-cleaning-company-vs-franchise",
    "questions-to-ask-before-hiring-house-cleaner",
    "red-flags-house-cleaning-service",
  ],
  "local-cleaning-company-vs-franchise": [
    "cleaning-company-vs-independent-cleaner",
    "red-flags-house-cleaning-service",
    "questions-to-ask-before-hiring-house-cleaner",
  ],
  "questions-to-ask-before-hiring-house-cleaner": [
    "red-flags-house-cleaning-service",
    "cleaning-company-vs-independent-cleaner",
    "hidden-fees-house-cleaning",
  ],
  "why-first-house-cleaning-costs-more": [
    "deep-cleaning-cost-maryland",
    "flat-rate-vs-hourly-house-cleaning",
    "hidden-fees-house-cleaning",
  ],
  "flat-rate-vs-hourly-house-cleaning": [
    "hidden-fees-house-cleaning",
    "why-first-house-cleaning-costs-more",
    "house-cleaning-prices-maryland-2026",
  ],
  "red-flags-house-cleaning-service": [
    "questions-to-ask-before-hiring-house-cleaner",
    "hidden-fees-house-cleaning",
    "local-cleaning-company-vs-franchise",
  ],
  "hidden-fees-house-cleaning": [
    "flat-rate-vs-hourly-house-cleaning",
    "red-flags-house-cleaning-service",
    "house-cleaning-prices-maryland-2026",
  ],
  "house-too-messy-for-cleaning-service": [
    "questions-to-ask-before-hiring-house-cleaner",
    "why-first-house-cleaning-costs-more",
    "how-often-should-you-hire-a-cleaning-service",
  ],
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
    "flat-rate-vs-hourly-house-cleaning",
    "hidden-fees-house-cleaning",
    "how-to-choose-cleaning-service-silver-spring",
  ],
  "deep-cleaning-checklist-dmv-homeowners": [
    "spring-cleaning-checklist-maryland-2026",
    "post-renovation-cleaning-guide-maryland",
    "recurring-cleaning-weekly-biweekly-monthly",
  ],
  "airbnb-cleaning-tips-dmv-hosts": [
    "airbnb-cleaning-checklist",
    "move-in-cleaning-checklist",
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
    "move-out-cleaning-cost-maryland",
  ],
  "eco-cleaning-tips-winters-maryland": [
    "eco-cleaning-tips-maryland-homes",
    "how-to-get-cigarette-smell-out-of-your-house",
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
  "deep-cleaning-tips-maryland-homes-spring-prep": [
    "spring-cleaning-checklist-maryland-2026",
    "what-is-included-in-a-deep-cleaning",
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
    "cleaning-service-georgetown-dc",
  ],
  "deep-cleaning-rockville-md": [
    "spring-cleaning-checklist-maryland-2026",
    "deep-cleaning-tips-maryland-homes-spring-prep",
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
  "house-cleaning-gaithersburg-md": [
    "deep-cleaning-montgomery-county-md",
    "house-cleaning-prices-maryland-2026",
    "how-to-choose-cleaning-service-silver-spring",
  ],
  "cleaning-service-mclean-va": [
    "cleaning-service-fairfax-va",
    "cleaning-service-arlington-va",
    "cleaning-service-reston-va",
  ],
  "cleaning-service-columbia-md": [
    "deep-cleaning-checklist-dmv-homeowners",
    "house-cleaning-prices-maryland-2026",
    "recurring-cleaning-weekly-biweekly-monthly",
  ],
  "house-cleaning-potomac-md": [
    "deep-cleaning-montgomery-county-md",
    "house-cleaning-bethesda-md",
    "cleaning-service-chevy-chase-md",
  ],
  "cleaning-service-chevy-chase-md": [
    "house-cleaning-bethesda-md",
    "allergy-proofing-home-dmv",
    "deep-cleaning-montgomery-county-md",
  ],
  "house-cleaning-frederick-md": [
    "post-renovation-cleaning-guide-maryland",
    "spring-cleaning-checklist-maryland-2026",
    "house-cleaning-prices-maryland-2026",
  ],
  "deep-cleaning-montgomery-county-md": [
    "deep-cleaning-rockville-md",
    "house-cleaning-bethesda-md",
    "house-cleaning-gaithersburg-md",
  ],
  "cleaning-service-reston-va": [
    "cleaning-service-mclean-va",
    "cleaning-service-fairfax-va",
    "allergy-proofing-home-dmv",
  ],
  "office-cleaning-small-business-dmv": [
    "recurring-cleaning-weekly-biweekly-monthly",
    "eco-cleaning-tips-maryland-homes",
    "how-to-choose-cleaning-service-silver-spring",
  ],

  // ── Indexing-recovery links (SEO plan): indexed posts → crawl-orphan posts,
  // grouped by topical cluster so Googlebot discovers the under-linked pages. ──

  // Pet Health cluster
  "choose-pet-safe-cleaning-company": [
    "pet-dander-air-quality",
    "cleaning-product-poisoning-in-pets",
    "allergen-free-home-dog-cat-owners",
  ],
  "seasonal-vs-household-pet-allergies": [
    "hepa-filters-pets-asthma",
    "pet-sneezing-household-dust",
    "allergen-free-home-dog-cat-owners",
  ],
  "why-pet-skin-allergies-start-in-carpet": [
    "pet-dander-air-quality",
    "pet-sneezing-household-dust",
    "hepa-filters-pets-asthma",
  ],
  "what-pet-safe-cleaning-really-means": [
    "cleaning-product-poisoning-in-pets",
    "allergen-free-home-dog-cat-owners",
    "pet-dander-air-quality",
  ],
  "how-to-get-rid-of-dog-smell-pet-safe": [
    "pet-sneezing-household-dust",
    "hepa-filters-pets-asthma",
    "allergen-free-home-dog-cat-owners",
  ],

  // How-to / techniques cluster
  "how-to-clean-a-bathroom-step-by-step": [
    "how-to-clean-grout-without-bleach",
    "how-to-remove-hard-water-stains-naturally",
    "how-to-get-rid-of-mildew-smell-naturally",
  ],
  "how-to-remove-red-wine-stains": [
    "how-to-remove-candle-wax-eco-friendly",
    "how-to-remove-sharpie-safely",
    "mrs-meyers-clean-day-review-how-to-use",
  ],
  "how-to-remove-sticker-residue-natural": [
    "how-to-remove-sharpie-safely",
    "how-to-remove-candle-wax-eco-friendly",
    "mrs-meyers-clean-day-review-how-to-use",
  ],
  "most-forgotten-areas-when-cleaning": [
    "how-to-deep-clean-a-stove-maryland",
    "how-to-clean-carpet-home-apartment",
    "how-to-clean-grout-without-bleach",
  ],
  "how-to-clean-oled-tv-screen-safely": [
    "how-to-remove-sharpie-safely",
    "mrs-meyers-clean-day-review-how-to-use",
    "how-to-remove-candle-wax-eco-friendly",
  ],
  "how-to-clean-your-washing-machine-eco-friendly": [
    "how-to-get-rid-of-mildew-smell-naturally",
    "how-to-remove-hard-water-stains-naturally",
    "mrs-meyers-clean-day-review-how-to-use",
  ],
  "why-dust-builds-up-maryland-homes": [
    "how-to-clean-carpet-home-apartment",
    "how-to-deep-clean-a-stove-maryland",
    "how-to-get-cigarette-smell-out-of-your-house",
  ],

  // Cost / decision cluster
  "how-much-does-deep-cleaning-cost": [
    "move-out-cleaning-cost-maryland",
    "is-professional-house-cleaning-worth-it",
    "house-cleaning-prices-maryland-2026",
  ],
  "one-time-vs-recurring-cleaning": [
    "is-professional-house-cleaning-worth-it",
    "move-out-cleaning-cost-maryland",
    "cleaning-tips-for-working-professionals",
  ],
  "how-often-should-you-hire-a-cleaning-service": [
    "cleaning-tips-for-working-professionals",
    "is-professional-house-cleaning-worth-it",
    "recurring-cleaning-weekly-biweekly-monthly",
  ],
  "how-to-keep-house-clean-between-cleanings": [
    "cleaning-tips-for-working-professionals",
    "is-professional-house-cleaning-worth-it",
    "best-house-cleaning-service-rockville-md",
  ],
  "how-to-prepare-home-for-professional-cleaning": [
    "is-professional-house-cleaning-worth-it",
    "move-out-cleaning-cost-maryland",
    "best-house-cleaning-service-rockville-md",
  ],
  "best-house-cleaning-service-silver-spring-md": [
    "best-house-cleaning-service-rockville-md",
    "how-to-choose-cleaning-service-silver-spring",
    "house-cleaning-cost-silver-spring-md",
  ],

  // Cost-by-city cluster
  "house-cleaning-cost-rockville-md": [
    "best-house-cleaning-service-rockville-md",
    "deep-cleaning-rockville-md",
    "move-out-cleaning-cost-maryland",
  ],
  "house-cleaning-cost-alexandria-va": [
    "cleaning-service-alexandria-va",
    "move-out-cleaning-cost-maryland",
    "airbnb-cleaning-tips-dmv-hosts",
  ],
  "house-cleaning-cost-arlington-va": [
    "cleaning-service-mclean-va",
    "cleaning-service-reston-va",
    "move-out-cleaning-cost-maryland",
  ],
  "house-cleaning-cost-bethesda-md": [
    "cleaning-service-chevy-chase-md",
    "house-cleaning-potomac-md",
    "cleaning-service-columbia-md",
  ],
  "house-cleaning-cost-silver-spring-md": [
    "best-house-cleaning-service-rockville-md",
    "how-to-choose-cleaning-service-silver-spring",
    "cleaning-service-columbia-md",
  ],

  // Local / city cluster
  "house-cleaning-guide-clarksburg-md": [
    "house-cleaning-gaithersburg-md",
    "house-cleaning-frederick-md",
    "house-cleaning-prices-maryland-2026",
  ],
  "house-cleaning-guide-germantown-md": [
    "house-cleaning-gaithersburg-md",
    "cleaning-service-columbia-md",
    "house-cleaning-potomac-md",
  ],
  "post-construction-cleaning-montgomery-county-md": [
    "house-cleaning-potomac-md",
    "cleaning-service-chevy-chase-md",
    "post-renovation-cleaning-guide-maryland",
  ],
  "what-is-included-in-a-deep-cleaning": [
    "house-cleaning-washington-dc",
    "cleaning-service-fairfax-va",
    "office-cleaning-small-business-dmv",
  ],
  "what-is-included-in-a-standard-cleaning": [
    "cleaning-service-columbia-md",
    "cleaning-service-mclean-va",
    "cleaning-tips-for-working-professionals",
  ],

  // Seasonal cluster
  "summer-cleaning-checklist-maryland": [
    "fall-cleaning-checklist-maryland",
    "spring-cleaning-checklist-maryland-2026",
    "eco-cleaning-tips-winters-maryland",
  ],
  "holiday-cleaning-checklist-dmv": [
    "fall-cleaning-checklist-maryland",
    "airbnb-cleaning-tips-dmv-hosts",
    "move-in-cleaning-guide-dmv",
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

  // The video-proof carousel renders after the article (4th block) on every post.
  if (related.length === 0) return <><AuthorBio /><TransformationsGallery heading="See the Results: Real Before & After Videos" subtext="Every clip is unedited footage from our own DMV team, using the same eco-friendly products we bring to every home. This is the standard behind everything we write." /></>;


  return (
    <>
    <AuthorBio />
    <TransformationsGallery heading="See the Results: Real Before & After Videos" subtext="Every clip is unedited footage from our own DMV team, using the same eco-friendly products we bring to every home. This is the standard behind everything we write." />
    <section className="mt-14 pt-10 border-t border-border">
      <h2 className="font-heading text-xl font-bold mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {related.map((post) => (
          <Card key={post.slug} className="group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
            <Link to={`/resources/${post.slug}`}>
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
    </>
  );
};

export default RelatedPosts;
