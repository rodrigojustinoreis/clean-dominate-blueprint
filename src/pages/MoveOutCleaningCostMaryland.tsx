import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/blog/move-out-cost/hero.webp";

// Move-out prices by home size — a move-out clean is an exhaustive, empty-home deep clean.
const priceRows: [string, string, string][] = [
  ["Studio / 1 bedroom", "up to 900 sq ft", "$220 – $300"],
  ["2 bed · 2 bath", "1,300 – 1,700 sq ft", "$300 – $400"],
  ["3 bed · 2 bath", "1,700 – 2,200 sq ft", "$370 – $480"],
  ["4 bed · 2–3 bath", "2,200 – 3,000 sq ft", "$450 – $600"],
  ["5+ bed · 3+ bath", "3,000+ sq ft", "From $620"],
];

const drivers = [
  ["Inside everything", "A move-out clean does the insides — oven, fridge, all cabinets and drawers, closets — because the home is empty. That thoroughness is why it prices like a deep clean, not a maintenance clean."],
  ["Condition at move-out", "How much build-up is left behind matters. A well-kept apartment cleans faster than one with months of neglected grime, pet hair, or scuffs."],
  ["Size & bathrooms", "Square footage and bathroom count drive the price, same as any clean — bathrooms and the kitchen take the most work."],
  ["Add-ons", "Interior windows, wall spot-cleaning, carpet shampoo, or garage cleaning can be added for an all-in turnover, and add to the total."],
];

const faqs = [
  { q: "How much does move-out cleaning cost in Maryland?", a: "In Maryland (Bethesda, Rockville, Silver Spring and across Montgomery County), a move-out cleaning typically runs from about $220 for a studio or 1-bedroom apartment up to $600+ for a large single-family home. A typical 2–3 bedroom home lands around $300–$480. A move-out clean is priced like a deep clean because it's exhaustive — inside every appliance, cabinet, and closet of an empty home — to meet landlord and turnover standards." },
  { q: "Why does move-out cleaning cost more than a regular clean?", a: "Because it's far more thorough. With the home empty, a move-out clean does everything a standard clean skips: inside the oven, fridge, and every cabinet and closet, baseboards and trim, inside windows, and detailed bathrooms and kitchen — all to a landlord-ready or sale-ready standard. That depth takes much more time, so it's priced like (or slightly above) a one-time deep clean." },
  { q: "Is a move-out clean worth it for getting my deposit back?", a: "Usually, yes. Cleaning is one of the most common reasons landlords withhold part of a security deposit, and a professional move-out clean to a documented checklist is typically far less than the deductions you'd risk. It also saves you the time and equipment of doing an exhaustive clean yourself during an already-stressful move. Keep your receipt as proof the unit was professionally cleaned." },
  { q: "When should I schedule the move-out clean?", a: "Book it for after the movers are out and the home is empty, but before your final walkthrough or handover — that way nothing gets re-dirtied and the unit shows at its best. Empty homes also clean faster and more thoroughly. Schedule a few days ahead, especially around end-of-month move dates when demand is highest." },
];

const MoveOutCleaningCostMaryland = () => {
  const { seoHelmet } = useSEO({
    title: "How Much Does Move-Out Cleaning Cost in Maryland?",
    description:
      "Move-out cleaning prices in Maryland by home size — typically $220–$600+. What's included, what drives the cost, and whether it's worth it to protect your security deposit.",
    canonical: "https://capitalcleancare.com/blog/move-out-cleaning-cost-maryland",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="move out cleaning cost maryland, move out cleaning price, how much does move out cleaning cost, move out cleaning bethesda rockville, end of tenancy cleaning cost" />
      </Helmet>

      <ArticleSchema
        title="How Much Does Move-Out Cleaning Cost in Maryland?"
        description="Move-out cleaning prices in Maryland by home size, what's included, what drives the cost, and whether it's worth it to protect your deposit."
        url="https://capitalcleancare.com/blog/move-out-cleaning-cost-maryland"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Move-Out Cleaning Cost in Maryland", href: "/blog/move-out-cleaning-cost-maryland" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Move-Out Cleaning Cost in Maryland" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A cleaner mopping an empty room during a move-out clean in a Maryland apartment">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Local Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">How Much Does Move-Out Cleaning Cost in Maryland?</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">2026 move-out cleaning prices by home size — and what protects your deposit</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · Montgomery County, MD · June 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A move-out cleaning in Maryland typically runs from about <strong>$220 for a small apartment up to $600+ for a large home</strong>, with a typical 2–3 bedroom home around <strong>$300–$480</strong>. It costs more than a regular clean because it's exhaustive — inside every appliance, cabinet, and closet of an empty home, to a landlord-ready standard. Here's the full breakdown.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Move-Out Cleaning Prices by Home Size</h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left p-3 rounded-tl-xl">Home size</th>
                    <th className="text-left p-3">Approx. area</th>
                    <th className="text-left p-3 rounded-tr-xl">Move-out clean</th>
                  </tr>
                </thead>
                <tbody>
                  {priceRows.map((r, i) => (
                    <tr key={r[0]} className={i % 2 ? "bg-secondary/40" : "bg-white"}>
                      <td className="p-3 font-medium text-foreground">{r[0]}</td>
                      <td className="p-3 text-muted-foreground">{r[1]}</td>
                      <td className="p-3 font-semibold text-accent">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mb-10">Typical Maryland ranges for 2026 (Bethesda, Rockville, Silver Spring &amp; Montgomery County). Exact price depends on condition, bathrooms, and add-ons.</p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">What Drives the Price</h2>
            <div className="space-y-4 mb-10">
              {drivers.map(([t, d]) => (
                <div key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div><p className="font-semibold text-foreground">{t}</p><p className="text-sm text-muted-foreground leading-relaxed">{d}</p></div>
                </div>
              ))}
            </div>
          </FadeInSection>

          <BlogInlineCTA headline="Moving out? Protect your deposit." subtext="Get a clear, no-obligation move-out cleaning quote — landlord-ready, to a documented checklist. Eco-friendly, background-checked cleaners across Bethesda, Rockville, Silver Spring & Gaithersburg." ctaLabel="Get My Free Quote" ctaTo="/contact" />

          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12">
              <p className="font-semibold text-foreground mb-1">Keep reading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Use our{" "}
                <Link to="/blog/move-out-cleaning-checklist-maryland-tenants" className="text-accent underline hover:no-underline">move-out cleaning checklist for Maryland tenants</Link>{" "}
                or see{" "}
                <Link to="/blog/how-much-does-deep-cleaning-cost" className="text-accent underline hover:no-underline">how much a deep cleaning costs</Link>.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Get Your Move-Out Cleaning Quote</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Eco-friendly{" "}<Link to="/services/move-out-cleaning" className="underline text-primary-foreground/90 hover:text-white">move-out cleaning</Link>{" "}across Maryland, DC, and Northern Virginia — background-checked, locally owned, satisfaction guaranteed.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </article>
      <RelatedPosts currentSlug="move-out-cleaning-cost-maryland" />
      <StickyCTA />
    </Layout>
  );
};

export default MoveOutCleaningCostMaryland;
