// The 8 real, verified Google reviews for Capital Clean Care (5.0 / 45 on GBP).
// Single source of truth — location/service pages reuse these instead of inventing
// placeholder testimonials. Card text is the customer's real words (trimmed for length).
// Direct link to the live Google Business listing (read the real 45 reviews):
export const GOOGLE_LISTING_URL = "https://www.google.com/maps?cid=1774420840079969097";

export interface RealReview {
  name: string;
  text: string;
}

export const REAL_REVIEWS: RealReview[] = [
  { name: "David Reed", text: "Rodrigo and his team were incredible — worth every penny. They left it spotless!" },
  { name: "Steph M.", text: "The thoroughness and attention to detail was exceptional — the home was spotless and looked beautiful. Couldn't be happier. Highly recommend." },
  { name: "Christina Damiani", text: "Excellent cleaning service! The home looked spotless and fresh when the job was completed. Very thorough, professional, and reliable." },
  { name: "Erika Wilson Wells", text: "Always helpful, kind and thorough cleaning by Capital Clean Care. I highly recommended this business." },
  { name: "Grace J.", text: "From the first contact they responded promptly and offered a fair price. The crew arrived right on time and the apartment was spotless. Professionalism, efficiency, and genuine care — five stars without hesitation!" },
  { name: "Ranj Saadallah", text: "They show up on time and the house looks wonderful when they're done, every time. I recently had both our Airbnbs deep cleaned — they cleaned the windows inside and out, appliances, even behind them. My homes look and feel brighter." },
  { name: "Lisa Phillips", text: "Fantastic move-out clean. Rodrigo and his team cleaned my entire house — floors, windows, walls, appliances, baseboards, every crook and cranny spotlessly clean. The house is totally immaculate. I highly recommend!" },
  { name: "Lisa Famulare", text: "Excellent job with tough stains! Professional, reliable, and the results speak for themselves." },
];

// Deterministic, stable picker: same seed (e.g. `${citySlug}/${serviceSlug}`) always
// returns the same reviews, but adjacent pages differ — so the site doesn't look stamped.
function hashSeed(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

export function pickReviews(seed: string, count = 2): RealReview[] {
  const start = hashSeed(seed) % REAL_REVIEWS.length;
  const out: RealReview[] = [];
  for (let i = 0; i < Math.min(count, REAL_REVIEWS.length); i++) {
    out.push(REAL_REVIEWS[(start + i) % REAL_REVIEWS.length]);
  }
  return out;
}
