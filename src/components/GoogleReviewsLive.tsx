import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useGooglePlaceReviews } from "@/hooks/useGooglePlaceReviews";

const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID ?? "";

const GoogleReviewsLive = () => {
  const { reviews, rating, totalRatings, loading, error } = useGooglePlaceReviews(PLACE_ID);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-4 bg-muted rounded w-24 mb-3" />
              <div className="h-20 bg-muted rounded mb-4" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted" />
                <div className="space-y-1.5">
                  <div className="h-3 bg-muted rounded w-28" />
                  <div className="h-3 bg-muted rounded w-20" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error || reviews.length === 0) return null;

  return (
    <div>
      {rating && totalRatings && (
        <p className="text-center text-sm text-muted-foreground mb-6">
          {rating.toFixed(1)} ★ based on {totalRatings}+ Google reviews
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reviews.map((review, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{review.relative_time_description}</span>
              </div>
              <p className="text-foreground mb-4 italic text-sm leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-3">
                {review.profile_photo_url ? (
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="font-bold text-accent text-sm">{review.author_name.charAt(0)}</span>
                  </div>
                )}
                <div>
                  <a
                    href={review.author_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold hover:underline"
                  >
                    {review.author_name}
                  </a>
                  <p className="text-xs text-muted-foreground">via Google</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GoogleReviewsLive;
