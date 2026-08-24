import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";
import FAQ from "@/components/FAQ";
import ConversionCTA from "@/components/ConversionCTA";
import TrustBadges from "@/components/TrustBadges";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import LocationSocialProof from "@/components/location/LocationSocialProof";
import LocationQuoteSection from "@/components/location/LocationQuoteSection";
import InternalLinksGrid from "@/components/location/InternalLinksGrid";
import TransformationsGallery from "@/components/TransformationsGallery";
import { pickReviews } from "@/data/realReviews";
import { getCity, getService, getServiceLocationIntro, getWhyChooseUs, getServiceLocationFAQs, slCities, slServices } from "@/data/service-locations";
import { getServiceLocationOverride } from "@/data/service-location-overrides";
import { pickVariant, whyChooseVariants, checklistHeadingVariants, checklistOrder, ctaProseVariants } from "@/data/template-variants";
import { isAllowlistedServiceLocation } from "@/data/serviceLocationAllowlist";
import { cityImages } from "@/data/city-images";
import { CheckCircle, MapPin, ArrowRight, Shield, Leaf, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";
import NotFound from "./NotFound";

const teamPhotos = [
  "/images/team/team-mopping-dark-floor.jpg",
  "/images/team/team-mopping-bright-room.jpg",
  "/images/team/team-scrubbing-door-detail.jpg",
  "/images/team/team-wiping-door-orange.jpg",
  "/images/team/team-cleaning-appliances-male.jpg",
  "/images/team/team-kitchen-detail.jpg",
  "/images/team/team-vacuuming-furniture.jpg",
  "/images/team/team-two-living-room.jpg",
  "/images/team/team-window-frame-detail.jpg",
  "/images/team/team-cleaning-glass-door.jpg",
  "/images/team/team-polishing-fridge.jpg",
  "/images/team/team-two-large-room.jpg",
  "/images/team/team-tile-scrubber.jpg",
  "/images/team/team-making-bed.jpg",
  "/images/team/team-supplies-basket.webp",
  "/images/team/team-window-blinds-pro.webp",
];

function cityPhotoIndex(slug: string): number {
  let h = 0;
  for (const c of slug) h = (h * 31 + c.charCodeAt(0)) & 0xffff;
  return h % teamPhotos.length;
}

const ServiceLocationPage = () => {
  const { slug, serviceSlug } = useParams<{ slug: string; serviceSlug: string }>();
  const city = getCity(slug || "");
  const service = getService(serviceSlug || "");

  if (!city || !service) return <NotFound />;

  const override = getServiceLocationOverride(city.slug, service.slug);
  // City-specific FAQs (Lote 1 uniqueness) take precedence over the templated set;
  // feeds both the on-page FAQ and FAQPage schema. Falls back to template when absent.
  const faqs = override?.faqs ?? getServiceLocationFAQs(city, service);
  // Lote 1b — per-city variation of the shared blocks (why-choose, checklist, CTA)
  // so template pages stop reading as near-duplicates. Facts unchanged; wording/order rotate.
  const whyChoose = whyChooseVariants[pickVariant(city.slug, whyChooseVariants.length, 1)]({
    city: city.name, state: city.state, county: city.county,
    shortName: service.shortName, housingTypes: city.housingTypes, lifestyle: city.lifestyle,
    neighborhoods: city.neighborhoods,
  });
  const checklistV = pickVariant(city.slug, checklistHeadingVariants.length, 2);
  const checklistItems = checklistOrder(service.checklist, city.slug);
  const ctaProse = ctaProseVariants[pickVariant(city.slug, ctaProseVariants.length, 3)](city.name, service.name);
  const intro = getServiceLocationIntro(city, service);
  const serviceLabel = service.shortName.toLowerCase().includes("maid") ? service.shortName : `${service.shortName} & maid service`;
  const metaTitle = override?.metaTitle || `${service.name} in ${city.name}, ${city.state} | Capital Clean Care`;
  const metaDescription = override?.metaDescription || `Top-rated ${serviceLabel} in ${city.name}, ${city.state}. Eco-friendly products, background-checked teams, satisfaction guaranteed. Serving ${city.county}. Free quotes.`;
  const pageUrl = `https://capitalcleancare.com/locations/${city.slug}/${service.slug}`;
  const isFairfaxHouseCleaning = city.slug === "fairfax-va" && service.slug === "house-cleaning";
  const heroImage = isFairfaxHouseCleaning
    ? "/images/locations/fairfax-house-cleaning-hero-v2.webp"
    : null;
  const nearbyCitiesForLinks = isFairfaxHouseCleaning
    ? slCities.filter((candidate) => ["vienna-va", "mclean-va", "falls-church-va", "arlington-va", "alexandria-va", "reston-va"].includes(candidate.slug))
    : slCities.filter((candidate) => candidate.slug !== city.slug);

  // PR #5 — zombie-page pruning: only allowlisted (city, service) pairs are indexable.
  // All other dynamic permutations from this template render with <meta name="robots" content="noindex,nofollow">
  // so Google can drop them from the index. See src/data/serviceLocationAllowlist.ts.
  const isIndexable = isAllowlistedServiceLocation(city.slug, service.slug);

  const { seoHelmet } = useSEO({
    title: metaTitle,
    description: metaDescription,
    canonical: pageUrl,
    noIndex: !isIndexable,
    ogImage: heroImage || undefined,
    preloadImage: heroImage || undefined,
  });

  const realReviews = pickReviews(`${city.slug}/${service.slug}`, 2);
  const serviceToForm: Record<string, string> = {
    "house-cleaning": "standard", "deep-cleaning": "deep", "recurring-cleaning": "recurring",
    "move-out-cleaning": "move", "move-in-cleaning": "move", "post-construction-cleaning": "post-construction",
    "airbnb-cleaning": "airbnb", "office-cleaning": "office", "commercial-cleaning": "office",
  };
  const defaultFormService = serviceToForm[service.slug] || "standard";

  return (
    <Layout>
      {seoHelmet}
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: city.name, href: `/locations/${city.slug}` }, { label: service.name, href: `/locations/${city.slug}/${service.slug}` }]} />
      <LocalBusinessSchema
        areaServed={[city.name, city.county]}
        reviews={realReviews}
      />
      <ServiceSchema
        serviceName={`${service.name} in ${city.name}`}
        description={metaDescription}
        url={pageUrl}
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-24 pb-12 md:pt-32 md:pb-16">
        {heroImage && (
          <>
            <img
              src={heroImage}
              alt="Illustrative scene of professional house cleaning in a Fairfax, Virginia home"
              width="1672"
              height="941"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/30" />
          </>
        )}
        <div className="relative container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: city.name, href: `/locations/${city.slug}` },
              { label: service.name },
            ]}
            className={heroImage ? "mb-4 text-primary-foreground/70 [&_a]:text-primary-foreground/70 [&_a:hover]:text-primary-foreground [&_span[aria-current]]:text-primary-foreground/90 [&_svg]:text-primary-foreground/50" : "mb-4"}
          />
          <h1 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${heroImage ? "max-w-2xl text-primary-foreground drop-shadow-sm" : "text-foreground"}`}>
            {override?.h1 || <>Professional {service.name} in {city.name}, {city.state}</>}
          </h1>
          <p className={`text-lg mb-6 max-w-2xl ${heroImage ? "text-primary-foreground/90 drop-shadow-sm" : "text-muted-foreground"}`}>
            {override?.heroLead || <>Trusted {service.shortName} for {city.name} homes. Eco-friendly products, experienced teams, satisfaction guaranteed.</>}
          </p>
          <div className={`flex flex-wrap gap-4 text-sm mb-8 ${heroImage ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
            <span className="flex items-center gap-1.5"><MapPin className={`h-4 w-4 ${heroImage ? "text-accent" : "text-primary"}`} /> {city.name}, {city.state}</span>
            <span className="flex items-center gap-1.5"><Shield className={`h-4 w-4 ${heroImage ? "text-accent" : "text-primary"}`} /> Licensed & Insured</span>
            <span className="flex items-center gap-1.5"><Leaf className={`h-4 w-4 ${heroImage ? "text-accent" : "text-primary"}`} /> Eco-Friendly</span>
            <span className="flex items-center gap-1.5"><Star className={`h-4 w-4 ${heroImage ? "text-accent" : "text-primary"}`} /> 5.0 Rated</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="cta" size="lg" asChild>
              <a href="#quote">Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button variant="outline" size="lg" className={heroImage ? "border-primary-foreground/70 bg-background/90 hover:bg-background" : undefined} asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                {service.name} Services for {city.name} Homeowners
              </h2>
              {city.localIntro && (
                <div className="border-l-4 border-primary bg-muted/40 rounded-r-lg px-6 py-5 mb-6">
                  <p className="text-foreground leading-relaxed">
                    {city.localIntro.replace(/\[SERVICE_NAME\]/g, service.shortName)}
                  </p>
                </div>
              )}
              <div className="prose prose-lg max-w-none text-muted-foreground">
                {intro.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="mb-4 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="md:sticky md:top-28">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                <img
                  src={cityImages[city.slug] ?? teamPhotos[cityPhotoIndex(city.slug)]}
                  alt={
                    cityImages[city.slug]
                      ? `${city.name}, ${city.state} — Capital Clean Care ${service.shortName} service area`
                      : `Capital Clean Care team providing ${service.shortName} in ${city.name}, ${city.state}`
                  }
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                  width="1280"
                  height="720"
                />
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2">
                {cityImages[city.slug]
                  ? `${service.shortName} in ${city.name}, ${city.state} — serving ${city.county}`
                  : `Our team serving ${city.name} and the ${city.county} area`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof
        cityName={city.name}
        citySlug={city.slug}
        serviceSlug={service.slug}
        serviceLabel={service.name}
      />

      {/* Before & After video carousel (4th position) — deep-cleaning pages only (relevant transformation footage, breaks up the text) */}
      {service.slug === "deep-cleaning" && (
        <TransformationsGallery heading={`Before & After: Real Deep Cleaning in ${city.name}`} />
      )}

      {/* Unique local content (only on priority pages) */}
      {override?.uniqueContent && (
        <section className="py-12 md:py-16 bg-muted/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our {service.name} Team in {city.name}
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              {override.uniqueContent.split("\n\n").map((paragraph, i) => (
                <p key={i} className="mb-4 leading-relaxed">{paragraph}</p>
              ))}
            </div>
            {isFairfaxHouseCleaning && (
              <p className="mt-6 text-sm text-muted-foreground">
                Page updated <time dateTime="2026-08-24">August 24, 2026</time> to reflect current Fairfax coverage, service scope, and scheduling information.
              </p>
            )}
          </div>
        </section>
      )}

      {isFairfaxHouseCleaning && (
        <section className="py-12 md:py-16" aria-labelledby="fairfax-quick-facts">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 id="fairfax-quick-facts" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
              Fairfax House Cleaning: Quick Facts
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Clear answers for homeowners comparing professional house cleaning in Fairfax, Virginia.
            </p>
            <dl className="grid sm:grid-cols-2 gap-4">
              {[
                ["Areas served", "Fairfax City, Old Town Fairfax, Providence, Layton Hall, Pickett, University Village, and Mosby Woods."],
                ["ZIP codes", "22030, 22031, 22032, and 22033."],
                ["Typical visit length", "About 1.5–3 hours for an apartment, 2.5–4 hours for a rambler or townhome, and 3–5 hours for a larger Colonial. Final timing depends on the home's condition and room count."],
                ["Scheduling options", "One-time, weekly, biweekly, and monthly residential house cleaning."],
                ["Products", "Eco-friendly, EPA Safer Choice products selected with children, pets, and household surfaces in mind."],
                ["What is included", "Kitchens, bathrooms, bedrooms, living areas, dusting, floors, high-touch surfaces, and a final quality inspection."],
              ].map(([term, description]) => (
                <div key={term} className="rounded-xl border border-border bg-background p-5">
                  <dt className="font-semibold text-foreground mb-2">{term}</dt>
                  <dd className="text-sm leading-relaxed text-muted-foreground">{description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Service Checklist */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            {checklistHeadingVariants[checklistV](service.name, city.name)}
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {(isFairfaxHouseCleaning ? checklistItems.slice(0, 12) : checklistItems).map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-background p-4 rounded-lg border border-border/50">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
          {isFairfaxHouseCleaning && checklistItems.length > 12 && (
            <details className="mt-6 rounded-xl border border-border bg-background p-5">
              <summary className="cursor-pointer font-semibold text-foreground">
                View the complete Fairfax house cleaning checklist ({checklistItems.length} items)
              </summary>
              <div className="grid md:grid-cols-2 gap-3 mt-5">
                {checklistItems.slice(12).map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-lg border border-border/50 p-4">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </details>
          )}
        </div>
      </section>

      {/* Our Process */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Our {service.name} Process in {city.name}
          </h2>
          <div className="space-y-4">
            {service.processSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg border border-border/50">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">{i + 1}</span>
                </div>
                <div>
                  <p className="text-foreground">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Why Choose Capital Clean Care for {service.name} in {city.name}?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {whyChoose.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Map */}
      {city.lat && city.lng && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our {service.name} Coverage Area in {city.name}
            </h2>
            <div className="rounded-xl overflow-hidden border border-border shadow-sm">
              <iframe
                title={`Capital Clean Care ${service.shortName} service area in ${city.name}, ${city.state}`}
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${city.lng - 0.045}%2C${city.lat - 0.028}%2C${city.lng + 0.045}%2C${city.lat + 0.028}&layer=mapnik&marker=${city.lat}%2C${city.lng}`}
                width="100%"
                height="400"
                loading="lazy"
                className="w-full"
                style={{ border: 0 }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Serving <span className="font-medium text-foreground">{city.name}</span> and nearby neighborhoods: {city.neighborhoods.join(", ")}.
            </p>
          </div>
        </section>
      )}

      {/* Ideal For */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Ideal For
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {service.idealFor.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Frequently Asked Questions About {service.name} in {city.name}
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Internal Links — indexable-only, plus local guides + city hub (Fase 1.3) */}
      <InternalLinksGrid
        cityName={city.name}
        citySlug={city.slug}
        serviceLabel={service.name}
        serviceSlug={service.slug}
        services={slServices.map((s) => ({ name: s.name, slug: s.slug }))}
        nearbyCities={nearbyCitiesForLinks
          .map((c) => ({
            name: c.name,
            slug: c.slug,
            state: c.slug.endsWith("-va") ? "VA" : c.slug.endsWith("-dc") ? "DC" : "MD",
          }))}
      />

      {/* Trust Badges */}
      <TrustBadges compact />

      {/* CTA */}
      <ConversionCTA cityName={city.name} />

      {/* Quote Form Anchor */}
      <LocationQuoteSection
        cityName={city.name}
        serviceLabel={service.name}
        defaultService={defaultFormService}
        zipLine={`Serving ${city.name}, ${city.state} and nearby communities.`}
        ctaProse={ctaProse}
      />
    </Layout>
  );
};

export default ServiceLocationPage;
