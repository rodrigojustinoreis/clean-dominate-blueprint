import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Leaf, Shield, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import ConversionCTA from "@/components/ConversionCTA";
import { Button } from "@/components/ui/button";
import {
  LocalBusinessSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";

const PAGE_URL = "https://capitalcleancare.com/services";

const servicesList = [
  {
    name: "House Cleaning",
    slug: "house-cleaning",
    description:
      "Our signature recurring or one-time house cleaning covers every room — kitchen, bathrooms, bedrooms, living areas — using EPA Safer Choice™ certified, plant-based products. Safe for kids and pets.",
    highlights: ["Counters, sinks, appliance exteriors", "Bathrooms disinfected", "Floors vacuumed & mopped", "Surfaces dusted throughout"],
  },
  {
    name: "Deep Cleaning",
    slug: "deep-cleaning",
    description:
      "Goes beyond the standard clean. Inside appliances, grout lines, baseboards, ceiling fans, window tracks — every corner your routine cleaning skips. Ideal first visit or seasonal reset.",
    highlights: ["Inside oven & microwave", "Grout scrubbed", "Baseboards & window tracks", "Under furniture vacuumed"],
  },
  {
    name: "Recurring Cleaning",
    slug: "recurring-cleaning",
    description:
      "Weekly, bi-weekly, or monthly plans. Same background-checked team every visit. Recurring clients save up to 25% and get priority scheduling. No long-term contracts.",
    highlights: ["Weekly, bi-weekly, monthly", "Same team every visit", "Up to 25% recurring discount", "Easy to pause or reschedule"],
  },
  {
    name: "Move Out / Move In Cleaning",
    slug: "move-out-cleaning",
    description:
      "Deposit-back-level thorough. We hit every area property managers inspect: appliance interiors, cabinet insides, window tracks, tile grout, and bathroom fixtures.",
    highlights: ["Security deposit focus", "Appliance interiors cleaned", "Cabinet insides wiped", "Bathroom descaled"],
  },
  {
    name: "Airbnb & Short-Term Rental",
    slug: "airbnb-cleaning",
    description:
      "Fast turnovers, 5-star results. We restock linens, reset décor, inspect for damage, and leave every guest room guest-ready. Coordinated with your booking calendar.",
    highlights: ["Linen reset & restocking", "Damage inspection", "Calendar-coordinated", "5-star ready in 2–3 hours"],
  },
  {
    name: "Post-Construction Cleaning",
    slug: "post-construction-cleaning",
    description:
      "HEPA-filtered vacuums, microfiber rated for fine particles, and a protocol built around what contractors leave behind — drywall dust, paint overspray, silica, adhesive residue.",
    highlights: ["HEPA vacuum for construction dust", "Window glass detail", "Cabinet & vent interiors", "Final walkthrough included"],
  },
  {
    name: "Office & Commercial Cleaning",
    slug: "office-cleaning",
    description:
      "Professional office cleaning for small-to-mid businesses across the DMV. Workstations, common areas, kitchenettes, and bathrooms — scheduled around your team's hours.",
    highlights: ["Workstations & common areas", "Kitchenette cleaned", "Bathrooms disinfected", "Flexible scheduling"],
  },
  {
    name: "Eco-Friendly Cleaning",
    slug: "eco-friendly-cleaning",
    description:
      "Every product we use is EPA Safer Choice™ certified — non-toxic, plant-based, free from bleach, ammonia, and synthetic fragrance. At no extra charge versus standard cleaning.",
    highlights: ["EPA Safer Choice™ certified", "No bleach or ammonia", "Safe for infants & pets", "No chemical smell after"],
  },
];

const faqs = [
  {
    q: "What areas does Capital Clean Care serve?",
    a: "We serve communities throughout Maryland (Montgomery County, Frederick, Howard, Prince George's), Washington DC, and Northern Virginia (Arlington, Fairfax, McLean, Alexandria). See our locations page for a full city list.",
  },
  {
    q: "How much does house cleaning cost in Maryland?",
    a: "A standard cleaning for a 1–2 bedroom home starts at $140–$180. A 3–4 bedroom home runs $210–$290. Recurring clients save 10–25% off these rates. Get your exact quote in 60 seconds — free, no commitment.",
  },
  {
    q: "Do you bring your own supplies?",
    a: "Yes. We bring all cleaning supplies, equipment, and EPA Safer Choice™ certified products. You don't need to provide anything.",
  },
  {
    q: "Are your cleaners background-checked and insured?",
    a: "Yes. Capital Clean Care is fully licensed and insured. Every team member is background-screened and bonded before entering any home.",
  },
  {
    q: "What's the difference between standard cleaning and deep cleaning?",
    a: "Standard cleaning covers routine maintenance — surfaces, floors, bathrooms, kitchen. Deep cleaning adds appliance interiors, grout scrubbing, baseboards, window tracks, and everywhere a standard clean skips. Most first-time clients start with a deep clean.",
  },
  {
    q: "Do you offer a satisfaction guarantee?",
    a: "Yes — 100% satisfaction guarantee. If you're not happy with any part of the clean, contact us within 24 hours and we return to re-clean at no charge.",
  },
  {
    q: "Can I book a one-time cleaning, or do I have to commit to recurring?",
    a: "Both. We offer one-time cleanings for any service with no commitment required. Recurring plans (weekly, bi-weekly, monthly) get discounted rates and priority scheduling.",
  },
];

const MasterServicesPage = () => {
  const { seoHelmet } = useSEO({
    title: "Cleaning Services in Maryland, DC & Virginia | Capital Clean Care",
    description:
      "House cleaning, deep cleaning, move-out, Airbnb, post-construction, recurring & eco-friendly cleaning across Maryland, DC & Northern Virginia. Background-checked, bonded. Free quote.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumbs ───────────────────────────────── */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            <Leaf className="h-3.5 w-3.5" /> EPA Safer Choice™ Certified · DMV's Eco-Cleaning Experts
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
            Professional Cleaning Services in Maryland, DC & Virginia
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            Capital Clean Care offers eight specialized cleaning services for homes and offices across the DMV.
            Every service uses exclusively EPA Safer Choice™ certified, plant-based products — non-toxic for
            your family and pets. Background-checked, bonded, and insured teams. 100% satisfaction guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <a href="#quote">Get a Free Quote — 60 Seconds <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ─────────────────────────────────── */}
      <section className="py-6 border-b border-border bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              { icon: Shield, label: "Licensed & Insured" },
              { icon: Users, label: "Background-Checked" },
              { icon: Leaf, label: "EPA Safer Choice™" },
              { icon: Star, label: "5.0 ★ Google Rating" },
              { icon: CheckCircle, label: "100% Satisfaction Guarantee" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="h-4 w-4 text-accent flex-shrink-0" aria-hidden="true" />
                <span className="font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────── */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
            Our Cleaning Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {servicesList.map((service) => (
              <div
                key={service.slug}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col"
              >
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <ul className="grid grid-cols-2 gap-1.5 mb-5 flex-1">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  Learn more about {service.name} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Overview ──────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Cleaning Service Pricing in Maryland, DC & Virginia
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Prices depend on home size, service type, and frequency. The ranges below are typical for a one-time clean.
            Recurring clients save up to 25%. Get your exact quote in 60 seconds — free, no commitment.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { size: "1 BR / 1 BA", range: "$140 – $170", note: "Studios & condos" },
              { size: "2 BR / 2 BA", range: "$170 – $220", note: "Townhomes & apartments" },
              { size: "3 BR / 2 BA", range: "$210 – $290", note: "Typical single-family" },
              { size: "4 BR+ / 3 BA+", range: "$280 – $420", note: "Large homes" },
            ].map((p) => (
              <div key={p.size} className="bg-card border border-border rounded-xl p-5 text-center">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{p.size}</p>
                <p className="font-heading font-bold text-2xl text-foreground mb-1">{p.range}</p>
                <p className="text-xs text-muted-foreground">{p.note}</p>
              </div>
            ))}
          </div>
          <div className="p-5 bg-primary/5 border border-primary/20 rounded-xl">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Recurring discounts:</strong> weekly clients save up to 25%, bi-weekly save 15%, monthly save 5%.
                Deep cleaning runs ~1.5× the standard rate. Move-out and post-construction cleaning quoted based on condition.
                All prices include supplies, equipment, and eco-certified products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Areas ─────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Where We Provide Cleaning Services
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            We serve homes and offices across Maryland, Washington DC, and Northern Virginia.
            Our core service area covers all of Montgomery County, MD plus key cities throughout the DMV.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                region: "Maryland",
                cities: ["Rockville", "Bethesda", "Silver Spring", "Gaithersburg", "Germantown", "North Bethesda", "Chevy Chase", "Potomac", "Wheaton", "Kensington", "Olney"],
                link: "/maryland",
              },
              {
                region: "Washington, DC",
                cities: ["Capitol Hill", "Georgetown", "Dupont Circle", "Columbia Heights", "Navy Yard", "Logan Circle", "Shaw", "U Street Corridor"],
                link: "/washington-dc",
              },
              {
                region: "Northern Virginia",
                cities: ["Arlington", "McLean", "Fairfax", "Alexandria", "Falls Church", "Vienna", "Tysons", "Reston"],
                link: "/virginia",
              },
            ].map((area) => (
              <div key={area.region} className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-heading font-bold text-foreground mb-3">{area.region}</h3>
                <ul className="space-y-1 mb-4">
                  {area.cities.map((city) => (
                    <li key={city} className="text-sm text-muted-foreground flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-accent inline-block flex-shrink-0" aria-hidden="true" />
                      {city}
                    </li>
                  ))}
                </ul>
                <Link to={area.link} className="text-sm text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  All {area.region} locations <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Cleaning Services FAQ
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <ConversionCTA cityName="your area" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Get a Free Cleaning Quote in 60 Seconds
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving Maryland, Washington DC, and Northern Virginia. No commitment required.
            Same-day slots available. 100% satisfaction guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get My Free Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Same-day slots available · 100% satisfaction guaranteed · Bonded &amp; Insured
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default MasterServicesPage;
