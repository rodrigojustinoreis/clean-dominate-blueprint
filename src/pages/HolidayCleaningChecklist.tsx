import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Gift } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/holiday-checklist/hero.webp";

const checklist: [string, string[]][] = [
  ["A week before: the deep-clean priorities", ["Deep clean the guest bathroom (the room guests judge most)", "Scrub the kitchen — counters, sink, and the oven before big cooking", "Wash floors throughout and vacuum carpets and rugs", "Dust surfaces, ceiling fans, and light fixtures top-to-bottom"]],
  ["The entryway & guest-ready touches", ["Clear the entry, wipe the front door, and set out a clean mat", "Make space in the coat closet (or set up a coat area)", "Freshen the guest room: clean linens, clear surfaces, empty trash", "Stock the guest bath with soap, fresh towels, and toilet paper"]],
  ["Day-of: the quick reset", ["Wipe high-touch surfaces — handles, switches, faucets, remotes", "Empty trash and recycling so they're ready for party volume", "Do a fast bathroom and kitchen touch-up an hour before guests arrive", "Light a clean-burning candle or open a window for fresh air"]],
  ["After the party", ["Tackle the kitchen first — load the dishwasher, degrease the stovetop", "Spot-treat carpet and upholstery spills quickly before they set", "Take out trash and recycling; rinse the bins if needed", "Or book a post-event clean and skip the cleanup entirely"]],
];

const faqs = [
  { q: "How do I get my house ready for holiday guests?", a: "Work backward from the party. About a week out, do the deep-clean priorities — guest bathroom, kitchen (including the oven before big cooking), floors, and dusting. A few days before, focus on the guest-facing touches: a clear entryway, coat space, a fresh guest room, and a stocked guest bath. Day-of, do a quick reset of high-touch surfaces and empty the trash so it's ready for party volume. Splitting it into stages keeps it manageable instead of one exhausting push." },
  { q: "What should I clean first when hosting?", a: "The guest bathroom and the kitchen — those are the two rooms guests use and notice most. After that, the entryway (first impression), the dining and living areas where everyone gathers, and any guest bedroom. You can clean less-used rooms lightly or just keep their doors closed." },
  { q: "Should I book a professional clean before the holidays?", a: "It's one of the best ways to save your own time during the busiest season — but book early. Holiday weeks are peak demand for cleaning companies, and the best slots fill up well in advance. Many hosts book a deep clean a few days before the event and a post-event clean for the day after, so they can actually enjoy hosting instead of spending it scrubbing." },
  { q: "How far in advance should I schedule holiday cleaning?", a: "For holiday weeks, schedule two to four weeks ahead if you can — earlier for Thanksgiving and the December holidays, which are the busiest. If you want both a pre-event and a post-event clean, lock both in at once so the dates are reserved." },
];

const HolidayCleaningChecklist = () => {
  const { seoHelmet } = useSEO({
    title: "Holiday Cleaning Checklist for DMV Hosts (2026)",
    description:
      "A stage-by-stage holiday cleaning checklist for hosting in the DMV — the week-before deep clean, guest-ready touches, the day-of reset, and after-party cleanup.",
    canonical: "https://capitalcleancare.com/blog/holiday-cleaning-checklist-dmv",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="holiday cleaning checklist, cleaning before guests, hosting cleaning checklist dmv, thanksgiving christmas cleaning, prepare house for holiday guests" />
      </Helmet>

      <ArticleSchema
        title="Holiday Cleaning Checklist for DMV Hosts (2026)"
        description="A stage-by-stage holiday cleaning checklist for hosting — the week-before deep clean, guest-ready touches, the day-of reset, and after-party cleanup."
        url="https://capitalcleancare.com/blog/holiday-cleaning-checklist-dmv"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Holiday Cleaning Checklist for DMV Hosts", href: "/blog/holiday-cleaning-checklist-dmv" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Holiday Cleaning Checklist for DMV Hosts" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A clean, warmly decorated dining room set for a holiday gathering in a Maryland home">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Seasonal Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">Holiday Cleaning Checklist for DMV Hosts</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">A stage-by-stage plan so hosting feels easy, not exhausting</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Capital Clean Care · MD · DC · VA · June 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Hosting is wonderful; the cleaning marathon before it isn't. The trick is to <strong>split it into stages</strong> instead of one frantic push — a deep clean the week before, guest-ready touches a few days out, a quick reset the day of, and a plan for the aftermath. Here's the full checklist.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="space-y-5 mb-10">
              {checklist.map(([title, items]) => (
                <div key={title} className="border border-border rounded-2xl p-5 bg-secondary/30">
                  <p className="font-heading font-bold text-foreground mb-3 flex items-center gap-2"><Gift className="h-5 w-5 text-accent" /> {title}</p>
                  <ul className="space-y-1.5">
                    {items.map((it) => (<li key={it} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {it}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeInSection>

          <BlogInlineCTA headline="Host the gathering, skip the scrubbing" subtext="Book a pre-event deep clean and a post-event cleanup — book early, holiday slots fill fast. Eco-friendly, background-checked, across the DMV." ctaLabel="Get My Free Quote" ctaTo="/contact" />

          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12">
              <p className="font-semibold text-foreground mb-1">Keep reading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                See{" "}
                <Link to="/blog/what-is-included-in-a-deep-cleaning" className="text-accent underline hover:no-underline">what's included in a deep cleaning</Link>{" "}
                or{" "}
                <Link to="/blog/how-to-prepare-home-for-professional-cleaning" className="text-accent underline hover:no-underline">how to prepare your home for a professional cleaning</Link>.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Book Your Holiday Clean Early</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Eco-friendly{" "}<Link to="/services/deep-cleaning" className="underline text-primary-foreground/90 hover:text-white">deep cleaning</Link>{" "}before and after the party, across Maryland, DC, and Northern Virginia, including{" "}<Link to="/locations/arlington-va/deep-cleaning" className="underline text-primary-foreground/90 hover:text-white">deep cleaning in Arlington, VA</Link> — background-checked, satisfaction guaranteed.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </article>
      <RelatedPosts currentSlug="holiday-cleaning-checklist-dmv" />
      <StickyCTA />
    </Layout>
  );
};

export default HolidayCleaningChecklist;
