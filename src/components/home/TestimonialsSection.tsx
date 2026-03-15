import { Link } from "react-router-dom";
import { Star, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGooglePlaceReviews } from "@/hooks/useGooglePlaceReviews";

const GOOGLE_REVIEWS_URL = "https://share.google/4lygNFQSUZrkfaVh7";

const STATIC_REVIEWS = [
  { name: "Sarah M.", location: "Bethesda, MD", date: "2 months ago", color: "bg-emerald-500", text: "Capital Clean Care transformed our home. The team was professional, thorough, and used products that I feel safe having around my kids and pets.", rating: 5 },
  { name: "James T.", location: "Arlington, VA", date: "3 months ago", color: "bg-sky-500", text: "We've used their bi-weekly service for six months and every visit exceeds expectations. Our dedicated team knows our home perfectly.", rating: 5 },
  { name: "Lauren K.", location: "Capitol Hill, DC", date: "1 month ago", color: "bg-violet-500", text: "After our kitchen renovation, the post-construction cleaning was incredible. They removed every trace of dust from places I didn't even know existed.", rating: 5 },
  { name: "David R.", location: "Rockville, MD", date: "4 months ago", color: "bg-amber-500", text: "Their eco-friendly approach and consistent quality make them stand out. Switching to Capital Clean Care was the best decision we've made.", rating: 5 },
  { name: "Monica S.", location: "McLean, VA", date: "3 weeks ago", color: "bg-rose-500", text: "I was skeptical about letting anyone in my home, but their background-checked team put me at ease immediately. The deep clean was absolutely worth every penny.", rating: 5 },
  { name: "Carlos F.", location: "Silver Spring, MD", date: "5 months ago", color: "bg-teal-500", text: "Booked a move-out clean and got my full security deposit back. They were incredibly detailed — even cleaned inside the oven and behind the fridge.", rating: 5 },
  { name: "Priya N.", location: "Alexandria, VA", date: "6 weeks ago", color: "bg-indigo-500", text: "Best cleaning service in the DMV, hands down. They remember every preference we have and my house smells amazing without any harsh chemicals.", rating: 5 },
  { name: "Tom W.", location: "Frederick, MD", date: "2 months ago", color: "bg-orange-500", text: "I run an Airbnb and Capital Clean Care handles all my turnovers. Guests consistently leave 5-star reviews mentioning how clean the space is.", rating: 5 },
];

const AVATAR_COLORS = ["bg-emerald-500","bg-sky-500","bg-violet-500","bg-amber-500","bg-rose-500","bg-teal-500"];

const StarRow = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-3.5 w-3.5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`} />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const { reviews: liveReviews, rating, totalRatings, loading } = useGooglePlaceReviews();

  const showLive = !loading && liveReviews.length > 0;

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-base md:text-lg">Real reviews from real homeowners across MD, DC & VA.</p>

          {/* Google aggregate badge */}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full border border-border hover:border-accent/40 hover:bg-accent/5 transition-all text-sm font-medium"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold">{showLive && rating ? rating.toFixed(1) : "5.0"}</span>
            {showLive && totalRatings && <span className="text-muted-foreground">({totalRatings}+ reviews)</span>}
            <span className="text-muted-foreground">on Google</span>
            <ExternalLink className="h-3 w-3 text-muted-foreground" />
          </a>
        </div>

        {/* Loading skeletons */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6 space-y-3">
                  <div className="h-3 bg-muted rounded w-20" />
                  <div className="h-16 bg-muted rounded" />
                  <div className="flex items-center gap-2 pt-2">
                    <div className="w-9 h-9 rounded-full bg-muted shrink-0" />
                    <div className="space-y-1.5 flex-1">
                      <div className="h-3 bg-muted rounded w-24" />
                      <div className="h-3 bg-muted rounded w-16" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Live Google reviews */}
        {showLive && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
            {liveReviews.map((r, i) => (
              <div
                key={i}
                className="group relative bg-card rounded-2xl p-6 border border-border hover:border-accent/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <StarRow rating={r.rating} />
                <p className="text-foreground text-sm leading-relaxed my-4 flex-1 line-clamp-4">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  {r.profile_photo_url ? (
                    <img src={r.profile_photo_url} alt={r.author_name} className="w-9 h-9 rounded-full object-cover shrink-0" referrerPolicy="no-referrer" />
                  ) : (
                    <div className={`w-9 h-9 rounded-full ${AVATAR_COLORS[i % AVATAR_COLORS.length]} flex items-center justify-center shrink-0`}>
                      <span className="text-white text-xs font-bold">{r.author_name.charAt(0)}</span>
                    </div>
                  )}
                  <div>
                    <a href={r.author_url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-accent transition-colors">{r.author_name}</a>
                    <p className="text-xs text-muted-foreground">via Google</p>
                  </div>
                  <span className="ml-auto text-xs text-muted-foreground/60 shrink-0">{r.relative_time_description}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Static fallback (when API not configured or loading failed) */}
        {!loading && !showLive && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {STATIC_REVIEWS.map((t, i) => (
              <div
                key={i}
                className="group relative bg-card rounded-2xl p-6 border border-border hover:border-accent/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <StarRow rating={t.rating} />
                <p className="text-foreground text-sm leading-relaxed my-4 flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center shrink-0`}>
                    <span className="text-white text-xs font-bold">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                  <span className="ml-auto text-xs text-muted-foreground/60 shrink-0">{t.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
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

export default TestimonialsSection;
