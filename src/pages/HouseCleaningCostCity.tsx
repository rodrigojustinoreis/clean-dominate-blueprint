import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Lightbulb, MapPin, Sparkles } from "lucide-react";
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
import { getCostCity, COST_PRICE_ROWS, type CostFAQ } from "@/data/cost-cities";
import NotFound from "./NotFound";

// Renders a "House Cleaning Cost in <City>" lead-gen article from cost-cities.ts data.
// One template, many cities. citySlug is passed per route so each URL prerenders statically.
const HouseCleaningCostCity = ({ citySlug }: { citySlug: string }) => {
  const c = getCostCity(citySlug);
  if (!c) return <NotFound />;

  const where = `${c.city}, ${c.state}`;
  const isAlexandria = c.slug === "alexandria-va";
  const title = isAlexandria
    ? "House Cleaning Cost in Alexandria, VA | 2026 Prices"
    : `House Cleaning Cost in ${where}: 2026 Prices & Rates`;
  const description = isAlexandria
    ? "Alexandria house cleaning costs $180–$325 recurring, $215–$400 one-time, and $310–$570+ deep. Compare 2026 rates by home size and get a free quote."
    : `House cleaning cost in ${where}: recurring cleans ${c.quick.recurring}, one-time ${c.quick.onetime}, deep cleans ${c.quick.deep}. Real price ranges by home size, what affects the price, and how to get a free quote.`;
  const url = `https://capitalcleancare.com/resources/house-cleaning-cost-${c.slug}`;

  // City-specific FAQs + two shared ones (general enough to repeat).
  const sharedFaqs: CostFAQ[] = [
    {
      q: "What affects the final price of a house cleaning?",
      a: "Five things, in roughly this order: home size (square footage), number of bedrooms and bathrooms, the type of clean (standard vs. deep vs. move-out), how often you book (recurring is cheaper per visit), and the current condition of the home plus any add-ons (inside the oven or fridge, interior windows, laundry). Pets and heavy clutter can add time too. A reputable company prices on these specifics rather than a flat rate — which is why a detailed quote is more accurate than a generic number.",
    },
    {
      q: `Do you offer free quotes for ${c.city} homes?`,
      a: `Yes. Capital Clean Care gives free, no-obligation quotes for every ${c.city} home, and you can get a fast estimate online in about two minutes using your home's size and service type. Because we price on your actual home rather than a one-size-fits-all rate, the quote you get is the price you pay — no surprises on cleaning day.`,
    },
  ];
  const faqs = [...c.faqs, ...sharedFaqs];

  const { seoHelmet } = useSEO({
    title,
    description,
    canonical: url,
    ogImage: isAlexandria ? "https://capitalcleancare.com/images/blog/cost-alexandria/hero.webp" : undefined,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content={`house cleaning cost ${c.city.toLowerCase()} ${c.state.toLowerCase()}, how much does house cleaning cost ${c.city.toLowerCase()}, maid service prices ${c.city.toLowerCase()}, cleaning service cost ${c.city.toLowerCase()}, deep cleaning cost ${c.city.toLowerCase()}`}
        />
      </Helmet>

      <ArticleSchema
        title={title}
        description={description}
        url={url}
        datePublished="2026-06-16"
        dateModified={isAlexandria ? "2026-08-24" : undefined}
        image={c.hero}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: `House Cleaning Cost in ${where}`, href: `/resources/house-cleaning-cost-${c.slug}` },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: title },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={c.hero} alt={`A clean, bright living room in a ${where} home`}>
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          {c.positioning}
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          Real 2026 price ranges by home size — plus what actually drives the cost
        </p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">
          By Rodrigo Reis, Owner · {where} · {isAlexandria ? "Updated August 24, 2026" : "June 2026"}
        </p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free {c.city} Quote</a>
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
                In {c.city}, most homeowners pay roughly <strong className="text-foreground">{c.quick.recurring} per visit</strong> for recurring (bi-weekly) cleaning, <strong className="text-foreground">{c.quick.onetime}</strong> for a one-time standard clean, and <strong className="text-foreground">{c.quick.deep}</strong> for a deep clean. Your exact price depends mainly on home size, the type of clean, and how often you book.
              </p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{c.intro}</p>
            {isAlexandria && (
              <div className="mb-10">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                  Alexandria Cleaning Prices by Frequency
                </h2>
                <div className="grid sm:grid-cols-2 gap-4" aria-label="Alexandria cleaning price options">
                  {[
                    ["Bi-weekly cleaning", "$180–$325 per visit", "The lowest practical per-visit range for consistent maintenance."],
                    ["Monthly cleaning", "$215–$400 typical range", "Usually closer to a one-time clean because more buildup accumulates between visits."],
                    ["One-time cleaning", "$215–$400 per visit", "A flexible option before guests, events, or seasonal resets."],
                    ["Deep cleaning", "$310–$570+ per visit", "The detailed top-to-bottom reset for first visits or homes needing extra attention."],
                  ].map(([label, price, detail]) => (
                    <div key={label} className="rounded-xl border border-border bg-background p-5">
                      <h3 className="text-base font-bold text-foreground mb-1">{label}</h3>
                      <p className="text-accent font-bold mb-2">{price}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </FadeInSection>

          {/* Price ranges table */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              {c.city} House Cleaning Prices by Home Size
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Typical per-visit ranges for {c.city} homes. Recurring (bi-weekly) is the lowest per visit; deep cleaning is the most thorough, top-to-bottom service.
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
                  {COST_PRICE_ROWS.map((r, i) => (
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
            <p className="text-xs text-muted-foreground mb-10">Ranges are typical for the {c.city} / {c.county} area and vary with your home's condition and any add-ons. Get your exact price with a free quote.</p>
          </FadeInSection>

          {/* What affects price */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              What Actually Drives the Price
            </h2>
            <div className="space-y-3 mb-8">
              {[
                ["Home size & layout", "Square footage plus the number of bedrooms and bathrooms is the biggest factor — more space and more bathrooms mean more time."],
                ["Type of clean", "A standard/recurring clean maintains; a deep clean resets everything (baseboards, inside appliances, grout); a move-out clean is the most detailed. Each step up adds time and cost."],
                ["How often you book", "Recurring service is cheaper per visit because the home stays cleaner between visits. Weekly saves the most, bi-weekly is close behind, and one-time costs the most per clean."],
                ["Condition & add-ons", "A home that hasn't been deep-cleaned in a while, heavy clutter, pets, or extras (inside the oven/fridge, interior windows, laundry) all add time — and a bit to the price."],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-4 p-4 bg-secondary/40 border border-border rounded-xl">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{t}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 flex gap-4 items-start">
              <Lightbulb className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900 leading-relaxed"><strong>{c.city} tip:</strong> {c.localTip}</p>
            </div>
          </FadeInSection>

          <BlogInlineCTA
            headline={`Want your exact ${c.city} price?`}
            subtext={`Capital Clean Care gives free, no-obligation quotes for every ${c.city} home — fast online estimate or an in-home walkthrough. Eco-friendly, background-checked, locally owned.`}
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* Full interactive price list */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-4">
              The Full Price List, by Service
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Browse every service type and home size below, including recurring discounts and optional add-ons.
            </p>
            <PricingTable />
          </FadeInSection>

          {/* Local link */}
          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12 flex gap-4 items-start">
              <MapPin className="h-6 w-6 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">Cleaning in {c.city} specifically</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For what's included, our process, and how we work in {c.city} homes, see our{" "}
                  <Link to={c.locationPath} className="text-accent underline hover:no-underline">{c.city} house cleaning page</Link>. Not sure how often to book? Read{" "}
                  <Link to="/resources/choose-pet-safe-cleaning-company" className="text-accent underline hover:no-underline">how to choose a cleaning company</Link>.
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
                Get Your Exact {c.city} Price — Free
              </h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Two minutes online or a quick call. Capital Clean Care provides eco-friendly{" "}
                <Link to={c.locationPath} className="underline text-primary-foreground/90 hover:text-white">house cleaning in {c.city}</Link>{" "}
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
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <p className="text-xs text-primary-foreground/60 mt-4">
                Licensed, insured, and locally owned. Serving {c.city} &amp; {c.county}.
              </p>
            </div>
          </FadeInSection>

        </div>
      </article>

      <StickyCTA />
    </Layout>
  );
};

export default HouseCleaningCostCity;
