import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sun } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/summer-checklist/hero.webp";

const checklist: [string, string[]][] = [
  ["Beat the Maryland humidity", ["Wipe down bathrooms and check for early mildew weekly", "Run exhaust fans and a dehumidifier; aim for 40–50% indoor humidity", "Check window AC units, basements, and closets for musty smells", "Clean and dry shower curtains, mats, and grout lines"]],
  ["Cooling-system care", ["Replace or clean HVAC filters (they work overtime in summer)", "Vacuum supply and return vents and registers", "Wipe ceiling fan blades before you run them all season", "Clear dust from window-unit filters and coils"]],
  ["Open-window season", ["Wash windows inside and out while the weather's dry", "Vacuum and wipe window tracks and sills", "Clean or replace window screens (pollen and pollen-dust collect here)", "Dust blinds and launder light summer curtains"]],
  ["Outdoor living & entryways", ["Sweep and wash patios, decks, and porches", "Wipe down outdoor furniture and clean the grill", "Shake out and wash entry mats; manage tracked-in grass and grit", "Tidy the garage and mudroom for summer gear"]],
  ["Kitchen & vacation prep", ["Deep clean the fridge before stocking up on summer produce and drinks", "Degrease the stovetop, oven, and range hood", "Take the trash and recycling bins outside for a rinse (odor control)", "Do a quick reset before and after any travel so you return to a fresh home"]],
];

const faqs = [
  { q: "What should be on a summer cleaning checklist in Maryland?", a: "Summer cleaning in Maryland centers on humidity and cooling. Prioritize mildew control in bathrooms, basements, and closets; HVAC filter changes and vent cleaning (your system runs hard all season); washing windows, tracks, and screens while it's dry; refreshing outdoor living spaces and entryways; and a fridge and kitchen deep clean before summer entertaining. A dehumidifier keeping indoor humidity around 40–50% prevents most summer mold and musty smells." },
  { q: "How do I stop mold and mildew in a humid Maryland summer?", a: "Control moisture: run bathroom exhaust fans, use a dehumidifier to hold indoor humidity around 40–50%, and keep basements and closets ventilated. Wipe down damp areas (shower, grout, window sills) regularly, dry shower curtains and mats, and address any musty smell quickly — it's usually the first sign of mildew starting. Catching it early is far easier than removing established mold." },
  { q: "How often should I change my AC filter in summer?", a: "In peak cooling season, check your HVAC filter monthly and change it roughly every 1–2 months — more often with pets or allergies. A clean filter keeps the system efficient and stops it from recirculating dust through the whole house, which is one of the biggest contributors to summer dust buildup in Maryland homes." },
];

const SummerCleaningChecklist = () => {
  const { seoHelmet } = useSEO({
    title: "Summer Cleaning Checklist for Maryland Homes (2026)",
    description:
      "A summer cleaning checklist built for Maryland's humidity — mildew control, HVAC and vent care, windows and screens, outdoor spaces, and kitchen prep for summer entertaining.",
    canonical: "https://capitalcleancare.com/resources/summer-cleaning-checklist-maryland",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="summer cleaning checklist maryland, summer house cleaning, summer cleaning tips dmv, humidity mildew cleaning maryland" />
      </Helmet>

      <ArticleSchema
        title="Summer Cleaning Checklist for Maryland Homes (2026)"
        description="A summer cleaning checklist built for Maryland's humidity — mildew control, HVAC care, windows, outdoor spaces, and kitchen prep."
        url="https://capitalcleancare.com/resources/summer-cleaning-checklist-maryland"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Summer Cleaning Checklist for Maryland", href: "/resources/summer-cleaning-checklist-maryland" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Summer Cleaning Checklist for Maryland" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A bright, airy Maryland living room on a sunny summer day with open windows">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Seasonal Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">Summer Cleaning Checklist for Maryland Homes</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">Built for our humidity — mildew, cooling systems, windows, and summer entertaining</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · June 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Summer cleaning in the DMV isn't the same as spring cleaning — the enemy here is <strong>humidity</strong>, and your cooling system is working overtime. This checklist focuses on what actually matters in a Maryland summer: keeping mildew at bay, caring for your AC and vents, opening up the house, and getting ready to entertain.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="space-y-5 mb-10">
              {checklist.map(([title, items]) => (
                <div key={title} className="border border-border rounded-2xl p-5 bg-secondary/30">
                  <p className="font-heading font-bold text-foreground mb-3 flex items-center gap-2"><Sun className="h-5 w-5 text-accent" /> {title}</p>
                  <ul className="space-y-1.5">
                    {items.map((it) => (<li key={it} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {it}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeInSection>

          <BlogInlineCTA headline="Want a summer reset without the work?" subtext="Book a one-time deep clean or recurring service and skip the summer chore list. Eco-friendly, background-checked, across Bethesda, Rockville, Silver Spring & Gaithersburg." ctaLabel="Get My Free Quote" ctaTo="/contact" />

          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12">
              <p className="font-semibold text-foreground mb-1">Keep reading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                See{" "}
                <Link to="/resources/why-dust-builds-up-maryland-homes" className="text-accent underline hover:no-underline">why dust builds up in Maryland homes</Link>{" "}
                or{" "}
                <Link to="/resources/how-to-get-rid-of-mildew-smell-naturally" className="text-accent underline hover:no-underline">how to get rid of mildew smell naturally</Link>.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Enjoy Your Summer — We'll Handle the Cleaning</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Eco-friendly{" "}<Link to="/services/deep-cleaning" className="underline text-primary-foreground/90 hover:text-white">deep cleaning</Link>{" "}and{" "}<Link to="/services/recurring-cleaning" className="underline text-primary-foreground/90 hover:text-white">recurring service</Link>{" "}across Maryland, DC, and Northern Virginia — background-checked, satisfaction guaranteed.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </article>
      <RelatedPosts currentSlug="summer-cleaning-checklist-maryland" />
      <StickyCTA />
    </Layout>
  );
};

export default SummerCleaningChecklist;
