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

const HERO_IMAGE = "/images/blog/between-cleanings/hero.webp";

const habits: { title: string; body: string }[] = [
  { title: "The 10-minute nightly reset", body: "Spend ten minutes before bed putting things back where they belong, wiping the kitchen counters, and clearing the sink. Going to sleep with a reset main floor is the single biggest habit for keeping a home consistently tidy." },
  { title: "Clean as you go in the kitchen", body: "Wipe spills immediately, load the dishwasher as you cook rather than after, and never leave the stovetop for 'later.' Kitchen mess compounds fast — staying ahead of it is far easier than catching up." },
  { title: "Keep wipes where the mess happens", body: "Stash microfiber cloths or a safe spray in each bathroom and the kitchen. A 30-second wipe of the sink, faucet, and counter right after use prevents the buildup that turns into a chore." },
  { title: "One-touch and shoes-off", body: "Deal with items once — hang the coat, sort the mail, put the shoes away — instead of creating piles to handle later. A shoes-off habit alone keeps a huge amount of dirt and grit out of your floors." },
  { title: "A load of laundry a day", body: "Running one load a day (wash, dry, fold, put away) keeps laundry from becoming a weekend mountain and keeps floors and surfaces clear of clothes." },
  { title: "Quick daily floor touch-ups", body: "A cordless vacuum or a quick sweep of high-traffic areas and the kitchen each day stops crumbs, pet hair, and tracked-in soil from spreading through the house." },
];

const faqs = [
  { q: "How do I keep my house clean between professional cleanings?", a: "Lean on small daily habits rather than big weekend efforts: a 10-minute nightly reset (tidy, wipe counters, clear the sink), clean as you go in the kitchen, keep wipes where messes happen for quick touch-ups, handle items once (hang the coat, sort the mail), adopt a shoes-off rule, run a load of laundry a day, and do a quick floor touch-up in high-traffic areas. These keep your home consistently presentable so each professional visit stays light and effective." },
  { q: "What's the most effective daily cleaning habit?", a: "The 10-minute nightly reset. Putting things back, wiping the kitchen, and clearing the sink before bed means you wake up to a tidy home and never let mess accumulate. It's a small, repeatable habit that has an outsized effect on how clean your home feels day to day." },
  { q: "Does a shoes-off rule really make a difference?", a: "Yes — a large share of household dirt, grit, and outdoor allergens is tracked in on shoes. Taking shoes off at the door (and using good doormats) noticeably reduces what ends up on your floors, which means less vacuuming and mopping and cleaner air, especially helpful in pollen-heavy Maryland." },
  { q: "How does this work with a recurring cleaning service?", a: "Beautifully. Daily habits handle the surface tidiness, while your recurring cleaner handles the deeper work — bathrooms, floors, dusting, kitchens — on a schedule. Because the home stays maintained between visits, each professional clean is faster and more thorough, and your home looks great all the time rather than just on cleaning day." },
];

const KeepHouseCleanBetween = () => {
  const { seoHelmet } = useSEO({
    title: "How to Keep Your House Clean Between Cleanings",
    description:
      "Simple daily habits to keep your house clean between professional cleanings — the 10-minute nightly reset, clean-as-you-go, shoes-off, and more so your home stays tidy.",
    canonical: "https://capitalcleancare.com/blog/how-to-keep-house-clean-between-cleanings",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="keep house clean between cleanings, daily cleaning habits, how to keep house tidy, maintain clean home between visits" />
      </Helmet>

      <ArticleSchema
        title="How to Keep Your House Clean Between Cleanings"
        description="Simple daily habits to keep your house tidy between professional cleanings."
        url="https://capitalcleancare.com/blog/how-to-keep-house-clean-between-cleanings"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "How to Keep Your House Clean Between Cleanings", href: "/blog/how-to-keep-house-clean-between-cleanings" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "How to Keep Your House Clean Between Cleanings" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A consistently tidy, organized kitchen and living space in a Maryland home">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Tips & Advice</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">How to Keep Your House Clean Between Cleanings</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">Small daily habits that keep your home tidy without the weekend marathon</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Capital Clean Care · MD · DC · VA · June 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A clean home isn't about one big effort — it's about small habits that stop mess from ever piling up. These six routines keep your house consistently tidy between professional visits, so it always feels fresh and each clean stays quick and effective.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="space-y-4 mb-10">
              {habits.map((h, i) => (
                <div key={h.title} className="flex items-start gap-4 border border-border rounded-2xl p-5 bg-secondary/30">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-accent text-white font-bold flex items-center justify-center shadow-sm">{i + 1}</div>
                  <div><p className="font-heading font-bold text-foreground mb-1">{h.title}</p><p className="text-sm text-muted-foreground leading-relaxed">{h.body}</p></div>
                </div>
              ))}
            </div>
          </FadeInSection>

          <BlogInlineCTA headline="Let us handle the deep work" subtext="Daily habits keep things tidy; our recurring cleaning handles the rest — bathrooms, floors, dusting, kitchens. Eco-friendly, background-checked, across the DMV." ctaLabel="Get My Free Quote" ctaTo="/contact" />

          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12">
              <p className="font-semibold text-foreground mb-1">Keep reading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                See{" "}
                <Link to="/blog/how-often-should-you-hire-a-cleaning-service" className="text-accent underline hover:no-underline">how often you should hire a cleaning service</Link>{" "}
                or the{" "}
                <Link to="/blog/most-forgotten-areas-when-cleaning" className="text-accent underline hover:no-underline">most forgotten areas when cleaning</Link>.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Keep It Effortless with Recurring Service</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Eco-friendly{" "}<Link to="/services/recurring-cleaning" className="underline text-primary-foreground/90 hover:text-white">recurring cleaning</Link>{" "}across Maryland, DC, and Northern Virginia — background-checked, locally owned, satisfaction guaranteed.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </article>
      <RelatedPosts currentSlug="how-to-keep-house-clean-between-cleanings" />
      <StickyCTA />
    </Layout>
  );
};

export default KeepHouseCleanBetween;
