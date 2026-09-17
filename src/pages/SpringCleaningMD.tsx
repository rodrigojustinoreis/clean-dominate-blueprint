import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Leaf, Star, Sparkles, Sun, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { FAQSchema, ServiceSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import FAQ from "@/components/FAQ";
import GreenShield5Step from "@/components/GreenShield5Step";
import TrustBadges from "@/components/TrustBadges";

// Consensus lot (2026-09-17): no seasonal campaign and no discount is presented on this page (the site-wide
// new-client offer stays in the global AnnouncementBar until its validity is confirmed commercially).
// Scope statements mirror the deep cleaning service data (src/data/services.ts, slug "deep-cleaning").
const springFaqs = [
  { q: "When should I schedule spring cleaning?", a: "Any time of year. Tell us your preferred dates when you request the quote and we confirm availability; the checklist is the same in every season." },
  { q: "What does spring deep cleaning include?", a: "Spring cleaning is our deep cleaning with attention to what winter leaves behind: interior window sills and tracks, baseboards and crown molding, vent and register covers, ceiling fans and light fixtures, and the inside of the oven, microwave and refrigerator. Accessible furniture is moved to clean behind and underneath; heavy or built-in items may stay in place and we clean around them." },
  { q: "How much does spring cleaning cost in Maryland?", a: "Spring cleaning is quoted as a deep clean, by bedroom and bathroom count and the home's condition. Our published deep cleaning price ranges are on the deep cleaning service page. Request a free quote for your exact price." },
  { q: "Do you use eco-friendly products for spring cleaning?", a: "Yes. We use plant-based products chosen by their labels and follow the label directions and surface guidance. Tell us about pets, allergies or fragrance sensitivities before your visit so the team can plan around them." },
  { q: "Can I book spring cleaning for my DC or Virginia home?", a: "Yes. We serve Maryland, Washington DC, and Northern Virginia. Spring cleaning is available across all our service areas." },
];

const SpringCleaningMD = () => {
  const { seoHelmet } = useSEO({
    // Consensus lot (2026-09-17): explicit, documented exception to the title/meta freeze for this URL only.
    title: "Spring Cleaning in Maryland, DC & VA | Capital Clean Care",
    description: "Spring deep cleaning in Maryland, DC and Northern Virginia. Review the cleaning checklist, confirm your home's needs and request a written quote.",
    canonical: "https://capitalcleancare.com/spring-cleaning-md",
  });

  return (
    <Layout stickyQuoteHref="#spring-quote">
      {seoHelmet}
      <LocalBusinessSchema />
      <ServiceSchema
        serviceName="Spring Deep Cleaning in Maryland"
        description="Spring deep cleaning in Maryland, DC and Northern Virginia. Review the cleaning checklist, confirm your home's needs and request a written quote."
        url="https://capitalcleancare.com/spring-cleaning-md"
      />
      <FAQSchema faqs={springFaqs} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-accent/20 via-background to-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Spring Cleaning MD", href: "/spring-cleaning-md" }]} />
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Spring Cleaning MD" }]} className="mb-6" />
          <div className="flex items-center gap-2 mb-4">
            <Sun className="h-6 w-6 text-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Seasonal Deep Cleaning</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Spring Cleaning in Maryland — Fresh Start for Your Home
          </h1>
          {/* Mobile: CTA row before the intro paragraph so the local CTA sits in the first 360×740 viewport; ≥ sm unchanged order. */}
          <div className="flex flex-col">
            <p className="order-2 sm:order-1 text-muted-foreground text-lg md:text-xl mt-6 sm:mt-0 mb-0 sm:mb-8 leading-relaxed max-w-2xl">
              Shake off winter dust and prepare for spring with our eco-friendly deep cleaning. Available across Maryland, Washington DC, and Northern Virginia.
            </p>
            <div className="order-1 sm:order-2 flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href="#spring-quote">Book Spring Cleaning <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="tel:+12407042551"><Phone className="h-4 w-4 mr-2" /> (240) 704-2551</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-8">What's Included in Spring Cleaning</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Full deep cleaning of every room",
              "Inside oven, microwave & refrigerator",
              "Interior window sill & track cleaning",
              "Baseboard & crown molding scrubbing",
              "Ceiling fan & light fixture dusting",
              "Vent & register cover removal and cleaning",
              "Behind & under accessible furniture (heavy or built-in items may stay in place)",
              "Bathroom grout & tile descaling",
              "HEPA vacuum with slow, deep passes",
              "Pantry, closet shelf & vanity drawer interiors (surface wipe)",
              "Cobweb removal — ceilings & corners",
              "Plant-based products, chosen by their labels",
            ].map((item, i) => (
              <div key={i} className="flex gap-2 items-start">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Heavy or built-in furniture may not be moved; we clean around it. Interior window washing is a separate add-on.
            Anything not on this list, ask when you book and we will say whether it can be quoted. The full 60-item checklist is on our{" "}
            <Link to="/services/deep-cleaning" className="text-accent font-medium hover:underline">deep cleaning service page</Link>.
          </p>
        </div>
      </section>

      {/* Why Spring Clean */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-8">Why Spring Cleaning Matters in Maryland</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Leaf, title: "Pollen Season Prep", desc: "Maryland's spring pollen settles on sills, tracks, blinds and floors. A deep clean removes what has already come inside; it does not stop new pollen from arriving." },
              { icon: Sparkles, title: "Winter Dust Removal", desc: "Months of closed windows and heating leave dust on vents, baseboards, fans and behind accessible furniture — the areas a routine clean skips." },
              { icon: Star, title: "Fresh Start Guarantee", desc: "100% satisfaction guaranteed. If something was missed, contact us within 24 hours and we return to re-clean it at no charge." },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6 text-center">
                  <item.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6">Spring Cleaning Available In</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "Rockville, MD", slug: "rockville-md" },
              { name: "Bethesda, MD", slug: "bethesda-md" },
              { name: "Silver Spring, MD", slug: "silver-spring-md" },
              { name: "Wheaton, MD", slug: "wheaton-md" },
              { name: "Germantown, MD", slug: "germantown-md/house-cleaning" },
              { name: "Arlington, VA", slug: "arlington-va" },
              { name: "Washington, DC", slug: "washington-dc" },
              { name: "Fairfax, VA", slug: "fairfax-va" },
            ].map((c) => (
              <Button key={c.slug} variant="outline" size="sm" asChild>
                <Link to={`/locations/${c.slug}`} aria-label={`Spring cleaning in ${c.name}`}>{c.name}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* GreenShield 5-Step */}
      <GreenShield5Step compact showCTA={false} claims="label-based" />

      {/* Trust Badges */}
      <TrustBadges compact withBackground={false} />

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-8">Spring Cleaning FAQ</h2>
          <FAQ faqs={springFaqs} />
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 md:py-24 scroll-mt-20" id="spring-quote">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold mb-3">Book Your Spring Cleaning</h2>
            <p className="text-muted-foreground">Tell us the size and condition of your home and we'll respond with a personalized deep cleaning quote.</p>
          </div>
          <Card><CardContent className="p-6 md:p-8"><QuoteForm defaultService="deep" /></CardContent></Card>
        </div>
      </section>
    </Layout>
  );
};

export default SpringCleaningMD;
