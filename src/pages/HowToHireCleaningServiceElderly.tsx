import { Link } from "react-router-dom";
import { ArrowRight, Phone, Check, X } from "lucide-react";
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

const HERO_IMAGE = "/images/team/real-team-door.webp";
const URL = "https://capitalcleancare.com/resources/how-to-hire-cleaning-service-elderly-parents";
const SENIOR = "/senior-home-cleaning-montgomery-county-md";
const CAREGIVER_POST = "/resources/cleaning-service-vs-caregiver-elderly";
const SIGNS_POST = "/resources/signs-aging-parent-needs-help-housekeeping";
const FTC = "https://consumer.ftc.gov/articles/how-avoid-scam";
const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

// The 10 vetting questions — rendered as a visible numbered list AND emitted as an
// ItemList JSON-LD (see itemListSchema below). Keeping one source of truth so the
// visible content and the structured data can never drift apart.
const QUESTIONS: string[] = [
  "Are you licensed and insured, and can you email me a current certificate of insurance?",
  "Who exactly will enter my parent's home — your own employees, or subcontractors?",
  "Are your cleaners background-checked, and how often do you re-run those checks?",
  "Will the same cleaner (or same small team) come every visit?",
  "What happens if something is damaged or goes missing during a cleaning?",
  "Do you have experience cleaning for older adults or in age-friendly homes?",
  "Can you use fragrance-free or gentler products if my parent is sensitive?",
  "How do you handle a visit if my parent doesn't answer the door?",
  "Is your pricing a clear written flat rate, and what exactly does it include?",
  "Can I reach a real person — and get a heads-up or text update after each visit?",
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "10 Questions to Ask Before Hiring a Cleaning Service for an Elderly Parent",
  itemListElement: QUESTIONS.map((q, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: q,
  })),
};

const HowToHireCleaningServiceElderly = () => {
  const { seoHelmet } = useSEO({
    title: "How to Hire Cleaning Service for Elderly Parents: Checklist",
    description:
      "A practical checklist for vetting a house cleaning service for your aging parent — insurance, background checks, red flags, and questions to ask.",
    canonical: URL,
    preloadImage: HERO_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="hire cleaning service for elderly parents, vetting a cleaner for aging parent, questions to ask a cleaning company senior" />
        <script type="application/ld+json" id="itemlist-schema">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <ArticleSchema
        title="How to Hire a Trustworthy Cleaning Service for Your Elderly Parents (Checklist)"
        description="A practical, protective checklist for adult children vetting a house cleaning service for an aging parent — knowing what your parent needs, the non-negotiables to verify, 10 questions to ask, red flags to walk away from, and how to run a trial in Montgomery County, MD."
        url={URL}
        datePublished="2026-07-21"
        image={HERO_IMAGE}
      />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How to Hire a Cleaning Service for Elderly Parents", href: "/resources/how-to-hire-cleaning-service-elderly-parents" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Hiring a Cleaning Service for Elderly Parents" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A background-checked cleaning team member at the front door — vetting who you let into your aging parent's home">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Home Care Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">How to Hire a Trustworthy Cleaning Service for Your Elderly Parents (Checklist)</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">A practical, protective checklist for vetting who you let into their home</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Capital Clean Care · Montgomery County, MD · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href={PHONE_HREF}>Call {PHONE}</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-xl text-gray-700 leading-relaxed">

          <FadeInSection>
            <p className="mb-6">
              Hiring someone to clean your aging parent's home isn't really a shopping decision — it's a trust decision.
              You're deciding who gets a key, who walks through their rooms, and who's near them when you can't be. Price
              matters, but it's not the thing that should decide this. The right question isn't just "who's cheapest?" —
              it's "who can I trust in my parent's home?"
            </p>
            <p className="mb-8">
              If you've already weighed the options and know cleaning help is what your parent needs — and if you're still
              deciding between{" "}
              <Link to={CAREGIVER_POST} className="text-accent font-medium hover:underline">a cleaning service and a caregiver</Link>{" "}
              you may want to settle that first — this checklist walks you through vetting a company the right way, so you
              can hire with confidence instead of crossing your fingers.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineImage
              src="/images/team/eco-friendly-products.webp"
              alt="Non-toxic, plant-based cleaning products used in the home."
              caption="One key question when hiring: are the products safe for the household? It's worth asking before the first visit."
              single
            />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Before You Call: Know What Your Parent Needs</h2>
            <p className="mb-4">
              A little clarity before you start calling companies makes every conversation shorter and every quote more
              accurate. Take a few minutes to picture how this will actually work in your parent's home.
            </p>
            <p className="mb-4">
              Think through four things: <strong className="text-foreground">frequency</strong> (is this a weekly touch-up,
              a biweekly reset, or monthly?), <strong className="text-foreground">scope</strong> (whole house, or just the
              rooms that matter most — kitchen, bathrooms, bedroom?), <strong className="text-foreground">mobility</strong>{" "}
              (are there stairs, clutter, or areas the cleaner should take special care around?), and{" "}
              <strong className="text-foreground">presence</strong> (will your parent be home during cleanings, and how do
              they feel about someone new in the house?).
            </p>
            <p className="mb-8">
              If you're not fully sure how much help is needed yet, it can help to revisit{" "}
              <Link to={SIGNS_POST} className="text-accent font-medium hover:underline">the signs a parent is struggling to keep up at home</Link>{" "}
              before you commit to a schedule. Matching the visit to the real need — not overbuying, not underbuying — is
              the whole point of getting clear up front.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">The Non-Negotiables (Verify These First)</h2>
            <p className="mb-6">
              Some things are worth ruling a company out over on the spot. Before you even discuss scheduling or price,
              confirm all four of these — and ask for proof, not just reassurance. A reputable company hears these
              questions all the time and answers them in a minute; if a company gets defensive or vague about any of them,
              that's your answer. Think of this as the gate everything else has to pass through first.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                ["Licensed and insured — with proof.", "A real company carries liability insurance and will email you a current certificate without hesitation. This protects your parent's home and your family if anything goes wrong."],
                ["Background-checked employees, not anonymous subcontractors.", "You want to know exactly who is entering the home. Ask whether cleaners are the company's own vetted employees or gig subcontractors they've never met."],
                ["A consistent cleaner every visit.", "This matters enormously for seniors. The same familiar face each time builds trust, reduces anxiety, and means someone who actually knows your parent's home and routine."],
                ["Clear, written pricing.", "A trustworthy service gives you a flat, written rate and a plain list of what's included — no vague hourly guesses that balloon on the invoice."],
              ].map(([title, body]) => (
                <li key={title} className="flex gap-4 items-start bg-secondary/40 rounded-2xl p-5">
                  <span className="flex-shrink-0 mt-1 h-8 w-8 rounded-full bg-accent/15 flex items-center justify-center" aria-hidden="true">
                    <Check className="h-5 w-5 text-accent" />
                  </span>
                  <span className="text-lg"><strong className="text-foreground">{title}</strong> {body}</span>
                </li>
              ))}
            </ul>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">10 Questions to Ask Before Hiring</h2>
            <p className="mb-6">
              Once a company clears the non-negotiables, this is the conversation that separates a good fit from a
              headache. Ask these directly — a professional will welcome them, and how they answer tells you almost as
              much as what they say.
            </p>
            <ol className="space-y-4 mb-8 list-none counter-reset">
              {QUESTIONS.map((q, i) => (
                <li key={q} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 h-9 w-9 rounded-full bg-primary text-primary-foreground font-heading font-bold flex items-center justify-center text-base" aria-hidden="true">{i + 1}</span>
                  <span className="text-lg pt-1">{q}</span>
                </li>
              ))}
            </ol>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Red Flags to Walk Away From</h2>
            <p className="mb-6">
              Trust your instincts here. Older adults are a frequent target for scams and shady operators, so any of these
              is a good reason to end the conversation and keep looking:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Cash-only, with no receipts or written agreement.",
                "Refusing — or “forgetting” — to show proof of insurance.",
                "High-pressure tactics: “this price is only good today,” or pushing for a big upfront payment.",
                "A rotating cast of anonymous workers you're never introduced to.",
                "No verifiable reviews, no real address, and no straight answer about who they are.",
              ].map((flag) => (
                <li key={flag} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-1 h-7 w-7 rounded-full bg-red-100 flex items-center justify-center" aria-hidden="true">
                    <X className="h-4 w-4 text-red-600" />
                  </span>
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
            <p className="mb-8">
              None of this is paranoia — it's just prudence. The Federal Trade Commission's guidance on{" "}
              <a href={FTC} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">how to spot and avoid a scam</a>{" "}
              echoes the same signals: pressure, secrecy about identity, and demands for unusual payment are the classic
              warning signs. A legitimate cleaning company has nothing to hide and no reason to rush you.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">How to Do a Trial Run</h2>
            <p className="mb-4">
              You don't have to commit to a recurring contract to find out whether a company is right for your parent. The
              smartest first step is a single <strong className="text-foreground">one-time deep clean</strong>. It lets you
              see the quality, meet the actual cleaner, and watch how they treat your parent and their home — all before
              anything is locked in.
            </p>
            <p className="mb-4">
              Where you can, involve your parent in the walkthrough so it feels like their decision, not something happening
              to them. A parent who helped choose the service and met the cleaner is far more likely to feel comfortable
              with the arrangement — and far less likely to quietly cancel it after you've gone home.
            </p>
            <p className="mb-8">
              Then debrief afterward: Did the cleaner arrive on time and introduce themselves? Was your parent comfortable?
              Was the work thorough, and was anything handled carelessly? If the answers are good, moving to a regular
              schedule is an easy call — and you can set it up with{" "}
              <Link to={SENIOR} className="text-accent font-medium hover:underline">a background-checked senior cleaning team</Link>{" "}
              you've already met and trust, rather than a stranger you're hoping works out.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Hiring in Montgomery County, MD</h2>
            <p className="mb-4">
              Across Montgomery County — in Silver Spring, Rockville, Bethesda, and the surrounding communities — we talk
              with adult children every week who are quietly doing exactly what you're doing: vetting a service for a
              parent, often from a distance. Many are arranging help for parents in communities like Leisure World in Silver
              Spring or Riderwood in Silver Spring, where a dependable, familiar cleaner makes a real difference to daily
              life.
            </p>
            <p className="mb-8">
              Whether your parent is in their longtime home or a retirement community, the checklist is the same: verify
              the company, meet the person, start with a trial. When you're ready, it's easy to line up{" "}
              <Link to={SENIOR} className="text-accent font-medium hover:underline">senior cleaning services that meet every item on this checklist</Link>{" "}
              — local, insured, and consistent.
            </p>
          </FadeInSection>

          <FadeInSection>
            <p className="mb-8">
              Hiring cleaning help for an aging parent comes down to one thing: trust, verified. Do the homework once —
              check the insurance, ask the questions, run a trial — and you'll have something worth far more than a low
              price: real peace of mind, every single visit.
            </p>
          </FadeInSection>

          {/* ── Final CTA ── */}
          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">We Check Every Box on This List</h2>
              <p className="text-primary-foreground/85 mb-6 leading-relaxed max-w-xl mx-auto text-lg">
                Capital Clean Care is licensed, insured, and background-checked, with the same trusted cleaner every visit
                and clear written pricing — plus text updates so the family always knows the home's been cared for. Start
                with a one-time clean and see for yourself.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                  <Link to={SENIOR}>Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/40 px-8 py-6 rounded-full text-base font-semibold" asChild>
                  <a href={PHONE_HREF}><Phone className="mr-2 h-4 w-4" /> Call {PHONE}</a>
                </Button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="how-to-hire-cleaning-service-elderly-parents" />
      <StickyCTA />
    </Layout>
  );
};

export default HowToHireCleaningServiceElderly;
