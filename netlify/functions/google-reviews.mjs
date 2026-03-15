/**
 * Netlify Function — Google Places Reviews Proxy
 * Keeps GOOGLE_PLACES_API_KEY server-side (never exposed to frontend).
 * In-memory cache: reviews are cached for 1 hour between warm invocations.
 */

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
let cache = { data: null, ts: 0 };

const HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: HEADERS, body: "" };
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return {
      statusCode: 503,
      headers: HEADERS,
      body: JSON.stringify({ error: "Google Places API not configured." }),
    };
  }

  // Serve from cache if fresh
  const now = Date.now();
  if (cache.data && now - cache.ts < CACHE_TTL_MS) {
    return {
      statusCode: 200,
      headers: { ...HEADERS, "X-Cache": "HIT" },
      body: JSON.stringify(cache.data),
    };
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&reviews_sort=newest&key=${apiKey}`;

  try {
    const res = await fetch(url);
    const json = await res.json();

    if (json.status !== "OK") {
      return {
        statusCode: 502,
        headers: HEADERS,
        body: JSON.stringify({ error: `Places API: ${json.status}` }),
      };
    }

    const result = {
      rating: json.result.rating ?? null,
      totalRatings: json.result.user_ratings_total ?? null,
      reviews: (json.result.reviews ?? []).slice(0, 6).map((r) => ({
        author_name: r.author_name,
        author_url: r.author_url,
        profile_photo_url: r.profile_photo_url,
        rating: r.rating,
        text: r.text,
        time: r.time,
        relative_time_description: r.relative_time_description,
      })),
    };

    cache = { data: result, ts: now };

    return {
      statusCode: 200,
      headers: { ...HEADERS, "X-Cache": "MISS" },
      body: JSON.stringify(result),
    };
  } catch (err) {
    console.error("Google Places fetch error:", err);
    return {
      statusCode: 500,
      headers: HEADERS,
      body: JSON.stringify({ error: "Internal error fetching reviews." }),
    };
  }
};
