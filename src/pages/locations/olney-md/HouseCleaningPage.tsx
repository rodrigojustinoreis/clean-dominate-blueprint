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

const PAGE_URL = "https://capitalcleancare.com/locations/olney-md/house-cleaning";

const faqs = [
  {
    q: "Do you bring your own cleaning supplies to Olney homes?",
    a: "Yes. We supply all equipment and EPA Safer Choice™ certified eco-friendly products. You don't need to provide anything.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Absolutely. Every cleaner is fully background-screened, bonded, and insured before entering any home in Olney.",
  },
  {
    q: "How much does house cleaning cost in Olney, MD?",
    a: "Pricing depends on home size and frequency. Get your exact quote in 60 seconds — free, no commitment required.",
  },
  {
    q: "Do you offer recurring cleaning in Olney?",
    a: "Yes — weekly, bi-weekly, and monthly plans available with a discounted recurring rate. See our recurring cleaning details at /locations/olney-md/recurring-cleaning.",
  },
  {
    q: "What areas of Olney do you serve?",
    a: "We serve all Olney ZIP codes: 20832 — including Olney Mill, Williamsburg Village, and Norbeck along the Georgia Avenue corridor.",
  },
  {
    q: "What's your cancellation policy?",
    a: "We ask for 24-hour notice. No fees for first-time cancellations.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Olney and the greater Montgomery County area. We live and work in this community.",
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
      "Toilet scrubbed inside and out",
      "Tub and shower cleaned",
      "Sink and vanity wiped",
      "Mirrors cleaned streak-free",
      "Floor mopped",
    ],
  },
  {
    heading: "Bedrooms",
    items: [
      "All surfaces dusted",
      "Floors vacuumed",
      "Beds made (linens if provided)",
      "Furniture dusted",
    ],
  },
  {
    heading: "Living Areas & All Rooms",
    items: [
      "Dusting all surfaces",
      "Vacuuming and mopping floors",
      "Window sills cleaned",
      "Baseboards wiped",
      "Light switches and door handles sanitized",
      "Spot-clean visible marks on walls",
    ],
  },
];

const olneyServices = [
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Silver Spring", slug: "silver-spring-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
];

const OlneyHouseCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "House Cleaning in Olney, MD — Eco-Friendly & Background-Checked",
    description:
      "Professional house cleaning in Olney, MD. Eco-friendly products safe for kids & pets. Background-checked, bonded & insured. Latino-owned. Free quote in 60 seconds.",
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
          { label: "Olney, MD", href: "/locations/olney-md" },
          { label: "House Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Olney, MD",
          "Olney Mill, Olney MD",
          "Williamsburg Village, Olney MD",
          "Norbeck, Olney MD",
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
        serviceName="House Cleaning in Olney, MD"
        description="Professional house cleaning in Olney, MD. Background-checked, bonded team using EPA Safer Choice certified eco-friendly products. Serving Olney Mill, Williamsburg Village, Norbeck, and all 20832 ZIP code areas."
        url={PAGE_URL}
        areaServed={["Olney, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Olney, MD", href: "/locations/olney-md" },
              { label: "House Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Professional House Cleaning in Olney, MD"
        lead="Capital Clean Care brings professional, eco-friendly house cleaning to Olney homes — from Olney Mill to Williamsburg Village. Our background-checked, bonded team uses EPA Safer Choice™ certified products, safe for your kids and pets, and backs every visit with 100% satisfaction: we re-clean if you're not happy."
        cityName="Olney"
        state="MD"
        zipRange="20832"
        heroImage="/images/team/team-mopping-bright-room.jpg"
        heroImageAlt="Capital Clean Care team providing house cleaning service in Olney, MD — Latino-owned, background-checked professionals"
        ctaPrimary="Get a Free Quote in Olney"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Every Olney House Cleaning"
        categories={checklistCategories}
      />

      {/* Why Capital Clean Care */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Olney Homeowners Choose Capital Clean Care
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Olney is a community-oriented suburb along the MD-108/Georgia Ave intersection
              where trust matters. When you invite cleaners into your home near Olney Village
              Center or Brooke Manor, you want a company that treats your property with the
              same care they'd give their own. Capital Clean Care is a Latino-owned and locally
              operated company — we're not a franchise, we're your neighbors in Montgomery County.
            </p>
            <p>
              Every product we use is EPA Safer Choice™ certified. No bleach, no ammonia, no
              synthetic fragrances. Our solutions are powerful enough for a thorough clean yet
              completely non-toxic for children, pets, and sensitive family members. From
              Sparkling Spring to the Norbeck area, homeowners across Olney's 20832 ZIP code
              book us precisely because they can't find this combination elsewhere: professional
              results, eco-safe chemistry, and a team they recognize at the door.
            </p>
            <p>
              Our 100% satisfaction guarantee means we return free if anything isn't right — no
              fine print, no hassle. If your first clean doesn't meet your standard, you call us
              and we fix it. That's the promise every Olney household gets on every visit.
            </p>
          </div>

          {/* How It Works */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Book online or call — free quote in 60 seconds. Same-day slots often available in Olney (20832).",
              "We arrive on time — bonded, insured, background-checked cleaners bring all supplies.",
              "Thorough top-to-bottom clean — consistent checklist, nothing missed, every room.",
              "100% satisfaction guaranteed — if anything isn't right, we return free of charge.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
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
              What Olney Families Are Saying
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
                "Capital Clean Care transformed our home. Thorough, eco-friendly products safe for my kids and pets. We've been using them for months now and the quality never drops."
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
                Serving Olney homes near Olney Village Center and Olney Theatre Center. Share your experience.
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

      {/* Olney Community Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Serving Olney's Neighborhoods from 20832
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Olney's residential mix — established neighborhoods like Olney Mill alongside
              newer developments near the Georgia Avenue corridor — means homes here range
              from classic 1970s colonials to recently built townhomes. Capital Clean Care
              adapts to each property. We know the layouts in Williamsburg Village differ from
              the larger lots in Brooke Manor, and we staff each visit accordingly.
            </p>
            <p>
              Many of our Olney clients combine{" "}
              <Link to="/locations/olney-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning
              </Link>{" "}
              for regular maintenance with an occasional{" "}
              <Link to="/locations/olney-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              for seasonal resets. Others start with a one-time house clean to see if we're the
              right fit. Either way, the 20832 ZIP code is fully covered — same-day slots
              available for urgent bookings. Call (240) 704-2551 or get your free quote online
              in 60 seconds.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            House Cleaning FAQ — Olney, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Olney"
        citySlug="olney-md"
        serviceLabel="House Cleaning"
        serviceSlug="house-cleaning"
        services={olneyServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Olney" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready for a Cleaner Home in Olney?
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether you're near Olney Theatre Center or anywhere across Olney's 20832 ZIP code,
            we're ready to help. Free quote in 60 seconds — or call (240) 704-2551.
            Same-day slots available.
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

export default OlneyHouseCleaningPage;
