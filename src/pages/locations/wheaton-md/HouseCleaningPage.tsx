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

const PAGE_URL = "https://capitalcleancare.com/locations/wheaton-md/house-cleaning";

const faqs = [
  {
    q: "Do you bring your own cleaning supplies to Wheaton homes?",
    a: "Yes. We supply all equipment and EPA Safer Choice™ certified eco-friendly products. You don't need to provide anything.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Absolutely. Every cleaner is fully background-screened, bonded, and insured before entering any home in Wheaton.",
  },
  {
    q: "How much does house cleaning cost in Wheaton, MD?",
    a: "Pricing depends on home size and frequency. Get your exact quote in 60 seconds — free, no commitment required.",
  },
  {
    q: "Do you offer recurring cleaning in Wheaton?",
    a: "Yes — weekly, bi-weekly, and monthly plans available with a discounted recurring rate. See our recurring cleaning page for details.",
  },
  {
    q: "What areas of Wheaton do you serve?",
    a: "We serve all Wheaton ZIP codes: 20902 and 20906 — including Glenmont, Kemp Mill, and Forest Glen.",
  },
  {
    q: "What's your cancellation policy?",
    a: "We ask for 24-hour notice. No fees for first-time cancellations.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Wheaton and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Countertops wiped and sanitized",
      "Appliance exteriors cleaned",
      "Sink scrubbed and polished",
      "Microwave interior cleaned",
      "Floor swept and mopped",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Toilet cleaned inside and out",
      "Tub and shower scrubbed",
      "Sink and faucet cleaned",
      "Mirrors polished streak-free",
      "Floors swept and mopped",
    ],
  },
  {
    heading: "Bedrooms",
    items: [
      "All surfaces dusted",
      "Floors vacuumed",
      "Beds made (linens provided)",
      "Mirrors and glass cleaned",
    ],
  },
  {
    heading: "Living Areas & All Rooms",
    items: [
      "Surfaces dusted top to bottom",
      "Floors vacuumed and mopped",
      "Window sills cleaned",
      "Baseboards wiped",
      "Light switches and door handles sanitized",
      "Spot-clean visible wall marks",
    ],
  },
];

const wheatonServices = [
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Silver Spring", slug: "silver-spring-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
];

const WheatonHouseCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "House Cleaning in Wheaton, MD — Eco-Friendly & Background-Checked",
    description:
      "Professional house cleaning in Wheaton, MD. Eco-friendly products safe for kids & pets. Background-checked, bonded & insured. Latino-owned. Free quote in 60 seconds.",
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
          { label: "Wheaton, MD", href: "/locations/wheaton-md" },
          { label: "House Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Wheaton, MD",
          "Glenmont, Wheaton MD",
          "Kemp Mill, Wheaton MD",
          "Forest Glen, Wheaton MD",
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
        serviceName="House Cleaning in Wheaton, MD"
        description="Professional house cleaning in Wheaton, MD. EPA Safer Choice™ certified eco-friendly products. Background-checked, bonded team. Serving Glenmont, Kemp Mill, Forest Glen, and all Wheaton ZIP codes."
        url={PAGE_URL}
        areaServed={["Wheaton, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Wheaton, MD", href: "/locations/wheaton-md" },
              { label: "House Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Professional House Cleaning in Wheaton, MD"
        lead="Capital Clean Care brings professional, eco-friendly house cleaning to Wheaton homes — from Glenmont to Kemp Mill. Our background-checked, bonded team uses EPA Safer Choice™ certified products, safe for your kids and pets, and backs every visit with 100% satisfaction: we re-clean if you're not happy."
        cityName="Wheaton"
        state="MD"
        zipRange="20902"
        heroImage="/images/team/team-mopping-bright-room.jpg"
        heroImageAlt="Capital Clean Care team providing house cleaning service in Wheaton, MD — Latino-owned, background-checked professionals"
        ctaPrimary="Get a Free Quote in Wheaton"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Every Wheaton House Cleaning"
        categories={checklistCategories}
      />

      {/* Why Capital Clean Care */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Wheaton Homeowners Choose Capital Clean Care
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Latino-Owned & Locally Operated",
                body: "We serve Wheaton's Forest Glen neighborhood and surrounding areas because this is our community. We're not a franchise — we're your neighbors.",
              },
              {
                title: "Eco-Safe for Families",
                body: "Every product is EPA Safer Choice™ certified. No bleach, no ammonia, no synthetic fragrances. Safe from the first visit for children and pets.",
              },
              {
                title: "100% Satisfaction Guaranteed",
                body: "Not happy with something? Call us and we re-clean — free, no fine print. That's our promise to every Wheaton household we serve.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-card rounded-xl border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Book online or call — free quote in 60 seconds. Same-day slots often available in Wheaton (20902).",
              "We arrive on time — bonded, insured, background-checked cleaners bring all supplies.",
              "Thorough top-to-bottom clean — consistent checklist, nothing missed.",
              "100% satisfaction — if anything isn't right, we return free of charge.",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-sm text-muted-foreground leading-relaxed">{step}</span>
              </div>
            ))}
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
              What Wheaton Families Are Saying
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
                Serving Wheaton homes from Glenmont to Kemp Mill and Forest Glen. Share your experience.
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

      {/* Serving Wheaton */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Proudly Serving Wheaton, MD Households
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Wheaton is a diverse, vibrant community in the heart of Montgomery County — and it's
              home to Capital Clean Care's clients across ZIP code 20902. From busy families near
              Westfield Wheaton Mall to homeowners along the Georgia Avenue corridor, we understand
              the varied needs of houses in this area. Older homes in Kemp Mill often have finishes
              that require gentle, non-abrasive eco-certified products — exactly what we use on every
              visit.
            </p>
            <p>
              Whether your home is a classic split-level in Forest Glen, a townhome near the Glenmont
              Metro, or a single-family house in the Arcola neighborhood, our consistent top-to-bottom
              checklist ensures nothing gets skipped. We also offer{" "}
              <Link to="/locations/wheaton-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning
              </Link>{" "}
              for Wheaton households who want weekly or bi-weekly service with the same trusted team.
            </p>
            <p>
              If your home needs more than a standard clean — perhaps after a long period between
              professional visits — our{" "}
              <Link to="/locations/wheaton-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              service covers inside appliances, grout lines, baseboards, ceiling fans, and every
              surface a routine cleaning skips. Call (240) 704-2551 to discuss your home's needs
              with our Wheaton team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            House Cleaning FAQ — Wheaton, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Wheaton"
        citySlug="wheaton-md"
        serviceLabel="House Cleaning"
        serviceSlug="house-cleaning"
        services={wheatonServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Wheaton" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready for a Cleaner Home in Wheaton?
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether you're near Westfield Wheaton Mall or in the 20902 ZIP code, we're ready to
            help. Free quote in 60 seconds — or call (240) 704-2551 to schedule today.
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

export default WheatonHouseCleaningPage;
