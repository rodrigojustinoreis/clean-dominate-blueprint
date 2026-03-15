import { useState, useEffect } from "react";

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

/** Fetches reviews via Netlify Function proxy — API key stays server-side. */
export function useGooglePlaceReviews(): UseGooglePlaceReviewsResult {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [rating, setRating] = useState<number | null>(null);
  const [totalRatings, setTotalRatings] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/.netlify/functions/google-reviews")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setReviews(data.reviews ?? []);
        setRating(data.rating ?? null);
        setTotalRatings(data.totalRatings ?? null);
      })
      .catch((err) => setError(err.message ?? "Failed to load reviews."))
      .finally(() => setLoading(false));
  }, []);

  return { reviews, rating, totalRatings, loading, error };
}
