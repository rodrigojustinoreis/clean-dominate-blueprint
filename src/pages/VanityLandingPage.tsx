import { Link, useLocation } from "react-router-dom";
import { CheckCircle, MapPin, ArrowRight, Shield, Leaf, Clock, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import FAQ from "@/components/FAQ";
import ConversionCTA from "@/components/ConversionCTA";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";
import { getVanityPageBySlug } from "@/data/vanity-landings";
import { getCity, getService, getServiceLocationIntro, getWhyChooseUs, getServiceLocationFAQs } from "@/data/service-locations";
import { slServices } from "@/data/service-locations";
import NotFound from "./NotFound";

const VanityLandingPage = () => {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, "");
  const config = getVanityPageBySlug(slug);

  if (!config) return <NotFound />;

  const city = getCity(config.citySlug);
  const service = getService(config.serviceSlug);

  if (!city || !service) return <NotFound />;

  const faqs = getServiceLocationFAQs(city, service);
  const whyChoose = getWhyChooseUs(city, service);
  const generatedIntro = getServiceLocationIntro(city, service);
  const pageUrl = `https://capitalcleancare.com/${config.slug}`;

  const { seoHelmet } = useSEO({
    title: config.metaTitle,
    description: config.metaDescription,
    canonical: pageUrl,
  });

  // Related service pages for this city
  const relatedServices = slServices.filter(s => s.slug !== service.slug).slice(0, 4);

  return (
    <Layout>
      {seoHelmet}
      <LocalBusinessSchema areaServed={[city.name, city.county, `${city.name}, ${city.state} ${config.zip}`]} />
      <ServiceSchema
        serviceName={config.h1}
        description={config.metaDescription}
        url={pageUrl}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { label: "Home", href: "/" },
        { label: city.state === "MD" ? "Maryland" : city.state === "DC" ? "Washington DC" : "Virginia", href: `/${city.state === "MD" ? "maryland" : city.state === "DC" ? "washington-dc" : "virginia"}` },
        { label: city.name, href: `/locations/${city.slug}` },
        { label: service.name },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: city.state === "MD" ? "Maryland" : city.state === "DC" ? "Washington DC" : "Virginia", href: `/${city.state === "MD" ? "maryland" : city.state === "DC" ? "washington-dc" : "virginia"}` },
              { label: city.name, href: `/locations/${city.slug}` },
              { label: service.name },
            ]}
            className="mb-4"
          />
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {config.h1}
          </h1>
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl">
            Professional {service.shortName} for {city.name} homes {config.nearbyNote}. Eco-friendly products, experienced teams, satisfaction guaranteed.
          </p>
          {/* Local keyword badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {config.localKeywords.map((kw, i) => (
              <span key={i} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">{kw}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" aria-hidden="true" /> {city.name}, {city.state} {config.zip}</span>
            <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-primary" aria-hidden="true" /> Licensed & Insured</span>
            <span className="flex items-center gap-1.5"><Leaf className="h-4 w-4 text-primary" aria-hidden="true" /> Eco-Friendly</span>
            <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-primary" aria-hidden="true" /> 5.0 Rated</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="cta" size="lg" asChild>
              <a href="#quote" aria-label={`Get a free ${service.shortName} quote in ${city.name}`}>Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551" aria-label="Call Capital Clean Care"><Phone className="mr-1 h-4 w-4" /> (240) 704-2551</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Unique Intro */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            {service.name} for {city.name} Homeowners
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4 leading-relaxed">{config.uniqueIntro}</p>
            {generatedIntro.split("\n\n").slice(1).map((paragraph, i) => (
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
            {service.checklist.slice(0, 30).map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-background p-4 rounded-lg border border-border/50">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
          {service.checklist.length > 30 && (
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Plus {service.checklist.length - 30} more items — <Link to={`/locations/${city.slug}/${service.slug}`} className="text-accent hover:underline">view full checklist</Link>
            </p>
          )}
        </div>
      </section>

      {/* Process Steps */}
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
                <p className="text-foreground">{step}</p>
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
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Ideal For
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {service.idealFor.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-4">
            Our {city.name} Service Area (ZIP {config.zip})
          </h2>
          <p className="text-muted-foreground mb-6">
            We serve all neighborhoods in and around {city.name}, {city.state} {config.zip}, including areas {config.nearbyNote}.
          </p>
          <GoogleMapEmbed cityName={`${city.name} ${city.state} ${config.zip}`} state={city.state} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Frequently Asked Questions About {service.name} in {city.name}
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
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
                      aria-label={`${s.name} in ${city.name}`}
                    >
                      <ArrowRight className="h-3 w-3" aria-hidden="true" /> {s.name} in {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">
                Explore More
              </h3>
              <ul className="space-y-2">
                <li><Link to={`/locations/${city.slug}`} className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="h-3 w-3" aria-hidden="true" /> All services in {city.name}</Link></li>
                <li><Link to={`/services/${service.slug === "eco-friendly-cleaning" ? "standard-cleaning" : service.slug}`} className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="h-3 w-3" aria-hidden="true" /> {service.name} overview</Link></li>
                <li><Link to="/maryland" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="h-3 w-3" aria-hidden="true" /> Maryland cleaning services</Link></li>
                <li><Link to="/contact" className="text-primary hover:underline flex items-center gap-2"><ArrowRight className="h-3 w-3" aria-hidden="true" /> Contact us for a free quote</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ConversionCTA cityName={city.name} />

      {/* Quote Form */}
      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Book Your {service.name} in {city.name} Today
          </h2>
          <p className="text-muted-foreground mb-6">
            Ready for a spotless home? Contact Capital Clean Care for professional {service.shortName} in {city.name}, {city.state} {config.zip}.
          </p>
          <Card><CardContent className="p-6 md:p-8"><QuoteForm /></CardContent></Card>
        </div>
      </section>
    </Layout>
  );
};

export default VanityLandingPage;