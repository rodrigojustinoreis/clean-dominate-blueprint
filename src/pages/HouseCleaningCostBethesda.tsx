import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Lightbulb, Calculator, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import {
  ArticleSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";
import PricingTable from "@/components/PricingTable";

const HERO_IMAGE = "/images/blog/cost-bethesda/hero.webp";

const priceRows = [
  ["Studio / 1 bed", "up to 900 sq ft", "$140 – $165", "$160 – $195", "$230 – $285"],
  ["2 bed · 2 bath", "1,300 – 1,700 sq ft", "$180 – $215", "$215 – $255", "$310 – $375"],
  ["3 bed · 2 bath", "1,700 – 2,200 sq ft", "$215 – $260", "$255 – $310", "$375 – $445"],
  ["4 bed · 2–3 bath", "2,200 – 3,000 sq ft", "$265 – $325", "$315 – $385", "$450 – $540"],
  ["5+ bed · 3+ bath", "3,000+ sq ft", "From $350", "From $400", "From $570"],
];

const faqs = [
  {
    q: "How much does house cleaning cost in Bethesda, MD?",
    a: "For most Bethesda homes, a recurring (bi-weekly) cleaning runs about $180–$325 per visit depending on size, a one-time standard clean about $215–$400, and a deep clean about $310–$570+. A small condo sits at the low end; a large single-family home in Kenwood, Bradley Hills, or Burning Tree sits higher. Bethesda's larger homes and premium finishes tend to push prices toward the upper half of regional ranges. The most accurate number comes from a free quote based on your specific home — square footage, bedrooms and bathrooms, condition, and how often you want service.",
  },
  {
    q: "Why is house cleaning more expensive in Bethesda than some other areas?",
    a: "It's mostly the homes, not a Bethesda surcharge. Bethesda has a high share of larger single-family houses with more square footage, more bathrooms, and premium surfaces (natural stone, hardwood, custom millwork) that take more time and care to clean correctly. More space and more delicate materials mean more labor, which is the main driver of price anywhere. A modest Bethesda condo can actually cost the same as a similar unit elsewhere — the average is higher simply because the average home is bigger.",
  },
  {
    q: "What's the cheapest way to get my Bethesda home cleaned regularly?",
    a: "Recurring service is the most cost-effective option per visit. Because a home on a weekly or bi-weekly plan never gets as dirty between cleans, each visit is faster — so recurring clients pay meaningfully less per visit than one-time customers, with weekly saving the most (up to ~25% versus a one-time clean) and bi-weekly close behind. The pricier route is infrequent one-time or deep cleans, where built-up grime takes longer. If budget is the priority, a bi-weekly recurring plan usually delivers the lowest ongoing cost for a consistently clean home.",
  },
  {
    q: "What affects the final price of a house cleaning?",
    a: "Five things, in roughly this order: home size (square footage), number of bedrooms and bathrooms, the type of clean (standard vs. deep vs. move-out), how often you book (recurring is cheaper per visit), and the current condition of the home plus any add-ons (inside the oven or fridge, interior windows, laundry, etc.). Pets and heavy clutter can add time as well. A reputable company prices on these specifics rather than a flat rate — which is why an in-home or detailed online quote is more accurate than a generic number.",
  },
  {
    q: "Do you offer free quotes for Bethesda homes?",
    a: "Yes. Capital Clean Care gives free, no-obligation quotes for every Bethesda home, and you can get a fast estimate online in about two minutes using your home's size and service type. Because we price on your actual home rather than a one-size-fits-all rate, the quote you get is the price you pay — no surprises on cleaning day.",
  },
];

const HouseCleaningCostBethesda = () => {
  const { seoHelmet } = useSEO({
    title: "How Much Does House Cleaning Cost in Bethesda, MD?",
    description:
      "House cleaning cost in Bethesda, MD: recurring cleans ~$180–$325, one-time ~$215–$400, deep cleans ~$310–$570+. See the full price ranges by home size, what affects the price, and how to get a free quote.",
    canonical: "https://capitalcleancare.com/blog/house-cleaning-cost-bethesda-md",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="house cleaning cost bethesda md, how much does house cleaning cost bethesda, maid service prices bethesda, cleaning service cost bethesda maryland, deep cleaning cost bethesda"
        />
      </Helmet>

      <ArticleSchema
        title="How Much Does House Cleaning Cost in Bethesda, MD?"
        description="A 2026 price guide to house cleaning in Bethesda, MD — recurring, one-time, and deep cleaning price ranges by home size, the factors that affect the price, and how to get an accurate free quote."
        url="https://capitalcleancare.com/blog/house-cleaning-cost-bethesda-md"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "House Cleaning Cost in Bethesda, MD", href: "/blog/house-cleaning-cost-bethesda-md" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "How Much Does House Cleaning Cost in Bethesda, MD?" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="A clean, bright living room in a Bethesda, Maryland home">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Bethesda, MD · Pricing
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          How Much Does House Cleaning Cost in Bethesda, MD?
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          Real 2026 price ranges by home size — plus what actually drives the cost
        </p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">
          By Capital Clean Care · Bethesda, MD · June 2026
        </p>
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg"
          asChild
        >
          <a href="/#quote">Get My Free Bethesda Quote</a>
        </Button>
      </BlogHero>

      {/* ARTICLE */}
      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">

          {/* Quick answer */}
          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 mb-8">
              <p className="font-semibold text-foreground mb-2 flex items-center gap-2"><Sparkles className="h-5 w-5 text-accent" /> The quick answer</p>
              <p className="text-muted-foreground leading-relaxed">
                In Bethesda, most homeowners pay roughly <strong className="text-foreground">$180–$325 per visit</strong> for recurring (bi-weekly) cleaning, <strong className="text-foreground">$215–$400</strong> for a one-time standard clean, and <strong className="text-foreground">$310–$570+</strong> for a deep clean. Your exact price depends mainly on home size, the type of clean, and how often you book.
              </p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Bethesda is one of Maryland's most desirable — and most varied — markets, from condos near the Metro to large single-family homes in Kenwood, Bradley Hills, and Burning Tree. That range is exactly why a single "average" price isn't very useful. Below are real ranges by home size and service type, the factors that move the number, and how to get an accurate quote in about two minutes.
            </p>
          </FadeInSection>

          {/* Price ranges table */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Bethesda House Cleaning Prices by Home Size
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Typical per-visit ranges for Bethesda homes. Recurring (bi-weekly) is the lowest per visit; deep cleaning is the most thorough, top-to-bottom service.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-border mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary text-left">
                    <th className="px-4 py-3 font-semibold text-foreground">Home</th>
                    <th className="px-4 py-3 font-semibold text-foreground hidden sm:table-cell">Approx. size</th>
                    <th className="px-4 py-3 font-semibold text-foreground text-right">Recurring</th>
                    <th className="px-4 py-3 font-semibold text-foreground text-right">One-time</th>
                    <th className="px-4 py-3 font-semibold text-foreground text-right">Deep</th>
                  </tr>
                </thead>
                <tbody>
                  {priceRows.map((r, i) => (
                    <tr key={r[0]} className={`border-t border-border ${i % 2 ? "bg-secondary/30" : "bg-background"}`}>
                      <td className="px-4 py-3 font-medium text-foreground">{r[0]}</td>
                      <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{r[1]}</td>
                      <td className="px-4 py-3 text-right font-bold text-accent whitespace-nowrap">{r[2]}</td>
                      <td className="px-4 py-3 text-right text-foreground whitespace-nowrap">{r[3]}</td>
                      <td className="px-4 py-3 text-right text-foreground whitespace-nowrap">{r[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mb-10">Ranges are typical for the Bethesda / Montgomery County area and vary with your home's condition and any add-ons. Get your exact price with a free quote.</p>
          </FadeInSection>

          {/* What affects price */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              What Actually Drives the Price
            </h2>
            <div className="space-y-3 mb-8">
              {[
                ["Home size & layout", "Square footage plus the number of bedrooms and bathrooms is the biggest factor — more space and more bathrooms mean more time. Bethesda's larger homes naturally sit higher in the range."],
                ["Type of clean", "A standard/recurring clean maintains; a deep clean resets everything (baseboards, inside appliances, grout); a move-out clean is the most detailed. Each step up adds time and cost."],
                ["How often you book", "Recurring service is cheaper per visit because the home stays cleaner between visits. Weekly saves the most, bi-weekly is close behind, and one-time costs the most per clean."],
                ["Condition & add-ons", "A home that hasn't been deep-cleaned in a while, heavy clutter, pets, or extras (inside the oven/fridge, interior windows, laundry) all add time — and a bit to the price."],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4 p-4 bg-secondary/40 border border-border rounded-xl">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 flex gap-4 items-start">
              <Lightbulb className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Bethesda tip:</strong> if your home has a lot of natural stone, hardwood, or custom finishes, ask whether the company uses products safe for those surfaces. The right method protects the home and avoids costly damage — worth more than a few dollars saved on a cheaper, one-size-fits-all clean.
              </p>
            </div>
          </FadeInSection>

          <BlogInlineCTA
            headline="Want your exact Bethesda price?"
            subtext="Capital Clean Care gives free, no-obligation quotes for every Bethesda home — fast online estimate or an in-home walkthrough. Eco-friendly, background-checked, locally owned."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* Full price list (interactive) */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-4">
              The Full Price List, by Service
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Browse every service type and home size below, including recurring discounts and optional add-ons.
            </p>
            <PricingTable />
          </FadeInSection>

          {/* Local link / recurring savings */}
          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12 flex gap-4 items-start">
              <MapPin className="h-6 w-6 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">Cleaning in Bethesda specifically</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For what's included, our process, and how we work in Bethesda homes, see our{" "}
                  <Link to="/locations/bethesda-md/house-cleaning" className="text-accent underline hover:no-underline">Bethesda house cleaning page</Link>. Comparing service types? Read{" "}
                  <Link to="/blog/cleaning-product-poisoning-in-pets" className="text-accent underline hover:no-underline">why pet-safe products matter</Link>{" "}
                  if you have animals at home.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* FAQ */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          {/* Final CTA */}
          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Get Your Exact Bethesda Price — Free
              </h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Two minutes online or a quick call. Capital Clean Care provides eco-friendly{" "}
                <Link to="/locations/bethesda-md/house-cleaning" className="underline text-primary-foreground/90 hover:text-white">house cleaning in Bethesda</Link>{" "}
                — recurring, one-time, deep, and move-out — with background-checked, locally owned teams.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm">
                {["Free quotes", "No hidden fees", "Eco-friendly", "Background-checked"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 justify-center text-primary-foreground/90">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md"
                asChild
              >
                <a href="/#quote">
                  Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <p className="text-xs text-primary-foreground/60 mt-4">
                Licensed, insured, and locally owned. Serving Bethesda &amp; Montgomery County, MD.
              </p>
            </div>
          </FadeInSection>

        </div>
      </article>

      <StickyCTA />
    </Layout>
  );
};

export default HouseCleaningCostBethesda;
