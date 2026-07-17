import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/cluster/eco.webp";
const OG_IMAGE = "/images/cluster/eco-og.jpg";
const URL = "https://capitalcleancare.com/resources/eco-friendly-deep-cleaning";

// The GreenShield 5-Step Clean™ — matches src/components/GreenShield5Step.tsx (single source of truth).
const steps: { n: string; title: string; text: string }[] = [
  { n: "01", title: "Assess & Protect", text: "Before touching a surface, the technician walks the home to identify priorities, protect delicate items, and tailor the plan — no one-size-fits-all chemical blitz." },
  { n: "02", title: "Dust-Free Air Start", text: "Top-to-bottom dry dusting of fans, vents, blinds, and baseboards happens before any wet cleaning, so dust is captured instead of driven into the air." },
  { n: "03", title: "GreenShield Sanitize", text: "EPA Safer Choice™ plant-based disinfectants go on every high-touch surface, bathroom, and kitchen area — effective on germs, safe for children, pets, and allergy sufferers." },
  { n: "04", title: "Deep Scrub & Polish", text: "Detailed scrubbing of surfaces, floors, appliances, grout, and fixtures — including inside microwaves, stovetops, and shower grout — to a streak-free finish, against a 50-point checklist." },
  { n: "05", title: "White-Glove Inspection", text: "A final quality inspection against the checklist. Anything that isn't right gets re-cleaned on the spot — no harsh 'masking' fragrance to cover a rushed job." },
];

const faqs = [
  { q: "Are eco-friendly products as effective as harsh chemicals for a deep clean?", a: "Yes — for the overwhelming majority of household deep-cleaning tasks, plant-based products clean just as well. The 'power' most people associate with bleach and ammonia is really about technique and dwell time, not toxicity: let a good product sit, agitate with the right tool, and grease, soap scum, and grime come off. What harsh chemicals add is fumes and residue, not better results. The rare cases that genuinely need a specialty product are the exception, not the rule." },
  { q: "What does EPA Safer Choice certified mean?", a: "Safer Choice is a U.S. Environmental Protection Agency program that reviews every ingredient in a product for human and environmental safety. A product can only carry the label if each ingredient meets the EPA's health and environmental criteria — so it's an independent, government-backed signal rather than a company simply calling itself 'green.' It's the certification we look for, and it's why our products are safe to use around kids, pets, and allergy-sensitive households." },
  { q: "Is eco-friendly deep cleaning safe for pets and kids?", a: "That's the whole point. Plant-based, EPA Safer Choice products don't leave the chemical residue or airborne irritants that conventional cleaners do, which matters most for the family members closest to the floor — crawling babies and pets. There's no need to leave the house for hours after the clean or ventilate away fumes." },
  { q: "Do you ever use bleach or ammonia?", a: "Our standard deep clean is built entirely around plant-based, EPA Safer Choice products — no bleach or ammonia by default. If a specific surface or situation genuinely calls for something different, we'll talk it through with you first rather than spring it on your home. For most homes, it simply never comes up." },
];

const EcoFriendlyDeepCleaning = () => {
  const { seoHelmet } = useSEO({
    title: "Eco-Friendly Deep Cleaning: The GreenShield Method",
    description:
      "Why a deep clean doesn't need harsh chemicals. How the GreenShield 5-Step Clean™ and EPA Safer Choice products deliver a top-to-bottom deep clean that's safe for kids, pets, and allergies.",
    canonical: URL,
    ogImage: OG_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="eco-friendly deep cleaning, non-toxic deep clean, green deep cleaning, deep cleaning without chemicals, EPA Safer Choice cleaning, pet-safe deep cleaning" />
      </Helmet>
      <ArticleSchema
        title="Eco-Friendly Deep Cleaning: The GreenShield Method"
        description="Why deep cleaning doesn't need harsh chemicals — the GreenShield 5-Step Clean and EPA Safer Choice products behind a non-toxic, top-to-bottom deep clean."
        url={URL}
        datePublished="2026-07-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Eco-Friendly Deep Cleaning", href: "/resources/eco-friendly-deep-cleaning" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Eco-Friendly Deep Cleaning" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="Plant-based, eco-friendly cleaning supplies and a potted plant on a clean kitchen counter">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">Eco-Friendly Deep Cleaning</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">Why a deep clean doesn't need harsh chemicals — the GreenShield method</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              There's a common assumption that a real deep clean requires harsh chemicals — that bleach and ammonia are
              the price of a truly clean home. They aren't. A thorough deep clean is about method and detail, not
              toxicity, and the right plant-based products get the same results without the fumes, the residue, or the
              risk to the people and pets who live there.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Here's the method behind an eco-friendly deep clean — the GreenShield 5-Step Clean™ and the EPA Safer
              Choice™ products at its core — and why it's the standard we build every deep clean around.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-4 mb-6 scroll-mt-24">The GreenShield 5-Step Clean™</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every Capital Clean Care deep clean follows the same five steps. The order is the point: it's what makes a
              plant-based clean as thorough as any chemical-heavy one.
            </p>
            <div className="space-y-6 mb-8">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent text-white font-bold text-lg flex items-center justify-center shadow-md">{s.n}</div>
                  <div><h3 className="font-heading text-xl font-bold text-foreground mb-1.5">{s.title}</h3><p className="text-muted-foreground leading-relaxed">{s.text}</p></div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              It's the same scope as any deep clean — see{" "}
              <Link to="/resources/what-is-included-in-a-deep-cleaning" className="text-accent underline hover:no-underline">what's included in a deep cleaning</Link>{" "}
              — just delivered with safer products and a method that captures dust rather than pushing it around.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 scroll-mt-24">Why EPA Safer Choice™ Products Are the Backbone</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The products do the quiet work, and this is where "eco-friendly" has to mean something specific rather than
              a label. EPA Safer Choice is a U.S. Environmental Protection Agency certification: every ingredient in a
              product is independently reviewed against health and environmental criteria, and the product only earns the
              mark if all of them pass. That matters for a few reasons:
            </p>
            <ul className="space-y-2.5 mb-4">
              {[
                "No harsh residue on the surfaces your family touches — counters, floors, and the spots kids and pets live on.",
                "No lingering airborne irritants, so no need to air out the house or leave for hours after a clean.",
                "Safe around children, pets, and allergy- or asthma-sensitive households.",
                "Gentler on the Chesapeake Bay watershed that all of Montgomery County drains into — what goes down the drain matters here.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              It's the same thinking behind our{" "}
              <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">eco-friendly cleaning service</Link>{" "}
              — the full case is in{" "}
              <Link to="/why-eco-friendly-cleaning" className="text-accent underline hover:no-underline">why eco-friendly cleaning matters</Link>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA headline="Want a deep clean that's tough on grime, not your home?" subtext="Every deep clean uses the GreenShield 5-Step method and EPA Safer Choice products — safe for kids, pets, and allergies. Flat pricing across Montgomery County and the DMV." ctaLabel="Get My Free Quote" ctaTo="/contact" />
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 scroll-mt-24">Why a Deep Clean Doesn't Need Bleach or Ammonia</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The muscle in a deep clean comes from technique, not caustic chemistry. Give a good plant-based product time
              to dwell, agitate with the right tool — a scrub brush, a microfiber pad, a bit of steam — and the same soap
              scum, grease, and grime lift off. What bleach and ammonia mainly add is fumes, residue, and risk, including
              the danger of accidentally mixing the two into something genuinely toxic.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Take the jobs people assume need bleach. Bathroom soap scum and hard-water film come off with a mildly
              acidic plant-based cleaner and a few minutes of dwell time. Kitchen grease lifts with a plant-based
              degreaser and a warm cloth. Even surface mildew, common in the DMV's humid climate, responds to the right
              product plus ventilation and scrubbing — no chlorine haze required. The result looks and feels identical;
              the difference is what you're left breathing afterward.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              It's the same conclusion we reach on local eco-cleaning: see{" "}
              <Link to="/resources/deep-cleaning-montgomery-county-md" className="text-accent underline hover:no-underline">eco-friendly deep cleaning in Montgomery County</Link>{" "}
              and everyday{" "}
              <Link to="/resources/eco-cleaning-tips-maryland-homes" className="text-accent underline hover:no-underline">eco-cleaning tips for Maryland homes</Link>. The
              full deep-clean scope and pricing live on our{" "}
              <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning service page</Link>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg my-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">A Deep Clean Your Whole Household Can Breathe Easy About</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Plant-based, EPA Safer Choice products and the GreenShield 5-Step method — tough on grime, safe for kids and pets. 5.0 stars across 45 Google reviews, serving the DMV since 2015.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                  <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/40 px-8 py-6 rounded-full text-base font-semibold" asChild>
                  <a href="tel:+12407042551"><Phone className="mr-2 h-4 w-4" /> Call (240) 704-2551</a>
                </Button>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6 scroll-mt-24">Eco-Friendly Deep Cleaning: FAQ</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="eco-friendly-deep-cleaning" />
      <StickyCTA />
    </Layout>
  );
};

export default EcoFriendlyDeepCleaning;
