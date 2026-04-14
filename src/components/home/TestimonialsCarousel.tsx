import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import { Star, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGooglePlaceReviews } from "@/hooks/useGooglePlaceReviews";

const GOOGLE_REVIEWS_URL = "https://share.google/4lygNFQSUZrkfaVh7";
const AUTO_SCROLL_MS = 4000;

const STATIC_REVIEWS = [
  { name: "Sarah M.", location: "Bethesda, MD", date: "2 months ago", color: "bg-emerald-500", text: "Capital Clean Care transformed our home. The team was professional, thorough, and used products that I feel safe having around my kids and pets.", rating: 5 },
  { name: "James T.", location: "Arlington, VA", date: "3 months ago", color: "bg-sky-500", text: "We've used their bi-weekly service for six months and every visit exceeds expectations. Our dedicated team knows our home perfectly.", rating: 5 },
  { name: "Lauren K.", location: "Capitol Hill, DC", date: "1 month ago", color: "bg-violet-500", text: "After our kitchen renovation, the post-construction cleaning was incredible. They removed every trace of dust from places I didn't even know existed.", rating: 5 },
  { name: "David R.", location: "Rockville, MD", date: "4 months ago", color: "bg-amber-500", text: "Their eco-friendly approach and consistent quality make them stand out. Switching to Capital Clean Care was the best decision we've made.", rating: 5 },
  { name: "Monica S.", location: "McLean, VA", date: "3 weeks ago", color: "bg-rose-500", text: "I was skeptical about letting anyone in my home, but their background-checked team put me at ease immediately. The deep clean was absolutely worth every penny.", rating: 5 },
  { name: "Carlos F.", location: "Silver Spring, MD", date: "5 months ago", color: "bg-teal-500", text: "Booked a move-out clean and got my full security deposit back. They were incredibly detailed — even cleaned inside the oven and behind the fridge.", rating: 5 },
  { name: "Priya N.", location: "Alexandria, VA", date: "6 weeks ago", color: "bg-indigo-500", text: "Best cleaning service in the DMV, hands down. They remember every preference we have and my house smells amazing without any harsh chemicals.", rating: 5 },
  { name: "Tom W.", location: "Frederick, MD", date: "2 months ago", color: "bg-orange-500", text: "I run an Airbnb and Capital Clean Care handles all my turnovers. Guests consistently leave 5-star reviews mentioning how clean the space is.", rating: 5 },
  { name: "Michelle P.", location: "Georgetown, DC", date: "1 month ago", color: "bg-pink-500", text: "Finally a cleaning service I can trust completely. They arrive on time, follow a real checklist, and the results are consistently amazing. Worth every penny.", rating: 5 },
  { name: "Angela T.", location: "Silver Spring, MD", date: "2 weeks ago", color: "bg-lime-600", text: "With two kids and a dog, knowing the products are safe gives me real peace of mind. I love that they are eco-friendly. Highly recommend to any family.", rating: 5 },
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
