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

const HERO_IMAGE = "/images/services/living-area-hero.webp";
const URL = "https://capitalcleancare.com/resources/free-house-cleaning-for-seniors";
const PILLAR = "/resources/house-cleaning-for-seniors";
const SENIOR = "/senior-home-cleaning-montgomery-county-md";
const PRICING = "/pricing";
const QUOTE = "/#quote";
// Official government sources (verify-with-source pattern)
const MEDICARE = "https://www.medicare.gov/coverage/home-health-services";
const MD_AGING = "https://aging.maryland.gov/";
const DC_DACL = "https://dacl.dc.gov/";
const VA_CCC_PLUS = "https://www.dmas.virginia.gov/for-members/benefits-and-services/waivers/ccc-plus-waiver/";
const VA_AID = "https://www.va.gov/pension/aid-attendance-housebound/";
const ELDERCARE = "https://eldercare.acl.gov/";
const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const faqs = [
  {
    q: "Does Medicare cover house cleaning for seniors?",
    a: "Generally no. Original Medicare does not pay for homemaker services like house cleaning when that is the only help you need. It may cover certain home health services (such as part-time skilled nursing or therapy) when a doctor certifies the need and specific requirements are met — but routine cleaning is not covered on its own. Always confirm with Medicare and, if you have one, your Medicare Advantage plan.",
  },
  {
    q: "Does Medicaid pay for house cleaning for the elderly?",
    a: "Sometimes, for those who qualify. Medicaid home- and community-based waivers in Maryland, DC, and Virginia can cover homemaker or personal-care services for low-income seniors who meet income and level-of-care rules. Important: these programs usually fund Medicaid-enrolled home-care agencies, not independent house-cleaning companies, and eligibility must be approved first. Contact your state program to see whether you qualify.",
  },
  {
    q: "Does Humana or Medicare Advantage cover house cleaning?",
    a: "It depends entirely on the plan. Some Medicare Advantage plans (including certain Humana plans) offer extra supplemental benefits that vary year to year and by location. A few have added limited in-home support benefits, but coverage is never guaranteed. Check your specific plan's benefits documents or call the number on your member card.",
  },
  {
    q: "How can I get free or low-cost house cleaning for an elderly parent?",
    a: "Start with your local Area Agency on Aging (use the Eldercare Locator), which can point you to chore or homemaker programs, sliding-scale help, and non-profits in your county. Then check Medicaid waiver eligibility, veterans' benefits if applicable, and local senior 'villages.' If none apply, an affordable private option — like a recurring plan shared among family members — is often the practical answer.",
  },
  {
    q: "Can veterans get help paying for house cleaning?",
    a: "Possibly. The VA's Aid & Attendance benefit provides additional monthly pension funds to eligible wartime veterans and surviving spouses who need help with daily activities. That money can be used to pay for in-home help, which may include homemaker services. Eligibility rules apply — check the official VA Aid & Attendance page or speak with a VA-accredited representative.",
  },
  {
    q: "Does Capital Clean Care accept Medicare, Medicaid, or insurance?",
    a: "Capital Clean Care is a private-pay cleaning service, so we bill you or your family directly with clear, upfront pricing. We are not a Medicaid or Medicare provider. That said, some families use funds from VA Aid & Attendance or reimbursement from a long-term care insurance policy to pay for our visits — check your plan's rules first.",
  },
];

const FreeHouseCleaningForSeniors = () => {
  const { seoHelmet } = useSEO({
    title: "Free & Low-Cost House Cleaning for Seniors",
    description:
      "An honest guide to free and low-cost house cleaning help for seniors in Maryland, DC & Virginia — Medicare, Medicaid waivers, veterans' benefits, and more.",
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
          content="free cleaning services for elderly, low cost cleaning services for seniors near me, free house cleaning for seniors, does medicare cover house cleaning for seniors, medicaid house cleaning elderly"
        />
      </Helmet>

      <ArticleSchema
        title="Free and Low-Cost House Cleaning for Seniors: What Actually Helps in the DMV"
        description="A clear, honest guide to free and low-cost house cleaning help for older adults in Maryland, DC and Northern Virginia — what Medicare and Medicaid do and don't cover, state waivers, veterans' benefits, Area Agencies on Aging, senior villages, long-term care insurance, and affordable private options."
        url={URL}
        datePublished="2026-08-06"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Free & Low-Cost House Cleaning for Seniors", href: "/resources/free-house-cleaning-for-seniors" },
        ]}
      />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Free & Low-Cost House Cleaning for Seniors" },
            ]}
          />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A bright, comfortable living room in a well-kept home in the Washington DC area.">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Senior Home Care
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          Free and Low-Cost House Cleaning for Seniors: What Actually Helps
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          An honest map of the programs, benefits, and affordable options in the DMV.
        </p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">
          By Rodrigo Reis, Owner · Serving MD, DC &amp; Northern Virginia · 9 min read
        </p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <Link to={QUOTE}>Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-xl text-gray-700 leading-relaxed">

          {/* ── Intro ── */}
          <FadeInSection>
            <p className="mb-6">
              If you have searched for <strong className="text-foreground">free house cleaning for seniors</strong> or
              free cleaning services for the elderly, you are asking a fair and common question — housework gets harder
              with age, and cleaning help can feel like a luxury. The honest answer is that some real help exists, but it
              comes with rules, and much of it is not what people expect. This guide lays out the options clearly, without
              hype.
            </p>
            <p className="mb-8">
              We will walk through what Medicare and Medicaid do and do not cover, state waivers in Maryland, DC, and
              Virginia, veterans' benefits, local programs and senior "villages," long-term care insurance, and what to do
              if you do not qualify for any of it. Our goal is to help you make a good decision — not to sell you something.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA
              headline="Have a question about cleaning help?"
              subtext="Capital Clean Care serves Maryland, DC & Northern Virginia. We're happy to talk through your options honestly, whether or not we end up being the right fit. No pressure."
              ctaLabel="Get a Free Quote"
              ctaTo={QUOTE}
            />
          </FadeInSection>

          {/* ── Set expectations ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              First, What "Free" Usually Means for Senior Cleaning
            </h2>
            <p className="mb-4">
              Here is the part most articles skip. Almost all public help for cleaning is tied to <em>personal care</em> —
              help with bathing, dressing, meals, and light housekeeping bundled together — for people who qualify medically
              and financially. It is delivered by approved home-care agencies, not by hiring a private house cleaner and
              sending someone the bill.
            </p>
            <p className="mb-8">
              So if your parent is generally independent and simply needs the house kept clean, most "free" programs will
              not apply — but it is still worth checking, because the ones that do can be very valuable. Let's go through
              them honestly, one at a time.
            </p>
          </FadeInSection>

          {/* ── Medicare ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Does Medicare Cover House Cleaning?
            </h2>
            <p className="mb-4">
              Generally, no. Original Medicare does not pay for homemaker services — everyday help like cleaning, laundry,
              and shopping — when that is the only support you need. It can cover certain <em>home health services</em>,
              such as part-time skilled nursing or therapy, when a doctor certifies the need and you meet the requirements,
              but routine house cleaning is not covered on its own.
            </p>
            <p className="mb-8">
              Some <strong className="text-foreground">Medicare Advantage</strong> plans (including certain Humana plans)
              add extra supplemental benefits that vary by plan and year — a few have offered limited in-home support — so
              check your specific plan. For the official details, see Medicare's page on{" "}
              <a href={MEDICARE} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">
                home health services at Medicare.gov
              </a>.
            </p>
          </FadeInSection>

          {/* ── Medicaid & state waivers ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Medicaid and State Waivers in Maryland, DC &amp; Virginia
            </h2>
            <p className="mb-4">
              For low-income seniors who qualify, Medicaid home- and community-based waivers can cover homemaker and
              personal-care services. These programs help people stay in their own homes instead of moving to a facility,
              and light housekeeping is often part of the care plan. Eligibility depends on income, assets, and a required
              level of care — and services are provided through Medicaid-enrolled agencies.
            </p>
            <ul className="space-y-3 mb-6 pl-1">
              <li className="flex gap-3 items-start text-lg">
                <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                <span>
                  <strong className="text-foreground">Maryland</strong> — the Community Options waiver and Community First
                  Choice can include homemaker and personal-care help. Start with the{" "}
                  <a href={MD_AGING} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">Maryland Department of Aging</a>{" "}
                  (Maryland Access Point) or your county's Area Agency on Aging.
                </span>
              </li>
              <li className="flex gap-3 items-start text-lg">
                <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                <span>
                  <strong className="text-foreground">Washington, DC</strong> — the DC Department of Aging and Community
                  Living connects residents to Medicaid waiver and in-home support programs. See{" "}
                  <a href={DC_DACL} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">dacl.dc.gov</a>.
                </span>
              </li>
              <li className="flex gap-3 items-start text-lg">
                <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                <span>
                  <strong className="text-foreground">Virginia</strong> — the CCC Plus waiver covers personal care and some
                  light housekeeping for eligible members. See the{" "}
                  <a href={VA_CCC_PLUS} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">Virginia CCC Plus waiver (DMAS)</a>.
                </span>
              </li>
            </ul>
            <p className="mb-8">
              One honest note: these waivers fund enrolled home-care agencies, not private house-cleaning companies, and
              you must be approved first. If your family member qualifies, it is well worth pursuing.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineImage
              src="/images/team/eco-friendly-products.webp"
              alt="Non-toxic, plant-based cleaning products used in the home."
              caption="Whether help is publicly funded or private-pay, the products and care should always be safe for an older adult's home."
              single
            />
          </FadeInSection>

          {/* ── Veterans ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Veterans' Benefits: Aid &amp; Attendance
            </h2>
            <p className="mb-8">
              If your family member is a wartime veteran or a surviving spouse, the VA's{" "}
              <a href={VA_AID} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">Aid &amp; Attendance</a>{" "}
              benefit adds monthly funds to an eligible pension for those who need help with daily activities. That money
              can be used to pay for in-home help, which may include homemaker services like cleaning. Eligibility and
              service history rules apply, so check the official VA page or talk with a VA-accredited representative before
              counting on it.
            </p>
          </FadeInSection>

          {/* ── AAA & local ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Area Agencies on Aging and Local Programs
            </h2>
            <p className="mb-8">
              Every part of the DMV has an Area Agency on Aging — your best single starting point. They know the local
              chore and homemaker programs, sliding-scale options, and non-profits, and they can screen your family member
              for what they qualify for. The national{" "}
              <a href={ELDERCARE} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">Eldercare Locator</a>{" "}
              will connect you to the right local office in Montgomery County, DC, Arlington, Alexandria, Fairfax, or
              wherever your parent lives. Ten minutes on the phone with them often saves weeks of searching.
            </p>
          </FadeInSection>

          {/* ── Non-profits & villages ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Non-Profits, Senior "Villages," and Community Help
            </h2>
            <p className="mb-8">
              The DMV has a strong network of senior "villages" — neighbor-run, membership non-profits that help older
              adults stay in their homes. Groups like Capitol Hill Village in DC, Arlington Neighborhood Village in
              Virginia, and many village communities across Montgomery County keep vetted lists of trusted local help and
              sometimes offer volunteer support. Faith communities, senior centers, and local charities can also help in
              certain situations. These are worth a call — they are built exactly for this.
            </p>
          </FadeInSection>

          {/* ── LTC insurance ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Long-Term Care Insurance
            </h2>
            <p className="mb-8">
              If your family member has a long-term care insurance policy, read it carefully — some policies reimburse
              homemaker or personal-care services, including help around the house, once certain conditions are met. Every
              policy is different, so confirm what yours covers and how to submit for reimbursement before you assume
              anything.
            </p>
          </FadeInSection>

          {/* ── If you don't qualify → private-pay ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              If You Don't Qualify: Affordable Private Cleaning
            </h2>
            <p className="mb-4">
              Here is the reality for many families: the resident is fairly independent, does not meet Medicaid or VA
              rules, and simply wants the house kept clean. In that case, a private cleaning service is usually the
              practical answer — and it does not have to be expensive.
            </p>
            <p className="mb-4">A few ways to keep private cleaning affordable:</p>
            <ul className="space-y-3 mb-6 pl-1">
              {[
                "Choose recurring visits — every two weeks usually costs less per clean than one-time service and keeps the home from getting overwhelming.",
                "Focus the visit on the rooms that matter most, like the kitchen and bathrooms.",
                "Split the cost among siblings or family members as a shared way to support a parent.",
                "Start with one deep clean to reset the home, then keep it up with lighter, cheaper maintenance visits.",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-8">
              Capital Clean Care is a private-pay service with clear, upfront pricing — you can review our{" "}
              <Link to={PRICING} className="text-accent font-medium hover:underline">cleaning prices</Link>{" "}
              and get a firm quote before any visit. Some families also use VA Aid &amp; Attendance funds or long-term care
              insurance reimbursement to pay for a private service like ours. For the full picture on what senior cleaning
              involves, see our guide to{" "}
              <Link to={PILLAR} className="text-accent font-medium hover:underline">house cleaning for seniors</Link>.
            </p>
          </FadeInSection>

          {/* ── Local CCC ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Senior-Friendly Cleaning Across Maryland, DC and Virginia
            </h2>
            <p className="mb-4">
              Capital Clean Care is a family-owned local company that has served the DMV for more than ten years — Maryland,
              Washington DC, and Northern Virginia, including Bethesda, Rockville, Silver Spring, Arlington, and Alexandria.
              When private cleaning is the right call, we make it safe, respectful, and dependable for older adults.
            </p>
            <ul className="space-y-3 mb-8 pl-1">
              {[
                "Background-checked professionals",
                "Licensed and insured service",
                "Non-toxic, EPA Safer Choice-certified products",
                "Flexible one-time and recurring options",
                "24-hour satisfaction guarantee",
                "Communication with seniors, relatives, and caregivers",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeInSection>

          {/* ── Conclusion + CTA ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              A Clear Next Step
            </h2>
            <p className="mb-6">
              Finding help with house cleaning for seniors does not have to be confusing. Start with your local Area Agency
              on Aging and check the programs above — if your family member qualifies, pursue them. If they don't, an
              affordable, dependable private plan keeps a home clean, safe, and comfortable without the stress. Either way,
              you are doing a good thing by looking into it.
            </p>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Let's Talk It Through</h2>
              <p className="text-primary-foreground/85 mb-6 leading-relaxed max-w-xl mx-auto text-lg">
                Call or request a free quote and we'll give you an honest read on your options — no hard sell, and no
                pressure to book.
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

          {/* ── FAQ ── */}
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
              <p className="mt-6 text-base text-muted-foreground italic">
                This article is general information, not financial, legal, or medical advice. Program rules change and
                eligibility varies — always confirm details with the official source or a qualified advisor.
              </p>
            </div>
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="free-house-cleaning-for-seniors" />
      <StickyCTA />
    </Layout>
  );
};

export default FreeHouseCleaningForSeniors;
