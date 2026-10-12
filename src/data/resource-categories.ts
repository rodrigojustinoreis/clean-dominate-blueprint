// Cleaning Resource Center taxonomy — the organization layer over the ~96 posts in Blog.tsx
// (blogPosts + autoBlogPosts). Each of these 10 categories has a real, prerendered, indexable
// index page at /resources/<slug> (ResourceCategory.tsx) with a unique H1 + 100–150 word intro,
// a CollectionPage schema, breadcrumbs, and the grid of its posts.
//
// Categories are assigned by RULE (categoriesForPost) — from a post's slug + its existing
// `category` field — NOT hand-curated per post. That is deliberate: a new article added the
// normal way (a blogPosts entry or an auto-appended autoBlogPosts entry) is classified,
// indexed, schema'd, and added to the sitemap automatically, with zero code changes here.
// See CONTENT.md for the full pipeline.
//
// A post lands in up to 2 categories (the 2 highest-priority matches, in RULE order below);
// posts that match nothing fall back to "cleaning-tips" — so there are never orphan posts.

import type { BlogPost } from "@/pages/Blog";
import { RESOURCE_CATEGORY_SLUGS } from "./resource-category-slugs";

export interface ResourceCategory {
  slug: string;
  label: string;
  emoji: string;
  h1: string;
  /** 100–150 word unique intro shown on the category index (keeps the page from being thin) */
  intro: string;
  seoTitle: string;
  seoDescription: string;
  /** Optional premium layout (owner, 2026-10-11): real-photo hero, credentials, fact sheet, service
   *  routes, FAQ and quote form. Categories without it render exactly as before. */
  premium?: ResourceCategoryPremium;
}

export interface ResourceCategoryPremium {
  heroImage: { src: string; src640: string; alt: string; width: number; height: number; caption: string };
  /** Short answer under the H1 (what the hub covers and who it is for). */
  lead: string;
  facts: { label: string; value: string }[];
  /** Where to hire, with the scope line; indexable national service pages only. */
  services: { label: string; href: string; scope: string }[];
  faqs: { q: string; a: string }[];
}

// Order matters: when a post matches more than 2 categories, the FIRST two in this list win.
// Most specific / commercial intent first, broad "cleaning-tips" last (it is also the fallback).
export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  {
    slug: "checklists",
    label: "Checklists",
    emoji: "✅",
    h1: "Cleaning Checklists",
    intro:
      "Printable, room-by-room cleaning checklists you can actually follow — the exact lists our teams work from on the job. Whether you are doing a seasonal reset, prepping for guests, turning over a rental, or handing a place back to a landlord, a good checklist turns a vague, overwhelming afternoon into a set of quick, finishable tasks. These guides cover spring, summer, fall, and holiday cleaning for Maryland's climate, plus move-in, move-out, and Airbnb turnover lists. Each one is built for real DMV homes — humidity, pollen, hard water, and pets included — and tells you not just what to clean, but the order that saves the most time. Copy them, save them, or hand them to whoever else is helping.",
    seoTitle: "Cleaning Checklists — Seasonal, Move-Out & Turnover | Capital Clean Care",
    seoDescription:
      "Free room-by-room cleaning checklists for Maryland, DC & Virginia homes — seasonal, move-in/move-out, holiday, and Airbnb turnover. The lists our pro teams use.",
  },
  {
    slug: "move-out-guides",
    label: "Move-In & Move-Out",
    emoji: "📦",
    h1: "Move-In & Move-Out Cleaning Guides",
    intro:
      "Moving is the one time every surface in a home is empty and reachable — and the one time a cleaning can directly cost or save you money. These guides cover move-out cleaning that protects your security deposit, move-in cleaning before you unpack into a new place, and the post-construction and post-renovation cleanup that follows any remodel. You'll find landlord-approved checklists, realistic pricing for the DMV, what's included versus what isn't, and how a proper move cleaning differs from a standard or deep clean. We focus on the details that actually get deposits returned and new homes truly move-in ready: inside cabinets and appliances, baseboards and window tracks, and the fine construction dust that ordinary cleaning leaves behind.",
    seoTitle: "Move-In & Move-Out Cleaning Guides — MD, DC & VA | Capital Clean Care",
    seoDescription:
      "Move-out and move-in cleaning guides for the DMV — deposit-saving checklists, real pricing, and post-construction cleanup. What's included and how it differs from a deep clean.",
  },
  {
    slug: "deep-cleaning",
    label: "Deep Cleaning",
    emoji: "🧽",
    h1: "Deep Cleaning Guides",
    intro:
      "A deep clean reaches everything a routine tidy-up skips — inside the oven and fridge, grout and baseboards, vents, window tracks, and the built-up grime behind and under things. These guides explain exactly what a professional deep cleaning includes, how it differs from a standard clean, how long it takes by home size, and what it costs across Maryland, DC, and Virginia in 2026. You'll find full room-by-room checklists, honest timelines, and advice on when a deep clean is worth booking versus when a standard clean will do. Everything here reflects our GreenShield 5-Step Clean™ approach: thorough, methodical, and done with plant-based, low-residue products that are safe for kids, pets, and the Chesapeake Bay watershed we all share.",
    seoTitle: "Deep Cleaning Guides — Checklist, Cost & Timelines | Capital Clean Care",
    seoDescription:
      "Everything about deep cleaning in the DMV — full checklists, 2026 pricing, real timelines, and how it differs from a standard clean. Eco-friendly, room by room.",
  },
  {
    slug: "recurring-cleaning",
    label: "Recurring Cleaning",
    emoji: "🔁",
    h1: "Recurring & Maintenance Cleaning Guides",
    intro:
      "The homes that stay effortlessly clean almost always run on a rhythm — a recurring service plus a few small habits between visits. These guides help you choose the right frequency for your household, whether that's weekly, bi-weekly, or monthly, and explain why recurring cleaning costs less per visit than one-off bookings. You'll find honest comparisons of one-time versus recurring service, how often busy DMV families actually schedule, and simple systems for keeping a home tidy in the days between professional cleanings. We break the decision down by what really drives it — pets, kids, schedules, home size, and budget — so you land on a plan you'll keep, instead of paying for one that looks good on paper but never fits your week.",
    // Weekly audit 03/10/2026: was 77 characters. At 52 the brand suffix would take it to 73, so
    // useSEO leaves it without the suffix (its 70-character rule).
    seoTitle: "Recurring Cleaning: Weekly, Biweekly & Monthly Guides",
    seoDescription:
      "How to choose a recurring house cleaning frequency in the DMV — weekly vs bi-weekly vs monthly, cost per visit, and habits that keep a home clean between visits.",
  },
  {
    slug: "apartment-cleaning",
    label: "Apartments & Rentals",
    emoji: "🏢",
    h1: "Apartment Cleaning Guides: Condos, Rentals & Airbnb",
    // 2026-10-11 (owner, premium lot): intro rewritten without em dashes or filler; H1/title aim at the
    // informational "apartment cleaning" / checklist / Airbnb queries (Semrush). Hiring intent
    // ("apartment cleaning services") is routed to /services/condo-cleaning, not targeted here.
    intro:
      "Apartments, condos and short-term rentals are cleaned differently from single-family houses. The rooms are smaller, the walls and hallways are shared, buildings have access and elevator rules, and hosts have a few hours between guests. These guides cover cleaning your own apartment or condo in less time, methods that protect a renter's deposit, and the turnover routine Airbnb hosts in Washington, DC, Montgomery County and Northern Virginia use between stays. You will find realistic timelines, linen and restocking tips, and the details guests and building managers check first. If you would rather hand it off, each guide links to the service that does that job.",
    seoTitle: "Apartment Cleaning Guides: Condos, Rentals & Airbnb",
    seoDescription:
      "Apartment and condo cleaning guides for the DMV: a room-by-room apartment checklist, renter-safe methods, Airbnb turnover routines and what each clean costs.",
    premium: {
      heroImage: {
        src: "/images/team/bethesda-airbnb-turnover-team.webp",
        src640: "/images/team/bethesda-airbnb-turnover-team.webp",
        alt: "Capital Clean Care employee in uniform making the bed during a rental turnover in Bethesda, MD",
        width: 570,
        height: 760,
        caption: "Our team on a short-term rental turnover in Bethesda, MD.",
      },
      lead:
        "Practical guides for cleaning an apartment, condo or short-term rental in the DMV, written by the team that cleans them every week, plus the service to book when you would rather not do it yourself.",
      facts: [
        { label: "Covers", value: "Apartments, condos, townhome rentals and Airbnb or short-term rentals" },
        { label: "Where", value: "Washington, DC, Montgomery County, MD and Northern Virginia" },
        { label: "Apartment pricing", value: "Studio or 1 bedroom: bi-weekly $140 to $165, one-time $160 to $195, deep clean $230 to $285; 2 bed, 2 bath: bi-weekly $180 to $215 (published table)" },
        { label: "Buildings", value: "We plan around parking, concierge, elevator reservations, key or fob access and permitted service hours" },
        { label: "Rentals", value: "Turnovers with linen change, restocking and a photo-ready finish between guests" },
        { label: "Team", value: "Insured company, background-checked employees, EPA Safer Choice products, serving the DMV since 2015" },
        { label: "Credentials", value: "BBB Accredited Business (since October 2026), Google Verified (Local Services Ads), 5.0-star Google rating, 24-hour re-clean guarantee" },
      ],
      services: [
        { label: "Condo & Apartment Cleaning", href: "/services/condo-cleaning", scope: "Recurring or one-time cleaning for apartments and condos, planned around building rules." },
        { label: "Airbnb & Short-Term Rental Cleaning", href: "/services/airbnb-cleaning", scope: "Turnovers between guests: linens, restocking, kitchen and bathrooms reset." },
        { label: "Deep Cleaning", href: "/services/deep-cleaning", scope: "First visit or a reset: baseboards, vents, inside appliances on request." },
        { label: "Move-Out Cleaning", href: "/services/move-out-cleaning", scope: "Empty-unit clean before the final walkthrough and the deposit check." },
      ],
      faqs: [
        {
          q: "How much does apartment cleaning cost in the DMV?",
          a: "From our published table, a studio or 1-bedroom apartment runs $140 to $165 per visit on a bi-weekly plan, $160 to $195 for a one-time standard clean and $230 to $285 for a deep clean. A 2-bedroom, 2-bath apartment runs $180 to $215 bi-weekly. The written quote reflects the size, bathrooms, condition and any add-ons such as inside the oven or refrigerator.",
        },
        {
          q: "What is on an apartment cleaning checklist?",
          a: "Our condo and apartment clean covers kitchen counters, stovetop, sink and appliance exteriors; toilet, shower, tub, tile and sink scrubbed and disinfected; mirrors and fixtures polished; beds made and surfaces dusted; interior glass, windowsills and window tracks; baseboards, light switches, door handles and remotes; every hard floor mopped and carpets vacuumed; trash emptied. Inside the oven, refrigerator or cabinets are add-ons you list on the quote.",
        },
        {
          q: "Can you clean an apartment in a building with access rules?",
          a: "Yes. Tell us about parking, the concierge, elevator reservations, key or fob access and permitted service hours when you request the quote, so the team arrives at a time the building allows and with access already arranged.",
        },
        {
          q: "Do you clean Airbnb and short-term rentals between guests?",
          a: "Yes. A turnover covers a full reset of the kitchen and bathrooms, a linen change, floors, trash and restocking to your list, scheduled around your check-out and check-in times.",
        },
      ],
    },
  },
  {
    slug: "pricing-guides",
    label: "Prices & Costs",
    emoji: "💵",
    h1: "House Cleaning Prices & Cost Guides",
    intro:
      "Cleaning prices shouldn't be a mystery you only solve after the quote arrives. These guides lay out what house cleaning actually costs across Maryland, DC, and Virginia in 2026 — by home size, by service type, and city by city — so you can budget before you call anyone. You'll find honest breakdowns of deep-clean and move-out pricing, the difference between flat-rate and hourly billing, why a first cleaning costs more than the visits that follow, and the hidden fees worth watching for. We also cover tipping etiquette and how to tell whether a low quote is a real deal or a bait-and-switch. Everything here reflects transparent, flat-rate pricing — the same approach we use — so you know what you're paying for and why.",
    seoTitle: "House Cleaning Prices & Cost Guides — 2026 DMV Rates | Capital Clean Care",
    seoDescription:
      "What house cleaning really costs in Maryland, DC & Virginia in 2026 — by home size, service, and city. Flat-rate vs hourly, hidden fees, tipping, and first-clean pricing.",
  },
  {
    slug: "eco-friendly-cleaning",
    label: "Eco-Friendly & Pet-Safe",
    emoji: "🌿",
    h1: "Eco-Friendly & Pet-Safe Cleaning Guides",
    intro:
      "Everything here starts from one idea: a home can be spotless without harsh chemistry. These guides cover plant-based, non-toxic cleaning that's safe for kids, pets, and the Chesapeake Bay watershed — from natural stain and odor removal to decoding what labels like \"pet-safe\" and \"non-toxic\" actually mean. A large part of this section is written specifically for dog and cat owners: controlling dander and allergens, cleaning for pets with asthma, recognizing cleaning-product poisoning, and choosing a company that genuinely understands pet safety. You'll find bleach-free methods that really work, the certifications worth trusting (like EPA Safer Choice), and the greenwashing buzzwords to ignore. It's the practical side of green cleaning — better for the family member closest to the floor, and everyone above them.",
    seoTitle: "Eco-Friendly & Pet-Safe Cleaning Guides | Capital Clean Care",
    seoDescription:
      "Non-toxic, plant-based cleaning guides for DMV homes — natural stain and odor removal, pet-safe methods, dander and allergen control, and how to read green labels.",
  },
  {
    slug: "local-guides",
    label: "Local Guides",
    emoji: "📍",
    h1: "Local Cleaning Guides — Maryland, DC & Virginia",
    intro:
      "Cleaning advice is more useful when it's tuned to where you actually live. These local guides cover the specifics of homes across the DMV — Maryland's hard water and humid summers, DC's historic rowhouses and condos, and Northern Virginia's mix of townhomes, estates, and busy family neighborhoods. City by city, from Bethesda, Rockville, and Silver Spring to Arlington, Alexandria, Fairfax, and beyond, you'll find what house cleaning costs locally, how to choose a reliable company in your area, and the details that matter for your neighborhood's housing stock. Whether you own a Federal-style rowhouse, a new-construction townhome, or a suburban single-family house, these guides connect professional cleaning to the real conditions of homes in Montgomery County, Washington DC, and Northern Virginia.",
    seoTitle: "Local Cleaning Guides — Maryland, DC & Virginia | Capital Clean Care",
    seoDescription:
      "City-by-city house cleaning guides for the DMV — Bethesda, Rockville, Silver Spring, Arlington, Alexandria, DC and more. Local pricing, home types, and how to choose a company.",
  },
  {
    slug: "faq",
    label: "Questions Answered",
    emoji: "❓",
    h1: "Cleaning Questions, Answered",
    intro:
      "Before you book a cleaning — or hire a company for the first time — it helps to have straight answers. This section gathers our decision guides: the plain-English comparisons and vetting checklists that clear up the questions people actually ask. What's included in a standard versus a deep clean? How do you spot a trustworthy company and avoid the red flags? Is professional cleaning worth it for your situation, and what should you ask before hiring? You'll find honest, no-pressure explanations of how the industry works — insurance and background checks, guarantees, transparent pricing, and the differences between a company, a franchise, and an independent cleaner. The goal is simple: give you enough real information to make a confident choice, whether or not that choice is us.",
    seoTitle: "House Cleaning Questions Answered — Buyer's Guides | Capital Clean Care",
    seoDescription:
      "Straight answers to common house cleaning questions — standard vs deep clean, how to vet a company, red flags, guarantees, and whether professional cleaning is worth it.",
  },
  {
    slug: "cleaning-tips",
    label: "Cleaning Tips",
    emoji: "💡",
    h1: "Cleaning Tips & How-Tos",
    intro:
      "Practical, everyday cleaning know-how — the tips, habits, and step-by-step how-tos that keep a home genuinely clean without taking over your life. This is the widest section in the Resource Center: quick wins and smart systems for busy people, plus focused how-tos for the specific jobs that stump everyone, from cleaning a bathroom the right way to reviving carpets and tackling the spots most people forget. You'll find low-effort routines for working professionals, the most-missed areas in a typical house, and simple, eco-friendly methods you can actually stick with. Everything here favors plant-based, low-residue techniques that work in real DMV homes — no harsh chemistry, no unrealistic 3-hour routines, just the practical habits that make the difference between a home that looks clean and one that is.",
    seoTitle: "Cleaning Tips & How-Tos — Practical, Eco-Friendly | Capital Clean Care",
    seoDescription:
      "Everyday cleaning tips and step-by-step how-tos for DMV homes — quick routines, most-forgotten areas, and eco-friendly methods that actually work.",
  },
];

const CATEGORY_SLUGS = RESOURCE_CATEGORIES.map((c) => c.slug);

export const getResourceCategoryBySlug = (slug?: string): ResourceCategory | undefined =>
  RESOURCE_CATEGORIES.find((c) => c.slug === slug);

const has = (s: string, ...keys: string[]) => keys.some((k) => s.includes(k));

// Specific city / region tokens that mark a post as a LOCAL guide. Deliberately NOT
// "maryland"/"dmv" — those appear in most slugs and would over-tag everything as local.
const CITY_TOKENS = [
  "alexandria", "arlington", "chevy-chase", "columbia-md", "fairfax", "georgetown",
  "mclean", "reston", "bethesda", "rockville", "silver-spring", "gaithersburg",
  "germantown", "clarksburg", "potomac", "frederick", "washington-dc", "montgomery-county",
];

/**
 * Assign a post to up to 2 resource categories from its slug + existing `category`.
 * Rule-based on purpose: future posts auto-classify with no edits here (see CONTENT.md).
 * Matches are collected in RESOURCE_CATEGORIES priority order; the first 2 win; empty → cleaning-tips.
 */
export function categoriesForPost(post: Pick<BlogPost, "slug" | "category">): string[] {
  const s = post.slug;
  const cat = post.category;
  const matches: string[] = [];

  if (s.includes("checklist")) matches.push("checklists");
  if (has(s, "move-out", "move-in", "post-construction", "post-renovation")) matches.push("move-out-guides");
  if (s.includes("deep-clean")) matches.push("deep-cleaning");
  if (has(s, "recurring", "how-often", "between-cleaning", "one-time-vs", "cleaning-schedule")) matches.push("recurring-cleaning");
  if (has(s, "apartment", "airbnb", "rental")) matches.push("apartment-cleaning");
  if (
    has(s, "eco", "pet-safe", "pet-", "-pets", "non-toxic", "without-bleach", "naturally", "-natural", "dog-smell", "allergen", "allerg", "dander", "hepa", "mildew", "pet-hair", "pet-skin") ||
    cat === "Eco Living" ||
    cat === "Pet Health"
  ) matches.push("eco-friendly-cleaning");
  if (cat === "Local Guides" || CITY_TOKENS.some((c) => s.includes(c))) matches.push("local-guides");
  if (has(s, "cost", "price", "hidden-fees", "flat-rate", "how-much", "tip-house-cleaner", "worth-it", "costs-more", "-fees")) matches.push("pricing-guides");
  if (has(s, "-vs-", "what-is", "how-long", "is-professional", "questions-to-ask", "red-flags", "company-vs", "too-messy", "why-first", "why-dust", "how-to-choose")) matches.push("faq");
  if (s.startsWith("how-to") || has(s, "tips", "forgotten", "prepare-home", "mrs-meyers", "office-cleaning", "after-a-party", "working-professionals", "allergy-proofing")) matches.push("cleaning-tips");

  // de-dup preserving priority order, then cap at 2 with a non-orphan fallback
  const ordered = CATEGORY_SLUGS.filter((c) => matches.includes(c));
  const picked = ordered.slice(0, 2);
  return picked.length ? picked : ["cleaning-tips"];
}

/** Posts belonging to a category, newest first (input is expected pre-sorted, e.g. allPosts). */
export function postsInCategory<T extends Pick<BlogPost, "slug" | "category">>(
  categorySlug: string,
  posts: T[]
): T[] {
  return posts.filter((p) => categoriesForPost(p).includes(categorySlug));
}

// Route registration (AppRoutesLazy) uses the lightweight slug list; fail loudly in dev if they drift.
if (import.meta.env.DEV) {
  const here = RESOURCE_CATEGORIES.map((c) => c.slug).join(",");
  const light = RESOURCE_CATEGORY_SLUGS.join(",");
  if (here !== light) throw new Error(`resource-category-slugs.ts is out of sync with resource-categories.ts:\n${here}\n${light}`);
}
