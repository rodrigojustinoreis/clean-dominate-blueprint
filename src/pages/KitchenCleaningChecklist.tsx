import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, FAQSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/team/real-team-maria-fridge.webp";
const URL = "https://capitalcleancare.com/resources/kitchen-cleaning-checklist";

const CHECKLIST = [
  "Countertops and backsplash cleaned and disinfected",
  "Stovetop and range degreased, control knobs wiped",
  "Microwave cleaned inside and out",
  "Appliance exteriors — fridge, oven, dishwasher — wiped down",
  "Sink scrubbed and disinfected, faucet polished",
  "Cabinet fronts and handles cleaned",
  "Table and chairs wiped",
  "Fingerprints removed from woodwork, door frames and switch plates",
  "Windowsills wiped and baseboards dusted",
  "Trash emptied and liner replaced",
  "Floor swept and mopped last",
];

const STEPS: { step: string; text: string }[] = [
  { step: "1. Clear the counters", text: "Move small appliances, mail, and clutter off the counters so you can reach every surface. A clear counter is the difference between wiping around the mess and actually cleaning under it." },
  { step: "2. Degrease the stove & backsplash", text: "The stovetop, range hood, and backsplash collect the most grease. Spray a degreaser, let it dwell a minute, then wipe — this is where a kitchen goes from 'tidy' to genuinely clean." },
  { step: "3. Clean inside the microwave (and oven/fridge)", text: "Steam-clean the microwave, then wipe it out. For a full deep clean, do the inside of the oven and refrigerator too — the slow, detail jobs most routine cleans skip." },
  { step: "4. Wipe cabinets, then the sink", text: "Wipe cabinet fronts and handles (the greasiest touchpoints), then scrub the sink, disinfect it, and polish the faucet until it's spot-free." },
  { step: "5. Finish top-down: baseboards & floor", text: "Wipe baseboards, switch plates, and windowsills, then sweep and mop the floor last so anything you knocked down gets cleaned up on the way out." },
];

const faqs = [
  { q: "How often should you deep clean a kitchen?", a: "Wipe counters, the stovetop, and the sink daily, and give the whole kitchen a proper clean weekly. A deep clean — inside the oven, fridge, and range hood, plus baseboards and grout — is worth doing every 2 to 3 months, or quarterly alongside a whole-home deep clean." },
  { q: "What's included in a professional kitchen cleaning?", a: "A professional kitchen cleaning covers the full checklist above: degreased stovetop and backsplash, microwave inside and out, appliance exteriors, a scrubbed and disinfected sink, cabinet fronts, table and chairs, baseboards, and a swept-and-mopped floor. Inside the oven and fridge are usually add-ons or part of a deep clean." },
  { q: "How long does it take to deep clean a kitchen?", a: "A routine kitchen clean takes 30 to 60 minutes. A full deep clean — with the inside of the oven, refrigerator, and heavy degreasing — can take a couple of hours depending on the size and condition of the kitchen." },
  { q: "Do you offer kitchen cleaning in the DMV?", a: "Yes — kitchen cleaning is part of every Capital Clean Care visit across Maryland, DC, and Northern Virginia. Book a one-time deep clean to reset the kitchen, or a recurring plan to keep it that way. Request a free quote for your home." },
];

const KitchenCleaningChecklist = () => {
  const { seoHelmet } = useSEO({
    title: "Kitchen Cleaning Checklist: How to Deep Clean a Kitchen",
    description:
      "A step-by-step kitchen cleaning checklist — how to deep clean appliances, cabinets, backsplash, and the sink, plus when to book a pro in the DMV.",
    canonical: URL,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="kitchen cleaning checklist, how to deep clean a kitchen, kitchen deep cleaning, kitchen cleaning, deep clean kitchen" />
      </Helmet>
      <ArticleSchema
        title="The Complete Kitchen Cleaning Checklist"
        description="A step-by-step kitchen cleaning checklist and how to deep clean a kitchen — appliances, cabinets, backsplash, sink, and floor — plus when to hand it to a pro."
        url={URL}
        datePublished="2026-08-05"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />

      <BlogHero src={HERO_IMAGE} alt="A Capital Clean Care team member deep cleaning a kitchen in the DMV">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">The Complete Kitchen Cleaning Checklist</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">Your kitchen, cleaned the right way — every surface, in the right order</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · August 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The kitchen is the heart of your home — and the mess it collects some days proves it. Between cooking,
              eating, cleaning up, and the mail and clutter that pile up on the counter, keeping a kitchen clean can feel
              endless. This is the <strong>kitchen cleaning checklist</strong> our crews follow so nothing gets missed,
              plus how to deep clean a kitchen step by step.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="border-l-4 border-accent bg-accent/5 p-4 mb-10">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Rather have it done for you? Book our{" "}
                <Link to="/services/kitchen-cleaning" className="text-accent font-semibold underline hover:no-underline">kitchen cleaning service</Link>{" "}
                — a 5.0-star, bonded and insured team across Maryland, DC &amp; Northern Virginia.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-4 mb-4 flex items-center gap-2">
              <ChefHat className="h-6 w-6 text-accent shrink-0" /> What a Full Kitchen Cleaning Covers
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Every kitchen cleaning should hit these, top to bottom. It's the same list we work through on a standard
              visit — with the inside of the oven and fridge added on a deep clean.
            </p>
            <ul className="space-y-2.5 mb-6">
              {CHECKLIST.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> {i}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Something not on the list, or a kitchen that poses a special challenge? Just ask — we'll work with you to get
              it cleaned the way you want.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-accent shrink-0" /> How to Deep Clean a Kitchen, Step by Step
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Working in the right order saves time and means you never re-dirty a surface you already cleaned. Go
              top-down and save the floor for last.
            </p>
            <div className="space-y-4 mb-8">
              {STEPS.map((s) => (
                <div key={s.step} className="border border-border rounded-2xl p-5 bg-secondary/30">
                  <p className="font-heading font-bold text-foreground mb-1">{s.step}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA headline="Want the sparkling kitchen without the work?" subtext="Kitchen cleaning is part of every Capital Clean Care visit — weekly, bi-weekly, monthly, or a one-time deep clean. Eco-friendly products, background-checked crews, flat pricing." ctaLabel="Get My Free Quote" ctaTo="/contact" />
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">When to Hand the Kitchen to a Pro</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If the kitchen has months of built-up grease, or you just want it off your plate for good, a professional
              clean is the fast track. Book it on its own or fold it into a whole-home clean:
            </p>
            <ul className="space-y-2.5 mb-6">
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> Just the kitchen? Book our{" "}
                <Link to="/services/kitchen-cleaning" className="text-accent underline hover:no-underline">kitchen cleaning service</Link>{" "}— degreased stovetop and hood, shined appliances, sanitized counters.
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> A neglected kitchen? Start with a{" "}
                <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning</Link>{" "}to reset it — inside the oven, fridge, and every greasy corner.
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> Want it to stay clean? A{" "}
                <Link to="/services/recurring-cleaning" className="text-accent underline hover:no-underline">recurring plan</Link>{" "}keeps the kitchen fresh weekly, bi-weekly, or monthly.
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> Just need routine upkeep? Our{" "}
                <Link to="/services/house-cleaning" className="text-accent underline hover:no-underline">house cleaning</Link>{" "}covers the kitchen on every visit.
              </li>
            </ul>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-12 mb-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Your Kitchen, Sparkling — Without the Work</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Rated 5.0 stars across 45 Google reviews. Eco-friendly kitchen cleaning across Bethesda, Rockville, Silver
                Spring, and the wider DMV.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                  <a href="tel:+12407042551">Call (240) 704-2551</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                  <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-accent" /> Kitchen Cleaning FAQ
            </h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="kitchen-cleaning-checklist" />
      <StickyCTA />
    </Layout>
  );
};

export default KitchenCleaningChecklist;
