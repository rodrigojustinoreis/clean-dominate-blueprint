import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import FadeInSection from "@/components/blog/FadeInSection";
import StickyCTA from "@/components/blog/StickyCTA";
import CleaningFrequencyCalculator from "@/components/tools/CleaningFrequencyCalculator";

const URL = "https://capitalcleancare.com/resources/tools/cleaning-frequency-calculator";
const OG_IMAGE = "/images/cluster/howoften-og.jpg";
const HERO_IMAGE = "/images/cluster/howoften.webp";

// Static factor + profile content (the calculator's logic, in HTML, for indexability).
const FACTORS: [string, string][] = [
  ["Home size", "More square footage, more bathrooms, and more floors mean more to maintain. Size mostly moves the price, not the cadence — but a small, tidy home can comfortably stretch to monthly."],
  ["Pets", "Shedding dogs and cats leave hair and dander on baseboards, vents, and upholstery between visits. One pet nudges you toward bi-weekly; multiple pets toward weekly."],
  ["Young children", "More spills, more floor time, and more high-touch surfaces mean grime accumulates faster — a strong argument for a shorter interval and pet- and kid-safe products."],
  ["Allergies or asthma", "Dust mites, dander, and settled pollen concentrate in exactly the spots regular cleaning targets. An allergy household benefits from the most frequent cadence and a deep clean to reset the baseline."],
  ["How often you cook", "Daily cooking means more grease, splatter, and kitchen grime, which pushes the kitchen — and the whole home's rhythm — toward more frequent visits."],
  ["Someone home most days", "A home office or a household that's in all day simply gets more use, so surfaces need refreshing more often than a home that sits empty on weekdays."],
];

const PROFILES: { profile: string; rec: string; note: string }[] = [
  { profile: "Smaller, tidy home · no pets, kids, or allergies", rec: "Monthly", note: "A light maintenance clean keeps a low-traffic home fresh; the popular default steps up to bi-weekly." },
  { profile: "Most homes · steady everyday upkeep", rec: "Bi-weekly", note: "The most popular plan in the DMV — consistent without over-cleaning, and the most cost-effective per visit for a lived-in home." },
  { profile: "Busy home · pets, young kids, or allergies", rec: "Weekly", note: "High-use homes stay ahead of hair, dust, and allergens with weekly visits — the lowest per-visit recurring rate, too." },
  { profile: "Been a while, moving, hosting, or post-renovation", rec: "One-time deep clean first", note: "Reset the baseline with a deep clean, then settle into a recurring cadence that keeps it there." },
];

// Deep-clean cadence reference — from /resources/how-often-should-you-deep-clean.
const DEEP_CADENCE: [string, string][] = [
  ["Well-kept home, no pets or young kids", "1–2× a year (spring and fall)"],
  ["Homes with shedding pets or young children", "Every 3–4 months"],
  ["Allergy or asthma household", "Every 2–3 months"],
  ["On a recurring plan", "Once a year to reset the baseline"],
];

const CleaningFrequencyCalculatorPage = () => {
  const { seoHelmet } = useSEO({
    title: "Cleaning Frequency Calculator — How Often Should You Clean Your House?",
    description:
      "Free cleaning frequency calculator: answer six quick questions about your home — size, pets, kids, allergies, cooking, and occupancy — and get a recommended weekly, bi-weekly, or monthly cadence with a real price range for the DMV.",
    canonical: URL,
    ogImage: OG_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="how often should you clean your house, cleaning frequency calculator, weekly vs bi-weekly cleaning, how often house cleaning service, cleaning schedule" />
      </Helmet>

      <ArticleSchema
        title="Cleaning Frequency Calculator — How Often Should You Clean Your House?"
        description="Answer six questions about your household and get a recommended cleaning cadence — weekly, bi-weekly, or monthly — with real DMV price ranges, plus when to start with a one-time deep clean."
        url={URL}
        datePublished="2026-07-16"
        image={HERO_IMAGE}
      />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Cleaning Frequency Calculator", href: "/resources/tools/cleaning-frequency-calculator" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Cleaning Frequency Calculator" }]} />
        </div>
      </div>

      {/* Header */}
      <section className="bg-white pt-10 md:pt-14 pb-6">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="bg-accent/10 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-5 uppercase tracking-wider border border-accent/20">Free tool</span>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight">Cleaning Frequency Calculator</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            How often should you have your house cleaned? Answer six quick questions and we&apos;ll recommend a cadence —
            weekly, bi-weekly, or monthly — with a real price range and whether to start with a one-time deep clean. No email required.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-white pb-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <CleaningFrequencyCalculator />
        </div>
      </section>

      {/* Educational content (static, indexable) */}
      <article className="py-14 md:py-20 bg-secondary/20 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What Decides How Often You Should Clean</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              There&apos;s no single right answer for every home — the ideal cleaning frequency comes down to how your household
              actually lives. Six factors do most of the work, and the calculator above weighs each one to land on a realistic
              cadence. Here&apos;s what each factor means and why it matters.
            </p>
            <div className="space-y-3 mb-8">
              {FACTORS.map(([title, text]) => (
                <div key={title} className="border border-border rounded-2xl p-5 bg-white">
                  <p className="font-heading font-bold text-foreground mb-1">{title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Recommended Cleaning Frequency by Household</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              If you&apos;d rather skip the calculator, here&apos;s the short version. These recommendations follow our real{" "}
              <Link to="/pricing" className="text-accent underline hover:no-underline">pricing plans</Link>: monthly suits
              smaller, light households, bi-weekly is the steady default most homes choose, and weekly fits busy homes with pets
              or kids. Every recurring plan costs less per visit than a one-time booking.
            </p>
            <div className="rounded-2xl border border-border overflow-hidden mb-8 bg-white">
              {PROFILES.map((p, i) => (
                <div key={p.profile} className={`grid sm:grid-cols-[1fr_auto] gap-1 sm:gap-4 p-4 ${i > 0 ? "border-t border-border" : ""}`}>
                  <div>
                    <p className="font-medium text-foreground text-sm">{p.profile}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{p.note}</p>
                  </div>
                  <div className="sm:text-right">
                    <span className="inline-block bg-accent/10 text-accent font-semibold text-sm px-3 py-1 rounded-full whitespace-nowrap">{p.rec}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">And How Often to Deep Clean</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              A recurring plan handles maintenance; a periodic <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">deep clean</Link>{" "}
              resets the baseline by catching the detail work — inside appliances, grout, baseboards, and behind furniture — that
              routine visits intentionally skip. How often depends on the same household factors:
            </p>
            <div className="rounded-2xl border border-border overflow-hidden mb-6 text-sm bg-white">
              <div className="grid grid-cols-2 bg-primary text-primary-foreground font-semibold">
                <div className="p-3">Your household</div>
                <div className="p-3">Deep-clean cadence</div>
              </div>
              {DEEP_CADENCE.map((r, i) => (
                <div key={r[0]} className={`grid grid-cols-2 border-t border-border ${i % 2 === 1 ? "bg-secondary/30" : "bg-white"}`}>
                  <div className="p-3 font-medium text-foreground">{r[0]}</div>
                  <div className="p-3 text-muted-foreground">{r[1]}</div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Want the detail? Read{" "}
              <Link to="/resources/how-often-should-you-deep-clean" className="text-accent underline hover:no-underline">how often you should deep clean</Link>{" "}
              and{" "}
              <Link to="/resources/how-often-should-you-hire-a-cleaning-service" className="text-accent underline hover:no-underline">how often to hire a cleaning service</Link>, or see exactly{" "}
              <Link to="/resources/what-is-included-in-a-deep-cleaning" className="text-accent underline hover:no-underline">what&apos;s included in a deep cleaning</Link>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="rounded-2xl border border-border bg-white p-5 mb-10">
              <p className="font-heading font-bold text-foreground mb-2">How this calculator works</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                It&apos;s honest and simple — no tracking, no email. Pets, young children, allergies, daily cooking, and being home
                most days each add to a household &quot;load&quot; score: a light home lands on monthly, a typical home on bi-weekly, and a
                high-use home on weekly. Homes with pets, kids, or allergies also see a one-time deep clean recommended first to
                reset the baseline. Price ranges are the real flat-rate figures from our{" "}
                <Link to="/pricing" className="text-accent underline hover:no-underline">pricing page</Link>, shown at the
                bi-weekly baseline, with weekly saving up to ~25% per visit and monthly running about 5% more.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Get Your Exact, No-Obligation Quote</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Tell us about your home and we&apos;ll turn your recommended cadence into a flat price — eco-friendly, background-checked teams across Montgomery County and the DMV. 5.0 stars across 45 Google reviews.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                  <a href="/#quote">Get an Exact Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/40 px-8 py-6 rounded-full text-base font-semibold" asChild>
                  <a href="tel:+12407042551"><Phone className="mr-2 h-4 w-4" /> Call (240) 704-2551</a>
                </Button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </article>

      <StickyCTA />
    </Layout>
  );
};

export default CleaningFrequencyCalculatorPage;
