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

const HERO_IMAGE = "/images/blog/deep-scrub-detail.webp";
const URL = "https://capitalcleancare.com/resources/how-often-should-you-deep-clean";

// Recommended deep-clean cadence by household profile. Baseline (twice a year / quarterly) is our
// standing recommendation; the profile adjustments are guidance, presented as recommendations.
const frequency: [string, string][] = [
  ["Well-kept home, no pets or young kids", "1–2× a year (spring and fall)"],
  ["On a recurring cleaning plan", "Once a year to reset the baseline"],
  ["Homes with shedding pets", "Every 3–4 months"],
  ["Homes with young children", "Every 3–4 months"],
  ["Allergy or asthma household", "Every 2–3 months"],
  ["Large or high-traffic household", "Quarterly (every 3 months)"],
  ["Before selling, hosting, or after a renovation", "As needed — a one-time deep clean"],
];

const faqs = [
  { q: "How often should you deep clean your house?", a: "As a baseline, most homes benefit from a deep clean at least twice a year, and ideally once a quarter. That cadence keeps buildup from ever getting ahead of you. The right number moves up from there based on your household: pets, young children, allergies, and heavy foot traffic all argue for cleaning every three to four months, while a well-kept home with recurring service may only need one deep clean a year to reset the baseline." },
  { q: "How often should pet owners deep clean?", a: "Every three to four months is a good target for homes with shedding dogs or cats. Pet hair and dander collect on baseboards, vents, upholstery, and in corners between visits, and those are exactly the areas a deep clean reaches that a routine tidy does not. Regular vacuuming in between helps, but a quarterly deep clean keeps the allergen load and the odor down." },
  { q: "Can you deep clean your house too often?", a: "There's no real downside to deep cleaning more often — surfaces don't wear from being cleaned with pH-neutral, EPA Safer Choice products. The only consideration is value: past a point, a lighter recurring clean maintains a home just as well for less. Most households land on one or two deep cleans a year plus recurring standard cleans, rather than repeated back-to-back deep cleans." },
  { q: "Do I still need a deep clean if I have recurring cleaning?", a: "Usually about once a year, yes. Recurring standard cleans are excellent at maintaining a baseline, but they intentionally skip the slow detail work — inside appliances, grout, behind furniture — to stay quick and affordable. An annual deep clean catches up on that detail and resets the home, so your recurring visits keep performing at their best." },
];

const HowOftenDeepClean = () => {
  const { seoHelmet } = useSEO({
    title: "How Often Should You Deep Clean Your House?",
    description:
      "How often should you deep clean? A baseline of twice a year, adjusted by household — pets, kids, allergies, and selling. Recommended frequency by profile, plus how to stretch the time between cleans.",
    canonical: URL,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="how often should you deep clean, deep cleaning frequency, how often deep clean house, deep clean with pets, how often deep clean with allergies" />
      </Helmet>
      <ArticleSchema
        title="How Often Should You Deep Clean Your House?"
        description="How often to deep clean your house by household profile — a baseline of twice a year, adjusted for pets, kids, allergies, and homes going up for sale."
        url={URL}
        datePublished="2026-07-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Often Should You Deep Clean", href: "/resources/how-often-should-you-deep-clean" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Often Should You Deep Clean?" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="how often should you deep clean — DMV team deep scrubbing a bathroom">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">How Often Should You Deep Clean Your House?</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">A baseline of twice a year — adjusted for pets, kids, allergies, and selling</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Most homes should be deep cleaned <strong>at least twice a year, and ideally once a quarter</strong>. That's the
              baseline we recommend for a home in average condition. From there, the right frequency depends on who lives in the
              house: pets, young children, allergies, and heavy foot traffic all push the number up, while a well-kept home on a
              recurring plan can often get by with a single deep clean a year to reset the baseline.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Below is a quick reference by household profile, then a closer look at each situation and how to stretch the time
              between deep cleans without letting buildup win.
            </p>
          </FadeInSection>

          <FadeInSection>
            <nav aria-label="Table of contents" className="border border-border rounded-2xl bg-secondary/30 p-5 mb-10">
              <p className="font-heading font-bold text-foreground mb-3 text-sm uppercase tracking-wider">In this guide</p>
              <ul className="space-y-1.5 text-sm">
                <li><a href="#by-profile" className="text-accent underline hover:no-underline">Recommended frequency by household</a></li>
                <li><a href="#baseline" className="text-accent underline hover:no-underline">The baseline: once or twice a year</a></li>
                <li><a href="#pets-kids" className="text-accent underline hover:no-underline">Pets, kids, and allergies</a></li>
                <li><a href="#one-off" className="text-accent underline hover:no-underline">One-off situations: selling, hosting, renovations</a></li>
                <li><a href="#between" className="text-accent underline hover:no-underline">How to stretch the time between deep cleans</a></li>
                <li><a href="#faq" className="text-accent underline hover:no-underline">Deep cleaning frequency FAQ</a></li>
              </ul>
            </nav>
          </FadeInSection>

          <FadeInSection>
            <h2 id="by-profile" className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-4 mb-4 scroll-mt-24">Recommended Frequency by Household</h2>
            <div className="rounded-2xl border border-border overflow-hidden mb-6 text-sm">
              <div className="grid grid-cols-2 bg-primary text-primary-foreground font-semibold">
                <div className="p-3">Your household</div>
                <div className="p-3">Suggested deep-clean cadence</div>
              </div>
              {frequency.map((r, i) => (
                <div key={r[0]} className={`grid grid-cols-2 border-t border-border ${i % 2 === 1 ? "bg-secondary/30" : "bg-white"}`}>
                  <div className="p-3 font-medium text-foreground">{r[0]}</div>
                  <div className="p-3 text-muted-foreground">{r[1]}</div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Think of these as starting points, not rules. The honest test is simple: if the detail areas — grout, baseboards,
              vents, inside the oven — have visibly built up since the last deep clean, it's time for another one.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 id="baseline" className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 scroll-mt-24">The Baseline: Once or Twice a Year</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For a home in average condition with no pets or young children, one or two deep cleans a year keeps everything in
              check. The most common pattern in the DMV is a spring deep clean to clear a winter's worth of closed-window dust,
              and a fall one to reset before the holidays. If your home is already on a{" "}
              <Link to="/services/recurring-cleaning" className="text-accent underline hover:no-underline">recurring cleaning plan</Link>, a
              single annual deep clean is usually enough — the recurring visits handle maintenance, and the deep clean catches up
              on the detail work they intentionally skip.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Not sure what that detail work actually covers? See exactly{" "}
              <Link to="/resources/what-is-included-in-a-deep-cleaning" className="text-accent underline hover:no-underline">what's included in a deep cleaning</Link>{" "}
              versus a standard clean.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 id="pets-kids" className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6 scroll-mt-24">Pets, Kids, and Allergies</h2>
            <div className="space-y-4 mb-6">
              <div className="border border-border rounded-2xl p-5 bg-secondary/30">
                <p className="font-heading font-bold text-foreground mb-1.5">Homes with shedding pets — every 3–4 months</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Dogs and cats put hair and dander on baseboards, vents, upholstery, and stair corners between visits. A quarterly deep clean keeps the allergen load and the odor down in ways routine vacuuming can't reach on its own.</p>
              </div>
              <div className="border border-border rounded-2xl p-5 bg-secondary/30">
                <p className="font-heading font-bold text-foreground mb-1.5">Homes with young children — every 3–4 months</p>
                <p className="text-sm text-muted-foreground leading-relaxed">More spills, more floor time, and more high-touch surfaces mean grime accumulates faster. Deep cleaning quarterly — with pet- and kid-safe, EPA Safer Choice products — keeps the surfaces little ones actually live on genuinely clean.</p>
              </div>
              <div className="border border-border rounded-2xl p-5 bg-secondary/30">
                <p className="font-heading font-bold text-foreground mb-1.5">Allergy or asthma households — every 2–3 months</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Dust mites, dander, and settled pollen concentrate in exactly the places a deep clean targets: behind furniture, along baseboards, and in vents. Cleaning every two to three months measurably lowers the indoor allergen load. The DMV's long pollen season makes this especially worthwhile in spring and fall.</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              If more than one of these applies — a shedding dog and a toddler, say — go with the shorter interval.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA headline="Not sure how often your home needs it?" subtext="Tell us about your household — pets, kids, and how it's used — and we'll recommend a realistic cadence with flat, no-obligation pricing. EPA Safer Choice products across Montgomery County and the DMV." ctaLabel="Get My Free Quote" ctaTo="/contact" />
          </FadeInSection>

          <FadeInSection>
            <h2 id="one-off" className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 scroll-mt-24">One-Off Situations: Selling, Hosting, Renovations</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Some deep cleans aren't about a schedule at all — they're tied to an event. A deep clean before you list or sell
              makes a home photograph and show far better; one before a big gathering gets you guest-ready fast; and one after a
              renovation clears the fine construction dust that settles into every vent and surface. For that last case, our
              dedicated{" "}
              <Link to="/services/post-construction-cleaning" className="text-accent underline hover:no-underline">post-construction cleaning</Link>{" "}
              goes a step further than a standard deep clean.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Moving in or out is its own version of this: an empty home is the one time every surface is reachable. Pair a deep
              clean with our{" "}
              <Link to="/services/move-out-cleaning" className="text-accent underline hover:no-underline">move-in / move-out service</Link>{" "}
              to protect a deposit or start fresh in a new place.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 id="between" className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 scroll-mt-24">How to Stretch the Time Between Deep Cleans</h2>
            <ul className="space-y-2.5 mb-4">
              {[
                "Keep a recurring standard clean going. Regular maintenance is what lets most homes go a full year between deep cleans instead of needing one every season.",
                "Deal with the detail zones little and often — a quick wipe of baseboards or a vent here and there stops buildup from compounding.",
                "Control what comes in: a shoes-off habit and entry mats cut the grit that grinds into floors and grout.",
                "Run bathroom and kitchen fans to manage the humidity that feeds soap scum and mildew — a real factor in the DMV's climate.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              When it is time to book, it helps to know what to expect: see{" "}
              <Link to="/resources/how-long-does-deep-cleaning-take" className="text-accent underline hover:no-underline">how long a deep cleaning takes</Link>{" "}
              and{" "}
              <Link to="/resources/how-much-does-deep-cleaning-cost" className="text-accent underline hover:no-underline">how much it costs</Link>, or read the
              full scope on our{" "}
              <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning service page</Link>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg my-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Get a Cadence That Fits Your Home</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Tell us about your household and we'll recommend how often to deep clean, with flat pricing and no pressure. 5.0 stars across 45 Google reviews, serving Montgomery County and the DMV since 2015.</p>
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
            <h2 id="faq" className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6 scroll-mt-24">Deep Cleaning Frequency FAQ</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="how-often-should-you-deep-clean" />
      <StickyCTA />
    </Layout>
  );
};

export default HowOftenDeepClean;
