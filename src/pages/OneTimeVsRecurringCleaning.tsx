import { Link } from "react-router-dom";
import { ArrowRight, Check, Sparkles, RefreshCw } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/one-time-vs-recurring/hero.webp";

const oneTimeFor = [
  "Moving in or out of a home",
  "Hosting a party or holiday gathering",
  "A seasonal or spring deep clean",
  "After a renovation or construction",
  "Trying a cleaning company before committing",
];

const recurringFor = [
  "Keeping a busy household consistently clean",
  "Homes with pets, kids, or allergies",
  "Freeing up your weekends for good",
  "A lower per-visit rate than one-time service",
  "A home that never falls behind again",
];

const faqs = [
  { q: "What's the difference between one-time and recurring cleaning?", a: "A one-time cleaning is a single visit with no commitment — ideal for moves, events, or a seasonal reset. Recurring cleaning is an ongoing schedule (weekly, biweekly, or monthly) that keeps your home consistently clean. One-time cleans are usually more thorough per visit (often a deep clean), while recurring cleans are lighter each time because the home stays maintained — and they typically cost less per visit." },
  { q: "Is recurring cleaning cheaper than one-time cleaning?", a: "Per visit, yes — recurring cleaning is almost always priced lower than a one-time clean. There are two reasons: companies offer a discount for the ongoing commitment, and a maintained home takes less time and effort to clean each visit, since dirt and clutter never get a chance to build up. A one-time clean (especially a first-time deep clean) is priced higher because it's more labor-intensive." },
  { q: "Should I get a one-time clean or start recurring service?", a: "If you have a specific occasion — a move, a party, post-renovation — a one-time clean is the right call. If you want your home to simply stay clean, recurring service is better value and far less hassle. A very common approach is to book one deep clean first to bring the home to a baseline, then switch to biweekly or weekly maintenance cleans to keep it there." },
  { q: "Can I cancel or pause recurring cleaning?", a: "Yes. Recurring cleaning is a convenience, not a lock-in — you can pause, reschedule, or adjust the frequency as your needs change. Just give us reasonable notice. Many clients scale up before the holidays and back down afterward, or pause during travel." },
];

const OneTimeVsRecurringCleaning = () => {
  const { seoHelmet } = useSEO({
    title: "One-Time vs Recurring Cleaning: Which Should You Choose?",
    description:
      "One-time vs recurring house cleaning — the difference, the cost, and when to choose each. Why recurring is cheaper per visit and when a single deep clean makes more sense.",
    canonical: "https://capitalcleancare.com/blog/one-time-vs-recurring-cleaning",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="one-time vs recurring cleaning, one time house cleaning, recurring cleaning service, is recurring cleaning cheaper, single clean vs recurring" />
      </Helmet>

      <ArticleSchema
        title="One-Time vs Recurring Cleaning: Which Should You Choose?"
        description="A comparison of one-time and recurring house cleaning — the difference, cost per visit, and when each makes the most sense."
        url="https://capitalcleancare.com/blog/one-time-vs-recurring-cleaning"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "One-Time vs Recurring Cleaning", href: "/blog/one-time-vs-recurring-cleaning" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "One-Time vs Recurring Cleaning" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A tidy, sunlit Maryland home kept clean by recurring service">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">One-Time vs Recurring Cleaning</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">Which makes more sense for your home — and your budget</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · June 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Both have their place. A <strong>one-time clean</strong> is perfect for a specific occasion — a move, an event, a seasonal reset. <strong>Recurring cleaning</strong> keeps your home effortlessly clean for less per visit. Here's how to tell which one fits, and why so many people end up combining the two.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-5 mb-10">
              <div className="border border-border rounded-2xl p-6 bg-secondary/30">
                <div className="flex items-center gap-2 mb-4"><Sparkles className="h-6 w-6 text-accent" /><h2 className="font-heading text-xl font-bold text-foreground">One-Time Cleaning</h2></div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">A single, thorough visit with no commitment — usually a deep clean. Best when:</p>
                <ul className="space-y-2">
                  {oneTimeFor.map((t) => (<li key={t} className="flex items-start gap-2 text-sm text-foreground"><Check className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {t}</li>))}
                </ul>
              </div>
              <div className="border-2 border-accent rounded-2xl p-6 bg-accent/5 relative">
                <span className="absolute -top-3 left-6 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Best value</span>
                <div className="flex items-center gap-2 mb-4"><RefreshCw className="h-6 w-6 text-accent" /><h2 className="font-heading text-xl font-bold text-foreground">Recurring Cleaning</h2></div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">An ongoing schedule that keeps your home maintained — at a lower per-visit rate. Best when:</p>
                <ul className="space-y-2">
                  {recurringFor.map((t) => (<li key={t} className="flex items-start gap-2 text-sm text-foreground"><Check className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {t}</li>))}
                </ul>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-secondary/40 border border-border rounded-2xl p-6 mb-10">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">The cost difference</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Per visit, recurring cleaning is almost always <strong>cheaper</strong> than a one-time clean. Two reasons: there's a discount for the ongoing commitment, and a maintained home takes less time to clean each visit because dirt never builds up. A one-time clean — especially a first-time deep clean — is priced higher because it's more labor-intensive. That's why the smartest, most cost-effective approach is often to{" "}
                <strong>book one deep clean to reset the home, then switch to recurring maintenance</strong> to keep it that way.
              </p>
            </div>
          </FadeInSection>

          <BlogInlineCTA headline="Start with a reset, then keep it easy" subtext="Book a one-time deep clean or set up recurring service — your call. Eco-friendly, background-checked cleaners across Bethesda, Rockville, Silver Spring & Gaithersburg." ctaLabel="Get My Free Quote" ctaTo="/contact" />

          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12">
              <p className="font-semibold text-foreground mb-1">Keep reading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                See{" "}
                <Link to="/blog/how-often-should-you-hire-a-cleaning-service" className="text-accent underline hover:no-underline">how often you should hire a cleaning service</Link>{" "}
                or compare{" "}
                <Link to="/blog/deep-cleaning-vs-regular-cleaning" className="text-accent underline hover:no-underline">deep cleaning vs regular cleaning</Link>.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">One Clean or an Ongoing Plan — We Do Both</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Eco-friendly{" "}<Link to="/services/recurring-cleaning" className="underline text-primary-foreground/90 hover:text-white">recurring</Link>{" "}and{" "}<Link to="/services/deep-cleaning" className="underline text-primary-foreground/90 hover:text-white">one-time deep cleaning</Link>{" "}across Maryland, DC, and Northern Virginia — background-checked, locally owned, satisfaction guaranteed.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </article>
      <RelatedPosts currentSlug="one-time-vs-recurring-cleaning" />
      <StickyCTA />
    </Layout>
  );
};

export default OneTimeVsRecurringCleaning;
