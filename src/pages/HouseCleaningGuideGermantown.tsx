import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/guide-germantown/hero.webp";

const sections: { title: string; body: string }[] = [
  { title: "What house cleaning looks like in Germantown", body: "Germantown is one of Maryland's largest planned communities, and its housing is a real mix — townhome rows in Milestone and Kingsview, single-family homes near Black Hill, and garden apartments around Germantown Town Center. Each cleans a little differently: townhomes are tall and narrow with stairs and shared walls (dust travels between floors), while detached homes have more square footage and bathrooms to maintain. A good local cleaner tailors the visit to your home type rather than running one generic checklist." },
  { title: "Why frequency matters here", body: "Germantown skews toward busy commuter families — lots of households juggling I-270 or the MARC Brunswick line, kids, and activities. That's exactly the profile that benefits from recurring service: a biweekly clean keeps a high-traffic home consistently presentable without eating your weekends. Homes with pets or young kids often step up to weekly." },
  { title: "Newer construction, builder-grade finishes", body: "Much of Germantown's stock is newer construction with quartz counters, luxury vinyl plank, and modern tile. These need the right touch — no abrasive scrubs on quartz, pH-appropriate products on LVP, and proper grout care — so the finishes stay looking new. It's worth confirming a company knows how to clean builder-grade materials before booking." },
];

const checklist = [
  "Confirm insurance, bonding & background checks",
  "Ask for genuinely certified eco-friendly products",
  "Get a walkthrough-based quote, in writing",
  "Choose a frequency that matches your household",
  "Look for real Germantown / Montgomery County reviews",
];

const faqs = [
  { q: "How much does house cleaning cost in Germantown, MD?", a: "Germantown pricing follows home size and condition more than ZIP code — a townhome in Milestone sits lower than a larger single-family home near Black Hill. As a rough guide for the area, a recurring clean runs about $165–$310 per visit and a one-time deep clean about $285–$540+. For a full DMV-wide breakdown by home size, see our Maryland house cleaning price guide, and request a walkthrough quote for an exact figure." },
  { q: "Do you serve all of Germantown?", a: "Yes — Capital Clean Care serves all of Germantown, including Milestone, Kingsview, Churchill Town Sector, Germantown Town Center, and the neighborhoods around Black Hill and Clopper Road. Our teams know the area's townhome and single-family layouts well." },
  { q: "How often should a Germantown family schedule cleaning?", a: "For most Germantown households — busy commuter families with kids — every two weeks is the sweet spot: consistently clean without the cost of weekly visits. Homes with pets, young children, or heavy foot traffic often do better weekly. If you're not sure, start biweekly and adjust." },
  { q: "What should I look for in a Germantown cleaning company?", a: "Start with the non-negotiables — insurance, bonding, and background-checked cleaners — then look for certified eco-friendly products, transparent walkthrough-based pricing in writing, and a written satisfaction guarantee. Because so much of Germantown is newer construction, also confirm the company knows how to care for quartz, LVP, and modern tile finishes." },
];

const HouseCleaningGuideGermantown = () => {
  const { seoHelmet } = useSEO({
    title: "The Complete Guide to House Cleaning in Germantown, MD",
    description:
      "A complete local guide to house cleaning in Germantown, MD — home types, the right cleaning frequency, builder-grade finishes, pricing, and how to choose a company.",
    canonical: "https://capitalcleancare.com/blog/house-cleaning-guide-germantown-md",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="house cleaning germantown md, cleaning service germantown maryland, germantown house cleaners, complete guide house cleaning germantown" />
      </Helmet>

      <ArticleSchema
        title="The Complete Guide to House Cleaning in Germantown, MD"
        description="A complete local guide to house cleaning in Germantown — home types, cleaning frequency, builder-grade finishes, pricing, and choosing a company."
        url="https://capitalcleancare.com/blog/house-cleaning-guide-germantown-md"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "House Cleaning Guide: Germantown, MD", href: "/blog/house-cleaning-guide-germantown-md" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "House Cleaning Guide: Germantown, MD" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A row of newer townhomes in Germantown, Maryland">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Local Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">The Complete Guide to House Cleaning in Germantown, MD</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">Home types, frequency, finishes, and pricing — everything local to Germantown</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · Germantown, MD · June 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Germantown is one of upper Montgomery County's biggest and most diverse communities — and its mix of townhomes, single-family homes, and apartments means cleaning here isn't one-size-fits-all. This guide covers what's specific to keeping a Germantown home clean: home types, the right frequency, caring for newer finishes, pricing, and how to choose the right company.
            </p>
          </FadeInSection>

          {sections.map((s) => (
            <FadeInSection key={s.title}>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{s.body}</p>
            </FadeInSection>
          ))}

          <BlogInlineCTA headline="Looking for house cleaning in Germantown?" subtext="Capital Clean Care is locally owned, background-checked, and eco-friendly — and we price your actual home, in writing. See our Germantown house cleaning service." ctaLabel="See Our Germantown Service" ctaTo="/locations/germantown-md/house-cleaning" />

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">A Quick Checklist for Choosing</h2>
            <div className="space-y-3 mb-10">
              {checklist.map((c) => (
                <div key={c} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" /><p className="text-muted-foreground">{c}</p></div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12">
              <p className="font-semibold text-foreground mb-1 flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Keep reading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                See{" "}
                <Link to="/blog/house-cleaning-prices-maryland-2026" className="text-accent underline hover:no-underline">house cleaning prices in Maryland</Link>,{" "}
                <Link to="/blog/how-often-should-you-hire-a-cleaning-service" className="text-accent underline hover:no-underline">how often to hire a cleaning service</Link>, or book directly on our{" "}
                <Link to="/locations/germantown-md/house-cleaning" className="text-accent underline hover:no-underline">Germantown house cleaning</Link>{" "}page.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">See Capital Clean Care in Germantown</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Locally owned, background-checked, eco-friendly{" "}<Link to="/locations/germantown-md/house-cleaning" className="underline text-primary-foreground/90 hover:text-white">house cleaning in Germantown</Link>{" "}— transparent pricing and a satisfaction guarantee.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <Link to="/locations/germantown-md/house-cleaning">Germantown House Cleaning <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </article>
      <RelatedPosts currentSlug="house-cleaning-guide-germantown-md" />
      <StickyCTA />
    </Layout>
  );
};

export default HouseCleaningGuideGermantown;
