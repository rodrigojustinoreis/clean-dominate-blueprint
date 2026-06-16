import { Link } from "react-router-dom";
import { ArrowRight, Clock, ShieldCheck, Sparkles, HeartPulse } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/is-cleaning-worth-it/hero.webp";

const benefits: { icon: typeof Clock; title: string; text: string }[] = [
  { icon: Clock, title: "It buys back your time", text: "A professional team cleans a whole home in a fraction of the time it takes you — and those are hours back for family, work, or rest. For most busy households, time is the real return." },
  { icon: Sparkles, title: "A consistently higher standard", text: "Pros clean to a checklist every visit, with the right products and equipment for each surface. The home stays presentable all the time, not just the weekend you find time to deep clean." },
  { icon: HeartPulse, title: "A healthier home", text: "Regular professional cleaning lowers dust, dander, and allergens — especially with HEPA equipment and eco-friendly products. It matters most for homes with pets, kids, or allergy sufferers." },
  { icon: ShieldCheck, title: "Less stress, no equipment", text: "No supplies to buy, no weekend chore looming. Background-checked, insured cleaners handle it, and a satisfaction guarantee means it's done right." },
];

const worthItIf = [
  "You're a busy professional or family with little free time",
  "You have pets, kids, or allergies (more cleaning needed)",
  "You have a larger home that's a lot to keep up with",
  "You value your weekends and peace of mind",
  "You want a consistent standard, not occasional catch-up",
];

const maybeNot = [
  "You have plenty of time and genuinely enjoy cleaning",
  "Your home is very small and easy to maintain",
  "Your budget is tight and upkeep isn't a pain point",
];

const faqs = [
  { q: "Is professional house cleaning worth the money?", a: "For most busy households, yes — the value is the time it buys back and the consistent standard it keeps. A professional team cleans a whole home in a fraction of the time it would take you, with the right products and equipment, and recurring service means the home is always presentable rather than only after a weekend of effort. Whether it's worth it for you comes down to how much you value your time and how much cleaning currently weighs on you." },
  { q: "How much does it cost to make it worth it?", a: "Recurring cleaning is the most cost-effective option: a biweekly clean for a typical home runs roughly $215–$310 per visit in the DMV, and because the home stays maintained, each visit is faster. Spread across the hours it returns to you, most clients find the per-visit cost modest. A one-time deep clean costs more but is occasional. See our cost guides for exact figures by home size and city." },
  { q: "Is it worth getting a cleaner if I have pets?", a: "Often more so. Pets add hair, dander, and odor that build up quickly, and controlling them takes consistent work and the right equipment (true-HEPA vacuuming, pet-safe products). A professional routine keeps air and floors fresher than occasional DIY cleaning, which is why many pet owners find recurring service especially worthwhile." },
  { q: "What's the most cost-effective way to use a cleaning service?", a: "Start with one deep clean to reset the home to a baseline, then switch to recurring standard cleans (biweekly is the popular middle ground) to keep it there. Recurring visits are priced lower per visit than one-off cleans and take less time because grime never accumulates — so you get the most clean for your money." },
];

const IsProfessionalCleaningWorthIt = () => {
  const { seoHelmet } = useSEO({
    title: "Is Professional House Cleaning Worth It?",
    description:
      "Is hiring a house cleaning service worth the money? The real benefits (time, consistency, a healthier home), when it's worth it, when it's not, and the most cost-effective way to use one.",
    canonical: "https://capitalcleancare.com/blog/is-professional-house-cleaning-worth-it",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="is professional house cleaning worth it, is hiring a cleaner worth it, house cleaning service worth the money, benefits of professional cleaning" />
      </Helmet>

      <ArticleSchema
        title="Is Professional House Cleaning Worth It?"
        description="The real benefits of a professional house cleaning service, when it's worth the money, when it isn't, and the most cost-effective way to use one."
        url="https://capitalcleancare.com/blog/is-professional-house-cleaning-worth-it"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Is Professional House Cleaning Worth It", href: "/blog/is-professional-house-cleaning-worth-it" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Is Professional House Cleaning Worth It?" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A homeowner relaxing in a spotless, sunlit living room in a Maryland home">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">Is Professional House Cleaning Worth It?</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">An honest look at the value — and when it isn't worth it</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Capital Clean Care · MD · DC · VA · June 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The honest answer: for most busy households, <strong>yes</strong> — but the real value isn't a sparkling floor, it's the <strong>time it buys back</strong> and the consistent standard it keeps. Here's a clear-eyed look at the benefits, who it's worth it for, who it isn't, and how to get the most for your money.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">What You're Really Paying For</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((b) => (
                <div key={b.title} className="border border-border rounded-2xl p-5 bg-white">
                  <b.icon className="h-7 w-7 text-accent mb-3" />
                  <p className="font-heading font-bold text-foreground mb-1.5">{b.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-5 mb-10">
              <div className="border-2 border-accent rounded-2xl p-6 bg-accent/5">
                <h2 className="font-heading text-xl font-bold text-foreground mb-3">It's worth it if…</h2>
                <ul className="space-y-2">
                  {worthItIf.map((t) => (<li key={t} className="flex items-start gap-2 text-sm text-foreground"><span className="text-accent font-bold">✓</span> {t}</li>))}
                </ul>
              </div>
              <div className="border border-border rounded-2xl p-6 bg-secondary/30">
                <h2 className="font-heading text-xl font-bold text-foreground mb-3">It may not be if…</h2>
                <ul className="space-y-2">
                  {maybeNot.map((t) => (<li key={t} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="text-muted-foreground font-bold">–</span> {t}</li>))}
                </ul>
              </div>
            </div>
          </FadeInSection>

          <BlogInlineCTA headline="See what it would cost for your home" subtext="Get a clear, no-obligation quote and decide for yourself. Eco-friendly, background-checked cleaners across Bethesda, Rockville, Silver Spring & Gaithersburg." ctaLabel="Get My Free Quote" ctaTo="/contact" />

          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12">
              <p className="font-semibold text-foreground mb-1">Keep reading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                See{" "}
                <Link to="/blog/how-often-should-you-hire-a-cleaning-service" className="text-accent underline hover:no-underline">how often you should hire a cleaning service</Link>{" "}
                or{" "}
                <Link to="/blog/house-cleaning-prices-maryland-2026" className="text-accent underline hover:no-underline">what house cleaning costs in Maryland</Link>.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Decide for Yourself — Get a Free Quote</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Eco-friendly{" "}<Link to="/services/recurring-cleaning" className="underline text-primary-foreground/90 hover:text-white">recurring cleaning</Link>{" "}across Maryland, DC, and Northern Virginia — background-checked, locally owned, satisfaction guaranteed.</p>
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

export default IsProfessionalCleaningWorthIt;
