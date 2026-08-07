import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import BlogInlineImage from "@/components/blog/BlogInlineImage";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/services/recurring-cleaning.webp";
const URL = "https://capitalcleancare.com/resources/cleaning-service-vs-caregiver-elderly";
const SENIOR = "/senior-home-cleaning-montgomery-county-md";
const SIGNS_POST = "/resources/signs-aging-parent-needs-help-housekeeping";
const FALL_POST = "/resources/clean-home-fall-prevention-seniors";
const GENWORTH = "https://www.genworth.com/aging-and-you/finances/cost-of-care.html";
const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const TABLE: { label: string; caregiver: string; cleaning: string }[] = [
  { label: "Primary role", caregiver: "Personal & medical support", cleaning: "Housekeeping & home upkeep" },
  { label: "Typical tasks", caregiver: "Bathing, dressing, medication reminders, mobility help, meal prep, companionship", cleaning: "Dusting, floors, bathrooms, kitchen, laundry, linen changes, tidying" },
  { label: "Typical cost", caregiver: "Around $30+/hour, often several hours a day", cleaning: "A flat per-visit rate — a fraction of a caregiver day" },
  { label: "Typical schedule", caregiver: "Daily to around-the-clock", cleaning: "Weekly, biweekly, or monthly visits" },
  { label: "Right for", caregiver: "A parent who needs hands-on help with daily living or health", cleaning: "A parent who's independent but can't keep up the house" },
];

const CleaningServiceVsCaregiver = () => {
  const { seoHelmet } = useSEO({
    title: "Cleaning Service vs. Caregiver for Elderly Parents",
    description:
      "Not sure if your aging parent needs a caregiver or just help around the house? Compare costs, scope and when each makes sense in Montgomery County, MD.",
    canonical: URL,
    preloadImage: HERO_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="cleaning service vs caregiver for elderly, caregiver vs housekeeper elderly parent, home care vs cleaning service cost" />
      </Helmet>

      <ArticleSchema
        title="Cleaning Service vs. Caregiver: Which Does Your Parent Actually Need?"
        description="An honest comparison of an in-home caregiver and a cleaning service for an aging parent — what each does, what each costs, a side-by-side table, and when a cleaning service, a caregiver, or both is the right choice in Montgomery County, MD."
        url={URL}
        datePublished="2026-07-21"
        image={HERO_IMAGE}
      />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Cleaning Service vs. Caregiver", href: "/resources/cleaning-service-vs-caregiver-elderly" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Cleaning Service vs. Caregiver" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A clean, cared-for home — weighing a cleaning service against a caregiver for an aging parent">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Home Care Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">Cleaning Service vs. Caregiver: Which Does Your Parent Actually Need?</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">An honest look at cost, scope, and when each one makes sense</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Capital Clean Care · Montgomery County, MD · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href={PHONE_HREF}>Call {PHONE}</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-xl text-gray-700 leading-relaxed">

          <FadeInSection>
            <p className="mb-6">
              There's a moment many families reach with an aging parent: they're still living independently, still
              sharp, still themselves — but the house has started to slip. The dishes pile up, the bathroom isn't what
              it used to be, laundry lingers. You want to help, so you start looking into options. Almost immediately,
              you hit a confusing question: does Mom or Dad need a <strong className="text-foreground">caregiver</strong>,
              or just some <strong className="text-foreground">help around the house</strong>?
            </p>
            <p className="mb-8">
              It's easy to get tangled up here, because the words get used interchangeably and the stakes feel high. The
              honest answer is that these are two very different services, at very different price points, solving very
              different problems. Understanding the difference — before you spend a dime — can save you money, stress,
              and a hard conversation. Here's a clear, no-pressure breakdown.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineImage
              src="/images/services/recurring-cleaning.webp"
              alt="A professional cleaner maintaining a tidy home on a recurring schedule."
              caption="A cleaning service keeps the home itself in shape — a separate job from the hands-on personal care a caregiver provides."
            />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What a Caregiver Does (and Costs)</h2>
            <p className="mb-4">
              A caregiver — sometimes called a home health aide or personal care aide — provides hands-on support with
              the activities of daily living. That can include bathing and dressing, medication reminders, help moving
              safely around the home, meal preparation, and companionship. It's personal, often physical, and sometimes
              medical care. For a parent who genuinely needs help with these things, a caregiver is essential and
              irreplaceable.
            </p>
            <p className="mb-4">
              That level of care comes at a cost. According to Genworth's annual{" "}
              <a href={GENWORTH} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">Cost of Care Survey</a>,
              the national median for a home health aide runs around <strong className="text-foreground">$30 an hour or
              more</strong> — and because care is usually needed for several hours a day, sometimes around the clock, the
              monthly total climbs quickly into the thousands. It's a serious, worthwhile investment when the need is real.
            </p>
            <p className="mb-8">
              It's worth knowing what that price does and doesn't buy. A caregiver is trained and scheduled around your
              parent as a person — their mobility, their medications, their day. Deep house cleaning usually isn't the
              focus, and paying a care rate to have someone mop the kitchen is an expensive way to get a clean floor. That
              matters when you're deciding where your budget should actually go.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What a Cleaning Service Does (and Costs)</h2>
            <p className="mb-4">
              A cleaning service does one thing, and does it well: it keeps the home clean and orderly. That means
              dusting, vacuuming and mopping floors, scrubbing bathrooms and the kitchen, changing bed linens, handling
              laundry, and clearing clutter — the ongoing upkeep that keeps a home healthy and safe to live in.
            </p>
            <p className="mb-4">
              It's important to be honest here: <strong className="text-foreground">a cleaning service is not a
              caregiver, and it never replaces medical or personal care.</strong> A cleaner won't help your parent
              bathe, manage medication, or respond to a health emergency. But what it does, it does at a fraction of the
              cost — a flat, predictable per-visit rate on a recurring schedule, rather than an hourly rate for many
              hours a day. For many families, that single distinction turns out to be the whole answer.
            </p>
            <p className="mb-8">
              There's also a quieter benefit that's easy to overlook. A clean, uncluttered home is a safer home — fewer
              trip hazards, cleaner air, a bathroom that's easier to use — and it simply feels better to live in. For a
              parent who takes pride in their home, having it consistently cared for can lift their mood and their
              dignity as much as it protects their health. That's real value, even before you compare the price tags.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Caregiver vs. Cleaning Service, Side by Side</h2>
            <div className="overflow-x-auto rounded-2xl border border-border mb-8">
              <table className="w-full text-left text-base border-collapse min-w-[520px]">
                <caption className="sr-only">Comparison of an in-home caregiver and a cleaning service for an elderly parent</caption>
                <thead>
                  <tr className="bg-secondary/60">
                    <th scope="col" className="p-4 font-heading font-bold text-foreground"> </th>
                    <th scope="col" className="p-4 font-heading font-bold text-foreground">In-Home Caregiver</th>
                    <th scope="col" className="p-4 font-heading font-bold text-accent">Cleaning Service</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE.map((r) => (
                    <tr key={r.label} className="border-t border-border align-top">
                      <th scope="row" className="p-4 font-semibold text-foreground">{r.label}</th>
                      <td className="p-4 text-gray-700">{r.caregiver}</td>
                      <td className="p-4 text-gray-700">{r.cleaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">When a Cleaning Service Is the Right First Step</h2>
            <p className="mb-4">
              Here's what surprises a lot of families: quite often, housekeeping is the real struggle — not personal
              care. The parent is still independent and managing their own routine, but keeping up a whole house has
              simply become too much. If that sounds familiar, a cleaning service may be all that's needed for now.
            </p>
            <p className="mb-8">
              Be honest with yourself about which problem you're actually solving. If you've been noticing{" "}
              <Link to={SIGNS_POST} className="text-accent font-medium hover:underline">the early signs a parent is struggling at home</Link> —
              clutter, expired food, a bathroom that isn't what it was — but your parent is otherwise doing fine day to
              day, the issue is the housekeeping, not their care. Starting with{" "}
              <Link to={SENIOR} className="text-accent font-medium hover:underline">housekeeping support designed for older adults</Link>{" "}
              is usually the lowest-cost, least-intrusive step — and it keeps the home safer, too, since a clean,
              uncluttered house is a big part of{" "}
              <Link to={FALL_POST} className="text-accent font-medium hover:underline">how regular cleaning reduces fall hazards</Link>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">When You Need Both</h2>
            <p className="mb-4">
              Sometimes the answer isn't one or the other — it's both, and that combination can be the smartest use of
              money. If your parent already has a caregiver, every hour that caregiver spends scrubbing floors or
              catching up on laundry is an hour <em>not</em> spent on the care only they can provide.
            </p>
            <p className="mb-8">
              Pairing a dedicated cleaning service with a caregiver lets each do what they do best: the cleaning service
              handles the home, so the caregiver's paid hours go entirely to personal care and companionship. Families
              often find they can trim caregiver hours — or get far more value from them — by handing the housekeeping to{" "}
              <Link to={SENIOR} className="text-accent font-medium hover:underline">an affordable senior cleaning plan</Link>.
              The home stays clean, the care stays focused, and the overall cost often comes down.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">How Families in Montgomery County Handle It</h2>
            <p className="mb-4">
              Across Montgomery County — in Silver Spring, Rockville, Bethesda, and the communities around them — we see
              this play out every week. Some families start with recurring cleaning while a parent is fully independent,
              adding a caregiver only later if needs change. Others use both from the start. What's consistent is that
              keeping the home clean and safe is almost always part of the plan, whatever else is going on.
            </p>
            <p className="mb-8">
              Local families also value the practical things: the same trusted cleaner each visit, background-checked and
              insured, and text updates so an adult child managing care from Silver Spring, Bethesda, or out of state
              always knows the home has been looked after. When you can't be there in person every week, that
              consistency — a familiar face your parent recognizes, and a quick note that the visit went well — takes a
              real weight off the whole family.
            </p>
          </FadeInSection>

          <FadeInSection>
            <p className="mb-8">
              There's no single right answer — only the right one for your parent, right now. But if the house is the
              main thing slipping and their care is otherwise fine, don't overspend on a caregiver you may not yet need.
              Start with the home. It's the most affordable first step — and often the only one required.
            </p>
          </FadeInSection>

          {/* ── Final CTA ── */}
          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Start With the Home — Get a Free Quote</h2>
              <p className="text-primary-foreground/85 mb-6 leading-relaxed max-w-xl mx-auto text-lg">
                Trusted senior home cleaning across Montgomery County — the same cleaner every visit, background-checked,
                with fall-prevention cleaning and text updates for the family. See if it's the right first step for your
                parent.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                  <Link to={SENIOR}>Explore Senior Home Cleaning <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/40 px-8 py-6 rounded-full text-base font-semibold" asChild>
                  <a href={PHONE_HREF}><Phone className="mr-2 h-4 w-4" /> Call {PHONE}</a>
                </Button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="cleaning-service-vs-caregiver-elderly" />
      <StickyCTA />
    </Layout>
  );
};

export default CleaningServiceVsCaregiver;
