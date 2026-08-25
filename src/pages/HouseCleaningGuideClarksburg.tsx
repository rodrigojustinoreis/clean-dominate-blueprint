import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Home, MapPin, ShieldCheck, Sparkles, Star } from "lucide-react";
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
import { GOOGLE_LISTING_URL, pickReviews } from "@/data/realReviews";

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

const priceRanges = [
  { service: "Recurring cleaning", range: "$165–$310 per visit", bestFor: "Weekly or bi-weekly upkeep" },
  { service: "One-time deep cleaning", range: "$285–$540+", bestFor: "First visits and seasonal resets" },
  { service: "Move-in cleaning", range: "$285–$540+", bestFor: "Empty or newly purchased homes" },
  { service: "Post-construction cleaning", range: "Custom walkthrough quote", bestFor: "Drywall dust and renovation residue" },
];

const faqs = [
  { q: "How much does house cleaning cost in Clarksburg, MD?", a: "Clarksburg pricing follows home size and condition. Because many homes are newer and well-kept, standard recurring cleans are often efficient — roughly $165–$310 per visit for the area depending on size — while a one-time deep or move-in clean for a larger new build runs higher, about $285–$540+. For a full breakdown by home size, see our Maryland house cleaning price guide and request a walkthrough quote." },
  { q: "Do you clean newly built homes in Clarksburg?", a: "Yes — it's one of the most common requests here. For a brand-new home we typically recommend a move-in clean (a thorough top-to-bottom before you unpack) or, if construction or a basement finish just wrapped, a post-construction clean to remove the fine drywall dust that settles on every surface, including inside cabinets and vents. Tell us the situation and we'll recommend the right service." },
  { q: "Do you serve all of Clarksburg?", a: "Yes — Capital Clean Care serves all of Clarksburg, including Cabin Branch, Arora Hills, Clarksburg Village, Clarksburg Town Center, and the neighborhoods near the Premium Outlets and along the I-270 corridor." },
  { q: "What should I look for in a Clarksburg cleaning company?", a: "The usual non-negotiables — insurance, bonding, background-checked cleaners, eco-friendly products, and transparent walkthrough pricing in writing. In Clarksburg specifically, also confirm the company handles move-in and post-construction cleans and knows how to care for builder-grade finishes like quartz and luxury vinyl plank, since so much of the town is newer construction." },
];

const HouseCleaningGuideClarksburg = () => {
  const reviews = pickReviews("clarksburg-cost-guide", 2);
  const { seoHelmet } = useSEO({
    title: "House Cleaning Cost in Clarksburg, MD | 2026 Guide",
    description:
      "House cleaning in Clarksburg typically costs $165–$310 recurring or $285–$540+ for a deep clean. Compare services, local factors and get a free quote.",
    canonical: "https://capitalcleancare.com/resources/house-cleaning-guide-clarksburg-md",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="house cleaning clarksburg md, cleaning service clarksburg maryland, clarksburg house cleaners, new construction cleaning clarksburg" />
      </Helmet>

      <ArticleSchema
        title="House Cleaning Cost in Clarksburg, MD: 2026 Pricing & Hiring Guide"
        description="A local guide to house cleaning costs, service types, new-construction homes and choosing a cleaning company in Clarksburg, Maryland."
        url="https://capitalcleancare.com/resources/house-cleaning-guide-clarksburg-md"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "House Cleaning Cost: Clarksburg, MD", href: "/resources/house-cleaning-guide-clarksburg-md" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "House Cleaning Cost: Clarksburg, MD" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="Newly built single-family homes in a Clarksburg, Maryland neighborhood">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Local Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">House Cleaning Cost in Clarksburg, MD</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">2026 prices, service comparisons, and a local hiring checklist</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">Reviewed by Rodrigo Reis, Owner · Updated August 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
        <p className="mt-4 text-sm text-white/75">Free written estimate · No obligation · Local insured team</p>
      </BlogHero>

      <section className="border-b border-border bg-white" aria-label="Capital Clean Care trust signals">
        <div className="container mx-auto grid max-w-5xl grid-cols-1 gap-3 px-4 py-5 sm:grid-cols-3">
          {[
            { icon: Star, title: "5-Star Rated", detail: "Verified Google reviews" },
            { icon: ShieldCheck, title: "Insured & Background-Checked", detail: "Professional local crews" },
            { icon: MapPin, title: "Clarksburg Local", detail: "Cabin Branch, Arora Hills & more" },
          ].map(({ icon: Icon, title, detail }) => (
            <div key={title} className="flex items-center gap-3 rounded-xl border border-border bg-secondary/25 p-3.5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/10"><Icon className="h-5 w-5 text-accent" /></span>
              <div><p className="text-sm font-bold text-foreground">{title}</p><p className="text-xs text-muted-foreground">{detail}</p></div>
            </div>
          ))}
        </div>
      </section>

      <article className="bg-gradient-to-b from-secondary/25 via-white to-white py-12 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <FadeInSection>
            <div className="mb-10 overflow-hidden rounded-[2rem] border border-accent/25 bg-white shadow-[0_18px_55px_rgba(26,71,91,.12)]">
              <div className="grid md:grid-cols-[auto_1fr]">
                <div className="grid place-items-center bg-primary p-6 md:w-36"><Sparkles className="h-10 w-10 text-accent" /></div>
                <div className="p-6 md:p-8">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-accent">Quick answer</p>
                  <p className="font-heading text-2xl font-bold leading-snug text-foreground md:text-3xl">$165–$310 per recurring visit</p>
                  <p className="mt-3 leading-relaxed text-muted-foreground">A one-time deep or move-in clean for a larger Clarksburg home generally runs $285–$540+. Home size, condition, frequency, pets, and add-ons determine the written quote.</p>
                </div>
              </div>
            </div>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-muted-foreground">
              Clarksburg is Montgomery County's newest and fastest-growing town — which makes cleaning here a little different from the rest of the county. With so many recently built homes, the priorities are protecting modern finishes, managing construction-era dust, and getting the right clean for a new or just-purchased home. Here's everything local to keeping a Clarksburg home clean.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="mb-12 rounded-[2rem] bg-primary p-6 text-primary-foreground shadow-xl md:p-9">
              <p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-accent">Transparent planning ranges</p>
              <h2 className="mb-3 font-heading text-2xl font-bold md:text-3xl">2026 Clarksburg House Cleaning Price Guide</h2>
              <p className="mb-7 max-w-2xl leading-relaxed text-primary-foreground/70">Compare the service that fits your home. The final written quote is based on the actual condition and requested scope.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {priceRanges.map((item) => (
                  <article key={item.service} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                    <div className="flex items-start justify-between gap-3"><Home className="h-5 w-5 shrink-0 text-accent" /><p className="text-right font-heading text-lg font-bold text-white">{item.range}</p></div>
                    <h3 className="mt-5 font-bold text-white">{item.service}</h3>
                    <p className="mt-1 text-sm text-primary-foreground/65">{item.bestFor}</p>
                  </article>
                ))}
              </div>
            </div>
          </FadeInSection>

          <div className="grid gap-5 md:grid-cols-3">
          {sections.map((s, index) => (
            <FadeInSection key={s.title}>
              <section className="h-full rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="mb-5 grid h-10 w-10 place-items-center rounded-full bg-accent/10 text-sm font-bold text-accent">0{index + 1}</span>
                <h2 className="mb-3 font-heading text-xl font-bold text-foreground">{s.title}</h2>
                <p className="text-sm leading-7 text-muted-foreground">{s.body}</p>
              </section>
            </FadeInSection>
          ))}
          </div>

          <BlogInlineCTA headline="Looking for house cleaning in Clarksburg?" subtext="From move-in cleans for new builds to recurring service — locally owned, background-checked, eco-friendly. See our Clarksburg house cleaning service." ctaLabel="See Our Clarksburg Service" ctaTo="/locations/clarksburg-md/house-cleaning" />

          <FadeInSection>
            <div className="my-12 rounded-[2rem] border border-border bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">A Quick Checklist for Choosing</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {checklist.map((c) => (
                <div key={c} className="flex items-start gap-3 rounded-xl bg-secondary/40 p-4"><CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" /><p className="text-sm font-medium text-foreground">{c}</p></div>
              ))}
            </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <section className="mb-12" aria-labelledby="clarksburg-reviews">
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div><p className="text-xs font-bold uppercase tracking-[.18em] text-accent">Verified customer feedback</p><h2 id="clarksburg-reviews" className="mt-2 font-heading text-2xl font-bold text-foreground md:text-3xl">Why homeowners trust our team</h2></div>
                <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-accent underline hover:no-underline">Read Google reviews</a>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {reviews.map((review) => (
                  <blockquote key={review.name} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                    <div className="mb-4 flex gap-1 text-amber-500" aria-label="5 out of 5 stars">★★★★★</div>
                    <p className="leading-7 text-foreground">“{review.text}”</p>
                    <footer className="mt-5 text-sm font-bold text-muted-foreground">— {review.name}, Google review</footer>
                  </blockquote>
                ))}
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12">
              <p className="font-semibold text-foreground mb-1 flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Keep reading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                See{" "}
                <Link to="/resources/post-construction-cleaning-montgomery-county-md" className="text-accent underline hover:no-underline">post-construction cleaning in Montgomery County</Link>,{" "}
                <Link to="/resources/what-is-included-in-a-deep-cleaning" className="text-accent underline hover:no-underline">what's included in a deep cleaning</Link>, or book on our{" "}
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
