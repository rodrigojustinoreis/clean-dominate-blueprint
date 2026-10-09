/**
 * Curated service selection for a few city hubs (opt-in, 2026-10-08 recovery lot).
 *
 * The default hub lists 20 "local" cards (including synonyms such as "Best Cleaning Company in X"
 * that have no destination) plus 13 national cards, with the same href repeated under two labels.
 * For the hubs in CURATED_HUBS the page shows instead up to eight main choices and a native
 * <details> complement that keeps every other useful indexable destination, each href once.
 *
 * Rules (same as the cards they replace): never a noindex page, never the Ads landing as a city
 * card, national fallback labelled as the MD/DC/VA service guide. Pure data; tested in
 * hub-service-selection.test.ts.
 */
import { services } from "@/data/services";
import { slServices } from "@/data/service-locations";
import { isIndexable, serviceCardHref, nationalServiceHref } from "@/data/related-content";

export const CURATED_HUBS: ReadonlySet<string> = new Set(["bethesda-md", "gaithersburg-md", "fairfax-va", "alexandria-va"]);

/** Main choices, in the order homeowners ask for them. At most eight are shown. */
const PRIMARY_ORDER = [
  "house-cleaning",
  "deep-cleaning",
  "recurring-cleaning",
  "move-out-cleaning",
  "post-construction-cleaning",
  "eco-friendly-cleaning",
  "airbnb-cleaning",
  "office-cleaning",
] as const;

/** Specialty pages kept in the complement. */
const COMPLEMENT_ORDER = ["condo-cleaning", "maid-service", "kitchen-cleaning", "bathroom-cleaning", "living-area-cleaning"] as const;

export type HubServiceChoice = {
  slug: string;
  /** Visible name, e.g. "Deep Cleaning in Bethesda" or "Deep Cleaning". */
  label: string;
  href: string;
  /** Neutral scope line (what the service is for); product and quality claims stay on the service pages. */
  description: string;
  /** True when the destination is the national service page, not a page about this city. */
  national: boolean;
};

export type HubServiceSelection = {
  primary: HubServiceChoice[];
  /** Other distinct indexable destinations, dedup'd against `primary` by href. */
  more: HubServiceChoice[];
};

const nationalName = (slug: string) => services.find((s) => s.slug === slug)?.name ?? slServices.find((s) => s.slug === slug)?.name ?? slug;

/** Neutral one-line scope per choice (what the service is for), without product or quality claims. */
const SCOPE: Record<string, string> = {
  "house-cleaning": "Routine cleaning of kitchen, bathrooms, floors and living areas.",
  "deep-cleaning": "Top-to-bottom clean, including baseboards, vents and inside appliances.",
  "recurring-cleaning": "Weekly, bi-weekly or monthly visits on a set schedule.",
  "move-out-cleaning": "Empty-home clean for a move, lease end or turnover.",
  "post-construction-cleaning": "Dust and debris removal after renovation work.",
  "eco-friendly-cleaning": "Cleaning with plant-based, low-residue products.",
  "airbnb-cleaning": "Turnover cleaning between guests for short-term rentals.",
  "office-cleaning": "Offices, small businesses and workspaces.",
  "condo-cleaning": "Condos and high-rises, with building access handled.",
  "maid-service": "Scheduled or one-time cleaning by a vetted team.",
  "kitchen-cleaning": "Kitchen only: stovetop, hood, appliance exteriors, sink and counters.",
  "bathroom-cleaning": "Bathrooms only: toilet, shower and tub, tile, mirrors and floor.",
  "living-area-cleaning": "Living, dining and family rooms and home office.",
};
const description = (slug: string) => SCOPE[slug] ?? "";

/**
 * Overrides shared with CityPage (RETARGET_TO_VANITY) are passed in so this module stays free of
 * page imports. Returns null for hubs that are not curated.
 */
export function hubServiceSelection(citySlug: string, cityName: string, retarget: Record<string, string> = {}): HubServiceSelection | null {
  if (!CURATED_HUBS.has(citySlug)) return null;
  const seen = new Set<string>();
  const take = (slug: string, href: string | null, local: boolean): HubServiceChoice | null => {
    if (!href || seen.has(href) || !isIndexable(href)) return null;
    if (href === `/locations/${citySlug}`) return null;
    seen.add(href);
    return {
      slug,
      label: local ? `${nationalName(slug)} in ${cityName}` : nationalName(slug),
      href,
      description: description(slug),
      national: !local,
    };
  };

  const primary: HubServiceChoice[] = [];
  for (const slug of PRIMARY_ORDER) {
    const href = retarget[`${citySlug}/${slug}`] ?? serviceCardHref(citySlug, slug);
    const choice = take(slug, href, !!href && href.startsWith(`/locations/${citySlug}/`));
    if (choice) primary.push(choice);
    if (primary.length === 8) break;
  }

  const more: HubServiceChoice[] = [];
  // National guides of the services that resolved locally above (overviews for MD/DC/VA).
  for (const p of primary) {
    if (!p.national) {
      const choice = take(p.slug, nationalServiceHref(p.slug), false);
      if (choice) more.push(choice);
    }
  }
  // The national house cleaning page (today's hub already links it from the national grid).
  if (!seen.has("/services/house-cleaning") && isIndexable("/services/house-cleaning")) {
    const choice = take("house-cleaning", "/services/house-cleaning", false);
    if (choice) more.push(choice);
  }
  for (const slug of COMPLEMENT_ORDER) {
    const local = serviceCardHref(citySlug, slug);
    const choice = take(slug, local, !!local && local.startsWith(`/locations/${citySlug}/`));
    if (choice) more.push(choice);
    if (choice && !choice.national) {
      const nat = take(slug, nationalServiceHref(slug), false);
      if (nat) more.push(nat);
    }
  }
  return { primary, more };
}
