import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import BlogInlineImage from "@/components/blog/BlogInlineImage";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import AuthorBio from "@/components/blog/AuthorBio";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/team/real-team-maria-fridge.webp";
const URL = "https://capitalcleancare.com/resources/senior-downsizing-decluttering-cleaning";
const DEEP = "/services/deep-cleaning";
const MOVE_OUT = "/resources/move-out-cleaning-checklist-maryland-tenants";
const MOVE_OUT_COST = "/resources/move-out-cleaning-cost-maryland";
const MOVE_IN = "/resources/move-in-cleaning-checklist";
const AGING = "/resources/aging-in-place-montgomery-county-cleaning";
const CAREGIVER = "/resources/caregiver-guide-house-cleaning-aging-parent";
const PILLAR = "/resources/house-cleaning-for-seniors";
const HUB_MD = "/senior-home-cleaning-montgomery-county-md";
const HUB_DC = "/senior-home-cleaning-washington-dc";
const HUB_VA = "/senior-home-cleaning-northern-virginia";
const QUOTE = "/#quote";
const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const faqs = [
  {
    q: "Do you clean the old home after a senior moves out?",
    a: "Yes — this is one of the most common ways we help with a downsize. Once the home is empty (or nearly so), we do a thorough move-out deep clean: floors, windows, appliances, cabinets, bathrooms, and baseboards, so the home is ready to sell, rent, or hand back in great shape.",
  },
  {
    q: "Can you clean the new, smaller home before they move in?",
    a: "Absolutely. A move-in clean before boxes arrive means your parent starts fresh in a spotless space — cabinets, closets, bathrooms, and floors all cleaned and ready. Many families book both the move-out and move-in cleans together.",
  },
  {
    q: "Do you help with sorting, packing, or deciding what to keep?",
    a: "That part is usually handled by the family or by a senior move manager who specializes in the sorting and logistics of a downsize. We focus on the cleaning — the old home, the new home, and light organizing where it helps. We're happy to coordinate around a move manager's schedule.",
  },
  {
    q: "Can a family member arrange all of this remotely?",
    a: "Yes. You can book and pay for the move-out and move-in cleans remotely and stay the main point of contact, and we coordinate access directly. We send arrival and departure texts so you always know each stage is done.",
  },
  {
    q: "What does a move-out cleaning cost?",
    a: "It depends on the size and condition of the home, since a move-out clean is a full deep clean. Our guide to move-out cleaning cost in Maryland breaks down the ranges, and we always give a clear, upfront quote before the visit — no surprises.",
  },
  {
    q: "Are your products safe to use around an older adult?",
    a: "Yes. We use non-toxic, plant-based, EPA Safer Choice products, available fragrance-free on request — gentle for older adults, and safe for the new home they're moving into. Just tell us about any sensitivities.",
  },
];

const SeniorDownsizingDecluttering = () => {
  const { seoHelmet } = useSEO({
    title: "Senior Downsizing & Decluttering: The Cleaning Side",
    description:
      "Downsizing or decluttering a parent's home? See how a move-out deep clean and a fresh move-in clean fit in, and how to handle it with care across MD, DC & VA.",
    canonical: URL,
    ogImage: HERO_IMAGE,
    preloadImage: HERO_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="senior downsizing cleaning, decluttering for seniors, move-out cleaning for seniors, downsizing elderly parent, senior move cleaning DMV"
        />
      </Helmet>

      <ArticleSchema
        title="Senior Downsizing and Decluttering: Handling the Cleaning Side of a Big Move"
        description="A practical guide for families on the cleaning side of downsizing or decluttering an older adult's home in Maryland, DC and Northern Virginia — the move-out deep clean, the fresh move-in clean, light decluttering for aging in place, and doing it all with dignity."
        url={URL}
        datePublished="2026-08-07"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Senior Downsizing & Decluttering: The Cleaning Side", href: "/resources/senior-downsizing-decluttering-cleaning" },
        ]}
      />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Senior Downsizing & Decluttering: The Cleaning Side" },
            ]}
          />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A Capital Clean Care team member deep cleaning a kitchen during a senior's downsizing move.">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Senior Home Care
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          Senior Downsizing and Decluttering: Handling the Cleaning Side of a Big Move
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          The move-out clean, the fresh start, and everything in between.
        </p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">
          By Rodrigo Reis, Owner · Serving MD, DC &amp; Northern Virginia · 7 min read
        </p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <Link to={QUOTE}>Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-xl text-gray-700 leading-relaxed">

          <FadeInSection>
            <p className="mb-6">
              Downsizing later in life is a big move — often out of a home held for decades, into somewhere smaller and
              easier to manage. It's emotional and physical work, and one piece families almost always underestimate is the
              cleaning: the old home needs a thorough clean to sell or hand back, and the new one deserves a fresh start.
              Handling the <strong className="text-foreground">cleaning side of a senior downsize</strong> is exactly where
              we help, so your family can focus on the harder, more personal parts.
            </p>
            <p className="mb-8">
              This guide walks through where cleaning fits into a downsize, how the move-out and move-in cleans work, light
              decluttering for those staying put, and how to do it all with dignity.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA
              headline="Planning a move?"
              subtext="We can handle the move-out deep clean, the move-in clean, or both — coordinated around your timeline across Maryland, DC & Northern Virginia. No pressure."
              ctaLabel="Get a Free Quote"
              ctaTo={QUOTE}
            />
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Where Cleaning Fits in a Downsize</h2>
            <p className="mb-4">
              A downsize really has two separate jobs. The first is the <strong className="text-foreground">sorting and
              logistics</strong> — deciding what to keep, donating and selling the rest, and moving it all. Many families
              do this themselves, and some hire a senior move manager who specializes in exactly this. The second job is the
              <strong className="text-foreground"> cleaning</strong> — and that's the part we take off your plate.
            </p>
            <p className="mb-8">
              Keeping those two jobs clear makes the whole thing less overwhelming. You (or a move manager) handle the
              belongings; we make sure both homes are spotless at the right moments. We're glad to coordinate around whoever
              is managing the move.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Cleaning the Home They're Leaving</h2>
            <p className="mb-4">
              Once the house is empty — or nearly there — it needs a proper move-out{" "}
              <Link to={DEEP} className="text-accent font-medium hover:underline">deep cleaning</Link> to be ready to sell,
              rent, or hand back: floors, windows, inside cabinets and appliances, bathrooms, and baseboards. An empty home
              shows every mark, so this is thorough, top-to-bottom work.
            </p>
            <p className="mb-8">
              Our{" "}
              <Link to={MOVE_OUT} className="text-accent font-medium hover:underline">move-out cleaning checklist</Link>{" "}
              shows exactly what a full move-out clean covers, and our guide to{" "}
              <Link to={MOVE_OUT_COST} className="text-accent font-medium hover:underline">move-out cleaning cost in Maryland</Link>{" "}
              lays out the typical ranges so there are no surprises.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineImage
              src="/images/services/kitchen-hero.webp"
              alt="A spotless, deep-cleaned kitchen ready for a home sale or a fresh start."
              caption="An empty home shows every mark — a move-out deep clean gets it ready to sell, rent, or hand back."
            />
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Cleaning and Setting Up the New Home</h2>
            <p className="mb-8">
              The new place should feel like a fresh, clean start — not someone else's leftover dust. A move-in clean
              before the boxes arrive means cabinets, closets, bathrooms, and floors are all cleaned and ready, so your
              parent can settle in comfortably from day one. Our{" "}
              <Link to={MOVE_IN} className="text-accent font-medium hover:underline">move-in cleaning checklist</Link>{" "}
              covers what to clean before the move. Many families book the move-out and move-in cleans together, so both
              stages are handled by one trusted team.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Decluttering Without a Full Move</h2>
            <p className="mb-8">
              Not every downsize means moving. Sometimes the goal is simply to clear out and lighten a home so a parent can
              keep living there safely — fewer trip hazards, clearer walkways, and less to manage. We offer gentle light
              organizing as part of our cleaning, always asking first and never moving belongings without consent. It's a
              simple way to support{" "}
              <Link to={AGING} className="text-accent font-medium hover:underline">aging in place</Link>, and it pairs well
              with a steady{" "}
              <Link to={PILLAR} className="text-accent font-medium hover:underline">senior cleaning routine</Link>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Doing It With Dignity</h2>
            <p className="mb-8">
              A downsize can be tender — a home is full of memories, and letting go is hard. The kindest approach keeps your
              parent in the driver's seat: let them set the pace, honor the keepsakes that matter, and take the pressure off
              wherever you can. Handing the cleaning to a calm, respectful team is one real way to lighten the load. If
              you're coordinating this for a parent, our{" "}
              <Link to={CAREGIVER} className="text-accent font-medium hover:underline">family caregiver's guide</Link>{" "}
              may help with the wider picture.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Downsizing Help Across Maryland, DC and Virginia</h2>
            <p className="mb-8">
              We're a family-owned local company serving the whole DMV, so we can clean both the old and new homes wherever
              they are. See senior home cleaning in{" "}
              <Link to={HUB_MD} className="text-accent font-medium hover:underline">Montgomery County</Link>,{" "}
              <Link to={HUB_DC} className="text-accent font-medium hover:underline">Washington, DC</Link>, or{" "}
              <Link to={HUB_VA} className="text-accent font-medium hover:underline">Northern Virginia</Link> —
              background-checked, licensed, and insured, with clear upfront pricing.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">One Less Thing to Carry</h2>
            <p className="mb-6">
              A downsize asks a lot of a family. Letting a trusted team handle the cleaning — the move-out clean, the fresh
              move-in, or a gentle declutter — takes one real weight off everyone's shoulders and helps a parent step into
              their next chapter with a clean, comfortable start. Whenever you're ready, we're here to help.
            </p>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Let's Make the Move Easier</h2>
              <p className="text-primary-foreground/85 mb-6 leading-relaxed max-w-xl mx-auto text-lg">
                Tell us about the move and we'll put together a clear, no-pressure quote for the old home, the new one, or
                both. Call or request a free quote any time.
              </p>
              <div className="flex flex-col items-center gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-10 py-6 rounded-full shadow-md w-full sm:w-auto" asChild>
                  <Link to={QUOTE}>Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 text-primary-foreground text-lg font-semibold hover:text-accent transition-colors">
                  <Phone className="h-5 w-5" /> {PHONE}
                </a>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <AuthorBio />
          </FadeInSection>

          <FadeInSection>
            <div className="mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details key={faq.q} className="group border border-border rounded-xl bg-white overflow-hidden">
                    <summary className="cursor-pointer list-none px-5 py-4 font-heading font-semibold text-foreground text-lg flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                      <span>{faq.q}</span>
                      <span className="text-accent transition-transform group-open:rotate-45 text-2xl leading-none" aria-hidden="true">+</span>
                    </summary>
                    <div className="px-5 pb-5 pt-0 text-lg text-gray-700 leading-relaxed">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="senior-downsizing-decluttering-cleaning" />
      <StickyCTA />
    </Layout>
  );
};

export default SeniorDownsizingDecluttering;
