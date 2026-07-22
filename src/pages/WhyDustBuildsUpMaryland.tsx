import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Wind } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/dust-buildup/hero.webp";

const causes: { title: string; body: string }[] = [
  { title: "Heavy tree canopy & pollen", body: "Maryland's lush tree cover — oaks, maples, and pines across Montgomery County — is beautiful but means a long, intense pollen season and a constant supply of fine organic debris that drifts indoors every time a door opens." },
  { title: "Humidity and the HVAC running year-round", body: "The DMV's humid summers and cold winters mean your HVAC runs much of the year. Every cycle pulls air (and dust) through the system and recirculates it — and a dusty filter or ducts spread it through the whole house." },
  { title: "Older housing stock", body: "Many MD homes are decades old, with original ductwork, settled construction dust, and small gaps around windows and doors that let outdoor particles in. Older carpet and upholstery also shed and trap more dust." },
  { title: "Pets and people", body: "Dust is mostly dead skin cells, fabric fibers, pet dander, and soil tracked in from outside. More occupants and pets simply means more of all of it, generated continuously." },
];

const reduce = [
  "Change your HVAC filter on schedule (often every 1–3 months) — the single biggest win",
  "Vacuum with a true-HEPA vacuum so fine dust is captured, not blown back out",
  "Use doormats and consider a shoes-off rule to cut tracked-in soil",
  "Dust high-to-low with microfiber (it traps dust instead of scattering it)",
  "Wash bedding weekly and keep humidity in the 40–50% range",
  "Don't forget vents, returns, ceiling fans, and behind furniture",
];

const faqs = [
  { q: "Why does my house get so dusty so fast in Maryland?", a: "A combination of local factors: Maryland's heavy tree canopy and long pollen season feed a constant stream of fine outdoor particles; the humid summers and cold winters keep your HVAC running much of the year, which recirculates dust through the home; a lot of the housing stock is older, with original ductwork and small gaps that let outdoor air in; and pets and people continuously shed the skin cells, dander, and fibers that make up most household dust. Together they mean dust returns quickly even after a thorough clean." },
  { q: "What is house dust actually made of?", a: "Mostly dead skin cells, textile and paper fibers, pet dander, pollen, and fine soil tracked in from outdoors, along with dust mites and their waste. In the DMV, pollen and outdoor organic debris make up a larger share than in drier climates, especially in spring and fall." },
  { q: "How do I reduce dust buildup at home?", a: "Start with your HVAC filter — changing it on schedule is the highest-impact step. Then vacuum with a true-HEPA vacuum, use doormats and a shoes-off habit, dust high-to-low with microfiber cloths, wash bedding weekly, and keep indoor humidity around 40–50%. Don't skip the spots that reseed dust into the air: vents, returns, ceiling fans, and behind furniture. Regular deep cleaning of those detail areas keeps the baseline lower." },
  { q: "Does professional cleaning help with dust?", a: "Yes — particularly with HEPA equipment and attention to the detail areas (vents, baseboards, fans, behind furniture) that a quick clean misses. Recurring service keeps dust from accumulating between visits, and a periodic deep clean resets the reservoirs (carpet, upholstery, vents and ducts) where dust collects and re-circulates." },
];

const WhyDustBuildsUpMaryland = () => {
  const { seoHelmet } = useSEO({
    title: "Why Dust Builds Up So Fast in Maryland Homes",
    description:
      "Why Maryland homes get dusty so quickly — tree canopy and pollen, year-round HVAC use, older housing, pets — what dust is made of, and the most effective ways to reduce it.",
    canonical: "https://capitalcleancare.com/resources/why-dust-builds-up-maryland-homes",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="why dust builds up maryland homes, why is my house so dusty, reduce house dust, dust buildup dmv, how to reduce dust at home" />
      </Helmet>

      <ArticleSchema
        title="Why Dust Builds Up So Fast in Maryland Homes"
        description="The local reasons Maryland homes get dusty quickly, what dust is made of, and the most effective ways to reduce it."
        url="https://capitalcleancare.com/resources/why-dust-builds-up-maryland-homes"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why Dust Builds Up in Maryland Homes", href: "/resources/why-dust-builds-up-maryland-homes" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Why Dust Builds Up in Maryland Homes" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="Sunlight through a window revealing dust in the air of a Maryland home">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Home Care Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">Why Dust Builds Up So Fast in Maryland Homes</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">The local reasons your home gets dusty — and how to slow it down</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · June 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              If it feels like you dust on Saturday and it's back by Wednesday, you're not imagining it — and in Maryland there are real, local reasons for it. Here's what's driving the buildup and the steps that actually slow it down.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Why It's Worse Here</h2>
            <div className="space-y-4 mb-10">
              {causes.map((c) => (
                <div key={c.title} className="flex items-start gap-3 border border-border rounded-2xl p-5 bg-secondary/30">
                  <Wind className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div><p className="font-heading font-bold text-foreground mb-1">{c.title}</p><p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p></div>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">How to Reduce Dust Buildup</h2>
            <div className="space-y-3 mb-10">
              {reduce.map((r) => (
                <div key={r} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" /><p className="text-muted-foreground">{r}</p></div>
              ))}
            </div>
          </FadeInSection>

          <BlogInlineCTA headline="Keep the dust down for good" subtext="HEPA-equipped recurring cleaning keeps Maryland dust from ever building up — vents, fans, baseboards and all. Eco-friendly, background-checked, across the DMV." ctaLabel="Get My Free Quote" ctaTo="/contact" />

          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12">
              <p className="font-semibold text-foreground mb-1">Keep reading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                See the{" "}
                <Link to="/resources/most-forgotten-areas-when-cleaning" className="text-accent underline hover:no-underline">most forgotten areas when cleaning</Link>{" "}
                or{" "}
                <Link to="/resources/hepa-filters-pets-asthma" className="text-accent underline hover:no-underline">how HEPA filtration helps with airborne dust and dander</Link>. Dust matters even more for older adults — see{" "}
                <Link to="/resources/aging-in-place-montgomery-county-cleaning" className="text-accent underline hover:no-underline">keeping a senior's home healthy and low-dust</Link>.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Less Dusting, More Living</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Eco-friendly{" "}<Link to="/services/recurring-cleaning" className="underline text-primary-foreground/90 hover:text-white">recurring cleaning</Link>{" "}across Maryland, DC, and Northern Virginia — HEPA equipment, background-checked teams, satisfaction guaranteed.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </article>
      <RelatedPosts currentSlug="why-dust-builds-up-maryland-homes" />
      <StickyCTA />
    </Layout>
  );
};

export default WhyDustBuildsUpMaryland;
