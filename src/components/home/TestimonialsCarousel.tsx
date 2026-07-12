import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import { Star, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGooglePlaceReviews } from "@/hooks/useGooglePlaceReviews";

const GOOGLE_REVIEWS_URL = "https://share.google/4lygNFQSUZrkfaVh7";
const AUTO_SCROLL_MS = 4000;

const STATIC_REVIEWS = [
  // The 8 real Google reviews (see src/data/realReviews.ts) — no fabricated names or dates.
  { name: "David Reed", location: "Google review", date: "", color: "bg-emerald-500", text: "Rodrigo and his team were incredible — worth every penny. They left it spotless!", rating: 5 },
  { name: "Steph M.", location: "Google review", date: "", color: "bg-sky-500", text: "The thoroughness and attention to detail was exceptional — the home was spotless and looked beautiful. Couldn't be happier. Highly recommend.", rating: 5 },
  { name: "Christina Damiani", location: "Google review", date: "", color: "bg-violet-500", text: "Excellent cleaning service! The home looked spotless and fresh when the job was completed. Very thorough, professional, and reliable.", rating: 5 },
  { name: "Erika Wilson Wells", location: "Google review", date: "", color: "bg-amber-500", text: "Always helpful, kind and thorough cleaning by Capital Clean Care. I highly recommend this business.", rating: 5 },
  { name: "Grace J.", location: "Google review", date: "", color: "bg-rose-500", text: "From the first contact they responded promptly and offered a fair price. The crew arrived right on time and the apartment was spotless. Five stars without hesitation!", rating: 5 },
  { name: "Ranj Saadallah", location: "Google review", date: "", color: "bg-teal-500", text: "They show up on time and the house looks wonderful when they're done, every time. They cleaned the windows inside and out, appliances, even behind them.", rating: 5 },
  { name: "Lisa Phillips", location: "Google review", date: "", color: "bg-indigo-500", text: "Fantastic move-out clean. Floors, windows, walls, appliances, baseboards — every crook and cranny spotlessly clean. The house is totally immaculate. I highly recommend!", rating: 5 },
  { name: "Lisa Famulare", location: "Google review", date: "", color: "bg-orange-500", text: "Excellent job with tough stains! Professional, reliable, and the results speak for themselves.", rating: 5 },
];

const AVATAR_COLORS = ["bg-emerald-500", "bg-sky-500", "bg-violet-500", "bg-amber-500", "bg-rose-500", "bg-teal-500"];

const StarRow = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-3.5 w-3.5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`} />
    ))}
  </div>
);

interface ReviewCardProps {
  name: string;
  location?: string;
  date: string;
  color: string;
  text: string;
  rating: number;
  photoUrl?: string;
  authorUrl?: string;
  isLive?: boolean;
}

const ReviewCard = ({ name, location, date, color, text, rating, photoUrl, authorUrl, isLive }: ReviewCardProps) => (
  <div className="group relative bg-card rounded-2xl p-6 border border-border hover:border-accent/20 hover:shadow-xl transition-all duration-300 flex flex-col h-full mx-2">
    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <StarRow rating={rating} />
    <p className="text-foreground text-sm leading-relaxed my-4 flex-1 line-clamp-4">"{text}"</p>
    <div className="flex items-center gap-3 pt-4 border-t border-border">
      {photoUrl ? (
        <img src={photoUrl} alt={name} className="w-9 h-9 rounded-full object-cover shrink-0" referrerPolicy="no-referrer" />
      ) : (
        <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center shrink-0`}>
          <span className="text-white text-xs font-bold">{name.charAt(0)}</span>
        </div>
      )}
      <div className="min-w-0">
        {authorUrl ? (
          <a href={authorUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-accent transition-colors truncate block">{name}</a>
        ) : (
          <p className="text-sm font-semibold truncate">{name}</p>
        )}
        <p className="text-xs text-muted-foreground truncate">{isLive ? "via Google" : location}</p>
      </div>
      <span className="ml-auto text-xs text-muted-foreground/60 shrink-0 pl-2">{date}</span>
    </div>
  </div>
);

const TestimonialsCarousel = () => {
  const { reviews: liveReviews, rating, totalRatings, loading } = useGooglePlaceReviews();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", dragFree: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  const showLive = !loading && liveReviews.length > 0;
  const reviews = showLive
    ? liveReviews.map((r, i) => ({
        name: r.author_name,
        location: undefined,
        date: r.relative_time_description,
        color: AVATAR_COLORS[i % AVATAR_COLORS.length],
        text: r.text,
        rating: r.rating,
        photoUrl: r.profile_photo_url,
        authorUrl: r.author_url,
        isLive: true,
      }))
    : STATIC_REVIEWS.map((r) => ({ ...r, photoUrl: undefined, authorUrl: undefined, isLive: false }));

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  // Auto-scroll
  useEffect(() => {
    if (!emblaApi || isPaused) return;
    const id = setInterval(() => emblaApi.scrollNext(), AUTO_SCROLL_MS);
    return () => clearInterval(id);
  }, [emblaApi, isPaused]);

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            ⭐ Client Stories
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Real reviews from real homeowners across MD, DC & VA.
          </p>
          {/* Google aggregate badge */}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-5 py-2 rounded-full border border-border bg-white hover:border-accent/40 hover:bg-accent/5 transition-all text-sm font-medium shadow-sm"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-foreground">{showLive && rating ? rating.toFixed(1) : "5.0"}</span>
            {showLive && totalRatings && <span className="text-muted-foreground">({totalRatings}+ reviews)</span>}
            <span className="text-muted-foreground">on Google</span>
            <ExternalLink className="h-3 w-3 text-muted-foreground" />
          </a>
        </div>

        {/* Featured review highlight */}
        <div className="max-w-2xl mx-auto mb-10 bg-white rounded-2xl border border-accent/20 p-6 md:p-8 shadow-sm text-center">
          <div className="flex justify-center gap-0.5 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <blockquote className="text-base md:text-lg font-medium text-foreground italic leading-relaxed mb-4">
            "From the first contact they responded promptly and offered a fair price. The crew arrived right on time and the apartment was spotless. Five stars without hesitation!"
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold">Grace J.</p>
              <p className="text-xs text-muted-foreground">Verified Google review</p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2 py-1"
                >
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
          </div>

          {/* Arrow buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 lg:-translate-x-5 w-10 h-10 rounded-full bg-white border border-border shadow-md flex items-center justify-center hover:bg-accent/5 hover:border-accent/30 transition-all z-10"
            aria-label="Previous review"
          >
            <ArrowLeft className="h-4 w-4 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 lg:translate-x-5 w-10 h-10 rounded-full bg-white border border-border shadow-md flex items-center justify-center hover:bg-accent/5 hover:border-accent/30 transition-all z-10"
            aria-label="Next review"
          >
            <ArrowRight className="h-4 w-4 text-foreground" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === selectedIndex ? "bg-accent w-4" : "bg-border hover:bg-accent/40"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="cta" size="lg" className="rounded-full" asChild>
            <a href="#quote">Get Your Free Quote <ArrowRight className="ml-1 h-4 w-4" /></a>
          </Button>
          <Button variant="outline" className="rounded-full" asChild>
            <Link to="/reviews">Read All Reviews <ArrowRight className="ml-1 h-3 w-3" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
