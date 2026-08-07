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

const HERO_IMAGE = "/images/services/recurring-cleaning.webp";
const URL = "https://capitalcleancare.com/resources/house-cleaning-after-hospital-surgery-seniors";
const DEEP = "/services/deep-cleaning";
const PILLAR = "/resources/house-cleaning-for-seniors";
const FINANCIAL = "/resources/free-house-cleaning-for-seniors";
const CAREGIVER = "/resources/caregiver-guide-house-cleaning-aging-parent";
const FALL = "/resources/clean-home-fall-prevention-seniors";
const HUB_MD = "/senior-home-cleaning-montgomery-county-md";
const HUB_DC = "/senior-home-cleaning-washington-dc";
const HUB_VA = "/senior-home-cleaning-northern-virginia";
const QUOTE = "/#quote";
const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const faqs = [
  {
    q: "How is a recovery clean different from a regular cleaning?",
    a: "A recovery clean is usually a thorough deep clean with an extra focus on safety and comfort: sanitizing the bathroom and kitchen, clearing pathways so they're easy to move through with a walker or cane, fresh bed linens, and removing built-up dust. The goal is a home that's easy and safe to return to, not just tidy.",
  },
  {
    q: "Should I schedule the cleaning before my parent comes home?",
    a: "When you can, yes. Having the home cleaned and set up before discharge means your parent walks into a fresh, clutter-free space and can rest right away, instead of coming home to chores waiting for them. If that's not possible, a clean in the first day or two works well too.",
  },
  {
    q: "Do you sanitize and use products that are safe during recovery?",
    a: "Yes. We clean and sanitize high-touch areas like the bathroom and kitchen, and we use non-toxic, EPA Safer Choice, plant-based products — available fragrance-free on request, which many people prefer during recovery. Just let us know about any sensitivities.",
  },
  {
    q: "Can a family member or discharge planner arrange it remotely?",
    a: "Absolutely. A family member, caregiver, or discharge planner can set up and pay for the service remotely, and we coordinate directly with whoever is at the home. We send arrival and departure texts so everyone knows the home is ready.",
  },
  {
    q: "Does Medicare cover house cleaning after a hospital stay?",
    a: "Generally, no. Medicare may cover eligible home health services after a hospital stay when specific requirements are met, but routine house cleaning and homemaker help are usually not included. For the full picture on what may help pay, see our guide to free and low-cost cleaning help for seniors.",
  },
  {
    q: "How soon can you come after a discharge?",
    a: "We do our best to fit recovery cleans in quickly — often within a few days, and sometimes sooner. Let us know your parent's discharge date when you reach out and we'll work to line up a visit before or right after they come home.",
  },
];

const HouseCleaningAfterHospital = () => {
  const { seoHelmet } = useSEO({
    title: "House Cleaning After a Hospital Stay or Surgery",
    description:
      "Bringing a senior home after a hospital stay or surgery? A recovery-ready deep clean makes the home safer and easier during recovery. Serving MD, DC & VA.",
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
          content="house cleaning after hospital stay, cleaning after surgery for seniors, post-hospital cleaning elderly, recovery cleaning senior home"
        />
      </Helmet>

      <ArticleSchema
        title="House Cleaning After a Hospital Stay or Surgery: Helping a Senior Come Home to a Safe, Clean Space"
        description="A practical guide for families on arranging house cleaning after an older adult's hospital stay or surgery in Maryland, DC and Northern Virginia — why a clean home helps during recovery, what a recovery clean includes, when to schedule it, and how to arrange it."
        url={URL}
        datePublished="2026-08-07"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "House Cleaning After a Hospital Stay or Surgery", href: "/resources/house-cleaning-after-hospital-surgery-seniors" },
        ]}
      />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "House Cleaning After a Hospital Stay or Surgery" },
            ]}
          />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A bright, clean, comfortable home ready for an older adult returning after a hospital stay.">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Senior Home Care
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          House Cleaning After a Hospital Stay or Surgery: A Safe, Clean Space to Come Home To
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          Helping an older adult recover in a fresh, comfortable, easy-to-navigate home.
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
              Coming home after a hospital stay or surgery should feel like relief, not another hurdle. Yet an older adult
              often returns tired, moving carefully, and in no shape to catch up on housework — while the home may have sat
              unattended for days or weeks. Arranging <strong className="text-foreground">house cleaning after a hospital
              stay</strong> is one of the simplest, most caring things a family can do: it lets your parent walk into a
              fresh, safe, comfortable space and focus on getting better.
            </p>
            <p className="mb-8">
              This guide covers why a clean home matters during recovery, what a recovery clean should include, when to
              schedule it, and how to set it up — even from a distance. It's about the home environment, not medical care,
              so always follow your parent's care team on anything health-related.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA
              headline="Recovery coming up?"
              subtext="Tell us the discharge date and we'll work to have the home fresh and ready before your parent gets home. Serving Maryland, DC & Northern Virginia — no pressure, just help."
              ctaLabel="Get a Free Quote"
              ctaTo={QUOTE}
            />
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Why a Clean Home Matters During Recovery</h2>
            <p className="mb-4">
              Recovery is easier in a home that's easy to be in. When someone is moving slowly — maybe using a cane, a
              walker, or just being cautious — a clean, uncluttered home makes a real difference:
            </p>
            <ul className="space-y-3 mb-6 pl-1">
              {[
                "Clear floors and pathways mean fewer things to trip over while they're unsteady on their feet.",
                "A fresh, sanitized bathroom and kitchen are simply nicer — and safer — to use every day.",
                "Less clutter makes it easier to move around with a walker or to reach what they need.",
                "Not facing a pile of chores lets them rest and recover instead of pushing themselves too soon.",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-8">
              Keeping floors clear and dry is also part of{" "}
              <Link to={FALL} className="text-accent font-medium hover:underline">preventing falls</Link> — a real concern
              when someone is less steady than usual after a procedure.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineImage
              src="/images/services/bathroom-detail.webp"
              alt="A freshly cleaned, sanitized bathroom with a clear, dry floor."
              caption="Recovery cleans focus on the bathroom and kitchen — the rooms used most, where a clean, dry, clutter-free space matters most for safety."
              single
            />
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What a Recovery Clean Includes</h2>
            <p className="mb-4">
              A clean after a hospital stay usually goes beyond routine tidying. It's closer to a{" "}
              <Link to={DEEP} className="text-accent font-medium hover:underline">deep cleaning</Link>, with recovery in
              mind:
            </p>
            <ul className="space-y-3 mb-8 pl-1">
              {[
                "A thorough top-to-bottom clean to reset a home that's been unattended.",
                "Sanitizing high-touch surfaces and the bathroom and kitchen.",
                "Clearing and tidying walkways so the home is easy and safe to move through.",
                "Fresh bed linens and a comfortable, restful recovery space.",
                "Removing built-up dust and taking out the trash.",
                "Ongoing lighter maintenance visits through the recovery period, if you'd like.",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">When to Schedule It</h2>
            <p className="mb-8">
              If you can, book the clean <strong className="text-foreground">before the discharge date</strong> so your
              parent comes home to a home that's already fresh and ready. If a procedure is planned, schedule it in advance.
              When timing is tight, a clean in the first day or two after they get home still makes a big difference — and
              many families keep a lighter recurring visit going through the weeks of recovery, then adjust as their parent
              gets back on their feet.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Who Arranges It — and How to Pay</h2>
            <p className="mb-4">
              A family member or caregiver can set the whole thing up and pay for it remotely; sometimes a hospital
              discharge planner or social worker will suggest it as part of getting the home ready. If you're coordinating
              a parent's care from afar, our{" "}
              <Link to={CAREGIVER} className="text-accent font-medium hover:underline">family caregiver's guide to arranging cleaning</Link>{" "}
              walks through the whole process.
            </p>
            <p className="mb-8">
              Most recovery cleaning is private-pay, and it doesn't have to be costly — a one-time deep clean plus a couple
              of lighter follow-ups often covers the recovery window. If cost is a concern, our guide to{" "}
              <Link to={FINANCIAL} className="text-accent font-medium hover:underline">free and low-cost cleaning help for seniors</Link>{" "}
              covers Medicare, Medicaid, veterans' benefits, and other options, honestly. For the bigger picture on senior
              cleaning, see our overview of{" "}
              <Link to={PILLAR} className="text-accent font-medium hover:underline">house cleaning for seniors</Link>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Recovery-Ready Cleaning Across Maryland, DC and Virginia</h2>
            <p className="mb-8">
              We're a family-owned local company serving the whole DMV, and we're glad to work around a discharge date.
              See senior home cleaning in{" "}
              <Link to={HUB_MD} className="text-accent font-medium hover:underline">Montgomery County</Link>,{" "}
              <Link to={HUB_DC} className="text-accent font-medium hover:underline">Washington, DC</Link>, or{" "}
              <Link to={HUB_VA} className="text-accent font-medium hover:underline">Northern Virginia</Link> — background-checked,
              licensed, and insured, with fragrance-free products on request.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Come Home to a Fresh Start</h2>
            <p className="mb-6">
              A clean, safe, comfortable home is one of the kindest things you can arrange for a parent coming home to
              recover. It takes a worry off their plate and yours, and lets them do the one thing that matters most right
              now: rest and get better. When you're ready, we're here to help make the home recovery-ready.
            </p>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Ready to Get the Home Recovery-Ready?</h2>
              <p className="text-primary-foreground/85 mb-6 leading-relaxed max-w-xl mx-auto text-lg">
                Share the discharge date and we'll do our best to have the home fresh and ready in time. Call or request a
                free quote — no pressure at all.
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

      <RelatedPosts currentSlug="house-cleaning-after-hospital-surgery-seniors" />
      <StickyCTA />
    </Layout>
  );
};

export default HouseCleaningAfterHospital;
