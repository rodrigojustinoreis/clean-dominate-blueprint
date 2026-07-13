import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/best-rockville/hero.webp";

const criteria: [string, string][] = [
  ["Licensing, insurance & bonding", "The best companies carry liability insurance and bonding, and will show proof. This protects you if something is damaged or goes missing — non-negotiable before anyone enters your home."],
  ["Background-checked, consistent teams", "Look for a company that background-verifies every cleaner and sends the same team each visit. Consistency means they learn your home and preferences instead of rotating strangers through."],
  ["Genuinely certified eco-friendly products", "Ask for EPA Safer Choice or plant-based certifications, not vague 'green' claims. It matters for kids, pets, and anyone sensitive to harsh chemicals."],
  ["Transparent, walkthrough-based pricing", "The best services price your actual home — square footage, bathrooms, condition — and put it in writing. Be wary of one-size-fits-all quotes given sight unseen."],
  ["A written satisfaction guarantee", "A re-clean guarantee in writing (not just a slogan) signals a company that stands behind its work."],
];

const redFlags = [
  "Cash-only with no insurance or written agreement",
  "Quotes a flat price without asking about your home",
  "No background-check policy for their cleaners",
  "Vague about products when you ask what they use",
  "No reviews from Rockville / Montgomery County clients",
];

const faqs = [
  { q: "How do I choose the best house cleaning service in Rockville?", a: "Start with the non-negotiables: insurance and bonding, background-checked cleaners, and certified eco-friendly products. Then look for transparent walkthrough-based pricing and a written satisfaction guarantee. In Rockville specifically, confirm the company can handle your building's access rules if you're in a condo near White Flint or Shady Grove, and that they price your actual home rather than giving a flat quote sight unseen. Read reviews from Rockville and Montgomery County clients, not just overall star ratings." },
  { q: "Are the 'best house cleaning service' lists on Yelp and Angi reliable?", a: "Use them as a starting point, not gospel. Directory rankings on Yelp, Angi, and Thumbtack are heavily influenced by advertising and review volume, not necessarily by quality or fit for your home. They're useful for building a shortlist, but you should still vet each company yourself on insurance, background checks, products, and pricing transparency — and prioritize companies with genuine local Rockville reviews." },
  { q: "What should Rockville condo and apartment residents look for?", a: "Building logistics matter as much as the cleaning. If you're in a condo or apartment near White Flint, Shady Grove, or Rockville Town Square, ask how the company handles elevator and loading-dock scheduling, visitor parking (Rockville Pike traffic and limited guest spots are real constraints), and secure key or fob access. The best companies have a clear, documented process for building access so cleaning day isn't a logistical headache." },
  { q: "Does it cost more to hire a cleaning service in Rockville?", a: "Rockville pricing tracks home size and condition more than ZIP code — a King Farm condo sits at the lower end, a larger Fallsgrove single-family home toward the top. For a full breakdown, see our Rockville house cleaning cost guide. The key is that the best companies price your actual home transparently, so you're comparing real quotes rather than headline rates." },
];

const BestHouseCleaningRockville = () => {
  const { seoHelmet } = useSEO({
    title: "How to Choose the Best House Cleaning Service in Rockville, MD (2026)",
    description:
      "A buyer's guide to choosing the best house cleaning service in Rockville, MD — the criteria that matter, red flags to avoid, and Rockville-specific things to check (condo access, local pricing).",
    canonical: "https://capitalcleancare.com/blog/best-house-cleaning-service-rockville-md",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="best house cleaning service rockville md, how to choose house cleaning rockville, house cleaning company rockville, best cleaners rockville maryland" />
      </Helmet>

      <ArticleSchema
        title="How to Choose the Best House Cleaning Service in Rockville, MD (2026)"
        description="A buyer's guide to choosing the best house cleaning service in Rockville — selection criteria, red flags, and Rockville-specific considerations."
        url="https://capitalcleancare.com/blog/best-house-cleaning-service-rockville-md"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Best House Cleaning Service in Rockville", href: "/blog/best-house-cleaning-service-rockville-md" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Best House Cleaning Service in Rockville" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A modern condo building near Rockville Town Square, Maryland">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Local Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">How to Choose the Best House Cleaning Service in Rockville, MD</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">A buyer's guide — the criteria that matter, the red flags, and what's specific to Rockville</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · Rockville, MD · June 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Search "best house cleaning service in Rockville" and you'll get pages of directory listings — Yelp, Angi, Thumbtack — ranked largely by advertising, not by what's right for <em>your</em> home. This guide skips the hype and gives you the actual criteria to judge any company by, the red flags to walk away from, and the few things that are specific to cleaning a home in Rockville.
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
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">What's Specific to Rockville</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">The right cleaning service for a Rockville home depends on more than a star rating. A few local realities should shape your shortlist:</p>
            <div className="space-y-5 mb-10">
              <div className="border-l-4 border-accent pl-4">
                <p className="font-semibold text-foreground mb-1">Condo & apartment building logistics</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Much of Rockville's housing near White Flint, Shady Grove, and Rockville Town Square is condos and apartments. Building access is half the battle: ask how a company handles elevator and loading-dock scheduling, secure fob or key access, and visitor parking. With Rockville Pike (MD-355) traffic and limited guest spaces, the best companies have a documented access process so cleaning day runs smoothly — and don't surprise you with travel or parking fees.</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <p className="font-semibold text-foreground mb-1">Newer townhomes & builder-grade finishes</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Rockville's newer townhome construction around the Town Center comes with quartz counters, luxury vinyl plank, and modern tile that need the right touch — no abrasive scrubs on quartz, pH-appropriate products on LVP, and proper grout care. A company that knows builder-grade finishes protects your surfaces; one running a single generic checklist can dull or damage them.</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <p className="font-semibold text-foreground mb-1">A culturally aware team</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Rockville is one of Montgomery County's most diverse cities, with large Korean and South Asian communities. Small things matter: cleaners who remove shoes inside without being asked, who are comfortable with shoe-off households, and who'll use the products you prefer. The best companies treat your home's customs as a given, not an exception.</p>
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

          <BlogInlineCTA headline="Looking for a cleaning service in Rockville?" subtext="Capital Clean Care is locally owned, background-checked, and eco-friendly — and we price your actual home, in writing. See our Rockville house cleaning service." ctaLabel="See Our Rockville Service" ctaTo="/locations/rockville-md/house-cleaning" />

          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12">
              <p className="font-semibold text-foreground mb-1">Keep reading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                See{" "}
                <Link to="/blog/house-cleaning-cost-rockville-md" className="text-accent underline hover:no-underline">how much house cleaning costs in Rockville</Link>{" "}
                or{" "}
                <Link to="/blog/how-often-should-you-hire-a-cleaning-service" className="text-accent underline hover:no-underline">how often you should hire a cleaning service</Link>. Ready to book? Visit our{" "}
                <Link to="/locations/rockville-md/house-cleaning" className="text-accent underline hover:no-underline">Rockville house cleaning</Link>{" "}page.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">See Capital Clean Care in Rockville</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Locally owned, background-checked, eco-friendly{" "}<Link to="/locations/rockville-md/house-cleaning" className="underline text-primary-foreground/90 hover:text-white">house cleaning in Rockville</Link>{" "}— transparent pricing and a satisfaction guarantee.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <Link to="/locations/rockville-md/house-cleaning">Rockville House Cleaning <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </article>
      <RelatedPosts currentSlug="best-house-cleaning-service-rockville-md" />
      <StickyCTA />
    </Layout>
  );
};

export default BestHouseCleaningRockville;
