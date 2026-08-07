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

const HERO_IMAGE = "/images/team/real-team-door.webp";
const URL = "https://capitalcleancare.com/resources/caregiver-guide-house-cleaning-aging-parent";
const PILLAR = "/resources/house-cleaning-for-seniors";
const FINANCIAL = "/resources/free-house-cleaning-for-seniors";
const SIGNS = "/resources/signs-aging-parent-needs-help-housekeeping";
const VS_CAREGIVER = "/resources/cleaning-service-vs-caregiver-elderly";
const HIRE = "/resources/how-to-hire-cleaning-service-elderly-parents";
const AGING = "/resources/aging-in-place-montgomery-county-cleaning";
const HUB_MD = "/senior-home-cleaning-montgomery-county-md";
const HUB_DC = "/senior-home-cleaning-washington-dc";
const HUB_VA = "/senior-home-cleaning-northern-virginia";
const QUOTE = "/#quote";
const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const faqs = [
  {
    q: "Can I set up and pay for cleaning for a parent who lives elsewhere?",
    a: "Yes — this is one of the most common things we help families with. You can arrange and pay for the service remotely, choose yourself as the main point of contact, and we'll coordinate directly with your parent on the day. We send arrival and departure texts so you always know their home has been cared for, even from another state.",
  },
  {
    q: "How do I bring up hiring a cleaner without upsetting my parent?",
    a: "Lead with their independence, not their limitations. Framing it as 'this frees you up for the things you enjoy' or 'it takes the heavy jobs off your plate' usually lands better than anything that sounds like they can't cope. Involving them in the choice — the schedule, which rooms, which cleaner — keeps them in control, which is what most older adults care about most.",
  },
  {
    q: "What's the difference between a cleaning service and a caregiver?",
    a: "A cleaning service keeps the home itself in shape — cleaning, tidying, and light organizing. A caregiver provides hands-on personal care, like help with bathing, dressing, and medications. Many families find the home is the only piece that needs help. Our guide on cleaning service vs. caregiver walks through how to tell which your parent actually needs.",
  },
  {
    q: "How often should my parent's home be cleaned?",
    a: "Many older adults do well with a visit every two weeks, while busier homes prefer weekly and lighter-use homes manage with monthly. A common starting point is one deep clean to reset the home, then biweekly maintenance. The plan should fit your parent's home and budget — and it's easy to adjust as needs change.",
  },
  {
    q: "Is there any financial help to pay for it?",
    a: "Sometimes, depending on eligibility. Medicaid waivers, veterans' Aid & Attendance, long-term care insurance, and local Area Agency on Aging programs can help for those who qualify — though most fund enrolled care agencies rather than private cleaners. Our guide to free and low-cost cleaning help for seniors lays out the options honestly.",
  },
  {
    q: "Are your cleaners safe to send to a parent who lives alone?",
    a: "Yes. Every Capital Clean Care team member is background-checked, and we're licensed and insured. We keep the same familiar cleaner on your parent's schedule whenever possible, so it's a trusted face at the door — not a rotating cast of strangers.",
  },
];

const CaregiverGuideHouseCleaning = () => {
  const { seoHelmet } = useSEO({
    title: "Arranging House Cleaning for an Aging Parent",
    description:
      "A practical guide for adult children and caregivers on arranging house cleaning for an aging parent in the DMV — what to notice, how to choose, and how to pay.",
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
          content="cleaning help for elderly parent, caregiver house cleaning aging parent, arrange cleaning for elderly mother father, senior cleaning for adult children"
        />
      </Helmet>

      <ArticleSchema
        title="A Family Caregiver's Guide to Arranging House Cleaning for an Aging Parent"
        description="A warm, practical guide for adult children and family caregivers on arranging house cleaning for an aging parent in Maryland, DC and Northern Virginia — noticing when help is needed, deciding what kind of help, choosing a service you can trust, arranging it from a distance, paying for it, and having the conversation with dignity."
        url={URL}
        datePublished="2026-08-07"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "A Caregiver's Guide to Cleaning for an Aging Parent", href: "/resources/caregiver-guide-house-cleaning-aging-parent" },
        ]}
      />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "A Caregiver's Guide to Cleaning for an Aging Parent" },
            ]}
          />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A Capital Clean Care professional at the door of an older adult's home, ready to help.">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Senior Home Care
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          A Family Caregiver's Guide to Arranging House Cleaning for an Aging Parent
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          Everything you need to set it up with confidence — even from far away.
        </p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">
          By Rodrigo Reis, Owner · Serving MD, DC &amp; Northern Virginia · 8 min read
        </p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <Link to={QUOTE}>Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-xl text-gray-700 leading-relaxed">

          <FadeInSection>
            <p className="mb-6">
              If you are the one keeping an eye on Mom or Dad, arranging house cleaning is often one of the first and
              easiest ways to help — and it can take a real weight off your mind. But it comes with questions: How do I
              know they need it? What kind of help is it, exactly? How do I set it up if I live far away, and how do I
              bring it up without hurting their pride? This guide walks you through the whole thing, calmly, step by step.
            </p>
            <p className="mb-8">
              We help families across Maryland, DC, and Northern Virginia do exactly this every week, and much of it comes
              down to a handful of good decisions. Let's take them one at a time.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA
              headline="Want to talk it through first?"
              subtext="We're glad to answer a family caregiver's questions honestly, whether or not you're ready to book. No pressure — just a real conversation about your parent's home."
              ctaLabel="Get a Free Quote"
              ctaTo={QUOTE}
            />
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Step 1: Notice the Signs</h2>
            <p className="mb-8">
              The hardest part is often knowing when it's time. Housework tends to slip quietly — dishes pile up, the
              bathroom goes longer between cleanings, laundry stacks up in a way it never used to. None of these mean
              anything is seriously wrong; they usually just mean a few tasks have gotten physically hard. Our guide to{" "}
              <Link to={SIGNS} className="text-accent font-medium hover:underline">the early signs an aging parent needs help around the house</Link>{" "}
              walks through what to look for on your next visit, without jumping to conclusions.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Step 2: Decide What Kind of Help They Need</h2>
            <p className="mb-8">
              This is where families often overspend or overreach. A <strong className="text-foreground">cleaning
              service</strong> keeps the home in shape — cleaning, tidying, changing linens, light organizing. A{" "}
              <strong className="text-foreground">caregiver</strong> provides hands-on personal care like help with bathing,
              dressing, and medications. Very often, the home is the only piece that actually needs help, and a good clean
              is enough to make everything feel manageable again. If you're unsure, our comparison of{" "}
              <Link to={VS_CAREGIVER} className="text-accent font-medium hover:underline">a cleaning service versus a caregiver</Link>{" "}
              lays out how to tell which your parent needs — before you spend a penny.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineImage
              src="/images/services/living-area-detail.webp"
              alt="A bright, tidy living room kept comfortable and safe for an older adult."
              caption="For many families, a regularly cleaned home is the one piece of help that makes everything else feel manageable."
              single
            />
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Step 3: Choose a Service You Can Trust</h2>
            <p className="mb-8">
              You're sending someone into your parent's home, sometimes when you can't be there — so trust is everything.
              Look for a company that is background-checked, licensed, and insured, that uses products safe for older
              adults, and that can send the same familiar cleaner each visit. Our{" "}
              <Link to={HIRE} className="text-accent font-medium hover:underline">10 questions to ask before hiring a cleaning service for a senior's home</Link>{" "}
              gives you a simple checklist to vet any company, plus the red flags to walk away from.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Step 4: Set It Up From Wherever You Are</h2>
            <p className="mb-4">
              You do not have to live nearby — or be there on cleaning day — to arrange this well. A good service makes
              remote coordination easy:
            </p>
            <ul className="space-y-3 mb-6 pl-1">
              {[
                "You book, pay, and stay the main point of contact — the details go through you.",
                "The team coordinates directly with your parent (and their building, if it's a condo) on the day.",
                "Arrival and departure texts let you know their home was cared for, even from another state.",
                "The same familiar cleaner comes each visit, so it's a trusted face — not a stranger.",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-8">
              For a sense of what a first visit looks like and how to prepare the home, see our overview of{" "}
              <Link to={PILLAR} className="text-accent font-medium hover:underline">house cleaning for seniors</Link>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Step 5: Figure Out How to Pay for It</h2>
            <p className="mb-8">
              Most families pay privately, and it does not have to be expensive — recurring visits cost less per clean than
              one-time service, and siblings often split the cost as a shared way to support a parent. Some families also
              tap veterans' benefits or long-term care insurance. Before you assume you're on your own, it's worth checking
              the programs in our guide to{" "}
              <Link to={FINANCIAL} className="text-accent font-medium hover:underline">free and low-cost cleaning help for seniors</Link>{" "}
              — it covers Medicare, Medicaid waivers, veterans' benefits, and local programs, honestly.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Step 6: Have the Conversation With Care</h2>
            <p className="mb-4">
              This is the part families worry about most. The key is to protect your parent's dignity and keep them in
              control. A few things that help:
            </p>
            <ul className="space-y-3 mb-6 pl-1">
              {[
                "Lead with independence: 'this frees you up for the things you enjoy,' not 'you can't manage anymore.'",
                "Make it their decision — the schedule, the rooms, the cleaner. Offer options, not ultimatums.",
                "Frame it as normal: plenty of people their age have help with the heavy jobs; it's smart, not a failure.",
                "Start small. One deep clean or a single visit is easier to say yes to than a permanent commitment.",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-8">
              Keeping the home clean is also one of the simplest ways to support a parent's wish to stay put — more on that
              in our guide to{" "}
              <Link to={AGING} className="text-accent font-medium hover:underline">aging in place</Link>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">If Your Parent Lives in the DMV</h2>
            <p className="mb-8">
              We're a family-owned local company serving the whole region, so wherever your parent lives, there's a local
              team that knows the area. See senior home cleaning in{" "}
              <Link to={HUB_MD} className="text-accent font-medium hover:underline">Montgomery County</Link>,{" "}
              <Link to={HUB_DC} className="text-accent font-medium hover:underline">Washington, DC</Link>, or{" "}
              <Link to={HUB_VA} className="text-accent font-medium hover:underline">Northern Virginia</Link> —
              each with the local communities, buildings, and resources we work with every week.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">You're Doing a Good Thing</h2>
            <p className="mb-6">
              Looking out for a parent's home is an act of love, and arranging cleaning is one of the kindest, most
              practical steps you can take. It keeps their home safe and comfortable, protects their independence, and
              gives you real peace of mind. Take it one decision at a time — and lean on us whenever you're ready.
            </p>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Here to Help — No Pressure</h2>
              <p className="text-primary-foreground/85 mb-6 leading-relaxed max-w-xl mx-auto text-lg">
                Request a free quote or call us, and we'll walk you through the options for your parent's home. We're happy
                to talk with you, your parent, or both.
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

      <RelatedPosts currentSlug="caregiver-guide-house-cleaning-aging-parent" />
      <StickyCTA />
    </Layout>
  );
};

export default CaregiverGuideHouseCleaning;
