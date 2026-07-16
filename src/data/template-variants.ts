// Lote 1b — data-driven variation of the shared blocks that made city×service
// pages near-duplicates. Same factual content, 2–3 wording/ordering variants each,
// selected deterministically per city so the choice is stable across builds and
// distributed across cities. The 921 noindex pages inherit these automatically.

/** Stable per-city variant index. `salt` decorrelates different blocks so a city
 *  doesn't land on variant 0 for everything. */
export function pickVariant(slug: string, n: number, salt = 0): number {
  let h = salt;
  for (const c of slug) h = (h * 31 + c.charCodeAt(0)) & 0xffffffff;
  return Math.abs(h) % n;
}

// ── WHY CHOOSE (rule 3) — 3 rewordings of the same 8 facts, reordered ──────────
type WhyCtx = { city: string; state: string; county: string; shortName: string; housingTypes: string; lifestyle: string; neighborhoods: string[] };

export const whyChooseVariants: ((c: WhyCtx) => string[])[] = [
  (c) => [
    `Fully licensed, bonded, and insured ${c.shortName} professionals serving ${c.city}, ${c.state}`,
    `100% eco-friendly, plant-based products — safe for ${c.city} families, children, and pets`,
    `Background-checked teams experienced with ${c.housingTypes} throughout ${c.county}`,
    `Scheduling built around ${c.lifestyle.toLowerCase().split(".")[0]}`,
    `A detailed ${c.shortName} checklist covering every area of your ${c.city} home`,
    `Satisfaction guaranteed — we re-clean free if you are not 100% happy`,
    `Transparent, no-surprise pricing for ${c.city} homeowners`,
    `Real local knowledge of ${c.neighborhoods.slice(0, 3).join(", ")} and nearby ${c.city} neighborhoods`,
  ],
  (c) => [
    `Every visit is backed by full licensing, bonding, and insurance across ${c.county}`,
    `We clean ${c.city} homes only with EPA Safer Choice, plant-based products that are safe around kids and pets`,
    `Flat, upfront pricing — you approve the number before we ever start, no surprises`,
    `Crews who know ${c.housingTypes} and how they actually get dirty in ${c.city}`,
    `Not happy with any area? We come back and re-clean it free, no questions`,
    `Timing that works around ${c.lifestyle.toLowerCase().split(".")[0]}`,
    `A room-by-room ${c.shortName} checklist so nothing in your ${c.city} home gets skipped`,
    `On-the-ground familiarity with ${c.neighborhoods.slice(0, 3).join(", ")} and the surrounding area`,
  ],
  (c) => [
    `Background-checked, vetted cleaners — the same standard on every ${c.city} visit`,
    `Plant-based, non-toxic products throughout, gentle on ${c.city} families, pets, and allergy-prone homes`,
    `Licensed, bonded, and fully insured for work in ${c.city}, ${c.state}`,
    `Pricing that stays transparent and predictable for ${c.county} homeowners`,
    `A 100% satisfaction promise: we return and re-clean free until it's right`,
    `Experience across ${c.housingTypes} common to ${c.city}`,
    `Scheduling shaped around ${c.lifestyle.toLowerCase().split(".")[0]}`,
    `Local teams who know ${c.neighborhoods.slice(0, 3).join(", ")} and the rest of ${c.city}`,
  ],
];

// ── CHECKLIST (rule 2) — same factual items, 3 heading + ordering variants ─────
export const checklistHeadingVariants = [
  (service: string, city: string) => `What's Included in Our ${service} in ${city}`,
  (service: string, city: string) => `Your ${city} ${service}, Room by Room`,
  (service: string, city: string) => `Everything Our ${service} Covers in ${city}`,
];

/** Reorder the same items (never drops any) so the checklist reads differently. */
export function checklistOrder<T>(items: T[], variant: number): T[] {
  const a = [...items];
  if (variant === 1) return a.reverse();
  if (variant === 2) {
    const mid = Math.ceil(a.length / 2); // interleave halves
    const out: T[] = [];
    for (let i = 0; i < mid; i++) {
      out.push(a[i]);
      if (a[mid + i] !== undefined) out.push(a[mid + i]);
    }
    return out;
  }
  return a;
}

// ── CTA (rule 4) — reduced to ~2 sentences, 2 variants ─────────────────────────
export const ctaProseVariants: ((city: string, serviceLabel: string) => string)[] = [
  (city, s) => `Tell us about your ${city} home and we'll send a clear, no-obligation ${s.toLowerCase()} quote. Same-day slots are often available.`,
  (city, s) => `Get your flat ${s.toLowerCase()} price for ${city} in a couple of minutes — no hidden fees, and often same-day availability.`,
  (city, s) => `Share a few details about your ${city} home and receive a fast, upfront ${s.toLowerCase()} estimate — book a time that fits your week.`,
  (city, s) => `Request your free ${city} ${s.toLowerCase()} quote below. Transparent pricing, no obligation, and frequent same-week openings.`,
];

// ── Dedicated-page inline cards (Lote 1b round 2) — same facts, 3 rewordings ───
// Eco-Safe card, Satisfaction card/step, and the "we arrive on time" process step
// are copy-pasted across the 9 dedicated house-cleaning pages; vary them per city.
export const ecoSafeVariants: ((city: string) => string)[] = [
  (c) => `Every product we use is EPA Safer Choice™ certified — no bleach, no ammonia, no synthetic fragrances. Safe from the very first visit for children, pets, and allergy sufferers in every room of your ${c} home.`,
  (c) => `We clean ${c} homes only with plant-based, EPA Safer Choice™ products — no bleach, ammonia, or artificial scent — so they stay gentle on kids, pets, and sensitive lungs in every room.`,
  (c) => `No harsh chemistry in your ${c} home: our EPA Safer Choice™, plant-derived products skip the bleach, ammonia, and synthetic fragrance, keeping the air safe for families, pets, and allergy sufferers.`,
];

export const satisfactionVariants: ((city: string) => string)[] = [
  (c) => `Not happy with something after your ${c} house cleaning? Call us and we return to re-clean — free, no fine print, no excuses. That's our promise to every ${c} family.`,
  (c) => `If any part of your ${c} clean isn't right, tell us and we come back to make it right at no charge — no arguments, no fine print. Your satisfaction is the whole point.`,
  (c) => `Every ${c} visit is backed by our guarantee: spot something we missed and we re-clean it free. No hoops, no fine print — just the standard we hold ourselves to.`,
];

export const arriveStepVariants: ((city: string) => string)[] = [
  (c) => `Your bonded, insured, background-checked Capital Clean Care team arrives with all supplies and EPA Safer Choice™ products. Nothing for you to prepare.`,
  (c) => `A vetted, insured crew shows up on schedule with everything needed — supplies, equipment, and plant-based EPA Safer Choice™ products. You don't have to lift a finger in your ${c} home.`,
  (c) => `We arrive when we say we will: a background-checked, bonded team bringing its own EPA Safer Choice™ products and tools, so there's nothing for you to set up.`,
];

// ── TRUST (rule 3) — 3 rewordings of the same facts (franchise/EPA/bonded) ─────
export const trustBlurbVariants: ((city: string, county: string) => string)[] = [
  (city, county) => `We're not a franchise — we're your ${city} neighbors, and our reputation in ${county} is built one clean at a time. Background-checked, bonded, and insured, using EPA Safer Choice products safe for kids and pets.`,
  (city, county) => `Locally owned, never a franchise: the same trusted crews serving ${city} and the rest of ${county}. Every cleaner is background-checked, bonded, and insured, and we clean only with plant-based, EPA Safer Choice products.`,
  (city, county) => `A family-run team, not a national chain — accountable to our ${city} neighbors across ${county}. Bonded, insured, background-checked, and committed to non-toxic, EPA Safer Choice products around your family and pets.`,
];
