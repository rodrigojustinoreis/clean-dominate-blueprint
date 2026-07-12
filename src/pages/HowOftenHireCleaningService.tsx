import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Users, PawPrint, Baby, Briefcase } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/how-often-hire/hero.webp";

const cadence: { freq: string; who: string; detail: string }[] = [
  { freq: "Weekly", who: "Busy families, pet owners, large homes, allergy sufferers", detail: "Keeps a high-traffic home consistently fresh and stops dust, pet hair, and grime from ever building up. The most popular choice for households with kids or pets." },
  { freq: "Every 2 weeks", who: "Most households — the sweet spot", detail: "Biweekly is the most common recurring schedule. It keeps the home clean without the cost of weekly visits, and is plenty for couples, small families, and tidy homes." },
  { freq: "Monthly", who: "Singles, couples, low-traffic or tidy homes", detail: "A monthly reset works if you keep up with light tidying yourself and just want the deeper work — bathrooms, floors, kitchen — handled regularly." },
  { freq: "One-time / occasional", who: "Move-ins, move-outs, hosting, spring cleaning", detail: "A single deep clean for a specific occasion, with no commitment. Many people start here, then switch to recurring once they see the difference." },
];

const factors: { icon: typeof Users; title: string; text: string }[] = [
  { icon: PawPrint, title: "Pets", text: "Dogs and cats mean more hair, dander, and odor — most pet owners benefit from weekly or biweekly cleaning to keep air and floors fresh." },
  { icon: Baby, title: "Kids at home", text: "Children add spills, crumbs, and high-touch messes. Families with young kids usually land on weekly or biweekly service." },
  { icon: Briefcase, title: "Your schedule", text: "If work and life leave no time for upkeep, more frequent cleaning keeps the home from slipping. The busier you are, the more recurring service pays off." },
  { icon: Users, title: "Household size", text: "More people means more mess, faster. A full house of four needs cleaning more often than a one-bedroom apartment." },
];

const faqs = [
  { q: "How often should I have my house professionally cleaned?", a: "For most households, every two weeks (biweekly) is the sweet spot — it keeps the home consistently clean without the cost of weekly visits. Choose weekly if you have pets, young children, allergies, or a large, high-traffic home. Monthly works for singles, couples, or tidy homes where you handle light upkeep yourself. If you're not sure, start biweekly and adjust." },
  { q: "Is it worth getting a cleaner every week?", a: "For busy families, pet owners, allergy sufferers, and larger homes, yes — weekly cleaning stops dust, pet hair, and grime from ever building up, so the home stays effortlessly fresh and each visit is faster and easier. For smaller or low-traffic homes, biweekly usually gives the same result for less. It comes down to how quickly your home gets messy and how much upkeep you want to do yourself." },
  { q: "What's the most popular cleaning frequency?", a: "Every two weeks is by far the most common recurring schedule. It strikes the best balance between a consistently clean home and a manageable budget, which is why most of our recurring clients in Bethesda, Rockville, and Silver Spring choose it." },
  { q: "Do I have to commit to a recurring schedule?", a: "No. You can book a single one-time clean for a move, an event, or a seasonal reset with no commitment. That said, recurring clients usually get a lower per-visit rate, and because the home stays maintained, each clean takes less time. Many people start with one deep clean and then switch to biweekly or weekly." },
];

const HowOftenHireCleaningService = () => {
  const { seoHelmet } = useSEO({
    title: "How Often Should You Hire a Cleaning Service?",
    description:
      "How often to hire a house cleaning service — weekly, biweekly, or monthly. The factors that decide your ideal frequency (pets, kids, schedule, home size) and what most households choose.",
    canonical: "https://capitalcleancare.com/blog/how-often-should-you-hire-a-cleaning-service",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="how often should you hire a cleaning service, how often house cleaning, weekly vs biweekly cleaning, cleaning frequency, how often clean house professionally" />
      </Helmet>

      <ArticleSchema
        title="How Often Should You Hire a Cleaning Service?"
        description="A guide to choosing how often to hire a house cleaner — weekly, biweekly, monthly, or one-time — based on pets, kids, schedule, and home size."
        url="https://capitalcleancare.com/blog/how-often-should-you-hire-a-cleaning-service"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "How Often Should You Hire a Cleaning Service", href: "/blog/how-often-should-you-hire-a-cleaning-service" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "How Often Should You Hire a Cleaning Service?" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A clean, bright living room in a Maryland home kept fresh by recurring cleaning">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">How Often Should You Hire a Cleaning Service?</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">Weekly, biweekly, or monthly — how to find the right frequency for your home</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Capital Clean Care · MD · DC · VA · June 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The short answer: <strong>most households do best with a cleaning every two weeks.</strong> But the right frequency for <em>your</em> home depends on a handful of things — pets, kids, your schedule, and how big the home is. Here's how to find the cadence that keeps your home fresh without overspending.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Cleaning Frequency at a Glance</h2>
            <div className="space-y-4 mb-10">
              {cadence.map((c) => (
                <div key={c.freq} className="border border-border rounded-2xl p-5 bg-secondary/30">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                    <p className="font-heading font-bold text-foreground text-lg">{c.freq}</p>
                    <p className="text-sm text-accent font-medium">Best for: {c.who}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">What Determines Your Ideal Frequency</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {factors.map((f) => (
                <div key={f.title} className="border border-border rounded-2xl p-5 bg-white">
                  <f.icon className="h-7 w-7 text-accent mb-3" />
                  <p className="font-heading font-bold text-foreground mb-1.5">{f.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          <BlogInlineCTA headline="Not sure how often you need a cleaner?" subtext="Tell us about your home and we'll recommend the right schedule — weekly, biweekly, or monthly. Eco-friendly, background-checked cleaners across Bethesda, Rockville, Silver Spring & Gaithersburg." ctaLabel="Get My Free Quote" ctaTo="/contact" />

          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12">
              <p className="font-semibold text-foreground mb-1">Keep reading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Deciding between schedules? See{" "}
                <Link to="/blog/one-time-vs-recurring-cleaning" className="text-accent underline hover:no-underline">one-time vs recurring cleaning</Link>{" "}
                and{" "}
                <Link to="/blog/recurring-cleaning-weekly-biweekly-monthly" className="text-accent underline hover:no-underline">weekly vs biweekly vs monthly</Link>.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Find Your Perfect Cleaning Schedule</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Eco-friendly{" "}<Link to="/services/recurring-cleaning" className="underline text-primary-foreground/90 hover:text-white">recurring cleaning</Link>{" "}across Maryland, DC, and Northern Virginia — background-checked, locally owned, satisfaction guaranteed.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </article>
      <div className="container mx-auto px-4 max-w-3xl pb-10"><p className="text-sm text-muted-foreground">Related: wondering about etiquette? See{" "}<Link to="/blog/how-much-tip-house-cleaner" className="text-accent underline hover:no-underline">how much to tip your house cleaner</Link>.</p></div>
      <RelatedPosts currentSlug="how-often-should-you-hire-a-cleaning-service" />
      <StickyCTA />
    </Layout>
  );
};

export default HowOftenHireCleaningService;
