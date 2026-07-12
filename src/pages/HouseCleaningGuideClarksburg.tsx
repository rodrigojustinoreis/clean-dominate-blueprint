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

const HERO_IMAGE = "/images/blog/guide-clarksburg/hero.webp";

const sections: { title: string; body: string }[] = [
  { title: "Clarksburg is Montgomery County's newest community", body: "Clarksburg has been the county's fastest-growing town for years, with whole new neighborhoods — Cabin Branch, Arora Hills, Clarksburg Village, and Clarksburg Town Center near the Premium Outlets — built in the last decade or two. That means most homes here are newer construction: open floor plans, quartz counters, luxury vinyl plank, and modern tile. Cleaning newer homes is less about fighting decades of build-up and more about protecting finishes and keeping fine construction-era dust under control." },
  { title: "New homes mean move-in and post-construction cleans", body: "Because so many Clarksburg homes are recently built or recently bought, two cleans come up a lot here: a move-in clean before you unpack a brand-new home, and a post-construction clean to clear the fine drywall dust that settles everywhere after building or a basement finish. Both are more thorough than a standard clean — worth knowing the difference before you book so you get the right service." },
  { title: "Caring for builder-grade finishes", body: "Quartz, LVP, and modern tile look great but need the right touch: no abrasive powders on quartz, pH-appropriate products on luxury vinyl, and gentle, proper grout care. A cleaner who understands new-construction finishes keeps your home looking showroom-fresh; one running a single generic checklist can dull or scratch them. It's worth confirming before the first visit." },
];

const checklist = [
  "Confirm insurance, bonding & background checks",
  "Ask if they handle move-in / post-construction cleans",
  "Confirm they know builder-grade finishes (quartz, LVP)",
  "Get a walkthrough-based quote, in writing",
  "Look for real Clarksburg / Montgomery County reviews",
];

const faqs = [
  { q: "How much does house cleaning cost in Clarksburg, MD?", a: "Clarksburg pricing follows home size and condition. Because many homes are newer and well-kept, standard recurring cleans are often efficient — roughly $165–$310 per visit for the area depending on size — while a one-time deep or move-in clean for a larger new build runs higher, about $285–$540+. For a full breakdown by home size, see our Maryland house cleaning price guide and request a walkthrough quote." },
  { q: "Do you clean newly built homes in Clarksburg?", a: "Yes — it's one of the most common requests here. For a brand-new home we typically recommend a move-in clean (a thorough top-to-bottom before you unpack) or, if construction or a basement finish just wrapped, a post-construction clean to remove the fine drywall dust that settles on every surface, including inside cabinets and vents. Tell us the situation and we'll recommend the right service." },
  { q: "Do you serve all of Clarksburg?", a: "Yes — Capital Clean Care serves all of Clarksburg, including Cabin Branch, Arora Hills, Clarksburg Village, Clarksburg Town Center, and the neighborhoods near the Premium Outlets and along the I-270 corridor." },
  { q: "What should I look for in a Clarksburg cleaning company?", a: "The usual non-negotiables — insurance, bonding, background-checked cleaners, eco-friendly products, and transparent walkthrough pricing in writing. In Clarksburg specifically, also confirm the company handles move-in and post-construction cleans and knows how to care for builder-grade finishes like quartz and luxury vinyl plank, since so much of the town is newer construction." },
];

const HouseCleaningGuideClarksburg = () => {
  const { seoHelmet } = useSEO({
    title: "The Complete Guide to House Cleaning in Clarksburg, MD",
    description:
      "A complete local guide to house cleaning in Clarksburg, MD — new-construction homes, move-in and post-construction cleans, builder-grade finishes, pricing, and choosing a company.",
    canonical: "https://capitalcleancare.com/blog/house-cleaning-guide-clarksburg-md",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="house cleaning clarksburg md, cleaning service clarksburg maryland, clarksburg house cleaners, new construction cleaning clarksburg" />
      </Helmet>

      <ArticleSchema
        title="The Complete Guide to House Cleaning in Clarksburg, MD"
        description="A complete local guide to house cleaning in Clarksburg — new-construction homes, move-in and post-construction cleans, finishes, pricing, and choosing a company."
        url="https://capitalcleancare.com/blog/house-cleaning-guide-clarksburg-md"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "House Cleaning Guide: Clarksburg, MD", href: "/blog/house-cleaning-guide-clarksburg-md" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "House Cleaning Guide: Clarksburg, MD" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="Newly built single-family homes in a Clarksburg, Maryland neighborhood">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Local Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">The Complete Guide to House Cleaning in Clarksburg, MD</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">New construction, move-in cleans, and caring for modern finishes</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Capital Clean Care · Clarksburg, MD · June 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Clarksburg is Montgomery County's newest and fastest-growing town — which makes cleaning here a little different from the rest of the county. With so many recently built homes, the priorities are protecting modern finishes, managing construction-era dust, and getting the right clean for a new or just-purchased home. Here's everything local to keeping a Clarksburg home clean.
            </p>
          </FadeInSection>

          {sections.map((s) => (
            <FadeInSection key={s.title}>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{s.body}</p>
            </FadeInSection>
          ))}

          <BlogInlineCTA headline="Looking for house cleaning in Clarksburg?" subtext="From move-in cleans for new builds to recurring service — locally owned, background-checked, eco-friendly. See our Clarksburg house cleaning service." ctaLabel="See Our Clarksburg Service" ctaTo="/locations/clarksburg-md/house-cleaning" />

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
                <Link to="/blog/post-construction-cleaning-montgomery-county-md" className="text-accent underline hover:no-underline">post-construction cleaning in Montgomery County</Link>,{" "}
                <Link to="/blog/what-is-included-in-a-deep-cleaning" className="text-accent underline hover:no-underline">what's included in a deep cleaning</Link>, or book on our{" "}
                <Link to="/locations/clarksburg-md/house-cleaning" className="text-accent underline hover:no-underline">Clarksburg house cleaning</Link>{" "}page.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">See Capital Clean Care in Clarksburg</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Locally owned, background-checked, eco-friendly{" "}<Link to="/locations/clarksburg-md/house-cleaning" className="underline text-primary-foreground/90 hover:text-white">house cleaning in Clarksburg</Link>{" "}— move-in, recurring, and deep cleans with transparent pricing.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <Link to="/locations/clarksburg-md/house-cleaning">Clarksburg House Cleaning <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </article>
      <RelatedPosts currentSlug="house-cleaning-guide-clarksburg-md" />
      <StickyCTA />
    </Layout>
  );
};

export default HouseCleaningGuideClarksburg;
