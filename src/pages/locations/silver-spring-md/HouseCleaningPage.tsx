import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Star, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import ConversionCTA from "@/components/ConversionCTA";
import TrustBadges from "@/components/TrustBadges";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { Button } from "@/components/ui/button";
import {
  LocalBusinessSchema,
  ServiceSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";
import HeroLocation from "@/components/location/HeroLocation";
import ServiceChecklistLocation from "@/components/location/ServiceChecklistLocation";
import InternalLinksGrid from "@/components/location/InternalLinksGrid";

const PAGE_URL = "https://capitalcleancare.com/locations/silver-spring-md/house-cleaning";

const faqs = [
  {
    q: "Do you bring your own cleaning supplies to Silver Spring homes?",
    a: "Yes. We supply all equipment and EPA Safer Choice™ certified eco-friendly products. You don't need to provide anything — just let us in.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Absolutely. Every cleaner is fully background-screened, bonded, and insured before entering any Silver Spring home. Your safety and peace of mind are non-negotiable.",
  },
  {
    q: "How much does house cleaning cost in Silver Spring, MD?",
    a: "Pricing depends on home size and frequency. Get your exact quote in 60 seconds — free, no commitment required. Same-day slots often available in the 20901 area.",
  },
  {
    q: "Do you offer recurring cleaning in Silver Spring?",
    a: "Yes — weekly, bi-weekly, and monthly plans available with a discounted recurring rate. Recurring clients get the same trusted team every visit.",
  },
  {
    q: "What areas of Silver Spring do you serve?",
    a: "We serve all Silver Spring ZIP codes: 20901, 20902, 20903, 20906, and 20910 — including Downtown Silver Spring, Four Corners, Fenton Village, Long Branch, and Woodside.",
  },
  {
    q: "What's your cancellation policy?",
    a: "We ask for 24-hour notice. No fees for first-time cancellations. We're flexible because life happens.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Silver Spring and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Countertops and backsplash wiped down",
      "Appliance exteriors cleaned",
      "Sink scrubbed and sanitized",
      "Microwave interior and exterior",
      "Cabinet fronts wiped",
      "Floor swept and mopped",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Toilet disinfected inside and out",
      "Tub and shower scrubbed",
      "Sink and faucet cleaned",
      "Mirrors polished streak-free",
      "Floor mopped",
      "Trash emptied",
    ],
  },
  {
    heading: "Bedrooms",
    items: [
      "Surfaces dusted",
      "Floors vacuumed",
      "Beds made (linens provided by client)",
      "Nightstands and dressers wiped",
    ],
  },
  {
    heading: "Living Areas & All Rooms",
    items: [
      "All surfaces dusted",
      "Floors vacuumed and mopped",
      "Window sills wiped",
      "Baseboards dusted",
      "Light switches and door handles sanitized",
      "Spot-clean visible wall marks",
    ],
  },
];

const silverSpringServices = [
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Wheaton", slug: "wheaton-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
];

const SilverSpringHouseCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "House Cleaning in Silver Spring, MD — Eco-Friendly & Background-Checked",
    description:
      "Professional house cleaning in Silver Spring, MD. Eco-friendly products safe for kids & pets. Background-checked, bonded & insured. Latino-owned. Free quote in 60 seconds.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-mopping-bright-room.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Silver Spring, MD", href: "/locations/silver-spring-md" },
          { label: "House Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Silver Spring, MD",
          "Downtown Silver Spring, MD",
          "Four Corners, Silver Spring MD",
          "Fenton Village, Silver Spring MD",
          "Long Branch, Silver Spring MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "Sarah M.",
            text: "Capital Clean Care transformed our home. Thorough, eco-friendly products safe for my kids and pets.",
            location: "Bethesda, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="House Cleaning in Silver Spring, MD"
        description="Professional, eco-friendly house cleaning in Silver Spring, MD. Background-checked, bonded team uses EPA Safer Choice™ certified products safe for kids and pets. 100% satisfaction guaranteed."
        url={PAGE_URL}
        areaServed={["Silver Spring, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Silver Spring, MD", href: "/locations/silver-spring-md" },
              { label: "House Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Professional House Cleaning in Silver Spring, MD"
        lead="Capital Clean Care brings professional, eco-friendly house cleaning to Silver Spring homes — from Downtown Silver Spring to Four Corners to Fenton Village. Our background-checked, bonded team uses EPA Safer Choice™ certified products, safe for your kids and pets, and backs every visit with 100% satisfaction: we re-clean if you're not happy."
        cityName="Silver Spring"
        state="MD"
        zipRange="20901–20910"
        heroImage="/images/team/team-mopping-bright-room.jpg"
        heroImageAlt="Capital Clean Care team providing house cleaning service in Silver Spring, MD — Latino-owned, background-checked professionals"
        ctaPrimary="Get a Free Quote in Silver Spring"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Every Silver Spring House Cleaning"
        categories={checklistCategories}
      />

      {/* Why Capital Clean Care */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Silver Spring Homeowners Choose Capital Clean Care
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Silver Spring is one of Montgomery County's most vibrant and diverse communities —
              and it deserves a cleaning company that's part of it. Capital Clean Care is
              Latino-owned and locally operated. We serve the Woodside neighborhood, Long Branch,
              Sligo Creek area, and all Silver Spring ZIP codes because this is our community,
              not just a service area on a map. We're not a franchise; we're your neighbors.
            </p>
            <p>
              Every product we use is EPA Safer Choice™ certified. That means no bleach, no
              ammonia, no synthetic fragrances that linger in your air. Whether you have young
              children playing on the floor or pets that spend their days inside, our cleaning
              is safe from the first visit. And every team member who enters your Silver Spring
              home is fully background-screened, bonded, and insured — because trust matters
              more than any cleaning checklist.
            </p>
          </div>

          {/* How It Works */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Book online or call (240) 704-2551 — free quote in 60 seconds, same-day slots often available in 20901",
              "We arrive on time — bonded, insured, background-checked cleaners bring all supplies",
              "Thorough top-to-bottom clean using our consistent checklist — nothing skipped",
              "100% satisfaction guarantee — if anything isn't right, we return free, no fine print",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-accent/5 rounded-xl border border-accent/20">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Want a consistent routine instead of a one-time clean?{" "}
              <Link to="/locations/silver-spring-md/recurring-cleaning" className="text-primary underline font-medium">
                See our recurring cleaning plans
              </Link>{" "}
              for Silver Spring — weekly, bi-weekly, and monthly with the same trusted team every visit.
              If your home needs a deeper reset first, our{" "}
              <Link to="/locations/silver-spring-md/deep-cleaning" className="text-primary underline font-medium">
                deep cleaning service
              </Link>{" "}
              covers inside appliances, grout lines, ceiling fans, and everywhere a standard clean skips.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              <Star className="h-3.5 w-3.5 fill-accent" aria-hidden="true" /> Client Reviews
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              What Silver Spring Families Are Saying
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-xl p-5">
              <div role="img" aria-label="5 out of 5 stars" className="flex items-center gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-foreground italic mb-3 leading-relaxed">
                "Capital Clean Care transformed our home. Thorough, eco-friendly products safe for my kids and pets."
              </p>
              <p className="text-sm font-semibold text-foreground">Sarah M.</p>
              <p className="text-xs text-muted-foreground">Bethesda, MD</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving Silver Spring families from Downtown Silver Spring to the Silver Spring Town Center area.
                Share your experience with your neighbors.
              </p>
              <a
                href="https://g.page/r/capitalcleancare/review"
                className="text-sm text-primary underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leave a Google Review →
              </a>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            <span className="font-semibold text-foreground">5.0 ★</span> average rating · 47 reviews on Google
          </p>
        </div>
      </section>

      {/* Serving Silver Spring */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Serving All Silver Spring Neighborhoods
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Silver Spring's residential landscape is as diverse as its population. From the
              newer condos and apartments near the AFI Silver Theatre and Silver Spring Town Center
              to single-family homes in the Four Corners and Woodside neighborhoods, we clean them
              all. The Long Branch corridor, Fenton Village, and the Sligo Creek area each have
              their own character, and we've worked in homes throughout these communities.
            </p>
            <p>
              We serve all Silver Spring ZIP codes: 20901, 20902, 20903, 20906, and 20910.
              Whether you're in a studio apartment near downtown or a four-bedroom home closer
              to the Wheaton Plaza area, the same quality applies. Our team arrives with
              everything needed and leaves your home genuinely clean — not just visually tidy.
            </p>
            <p>
              Many Silver Spring homeowners also book our{" "}
              <Link to="/locations/silver-spring-md/move-out-cleaning" className="text-primary underline font-medium">
                move out cleaning
              </Link>{" "}
              when transitioning between properties, or our{" "}
              <Link to="/locations/silver-spring-md/airbnb-cleaning" className="text-primary underline font-medium">
                Airbnb cleaning
              </Link>{" "}
              for short-term rental properties near the transit hub. For offices and commercial
              spaces, see our{" "}
              <Link to="/locations/silver-spring-md/office-cleaning" className="text-primary underline font-medium">
                office cleaning in Silver Spring
              </Link>.
              Call (240) 704-2551 to discuss any cleaning need in Silver Spring.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            House Cleaning FAQ — Silver Spring, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Silver Spring"
        citySlug="silver-spring-md"
        serviceLabel="House Cleaning"
        serviceSlug="house-cleaning"
        services={silverSpringServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Silver Spring" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready for a Cleaner Home in Silver Spring?
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether you're near Silver Spring Town Center or in the 20902 ZIP code, we're ready
            to help. Free quote in 60 seconds — no commitment required.
            Call (240) 704-2551 or book online.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get My Free House Cleaning Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            No commitment · Same-day slots available · 100% satisfaction guaranteed
          </p>
        </div>
      </section>

      <StickyMobileCTA />
    </Layout>
  );
};

export default SilverSpringHouseCleaningPage;
