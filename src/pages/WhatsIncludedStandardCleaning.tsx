import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/whats-included-standard/hero.webp";

const checklist: [string, string[]][] = [
  ["Kitchen", ["Counters, sink & faucet wiped", "Stovetop & exterior of appliances", "Microwave inside & out", "Cabinet fronts spot-cleaned", "Floors swept & mopped"]],
  ["Bathrooms", ["Toilets cleaned & disinfected", "Showers, tubs & sinks scrubbed", "Mirrors & chrome polished", "Counters wiped down", "Floors mopped"]],
  ["Bedrooms & living areas", ["Dusting all reachable surfaces", "Beds made / linens straightened", "Vacuuming carpets & rugs", "Hard floors swept & mopped", "Tidying and trash emptied"]],
  ["Throughout", ["Visible cobwebs removed", "Light switches & handles wiped", "Mirrors & glass surfaces", "General tidy & reset", "Eco-friendly products used"]],
];

const notIncluded = [
  "Inside the oven, fridge & cabinets",
  "Detailed grout scrubbing",
  "Baseboards, vents & ceiling fans (detailed)",
  "Window tracks, sills & interior windows",
  "Behind & under heavy furniture",
];

const faqs = [
  { q: "What is included in a standard house cleaning?", a: "A standard (regular) cleaning covers the everyday upkeep of a maintained home: kitchen counters, sink, stovetop and appliance exteriors, microwave, and floors; bathrooms — toilets, showers, tubs, sinks, mirrors and floors; and all rooms — dusting reachable surfaces, making beds, vacuuming, mopping, tidying, and emptying trash. It's designed to keep an already-clean home consistently fresh, typically on a weekly, biweekly, or monthly schedule." },
  { q: "What's the difference between standard and deep cleaning?", a: "A standard clean maintains a home; a deep clean resets it. The deep clean adds all the detailed work a standard clean skips — inside the oven and fridge, grout scrubbing, baseboards and trim, ceiling fans and vents, window tracks, and build-up behind furniture. Most people get one deep clean to bring the home to a baseline, then keep it there with recurring standard cleans." },
  { q: "Does a standard clean include inside the oven and fridge?", a: "No — interior of the oven, refrigerator, and cabinets are part of a deep clean, not a standard one. A standard clean does the exteriors and the microwave inside. If you want the insides done, you can add them on or book a deep clean. Just tell us what you'd like prioritized when you book." },
  { q: "How long does a standard cleaning take?", a: "A standard clean is faster than a deep clean — often a couple of hours for an average home, less for an apartment. On a recurring schedule it goes quicker each visit because the home stays maintained and grime never builds up. The exact time depends on home size and number of bathrooms." },
];

const WhatsIncludedStandardCleaning = () => {
  const { seoHelmet } = useSEO({
    title: "What Is Included in a Standard House Cleaning?",
    description:
      "Exactly what's included in a standard (regular) house cleaning — the room-by-room checklist, what's not included, and how it differs from a deep clean.",
    canonical: "https://capitalcleancare.com/blog/what-is-included-in-a-standard-cleaning",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="what is included in a standard cleaning, standard house cleaning checklist, regular cleaning includes, standard vs deep cleaning, what does a regular clean include" />
      </Helmet>

      <ArticleSchema
        title="What Is Included in a Standard House Cleaning?"
        description="The room-by-room standard cleaning checklist, what's not included, and how a standard clean differs from a deep clean."
        url="https://capitalcleancare.com/blog/what-is-included-in-a-standard-cleaning"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "What Is Included in a Standard Cleaning", href: "/blog/what-is-included-in-a-standard-cleaning" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "What Is Included in a Standard Cleaning?" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A cleaner dusting and tidying a bright living room in a Maryland home">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">What Is Included in a Standard Cleaning?</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">The full room-by-room checklist for a regular maintenance clean</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Capital Clean Care · MD · DC · VA · June 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A standard cleaning — also called a regular or maintenance clean — keeps an already-cared-for home consistently fresh. It covers all the everyday surfaces and floors in every room, on a schedule that suits you. Here's exactly what's included, what's not, and when you'd want a deep clean instead.
            </p>
          </FadeInSection>

          <FadeInSection>
            <img src="/images/blog/sparkling-kitchen.webp" alt="Spotless kitchen counter after a standard house cleaning" loading="lazy" width={1000} height={563} className="w-full rounded-2xl shadow-lg ring-1 ring-border transition-transform duration-500 hover:scale-[1.02] my-8" />
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The Standard Cleaning Checklist</h2>
            <div className="space-y-5 mb-10">
              {checklist.map(([room, items]) => (
                <div key={room} className="border border-border rounded-2xl p-5 bg-secondary/30">
                  <p className="font-heading font-bold text-foreground mb-3 flex items-center gap-2"><Sparkles className="h-5 w-5 text-accent" /> {room}</p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                    {items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-secondary/40 border border-border rounded-2xl p-6 mb-10">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">What's <em>not</em> in a standard clean</h2>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">These are part of a <Link to="/blog/what-is-included-in-a-deep-cleaning" className="text-accent underline hover:no-underline">deep clean</Link> — you can add them on or book a deep clean when needed:</p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                {notIncluded.map((it) => (<li key={it} className="text-sm text-muted-foreground">• {it}</li>))}
              </ul>
            </div>
          </FadeInSection>

          <BlogInlineCTA headline="Keep your home effortlessly fresh" subtext="Set up recurring standard cleaning on your schedule. Eco-friendly, background-checked cleaners across Bethesda, Rockville, Silver Spring & Gaithersburg." ctaLabel="Get My Free Quote" ctaTo="/contact" />

          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12">
              <p className="font-semibold text-foreground mb-1">Keep reading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Compare{" "}
                <Link to="/blog/deep-cleaning-vs-regular-cleaning" className="text-accent underline hover:no-underline">deep vs regular cleaning</Link>{" "}
                or see{" "}
                <Link to="/blog/how-often-should-you-hire-a-cleaning-service" className="text-accent underline hover:no-underline">how often you should hire a cleaning service</Link>.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Book a Standard Clean</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Eco-friendly{" "}<Link to="/services/house-cleaning" className="underline text-primary-foreground/90 hover:text-white">house cleaning</Link>{" "}and{" "}<Link to="/services/recurring-cleaning" className="underline text-primary-foreground/90 hover:text-white">recurring service</Link>{" "}across Maryland, DC, and Northern Virginia — background-checked, locally owned, satisfaction guaranteed.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </article>
      <RelatedPosts currentSlug="what-is-included-in-a-standard-cleaning" />
      <StickyCTA />
    </Layout>
  );
};

export default WhatsIncludedStandardCleaning;
