import { Link } from "react-router-dom";
import { Home as HomeIcon, Sparkles, Truck, Hammer, Repeat, Building2, Leaf, Phone, ArrowRight, CheckCircle, ShieldCheck, BadgeCheck, HelpCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";
import TrustBadges from "@/components/TrustBadges";
import { FAQSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";

// Price ranges mirror the figures already published in src/data/services.ts.
// Every card shows a "starting / typical range" plus a free-quote CTA so no exact
// price is ever a binding commitment — matches the tone of the existing service FAQs.
const pricingTiers = [
  {
    icon: HomeIcon,
    name: "Standard House Cleaning",
    price: "$150–$250",
    unit: "per visit",
    blurb: "Maintenance clean for an already-tidy 2–3 bedroom DMV home — kitchens, bathrooms, floors, dusting.",
    popular: false,
    href: "/services/house-cleaning",
  },
  {
    icon: Repeat,
    name: "Recurring Plan",
    price: "Save 15–20%",
    unit: "vs one-time",
    blurb: "Weekly, bi-weekly, or monthly with a dedicated team. The more often we visit, the lower the price per clean.",
    popular: true,
    href: "/services/recurring-cleaning",
  },
  {
    icon: Sparkles,
    name: "Deep Cleaning",
    price: "$250–$450",
    unit: "typical 3-bed home",
    blurb: "Top-to-bottom reset — inside appliances, baseboards, grout, behind furniture. Recommended every 3–6 months.",
    popular: false,
    href: "/services/deep-cleaning",
  },
  {
    icon: Truck,
    name: "Move In / Move Out",
    price: "$250–$400",
    unit: "typical 2-bed apartment",
    blurb: "Empty-home detail to get your deposit back or start fresh — inside cabinets, oven, fridge, windows.",
    popular: false,
    href: "/services/move-out-cleaning",
  },
  {
    icon: Hammer,
    name: "Post-Construction",
    price: "From $300–$500",
    unit: "single-room renovation",
    blurb: "Specialized multi-phase dust and debris removal after remodeling or construction. Priced by area + condition.",
    popular: false,
    href: "/services/post-construction-cleaning",
  },
  {
    icon: Building2,
    name: "Office Cleaning",
    price: "$150–$250",
    unit: "per visit (small office)",
    blurb: "Reliable commercial cleaning for offices under ~1,000 sq ft. Larger spaces and frequencies quoted on request.",
    popular: false,
    href: "/services/office-cleaning",
  },
];

const priceFactors = [
  { title: "Home size", description: "Square footage, number of bedrooms and bathrooms — more space takes more time." },
  { title: "Condition", description: "How long since the last professional clean. First-time and deep cleans take longer." },
  { title: "Service type", description: "Standard maintenance vs. deep, move-out, or post-construction work." },
  { title: "Frequency", description: "Recurring plans cost less per visit than one-time cleans." },
];

const pricingFaqs = [
  {
    q: "Why don't you list one fixed price?",
    a: "Every home is different. A flat price would mean overcharging smaller homes and undercharging larger ones. The ranges above reflect what most DMV homes pay — and your free quote gives you an exact, no-surprise number in under 2 minutes.",
  },
  {
    q: "Is the quote really free with no obligation?",
    a: "Yes. We give you a transparent, itemized quote by phone or online with zero obligation to book. No hidden fees, no surprise charges on the day of service.",
  },
  {
    q: "Do eco-friendly products cost extra?",
    a: "No. Every clean uses our EPA Safer Choice-certified, plant-based products at no additional charge — it's simply how we clean.",
  },
  {
    q: "Are supplies and equipment included in the price?",
    a: "Yes. We bring all eco-friendly products and professional-grade equipment (HEPA-filtered vacuums, microfiber, etc.) at no extra cost.",
  },
  {
    q: "How can I get the exact price for my home?",
    a: "Call (240) 704-2551 or request a free quote online. Tell us your home size, the service you want, and your ZIP code, and we'll give you an exact price right away. New customers get 15% off the first clean.",
  },
];

const Pricing = () => {
  const { seoHelmet } = useSEO({
    title: "House Cleaning Prices in MD, DC & VA | Capital Clean Care",
    description:
      "Transparent house cleaning prices for the DMV. Standard cleaning from $150, deep cleaning $250–$450, move-out $250–$400. Free, no-obligation quotes. 15% off your first clean.",
    canonical: "https://capitalcleancare.com/pricing",
  });

  return (
    <Layout>
      {seoHelmet}
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Pricing", href: "/pricing" }]} />
      <FAQSchema faqs={pricingFaqs} />

      {/* HERO */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F1F8F1] to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} className="mb-8" />
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              <BadgeCheck className="h-4 w-4" /> Transparent, Upfront Pricing
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              House Cleaning <span className="text-gradient">Prices</span> in the DMV
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Honest price ranges for homes across Maryland, Washington DC &amp; Northern Virginia — no hidden fees.
              Get your exact price with a free, 2-minute quote. <strong className="text-foreground">New customers save 15% on the first clean.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/#quote">Get My Free Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+12407042551"><Phone className="mr-1 h-4 w-4" /> Call (240) 704-2551</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <ScrollReveal key={tier.name}>
                <Card className={`h-full relative ${tier.popular ? "border-accent border-2 shadow-lg" : ""}`}>
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <tier.icon className="h-9 w-9 text-primary mb-3" />
                    <h2 className="font-heading text-xl font-bold mb-1">{tier.name}</h2>
                    <div className="mb-3">
                      <span className="text-3xl font-bold text-primary">{tier.price}</span>
                      <span className="text-sm text-muted-foreground ml-2">{tier.unit}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-6 flex-1">{tier.blurb}</p>
                    <div className="flex flex-col gap-2">
                      <Button asChild className="w-full">
                        <Link to="/#quote">Get Exact Price</Link>
                      </Button>
                      <Button asChild variant="ghost" size="sm" className="w-full">
                        <Link to={tier.href}>See what's included <ArrowRight className="ml-1 h-3 w-3" /></Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            <Leaf className="inline h-4 w-4 text-primary mr-1" />
            All cleans use EPA Safer Choice eco-friendly products at no extra charge. Ranges are typical for DMV homes;
            your exact price depends on the factors below.
          </p>
        </div>
      </section>

      {/* WHAT AFFECTS YOUR PRICE */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold mb-3">What Affects Your Price</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cleaning isn't one-size-fits-all. These four things determine your exact quote.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {priceFactors.map((f) => (
              <ScrollReveal key={f.title}>
                <div className="bg-background rounded-xl p-6 h-full border">
                  <CheckCircle className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <TrustBadges />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              <HelpCircle className="h-4 w-4" /> Pricing Questions
            </span>
            <h2 className="font-heading text-3xl font-bold">Common Pricing Questions</h2>
          </div>
          <FAQ faqs={pricingFaqs} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <ShieldCheck className="h-10 w-10 mx-auto mb-4 opacity-90" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Get Your Exact Price in 2 Minutes</h2>
          <p className="text-lg opacity-90 mb-8">
            Free, no-obligation quote. Licensed, insured &amp; background-checked teams. 15% off your first clean.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/#quote">Get My Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="tel:+12407042551"><Phone className="mr-1 h-4 w-4" /> (240) 704-2551</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
