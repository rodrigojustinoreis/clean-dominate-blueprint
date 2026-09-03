import { Link } from "react-router-dom";
import { CheckCircle2, Star, ShieldCheck, Leaf, Sparkles } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/bethesda-street.webp";
const URL = "https://capitalcleancare.com/resources/best-house-cleaning-service-bethesda-md";

const criteria: { icon: typeof Star; title: string; text: string }[] = [
  { icon: ShieldCheck, title: "Bonded, insured & background-checked", text: "Bethesda homes are high-value homes. Any company you let inside should carry liability insurance, bond its employees, and background-check every cleaner — and be able to prove all three in writing before the first visit." },
  { icon: Star, title: "Real, verifiable reviews", text: "Look the company up on Google Maps and read the actual reviews — not the testimonials on their own website. A smaller number of detailed, verified reviews from real neighbors beats hundreds of anonymous star ratings." },
  { icon: Leaf, title: "Products safe for your household", text: "Ask what they actually clean with. EPA Safer Choice certified, plant-based products protect kids, pets, and indoor air — and matter even more in older Bethesda homes with less ventilation." },
  { icon: CheckCircle2, title: "Flat, written pricing", text: "The best companies quote a flat price for your home in writing before they start — no hourly surprises, no upsells at the door. If a company won't publish or commit to prices, keep looking." },
];

const faqs = [
  { q: "How much does house cleaning cost in Bethesda, MD?", a: "A standard cleaning for a typical Bethesda home runs about $180-$400+ depending on size, bathrooms, and condition; larger colonials and homes needing a first-visit deep clean cost more. Recurring weekly or biweekly service brings the per-visit price down. Capital Clean Care quotes a flat, written price in about 60 seconds." },
  { q: "What should I look for in a Bethesda cleaning service?", a: "Four things: (1) bonded, insured, background-checked cleaners; (2) real Google reviews you can verify; (3) safe, non-toxic products — EPA Safer Choice certified; (4) flat written pricing with a satisfaction guarantee. Local, owner-operated companies typically deliver more consistency than franchises." },
  { q: "Is it worth hiring a professional cleaner in Bethesda?", a: "For most Bethesda households, yes. Between commutes to DC and NIH, family schedules, and larger homes, professional cleaning buys back several hours a week and keeps the home consistently healthy. Recurring clients also get discounted rates, so the cost per visit drops." },
  { q: "Does Capital Clean Care serve all of Bethesda?", a: "Yes — every Bethesda neighborhood, including downtown Bethesda, Chevy Chase border streets, Bradley Hills, Glen Echo Heights, and Westmoreland Hills, plus neighboring Potomac, Chevy Chase, and North Bethesda. Same-week slots are often available." },
];

const BestHouseCleaningBethesda = () => {
  const { seoHelmet } = useSEO({
    title: "How to Choose a House Cleaning Service in Bethesda (2026)",
    description:
      "How to choose the best house cleaning service in Bethesda, MD — insurance, real reviews, safe products, flat pricing — plus what Bethesda homes cost to clean.",
    canonical: URL,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="how to choose cleaning service bethesda, cleaning company checklist bethesda, questions to ask house cleaner" />
      </Helmet>
      <ArticleSchema
        title="How to Choose a House Cleaning Service in Bethesda (2026)"
        description="A Bethesda homeowner's guide to choosing a house cleaning service: the four criteria that matter, local pricing, and the questions to ask before booking."
        url={URL}
        datePublished="2026-07-08"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />

      <BlogHero src={HERO_IMAGE} alt="Tree-lined Bethesda MD street with brick colonial homes served by Capital Clean Care">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Local Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">How to Choose a House Cleaning Service in Bethesda</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">The four criteria that separate a great cleaning company from a headache</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · Bethesda, MD · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Bethesda has no shortage of cleaning companies — what it lacks is an easy way to tell them apart. Between national
              franchises, app marketplaces, and independent crews, the real differences only show up after you've let someone into
              your home. This guide gives you the four criteria we'd use to vet any company (including us), what cleaning actually
              costs in Bethesda, and the questions worth asking before you book.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">The 4 criteria that actually matter</h2>
            <div className="space-y-6 mb-10">
              {criteria.map((c) => (
                <div key={c.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 shrink-0">
                    <c.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* This guide ranks for "recurring cleaning services bethesda md" but the dedicated recurring page
              barely got a link from it — route that intent to its owner (kept separate from the house-cleaning CTA below). */}
          <FadeInSection>
            <BlogInlineCTA
              headline="Prefer scheduled recurring service?"
              subtext="Weekly, bi-weekly, or monthly plans for Bethesda homes — compare frequency options, what each visit includes, and recurring rates on the dedicated Bethesda recurring cleaning page."
              ctaLabel="See Bethesda recurring plans & pricing"
              ctaTo="/locations/bethesda-md/recurring-cleaning"
              analyticsLocation="blog_inline_cta_recurring"
            />
          </FadeInSection>

          <FadeInSection>
            <img src="/images/team/team-two-living-room.jpg" alt="Capital Clean Care team cleaning a Bethesda MD living room" loading="lazy" width={1000} height={667} className="w-full rounded-2xl shadow-lg ring-1 ring-border transition-transform duration-500 hover:scale-[1.02] my-8" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">What house cleaning costs in Bethesda</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bethesda's housing stock skews large — colonials in Bradley Hills, split-levels near Walter Johnson, condos downtown —
              so prices vary more than in neighboring towns. As a working range: standard cleanings run about $180–$400+, deep
              cleanings and first visits more. We published a full breakdown in our{" "}
              <Link to="/resources/house-cleaning-cost-bethesda-md" className="text-accent underline hover:no-underline">Bethesda house cleaning cost guide</Link>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When you're ready to compare companies side by side, start with our{" "}
              <Link to="/locations/bethesda-md/house-cleaning" className="text-accent underline hover:no-underline">home cleaning in Bethesda, MD</Link>{" "}
              page — services, checklist, and a flat quote in 60 seconds — or, if the home needs a reset first, our{" "}
              <Link to="/locations/bethesda-md/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning in Bethesda</Link>. And if you're arranging help for an older parent, we offer{" "}
              <Link to="/senior-home-cleaning-montgomery-county-md" className="text-accent underline hover:no-underline">senior cleaning in Bethesda and beyond</Link>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Prefer a predictable weekly or bi-weekly schedule? Compare frequency, continuity, and recurring rates on our{" "}
              <Link to="/locations/bethesda-md/recurring-cleaning" className="text-accent underline hover:no-underline">recurring cleaning in Bethesda</Link>{" "}
              page. That service page is the dedicated destination for ongoing plans; this guide is designed to help you evaluate providers.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA headline="Comparing cleaning companies in Bethesda?" subtext="Capital Clean Care: 5.0 stars on Google, bonded and background-checked crews, EPA Safer Choice products, flat written pricing, and a 24-hour re-clean guarantee. Serving Bethesda since 2015." ctaLabel="Get My Bethesda Quote" ctaTo="/locations/bethesda-md/house-cleaning" />
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-accent" /> Bethesda house cleaning FAQ
            </h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="best-house-cleaning-service-bethesda-md" />
      <StickyCTA />
    </Layout>
  );
};

export default BestHouseCleaningBethesda;
