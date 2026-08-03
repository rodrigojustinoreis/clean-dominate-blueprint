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

const HERO_IMAGE = "/images/blog/hiring-questions-hero.webp";
const URL = "https://capitalcleancare.com/resources/questions-to-ask-before-hiring-house-cleaner";

const checklist: string[] = [
  "Are you licensed, bonded, and insured, with certificates available?",
  "Do you background check every cleaner?",
  "Will I know exactly who is coming to my home?",
  "Are your cleaners employees or subcontractors?",
  "How do you handle keys, codes, and alarms?",
  "Is the quote a written flat rate?",
  "What can change the price after booking?",
  "Do you offer weekly, biweekly, or monthly discounts?",
  "What is your cancellation policy?",
  "Is tipping expected?",
  "What is included, and what costs extra?",
  "Do I need a deep clean for the first visit?",
  "How often do you recommend service for my household?",
  "Do you offer move-in/move-out cleaning?",
  "What does your satisfaction guarantee cover?",
  "Who brings products and equipment?",
  "Are your products EPA Safer Choice certified and kid and pet-safe?",
  "Can you accommodate allergies or fragrance sensitivities?",
  "Do you sanitize equipment between homes?",
  "Are you locally owned or a franchise?",
];

const faqs = [
  { q: "What are the most important questions to ask before hiring a house cleaner?", a: "Start with four: Are you licensed, bonded, and insured? Do you background check every cleaner? Is the quote a written flat rate? What does your satisfaction guarantee cover? A company that answers all four clearly, in writing, has already outperformed most of the market before anyone touches a mop." },
  { q: "What should I know when hiring a house cleaner for the first time?", a: "Focus on logistics: whether the initial visit requires a deep clean, who brings supplies, how your keys are handled, and what the guarantee covers. Expect that first visit to cost more than recurring ones, since it usually involves deep cleaning to establish a baseline your regular visits maintain." },
  { q: "How do I verify a company is licensed, bonded, and insured?", a: "Ask for a certificate of insurance naming the company, then check the coverage dates and limits. Maryland businesses can also be confirmed through the state's public business registry. A legitimate cleaning company sends documentation quickly; reluctance to share proof is one of the strongest red flags there is." },
  { q: "How much does a house cleaner cost in Montgomery County, MD?", a: "In Montgomery County, a standard clean typically runs $150 to $400+ and a deep clean $230 to $540+, depending on square footage and condition. Recurring service earns discounts of up to 25% weekly, 15% biweekly, or 5% monthly, which is why most local homeowners land on a schedule." },
];

const QuestionsToAskBeforeHiringHouseCleaner = () => {
  const { seoHelmet } = useSEO({
    title: "20 Questions to Ask Before Hiring a House Cleaner (2026 Checklist)",
    description:
      "The 20 questions to ask before hiring a house cleaner: insurance, background checks, pricing & guarantees. Free vetting checklist.",
    canonical: URL,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="questions to ask before hiring a house cleaner, hiring a house cleaner for the first time, what to ask a cleaning service, licensed bonded and insured cleaning, how to choose a cleaning company, house cleaner vetting checklist" />
      </Helmet>
      <ArticleSchema
        title="20 Questions to Ask Before Hiring a House Cleaner (2026 Checklist)"
        description="The complete 20-question vetting checklist for hiring a house cleaner: trust and safety, insurance, pricing, what the service includes, and the products used in your home."
        url={URL}
        datePublished="2026-07-10"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />

      <BlogHero src={HERO_IMAGE} alt="Homeowner reviewing a checklist of questions to ask before hiring a house cleaner">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">20 Questions to Ask Before Hiring a House Cleaner (2026 Checklist)</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">The full vetting checklist: insurance, background checks, pricing, and guarantees</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The essential questions to ask before hiring a house cleaner fall into five buckets: trust and safety, insurance,
              pricing, what the service includes, and the products used in your home. If you are hiring a house cleaner for the
              first time in Montgomery County, Maryland, knowing what to ask a cleaning service upfront is the difference
              between a great long-term fit and an expensive lesson. Below are all 20 questions to ask before hiring a house
              cleaner, with the answers you should expect.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Print this, screenshot it, or copy the full house cleaner vetting checklist at the bottom. Ten minutes of
              questions before you book saves months of frustration after, whether you live in Rockville, Bethesda, or Silver
              Spring.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Why Knowing the Questions to Ask Before Hiring a House Cleaner Saves You Money (and Headaches)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most cleaning horror stories start the same way: someone hired on price alone. But you are not buying a product
              off a shelf. You are inviting a stranger into your home, around your kids, your pets, and your valuables, often
              while you are at work.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The money side is not trivial either. In Maryland, a standard clean typically runs $150 to $400+ and a deep clean
              $230 to $540+, as we detail in our guide to{" "}
              <Link to="/resources/house-cleaning-prices-maryland-2026" className="text-accent underline hover:no-underline">house cleaning prices in Maryland</Link>.
              A bad hire at those prices is a costly do-over.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Good questions do two jobs at once. They tell you how to choose a cleaning company, and they surface the{" "}
              <Link to="/resources/red-flags-house-cleaning-service" className="text-accent underline hover:no-underline">warning signs of a bad house cleaning service</Link>{" "}
              before anything is booked. Vague answers, dodged questions, and nothing in writing are answers too.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Trust & Safety Questions (Background Checks, Insurance, Who Enters Your Home)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These first five questions to ask before hiring a house cleaner are the non-negotiables. Licensed, bonded, and
              insured cleaning is the baseline, and it only counts if they can prove it.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>1. Are you licensed, bonded, and insured?</strong> A licensed, bonded, and insured cleaning company
              protects you three ways: general liability covers damage to your home, workers' compensation covers a cleaner
              injured on your property, and a bond covers theft claims. Ask for certificates, not verbal assurances.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>2. Do you run background checks on every cleaner?</strong> Not just team leads. Every person who will
              hold a key to your home should be background checked, and the company should say so without hesitation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>3. Will I know who is coming to my home?</strong> The right answer names names: a consistent team,
              introduced to you, not whoever the route map spits out that week.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>4. Are your cleaners employees or subcontractors?</strong> Employees are trained, supervised, and covered
              by the company's insurance. Subcontractors may not be. This is the same accountability gap we cover in our{" "}
              <Link to="/resources/cleaning-company-vs-independent-cleaner" className="text-accent underline hover:no-underline">cleaning company vs independent cleaner</Link>{" "}
              comparison.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>5. How do you handle keys, codes, and alarms?</strong> Listen for a real procedure: coded lockboxes,
              logged key handling, and a named person responsible. "Don't worry about it" is a worry.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Pricing Questions (Written Quotes, What Changes the Price, Cancellation)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>6. Is the quote a flat rate, and can I get it in writing?</strong> Flat-rate pricing means the number you
              approve is the number you pay. Hourly quotes can stretch, and verbal quotes evaporate.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>7. What can change the price after booking?</strong> Fair answers exist: heavy pet hair, a home in
              rougher condition than described, added rooms. The point is hearing them before cleaning day, not on the invoice.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>8. Do you offer recurring discounts?</strong> In Maryland, weekly service commonly earns up to 25% off,
              biweekly around 15%, and monthly around 5%. If you plan to stay on a schedule, a{" "}
              <Link to="/services/recurring-cleaning" className="text-accent underline hover:no-underline">recurring cleaning service</Link>{" "}
              discount changes the math significantly.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>9. What is your cancellation and rescheduling policy?</strong> Life happens. You want a clear window, a
              reasonable fee, and no lock-in contract for residential service.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>10. Is tipping expected on top of the price?</strong> Policies vary, and it is fine to ask directly. Our
              guide on{" "}
              <Link to="/resources/how-much-tip-house-cleaner" className="text-accent underline hover:no-underline">how much to tip a house cleaner</Link>{" "}
              covers the norms so nobody is guessing at the door.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA headline="Question 6, answered the right way" subtext="At Capital Clean Care, you get a transparent flat rate before we ever step inside a home in Gaithersburg or Potomac. Seeing one for your own house takes about a minute." ctaLabel="Get My Flat-Rate Quote" ctaTo="/contact" />
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Service Questions: What's Included, and Do You Send the Same Team Every Visit?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>11. What exactly is included, and what costs extra?</strong> Any professional cleaning company should
              hand you a task list. Compare it against our breakdown of{" "}
              <Link to="/resources/what-is-included-in-a-standard-cleaning" className="text-accent underline hover:no-underline">what is included in a standard cleaning</Link>{" "}
              so you know the baseline.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>12. Do I need a deep clean for the first visit?</strong> Usually yes, and an honest company will explain
              why: recurring visits maintain a level of clean that a first visit has to establish. See how the two differ in{" "}
              <Link to="/resources/deep-cleaning-vs-regular-cleaning" className="text-accent underline hover:no-underline">deep cleaning vs regular cleaning</Link>,
              or review what a full{" "}
              <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning service</Link>{" "}
              covers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>13. How often should I schedule service?</strong> A good company asks about your household before
              answering: kids, pets, square footage, allergies. Our guide on{" "}
              <Link to="/resources/how-often-should-you-hire-a-cleaning-service" className="text-accent underline hover:no-underline">how often you should hire a cleaning service</Link>{" "}
              gives you a starting point.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>14. Do you handle move-in and move-out cleans?</strong> Even if you do not need one today, offering a
              proper{" "}
              <Link to="/services/move-out-cleaning" className="text-accent underline hover:no-underline">move-out cleaning</Link>{" "}
              signals a mature operation with defined checklists rather than improvised work.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>15. What happens if I am not satisfied?</strong> The phrase you want is satisfaction guarantee, with
              specifics: how quickly they return, what the re-clean covers, and who approves it. Hiring for a specific
              situation — like{" "}
              <Link to="/resources/how-to-hire-cleaning-service-elderly-parents" className="text-accent underline hover:no-underline">hiring a cleaner for an elderly parent</Link>{" "}
              — adds a few extra questions worth asking, too.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Product Questions: Are the Supplies Kid & Pet-Safe, and Who Brings Them?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>16. Who supplies the products and equipment?</strong> Professional cleaners should bring their own, and
              be able to tell you exactly what they use.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>17. Are your products safe for kids and pets?</strong> The gold standard answer is EPA Safer Choice
              certification, a federal program in which EPA scientists review every ingredient in a product against strict
              human health and environmental criteria. It is a verifiable label, not a marketing word like "natural." That
              certification is the backbone of a real{" "}
              <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">eco-friendly cleaning service</Link>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>18. Can you accommodate allergies or fragrance sensitivities?</strong> A flexible housekeeping team can
              switch products or go fragrance-free on request, and will note it on your account so it survives crew handoffs.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>19. Do you sanitize equipment between homes?</strong> Vacuums and cloths travel. You want a company that
              changes or sanitizes them between houses so the previous home's allergens do not become yours.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>20. Are you locally owned or a franchise?</strong> The answer determines who sets your price and who
              picks up the phone when something goes wrong. Our{" "}
              <Link to="/resources/local-cleaning-company-vs-franchise" className="text-accent underline hover:no-underline">local cleaning company vs franchise</Link>{" "}
              comparison explains why that matters more than most maid service ads admit.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">The Complete 20-Question Checklist (Copy & Save)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wondering what to ask a cleaning service on the phone? Here is the full house cleaner vetting checklist in one
              place:
            </p>
            <ul className="space-y-2.5 mb-6">
              {checklist.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> {i}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              That is the full set of questions to ask before hiring a house cleaner, and it doubles as the whole system for
              how to choose a cleaning company: twenty questions, most of them answered in one call. Any professional worth
              hiring will respect you more for asking.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you would rather start with a company that answers all 20 the right way, Capital Clean Care is family-owned,
              licensed and insured, with background-checked cleaners, transparent flat-rate pricing, a satisfaction guarantee,
              and EPA Safer Choice eco-friendly products that are safe for kids and pets. We serve Rockville, Bethesda, Silver
              Spring, Gaithersburg, Germantown, and Potomac, plus Washington DC and Northern Virginia.
            </p>
            <div className="bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 text-center mt-8">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">A company that answers all 20 the right way</h3>
              <p className="text-primary-foreground/80 text-sm mb-5 max-w-md mx-auto">Family-owned, licensed and insured, background-checked cleaners, flat-rate pricing, and a written satisfaction guarantee. Get your free quote today.</p>
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

      <RelatedPosts currentSlug="questions-to-ask-before-hiring-house-cleaner" />
      <StickyCTA />
    </Layout>
  );
};

export default QuestionsToAskBeforeHiringHouseCleaner;
