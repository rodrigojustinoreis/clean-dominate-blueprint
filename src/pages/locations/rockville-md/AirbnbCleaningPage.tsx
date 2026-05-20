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

const PAGE_URL = "https://capitalcleancare.com/locations/rockville-md/airbnb-cleaning";

const faqs = [
  {
    q: "How quickly can you turn over my Rockville Airbnb between guests?",
    a: "Most 1–2 bedroom Rockville properties can be turned over in 2–3 hours. Larger homes or properties with extra bedrooms may take longer. We can work within tight same-day check-in windows with advance notice.",
  },
  {
    q: "Can you manage my cleaning schedule automatically?",
    a: "Yes — share your Airbnb calendar with us and we'll schedule turnovers around each checkout. No need to manually request each time. We coordinate directly with your booking window.",
  },
  {
    q: "How much does Airbnb turnover cleaning cost in Rockville?",
    a: "Pricing depends on property size and scope. We offer competitive, transparent rates for Rockville hosts across ZIPs 20850–20853. Get your exact quote in 60 seconds — no contracts required.",
  },
  {
    q: "What if a guest leaves the property extra dirty?",
    a: "We'll take care of it and document the condition with photos. You'll be charged only for the additional time required. Most turnovers stay within normal scope.",
  },
  {
    q: "Are you familiar with Airbnb hosting standards in Rockville?",
    a: "Yes. Our team cleans to standard Airbnb hosting guidelines and works with multiple hosts across Rockville (ZIPs 20850–20853), Gaithersburg, and Montgomery County. We understand what guests expect.",
  },
  {
    q: "Do you also clean VRBO and other short-term rental platforms?",
    a: "Absolutely. We clean for any short-term rental platform — Airbnb, VRBO, Booking.com, direct bookings. The service is the same regardless of platform.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated company based in the Rockville area. We're invested in this community and in your property's reputation. Your guests' experience reflects on us too.",
  },
];

const checklistCategories = [
  {
    heading: "Every Turnover",
    items: [
      "Strip and remake all beds with fresh linens",
      "Replace towels, hand towels, washcloths",
      "Sanitize all bathroom surfaces",
      "Kitchen: dishes, surfaces, trash removed",
      "Restock essentials (if provided by host)",
      "Sweep, vacuum, and mop all floors",
    ],
  },
  {
    heading: "Deep-Reset (Periodic)",
    items: [
      "Inside appliances (oven, microwave, fridge)",
      "Scrub grout and baseboards",
      "Window tracks and sills",
      "Closet interiors checked",
    ],
  },
  {
    heading: "Extras Available",
    items: [
      "Laundry service (wash and dry)",
      "Restock consumables (soap, TP, coffee)",
      "Pre-check-in quality inspection",
      "Property condition photo report",
    ],
  },
  {
    heading: "Standards",
    items: [
      "Wipe fingerprints from screens and mirrors",
      "Check and replace missing items",
      "Final walkthrough before guest arrival",
      "Host confirmation message sent",
    ],
  },
];

const rockvilleServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "Gaithersburg", slug: "gaithersburg-md", state: "MD" },
  { name: "Washington, DC", slug: "washington-dc", state: "DC" },
];

const RockvilleAirbnbCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Airbnb Cleaning in Rockville, MD — Fast Turnovers, 5-Star Results",
    description:
      "Airbnb & short-term rental cleaning in Rockville, MD. Fast turnovers between guests, hotel-standard results, flexible scheduling. Capital Clean Care — trusted by local hosts. Free quote.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-making-bed.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Rockville, MD", href: "/locations/rockville-md" },
          { label: "Airbnb Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Rockville, MD",
          "King Farm, Rockville MD",
          "Twinbrook, Rockville MD",
          "Fallsgrove, Rockville MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "Amanda F.",
            text: "My Airbnb rating went from 4.6 to 5.0 stars after switching to Capital Clean Care. Detail is incredible.",
            location: "Bethesda, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Airbnb & Short-Term Rental Cleaning in Rockville, MD"
        description="Airbnb and short-term rental turnover cleaning in Rockville, MD. Hotel-standard results, flexible scheduling around your booking calendar. Background-checked, bonded, insured. Free quote."
        url={PAGE_URL}
        areaServed={["Rockville, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Rockville, MD", href: "/locations/rockville-md" },
              { label: "Airbnb Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Airbnb & Short-Term Rental Cleaning in Rockville, MD"
        lead="Protect your Rockville Airbnb rating with professional turnover cleanings between every guest. Capital Clean Care — a Latino-owned, locally operated company — delivers hotel-standard results across Rockville's short-term rental market, from properties near Rockville Town Center to homes along Rockville Pike. Flexible scheduling, 100% satisfaction guaranteed."
        cityName="Rockville"
        state="MD"
        zipRange="20850–20853"
        heroImage="/images/team/team-making-bed.jpg"
        heroImageAlt="Capital Clean Care Airbnb turnover cleaning team preparing a short-term rental in Rockville, MD — hotel-standard results"
        ctaPrimary="Set Up Airbnb Turnover Cleaning"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="Our Airbnb Turnover Checklist — Rockville Properties"
        categories={checklistCategories}
      />

      {/* Why Choose */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Why Rockville Airbnb Hosts Choose Capital Clean Care
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Rating Protection",
                body: "One bad cleaning review can drop your average. Our consistent, bonded team means guests find your Rockville property exactly as listed — every time. We re-clean if anything falls short.",
              },
              {
                title: "Flexible Scheduling",
                body: "We work around your checkout and check-in window throughout Rockville's 20850, 20851, 20852, and 20853 ZIP codes. Same-day turnovers available when needed.",
              },
              {
                title: "Locally Owned & Accountable",
                body: "Capital Clean Care is Latino-owned and operated in the Rockville area. We're not a franchise — we're your neighbors, and your Airbnb reputation matters to us personally.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                <CheckCircle className="h-6 w-6 text-accent mb-3" aria-hidden="true" />
                <h3 className="font-heading font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            How Airbnb Cleaning Works With Us
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Share your calendar",
                body: "We coordinate directly around your Airbnb booking schedule. Share your calendar once — we handle the rest.",
              },
              {
                step: "2",
                title: "We arrive at checkout time",
                body: "Fast, professional turnover in your check-in window, anywhere in Rockville from Twinbrook to Fallsgrove to King Farm. We work within your timing.",
              },
              {
                step: "3",
                title: "Hotel-standard clean",
                body: "Linens remade, bathrooms sanitized, kitchen reset, restock done (if applicable). Every surface checked. Your property is guest-ready.",
              },
              {
                step: "4",
                title: "You get confirmation — guest arrives to 5 stars",
                body: "We send a confirmation when the turnover is complete. Your next guest checks in to a spotless, photo-ready property.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-background">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <span className="text-primary font-bold text-sm">{step}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              <Star className="h-3.5 w-3.5 fill-accent" aria-hidden="true" /> Host Reviews
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Rockville Hosts Trust Capital Clean Care
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
                "My Airbnb rating went from 4.6 to 5.0 stars after switching to Capital Clean Care. Detail is incredible."
              </p>
              <p className="text-sm font-semibold text-foreground">Amanda F.</p>
              <p className="text-xs text-muted-foreground">Bethesda, MD</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving Rockville short-term rentals near Montgomery College, RedGate Park, and Rockville Pike. Share your hosting experience.
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

      {/* Rockville Airbnb Market */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            The Rockville Short-Term Rental Market — What Hosts Need to Know
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Rockville's location — minutes from the NIH campus in 20852, adjacent to the
              Rockville Metro station, and central to Montgomery County's major government and
              biotech employers — makes it a steady short-term rental market year-round. Guests
              booking in Rockville frequently include NIH researchers, government contractors,
              visiting medical professionals, and families relocating to the area. These guests
              have high expectations: hotel-level cleanliness at a residential price point. A
              missed bathroom detail or a lingering odor from the previous guest is the
              difference between a 5-star and a 4-star review, and that gap compounds over
              dozens of stays and directly affects your search ranking.
            </p>
            <p>
              Capital Clean Care's Airbnb turnover service is built specifically for this
              market. We coordinate directly with your booking calendar — share it once and
              we handle scheduling every turnover automatically. We work within tight same-day
              checkout-to-check-in windows common across Rockville's rental season, and we
              understand which Airbnb cleaning signals the platform monitors when calculating
              Superhost eligibility and listing rank: cleanliness score, response time to
              issues, and zero guest complaints.
            </p>
            <p>
              Beyond the cleaning itself, hosts in King Farm, Twinbrook, and along the
              Rockville Pike corridor rely on us for the full turnover protocol: fresh linen
              changes, consumable restocks, photo condition documentation after each visit,
              and a host confirmation message once the property is guest-ready. Whether you
              manage one unit or several across Rockville's ZIP codes 20850–20853, we become
              the operational backbone of your rental business — so you're running a hosting
              business, not a cleaning coordination service.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Airbnb Cleaning FAQ — Rockville, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Rockville"
        citySlug="rockville-md"
        serviceLabel="Airbnb Cleaning"
        serviceSlug="airbnb-cleaning"
        services={rockvilleServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Rockville" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Set Up Automatic Airbnb Turnovers in Rockville
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving all Rockville short-term rentals — near Montgomery College, RedGate Park,
            Rockville Pike, and across ZIPs 20850, 20851, 20852, and 20853. Get your free
            quote in 60 seconds and stop worrying about turnovers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get My Airbnb Cleaning Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Flexible scheduling · Same-day turnovers · 100% satisfaction guaranteed
          </p>
        </div>
      </section>

      <StickyMobileCTA />
    </Layout>
  );
};

export default RockvilleAirbnbCleaningPage;
