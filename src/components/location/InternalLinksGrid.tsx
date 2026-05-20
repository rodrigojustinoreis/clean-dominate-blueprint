import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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

const InternalLinksGrid = ({
  cityName,
  citySlug,
  serviceLabel,
  serviceSlug,
  services,
  nearbyCities,
}: InternalLinksGridProps) => (
  <section className="py-12 md:py-16 bg-muted/10" aria-label="Related pages">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Other services in this city */}
        <div>
          <h3 className="font-heading text-base font-bold text-foreground mb-4 uppercase tracking-wide text-sm">
            Other Services in {cityName}
          </h3>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/locations/${citySlug}/${s.slug}`}
                  className="flex items-center gap-2 text-sm text-primary hover:underline hover:text-primary/80 transition-colors"
                >
                  <ArrowRight className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
                  {s.name} in {cityName}, MD
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Same service in nearby cities */}
        <div>
          <h3 className="font-heading text-base font-bold text-foreground mb-4 uppercase tracking-wide text-sm">
            {serviceLabel} in Nearby Cities
          </h3>
          <ul className="space-y-2.5">
            {nearbyCities.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/locations/${c.slug}/${serviceSlug}`}
                  className="flex items-center gap-2 text-sm text-primary hover:underline hover:text-primary/80 transition-colors"
                >
                  <ArrowRight className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
                  {serviceLabel} in {c.name}, {c.state}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default InternalLinksGrid;
