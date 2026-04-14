import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";
import FAQ from "@/components/FAQ";
import ConversionCTA from "@/components/ConversionCTA";
import TrustBadges from "@/components/TrustBadges";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema, CityReviewSchema } from "@/components/SchemaMarkup";
import { getTestimonialsForServiceCity } from "@/data/testimonials";
import { getCity, getService, getServiceLocationIntro, getWhyChooseUs, getServiceLocationFAQs, slCities, slServices } from "@/data/service-locations";
import { vanityLandingPages } from "@/data/vanity-landings";
import { CheckCircle, MapPin, ArrowRight, Shield, Leaf, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";
import NotFound from "./NotFound";

const ServiceLocationPage = () => {
  const { slug, serviceSlug } = useParams<{ slug: string; serviceSlug: string }>();
  const city = getCity(slug || "");
  const service = getService(serviceSlug || "");

  if (!city || !service) return <NotFound />;

  const faqs = getServiceLocationFAQs(city, service);
  const whyChoose = getWhyChooseUs(city, service);
  const intro = getServiceLocationIntro(city, service);
  const metaTitle = `Professional ${service.name} in ${city.name}, ${city.state} | Capital Clean Care`;
  const metaDescription = `Top-rated ${service.shortName} & maid service in ${city.name}, ${city.state}. Eco-friendly products, background-checked teams, satisfaction guaranteed. Serving ${city.county}. Free quotes.`;
  const pageUrl = `https://capitalcleancare.com/locations/${city.slug}/${service.slug}`;

  // If a vanity page exists for this city+service combo, point canonical there (better keyword URL)
  const vanityMatch = vanityLandingPages.find(
    (v) => v.citySlug === city.slug && v.serviceSlug === service.slug
  );
  const canonicalUrl = vanityMatch
    ? `https://capitalcleancare.com/${vanityMatch.slug}`
    : pageUrl;

  const { seoHelmet } = useSEO({ title: metaTitle, description: metaDescription, canonical: canonicalUrl });

  const testimonials = getTestimonialsForServiceCity(city.slug, service.slug);

  // Get related service pages for this city
  const relatedServices = slServices.filter(s => s.slug !== service.slug).slice(0, 4);
  // Get nearby cities — same county first, then fallback to same state
  const nearbyCities = slCities
    .filter(c => c.slug !== city.slug)
    .sort((a, b) => (a.county === city.county ? -1 : 1))
    .slice(0, 5);

  return (
    <Layout>
      {seoHelmet}
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: city.name, href: `/locations/${city.slug}` }, { label: service.name, href: `/locations/${city.slug}/${service.slug}` }]} />
      <LocalBusinessSchema areaServed={[city.name, city.county]} />
      <ServiceSchema
        serviceName={`${service.name} in ${city.name}`}
        description={metaDescription}
        url={pageUrl}
        reviews={testimonials.map(t => ({ name: t.name, text: t.text, location: t.location }))}
      />
      <CityReviewSchema
        cityName={`${city.name} — ${service.name}`}
        cityUrl={pageUrl}
        reviews={testimonials}
      />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: city.name, href: `/locations/${city.slug}` },
              { label: service.name },
            ]}
            className="mb-4"
          />
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional {service.name} in {city.name}, {city.state}
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
            Trusted {service.shortName} for {city.name} homes. Eco-friendly products, experienced teams, satisfaction guaranteed.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> {city.name}, {city.state}</span>
            <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-primary" /> Licensed & Insured</span>
            <span className="flex items-center gap-1.5"><Leaf className="h-4 w-4 text-primary" /> Eco-Friendly</span>
            <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-primary" /> 5.0 Rated</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="cta" size="lg" asChild>
              <a href="#quote">Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            {service.name} Services for {city.name} Homeowners
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            {intro.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mb-4 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Service Checklist */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            What's Included in Our {service.name} in {city.name}
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {service.checklist.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-background p-4 rounded-lg border border-border/50">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
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

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                <Star className="h-3.5 w-3.5 fill-accent" /> Client Reviews
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                What {city.name} Clients Say About Our {service.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-0.5 mb-3">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground italic mb-3 leading-relaxed">"{t.text}"</p>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              <span className="font-semibold text-foreground">5.0 ★</span> average rating across all {city.name} {service.shortName} reviews
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

      {/* Internal Links */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Other services in this city */}
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                Other Services in {city.name}
              </h3>
              <ul className="space-y-2">
                {relatedServices.map(s => (
                  <li key={s.slug}>
                    <Link
                      to={`/locations/${city.slug}/${s.slug}`}
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      <ArrowRight className="h-3 w-3" /> {s.name} in {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* This service in nearby cities */}
            {nearbyCities.length > 0 && (
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                  {service.name} in Nearby Cities
                </h3>
                <ul className="space-y-2">
                  {nearbyCities.map(c => (
                    <li key={c.slug}>
                      <Link
                        to={`/locations/${c.slug}/${service.slug}`}
                        className="text-primary hover:underline flex items-center gap-2"
                      >
                        <ArrowRight className="h-3 w-3" /> {service.name} in {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges compact />

      {/* CTA */}
      <ConversionCTA cityName={city.name} />

      {/* Quote Form Anchor */}
      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Book Your {service.name} in {city.name} Today
          </h2>
          <p className="text-muted-foreground mb-6">
            Ready for a spotless home? Contact Capital Clean Care for professional {service.shortName} in {city.name}, {city.state}. 
            Use our online booking system or request a free, no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Request a Free Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceLocationPage;
