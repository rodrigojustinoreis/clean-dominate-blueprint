import { Link } from "react-router-dom";
import { CheckCircle2, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, FAQSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/blog/red-flags-hero.webp";
const URL = "https://capitalcleancare.com/resources/red-flags-house-cleaning-service";

const reviewPatterns: string[] = [
  "No-shows and last-minute cancellations with no apology or refund",
  "Final charges well above the original quote",
  "Damaged items that were never repaired or reimbursed",
  "Owners who answer sales calls instantly and complaints never",
  "Visits so rushed that entire rooms were skipped",
];

const flagRows: [string, string][] = [
  ["No proof of insurance", "Certificate of insurance sent on request"],
  ["Cash only, no invoice", "Written quotes, invoices, card payments"],
  ["Vague estimate that grows on arrival", "Transparent flat-rate pricing in writing"],
  ["Long contracts and cancellation fees", "Flexible scheduling with no lock-in"],
  ["\"Trust us\" on staffing", "Documented background checks on every cleaner"],
  ["Different strangers each visit", "Consistent, trained teams"],
  ["No guarantee", "Written satisfaction guarantee with a re-clean policy"],
  ["Mystery chemicals", "EPA Safer Choice certified products"],
];

const faqs = [
  { q: "What are the biggest red flags when hiring a house cleaning service?", a: "No proof of insurance, cash-only payment, vague quotes that change on arrival, pressure to sign long contracts, no background checks, a rotating crew, and no satisfaction guarantee. Any single one deserves a follow-up question. Two or more together are a strong signal to keep shopping for a different cleaning service." },
  { q: "How do I verify that a cleaning company is legit?", a: "Ask for a certificate of insurance, confirm the business is registered with the state of Maryland, get a written itemized quote, and read the one-star cleaning company reviews for repeated complaint patterns. A legitimate house cleaner will provide all of this quickly and without any defensiveness." },
  { q: "Are cash-only cleaners always a scam?", a: "No. Plenty of honest solo cleaners prefer cash. But cash-only combined with no invoice, no insurance, and no written quote leaves you unprotected if anything is damaged, broken, or never cleaned at all. Many cleaning service scams rely on exactly that missing paper trail, so insist on records." },
  { q: "What should a written cleaning quote include?", a: "The exact rooms and tasks covered, the total price, whether supplies are included, the cancellation policy, and what the guarantee covers. In Maryland, expect roughly $150 to $400+ for a standard clean and $230 to $540+ for a deep clean, depending on your home's size and condition." },
];

const RedFlagsHouseCleaningService = () => {
  const { seoHelmet } = useSEO({
    title: "7 Red Flags When Hiring a House Cleaning Service",
    description:
      "7 red flags when hiring a house cleaning service: no insurance, vague quotes, no background checks & more. Spot a bad company before paying.",
    canonical: URL,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="red flags when hiring a house cleaning service, cleaning service scams, is this cleaning company legit, uninsured house cleaner risks, how to vet a cleaning service, cleaning company reviews" />
      </Helmet>
      <ArticleSchema
        title="7 Red Flags When Hiring a House Cleaning Service"
        description="The seven biggest red flags when hiring a house cleaning service: no insurance, cash-only payments, vague quotes, pressure contracts, no background checks, rotating crews, and no guarantee."
        url={URL}
        datePublished="2026-07-10"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />

      <BlogHero src={HERO_IMAGE} alt="Red flag beside a service contract, warning signs when hiring a house cleaning service">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">7 Red Flags When Hiring a House Cleaning Service</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">No insurance, vague quotes, no background checks: spot a bad cleaning company before you pay.</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Knowing the red flags when hiring a house cleaning service can save you hundreds of dollars and weeks of stress.
              The seven biggest red flags when hiring a house cleaning service are: no insurance, cash-only payments, vague
              quotes, pressure contracts, no background checks, rotating crews, and no guarantee. If you are asking "is this
              cleaning company legit" before booking in Montgomery County, Maryland, learning how to vet a cleaning service
              starts right here.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We have cleaned homes across Rockville, Bethesda, and Silver Spring for years, and almost every horror story a
              new client tells us started with a warning sign that was visible before the first visit. A bad cleaning company
              rarely hides its problems well. You just need to know where to look.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">The First Red Flags When Hiring a House Cleaning Service: No Insurance, No Paper Trail</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These first two warning signs share a theme: if something goes wrong, you have zero protection. They are also the
              easiest to check, so start here.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">Red Flag #1: No Proof of Insurance or License</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ask any company for a certificate of insurance before they set foot in your home. A legitimate cleaning company
              carries general liability insurance and workers' compensation, and it will email you proof the same day without
              getting defensive. Hesitation, excuses, or "we've never had a problem" are your cue to walk away.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The uninsured house cleaner risks are bigger than most homeowners realize. If an uninsured cleaner slips on your
              stairs, your homeowner's policy, and possibly your savings, can end up covering the injury. If a crew cracks your
              granite countertop, you have no claim to file. A Maryland business should also be registered with the state,
              which you can verify online in about two minutes.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">Red Flag #2: Cash-Only, No Paper Trail</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cash-only operations leave you with no invoice, no receipt, and no recourse. Many documented cleaning service
              scams follow the same script: a deposit is collected through a payment app, the appointment day arrives, and
              nobody shows up. The "company" turns out to be nothing but a phone number and a social media page.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A real business gives you a written quote, an invoice, a business address, and a way to pay that leaves a record.
              None of that is bureaucracy. It is the paper trail that protects you when anything goes sideways.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Red Flags #3-4: Vague Quotes That Change Later and Pressure to Sign Long Contracts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Of all the red flags when hiring a house cleaning service, these two cost Maryland homeowners the most money,
              because both are designed to work after you feel committed.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">Red Flag #3: Vague Quotes That Change Later</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The classic bait: a suspiciously low phone estimate, then a surprise "your home is bigger than we expected"
              surcharge once the crew is standing in your foyer and you are out of options. In Maryland, a standard clean
              typically runs $150 to $400+ and a deep clean runs $230 to $540+, depending on square footage and condition. A
              quote far below that range usually grows later.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Insist on a written, itemized quote before booking. Our breakdown of{" "}
              <Link to="/resources/house-cleaning-prices-maryland-2026" className="text-accent underline hover:no-underline">house cleaning prices in Maryland</Link>{" "}
              shows what fair local pricing looks like, and our guide to{" "}
              <Link to="/resources/what-is-included-in-a-standard-cleaning" className="text-accent underline hover:no-underline">what is included in a standard cleaning</Link>{" "}
              lists the tasks any quote should cover. Companies with transparent flat-rate pricing remove the guesswork entirely.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">Red Flag #4: Pressure to Sign Long Contracts</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A quality maid service earns your business one visit at a time. If a salesperson pushes a six or twelve month
              commitment before you have seen a single cleaning, ask yourself why they need to lock you in. Reputable{" "}
              <Link to="/services/recurring-cleaning" className="text-accent underline hover:no-underline">recurring cleaning</Link>{" "}
              plans let you pause, skip, or cancel without penalty fees, because they expect the work itself to keep you.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Red Flags #5-6: No Background Checks and a Different Crew Every Single Time</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The next two warning signs are about the people in your home, which matters more than any checklist of chores.
              That's doubly true when the home is a vulnerable relative's — here's{" "}
              <Link to="/resources/how-to-hire-cleaning-service-elderly-parents" className="text-accent underline hover:no-underline">what to check before hiring for a parent</Link>.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">Red Flag #5: No Background Checks</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You are handing strangers a key to your house. Ask directly: are your cleaners background-checked employees, or
              subcontractors you found last week? Vague answers matter more here than anywhere else. This question is also the
              fastest way to spot the gap we cover in our{" "}
              <Link to="/resources/cleaning-company-vs-independent-cleaner" className="text-accent underline hover:no-underline">cleaning company vs independent cleaner</Link>{" "}
              comparison: a real company vets its team so you do not have to.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">Red Flag #6: A Different Crew Every Single Time</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Rotating strangers through your home is both a security issue and a quality issue. Nobody learns that the office
              is off-limits or that the dog bolts through open doors. Constant crew changes usually signal high turnover, and
              high turnover usually signals a housekeeping company that underpays and under-trains its people.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you are comparing options around Gaithersburg, Germantown, or Potomac, this is a fair moment to mention how we
              handle it: Capital Clean Care background-checks every team member and sends consistent teams on a set schedule.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA headline="Vetting cleaning companies in Montgomery County?" subtext="Capital Clean Care background-checks every team member, sends consistent teams on a set schedule, and puts flat-rate pricing in writing. Getting a free quote takes about a minute." ctaLabel="Get My Free Flat-Rate Quote" ctaTo="/contact" />
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Red Flag #7: No Satisfaction Guarantee or Complaint Process</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Even excellent professional cleaners occasionally miss a spot. What separates a trustworthy company from a
              headache is what happens next. Ask before booking: if I am not happy, what exactly do you do? The right answer is
              a written satisfaction guarantee, usually a free re-clean of the missed areas within a day or two.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If a company has no guarantee and no clear complaint process, your only leverage after payment is a bad review,
              and that is a weak position to negotiate from. Our list of{" "}
              <Link to="/resources/questions-to-ask-before-hiring-house-cleaner" className="text-accent underline hover:no-underline">questions to ask before hiring a house cleaner</Link>{" "}
              includes the exact wording to use on that first call.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">What Do 1-Star Reviews Reveal About Cleaning Companies?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cleaning company reviews are most useful when you read them backwards. Skip the star average, open the one-star
              reviews, and hunt for patterns. On BBB and Yelp, the same complaint patterns show up against bad companies over
              and over:
            </p>
            <ul className="space-y-2.5 mb-6">
              {reviewPatterns.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> {i}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              One angry review means nothing; every business collects a few. Three reviews describing the same failure is data.
              Also read how the owner responds to criticism, because that is exactly how they will respond to you. Honest
              cleaning company reviews remain the fastest way to answer "is this cleaning company legit" before you hand over
              a key.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">What Does a Trustworthy Cleaning Company Look Like? The Green Flags</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Learning how to vet a cleaning service is mostly about flipping each red flag into its opposite. Here is the
              side-by-side:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left p-3 rounded-tl-xl">Red flag</th>
                    <th className="text-left p-3 rounded-tr-xl">Green flag</th>
                  </tr>
                </thead>
                <tbody>
                  {flagRows.map((r, i) => (
                    <tr key={r[0]} className={i % 2 ? "bg-secondary/40" : "bg-white"}>
                      <td className="p-3 text-muted-foreground">{r[0]}</td>
                      <td className="p-3 font-medium text-foreground">{r[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Insurance sits at the top for a reason: it flips the biggest uninsured house cleaner risks back onto the company,
              where they belong.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The last row deserves a word too. EPA Safer Choice is a federal program, not a marketing sticker. Every
              ingredient in a certified product has been reviewed by EPA scientists for safety to people, pets, and the
              environment while still meeting performance standards. A company that invests in{" "}
              <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">eco-friendly cleaning</Link>{" "}
              products tends to be careful about everything else as well.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Local ownership is one more green flag worth weighing. A family-owned company's reputation lives and dies in a
              single community, which changes how it treats complaints. We break down why in our{" "}
              <Link to="/resources/local-cleaning-company-vs-franchise" className="text-accent underline hover:no-underline">local cleaning company vs franchise</Link>{" "}
              comparison.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Run through these red flags when hiring a house cleaning service and most bad options eliminate themselves within
              a single phone call. Whether you need a weekly maid service or a one-time{" "}
              <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning</Link>,
              the vetting takes minutes and can save you hundreds.
            </p>
            <div className="bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 text-center mt-8">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">Rather skip the detective work entirely?</h3>
              <p className="text-primary-foreground/80 text-sm mb-5 max-w-md mx-auto">Capital Clean Care is a family-owned, licensed and insured cleaning company serving Rockville, Bethesda, Silver Spring, and all of Montgomery County, plus Washington DC and Northern Virginia. Every cleaner is background-checked, pricing is flat-rate and in writing, every visit is backed by a satisfaction guarantee, and we clean exclusively with EPA Safer Choice eco-friendly products that are safe for kids and pets.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="cta" size="lg" asChild>
                  <a href="/#quote">Get a Free Quote</a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent border-2 border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                  <a href="tel:+12407042551"><Phone className="h-4 w-4 mr-2" /> (240) 704-2551</a>
                </Button>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-accent" /> Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="red-flags-house-cleaning-service" />
      <StickyCTA />
    </Layout>
  );
};

export default RedFlagsHouseCleaningService;
