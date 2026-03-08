import { useParams, Link } from "react-router-dom";
import { CheckCircle, MapPin, ArrowRight, Phone, Shield, Leaf, Star, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import PricingTable from "@/components/PricingTable";
import TrustBar from "@/components/TrustBar";
import ConversionCTA from "@/components/ConversionCTA";
import { FAQSchema, ServiceSchema } from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";
import { getCityBySlug, getExpandedCityFaqs } from "@/data/locations";
import { services } from "@/data/services";
import { slServices, slCities } from "@/data/service-locations";
import Breadcrumbs from "@/components/Breadcrumbs";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import GoogleBusinessLinks from "@/components/GoogleBusinessLinks";
import NotFound from "./NotFound";
import regionMD from "@/assets/region-maryland.jpg";
import regionDC from "@/assets/region-dc.jpg";
import regionVA from "@/assets/region-virginia.jpg";

const regionImages: Record<string, string> = {
  maryland: regionMD,
  "washington-dc": regionDC,
  virginia: regionVA,
};

/** City-specific "why choose us" openers to reduce template feel */
const cityWhyIntros: Record<string, string> = {
  "rockville-md": "Rockville families trust us for consistent, thorough cleaning that fits their busy Montgomery County lifestyles.",
  "silver-spring-md": "Silver Spring's diverse community deserves a cleaning team that adapts to every home style — from mid-century ranchers to modern apartments.",
  "bethesda-md": "Bethesda homeowners expect premium quality, and our meticulous approach delivers the elevated cleaning experience this community deserves.",
  "germantown-md": "Germantown families enjoy reliable, hassle-free cleaning from a team that understands the upcounty lifestyle.",
  "gaithersburg-md": "From Kentlands to Lakelands, Gaithersburg homeowners count on us for dependable, eco-conscious cleaning.",
  "potomac-md": "Potomac's elegant estates require a cleaning team with attention to detail and respect for fine finishes — that's our specialty.",
  "frederick-md": "Frederick homeowners appreciate our blend of small-town reliability and professional-grade cleaning expertise.",
  "columbia-md": "Columbia's planned communities deserve a cleaning service as thoughtful and organized as the neighborhoods themselves.",
  "ellicott-city-md": "From historic Main Street homes to modern developments, Ellicott City trusts our gentle yet thorough approach.",
  "arlington-va": "Arlington's fast-paced professionals rely on our flexible scheduling and consistent quality to keep their homes spotless.",
  "fairfax-va": "Fairfax families choose us for our eco-friendly products and the peace of mind that comes with background-checked teams.",
  "mclean-va": "McLean's distinguished homes receive the white-glove treatment they deserve — premium products, expert teams, impeccable results.",
  "alexandria-va": "From Old Town rowhouses to West End condos, Alexandria homeowners trust our versatile, professional cleaning teams.",
  "georgetown-dc": "Georgetown's historic homes and modern residences alike benefit from our careful, detail-oriented cleaning approach.",
  "capitol-hill-dc": "Capitol Hill residents count on our reliable, eco-friendly service to keep their homes pristine amid busy District schedules.",
};

const CityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = getCityBySlug(slug || "");

  if (!city) return <NotFound />;

  const { seoHelmet } = useSEO({ title: city.metaTitle, description: city.metaDescription, canonical: `https://capitalcleancare.com/locations/${city.slug}` });

  const nearbyCities = city.nearbySlugs.map(getCityBySlug).filter(Boolean);
  const expandedFaqs = getExpandedCityFaqs(city);
  const stateLabel = city.stateSlug === "maryland" ? "Maryland" : city.stateSlug === "washington-dc" ? "Washington DC" : "Virginia";
  const cityLabel = city.state !== "DC" ? `${city.name}, ${city.state}` : city.name;
  const whyIntro = cityWhyIntros[city.slug] || `${city.name} homeowners choose Capital Clean Care for our reliable, eco-friendly cleaning services.`;
  const hasServiceLocationPages = slCities.some((c) => c.slug === city.slug);

  return (
    <Layout>
      {seoHelmet}
      <FAQSchema faqs={expandedFaqs} />
      <ServiceSchema
        serviceName={`House Cleaning in ${city.name}`}
        description={`Professional eco-friendly house cleaning services in ${cityLabel}. Licensed, insured, background-checked teams.`}
        url={`https://capitalcleancare.com/locations/${city.slug}`}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={regionImages[city.stateSlug] || regionMD}
            alt={`Eco-friendly house cleaning team serving ${city.name}, ${city.state} — Capital Clean Care`}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        </div>
        <div className="relative container mx-auto px-4 max-w-4xl py-16 md:py-24">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: stateLabel, href: `/${city.stateSlug}` }, { label: city.name }]}
            className="mb-4 text-primary-foreground/60 [&_a]:text-primary-foreground/60 [&_a:hover]:text-primary-foreground [&_span[aria-current]]:text-primary-foreground/80 [&_svg]:text-primary-foreground/40"
          />
          <h1 className="font-heading text-3xl md:text-5xl lg:text-[3.25rem] font-bold mb-5 text-primary-foreground leading-tight">
            House Cleaning Services in {cityLabel}
          </h1>
          <p className="text-primary-foreground/85 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            Professional, eco-friendly house cleaning for {city.name} homes. Licensed, insured, and background-checked teams you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="cta" size="lg" className="text-base" asChild>
              <a href="#quote">Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button variant="secondary" size="lg" className="text-base" asChild>
              <a href="tel:+12407042551"><Phone className="h-4 w-4 mr-2" /> (240) 704-2551</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar variant="dark" />

      {/* About Our Work */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            Our Work in {city.name}
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            {city.intro.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page Conversion CTA */}
      <ConversionCTA cityName={city.name} variant="full" />

      {/* Services Available — links to service-location pages when available */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Cleaning Services in {city.name}</h2>
          <p className="text-muted-foreground mb-8">We bring the full range of Capital Clean Care services to {city.name}. Click any service to learn more about how we serve your area.</p>

          {/* Service-location specific links */}
          {hasServiceLocationPages && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {slServices.map((sl) => (
                <Card key={sl.slug} className="group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                  <CardContent className="p-5">
                    <Link to={`/locations/${city.slug}/${sl.slug}`} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Sparkles className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">{sl.name} in {city.name}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">Professional {sl.shortName} tailored for {city.name} homes</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* General service links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <Card key={s.slug} className="group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <CardContent className="p-5">
                  <Link to={`/services/${s.slug}`} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Sparkles className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">{s.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{s.shortDescription}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — city-specific intro */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Why {city.name} Homeowners Choose Us</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">{whyIntro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Leaf, text: "Eco-friendly, non-toxic products safe for your family and pets" },
              { icon: Shield, text: "Fully licensed and insured for your complete protection" },
              { icon: CheckCircle, text: "Every team member is background-checked and trained" },
              { icon: Star, text: "100% satisfaction guarantee — we'll re-clean if needed" },
              { icon: MapPin, text: `Local teams that know ${city.name} neighborhoods` },
              { icon: Sparkles, text: "Flexible scheduling including weekday and Saturday" },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-4 rounded-xl border border-border bg-card hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-4.5 w-4.5 text-accent" />
                </div>
                <span className="text-sm text-foreground mt-2">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Pricing in {city.name}</h2>
            <p className="text-muted-foreground">Estimated ranges by home size. Your actual price depends on bedrooms, bathrooms, condition, and cleaning type.</p>
          </div>
          <PricingTable />
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6">What Affects Your Price in {city.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Number of bedrooms & bathrooms",
              "Type of service requested",
              "Current condition of the home",
              "Frequency (one-time vs. recurring)",
              "Number of levels / floors",
              "Special requests or add-ons",
            ].map((f, i) => (
              <div key={i} className="flex gap-2 items-center p-3 rounded-lg bg-secondary text-sm">
                <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-8">{city.name} Cleaning FAQ</h2>
          <FAQ faqs={expandedFaqs} />
        </div>
      </section>

      {/* Google Map */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-4">Our {city.name} Service Area</h2>
          <p className="text-muted-foreground mb-6">We serve all neighborhoods in and around {cityLabel}. See our coverage area below.</p>
          <GoogleMapEmbed cityName={city.name} state={city.state === "DC" ? "DC" : city.state} />
          <div className="mt-6">
            <GoogleBusinessLinks />
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearbyCities.length > 0 && (
        <section className="py-14 md:py-20 bg-secondary">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-2xl font-bold mb-6">Nearby Areas We Serve</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {nearbyCities.map((nc) => nc && (
                <Button key={nc.slug} variant="outline" className="h-auto py-3 flex-col gap-1" asChild>
                  <Link to={`/locations/${nc.slug}`}>
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="text-xs font-medium">{nc.name}{nc.state !== "DC" ? `, ${nc.state}` : ""}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote Form */}
      <section className="py-16 md:py-20 bg-secondary" id="quote">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold mb-3">Get a Free Quote in {city.name}</h2>
            <p className="text-muted-foreground">Tell us about your {city.name} home and we'll respond with a personalized estimate.</p>
          </div>
          <Card><CardContent className="p-6 md:p-8"><QuoteForm /></CardContent></Card>
        </div>
      </section>
    </Layout>
  );
};

export default CityPage;
