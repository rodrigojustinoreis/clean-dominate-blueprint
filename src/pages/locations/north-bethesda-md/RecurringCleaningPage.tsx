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

// ── Page constants ────────────────────────────────────────────────────────────

const PAGE_URL = "https://capitalcleancare.com/locations/north-bethesda-md/recurring-cleaning";

const faqs = [
  {
    q: "What's the difference between weekly and bi-weekly cleaning in North Bethesda?",
    a: "Weekly is ideal for larger homes, families with kids or pets in North Bethesda. Bi-weekly is our most popular option — a well-maintained home without maximum cost.",
  },
  {
    q: "Do I get the same cleaners every visit?",
    a: "Yes. A consistent, bonded and insured team is assigned to your North Bethesda home. No strangers each week — the same trusted crew who knows your preferences.",
  },
  {
    q: "How much does recurring cleaning cost in North Bethesda?",
    a: "Recurring clients receive better rates than one-time bookings. Get your exact quote in 60 seconds — use the form below or call (240) 704-2551. No long-term contracts.",
  },
  {
    q: "Can I skip or pause my recurring service?",
    a: "Yes — 24-hour notice to skip, pause, or modify. No lock-in contracts. Flexible for busy North Bethesda households.",
  },
  {
    q: "Do you use eco-friendly products for recurring cleaning?",
    a: "Yes, always. EPA Safer Choice™ certified — non-toxic, plant-based, safe for children and pets. We serve all North Bethesda ZIPs: 20852 and 20895.",
  },
  {
    q: "Can I start with a one-time clean before committing?",
    a: "Absolutely. Many clients try a house cleaning or deep cleaning first, then convert to recurring service. We make it easy to get started.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving North Bethesda and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Countertops and sink cleaned",
      "Appliance exteriors wiped",
      "Microwave cleaned",
      "Floors swept and mopped",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Toilet sanitized",
      "Shower and tub scrubbed",
      "Sink and mirrors polished",
      "Floors mopped",
    ],
  },
  {
    heading: "Bedrooms",
    items: [
      "All surfaces dusted",
      "Floors vacuumed",
      "Beds made (linens if provided)",
    ],
  },
  {
    heading: "Living Areas",
    items: [
      "Surfaces dusted",
      "Floors vacuumed and mopped",
      "Window sills wiped",
    ],
  },
  {
    heading: "All Rooms",
    items: [
      "Baseboards dusted",
      "Light switches and door handles disinfected",
      "Trash emptied and relined",
    ],
  },
  {
    heading: "Add-On Rotation (Every nth Visit)",
    items: [
      "Inside fridge",
      "Inside oven",
      "Inside cabinets",
      "Laundry (on request)",
    ],
  },
];

const northBethesdaServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const NorthBethesdaRecurringCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Recurring House Cleaning in North Bethesda, MD",
    description:
      "Weekly and bi-weekly house cleaning in North Bethesda, MD. Same trusted team, eco-friendly products, 100% satisfaction guaranteed. Build the routine. Free quote in 60 seconds.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {/* ── SEO ───────────────────────────────────────────── */}
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-two-living-room.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      {/* ── Schema ────────────────────────────────────────── */}
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "North Bethesda, MD", href: "/locations/north-bethesda-md" },
          { label: "Recurring Cleaning", href: "/locations/north-bethesda-md/recurring-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "North Bethesda, MD",
          "White Flint, North Bethesda MD",
          "Luxmanor, North Bethesda MD",
          "Garrett Park, MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "James T.",
            text: "Best investment we've made. Coming home to a clean house every week is amazing.",
            location: "North Bethesda, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Recurring House Cleaning in North Bethesda, MD"
        description="Weekly and bi-weekly recurring house cleaning in North Bethesda, MD. Same background-checked team every visit. EPA Safer Choice certified products. No long-term contracts."
        url={PAGE_URL}
        areaServed={["North Bethesda, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumbs ───────────────────────────────────── */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "North Bethesda, MD", href: "/locations/north-bethesda-md" },
              { label: "Recurring Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Recurring House Cleaning in North Bethesda, MD"
        lead="Stop cleaning on weekends. Capital Clean Care's recurring service comes to your North Bethesda home — from White Flint to Luxmanor to Garrett Park — weekly or bi-weekly, with the same trusted, background-checked team every single visit. Eco-friendly products, 100% satisfaction guaranteed."
        cityName="North Bethesda"
        state="MD"
        zipRange="20852"
        heroImage="/images/team/team-two-living-room.jpg"
        heroImageAlt="Capital Clean Care recurring house cleaning in North Bethesda, MD — same trusted team, every visit"
        ctaPrimary="Set Up Recurring Cleaning in North Bethesda"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Every North Bethesda Recurring Clean"
        categories={checklistCategories}
      />

      {/* ── Schedule Plans ────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Choose Your Recurring Cleaning Schedule
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-muted font-semibold text-foreground rounded-tl-lg w-1/4"></th>
                  <th className="text-left p-3 bg-primary/10 font-semibold text-foreground">Weekly</th>
                  <th className="text-left p-3 bg-accent/10 font-semibold text-foreground">Bi-Weekly</th>
                  <th className="text-left p-3 bg-muted font-semibold text-foreground rounded-tr-lg">Monthly</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Best for", "Busy families, large homes, pets", "Most North Bethesda households", "Lighter maintenance"],
                  ["Discount", "Largest recurring discount", "Standard recurring discount", "Minimal discount"],
                  ["Result", "Always guest-ready", "Clean between uses", "Seasonal freshness"],
                ].map(([label, weekly, biweekly, monthly], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="p-3 font-semibold text-foreground border-t border-border">{label}</td>
                    <td className="p-3 text-muted-foreground border-t border-border">{weekly}</td>
                    <td className="p-3 text-muted-foreground border-t border-border">{biweekly}</td>
                    <td className="p-3 text-muted-foreground border-t border-border">{monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Why Recurring ─────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Why Recurring Cleaning Is Better Than One-Time
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Cumulative Cleanliness",
                body: "Regular maintenance prevents buildup. Your North Bethesda home actually gets cleaner over time — not just clean for one day.",
              },
              {
                title: "Same Team Every Time",
                body: "The same background-checked, bonded crew comes every visit — whether you're in ZIP 20852 near Pike & Rose or in the 20895 area near Luxmanor. They know your home, your preferences, your standards. No retraining.",
              },
              {
                title: "Better Rates Than One-Time",
                body: "Recurring clients get better pricing than one-time bookings. More clean, better value. Get your exact quote in 60 seconds.",
              },
              {
                title: "Priority Scheduling",
                body: "First access to preferred time slots across North Bethesda. If you ever need to reschedule, priority rescheduling is available.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <CheckCircle className="h-6 w-6 text-accent mb-3" aria-hidden="true" />
                <h3 className="font-heading font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Get Started ────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Getting Started With Recurring Cleaning in North Bethesda
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Deep baseline first",
                body: "New recurring clients start with a deeper initial clean to establish a spotless baseline for your North Bethesda home — in White Flint, Garrett Park, or anywhere in ZIP 20852.",
              },
              {
                step: "2",
                title: "Consistent team assigned",
                body: "The same dedicated, bonded team is assigned to your home every visit. No surprises, no strangers — the same people who know your floors, your furniture, your preferences.",
              },
              {
                step: "3",
                title: "Set your schedule",
                body: "Weekly, bi-weekly, or monthly. Easy to adjust as your life changes. 24-hour notice to skip or pause — no lock-in contracts.",
              },
              {
                step: "4",
                title: "Ongoing care, guaranteed",
                body: "100% satisfaction guaranteed on every recurring visit — we re-clean if you're not happy. That's true for your first visit and your fiftieth.",
              },
            ].map(({ step, title, body }) => (
              <div
                key={step}
                className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-background"
              >
                <div
                  className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
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

      {/* ── Social Proof ──────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              <Star className="h-3.5 w-3.5 fill-accent" aria-hidden="true" /> Client Reviews
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              What North Bethesda Families Say About Recurring Cleaning
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
                "Best investment we've made. Coming home to a clean house every week is amazing. Same team every time — they know exactly what we need."
              </p>
              <p className="text-sm font-semibold text-foreground">James T.</p>
              <p className="text-xs text-muted-foreground">North Bethesda, MD</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving recurring clients near Strathmore Music Center and throughout North Bethesda's
                20852–20895 ZIP codes. An ongoing client? Share your experience.
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

      {/* ── Service Area ──────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Recurring Cleaning Throughout North Bethesda, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care's recurring cleaning service covers all of North Bethesda — ZIP codes 20852
              and 20895. Whether your home is in the White Flint neighborhood near the Metro, in the Luxmanor
              community, or in the Garrett Park Estates area, we assign a consistent, background-checked team
              to your home on your chosen schedule.
            </p>
            <p>
              North Bethesda families lead busy lives — commuting via the White Flint Metro, working near
              Pike & Rose, raising children, managing packed calendars. Our recurring cleaning service is
              designed to eliminate the mental overhead of home maintenance. You shouldn't spend your weekends
              cleaning; that's what we're here for.
            </p>
            <p>
              As a Latino-owned Montgomery County business, we build genuine relationships with our recurring
              clients. Your team learns your home, your preferences, and your standards — and delivers them
              consistently, visit after visit. No contracts, no lock-ins — just reliable, professional cleaning
              you can count on. Call (240) 704-2551 or use the form below to get started.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Recurring Cleaning FAQ — North Bethesda, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="North Bethesda"
        citySlug="north-bethesda-md"
        serviceLabel="Recurring Cleaning"
        serviceSlug="recurring-cleaning"
        services={northBethesdaServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="North Bethesda" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Start Your Recurring Clean in North Bethesda Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether you're near Strathmore Music Center or anywhere across North Bethesda's 20852–20895
            ZIP codes, we're ready to build your routine. Get a free quote in 60 seconds — or call us
            at (240) 704-2551. No long-term contracts, easy to reschedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get My Free Recurring Cleaning Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            No long-term contracts · Easy to reschedule · 100% satisfaction guaranteed
          </p>
        </div>
      </section>

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default NorthBethesdaRecurringCleaningPage;
