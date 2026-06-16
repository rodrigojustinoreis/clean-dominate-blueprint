import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Lightbulb, Sparkles, RefreshCw } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/deep-vs-regular/hero.webp";

const compareRows: [string, boolean, boolean][] = [
  ["Dusting, vacuuming & mopping all rooms", true, true],
  ["Kitchen counters, sink & exterior of appliances", true, true],
  ["Bathrooms — toilets, showers, sinks, mirrors", true, true],
  ["Making beds & tidying surfaces", true, true],
  ["Baseboards, door frames & trim (detailed)", false, true],
  ["Inside the oven, fridge & cabinets", false, true],
  ["Grout scrubbing & tile detail", false, true],
  ["Ceiling fans, vents & light fixtures", false, true],
  ["Window tracks, sills & blinds", false, true],
  ["Behind & under movable furniture", false, true],
];

const faqs = [
  {
    q: "What's the difference between a deep cleaning and a regular cleaning?",
    a: "A regular (standard) cleaning maintains an already-cared-for home — dusting, vacuuming, mopping, kitchen and bathroom surfaces, and tidying, done on a recurring schedule. A deep cleaning is a top-to-bottom reset that adds everything a routine clean skips: detailed baseboards and trim, inside the oven and fridge, grout scrubbing, ceiling fans and vents, window tracks, and the build-up in corners and behind furniture. Put simply, regular cleaning keeps a clean home clean; a deep clean gets a home to that baseline in the first place.",
  },
  {
    q: "Do I need a deep cleaning before starting recurring service?",
    a: "Usually, yes — and most cleaning companies recommend it. If a home hasn't had a professional clean in a while, a first-visit deep clean resets it to a true baseline so that every recurring visit afterward is faster, more consistent, and more affordable. Think of it as the difference between catching up and keeping up: the deep clean catches the home up, and recurring service keeps it there. If your home is already well-maintained, you may be able to start straight into recurring.",
  },
  {
    q: "How much more does a deep cleaning cost than a regular cleaning?",
    a: "A deep clean typically runs roughly 40–75% more than a standard clean of the same home, because it takes significantly more time and detail. For a typical 3-bedroom home, a standard clean might be around $255–$310 while a deep clean runs about $375–$445. The exact difference depends on home size and condition — a home that hasn't been deep-cleaned in a long time takes more work. You only need a deep clean occasionally (a few times a year or before starting service), so the higher cost is infrequent.",
  },
  {
    q: "How often should I get a deep cleaning?",
    a: "For most homes, a deep clean every 3–4 months keeps the detailed areas (grout, baseboards, vents, inside appliances) from building up, on top of regular maintenance cleaning in between. Homes with pets, kids, allergies, or heavy use benefit from the more frequent end. If you keep a consistent recurring schedule, you can often stretch deep cleans further apart because less accumulates between visits.",
  },
  {
    q: "Which one should I book?",
    a: "Book a deep clean if it's been a while since the last thorough cleaning, you're moving in or out, hosting, recovering from a renovation, or starting recurring service for the first time. Choose a regular/standard clean if your home is already maintained and you just want it kept fresh on a schedule. When in doubt, a quick conversation (or free quote) sorts it out — we'll recommend the right starting point rather than overselling a deep clean you may not need.",
  },
];

const DeepVsRegularCleaning = () => {
  const { seoHelmet } = useSEO({
    title: "Deep Cleaning vs Regular Cleaning: What's the Difference?",
    description:
      "Deep cleaning vs regular cleaning — what each includes, when to book which, and how much more a deep clean costs. A clear comparison to help you choose the right service.",
    canonical: "https://capitalcleancare.com/blog/deep-cleaning-vs-regular-cleaning",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="deep cleaning vs regular cleaning, difference between deep and standard cleaning, what is deep cleaning, deep clean vs maintenance clean, house cleaning types" />
      </Helmet>

      <ArticleSchema
        title="Deep Cleaning vs Regular Cleaning: What's the Difference?"
        description="A clear comparison of deep cleaning vs regular (standard) cleaning — what each includes, when to choose which, the cost difference, and how often to deep clean."
        url="https://capitalcleancare.com/blog/deep-cleaning-vs-regular-cleaning"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Deep Cleaning vs Regular Cleaning", href: "/blog/deep-cleaning-vs-regular-cleaning" },
        ]}
      />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Deep Cleaning vs Regular Cleaning" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A professional cleaner deep-scrubbing tile next to a tidy, freshly maintained room">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Cleaning Guides
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          Deep Cleaning vs Regular Cleaning: What's the Difference?
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          What each one includes, when to book which, and how the cost compares
        </p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Capital Clean Care · MD · DC · VA · June 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">

          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              It's the most common question we hear before a first booking: <strong>do I need a deep cleaning or a regular cleaning?</strong> They sound similar, but they're built for different jobs — and booking the wrong one means either paying for more than you need or being disappointed that a standard clean didn't tackle years of build-up.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Here's the simple way to think about it: a <strong>regular clean keeps a clean home clean</strong>; a <strong>deep clean gets a home to that baseline</strong> in the first place. Below is exactly what each includes, when to choose which, and how the cost compares.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">What Each Cleaning Includes</h2>
            <div className="overflow-x-auto rounded-2xl border border-border mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary text-left">
                    <th className="px-4 py-3 font-semibold text-foreground">Task</th>
                    <th className="px-3 py-3 font-semibold text-foreground text-center">Regular</th>
                    <th className="px-3 py-3 font-semibold text-foreground text-center">Deep</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map(([task, reg, deep], i) => (
                    <tr key={task} className={`border-t border-border ${i % 2 ? "bg-secondary/30" : "bg-background"}`}>
                      <td className="px-4 py-3 text-foreground">{task}</td>
                      <td className="px-3 py-3 text-center">{reg ? <CheckCircle2 className="h-4 w-4 text-accent inline" /> : <span className="text-muted-foreground/40">—</span>}</td>
                      <td className="px-3 py-3 text-center">{deep ? <CheckCircle2 className="h-4 w-4 text-accent inline" /> : <span className="text-muted-foreground/40">—</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mb-10">A deep clean includes everything a regular clean does, plus the detailed, get-into-the-corners work that build-up requires.</p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">When to Choose Each</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="p-5 bg-secondary/40 border border-border rounded-2xl">
                <p className="font-heading font-bold text-foreground mb-2 flex items-center gap-2"><RefreshCw className="h-5 w-5 text-accent" /> Regular / Standard</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• Your home is already well-maintained</li>
                  <li>• You want it kept fresh on a schedule</li>
                  <li>• Weekly, bi-weekly, or monthly upkeep</li>
                  <li>• Lower per-visit cost</li>
                </ul>
              </div>
              <div className="p-5 bg-accent/10 border border-accent/30 rounded-2xl">
                <p className="font-heading font-bold text-foreground mb-2 flex items-center gap-2"><Sparkles className="h-5 w-5 text-accent" /> Deep Clean</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• It's been a while since a thorough clean</li>
                  <li>• Moving in or out, or post-renovation</li>
                  <li>• Hosting, holidays, or a fresh start</li>
                  <li>• Before starting recurring service</li>
                </ul>
              </div>
            </div>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5 mb-10 flex gap-4 items-start">
              <Lightbulb className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                <strong>The usual path:</strong> start with one deep clean to reset the home, then keep it that way with recurring standard cleans. Because the home never falls behind again, those recurring visits are faster — and cheaper — than repeated deep cleans.
              </p>
            </div>
          </FadeInSection>

          <BlogInlineCTA
            headline="Not sure which one your home needs?"
            subtext="Tell us about your home and we'll recommend the right starting point — no overselling. Free, no-obligation quotes across Bethesda, Rockville, Silver Spring, and Gaithersburg."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12">
              <p className="font-semibold text-foreground mb-1">Keep reading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                See exactly{" "}
                <Link to="/blog/what-is-included-in-a-deep-cleaning" className="text-accent underline hover:no-underline">what's included in a deep cleaning</Link>, learn{" "}
                <Link to="/blog/how-often-should-you-hire-a-cleaning-service" className="text-accent underline hover:no-underline">how often you should hire a cleaning service</Link>, or compare{" "}
                <Link to="/blog/one-time-vs-recurring-cleaning" className="text-accent underline hover:no-underline">one-time vs recurring cleaning</Link>.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Get the Right Clean for Your Home</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Capital Clean Care offers eco-friendly{" "}
                <Link to="/services/deep-cleaning" className="underline text-primary-foreground/90 hover:text-white">deep cleaning</Link>{" "}
                and{" "}
                <Link to="/services/recurring-cleaning" className="underline text-primary-foreground/90 hover:text-white">recurring cleaning</Link>{" "}
                across Maryland, DC, and Northern Virginia — background-checked, locally owned.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeInSection>

        </div>
      </article>

      <StickyCTA />
    </Layout>
  );
};

export default DeepVsRegularCleaning;
