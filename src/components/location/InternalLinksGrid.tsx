import { LinkList } from "@/components/RelatedContent";
import {
  isIndexable,
  guidesForCityService,
  cityHubLink,
  nationalServiceHref,
  type RelatedLink,
} from "@/data/related-content";

export interface ServiceLink {
  name: string;
  slug: string;
}

export interface CityLink {
  name: string;
  slug: string;
  state: string;
}

interface InternalLinksGridProps {
  cityName: string;
  citySlug: string;
  serviceLabel: string;
  serviceSlug: string;
  services: ServiceLink[];
  nearbyCities: CityLink[];
}

// Weekly audit 03/10/2026. Two indexable pages each had a single origin inside the sitemap because
// the "Other Services in <city>" column cannot reach them: the Damascus house-cleaning page is a
// vanity URL (its /locations twin and the Damascus hub are noindex), and Wheaton apartment cleaning
// is an off-grid pair that is not in the services list passed to this grid. Explicit, per city, so
// no other city changes. Every target here must stay indexable (checked with isIndexable below).
const EXTRA_CITY_SERVICE_LINKS: Readonly<Record<string, RelatedLink[]>> = {
  "damascus-md": [{ href: "/house-cleaning-damascus-md", title: "House Cleaning in Damascus" }],
  "wheaton-md": [{ href: "/locations/wheaton-md/apartment-cleaning", title: "Apartment Cleaning in Wheaton" }],
};

// Related-pages block for city×service pages (all 77 dedicated pages + reused elsewhere).
// Fase 1.3: everything here is filtered to INDEXABLE targets (the city/service lists passed in
// previously included noindex pages), and two contextual columns were added — local guides
// (Resource Center posts) and the city hub. Anchor text is always the real page title / label.
const InternalLinksGrid = ({
  cityName,
  citySlug,
  serviceLabel,
  serviceSlug,
  services,
  nearbyCities,
}: InternalLinksGridProps) => {
  // (a) local guides + service category, (b) other indexable services in this city + the city hub,
  // (c) same service in nearby indexable cities.
  const guideLinks: RelatedLink[] = guidesForCityService(citySlug, serviceSlug, 4).map((g) => ({
    href: g.href,
    title: g.title,
  }));

  const hub = cityHubLink(citySlug);
  // The national service page was the one link this grid never emitted, so every city×service spoke
  // sent equity sideways and never up to its own pillar. Guarded: never the Ads landing, never noindex.
  const pillarHref = nationalServiceHref(serviceSlug);
  const pillar: RelatedLink[] = pillarHref
    ? [{ href: pillarHref, title: `${serviceLabel} across MD, DC & VA` }]
    : [];
  const localServiceLinks: RelatedLink[] = services
    .filter((s) => s.slug !== serviceSlug && isIndexable(`/locations/${citySlug}/${s.slug}`))
    .map((s) => ({ href: `/locations/${citySlug}/${s.slug}`, title: `${s.name} in ${cityName}` }));
  const selfHref = `/locations/${citySlug}/${serviceSlug}`;
  // Only indexable origins carry the extra link: noindex twins of the same city keep their HTML as is.
  const extraLinks: RelatedLink[] = isIndexable(selfHref)
    ? (EXTRA_CITY_SERVICE_LINKS[citySlug] ?? []).filter(
        (l) => l.href !== selfHref && isIndexable(l.href) && !localServiceLinks.some((s) => s.href === l.href),
      )
    : [];
  const serviceLinks: RelatedLink[] = [
    ...pillar,
    ...localServiceLinks,
    ...extraLinks,
    ...(hub ? [hub] : []),
  ];

  const nearbyLinks: RelatedLink[] = nearbyCities
    .filter((c) => isIndexable(`/locations/${c.slug}/${serviceSlug}`))
    .map((c) => ({ href: `/locations/${c.slug}/${serviceSlug}`, title: `${serviceLabel} in ${c.name}, ${c.state}` }));

  const columns = [
    { heading: `Local Guides & Resources`, links: guideLinks },
    { heading: `Other Services in ${cityName}`, links: serviceLinks },
    { heading: `${serviceLabel} in Nearby Cities`, links: nearbyLinks },
  ].filter((col) => col.links.length > 0);

  if (columns.length === 0) return null;

  const gridCols = columns.length >= 3 ? "md:grid-cols-3" : columns.length === 2 ? "md:grid-cols-2" : "md:grid-cols-1";

  return (
    <section className="py-12 md:py-16 bg-muted/10" aria-label="Related pages">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className={`grid ${gridCols} gap-8`}>
          {columns.map((col) => (
            <LinkList key={col.heading} heading={col.heading} links={col.links} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalLinksGrid;
