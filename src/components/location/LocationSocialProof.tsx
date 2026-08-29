import { useRef, useState, useEffect } from "react";
import { Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pickReviews, GOOGLE_LISTING_URL } from "@/data/realReviews";
import { trackBookNowClick } from "@/lib/analytics";

interface LocationSocialProofProps {
  cityName: string;
  citySlug: string;
  serviceSlug: string;
  serviceLabel: string;
  /** Override the auto-rotated real reviews if a page wants specific ones. */
  count?: number;
  /**
   * When set, the video slot shows a real spoken client testimonial as a
   * click-to-play player (poster first, then <video controls> with audio —
   * no autoplay, since it has sound) instead of the muted brand-trust montage.
   */
  testimonialVideo?: { src: string; poster: string; label: string };
  /** Hide the brand montage when verified review cards are the stronger proof. */
  showVideo?: boolean;
}

/**
 * Social-proof block for location/service pages — REAL Google reviews only
 * (rotated deterministically from the 8 verified ones), the brand trust video,
 * and the accurate 5.0 / 45 count linking to the live listing.
 *
 * The video is TRULY lazy: only the poster <img> renders until the block scrolls
 * near the viewport, then the <video> mounts and autoplays. (autoplay overrides
 * preload="none" in Chromium, so we must gate the element itself to avoid a
 * ~736 KB download on every initial page load.)
 */
const LocationSocialProof = ({ cityName, citySlug, serviceSlug, serviceLabel, count = 1, testimonialVideo, showVideo = true }: LocationSocialProofProps) => {
  // One real review per page (hash-distributed across the 9 verified reviews) so
  // neighbouring city pages rarely share the same review card.
  const reviews = pickReviews(`${citySlug}/${serviceSlug}`, count);

  const videoWrapRef = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [playTestimonial, setPlayTestimonial] = useState(false);

  useEffect(() => {
    if (videoReady || !showVideo) return;
    const el = videoWrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVideoReady(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [videoReady, showVideo]);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            <Star className="h-3.5 w-3.5 fill-accent" aria-hidden="true" /> Client Reviews
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            {cityName} Homeowners Love Our {serviceLabel}
          </h2>
        </div>

        {showVideo && (testimonialVideo ? (
          /* Real spoken client testimonial — click-to-play with controls + audio (no autoplay). */
          <div className="mb-8 max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-xl ring-1 ring-accent/20 bg-[#0a1726]">
            {playTestimonial ? (
              <video
                className="w-full aspect-video object-cover block"
                controls
                autoPlay
                playsInline
                poster={testimonialVideo.poster}
                aria-label={testimonialVideo.label}
              >
                <source src={testimonialVideo.src} type="video/mp4" />
              </video>
            ) : (
              <button
                type="button"
                onClick={() => setPlayTestimonial(true)}
                className="group relative block w-full"
                aria-label={`Play video testimonial: ${testimonialVideo.label}`}
              >
                <img
                  src={testimonialVideo.poster}
                  alt={testimonialVideo.label}
                  className="w-full aspect-video object-cover block"
                  loading="lazy"
                  width={1280}
                  height={720}
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/15">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-xl ring-1 ring-white/60 transition-transform group-hover:scale-110">
                    <Play className="h-7 w-7 translate-x-0.5 fill-[#0D2B5E] text-[#0D2B5E]" />
                  </span>
                </span>
                <span className="absolute bottom-3 left-3 right-3 text-left text-sm font-semibold text-white drop-shadow">
                  ▶ Watch a real client testimonial
                </span>
              </button>
            )}
          </div>
        ) : (
          /* Brand trust video — lazy: poster first, <video> mounts on scroll-near */
          <div
            ref={videoWrapRef}
            className="mb-8 max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-xl ring-1 ring-accent/20 bg-[#0a1726]"
          >
            {videoReady ? (
              <video
                className="w-full aspect-video object-cover block"
                autoPlay
                muted
                loop
                playsInline
                poster="/videos/reviews-poster.jpg"
                aria-label="Capital Clean Care — rated 5.0 stars across 45 Google reviews from homeowners in Maryland, DC and Northern Virginia"
              >
                <source src="/videos/reviews.webm" type="video/webm" />
                <source src="/videos/reviews.mp4" type="video/mp4" />
              </video>
            ) : (
              <img
                src="/videos/reviews-poster.jpg"
                alt="Capital Clean Care — 5.0 stars across 45 Google reviews"
                className="w-full aspect-video object-cover block"
                loading="lazy"
                width={1280}
                height={720}
              />
            )}
          </div>
        ))}

        {/* Real reviews */}
        <div
          className={`grid gap-4 ${
            reviews.length > 1
              ? "grid-flow-col auto-cols-[88%] overflow-x-auto snap-x snap-mandatory pb-3 md:grid-flow-row md:auto-cols-auto md:grid-cols-3 md:overflow-visible md:pb-0"
              : "grid-cols-1 max-w-xl mx-auto"
          }`}
          aria-label={reviews.length > 1 ? "Verified Google review carousel" : undefined}
        >
          {reviews.map((r) => (
            <article key={r.name} className="h-full snap-center bg-card border border-border rounded-xl p-5 shadow-sm">
              <div role="img" aria-label="5 out of 5 stars" className="flex items-center gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-foreground italic mb-3 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <p className="text-sm font-semibold text-foreground">{r.name}</p>
              <p className="text-xs text-muted-foreground">Verified Google review</p>
            </article>
          ))}
        </div>
        {reviews.length > 1 && (
          <p className="mt-2 text-center text-xs text-muted-foreground md:hidden">Swipe to read more verified reviews</p>
        )}

        {/* Proof strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-5 gap-y-2 mt-6">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">5.0 ★</span> average · 45 reviews on Google
          </p>
          <a
            href={GOOGLE_LISTING_URL}
            className="text-sm text-primary underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our 45 reviews →
          </a>
        </div>

        <div className="text-center mt-6">
          <Button variant="cta" size="lg" asChild>
            <a
              href="#quote"
              className="whitespace-normal text-center h-auto py-3 leading-snug max-w-full"
              onClick={() => trackBookNowClick("location_social_proof")}
            >
              Get My Free {cityName} {serviceLabel} Quote →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationSocialProof;
