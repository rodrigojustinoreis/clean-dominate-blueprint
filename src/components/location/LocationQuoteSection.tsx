import QuoteForm from "@/components/QuoteForm";

interface LocationQuoteSectionProps {
  cityName: string;
  serviceLabel: string;
  /** Maps to QuoteForm service values: standard | deep | recurring | move | post-construction | airbnb | office */
  defaultService: string;
  /** Optional extra line (e.g. ZIP codes served). */
  zipLine?: string;
  /** Optional CTA prose variant (Lote 1b) — replaces the default "Fill out the form…" line. */
  ctaProse?: string;
}

/**
 * Bottom-of-page quote section with the REAL quote form embedded — every CTA on
 * the page (hero, ConversionCTA, sticky mobile bar) scrolls to #quote, so the
 * form must live here. Replaces the old "button that just links to /contact"
 * dead-end that contradicted the "free quote in 60 seconds" copy.
 */
const LocationQuoteSection = ({ cityName, serviceLabel, defaultService, zipLine, ctaProse }: LocationQuoteSectionProps) => (
  <section id="quote" className="py-12 md:py-16 bg-muted/30 scroll-mt-20">
    <div className="container mx-auto px-4 max-w-2xl">
      <div className="text-center mb-6">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
          Book Your {cityName} {serviceLabel} Today
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          {ctaProse ? (
            <>{zipLine ? `${zipLine} ` : ""}{ctaProse} Call{" "}
              <a href="tel:+12407042551" className="text-primary font-semibold underline">(240) 704-2551</a>.</>
          ) : (
            <>{zipLine ? `${zipLine} ` : ""}Fill out the form for a free, no-obligation quote, or call{" "}
              <a href="tel:+12407042551" className="text-primary font-semibold underline">(240) 704-2551</a>.
              Same-day slots often available.</>
          )}
        </p>
      </div>
      <div className="bg-card border border-border rounded-2xl shadow-sm p-5 md:p-7">
        <QuoteForm defaultService={defaultService} submitLabel={`Get My Free ${serviceLabel} Quote →`} compact />
      </div>
      <p className="text-center text-xs text-muted-foreground mt-3">
        Same-day slots available · 100% satisfaction guaranteed · Bonded &amp; Insured
      </p>
    </div>
  </section>
);

export default LocationQuoteSection;
