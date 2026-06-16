// Data-driven "House Cleaning Cost in <City>" lead-gen articles. Each entry renders
// through src/pages/HouseCleaningCostCity.tsx at /blog/house-cleaning-cost-<slug>.
// Cost/price intent (NOT service intent) so these don't cannibalize the
// /locations/<city>/house-cleaning service pages — and each links back to them.

export interface CostFAQ { q: string; a: string }

export interface CostCity {
  slug: string;          // e.g. "bethesda-md" → /blog/house-cleaning-cost-bethesda-md
  city: string;          // "Bethesda"
  state: string;         // "MD"
  county: string;        // "Montgomery County"
  locationPath: string;  // service page to link to
  hero: string;          // /images/blog/cost-<slug>/hero.webp
  /** short label under the H1 hero, e.g. "Bethesda, MD · Pricing" */
  positioning: string;   // one-line market positioning sentence
  quick: { recurring: string; onetime: string; deep: string };
  intro: string;         // unique opening paragraph (neighborhoods, market)
  localTip: string;      // unique local tip callout
  faqs: CostFAQ[];       // 3 city-specific FAQs (template appends 2 shared)
}

// Shared regional price ranges (Capital Clean Care prices on the home, not the city).
export const COST_PRICE_ROWS: [string, string, string, string, string][] = [
  ["Studio / 1 bed", "up to 900 sq ft", "$140 – $165", "$160 – $195", "$230 – $285"],
  ["2 bed · 2 bath", "1,300 – 1,700 sq ft", "$180 – $215", "$215 – $255", "$310 – $375"],
  ["3 bed · 2 bath", "1,700 – 2,200 sq ft", "$215 – $260", "$255 – $310", "$375 – $445"],
  ["4 bed · 2–3 bath", "2,200 – 3,000 sq ft", "$265 – $325", "$315 – $385", "$450 – $540"],
  ["5+ bed · 3+ bath", "3,000+ sq ft", "From $350", "From $400", "From $570"],
];

export const COST_CITIES: CostCity[] = [
  {
    slug: "bethesda-md",
    city: "Bethesda",
    state: "MD",
    county: "Montgomery County",
    locationPath: "/locations/bethesda-md/house-cleaning",
    hero: "/images/blog/cost-bethesda/hero.webp",
    positioning: "Bethesda, MD · Pricing",
    quick: { recurring: "$180–$325", onetime: "$215–$400", deep: "$310–$570+" },
    intro:
      "Bethesda is one of Maryland's most desirable — and most varied — markets, from condos near the Metro to large single-family homes in Kenwood, Bradley Hills, and Burning Tree. That range is exactly why a single 'average' price isn't very useful. Below are real ranges by home size and service type, the factors that move the number, and how to get an accurate quote in about two minutes.",
    localTip:
      "If your Bethesda home has a lot of natural stone, hardwood, or custom finishes, ask whether the company uses products safe for those surfaces. The right method protects the home and avoids costly damage — worth more than a few dollars saved on a cheaper, one-size-fits-all clean.",
    faqs: [
      {
        q: "Why is house cleaning more expensive in Bethesda than some other areas?",
        a: "It's mostly the homes, not a Bethesda surcharge. Bethesda has a high share of larger single-family houses with more square footage, more bathrooms, and premium surfaces (natural stone, hardwood, custom millwork) that take more time and care to clean correctly. More space and more delicate materials mean more labor, which is the main driver of price anywhere. A modest Bethesda condo can cost the same as a similar unit elsewhere — the average is higher simply because the average home is bigger.",
      },
      {
        q: "How much is a one-time deep clean for a typical Bethesda house?",
        a: "For a typical 3–4 bedroom Bethesda single-family home, a one-time deep clean usually runs about $375–$540, with larger homes in Kenwood or Bradley Hills running higher. A deep clean is the full top-to-bottom reset — baseboards, inside appliances, grout, and the spots a standard clean skips — so it costs more than a maintenance clean but only needs doing a few times a year.",
      },
      {
        q: "Is house cleaning in Bethesda worth the cost?",
        a: "For most Bethesda households — busy professionals and families with larger homes — the time saved and the consistency are the value. A professional team cleans a whole house in a fraction of the time it takes a homeowner, with the right products for premium surfaces, and recurring service keeps the home consistently presentable. The honest answer depends on your time and budget, but the per-visit cost of a bi-weekly plan is modest relative to the hours it returns.",
      },
    ],
  },
  {
    slug: "rockville-md",
    city: "Rockville",
    state: "MD",
    county: "Montgomery County",
    locationPath: "/locations/rockville-md/house-cleaning",
    hero: "/images/blog/cost-rockville/hero.webp",
    positioning: "Rockville, MD · Pricing",
    quick: { recurring: "$165–$310", onetime: "$190–$385", deep: "$285–$540+" },
    intro:
      "Rockville's housing is a real mix — newer townhomes and condos in King Farm and Fallsgrove, mid-century ramblers in Twinbrook, and apartments near Rockville Town Center and the Metro. That variety means cleaning prices span a wide range, so a single average doesn't say much. Below are real per-visit ranges by home size and service, what actually moves the price, and how to get your exact number in about two minutes.",
    localTip:
      "Rockville's many townhomes pack a lot of living into three floors with extra stairs and bathrooms. When comparing quotes, make sure the price reflects all your levels and bathrooms — that's where a too-good-to-be-true flat rate usually falls short.",
    faqs: [
      {
        q: "How much does a recurring cleaning cost in Rockville?",
        a: "For most Rockville homes, a bi-weekly recurring clean runs about $165–$310 per visit depending on size — a King Farm condo at the low end, a larger Fallsgrove single-family home toward the top. Recurring service is the most cost-effective option per visit because the home never gets as dirty between cleans, so each visit is faster. Weekly saves the most; bi-weekly is the popular middle ground.",
      },
      {
        q: "Are Rockville townhomes cheaper to clean than single-family homes?",
        a: "Often, but not always — it comes down to square footage, bathrooms, and floors, not the home type. A compact two-level townhome can cost less than a sprawling rambler, but a tall three-level townhome with 3+ bathrooms can match a single-family home. The price tracks how much there is to clean, so a King Farm townhome and a Twinbrook house of similar size and bathroom count land close together.",
      },
      {
        q: "What's the cheapest way to keep my Rockville home clean?",
        a: "A bi-weekly recurring plan is usually the lowest ongoing cost for a consistently clean home, since each visit is quicker than an infrequent one-time or deep clean where built-up grime takes longer. Weekly saves the most per visit (up to ~25% versus a one-time clean). The pricier route is waiting months between cleans and booking deep cleans each time.",
      },
    ],
  },
  {
    slug: "silver-spring-md",
    city: "Silver Spring",
    state: "MD",
    county: "Montgomery County",
    locationPath: "/locations/silver-spring-md/house-cleaning",
    hero: "/images/blog/cost-silver-spring/hero.webp",
    positioning: "Silver Spring, MD · Pricing",
    quick: { recurring: "$165–$310", onetime: "$190–$385", deep: "$285–$540+" },
    intro:
      "Silver Spring spans everything from downtown high-rise condos and apartments to older single-family homes in Woodside, Seven Oaks, and along the Takoma Park edge. With such a range of homes and ages, cleaning prices vary widely — which is why a flat 'average' isn't helpful. Here are real per-visit ranges by home size and service type, the factors behind the number, and how to get an accurate quote fast.",
    localTip:
      "Many Silver Spring homes are older, with original hardwood, plaster, and tile that respond best to gentler, pH-balanced products. When you compare quotes, ask what's used on older surfaces — protecting them matters more than shaving a few dollars off a harsh, generic clean.",
    faqs: [
      {
        q: "How much does house cleaning cost for a Silver Spring condo vs. a house?",
        a: "A downtown Silver Spring condo or apartment typically runs at the lower end — roughly $140–$215 for a studio-to-2-bedroom maintenance clean — while an older single-family home in Woodside or Seven Oaks with more rooms and bathrooms runs higher. The price follows square footage and bathroom count, so a compact condo and a large house can sit at opposite ends of the range even in the same ZIP code.",
      },
      {
        q: "Do older Silver Spring homes cost more to clean?",
        a: "Not inherently — size still drives the price — but older homes can take a bit more care. Original hardwood, plaster walls, and vintage tile need the right products and a gentler hand, and decades of settled grime sometimes call for a deep clean first to reset the home. After that reset, a recurring plan keeps an older Silver Spring home looking its best at a normal maintenance price.",
      },
      {
        q: "Is professional cleaning worth it in Silver Spring?",
        a: "For Silver Spring's many commuters and busy households, the biggest value is time back plus consistency — a professional team cleans the whole home in a fraction of the time, with the right products for older surfaces. Recurring service keeps it effortlessly clean between visits. Whether it's 'worth it' depends on your schedule and budget, but the per-visit cost of a bi-weekly plan is modest next to the hours it frees up.",
      },
    ],
  },
  {
    slug: "arlington-va",
    city: "Arlington",
    state: "VA",
    county: "Arlington County",
    locationPath: "/locations/arlington-va/house-cleaning",
    hero: "/images/blog/cost-arlington/hero.webp",
    positioning: "Arlington, VA · Pricing",
    quick: { recurring: "$185–$330", onetime: "$220–$410", deep: "$320–$580+" },
    intro:
      "Arlington is really two markets in one — high-rise and mid-rise condos along the Rosslyn–Ballston Metro corridor, and older single-family homes and bungalows in Cherrydale, Lyon Village, and Arlington Forest. Prices reflect that split, so an 'average' doesn't tell you much. Below are real per-visit ranges by home size and service, what drives the cost, and how to get your exact Arlington price in about two minutes.",
    localTip:
      "If you're in an Arlington high-rise, factor in building logistics — front-desk check-in, elevator and loading-dock access, and quiet hours. A company used to Arlington condos will plan around them; ask how they handle building access so the visit runs smoothly.",
    faqs: [
      {
        q: "How much does house cleaning cost for an Arlington condo?",
        a: "A typical Arlington condo or apartment along the Rosslyn–Ballston corridor runs about $140–$255 for a maintenance clean, depending on whether it's a studio, one-, or two-bedroom unit. Compact urban layouts clean efficiently, so condos sit at the lower end of the range; the price climbs with square footage and additional bathrooms.",
      },
      {
        q: "Why is house cleaning in Arlington priced like Northern Virginia, not DC?",
        a: "Pricing tracks the home and the labor, not a state line — Arlington's ranges look similar to the broader Northern Virginia and DMV market. What pushes an individual Arlington home higher is usually size and bathrooms (the older single-family homes in Cherrydale or Lyon Village) rather than location. A condo near the Metro and a comparable unit across the river in DC tend to cost about the same.",
      },
      {
        q: "How often should I schedule cleaning for an Arlington rental turnover?",
        a: "For Arlington's many rentals and frequent moves, the key cleans are move-out (to protect the deposit) and move-in (to reset before the next tenant). For lived-in homes, a bi-weekly recurring plan is the most cost-effective way to stay consistently clean, while a one-time deep clean is the right call before listing, hosting, or after a renovation.",
      },
    ],
  },
  {
    slug: "alexandria-va",
    city: "Alexandria",
    state: "VA",
    county: "City of Alexandria",
    locationPath: "/locations/alexandria-va/house-cleaning",
    hero: "/images/blog/cost-alexandria/hero.webp",
    positioning: "Alexandria, VA · Pricing",
    quick: { recurring: "$180–$325", onetime: "$215–$400", deep: "$310–$570+" },
    intro:
      "Alexandria runs from historic Old Town rowhouses and Del Ray bungalows to modern condos in Carlyle and along the waterfront. Those homes clean very differently, so cleaning prices span a wide range and a single 'average' isn't useful. Below are real per-visit ranges by home size and service, the factors that move the number, and how to get an accurate Alexandria quote in about two minutes.",
    localTip:
      "Old Town and Del Ray are full of historic homes with original heart-pine floors, plaster, and vintage tile. Harsh, generic cleaners can dull or damage them — ask any company about the products they'd use on older surfaces. Protecting a historic home is worth more than a cheaper, one-size-fits-all price.",
    faqs: [
      {
        q: "How much does it cost to clean an Old Town Alexandria rowhouse?",
        a: "Old Town rowhouses are typically tall and narrow with multiple floors and bathrooms, so they price by total square footage and bathroom count rather than footprint. A two- to three-level Old Town home generally lands in the mid-to-upper range — roughly $215–$385 for a one-time standard clean — with historic finishes sometimes calling for a deep clean first to reset the home.",
      },
      {
        q: "Are Alexandria condos cheaper to clean than Old Town homes?",
        a: "Usually, yes — modern condos in Carlyle or along the waterfront tend to be single-level with open layouts that clean efficiently, so they sit at the lower end of the range. The multi-floor historic homes in Old Town and Del Ray have more bathrooms, stairs, and delicate surfaces, which adds time. As always, the price follows how much there is to clean, not the neighborhood name.",
      },
      {
        q: "Is professional cleaning worth it for an Alexandria home?",
        a: "For Alexandria's busy professionals and historic-home owners, the value is time saved plus the right care for older or premium surfaces — a professional team cleans the whole home quickly and protects heart-pine floors and vintage tile that harsh products would damage. Recurring service keeps it consistently clean. Whether it's worth it depends on your time and budget, but a bi-weekly plan's per-visit cost is modest next to the hours and wear it saves.",
      },
    ],
  },
];

export const getCostCity = (slug: string): CostCity | undefined =>
  COST_CITIES.find((c) => c.slug === slug);
