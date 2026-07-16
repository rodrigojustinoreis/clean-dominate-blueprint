import { GuideCards, LinkList } from "@/components/RelatedContent";
import { guidesForService, indexableCitiesForService, SERVICE_LABEL } from "@/data/related-content";

// Internal-linking block for /services/<slug> pages (Fase 1.3): "Guides & Resources" (posts from
// the service's Resource Center category) + "Service Areas" (indexable city×service pages).
// showAreas=false for templates that already render their own city list (they filter it separately).
export default function ServiceRelatedContent({
  serviceSlug,
  showAreas = true,
  showGuides = true,
}: {
  serviceSlug: string;
  showAreas?: boolean;
  showGuides?: boolean;
}) {
  const guides = showGuides ? guidesForService(serviceSlug, 6) : [];
  const cities = showAreas ? indexableCitiesForService(serviceSlug, 8) : [];
  if (guides.length === 0 && cities.length === 0) return null;

  return (
    <section className="py-12 md:py-16" aria-label="Guides and service areas">
      <div className="container mx-auto px-4 max-w-4xl">
        {cities.length > 0 && (
          <LinkList heading={`${SERVICE_LABEL[serviceSlug] ?? "Cleaning"} by City`} links={cities} />
        )}
        <GuideCards heading="Guides & Resources" guides={guides} />
      </div>
    </section>
  );
}
