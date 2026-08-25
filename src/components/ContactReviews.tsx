import { Star } from "lucide-react";
import { REAL_REVIEWS, GOOGLE_LISTING_URL } from "@/data/realReviews";

// The 3 strongest, most detailed of the 8 verified Google reviews — hand-picked so the
// Contact page shows the "best" ones (booking experience / quality / reliability) while the
// visitor fills out the quote form. Real customer words only; fall back to the first 3.
const BEST_NAMES = ["Grace J.", "Lisa Phillips", "Ranj Saadallah"];
const bestReviews = BEST_NAMES
  .map((name) => REAL_REVIEWS.find((r) => r.name === name))
  .filter((r): r is (typeof REAL_REVIEWS)[number] => Boolean(r));
const reviews = bestReviews.length === BEST_NAMES.length ? bestReviews : REAL_REVIEWS.slice(0, 3);

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

/**
 * Compact, static social-proof block for the Contact page — the 3 strongest REAL Google
 * reviews, shown beside/below the quote form so visitors see them while filling it out.
 * No live fetch, no carousel, no autoplay. Rating/Review JSON-LD is emitted once by the
 * page's <LocalBusinessSchema reviews={...} /> (AggregateRating only) — this block is
 * purely presentational and adds no schema.
 */
const ContactReviews = () => (
  <aside aria-labelledby="contact-reviews-heading">
    {/* Semantic H2 (first H2 on the page) styled as a compact eyebrow so it doesn't
        compete with the page H1 "Get a Free Quote". */}
    <h2
      id="contact-reviews-heading"
      className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-accent mb-4"
    >
      <Star className="h-3.5 w-3.5 fill-accent" aria-hidden="true" /> Client Reviews
    </h2>

    <div className="space-y-4">
      {reviews.map((r) => (
        <div
          key={r.name}
          className="rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-accent/30"
        >
          <div role="img" aria-label="Rated 5 out of 5 stars" className="mb-3 flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </div>
          <p className="mb-4 text-sm italic leading-relaxed text-foreground">&ldquo;{r.text}&rdquo;</p>
          <div className="flex items-center gap-3">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent"
              aria-hidden="true"
            >
              {initials(r.name)}
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">{r.name}</p>
              <p className="text-xs text-muted-foreground">Verified Google review</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <a
      href={GOOGLE_LISTING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent"
    >
      <span className="font-semibold">5.0 ★</span> · 45 Google reviews &rarr;
    </a>
  </aside>
);

export default ContactReviews;
