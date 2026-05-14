/**
 * Netlify Function — Google Places Reviews Proxy
 * Keeps GOOGLE_PLACES_API_KEY server-side (never exposed to frontend).
 * In-memory cache: reviews are cached for 1 hour between warm invocations.
 */

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
const FETCH_TIMEOUT_MS = 6000;        // 6s — well under Netlify's 10s limit
let cache = { data: null, ts: 0 };

const HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};

const EMPTY_RESULT = { rating: null, totalRatings: null, reviews: [] };

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: HEADERS, body: "" };
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    // Return empty data so the page renders without breaking
    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify(EMPTY_RESULT),
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
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);

    const json = await res.json();

    if (json.status !== "OK") {
      console.error("Places API error status:", json.status);
      // Return empty data gracefully — don't expose 5XX to crawlers
      return {
        statusCode: 200,
        headers: HEADERS,
        body: JSON.stringify(EMPTY_RESULT),
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
    // Return empty data gracefully on any error (timeout, network, etc.)
    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify(EMPTY_RESULT),
    };
  }
};
