import { useState, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  author_url: string;
  profile_photo_url: string;
}

interface UseGooglePlaceReviewsResult {
  reviews: GoogleReview[];
  rating: number | null;
  totalRatings: number | null;
  loading: boolean;
  error: string | null;
}

export function useGooglePlaceReviews(placeId: string): UseGooglePlaceReviewsResult {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [rating, setRating] = useState<number | null>(null);
  const [totalRatings, setTotalRatings] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    if (!apiKey || !placeId) {
      setLoading(false);
      setError("Missing API key or Place ID.");
      return;
    }

    const loader = new Loader({ apiKey, libraries: ["places"] });

    loader.load().then((google) => {
      const service = new google.maps.places.PlacesService(
        document.createElement("div")
      );
      service.getDetails(
        {
          placeId,
          fields: ["reviews", "rating", "user_ratings_total"],
        },
        (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && place) {
            setReviews((place.reviews as GoogleReview[]) ?? []);
            setRating(place.rating ?? null);
            setTotalRatings(place.user_ratings_total ?? null);
          } else {
            setError("Could not load reviews.");
          }
          setLoading(false);
        }
      );
    }).catch(() => {
      setError("Failed to load Google Maps.");
      setLoading(false);
    });
  }, [placeId]);

  return { reviews, rating, totalRatings, loading, error };
}
