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

const HERO_IMAGE = "/images/blog/deep-cleaning-cost/hero.webp";

// Deep-clean prices by home size — consistent with the city cost pages.
const priceRows: [string, string, string][] = [
  ["Studio / 1 bedroom", "up to 900 sq ft", "$230 – $285"],
  ["2 bed · 2 bath", "1,300 – 1,700 sq ft", "$310 – $375"],
  ["3 bed · 2 bath", "1,700 – 2,200 sq ft", "$375 – $445"],
  ["4 bed · 2–3 bath", "2,200 – 3,000 sq ft", "$450 – $540"],
  ["5+ bed · 3+ bath", "3,000+ sq ft", "From $570"],
];

const drivers = [
  ["Home size & bathrooms", "Square footage and bathroom count are the biggest factors — bathrooms and kitchens are the most labor-intensive rooms in a deep clean."],
  ["How long since the last deep clean", "A home that hasn't had a thorough cleaning in a year takes far more work than one cleaned every few months. Heavier build-up means more time."],
  ["Condition & add-ons", "Inside the fridge and cabinets, interior windows, pet hair, or post-renovation dust add time and cost. Most are optional add-ons you choose."],
  ["First clean vs. maintained home", "A first-time deep clean is the most expensive because it resets the whole home. Once on a recurring plan, future deep cleans cost less because less accumulates."],
];

const faqs = [
  { q: "How much does a deep cleaning cost?", a: "In the DMV (Maryland, DC, Northern Virginia), a one-time deep cleaning typically runs from about $230 for a studio or 1-bedroom up to $540+ for a large 4–5 bedroom home. A typical 3-bedroom house lands around $375–$445. The price is driven by home size, number of bathrooms, and how long it's been since the last thorough cleaning — the more build-up, the more time it takes." },
  { q: "Why is a deep clean more expensive than a regular clean?", a: "A deep clean includes everything a standard clean does plus all the detailed work routine cleans skip: inside the oven and fridge, grout scrubbing, baseboards and trim, ceiling fans and vents, window tracks, and the build-up behind furniture. That extra detail takes significantly more time — usually 1.5 to 2.5 times longer than a standard clean — which is why a deep clean runs roughly 40–75% more for the same home." },
  { q: "How often do I need to pay for a deep clean?", a: "Only occasionally. Most homes need a deep clean a few times a year — or just once, before starting recurring service. After the first deep clean resets the home, lighter recurring maintenance cleans keep it that way at a lower per-visit cost, so you're not paying deep-clean prices every visit." },
  { q: "Can I get an exact deep cleaning price?", a: "Yes — the ranges above are typical, but an exact quote depends on your specific home and any add-ons. Tell us your home size, number of bathrooms, and roughly how long since the last deep clean, and we'll give you a clear, no-obligation price. There are no hidden fees." },
];

const HowMuchDeepCleaningCosts = () => {
  const { seoHelmet } = useSEO({
    title: "How Much Does a Deep Cleaning Cost? (2026 Prices)",
    description:
      "How much a deep cleaning costs in the DMV — real 2026 prices by home size, what drives the cost, and how it compares to a standard clean. Typical 3-bed deep clean runs $375–$445.",
    canonical: "https://capitalcleancare.com/resources/how-much-does-deep-cleaning-cost",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="how much does deep cleaning cost, deep cleaning price, deep clean cost, deep cleaning cost per home, cost of deep cleaning house" />
      </Helmet>

      <ArticleSchema
        title="How Much Does a Deep Cleaning Cost? (2026 Prices)"
        description="Real 2026 deep cleaning prices in the DMV by home size, what drives the cost, and how a deep clean compares to a standard clean."
        url="https://capitalcleancare.com/resources/how-much-does-deep-cleaning-cost"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Much Does a Deep Cleaning Cost", href: "/resources/how-much-does-deep-cleaning-cost" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Much Does a Deep Cleaning Cost?" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A professional deep-cleaning a tiled bathroom in a Maryland home">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">How Much Does a Deep Cleaning Cost?</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">Real 2026 deep cleaning prices by home size in Maryland, DC & Virginia</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · June 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A one-time deep cleaning in the DMV typically runs from about <strong>$230 for a small apartment up to $540+ for a large home</strong>, with a typical 3-bedroom house landing around <strong>$375–$445</strong>. Here's the full breakdown by home size, what drives the price, and how to keep deep-clean costs down over time.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Deep Cleaning Prices by Home Size</h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left p-3 rounded-tl-xl">Home size</th>
                    <th className="text-left p-3">Approx. area</th>
                    <th className="text-left p-3 rounded-tr-xl">One-time deep clean</th>
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
            <p className="text-xs text-muted-foreground mb-10">Typical DMV ranges for 2026. Exact price depends on bathrooms, condition, and add-ons. Prices in nearby cities vary slightly — see our city cost guides below.</p>
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

          <BlogInlineCTA headline="Want an exact deep cleaning price?" subtext="Tell us your home size and we'll give you a clear, no-obligation quote — no hidden fees. Eco-friendly, background-checked cleaners across Bethesda, Rockville, Silver Spring & Gaithersburg." ctaLabel="Get My Free Quote" ctaTo="/contact" />

          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12">
              <p className="font-semibold text-foreground mb-1">Keep reading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                See{" "}
                <Link to="/resources/deep-cleaning-vs-regular-cleaning" className="text-accent underline hover:no-underline">deep cleaning vs regular cleaning</Link>,{" "}
                <Link to="/resources/what-is-included-in-a-deep-cleaning" className="text-accent underline hover:no-underline">what's included in a deep cleaning</Link>, or your city's prices:{" "}
                <Link to="/resources/house-cleaning-cost-bethesda-md" className="text-accent underline hover:no-underline">Bethesda</Link>,{" "}
                <Link to="/resources/house-cleaning-cost-rockville-md" className="text-accent underline hover:no-underline">Rockville</Link>,{" "}
                <Link to="/resources/house-cleaning-cost-silver-spring-md" className="text-accent underline hover:no-underline">Silver Spring</Link>.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Get Your Deep Cleaning Quote</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Maryland homeowners can also see{" "}<Link to="/resources/deep-cleaning-cost-maryland" className="underline text-primary-foreground/90 hover:text-white">2026 deep cleaning prices in Maryland</Link>. Eco-friendly{" "}<Link to="/services/deep-cleaning" className="underline text-primary-foreground/90 hover:text-white">deep cleaning</Link>{" "}across Maryland, DC, and Northern Virginia, including{" "}<Link to="/locations/arlington-va/deep-cleaning" className="underline text-primary-foreground/90 hover:text-white">deep cleaning in Arlington, VA</Link> — background-checked, locally owned, satisfaction guaranteed.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </article>
      <RelatedPosts currentSlug="how-much-does-deep-cleaning-cost" />
      <StickyCTA />
    </Layout>
  );
};

export default HowMuchDeepCleaningCosts;
