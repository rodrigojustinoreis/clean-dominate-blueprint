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

const PAGE_URL = "https://capitalcleancare.com/locations/germantown-md/house-cleaning";

const faqs = [
  {
    q: "Do you bring your own cleaning supplies to Germantown homes?",
    a: "Yes. We supply all equipment and EPA Safer Choice™ certified eco-friendly products. You don't need to provide anything — just let us in and we handle the rest.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Absolutely. Every cleaner is fully background-screened, bonded, and insured before entering any home in Germantown.",
  },
  {
    q: "How much does house cleaning cost in Germantown, MD?",
    a: "Pricing depends on home size and frequency. Get your exact quote in 60 seconds — free, no commitment required. We frequently serve ZIPs 20874 and 20876.",
  },
  {
    q: "Do you offer recurring cleaning in Germantown?",
    a: "Yes — weekly, bi-weekly, and monthly plans available with a discounted recurring rate. See our recurring cleaning page for details.",
  },
  {
    q: "What areas of Germantown do you serve?",
    a: "We serve all Germantown ZIP codes: 20874, 20875, and 20876 — including Milestone, Churchill Village, Kingsview, and Seneca Valley.",
  },
  {
    q: "What's your cancellation policy?",
    a: "We ask for 24-hour notice. No fees for first-time cancellations.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Germantown and the greater Montgomery County area. We live and work in this community.",
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
      "Cabinet fronts wiped",
      "Floor swept and mopped",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Toilet disinfected top to bottom",
      "Tub and shower scrubbed",
      "Sink and faucets cleaned",
      "Mirrors streak-free",
      "Floors mopped",
    ],
  },
  {
    heading: "Bedrooms",
    items: [
      "Surfaces dusted",
      "Floors vacuumed",
      "Beds made (linens if provided)",
      "Baseboards wiped",
    ],
  },
  {
    heading: "Living Areas & All Rooms",
    items: [
      "Dusting all surfaces",
      "Vacuuming and mopping",
      "Window sills cleaned",
      "Baseboards wiped",
      "Light switches and door handles sanitized",
      "Spot-clean visible wall marks",
    ],
  },
];

const germantownServices = [
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Gaithersburg", slug: "gaithersburg-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
];

const GermantownHouseCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "House Cleaning in Germantown, MD — Eco-Friendly & Background-Checked",
    description:
      "Professional house cleaning in Germantown, MD. Eco-friendly products safe for kids & pets. Background-checked, bonded & insured. Latino-owned. Free quote in 60 seconds.",
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
          { label: "Germantown, MD", href: "/locations/germantown-md" },
          { label: "House Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Germantown, MD",
          "Milestone, Germantown MD",
          "Churchill Village, Germantown MD",
          "Kingsview, Germantown MD",
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
        serviceName="House Cleaning in Germantown, MD"
        description="Professional, eco-friendly house cleaning in Germantown, MD. Background-checked, bonded, and insured team. EPA Safer Choice™ certified products safe for families and pets. 100% satisfaction guaranteed."
        url={PAGE_URL}
        areaServed={["Germantown, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Germantown, MD", href: "/locations/germantown-md" },
              { label: "House Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Professional House Cleaning in Germantown, MD"
        lead="Capital Clean Care brings professional, eco-friendly house cleaning to Germantown homes — from Milestone to Churchill Village. Our background-checked, bonded team uses EPA Safer Choice™ certified products, safe for your kids and pets, and backs every visit with 100% satisfaction: we re-clean if you're not happy."
        cityName="Germantown"
        state="MD"
        zipRange="20874–20876"
        heroImage="/images/team/team-mopping-bright-room.jpg"
        heroImageAlt="Capital Clean Care team providing house cleaning service in Germantown, MD — Latino-owned, background-checked professionals"
        ctaPrimary="Get a Free Quote in Germantown"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Every Germantown House Cleaning"
        categories={checklistCategories}
      />

      {/* Why Capital Clean Care */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Germantown Homeowners Choose Capital Clean Care
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Latino-Owned & Locally Operated",
                body: "We serve Germantown's Kingsview neighborhood and surrounding areas because this is our community. We're not a franchise — we're your neighbors.",
              },
              {
                title: "Eco-Safe for Families",
                body: "Every product is EPA Safer Choice™ certified. No bleach, no ammonia, no synthetic fragrances. Safe from the first visit for children and pets.",
              },
              {
                title: "100% Satisfaction Guaranteed",
                body: "Not happy with something? Call us and we re-clean — free, no fine print. We stand behind every visit in Germantown's 20874 and 20876 ZIP codes.",
              },
            ].map((card) => (
              <div key={card.title} className="p-5 bg-card border border-border/50 rounded-xl">
                <CheckCircle className="h-5 w-5 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            How It Works
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">1. Book online or call</strong> — Free quote in 60
              seconds. Same-day slots often available in Germantown (20874). Whether you're near
              Milestone Shopping Center or tucked into the Seneca Valley, we'll confirm your
              appointment fast.
            </p>
            <p>
              <strong className="text-foreground">2. We arrive on time</strong> — Bonded, insured,
              background-checked cleaners bring all supplies. You don't need to provide a thing.
            </p>
            <p>
              <strong className="text-foreground">3. Thorough top-to-bottom clean</strong> — Consistent
              checklist, nothing missed. Every room treated with the same attention to detail.
            </p>
            <p>
              <strong className="text-foreground">4. 100% satisfaction</strong> — If anything isn't
              right, we return free. No arguing, no fine print. We want your Germantown home to look
              exactly as it should.
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
              What Germantown Families Are Saying
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
                "Capital Clean Care transformed our home. Thorough, eco-friendly products safe for my
                kids and pets. They even got the baseboards I always forget."
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
                Serving Germantown families from Churchill Village to Kingsview. Share your experience
                with our team.
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

      {/* Germantown Context */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Serving All of Germantown, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Germantown is one of Montgomery County's largest and most diverse communities. From the
              townhomes of Churchill Village to the single-family neighborhoods near Clopper Road, homes
              here range from newer construction in Seneca Valley to well-established properties near
              Germantown Town Center. Capital Clean Care serves all of it — ZIP codes 20874, 20875, and
              20876.
            </p>
            <p>
              Whether you're a busy family near Milestone Center juggling work and school, or a
              homeowner near Great Seneca Creek who simply wants more free time on weekends, our
              professional house cleaning service is built for your schedule. We offer
              <Link
                to="/locations/germantown-md/recurring-cleaning"
                className="text-primary underline mx-1"
              >
                recurring cleaning
              </Link>
              on weekly, bi-weekly, and monthly plans, as well as one-time
              <Link
                to="/locations/germantown-md/deep-cleaning"
                className="text-primary underline mx-1"
              >
                deep cleaning
              </Link>
              for seasonal resets.
            </p>
            <p>
              Our team arrives with all supplies, cleans to a consistent checklist, and checks out only
              when the job is done right. Call (240) 704-2551 or get a quote online. Same-day slots are
              often available across Kingsview Village and the broader Germantown area.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            House Cleaning FAQ — Germantown, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Germantown"
        citySlug="germantown-md"
        serviceLabel="House Cleaning"
        serviceSlug="house-cleaning"
        services={germantownServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Germantown" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready for a Cleaner Home in Germantown?
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether you're near Milestone Shopping Center or in the 20876 ZIP code, we're ready to
            help. Free quote in 60 seconds — or call (240) 704-2551. Same-day slots available across
            Germantown's 20874–20876 ZIP codes.
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

export default GermantownHouseCleaningPage;
