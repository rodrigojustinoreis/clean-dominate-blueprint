import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Leaf, Star, Sparkles, Sun, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { FAQSchema } from "@/components/SchemaMarkup";
import FAQ from "@/components/FAQ";
import VideoTestimonials from "@/components/VideoTestimonials";

const springFaqs = [
  { q: "When should I schedule spring cleaning?", a: "We recommend booking in March or April before the peak pollen season. Early scheduling ensures availability and helps you stay ahead of seasonal allergen buildup." },
  { q: "What does spring deep cleaning include?", a: "Our spring cleaning covers everything in a deep clean plus seasonal extras: window track cleaning, pollen removal from surfaces, baseboard scrubbing, vent cleaning, and detailed attention to areas that accumulate winter dust." },
  { q: "How much does spring cleaning cost in Maryland?", a: "Spring cleaning starts at $150 for 1–2 bedroom homes and varies by size and condition. New clients receive $25 off their first service. Request a free quote for your exact price." },
  { q: "Do you use eco-friendly products for spring cleaning?", a: "Absolutely. All our cleaning products are plant-based, non-toxic, and EPA Safer Choice certified — safe for your family, pets, and Maryland's Chesapeake Bay watershed." },
  { q: "Can I book spring cleaning for my DC or Virginia home?", a: "Yes! We serve Maryland, Washington DC, and Northern Virginia. Spring cleaning is available across all our service areas." },
];

const SpringCleaningMD = () => {
  const { seoHelmet } = useSEO({
    title: "Spring Cleaning Services in Maryland | $25 Off | Capital Clean Care",
    description: "Book your spring deep cleaning in Maryland, DC & VA. Eco-friendly products, background-checked teams. $25 off for new clients. Call (240) 704-2551.",
    canonical: "https://capitalcleancare.com/spring-cleaning-md",
  });

  return (
    <Layout>
      {seoHelmet}
      <FAQSchema faqs={springFaqs} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-accent/20 via-background to-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Spring Cleaning MD" }]} className="mb-6" />
          <div className="flex items-center gap-2 mb-4">
            <Sun className="h-6 w-6 text-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Seasonal Special</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Spring Cleaning in Maryland — Fresh Start for Your Home
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-6 leading-relaxed max-w-2xl">
            Shake off winter dust and prepare for spring with our intensive eco-friendly deep cleaning. Available across Maryland, Washington DC, and Northern Virginia.
          </p>
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-8 inline-block">
            <p className="text-accent font-bold text-lg">🌸 $25 OFF your first spring cleaning — New clients only</p>
            <p className="text-muted-foreground text-sm">Use code <strong>SPRING25</strong> when booking. Valid through May 31, 2026.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="cta" size="lg" asChild>
              <a href="#spring-quote">Book Spring Cleaning <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+12407042551"><Phone className="h-4 w-4 mr-2" /> (240) 704-2551</a>
            </Button>
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
              "Window sill & track pollen removal",
              "Baseboard & crown molding scrubbing",
              "Ceiling fan & light fixture dusting",
              "Vent cover removal & cleaning",
              "Behind & under furniture deep clean",
              "Bathroom grout & tile descaling",
              "HEPA vacuum with slow, deep passes",
              "Cabinet & drawer interior wipe-down",
              "Cobweb removal — ceilings & corners",
              "Eco-friendly products throughout",
            ].map((item, i) => (
              <div key={i} className="flex gap-2 items-start">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Spring Clean */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-8">Why Spring Cleaning Matters in Maryland</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Leaf, title: "Pollen Season Prep", desc: "Maryland's intense spring pollen requires thorough surface cleaning to reduce allergens and improve indoor air quality." },
              { icon: Sparkles, title: "Winter Dust Removal", desc: "Months of closed windows and heating systems deposit dust in hidden areas. Our deep clean reaches every corner." },
              { icon: Star, title: "Fresh Start Guarantee", desc: "100% satisfaction guaranteed. If you're not happy, we'll return within 24 hours to re-clean at no charge." },
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
              { name: "Germantown, MD", slug: "germantown-md" },
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

      {/* Video Testimonials */}
      <VideoTestimonials />

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-8">Spring Cleaning FAQ</h2>
          <FAQ faqs={springFaqs} />
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 md:py-24" id="spring-quote">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold mb-3">Book Your Spring Cleaning</h2>
            <p className="text-muted-foreground">New clients get <strong className="text-accent">$25 off</strong>. Fill out the form and we'll respond with your personalized quote.</p>
          </div>
          <Card><CardContent className="p-6 md:p-8"><QuoteForm /></CardContent></Card>
        </div>
      </section>
    </Layout>
  );
};

export default SpringCleaningMD;
