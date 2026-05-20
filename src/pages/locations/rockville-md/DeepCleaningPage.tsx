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

const PAGE_URL = "https://capitalcleancare.com/locations/rockville-md/deep-cleaning";

const faqs = [
  {
    q: "How long does a deep cleaning take in Rockville?",
    a: "Most Rockville homes take 4–6 hours. Larger homes or homes with heavy buildup may take longer. We'll give you a time estimate when you book your free quote.",
  },
  {
    q: "How much does a deep cleaning cost in Rockville, MD?",
    a: "Pricing is based on home size and scope of work. Get your exact quote in 60 seconds — free, no commitment required. Same-day slots available throughout ZIP codes 20850, 20851, 20852, and 20853.",
  },
  {
    q: "Do I need to be home during the deep cleaning?",
    a: "No. Many Rockville clients leave a key or use a lockbox. Our bonded, insured team is fully background-checked — every member before their first day on the job.",
  },
  {
    q: "Is your deep cleaning eco-friendly?",
    a: "Yes. We use only EPA Safer Choice™ certified products — powerful enough for deep cleaning every surface, yet non-toxic and safe for your family and pets. No bleach fumes, no harsh ammonia.",
  },
  {
    q: "Do you do spring cleaning in Rockville?",
    a: "Our deep cleaning covers everything a spring cleaning typically includes — and more. Book any time of year, not just spring. It's a great reset after winter or before a major event.",
  },
  {
    q: "How often should I get a deep cleaning in Rockville?",
    a: "Once or twice a year is typical for most homes, combined with regular maintenance cleanings in between. We offer recurring service that keeps your Rockville home clean year-round.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Rockville and the greater Montgomery County area. We live and work in this community, and your home matters to us personally.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen — Deep",
    items: [
      "Inside oven scrubbed clean",
      "Microwave interior degreased",
      "Range hood degreased",
      "Inside cabinets and drawers wiped",
      "Faucets descaled and polished",
      "Backsplash scrubbed",
    ],
  },
  {
    heading: "Bathrooms — Deep",
    items: [
      "Grout lines scrubbed",
      "Showerhead descaled",
      "Toilet base, hinges, and under rim",
      "Exhaust fan cleaned",
      "Edge-to-edge mirrors",
      "Vanity interior cleaned",
    ],
  },
  {
    heading: "All Rooms",
    items: [
      "Baseboards wiped top and sides",
      "Window sills and tracks cleaned",
      "Light switches and outlets wiped",
      "Ceiling fans dusted and wiped",
      "Door frames and handles wiped",
    ],
  },
  {
    heading: "Floors & Furniture",
    items: [
      "Vacuum under furniture",
      "Hardwood floors mopped",
      "Tile floors scrubbed",
      "Upholstered surfaces vacuumed",
      "Doors spot-cleaned",
    ],
  },
];

const rockvilleServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
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

const RockvilleDeepCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Deep Cleaning Service in Rockville, MD — Top-to-Bottom, Eco-Friendly",
    description:
      "Professional deep cleaning in Rockville, MD. Inside appliances, grout, baseboards, ceiling fans — everywhere standard cleanings miss. EPA-certified products. Free quote.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-tile-scrubber.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Rockville, MD", href: "/locations/rockville-md" },
          { label: "Deep Cleaning", href: PAGE_URL },
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
            name: "Brian G.",
            text: "After our renovation, they got every last bit of construction dust. Professional and incredibly thorough.",
            location: "Fairfax, VA",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Deep Cleaning Service in Rockville, MD"
        description="Professional deep cleaning in Rockville, MD. Inside appliances, grout scrubbing, baseboards, ceiling fans — top-to-bottom. EPA Safer Choice certified eco-friendly products. 100% satisfaction guaranteed."
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
              { label: "Deep Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Deep Cleaning Services in Rockville, MD"
        lead="When a standard clean isn't enough, Capital Clean Care's deep cleaning goes top-to-bottom through every corner of your Rockville home — from Twinbrook to Fallsgrove. Baseboards, grout lines, inside appliances, ceiling fans — we cover everything a routine cleaning skips. EPA Safer Choice™ certified products only."
        cityName="Rockville"
        state="MD"
        zipRange="20850–20853"
        heroImage="/images/team/team-tile-scrubber.jpg"
        heroImageAlt="Capital Clean Care deep cleaning service in Rockville, MD — scrubbing grout and tile for top-to-bottom results"
        ctaPrimary="Schedule a Deep Clean in Rockville"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Our Rockville Deep Cleaning"
        categories={checklistCategories}
      />

      {/* Standard vs Deep */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Standard Cleaning vs. Deep Cleaning — What's the Difference?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-4 font-semibold text-foreground">Standard Cleaning</th>
                  <th className="text-left p-4 font-semibold text-primary">Deep Cleaning</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Surface wipe of appliances", "Inside oven and microwave fully cleaned"],
                  ["General floor mopping", "Scrubbing grout and tile edges"],
                  ["Dusting visible surfaces", "Ceiling fans, baseboards, window tracks"],
                  ["Standard bathroom clean", "Descaling, grout scrub, exhaust fans"],
                  ["2–3 hours typical", "4–6 hours — every corner covered"],
                ].map(([std, deep], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="p-4 text-muted-foreground">{std}</td>
                    <td className="p-4 text-foreground font-medium">{deep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to Book */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            When Should You Book a Deep Clean in Rockville?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Moving into or out of a home in 20850 or 20851",
              "Spring seasonal reset in King Farm or Twinbrook",
              "Before a special event or holiday gathering",
              "After a long period between professional cleanings",
              "Post-renovation or construction cleanup",
              "Preparing a home for sale or rental listing",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
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
              Rockville Homeowners Love Our Deep Clean
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
                "After our renovation, they got every last bit of construction dust. Professional and incredibly thorough."
              </p>
              <p className="text-sm font-semibold text-foreground">Brian G.</p>
              <p className="text-xs text-muted-foreground">Fairfax, VA</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving Rockville homes from King Farm to Twinbrook. Share your experience.
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
            Deep Cleaning Throughout Rockville, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care provides professional deep cleaning across all Rockville ZIP codes —
              20850, 20851, 20852, and 20853. From homes near the Rockville Metro station in ZIP 20850
              to larger single-family homes along the 20852 corridor near Rockville Pike, our experienced,
              HEPA-equipped teams deliver top-to-bottom results on every job.
            </p>
            <p>
              Rockville residents in King Farm, Twinbrook, Fallsgrove, and Woodley Gardens regularly book
              deep cleanings before major life events — spring resets, holiday prep, or after a renovation.
              If your Rockville home hasn't had a professional deep clean in over a year, there's buildup in
              the grout, the oven, the ceiling fans, and behind appliances that a standard maintenance
              cleaning simply won't reach. Our deep cleaning changes that — in one thorough visit.
            </p>
            <p>
              As a Latino-owned business rooted in Montgomery County, we bring the same personal
              accountability to every deep clean that we do to our recurring service. Your home isn't
              rushed through a checklist — it's treated with the care it deserves. 100% satisfaction
              guaranteed: if something was missed, we return to fix it at no charge.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            What Sets Our Rockville Deep Cleaning Apart
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A deep cleaning is only as good as the team performing it. Capital Clean Care trains
              every technician on our four-category protocol — not a checklist printed from the
              internet, but a systematic approach refined across hundreds of Rockville homes in
              King Farm, Twinbrook, Fallsgrove, and along the Rockville Pike corridor. Each visit
              starts at the ceiling and works methodically downward: ceiling fans and light fixtures
              first, then wall surfaces and windows, then furniture and appliances, then floors —
              so dust falls onto surfaces we haven't cleaned yet rather than ones we've already
              finished.
            </p>
            <p>
              We use EPA Safer Choice™ certified products exclusively — meaning our deep cleaning
              is genuinely effective without leaving behind bleach residue, harsh chemical fumes,
              or surfaces sticky from diluted cleaner. For homes in 20850 and 20852 with young
              children or pets, this matters beyond the label. Our products are tested and verified
              safe for re-entry immediately after cleaning, which is particularly important for
              Rockville families with infants or immunocompromised members.
            </p>
            <p>
              Every deep cleaning is backed by our 100% satisfaction guarantee. If anything was
              missed or doesn't meet your standard, call us within 24 hours and we return to
              re-clean the specific areas at no charge. No negotiations, no fine print — just
              the thorough clean your Rockville home deserves. We schedule most follow-up
              returns within the same business day for clients throughout the 20850, 20851,
              20852, and 20853 ZIP codes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Deep Cleaning FAQ — Rockville, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Rockville"
        citySlug="rockville-md"
        serviceLabel="Deep Cleaning"
        serviceSlug="deep-cleaning"
        services={rockvilleServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Rockville" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Book Your Rockville Deep Clean Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving Rockville homes near Rockville Pike across ZIPs 20850, 20851, 20852, and 20853.
            Start fresh — get a free, no-obligation deep cleaning quote in 60 seconds, or call us
            directly at (240) 704-2551. Same-day slots often available.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get My Free Deep Cleaning Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Same-day slots available · 100% satisfaction guaranteed · Bonded & Insured
          </p>
        </div>
      </section>

      <StickyMobileCTA />
    </Layout>
  );
};

export default RockvilleDeepCleaningPage;
