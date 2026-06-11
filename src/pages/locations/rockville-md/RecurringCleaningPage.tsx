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

const PAGE_URL = "https://capitalcleancare.com/locations/rockville-md/recurring-cleaning";

const faqs = [
  {
    q: "What's the difference between weekly and bi-weekly cleaning in Rockville?",
    a: "Weekly is ideal for larger homes, families with kids or pets, or anyone who wants the home consistently guest-ready. Bi-weekly is our most popular plan — a clean, well-maintained home without maximum frequency or cost. Both include the same thorough checklist.",
  },
  {
    q: "Do I get the same cleaners every recurring visit?",
    a: "Yes. We assign a consistent, bonded and insured team to your Rockville home so they learn your preferences, your layout, and your standards over time. No strangers walking into your house each week — the same trusted crew, every visit.",
  },
  {
    q: "How much does recurring house cleaning cost in Rockville, MD?",
    a: "Recurring clients receive discounted rates compared to one-time cleanings. Pricing depends on your home's size and preferred frequency. Get your exact quote in 60 seconds — free, no commitment required.",
  },
  {
    q: "Can I skip or pause my recurring service?",
    a: "Yes — life happens. We ask for 24-hour notice to skip a visit, and you can pause or modify your schedule at any time. No lock-in contracts, no fees for first-time changes.",
  },
  {
    q: "Do you use eco-friendly products for recurring cleaning?",
    a: "Yes, always. Every recurring visit uses EPA Safer Choice™ certified products — non-toxic, plant-based, safe for children and pets throughout your Rockville home. No bleach, no ammonia. We serve ZIPs 20850, 20851, 20852, and 20853.",
  },
  {
    q: "Can I start with a one-time clean before committing to recurring service?",
    a: "Absolutely. Many clients try a standard or deep cleaning first, then convert to a recurring plan once they see the results. We make the transition seamless — your first recurring visit is a deeper baseline clean so the routine starts from a spotless foundation.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Rockville and the greater Montgomery County area. We live and work in this community, and your home matters to us personally.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Countertops and backsplash wiped down",
      "Appliance exteriors cleaned",
      "Microwave interior cleaned",
      "Sink scrubbed and polished",
      "Floors swept and mopped",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Toilet sanitized inside and out",
      "Tub and shower scrubbed",
      "Sink and faucets polished",
      "Mirrors cleaned streak-free",
      "Floors mopped",
    ],
  },
  {
    heading: "Bedrooms",
    items: [
      "Dusting of all surfaces",
      "Vacuuming floors and rugs",
      "Beds made (linens changed if provided)",
      "Mirrors and glass wiped",
      "Trash emptied",
    ],
  },
  {
    heading: "Living Areas",
    items: [
      "Dusting of furniture and shelves",
      "Vacuuming all upholstered surfaces",
      "Hard floors mopped",
      "Window sills wiped",
      "Trash emptied and relined",
    ],
  },
  {
    heading: "All Rooms",
    items: [
      "Baseboards dusted",
      "Light switches and door handles wiped",
      "Door frames dusted",
      "Trash emptied throughout",
      "Final walkthrough check",
    ],
  },
];

const rockvilleServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
  { name: "Gaithersburg", slug: "gaithersburg-md", state: "MD" },
];

const RockvilleRecurringCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Recurring House Cleaning in Rockville, MD",
    description:
      "Weekly and bi-weekly house cleaning in Rockville, MD. Consistent cleaners, eco-friendly products, satisfaction guaranteed. Build the routine — your home stays clean, always. Free quote.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-two-living-room.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Rockville, MD", href: "/locations/rockville-md" },
          { label: "Recurring Cleaning", href: PAGE_URL },
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
            name: "James T.",
            text: "Best investment we've made. Coming home to a clean house every week is amazing.",
            location: "Arlington, VA",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Recurring House Cleaning in Rockville, MD"
        description="Weekly and bi-weekly recurring house cleaning in Rockville, MD. Same background-checked team every visit. EPA Safer Choice certified eco-friendly products. 100% satisfaction guaranteed."
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
              { label: "Recurring Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Recurring House Cleaning in Rockville, MD"
        lead="Stop cleaning on weekends. Capital Clean Care's recurring cleaning service comes to your Rockville home — from King Farm to Twinbrook to Fallsgrove — weekly or bi-weekly, with the same trusted, background-checked team every single visit. EPA Safer Choice™ products, and 100% satisfaction guaranteed: we re-clean if you're not happy."
        cityName="Rockville"
        state="MD"
        zipRange="20850–20853"
        heroImage="/images/team/team-two-living-room.jpg"
        heroImageAlt="Capital Clean Care team providing recurring house cleaning service in Rockville, MD — same team every visit"
        ctaPrimary="Set Up Recurring Cleaning in Rockville"
      />

      {/* ── Cross-link Banner ──────────────────────────────── */}
      <div className="bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 max-w-6xl py-3 text-center text-sm">
          <span className="text-muted-foreground">Need a thorough reset before starting your routine?</span>{" "}
          <Link to="/locations/rockville-md/deep-cleaning" className="text-primary font-semibold underline">
            See Deep Cleaning in Rockville →
          </Link>
        </div>
      </div>

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Every Rockville Recurring Clean"
        categories={checklistCategories}
      />

      {/* Frequency Plans */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Choose Your Recurring Cleaning Schedule
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                plan: "Weekly",
                best: "Busy families, large homes, pet owners",
                result: "Always guest-ready, every day",
                highlight: true,
              },
              {
                plan: "Bi-Weekly",
                best: "Most Rockville households — our most popular",
                result: "Clean, well-maintained between uses",
                highlight: false,
              },
              {
                plan: "Monthly",
                best: "Lighter maintenance or lower frequency",
                result: "Consistent seasonal freshness",
                highlight: false,
              },
            ].map((p) => (
              <div
                key={p.plan}
                className={`rounded-xl border p-6 ${p.highlight ? "border-primary/40 bg-primary/5" : "border-border bg-card"}`}
              >
                <p className="font-heading font-bold text-lg text-foreground mb-2">{p.plan}</p>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  <span className="font-semibold text-foreground">Best for:</span> {p.best}
                </p>
                <p className="text-sm text-accent font-medium">{p.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Recurring */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Why Recurring Cleaning Is Better Than One-Time
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Cumulative cleanliness",
                body: "Regular maintenance prevents buildup. Your Rockville home actually gets cleaner over time — not just reset to zero after each visit. After a few months, deep cleaning is rarely needed.",
              },
              {
                title: "Same team every time",
                body: "The same background-checked, bonded crew comes to your Rockville home every visit. They learn your preferences, your layout, your standards. No retraining strangers. No surprises.",
              },
              {
                title: "Priority scheduling & better rates",
                body: "Recurring clients get discounted rates compared to one-time bookings, plus first access to preferred time slots and faster rescheduling when plans change.",
              },
              {
                title: "100% satisfaction, every visit",
                body: "If anything isn't right after your Rockville recurring clean, call us within 24 hours and we return to re-clean at no charge. No fine print. No arguments.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-background"
              >
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
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
              <Star className="h-3.5 w-3.5 fill-accent" aria-hidden="true" /> Client Reviews
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              What Rockville Families Say About Recurring Cleaning
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
                "Best investment we've made. Coming home to a clean house every week is amazing."
              </p>
              <p className="text-sm font-semibold text-foreground">James T.</p>
              <p className="text-xs text-muted-foreground">Arlington, VA</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving Rockville families in King Farm, Twinbrook, and Fallsgrove weekly and bi-weekly. Share your experience.
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

      {/* Service Area */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Recurring Cleaning Across All of Rockville, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              We provide recurring cleaning service across all of Rockville's ZIP codes — 20850, 20851,
              20852, and 20853. Whether your home is near Rockville Town Center, along Rockville Pike,
              in the master-planned community of King Farm, or in the residential streets of Twinbrook,
              our background-checked cleaning teams are ready to build a routine that works for your schedule.
            </p>
            <p>
              Most of our recurring clients in Rockville settle into bi-weekly service after trying it
              for a month. Families with young children or pets near Fallsgrove and Woodley Gardens
              often upgrade to weekly for an always-fresh home. Whatever cadence fits your life,
              we'll assign a consistent team and keep the same standard, visit after visit.
            </p>
            <p>
              As a Latino-owned Montgomery County business, we've built our recurring client base one
              household at a time through word of mouth in the Rockville community. Your home isn't
              a number in a dispatch system — your team knows your preferences and your property.
              That personal accountability is something no franchise can replicate.
            </p>
          </div>
        </div>
      </section>

      {/* How First Visit Works */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            How Your First Recurring Cleaning in Rockville Works
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Your first recurring visit is always a deeper, more thorough baseline clean — not a
              routine maintenance pass. Before we establish your regular schedule, our team works
              through your Rockville home top-to-bottom, addressing any buildup that's accumulated
              since your last professional clean. Think of it as resetting the baseline so that
              every routine visit after stays fast, thorough, and consistent.
            </p>
            <p>
              After your first visit, your assigned Rockville team will know your home — your
              preferences, the quirks of your layout, which surfaces need extra attention. Over
              time, the quality and efficiency of each clean improves because your team is working
              from familiarity, not from scratch. Clients in King Farm and Fallsgrove who've been
              on recurring service for six months or more rarely need one-time deep cleans —
              the routine keeps everything at that standard continuously.
            </p>
            <p>
              There are no long-term contracts and no penalties for rescheduling. If something
              comes up, 24-hour notice is all we ask. Rockville clients across ZIP codes 20850,
              20851, 20852, and 20853 enjoy flexible recurring service that adapts to vacations,
              work travel, and changing household needs — without ever losing their assigned team
              or their preferred schedule slot.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Recurring Cleaning FAQ — Rockville, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinksGrid
        cityName="Rockville"
        citySlug="rockville-md"
        serviceLabel="Recurring Cleaning"
        serviceSlug="recurring-cleaning"
        services={rockvilleServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />

      <ConversionCTA cityName="Rockville" />

      {/* Final CTA */}
      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Start Your Recurring Clean in Rockville Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Ready to stop spending your weekends cleaning? Whether you're near RedGate Park,
            Montgomery College, or anywhere across Rockville's 20850–20853 ZIP codes, we're ready
            to build your routine. Free quote in 60 seconds — no contracts, easy to reschedule,
            100% satisfaction guaranteed.
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
            No long-term contracts · Easy to reschedule · 100% satisfaction guaranteed · Free quote in 60 seconds
          </p>
        </div>
      </section>

      <StickyMobileCTA />
    </Layout>
  );
};

export default RockvilleRecurringCleaningPage;
