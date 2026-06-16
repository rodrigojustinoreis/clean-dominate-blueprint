import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/best-silver-spring/hero.webp";

const criteria: [string, string][] = [
  ["Licensing, insurance & bonding", "The best companies carry liability insurance and bonding and will show proof — it protects you if something is damaged or goes missing. Never skip this."],
  ["Background-checked, consistent teams", "Look for a company that background-verifies every cleaner and sends the same team each visit. In a community with many federal and security-sensitive households, this is especially important."],
  ["Genuinely certified eco-friendly products", "Ask for EPA Safer Choice or plant-based certifications, not vague 'green' marketing — it matters for kids, pets, and sensitive households."],
  ["Transparent, walkthrough-based pricing", "The best services price your actual home — square footage, bathrooms, condition — and put it in writing. Avoid flat quotes given sight unseen."],
  ["A written satisfaction guarantee", "A re-clean guarantee in writing (not just a slogan) signals a company that stands behind its work."],
];

const redFlags = [
  "Cash-only with no insurance or written agreement",
  "No background-check policy (a deal-breaker for clearance households)",
  "Quotes a flat price without seeing your home",
  "Vague about what products they use",
  "No reviews from Silver Spring / Montgomery County clients",
];

const faqs = [
  { q: "How do I choose the best house cleaning service in Silver Spring?", a: "Begin with the essentials: insurance and bonding, background-checked cleaners, and certified eco-friendly products, then weigh transparent walkthrough pricing and a written guarantee. Silver Spring adds two local considerations: if you're in a security-clearance or federal household, make background checks a hard requirement; and if you'd prefer a Spanish-speaking team, ask up front — many of the area's best cleaners are bilingual. Prioritize reviews from actual Silver Spring and Montgomery County clients over headline star ratings." },
  { q: "Why do background checks matter more in Silver Spring?", a: "Silver Spring has a large population of federal workers and contractors, many with security clearances. For those households, who enters the home is a genuine security consideration, not just a comfort one. The best cleaning companies background-verify every team member and can tell you exactly how their vetting works and who will be in your home — ask for it in writing if your situation calls for it." },
  { q: "Can I find a Spanish-speaking cleaning team in Silver Spring?", a: "Yes — Silver Spring has a large, vibrant Latino community and a strongly bilingual cleaning workforce, so a Spanish-speaking team is easy to find and a genuine convenience for many households. Capital Clean Care is Latino-owned and serves clients in English and Spanish. If language matters to you, simply ask when you request a quote." },
  { q: "What about Silver Spring's older homes and buildings?", a: "Downtown Silver Spring, Fenton Village, and neighborhoods like Woodside and Blair have a lot of older housing — hardwood floors, vintage tile and grout, plaster walls, and older window treatments that need a gentler, material-appropriate approach (steam or pH-balanced products rather than harsh chemicals). The best companies recognize older housing stock and adjust their methods instead of running one generic checklist. For a thorough first reset, an older home often benefits from a deep clean before starting recurring service." },
];

const BestHouseCleaningSilverSpring = () => {
  const { seoHelmet } = useSEO({
    title: "How to Choose the Best House Cleaning Service in Silver Spring, MD (2026)",
    description:
      "A buyer's guide to choosing the best house cleaning service in Silver Spring, MD — the criteria that matter, red flags, and Silver Spring specifics (background checks, bilingual teams, older homes).",
    canonical: "https://capitalcleancare.com/blog/best-house-cleaning-service-silver-spring-md",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="best house cleaning service silver spring md, how to choose house cleaning silver spring, house cleaning company silver spring, bilingual cleaners silver spring maryland" />
      </Helmet>

      <ArticleSchema
        title="How to Choose the Best House Cleaning Service in Silver Spring, MD (2026)"
        description="A buyer's guide to choosing the best house cleaning service in Silver Spring — selection criteria, red flags, and Silver Spring-specific considerations."
        url="https://capitalcleancare.com/blog/best-house-cleaning-service-silver-spring-md"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Best House Cleaning Service in Silver Spring", href: "/blog/best-house-cleaning-service-silver-spring-md" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Best House Cleaning Service in Silver Spring" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A tree-lined street of older homes in Silver Spring, Maryland">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Local Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">How to Choose the Best House Cleaning Service in Silver Spring, MD</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">A buyer's guide — the criteria that matter, the red flags, and what's specific to Silver Spring</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Capital Clean Care · Silver Spring, MD · June 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Search "best house cleaning service in Silver Spring" and the first page is mostly directories — Yelp, Angi, Thumbtack — ranked by advertising spend, not by fit for <em>your</em> home. This guide gives you the real criteria to judge any company by, the red flags to avoid, and the handful of things that genuinely matter when cleaning a home in Silver Spring.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">5 Criteria for Choosing the Best</h2>
            <div className="space-y-4 mb-10">
              {criteria.map(([t, d], i) => (
                <div key={t} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-accent text-white font-bold flex items-center justify-center shadow-sm">{i + 1}</div>
                  <div><p className="font-semibold text-foreground">{t}</p><p className="text-sm text-muted-foreground leading-relaxed">{d}</p></div>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">What's Specific to Silver Spring</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Silver Spring isn't generic suburbia — a few local realities should shape who makes your shortlist:</p>
            <div className="space-y-5 mb-10">
              <div className="border-l-4 border-accent pl-4">
                <p className="font-semibold text-foreground mb-1">Federal & security-clearance households</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Silver Spring is home to a large population of federal employees and contractors, many holding security clearances. For these households, who enters your home is a real security matter. Make rigorous background checks a hard requirement, and choose a company that can explain exactly how it vets its team and who will be assigned to your home — in writing if you need it.</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <p className="font-semibold text-foreground mb-1">A bilingual, community-rooted workforce</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Silver Spring has a large, vibrant Latino community and a strongly bilingual cleaning workforce, so finding a Spanish-speaking team is easy and, for many families, a genuine convenience. Capital Clean Care is Latino-owned and serves clients in both English and Spanish — if language matters to you, it's worth asking up front.</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <p className="font-semibold text-foreground mb-1">Older housing stock in Downtown, Fenton Village & Woodside</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Much of Silver Spring's charm is its older homes and pre-war buildings — hardwood floors, vintage tile and grout, plaster walls, and original window treatments that call for a gentler, material-appropriate approach (steam or pH-balanced products over harsh chemicals). The best companies recognize older materials and adjust their methods. An older home that hasn't been thoroughly cleaned in a while often benefits from a <Link to="/blog/what-is-included-in-a-deep-cleaning" className="text-accent underline hover:no-underline">deep clean</Link> to reset before starting recurring service.</p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-secondary/40 border border-border rounded-2xl p-6 mb-10">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3 flex items-center gap-2"><AlertTriangle className="h-6 w-6 text-accent" /> Red flags to walk away from</h2>
              <ul className="space-y-2">
                {redFlags.map((r) => (<li key={r} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="text-accent font-bold">✕</span> {r}</li>))}
              </ul>
            </div>
          </FadeInSection>

          <BlogInlineCTA headline="Looking for a cleaning service in Silver Spring?" subtext="Capital Clean Care is Latino-owned, background-checked, and eco-friendly — serving Silver Spring in English and Spanish, with transparent pricing in writing. See our Silver Spring house cleaning service." ctaLabel="See Our Silver Spring Service" ctaTo="/locations/silver-spring-md/house-cleaning" />

          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12">
              <p className="font-semibold text-foreground mb-1">Keep reading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                See{" "}
                <Link to="/blog/house-cleaning-cost-silver-spring-md" className="text-accent underline hover:no-underline">how much house cleaning costs in Silver Spring</Link>{" "}
                or{" "}
                <Link to="/blog/is-professional-house-cleaning-worth-it" className="text-accent underline hover:no-underline">whether professional cleaning is worth it</Link>. Ready to book? Visit our{" "}
                <Link to="/locations/silver-spring-md/house-cleaning" className="text-accent underline hover:no-underline">Silver Spring house cleaning</Link>{" "}page.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">See Capital Clean Care in Silver Spring</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Latino-owned, background-checked, eco-friendly{" "}<Link to="/locations/silver-spring-md/house-cleaning" className="underline text-primary-foreground/90 hover:text-white">house cleaning in Silver Spring</Link>{" "}— English & Spanish, transparent pricing, satisfaction guaranteed.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <Link to="/locations/silver-spring-md/house-cleaning">Silver Spring House Cleaning <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </article>
      <StickyCTA />
    </Layout>
  );
};

export default BestHouseCleaningSilverSpring;
