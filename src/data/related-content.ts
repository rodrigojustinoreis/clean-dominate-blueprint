// Automatic internal-linking engine (Fase 1.3). Given any page, returns contextual links
// prioritising: (a) same Resource Center category, (b) same service, (c) same city, (d) manual
// relations. Consumed by the post / service / city×service templates to render "Related …" blocks.
//
// HARD RULE: never emit a link to a noindex page. isIndexable() mirrors the site's real noindex
// logic exactly (NOINDEX_PATHS denylist overrides everything; city×service must also be
// allowlisted — same as ServiceLocationPage's effectiveNoIndex). Self-links are excluded by
// callers. Anchor text is always the real page title / a descriptive label, never "click here".

import { allPosts, type BlogPost } from "@/pages/Blog";
import { categoriesForPost } from "@/data/resource-categories";
import {
  STATIC_CITIES,
  STATIC_SERVICES,
  EXTRA_INDEXABLE_PAIRS,
  isAllowlistedServiceLocation,
} from "@/data/serviceLocationAllowlist";
import { isNoIndexPath } from "@/data/noindexPaths";

const ORIGIN = "https://capitalcleancare.com";

export interface RelatedLink {
  href: string;
  title: string;
}

export interface GuideLink extends RelatedLink {
  category: string;
  date: string;
  readTime: string;
  coverImage?: string;
}

// ── Indexability (single source of truth for "safe to link") ────────────────────
export function isIndexable(path: string): boolean {
  const p = path.replace(/\/+$/, "");
  if (isNoIndexPath(p)) return false; // denylist overrides everything
  const m = p.match(/^\/locations\/([^/]+)\/([^/]+)$/);
  if (m) return isAllowlistedServiceLocation(m[1], m[2]); // city×service must be allowlisted too
  return true; // hubs, /services/*, /resources/*, static pages: index unless denylisted
}

// ── Service ↔ category maps ─────────────────────────────────────────────────────
export const SERVICE_LABEL: Record<string, string> = {
  "house-cleaning": "House Cleaning",
  "deep-cleaning": "Deep Cleaning",
  "move-out-cleaning": "Move-Out Cleaning",
  "recurring-cleaning": "Recurring Cleaning",
  "eco-friendly-cleaning": "Eco-Friendly Cleaning",
  "airbnb-cleaning": "Airbnb Cleaning",
  "office-cleaning": "Office Cleaning",
  "post-construction-cleaning": "Post-Construction Cleaning",
};

// Which Resource Center category a service page draws its guides from.
const CATEGORY_FOR_SERVICE: Record<string, string> = {
  "house-cleaning": "cleaning-tips",
  "deep-cleaning": "deep-cleaning",
  "move-out-cleaning": "move-out-guides",
  "recurring-cleaning": "recurring-cleaning",
  "eco-friendly-cleaning": "eco-friendly-cleaning",
  "airbnb-cleaning": "apartment-cleaning",
  "office-cleaning": "cleaning-tips",
  "post-construction-cleaning": "move-out-guides",
};

// Which service page a Resource Center category points at (for a post's "Related Services").
const SERVICE_FOR_CATEGORY: Record<string, string> = {
  "deep-cleaning": "deep-cleaning",
  "move-out-guides": "move-out-cleaning",
  "recurring-cleaning": "recurring-cleaning",
  "eco-friendly-cleaning": "eco-friendly-cleaning",
  "apartment-cleaning": "airbnb-cleaning",
  "pricing-guides": "house-cleaning",
  "checklists": "house-cleaning",
  "cleaning-tips": "house-cleaning",
  "local-guides": "house-cleaning",
  "faq": "house-cleaning",
};

// Every city slug that can host an indexable service page (grid cities + off-grid pairs).
export const ALL_CITY_SLUGS: string[] = Array.from(
  new Set<string>([
    ...STATIC_CITIES,
    ...Array.from(EXTRA_INDEXABLE_PAIRS).map((pair) => pair.split("/")[0]),
  ])
);

// ── Labels ──────────────────────────────────────────────────────────────────────
export function cityLabel(slug: string): string {
  const m = slug.match(/^(.*)-(md|va|dc)$/);
  const state = m ? m[2].toUpperCase() : "";
  const name = (m ? m[1] : slug)
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return state ? `${name}, ${state}` : name;
}

const cityToken = (slug: string) => slug.replace(/-(md|va|dc)$/, "");

// ── Post universe (only posts that are safe to link to) ─────────────────────────
// Exclude noindex posts and posts canonicalised to a different URL (never link to a page
// that tells Google "index that other URL instead").
const LINKABLE_POSTS: BlogPost[] = allPosts.filter(
  (p) =>
    !isNoIndexPath(`/resources/${p.slug}`) &&
    (!p.canonical || p.canonical === `${ORIGIN}/resources/${p.slug}`)
);

const toGuide = (p: BlogPost): GuideLink => ({
  href: `/resources/${p.slug}`,
  title: p.title,
  category: p.category,
  date: p.date,
  readTime: p.readTime,
  coverImage: p.coverImage,
});

const dedupe = <T extends RelatedLink>(links: T[]): T[] => {
  const seen = new Set<string>();
  return links.filter((l) => (seen.has(l.href) ? false : (seen.add(l.href), true)));
};

// ── Manual relations (item 1d) — hand-curated post→post editorial links ─────────
// Kept as data (was previously inline in RelatedPosts.tsx). Used to supplement the
// automatic category matches when a curator knows a stronger connection.
export const MANUAL_RELATED_POSTS: Record<string, string[]> = {
  "best-house-cleaning-service-bethesda-md": ["house-cleaning-cost-bethesda-md", "questions-to-ask-before-hiring-house-cleaner", "red-flags-house-cleaning-service"],
  "move-in-cleaning-checklist": ["move-out-cleaning-checklist-maryland-tenants", "why-first-house-cleaning-costs-more", "move-out-cleaning-cost-maryland"],
  "deep-cleaning-cost-maryland": ["how-much-does-deep-cleaning-cost", "why-first-house-cleaning-costs-more", "how-long-does-deep-cleaning-take"],
  "how-long-does-deep-cleaning-take": ["deep-cleaning-cost-maryland", "what-is-included-in-a-deep-cleaning", "deep-cleaning-vs-regular-cleaning"],
  "airbnb-cleaning-checklist": ["airbnb-cleaning-fee", "airbnb-cleaning-tips-dmv-hosts", "how-often-should-you-hire-a-cleaning-service"],
  "airbnb-cleaning-fee": ["airbnb-cleaning-checklist", "airbnb-cleaning-tips-dmv-hosts", "how-much-tip-house-cleaner"],
  "kitchen-cleaning-checklist": ["what-is-included-in-a-deep-cleaning", "how-often-should-you-deep-clean", "what-is-included-in-a-standard-cleaning"],
  "living-room-cleaning-checklist": ["what-is-included-in-a-standard-cleaning", "recurring-cleaning-weekly-biweekly-monthly", "how-to-keep-house-clean-between-cleanings"],
  "how-much-tip-house-cleaner": ["how-often-should-you-hire-a-cleaning-service", "hidden-fees-house-cleaning", "is-professional-house-cleaning-worth-it"],
  "how-to-clean-up-after-a-party": ["deep-cleaning-cost-maryland", "how-long-does-deep-cleaning-take"],
  "cleaning-company-vs-independent-cleaner": ["local-cleaning-company-vs-franchise", "questions-to-ask-before-hiring-house-cleaner", "red-flags-house-cleaning-service"],
  "local-cleaning-company-vs-franchise": ["cleaning-company-vs-independent-cleaner", "red-flags-house-cleaning-service", "questions-to-ask-before-hiring-house-cleaner"],
  "questions-to-ask-before-hiring-house-cleaner": ["red-flags-house-cleaning-service", "cleaning-company-vs-independent-cleaner", "hidden-fees-house-cleaning"],
  "why-first-house-cleaning-costs-more": ["deep-cleaning-cost-maryland", "flat-rate-vs-hourly-house-cleaning", "hidden-fees-house-cleaning"],
  "flat-rate-vs-hourly-house-cleaning": ["hidden-fees-house-cleaning", "why-first-house-cleaning-costs-more", "house-cleaning-prices-maryland-2026"],
  "red-flags-house-cleaning-service": ["questions-to-ask-before-hiring-house-cleaner", "hidden-fees-house-cleaning", "local-cleaning-company-vs-franchise"],
  "hidden-fees-house-cleaning": ["flat-rate-vs-hourly-house-cleaning", "red-flags-house-cleaning-service", "house-cleaning-prices-maryland-2026"],
  "house-too-messy-for-cleaning-service": ["questions-to-ask-before-hiring-house-cleaner", "why-first-house-cleaning-costs-more", "how-often-should-you-hire-a-cleaning-service"],
  "spring-cleaning-checklist-maryland-2026": ["deep-cleaning-checklist-dmv-homeowners", "eco-cleaning-tips-maryland-homes", "best-cleaning-schedule-busy-families-dmv"],
  "eco-cleaning-tips-maryland-homes": ["allergy-proofing-home-dmv", "remove-pet-hair-odors-dmv-homes", "eco-cleaning-tips-winters-maryland"],
  "house-cleaning-prices-maryland-2026": ["flat-rate-vs-hourly-house-cleaning", "hidden-fees-house-cleaning", "how-to-choose-cleaning-service-silver-spring"],
  "deep-cleaning-checklist-dmv-homeowners": ["spring-cleaning-checklist-maryland-2026", "post-renovation-cleaning-guide-maryland", "recurring-cleaning-weekly-biweekly-monthly"],
  "airbnb-cleaning-tips-dmv-hosts": ["airbnb-cleaning-checklist", "move-in-cleaning-checklist", "recurring-cleaning-weekly-biweekly-monthly"],
  "how-to-choose-cleaning-service-silver-spring": ["house-cleaning-prices-maryland-2026", "house-cleaning-bethesda-md", "recurring-cleaning-weekly-biweekly-monthly"],
  "move-out-cleaning-checklist-maryland-tenants": ["house-cleaning-prices-maryland-2026", "post-renovation-cleaning-guide-maryland", "move-out-cleaning-cost-maryland"],
  "eco-cleaning-tips-winters-maryland": ["eco-cleaning-tips-maryland-homes", "how-to-get-cigarette-smell-out-of-your-house", "remove-pet-hair-odors-dmv-homes"],
  "best-cleaning-schedule-busy-families-dmv": ["recurring-cleaning-weekly-biweekly-monthly", "how-to-choose-cleaning-service-silver-spring", "deep-cleaning-checklist-dmv-homeowners"],
  "remove-pet-hair-odors-dmv-homes": ["eco-cleaning-tips-maryland-homes", "deep-cleaning-checklist-dmv-homeowners", "recurring-cleaning-weekly-biweekly-monthly"],
  "post-renovation-cleaning-guide-maryland": ["deep-cleaning-checklist-dmv-homeowners", "house-cleaning-prices-maryland-2026", "move-out-cleaning-checklist-maryland-tenants"],
  "recurring-cleaning-weekly-biweekly-monthly": ["best-cleaning-schedule-busy-families-dmv", "house-cleaning-prices-maryland-2026", "how-to-choose-cleaning-service-silver-spring"],
  "deep-cleaning-tips-maryland-homes-spring-prep": ["spring-cleaning-checklist-maryland-2026", "what-is-included-in-a-deep-cleaning", "eco-cleaning-tips-maryland-homes"],
  "choose-pet-safe-cleaning-company": ["pet-dander-air-quality", "cleaning-product-poisoning-in-pets", "allergen-free-home-dog-cat-owners"],
  "seasonal-vs-household-pet-allergies": ["hepa-filters-pets-asthma", "pet-sneezing-household-dust", "allergen-free-home-dog-cat-owners"],
  "why-pet-skin-allergies-start-in-carpet": ["pet-dander-air-quality", "pet-sneezing-household-dust", "hepa-filters-pets-asthma"],
  "what-pet-safe-cleaning-really-means": ["why-is-my-dog-coughing-after-house-cleaning", "cleaning-product-poisoning-in-pets", "allergen-free-home-dog-cat-owners", "pet-dander-air-quality"],
  "how-to-get-rid-of-dog-smell-pet-safe": ["pet-sneezing-household-dust", "hepa-filters-pets-asthma", "allergen-free-home-dog-cat-owners"],
  "how-to-clean-a-bathroom-step-by-step": ["how-to-clean-grout-without-bleach", "how-to-remove-hard-water-stains-naturally", "how-to-get-rid-of-mildew-smell-naturally"],
  "how-to-remove-red-wine-stains": ["how-to-remove-candle-wax-eco-friendly", "how-to-remove-sharpie-safely", "mrs-meyers-clean-day-review-how-to-use"],
  "how-to-remove-sticker-residue-natural": ["how-to-remove-sharpie-safely", "how-to-remove-candle-wax-eco-friendly", "mrs-meyers-clean-day-review-how-to-use"],
  "most-forgotten-areas-when-cleaning": ["how-to-deep-clean-a-stove-maryland", "how-to-clean-carpet-home-apartment", "how-to-clean-grout-without-bleach"],
  "how-to-clean-oled-tv-screen-safely": ["how-to-remove-sharpie-safely", "mrs-meyers-clean-day-review-how-to-use", "how-to-remove-candle-wax-eco-friendly"],
  "how-to-clean-your-washing-machine-eco-friendly": ["how-to-get-rid-of-mildew-smell-naturally", "how-to-remove-hard-water-stains-naturally", "mrs-meyers-clean-day-review-how-to-use"],
  "why-dust-builds-up-maryland-homes": ["how-to-clean-carpet-home-apartment", "how-to-deep-clean-a-stove-maryland", "how-to-get-cigarette-smell-out-of-your-house"],
  "how-much-does-deep-cleaning-cost": ["move-out-cleaning-cost-maryland", "is-professional-house-cleaning-worth-it", "house-cleaning-prices-maryland-2026"],
  "one-time-vs-recurring-cleaning": ["is-professional-house-cleaning-worth-it", "move-out-cleaning-cost-maryland", "cleaning-tips-for-working-professionals"],
  "how-often-should-you-hire-a-cleaning-service": ["cleaning-tips-for-working-professionals", "is-professional-house-cleaning-worth-it", "recurring-cleaning-weekly-biweekly-monthly"],
  "how-to-keep-house-clean-between-cleanings": ["cleaning-tips-for-working-professionals", "is-professional-house-cleaning-worth-it", "best-house-cleaning-service-rockville-md"],
  "how-to-prepare-home-for-professional-cleaning": ["is-professional-house-cleaning-worth-it", "move-out-cleaning-cost-maryland", "best-house-cleaning-service-rockville-md"],
  "best-house-cleaning-service-silver-spring-md": ["best-house-cleaning-service-rockville-md", "how-to-choose-cleaning-service-silver-spring", "house-cleaning-cost-silver-spring-md"],
  "house-cleaning-cost-rockville-md": ["best-house-cleaning-service-rockville-md", "deep-cleaning-rockville-md", "move-out-cleaning-cost-maryland"],
  "house-cleaning-cost-alexandria-va": ["cleaning-service-alexandria-va", "move-out-cleaning-cost-maryland", "airbnb-cleaning-tips-dmv-hosts"],
  "house-cleaning-cost-arlington-va": ["cleaning-service-mclean-va", "cleaning-service-reston-va", "move-out-cleaning-cost-maryland"],
  "house-cleaning-cost-bethesda-md": ["cleaning-service-chevy-chase-md", "house-cleaning-potomac-md", "cleaning-service-columbia-md"],
  "house-cleaning-cost-silver-spring-md": ["best-house-cleaning-service-rockville-md", "how-to-choose-cleaning-service-silver-spring", "cleaning-service-columbia-md"],
  "summer-cleaning-checklist-maryland": ["fall-cleaning-checklist-maryland", "spring-cleaning-checklist-maryland-2026", "eco-cleaning-tips-winters-maryland"],
  "holiday-cleaning-checklist-dmv": ["fall-cleaning-checklist-maryland", "airbnb-cleaning-tips-dmv-hosts", "move-in-cleaning-guide-dmv"],
  "house-cleaning-for-seniors": ["free-house-cleaning-for-seniors", "signs-aging-parent-needs-help-housekeeping", "cleaning-service-vs-caregiver-elderly", "how-to-hire-cleaning-service-elderly-parents", "aging-in-place-montgomery-county-cleaning", "house-cleaning-seniors-silver-spring-leisure-world"],
  "free-house-cleaning-for-seniors": ["house-cleaning-for-seniors", "cleaning-service-vs-caregiver-elderly", "how-to-hire-cleaning-service-elderly-parents", "aging-in-place-montgomery-county-cleaning", "house-cleaning-seniors-silver-spring-leisure-world", "signs-aging-parent-needs-help-housekeeping"],
  "caregiver-guide-house-cleaning-aging-parent": ["signs-aging-parent-needs-help-housekeeping", "cleaning-service-vs-caregiver-elderly", "how-to-hire-cleaning-service-elderly-parents", "house-cleaning-for-seniors", "free-house-cleaning-for-seniors", "aging-in-place-montgomery-county-cleaning"],
  "house-cleaning-after-hospital-surgery-seniors": ["house-cleaning-for-seniors", "caregiver-guide-house-cleaning-aging-parent", "clean-home-fall-prevention-seniors", "free-house-cleaning-for-seniors", "aging-in-place-montgomery-county-cleaning", "signs-aging-parent-needs-help-housekeeping"],
  "senior-downsizing-decluttering-cleaning": ["move-out-cleaning-checklist-maryland-tenants", "move-out-cleaning-cost-maryland", "house-cleaning-for-seniors", "caregiver-guide-house-cleaning-aging-parent", "aging-in-place-montgomery-county-cleaning", "move-in-cleaning-checklist"],
  "cleaning-during-pregnancy-prepare-home-for-baby": ["what-is-included-in-a-deep-cleaning", "move-in-cleaning-checklist", "how-to-prepare-home-for-professional-cleaning", "deep-cleaning-checklist-dmv-homeowners", "eco-cleaning-tips-maryland-homes", "spring-cleaning-checklist-maryland-2026"],
  "why-is-my-dog-coughing-after-house-cleaning": ["what-pet-safe-cleaning-really-means", "choose-pet-safe-cleaning-company", "cleaning-product-poisoning-in-pets", "hepa-filters-pets-asthma", "pet-dander-air-quality", "pet-sneezing-household-dust"],
  "how-to-clean-hardwood-floors-naturally": ["how-to-clean-grout-without-bleach", "how-to-remove-hard-water-stains-naturally", "eco-friendly-deep-cleaning", "how-to-remove-sticker-residue-natural", "what-is-included-in-a-deep-cleaning", "how-to-get-rid-of-mildew-smell-naturally"],
};

// ── Guide selectors (posts) ─────────────────────────────────────────────────────

/** Posts in any of the given Resource Center categories, newest first, excluding one slug. */
export function guidesForCategories(categorySlugs: string[], excludeSlug: string | undefined, limit: number): GuideLink[] {
  return LINKABLE_POSTS.filter(
    (p) => p.slug !== excludeSlug && categoriesForPost(p).some((c) => categorySlugs.includes(c))
  )
    .slice(0, limit)
    .map(toGuide);
}

/** Related guides for a post: same-category (priority) then manual relations, capped at `limit`. */
export function guidesForPost(slug: string, limit = 6): GuideLink[] {
  const post = LINKABLE_POSTS.find((p) => p.slug === slug) || allPosts.find((p) => p.slug === slug);
  if (!post) return [];
  const cats = categoriesForPost(post);
  const category = guidesForCategories(cats, slug, limit);
  const manual = (MANUAL_RELATED_POSTS[slug] ?? [])
    .map((s) => LINKABLE_POSTS.find((p) => p.slug === s))
    .filter((p): p is BlogPost => Boolean(p) && p!.slug !== slug)
    .map(toGuide);
  return dedupe([...category, ...manual]).slice(0, limit);
}

/** Guide links for an explicit, ordered list of post slugs — indexable/linkable only (drops
 *  noindex or canonicalised-away posts and anything missing). Used for hand-curated spoke lists. */
export function guidesBySlugs(slugs: string[]): GuideLink[] {
  return slugs
    .map((s) => LINKABLE_POSTS.find((p) => p.slug === s))
    .filter((p): p is BlogPost => Boolean(p))
    .map(toGuide);
}

/** Guides for a service page — drawn from the service's mapped category. */
export function guidesForService(serviceSlug: string, limit = 6): GuideLink[] {
  const cat = CATEGORY_FOR_SERVICE[serviceSlug];
  return cat ? guidesForCategories([cat], undefined, limit) : [];
}

/** Guides for a city×service page: local (city) posts first, then the service's category. */
export function guidesForCityService(citySlug: string, serviceSlug: string, limit = 6): GuideLink[] {
  const token = cityToken(citySlug);
  const local = LINKABLE_POSTS.filter((p) => p.slug.includes(token)).map(toGuide);
  const cat = CATEGORY_FOR_SERVICE[serviceSlug];
  const category = cat ? guidesForCategories([cat], undefined, limit) : [];
  return dedupe([...local, ...category]).slice(0, limit);
}

// ── Service / city selectors ────────────────────────────────────────────────────

/** The service pages relevant to a post (from its categories) + a matching local city×service. */
export function servicesForPost(slug: string, limit = 4): RelatedLink[] {
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return [];
  const cats = categoriesForPost(post);
  const cityMatch = ALL_CITY_SLUGS.find((cs) => post.slug.includes(cityToken(cs)));
  const links: RelatedLink[] = [];
  for (const cat of cats) {
    const svc = SERVICE_FOR_CATEGORY[cat];
    if (!svc) continue;
    if (cityMatch && isIndexable(`/locations/${cityMatch}/${svc}`)) {
      links.push({ href: `/locations/${cityMatch}/${svc}`, title: `${SERVICE_LABEL[svc]} in ${cityLabel(cityMatch)}` });
    }
    if (isIndexable(`/services/${svc}`)) {
      links.push({ href: `/services/${svc}`, title: `${SERVICE_LABEL[svc]} Services` });
    }
  }
  if (!links.length) links.push({ href: "/services/house-cleaning", title: "House Cleaning Services" });
  return dedupe(links).slice(0, limit);
}

/** Indexable cities that offer a given service (for a service page's "Service Areas" block). */
export function indexableCitiesForService(serviceSlug: string, limit = 8): RelatedLink[] {
  return ALL_CITY_SLUGS.filter((cs) => isIndexable(`/locations/${cs}/${serviceSlug}`))
    .slice(0, limit)
    .map((cs) => ({ href: `/locations/${cs}/${serviceSlug}`, title: `${SERVICE_LABEL[serviceSlug]} in ${cityLabel(cs)}` }));
}

/** Other indexable services in the same city (for a city×service page). */
export function otherIndexableServicesInCity(citySlug: string, excludeServiceSlug: string, limit = 6): RelatedLink[] {
  return (STATIC_SERVICES as readonly string[])
    .filter((svc) => svc !== excludeServiceSlug && isIndexable(`/locations/${citySlug}/${svc}`))
    .slice(0, limit)
    .map((svc) => ({ href: `/locations/${citySlug}/${svc}`, title: `${SERVICE_LABEL[svc]} in ${cityLabel(citySlug)}` }));
}

/** The city hub link, only if that hub is itself indexable (7 hubs are noindex). */
export function cityHubLink(citySlug: string): RelatedLink | null {
  return isIndexable(`/locations/${citySlug}`)
    ? { href: `/locations/${citySlug}`, title: `Cleaning Services in ${cityLabel(citySlug)}` }
    : null;
}

/** Same service in nearby indexable cities (for a city×service page). */
export function sameServiceNearbyCities(citySlug: string, serviceSlug: string, limit = 6): RelatedLink[] {
  return ALL_CITY_SLUGS.filter((cs) => cs !== citySlug && isIndexable(`/locations/${cs}/${serviceSlug}`))
    .slice(0, limit)
    .map((cs) => ({ href: `/locations/${cs}/${serviceSlug}`, title: `${SERVICE_LABEL[serviceSlug]} in ${cityLabel(cs)}` }));
}

// ── Generic entry point (item 1): up to `limit` links for ANY page ──────────────
export type PageDescriptor =
  | { type: "post"; slug: string }
  | { type: "service"; serviceSlug: string }
  | { type: "city-service"; citySlug: string; serviceSlug: string }
  | { type: "city-hub"; citySlug: string };

/**
 * Given any page, return up to `limit` related links prioritising:
 * (a) same Resource Center category, (b) same service, (c) same city, (d) manual relations.
 * All results are guaranteed indexable and never self-referential.
 */
export function getRelatedContent(descriptor: PageDescriptor, limit = 6): RelatedLink[] {
  let out: RelatedLink[] = [];
  switch (descriptor.type) {
    case "post": {
      out = [...guidesForPost(descriptor.slug, limit), ...servicesForPost(descriptor.slug, limit)];
      break;
    }
    case "service": {
      out = [
        ...guidesForService(descriptor.serviceSlug, limit), // (a) category
        ...indexableCitiesForService(descriptor.serviceSlug, limit), // (b) same service, (c) cities
      ];
      break;
    }
    case "city-service": {
      out = [
        ...guidesForCityService(descriptor.citySlug, descriptor.serviceSlug, limit), // (a) category + (c) city
        ...otherIndexableServicesInCity(descriptor.citySlug, descriptor.serviceSlug, limit), // (b) service
        ...(cityHubLink(descriptor.citySlug) ? [cityHubLink(descriptor.citySlug)!] : []),
      ];
      break;
    }
    case "city-hub": {
      out = (STATIC_SERVICES as readonly string[])
        .filter((svc) => isIndexable(`/locations/${descriptor.citySlug}/${svc}`))
        .map((svc) => ({ href: `/locations/${descriptor.citySlug}/${svc}`, title: `${SERVICE_LABEL[svc]} in ${cityLabel(descriptor.citySlug)}` }));
      break;
    }
  }
  // Final safety net: drop any accidental noindex target, then cap.
  return dedupe(out.filter((l) => isIndexable(l.href))).slice(0, limit);
}
