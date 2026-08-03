import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, HardHat } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/post-construction-clean.webp";

const included: [string, string[]][] = [
  ["The fine-dust pass (the big one)", ["Drywall and sanding dust removed from every surface", "Inside cabinets, drawers, and closets", "Vents, registers, and light fixtures", "Window tracks, sills, and frames", "Tops of doors, trim, and ledges"]],
  ["Construction residue", ["Paint specks, caulk, and adhesive removed", "Stickers and labels off windows, appliances & fixtures", "Grout haze and tile residue", "Sawdust and debris from corners and edges"]],
  ["Final detail & finish protection", ["Floors vacuumed (HEPA) then hand-detailed", "Windows and glass cleaned inside", "Fixtures, hardware, and appliances polished", "A final walk-through so it's truly move-in ready"]],
];

const whoNeedsIt = [
  "New-construction homes in Clarksburg & Germantown",
  "Teardown rebuilds in Bethesda, Potomac & Chevy Chase",
  "Kitchen, bath, or basement renovations anywhere in the county",
  "Additions, flips, and pre-listing renovations",
];

const faqs = [
  { q: "What is post-construction cleaning?", a: "Post-construction cleaning is a specialized, deep clean done after building or renovation work to make a space move-in ready. Its defining challenge is fine construction dust — drywall and sanding dust is microscopic and settles on every surface, inside cabinets, vents, and window tracks, and keeps re-settling for days. It also includes removing construction residue (paint specks, adhesive, stickers, grout haze) and a final detail of floors, windows, fixtures, and glass. It's far more thorough than a standard or even a regular deep clean." },
  { q: "How is it different from a regular deep clean?", a: "A deep clean resets a lived-in home; a post-construction clean removes the aftermath of building work. The big difference is the dust: construction dust is far finer and more pervasive than household dust, so it requires HEPA vacuuming and multiple passes (it re-settles between passes), plus removal of paint, adhesive, stickers, and grout haze that a normal clean never deals with. It's typically done in stages and takes considerably longer." },
  { q: "How much does post-construction cleaning cost in Montgomery County?", a: "It's priced by the size of the space and the amount of debris and residue left behind, so it varies more than a standard clean — a finished basement is very different from a whole new build. The best approach is a walkthrough quote: we look at the square footage and condition and give you a clear, written price with no surprises. Because the work is intensive, it runs above a standard deep clean." },
  { q: "When should the post-construction clean happen?", a: "After all the trades are finished and major debris is hauled out, but before you move furniture in or list the home. Doing it too early means dust keeps falling from ongoing work; doing it after move-in means dust gets trapped under and behind your belongings. For multi-phase projects, a rough clean mid-project plus a final clean at the end works best." },
];

const PostConstructionCleaningMontgomeryCounty = () => {
  const { seoHelmet } = useSEO({
    title: "Post-Construction Cleaning in Montgomery County, MD: A Guide",
    description:
      "What post-construction cleaning involves in Montgomery County, MD — why fine construction dust is the challenge, what's included, how it differs from a deep clean, when to schedule, and cost.",
    canonical: "https://capitalcleancare.com/resources/post-construction-cleaning-montgomery-county-md",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="post-construction cleaning montgomery county, post construction cleaning maryland, post renovation cleaning montgomery county, construction cleanup bethesda rockville" />
      </Helmet>

      <ArticleSchema
        title="Post-Construction Cleaning in Montgomery County, MD: A Guide"
        description="What post-construction cleaning involves in Montgomery County — the fine-dust challenge, what's included, how it differs from a deep clean, timing, and cost."
        url="https://capitalcleancare.com/resources/post-construction-cleaning-montgomery-county-md"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Post-Construction Cleaning in Montgomery County", href: "/resources/post-construction-cleaning-montgomery-county-md" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Post-Construction Cleaning in Montgomery County" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A cleaner removing fine drywall dust in a newly renovated Montgomery County home interior">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Local Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">Post-Construction Cleaning in Montgomery County, MD</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">Why construction dust is the real challenge — and what a proper cleanup covers</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · Montgomery County, MD · June 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Montgomery County is in a near-constant state of building — new neighborhoods in Clarksburg and Germantown, teardown rebuilds in Bethesda and Potomac, and kitchen, bath, and basement renovations everywhere in between. When the trades pack up, what's left behind is <strong>fine construction dust on every surface</strong> and a layer of residue a normal clean can't handle. Here's what a proper post-construction cleaning actually involves.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">The challenge: construction dust gets everywhere</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">Drywall and sanding dust is microscopic — it drifts into cabinets, vents, window tracks, and light fixtures, and keeps re-settling for days after the work is done. That's why post-construction cleaning isn't a one-pass job: it needs HEPA filtration and <em>multiple passes</em>, because each round of cleaning knocks more dust loose. Get it wrong and your brand-new HVAC pushes that dust around the house for weeks.</p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">What a Post-Construction Clean Covers</h2>
            <div className="space-y-5 mb-10">
              {included.map(([title, items]) => (
                <div key={title} className="border border-border rounded-2xl p-5 bg-secondary/30">
                  <p className="font-heading font-bold text-foreground mb-3 flex items-center gap-2"><HardHat className="h-5 w-5 text-accent" /> {title}</p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                    {items.map((it) => (<li key={it} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {it}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-secondary/40 border border-border rounded-2xl p-6 mb-10">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Who needs it in Montgomery County</h2>
              <ul className="space-y-2">
                {whoNeedsIt.map((w) => (<li key={w} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {w}</li>))}
              </ul>
            </div>
          </FadeInSection>

          <BlogInlineCTA headline="Just finished building or renovating?" subtext="Capital Clean Care's post-construction cleaning makes a new or renovated space truly move-in ready — HEPA filtration, multiple passes, finish-safe. Serving all of Montgomery County." ctaLabel="Get My Free Quote" ctaTo="/services/post-construction-cleaning" />

          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12">
              <p className="font-semibold text-foreground mb-1">Keep reading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                See our{" "}
                <Link to="/services/post-construction-cleaning" className="text-accent underline hover:no-underline">post-construction cleaning service</Link>, the{" "}
                <Link to="/resources/house-cleaning-guide-clarksburg-md" className="text-accent underline hover:no-underline">Clarksburg new-construction guide</Link>, or{" "}
                <Link to="/resources/what-is-included-in-a-deep-cleaning" className="text-accent underline hover:no-underline">what's included in a deep cleaning</Link>.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Make Your New Space Move-In Ready</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Eco-friendly{" "}<Link to="/services/post-construction-cleaning" className="underline text-primary-foreground/90 hover:text-white">post-construction cleaning</Link>{" "}across Montgomery County and the DMV — HEPA equipment, finish-safe, satisfaction guaranteed.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </article>
      <RelatedPosts currentSlug="post-construction-cleaning-montgomery-county-md" />
      <StickyCTA />
    </Layout>
  );
};

export default PostConstructionCleaningMontgomeryCounty;
