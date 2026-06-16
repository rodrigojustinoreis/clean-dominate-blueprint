import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, BreadcrumbSchema, HowToSchema, FAQSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";

const HERO_IMAGE = "/images/blog/prepare-cleaning/hero.webp";

const steps = [
  { name: "Pick up clutter and clear surfaces", text: "You don't need to clean — but a quick tidy of clothes, toys, dishes, and papers lets the team clean surfaces instead of moving your things around. The clearer the counters and floors, the more thorough (and faster) the clean." },
  { name: "Secure valuables and important items", text: "Put away cash, jewelry, medication, and fragile or sentimental items. Reputable companies are insured and background-checked, but securing valuables is simple peace of mind for everyone." },
  { name: "Make a note of priorities", text: "If there's an area that matters most — a guest bathroom, the kitchen, a room you're hosting in — leave a quick note or tell the team at the door so they focus their time where you want it." },
  { name: "Plan for pets", text: "Let the company know about pets in advance, and on the day, secure anxious or territorial animals in a crate or a closed room. It keeps your pet calm and the team safe and efficient." },
  { name: "Sort out access and parking", text: "Confirm how the team gets in — you're home, a key, a lockbox, or a door code — and where they can park. For condos or buildings, share any elevator, loading-dock, or visitor-parking rules ahead of time." },
  { name: "Handle dishes and personal laundry", text: "Most cleaners aren't a dish or laundry service. Running the dishwasher and clearing the sink beforehand lets them fully clean the kitchen, and picking up personal laundry clears the floors." },
];

const faqs = [
  { q: "How should I prepare for a house cleaning service?", a: "A light tidy goes a long way: pick up clutter and clear surfaces so the team can clean them, run the dishwasher and clear the sink, secure valuables and medication, and pick up personal laundry off the floors. Then sort the practical details — how the team gets in, where to park, any building rules, and a plan for pets. Finally, note your priorities so they focus time where it matters most. You don't need to clean before they arrive — just clear the way." },
  { q: "Do I need to clean before the cleaners come?", a: "No — you're hiring them to clean. What helps is tidying, not cleaning: clearing clutter and surfaces so they can actually reach and wipe everything. A floor covered in toys or a counter full of mail gets 'cleaned around' rather than cleaned, so a five-minute pickup makes your clean noticeably more thorough." },
  { q: "Should I be home during the cleaning?", a: "It's entirely up to you. Many clients provide a key, lockbox, or door code and go about their day; others prefer to be home, especially for the first visit. If you won't be there, just leave any notes about priorities and access, and make sure pets are settled." },
  { q: "What should I do with my pets?", a: "Tell the company about pets when you book. On cleaning day, secure anxious, territorial, or escape-prone animals in a crate or a closed room — it keeps them calm and lets the team work safely and efficiently. If your pet is friendly and relaxed around new people, that's fine too; just let the team know." },
];

const PrepareHomeForCleaning = () => {
  const { seoHelmet } = useSEO({
    title: "How to Prepare Your Home for a Professional Cleaning",
    description:
      "How to prepare for a house cleaning service — a simple checklist to get a better, faster clean: tidy clutter, secure valuables, plan for pets, sort access and parking.",
    canonical: "https://capitalcleancare.com/blog/how-to-prepare-home-for-professional-cleaning",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="how to prepare for house cleaning, prepare home for cleaning service, what to do before cleaners come, house cleaning preparation checklist" />
      </Helmet>

      <ArticleSchema
        title="How to Prepare Your Home for a Professional Cleaning"
        description="A simple checklist to prepare for a house cleaning service and get a better, faster clean."
        url="https://capitalcleancare.com/blog/how-to-prepare-home-for-professional-cleaning"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Prepare Your Home for a Professional Cleaning"
        description="Simple steps to get your home ready for a cleaning service so the clean is faster and more thorough."
        url="https://capitalcleancare.com/blog/how-to-prepare-home-for-professional-cleaning"
        steps={steps}
        totalTime="PT15M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "How to Prepare Your Home for a Professional Cleaning", href: "/blog/how-to-prepare-home-for-professional-cleaning" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "How to Prepare Your Home for a Professional Cleaning" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A tidy, decluttered living room ready for a professional cleaning">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Tips & Advice</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">How to Prepare Your Home for a Professional Cleaning</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">A 15-minute checklist for a better, faster, more thorough clean</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Capital Clean Care · MD · DC · VA · June 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              You don't need to clean before a cleaning service arrives — but a few minutes of prep makes the clean noticeably better and faster. Here's exactly what to do (and what not to bother with) so you get the most from every visit.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="space-y-8 mb-10">
              {steps.map((s, i) => (
                <div key={s.name} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent text-white font-bold text-lg flex items-center justify-center shadow-md">{String(i + 1).padStart(2, "0")}</div>
                  <div><h2 className="font-heading text-xl font-bold text-foreground mb-2">{s.name}</h2><p className="text-muted-foreground leading-relaxed">{s.text}</p></div>
                </div>
              ))}
            </div>
          </FadeInSection>

          <BlogInlineCTA headline="Ready to book your first clean?" subtext="Tell us about your home and priorities — we'll handle the rest. Eco-friendly, background-checked cleaners across Bethesda, Rockville, Silver Spring & Gaithersburg." ctaLabel="Get My Free Quote" ctaTo="/contact" />

          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12">
              <p className="font-semibold text-foreground mb-1">Keep reading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                See{" "}
                <Link to="/blog/what-is-included-in-a-standard-cleaning" className="text-accent underline hover:no-underline">what's included in a standard cleaning</Link>{" "}
                or{" "}
                <Link to="/blog/how-often-should-you-hire-a-cleaning-service" className="text-accent underline hover:no-underline">how often you should hire a cleaning service</Link>.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Book Your Cleaning</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Eco-friendly{" "}<Link to="/services/house-cleaning" className="underline text-primary-foreground/90 hover:text-white">house cleaning</Link>{" "}across Maryland, DC, and Northern Virginia — background-checked, locally owned, satisfaction guaranteed.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </article>
      <StickyCTA />
    </Layout>
  );
};

export default PrepareHomeForCleaning;
