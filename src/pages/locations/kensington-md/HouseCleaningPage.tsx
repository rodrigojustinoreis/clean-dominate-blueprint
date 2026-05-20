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

const PAGE_URL = "https://capitalcleancare.com/locations/kensington-md/house-cleaning";

const faqs = [
  {
    q: "Do you bring your own cleaning supplies to Kensington homes?",
    a: "Yes. We supply all equipment and EPA Safer Choice™ certified eco-friendly products. You don't need to provide anything — we arrive prepared and leave nothing behind.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Absolutely. Every cleaner is fully background-screened, bonded, and insured before entering any home in Kensington. Your security matters to us.",
  },
  {
    q: "How much does house cleaning cost in Kensington, MD?",
    a: "Pricing depends on home size and frequency. Get your exact quote in 60 seconds — free, no commitment required. Same-day slots are often available in the 20895 ZIP code.",
  },
  {
    q: "Do you offer recurring cleaning in Kensington?",
    a: "Yes — weekly, bi-weekly, and monthly plans are available with a discounted recurring rate. See our recurring cleaning details at /locations/kensington-md/recurring-cleaning.",
  },
  {
    q: "What areas of Kensington do you serve?",
    a: "We serve all of Kensington, MD — ZIP code 20895 — including Kensington Historic District, Rock Creek Hills, and Rock Creek Knolls.",
  },
  {
    q: "What's your cancellation policy?",
    a: "We ask for 24-hour notice. No fees for first-time cancellations. We understand life happens and try to be as flexible as possible.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Kensington and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Wipe countertops and backsplash",
      "Clean appliance exteriors",
      "Scrub sink and fixtures",
      "Clean microwave inside and out",
      "Sweep and mop floor",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Scrub toilet, tub, and shower",
      "Clean sink and mirrors",
      "Wipe all fixtures",
      "Sweep and mop floor",
    ],
  },
  {
    heading: "Bedrooms",
    items: [
      "Dust all surfaces",
      "Vacuum floors and rugs",
      "Make beds (linens if provided)",
      "Wipe door handles and light switches",
    ],
  },
  {
    heading: "Living Areas & All Rooms",
    items: [
      "Dust surfaces and furniture",
      "Vacuum and mop floors",
      "Clean window sills and baseboards",
      "Spot-clean visible marks on doors and walls",
    ],
  },
];

const kensingtonServices = [
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Chevy Chase", slug: "chevy-chase-md", state: "MD" },
  { name: "Wheaton", slug: "wheaton-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
];

const KensingtonHouseCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "House Cleaning in Kensington, MD — Eco-Friendly & Background-Checked",
    description:
      "Professional house cleaning in Kensington, MD. Eco-friendly products safe for kids & pets. Background-checked, bonded & insured. Latino-owned. Free quote in 60 seconds.",
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
          { label: "Kensington, MD", href: "/locations/kensington-md" },
          { label: "House Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Kensington, MD",
          "Kensington Historic District, MD",
          "Rock Creek Hills, Kensington MD",
          "Rock Creek Knolls, Kensington MD",
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
        serviceName="House Cleaning in Kensington, MD"
        description="Professional house cleaning in Kensington, MD. Eco-friendly, EPA Safer Choice certified products. Background-checked, bonded, insured team. 100% satisfaction guaranteed."
        url={PAGE_URL}
        areaServed={["Kensington, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Kensington, MD", href: "/locations/kensington-md" },
              { label: "House Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Professional House Cleaning in Kensington, MD"
        lead="Capital Clean Care brings professional, eco-friendly house cleaning to Kensington homes — from Kensington Historic District to Rock Creek Hills. Our background-checked, bonded team uses EPA Safer Choice™ certified products, safe for your kids and pets, and backs every visit with 100% satisfaction: we re-clean if you're not happy."
        cityName="Kensington"
        state="MD"
        zipRange="20895"
        heroImage="/images/team/team-mopping-bright-room.jpg"
        heroImageAlt="Capital Clean Care team providing house cleaning service in Kensington, MD — Latino-owned, background-checked professionals"
        ctaPrimary="Get a Free Quote in Kensington"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Every Kensington House Cleaning"
        categories={checklistCategories}
      />

      {/* Why Capital Clean Care */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Kensington Homeowners Choose Capital Clean Care
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "Latino-Owned & Locally Operated",
                body: "We serve Kensington's Rock Creek Knolls neighborhood and surrounding areas because this is our community. We're not a franchise — we're your neighbors.",
              },
              {
                title: "Eco-Safe for Families",
                body: "Every product is EPA Safer Choice™ certified. No bleach, no ammonia, no synthetic fragrances. Safe from the very first visit for your children and pets.",
              },
              {
                title: "100% Satisfaction Guaranteed",
                body: "Not happy with something? Call us and we re-clean — free, no fine print. Your satisfaction is our only acceptable outcome.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-card rounded-xl border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Book online or call",
                body: "Free quote in 60 seconds. Same-day slots often available in Kensington (20895).",
              },
              {
                step: "2",
                title: "We arrive on time",
                body: "Bonded, insured, background-checked cleaners bring all supplies. No need to provide a thing.",
              },
              {
                step: "3",
                title: "Thorough top-to-bottom clean",
                body: "Consistent checklist applied to every Kensington home — nothing missed, nothing rushed.",
              },
              {
                step: "4",
                title: "100% satisfaction",
                body: "If anything isn't right, we return free. Your feedback shapes every future visit.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">{item.body}</p>
                </div>
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
              What Kensington Families Are Saying
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
                Serving Kensington homes from Kensington Historic District to Rock Creek Knolls. Share your experience.
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

      {/* Kensington Context */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Serving Kensington's Tight-Knit Residential Community
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Kensington, MD is one of Montgomery County's most charming residential communities.
              Connecticut Avenue runs through its core, linking the Historic Kensington district —
              with its iconic Victorian architecture and Kensington Antique Row — to the quiet
              residential streets of Rock Creek Hills and Rock Creek Knolls. Families here value
              quality, reliability, and knowing exactly who is coming into their home.
            </p>
            <p>
              Capital Clean Care was built for exactly this market. Every team member is
              background-checked, bonded, and insured. We bring our own EPA Safer Choice™
              certified products — no chemical fumes, no residue left behind on surfaces
              where your children play and your pets rest. We serve all of ZIP code 20895
              and regularly clean homes near Capitol View Park and the Rock Creek Trail.
            </p>
            <p>
              Whether you need a one-time clean before a family gathering, want to set up{" "}
              <Link to="/locations/kensington-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning
              </Link>{" "}
              every week or two, or need a thorough{" "}
              <Link to="/locations/kensington-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              after a long stretch between visits, we are ready to help. Call (240) 704-2551 or
              get your free quote online — same-day availability is common in the 20895 area.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            House Cleaning FAQ — Kensington, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Kensington"
        citySlug="kensington-md"
        serviceLabel="House Cleaning"
        serviceSlug="house-cleaning"
        services={kensingtonServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Kensington" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready for a Cleaner Home in Kensington?
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether you're near Kensington Antique Row or in the 20895 ZIP code, we're ready to help.
            Free quote in 60 seconds — or call (240) 704-2551.
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

export default KensingtonHouseCleaningPage;
