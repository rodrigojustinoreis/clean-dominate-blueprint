import { useParams, Link } from "react-router-dom";
import { CheckCircle, Star, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";
import { getServiceBySlug } from "@/data/services";
import { cities } from "@/data/locations";
import Breadcrumbs from "@/components/Breadcrumbs";
import { slCities, slServices } from "@/data/service-locations";
import NotFound from "./NotFound";
import GreenShield5Step from "@/components/GreenShield5Step";
import TrustBadges from "@/components/TrustBadges";
import FadeInSection from "@/components/blog/FadeInSection";
import LocationSocialProof from "@/components/location/LocationSocialProof";
import ServiceRelatedContent from "@/components/ServiceRelatedContent";
import { isIndexable } from "@/data/related-content";

// Only link to indexable city hubs (7 STATIC_CITIES hubs + many others are noindex).
const topCities = cities
  .filter((c) => !c.slug.includes("county") && isIndexable(`/locations/${c.slug}`))
  .slice(0, 8);

// Representative real team photo per service (real photos build more trust than stock/AI).
const SERVICE_IMAGES: Record<string, string> = {
  "move-out-cleaning": "/images/services/move-out-cleaning.webp",
  "post-construction-cleaning": "/images/team/team-post-construction.jpg",
  "recurring-cleaning": "/images/services/recurring-cleaning.webp",
  "airbnb-cleaning": "/images/services/airbnb-cleaning.webp",
  "office-cleaning": "/images/services/office-cleaning.webp",
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) return <NotFound />;

  const { seoHelmet } = useSEO({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: `https://capitalcleancare.com/services/${service.slug}`,
  });

  const heroImg = SERVICE_IMAGES[service.slug] || "/images/team/real-team-two-members.webp";

  const matchedSlService = slServices.find(
    (sl) => sl.slug === service.slug || sl.name.toLowerCase().includes(service.name.toLowerCase().split(" ")[0]),
  );

  return (
    <Layout>
      {seoHelmet}
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: service.name, href: `/services/${service.slug}` }]} />
      <ServiceSchema
        serviceName={service.name}
        description={service.shortDescription}
        url={`https://capitalcleancare.com/services/${service.slug}`}
        serviceType={service.name}
      />
      <FAQSchema faqs={service.faqs} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F1F8F1] via-background to-accent/5 py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }, { label: service.name }]} className="mb-6" />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <FadeInSection>
              <div className="inline-flex items-center gap-2 bg-white border border-accent/20 rounded-full px-3.5 py-1.5 shadow-sm mb-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-foreground">5.0</span>
                <span className="text-sm text-muted-foreground">· 45 Google reviews</span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5 leading-[1.1]">
                {service.h1 || service.name}
              </h1>

              <p className="text-lg text-muted-foreground mb-7 leading-relaxed max-w-xl">
                {service.shortDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button variant="cta" size="lg" asChild>
                  <a href="#quote">Get My Free Quote →</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+12407042551"><Phone className="h-4 w-4 mr-2" /> (240) 704-2551</a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                {["Licensed & Insured", "Eco-Friendly Products", "Satisfaction Guaranteed", "Background-Checked"].map((b) => (
                  <span key={b} className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0" /> {b}
                  </span>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="relative lg:pl-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-border aspect-[4/3]">
                  <img
                    src={heroImg}
                    alt={`Capital Clean Care team providing ${service.name.toLowerCase()} in the DMV`}
                    className="w-full h-full object-cover"
                    width={800}
                    height={600}
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
                <div className="absolute -bottom-5 left-2 sm:-left-4 bg-white rounded-2xl shadow-xl border border-border px-5 py-3.5 flex items-center gap-3">
                  <span className="text-3xl font-heading font-extrabold text-accent leading-none">9+</span>
                  <span className="text-xs text-muted-foreground leading-tight">years serving<br />the DMV</span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <div className="space-y-4 text-foreground leading-relaxed text-[17px]">
              {service.intro.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { v: "5.0★", l: "Google rating" },
              { v: "45", l: "Five-star reviews" },
              { v: "9+ yrs", l: "Serving the DMV" },
              { v: "100%", l: "Satisfaction guarantee" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col items-center gap-1 py-5 px-3 rounded-xl border border-border bg-card text-center shadow-sm">
                <span className="font-heading text-2xl md:text-3xl font-extrabold text-accent leading-none">{s.v}</span>
                <span className="text-xs font-medium text-muted-foreground">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInSection>
            <div className="text-center mb-10">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">The checklist</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2">
                What's Included — {service.whatsIncluded.length}-Point Checklist
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.whatsIncluded.map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-card border border-border rounded-xl p-4 shadow-sm">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <CheckCircle className="h-4.5 w-4.5 text-accent" />
                  </div>
                  <span className="text-sm text-foreground leading-relaxed pt-1">{item}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInSection>
            <div className="text-center mb-10">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why choose us</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2">The Benefits of Our {service.name}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex gap-3 items-start bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <CheckCircle className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-foreground leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Social Proof — real reviews + brand trust video ── */}
      <LocationSocialProof
        cityName="DMV"
        citySlug="services"
        serviceSlug={service.slug}
        serviceLabel={service.name}
      />

      {/* ── Service Areas ── */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-5">{service.name} Available Across the DMV</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {topCities.map((c) => (
                <Button key={c.slug} variant="outline" size="sm" asChild>
                  <Link to={`/locations/${c.slug}`} aria-label={`${service.name} in ${c.name}, ${c.state}`}>
                    {c.name}, {c.state}
                  </Link>
                </Button>
              ))}
            </div>
            {matchedSlService && (
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-2">Detailed {service.name} pages by city:</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {slCities
                    .filter((c) => isIndexable(`/locations/${c.slug}/${matchedSlService.slug}`))
                    .slice(0, 6)
                    .map((c) => (
                      <Link
                        key={c.slug}
                        to={`/locations/${c.slug}/${matchedSlService.slug}`}
                        className="text-sm text-accent hover:underline"
                        aria-label={`${service.name} in ${c.name}`}
                      >
                        {service.name} in {c.name} →
                      </Link>
                    ))}
                </div>
              </div>
            )}
          </FadeInSection>
        </div>
      </section>

      <GreenShield5Step compact showCTA={false} />

      {/* Guides & Resources (Service Areas already listed above) */}
      <ServiceRelatedContent serviceSlug={service.slug} showAreas={false} />

      <TrustBadges compact withBackground={false} />

      {/* ── FAQ ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-center">{service.name} FAQ</h2>
            <FAQ faqs={service.faqs} />
          </FadeInSection>
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section id="quote" className="py-16 bg-secondary scroll-mt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-2">
            Get a Free {service.name} Quote
          </h2>
          <p className="text-center text-muted-foreground text-sm mb-8">
            Serving Maryland, DC &amp; Northern Virginia · We respond within 2 hours
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden border border-border shadow-sm bg-card">
              <div className="bg-background px-4 py-2.5 border-b border-border flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-foreground">Real Client Review</p>
              </div>
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/xI602FI_iOU"
                  title="Capital Clean Care client video testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
            <Card className="order-1 lg:order-2">
              <CardContent className="p-6 md:p-8">
                <QuoteForm defaultService={service.slug.replace("-cleaning", "").replace("move-out", "move").replace("post-construction", "post-construction")} compact />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;
