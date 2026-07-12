import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/forgotten-areas/hero.webp";

const areas: { spot: string; why: string }[] = [
  { spot: "Baseboards & door frames", why: "They collect a surprising amount of dust and scuffs but sit just below eye level, so they're easy to skip. Wipe them with a damp microfiber cloth every few weeks." },
  { spot: "Ceiling fan blades", why: "Dust builds on the top edge of each blade and gets flung around the room when the fan runs. Slide an old pillowcase over each blade and pull — it traps the dust instead of dropping it." },
  { spot: "Light switches, door handles & remotes", why: "The highest-touch surfaces in the house and among the dirtiest. A quick wipe with a disinfecting or microfiber cloth a couple of times a week makes a real difference." },
  { spot: "Under and behind furniture", why: "Dust bunnies, pet hair, and allergens gather where the vacuum doesn't reach. Move movable furniture and vacuum underneath at least monthly." },
  { spot: "Inside the microwave & small appliances", why: "Splatters bake on and toaster crumbs accumulate. Wipe the microwave weekly; empty the toaster tray and wipe the coffee maker regularly." },
  { spot: "Trash & recycling cans (the bins themselves)", why: "Even with liners, the bins get sticky and smelly. Rinse and wipe them down monthly to control odor and bacteria." },
  { spot: "Window tracks, sills & blinds", why: "Tracks collect grime and dead bugs; blinds are dust magnets. Vacuum the tracks and wipe sills and slats every month or two." },
  { spot: "Vents, returns & air filters", why: "Dusty vents and a clogged HVAC filter push dust around the whole house. Wipe registers and change your filter on schedule — it's one of the biggest wins for indoor air." },
];

const faqs = [
  { q: "What are the most commonly missed cleaning spots?", a: "The most forgotten areas are the ones just outside normal eye level or out of reach: baseboards and door frames, the tops of ceiling fan blades, light switches and door handles, under and behind furniture, inside the microwave, the trash bins themselves, window tracks and blinds, and air vents and HVAC filters. They're easy to skip because they're not obviously dirty day-to-day, but they accumulate the most dust and germs over time." },
  { q: "How often should I clean these forgotten areas?", a: "A simple cadence works well: wipe high-touch surfaces (switches, handles, remotes) a couple of times a week; clean the microwave weekly; vacuum under furniture and wipe baseboards every few weeks; do ceiling fans, window tracks, blinds, and bins monthly; and change your HVAC filter on its schedule (often every 1–3 months). A recurring professional clean keeps most of these on track automatically." },
  { q: "Do professional cleaners cover these areas?", a: "A standard recurring clean covers many of them (baseboards on a rotation, reachable vents, high-touch surfaces), while the deeper detail items — inside appliances, grout, window tracks, behind heavy furniture — are part of a deep clean. If a specific forgotten area bothers you, mention it when you book and we'll prioritize it." },
];

const MostForgottenCleaningAreas = () => {
  const { seoHelmet } = useSEO({
    title: "The 8 Most Forgotten Areas When Cleaning Your House",
    description:
      "The cleaning spots almost everyone misses — baseboards, ceiling fans, light switches, under furniture, vents and more — why they matter and how often to clean them.",
    canonical: "https://capitalcleancare.com/blog/most-forgotten-areas-when-cleaning",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="most forgotten cleaning areas, commonly missed cleaning spots, areas people forget to clean, overlooked cleaning spots in house" />
      </Helmet>

      <ArticleSchema
        title="The 8 Most Forgotten Areas When Cleaning Your House"
        description="The cleaning spots almost everyone misses, why they matter, and how often to clean them."
        url="https://capitalcleancare.com/blog/most-forgotten-areas-when-cleaning"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Most Forgotten Areas When Cleaning", href: "/blog/most-forgotten-areas-when-cleaning" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Most Forgotten Areas When Cleaning" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="Close-up of a microfiber cloth wiping dust from baseboards and a door frame">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Tips & Advice</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">The 8 Most Forgotten Areas When Cleaning</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">The spots almost everyone misses — and how often to actually clean them</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Capital Clean Care · MD · DC · VA · June 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Even a tidy-looking home has spots that quietly collect dust, grime, and germs — usually because they sit just outside eye level or out of easy reach. Here are the eight areas people forget most, why each one matters, and how often to give it attention.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="space-y-4 mb-10">
              {areas.map((a, i) => (
                <div key={a.spot} className="flex items-start gap-4 border border-border rounded-2xl p-5 bg-secondary/30">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-accent text-white font-bold flex items-center justify-center shadow-sm">{i + 1}</div>
                  <div><p className="font-heading font-bold text-foreground mb-1">{a.spot}</p><p className="text-sm text-muted-foreground leading-relaxed">{a.why}</p></div>
                </div>
              ))}
            </div>
          </FadeInSection>

          <BlogInlineCTA headline="Let the pros catch the spots you miss" subtext="Our recurring and deep cleans cover the forgotten areas — baseboards, vents, behind furniture, and more. Eco-friendly, background-checked, across Bethesda, Rockville, Silver Spring & Gaithersburg." ctaLabel="Get My Free Quote" ctaTo="/contact" />

          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12">
              <p className="font-semibold text-foreground mb-1">Keep reading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                See{" "}
                <Link to="/blog/what-is-included-in-a-deep-cleaning" className="text-accent underline hover:no-underline">what's included in a deep cleaning</Link>{" "}
                or{" "}
                <Link to="/blog/why-dust-builds-up-maryland-homes" className="text-accent underline hover:no-underline">why dust builds up so fast in Maryland homes</Link>.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Want Every Corner Covered?</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Eco-friendly{" "}<Link to="/services/deep-cleaning" className="underline text-primary-foreground/90 hover:text-white">deep cleaning</Link>{" "}and{" "}<Link to="/services/recurring-cleaning" className="underline text-primary-foreground/90 hover:text-white">recurring service</Link>{" "}across Maryland, DC, and Northern Virginia — background-checked and satisfaction guaranteed.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </article>
      <RelatedPosts currentSlug="most-forgotten-areas-when-cleaning" />
      <StickyCTA />
    </Layout>
  );
};

export default MostForgottenCleaningAreas;
