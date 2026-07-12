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

const HERO_IMAGE = "/images/blog/first-clean-cost-hero.webp";
const URL = "https://capitalcleancare.com/blog/why-first-house-cleaning-costs-more";

const kitchenTasks: string[] = [
  "Degreasing the range hood, stovetop, and backsplash",
  "Hand-wiping cabinet fronts, hardware, and toe kicks",
  "Cleaning inside the microwave and behind small appliances",
  "Scrubbing the sink, faucet base, and drain rim",
  "Dusting the top of the fridge and wiping baseboards",
];

const priceRows: string[][] = [
  ["Studio", "$150 to $180", "From $230"],
  ["1 to 2 bedrooms", "$150 to $180", "$230 and up"],
  ["3 bedrooms", "$200 to $400+", "$375 to $445 typical"],
  ["4 to 5 bedrooms", "$200 to $400+", "$540+"],
];

const prepSteps: { title: string; text: string }[] = [
  { title: "Declutter surfaces and floors.", text: "Cleaners clean; they should not spend paid time deciding where your mail goes." },
  { title: "Run the dishes and put away laundry.", text: "A clear sink and clear beds free up real minutes." },
  { title: "Secure valuables and fragile heirlooms.", text: "It protects your items and keeps the team moving without worry." },
  { title: "Write a short priority list.", text: "If the guest bathroom matters most, say so up front." },
  { title: "Plan for pets.", text: "A gated room or a walk during the visit keeps everyone efficient and comfortable." },
  { title: "Confirm add-ons in writing.", text: "Inside the oven, inside the fridge, and interior windows are usually extras. Decide before, not during." },
  { title: "Make access easy.", text: "Parking, gate codes, and lockboxes sorted in advance mean the clock starts on cleaning, not logistics." },
];

const faqs = [
  { q: "Why is the first house cleaning more expensive even for a small home?", a: "Because condition matters more than size. Even a small condo in Silver Spring can hold a year of soap scum, dust, and kitchen grease. The first visit is priced on hours of catch-up work, not square footage alone. Once that baseline is set, a small home drops to the standard rate quickly." },
  { q: "Can I skip the deep clean and start with standard visits?", a: "Some companies allow it, but expect tradeoffs. A standard clean budgets time for maintenance, so heavy buildup either gets skipped or swallows the whole visit. If your home was professionally cleaned within the last month or two, say so. A good cleaning company may waive the deep clean entirely." },
  { q: "How long does a first deep cleaning take?", a: "It varies with size and condition, but plan on roughly two to three times the length of a standard visit. A two-person team can usually finish a typical three-bedroom home in an afternoon. Homes that have gone a year or more without professional housekeeping can take longer." },
  { q: "Is a one time deep cleaning service worth it without recurring visits?", a: "Yes, and it is common before holidays, after renovations, or when preparing a home for sale. Move-in and move-out cleaning follow the same deep-clean logic. You pay once for the hours, enjoy the reset, and decide later whether recurring service makes sense." },
];

const WhyFirstHouseCleaningCostsMore = () => {
  const { seoHelmet } = useSEO({
    title: "Why Your First House Cleaning Costs More (And What You Get)",
    description:
      "Why is the first house cleaning more expensive? What an initial deep clean includes, real prices in Maryland & how to save on visits after.",
    canonical: URL,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="why is the first house cleaning more expensive, initial deep cleaning cost, first time house cleaning price, deep clean vs standard clean price, house cleaning cost Maryland, one time deep cleaning service" />
      </Helmet>
      <ArticleSchema
        title="Why Your First House Cleaning Costs More (And What You Get)"
        description="Why the first house cleaning is more expensive: what an initial deep clean includes room by room, real Maryland prices, and how the first visit makes every future cleaning cheaper."
        url={URL}
        datePublished="2026-07-10"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />

      <BlogHero src={HERO_IMAGE} alt="Deep detail work inside a kitchen oven, why the first house cleaning costs more">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">Why Your First House Cleaning Costs More (And What You Get)</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">What an initial deep clean includes, real Maryland prices, and how to save on every visit after</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Capital Clean Care · MD · DC · VA · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Why is the first house cleaning more expensive? Because the first visit is a deep clean, not a standard clean, and it
              removes months of buildup that routine visits never touch. In Montgomery County, Maryland, a typical initial deep
              cleaning cost runs <strong>$230 to $540+</strong>, versus <strong>$150 to $180</strong> for a standard clean of a
              smaller home. That first time house cleaning price is a one-time reset, and here is exactly what it buys.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Homeowners in Rockville, Bethesda, and Silver Spring ask us why is the first house cleaning more expensive almost
              every week, usually right after collecting three quotes that all show the same pattern. It is a fair question, and
              the honest answer has nothing to do with padding. It has everything to do with hours.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Why Is the First Cleaning More Expensive? The Short Answer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The short answer: labor hours. A recurring visit maintains a home that professional cleaners already reset a week or
              two earlier. A first visit has to erase months, sometimes years, of gradual buildup that nobody notices day to day,
              and that takes roughly two to three times the work of a maintenance clean.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Think about everything a routine visit can safely skip: baseboards, blinds, vents, cabinet fronts, grout lines, the
              sticky film that settles above the stove. On a first visit, none of that can be skipped, because that buildup is
              exactly what made you call a cleaning service in the first place.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              So if you have been wondering why is the first house cleaning more expensive, the answer is hours, not markup. When
              you compare a deep clean vs standard clean price and see a gap of $100 or more, you are not looking at a
              new-customer penalty. You are looking at a completely different job wearing the same uniform. Our breakdown of{" "}
              <Link to="/blog/deep-cleaning-vs-regular-cleaning" className="text-accent underline hover:no-underline">deep cleaning vs regular cleaning</Link>{" "}
              shows the task-by-task difference.
            </p>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">It is a one-time reset, not your new rate</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Any honest cleaning company will tell you the same thing: the first visit is essentially a one time deep cleaning
              service, and every visit after it drops back to the standard rate. If a maid service quotes the same low price for
              visit one as for visit ten, be careful. Either the first clean will be rushed, or the price will grow once the team
              sees your home. We cover that second scenario in our guide to{" "}
              <Link to="/blog/hidden-fees-house-cleaning" className="text-accent underline hover:no-underline">hidden fees in house cleaning</Link>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">What an Initial Deep Clean Actually Includes (Room by Room)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Here is what your first time house cleaning price actually pays for. Set it next to the recurring task list in{" "}
              <Link to="/blog/what-is-included-in-a-standard-cleaning" className="text-accent underline hover:no-underline">what is included in a standard cleaning</Link>{" "}
              and the price difference starts to make sense fast.
            </p>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">Kitchen</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The kitchen eats the most hours on almost every first visit. Professional cleaners will typically handle:
            </p>
            <ul className="space-y-2.5 mb-6">
              {kitchenTasks.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> {i}
                </li>
              ))}
            </ul>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">Bathrooms</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bathrooms come second in labor. Expect soap scum removal from glass doors and tile, scrubbing of grout lines,
              descaling the mineral spots our local water leaves on faucets and showerheads, and detail work behind the toilet and
              around the exhaust vent cover. None of that fits inside a standard visit's time budget.
            </p>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">Bedrooms and living areas</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This is where months of settled dust live: baseboards, door frames, window sills, blinds, ceiling fans, light
              switches, and the edges under furniture. A first visit works these by hand, room by room, so future visits only have
              to maintain them.
            </p>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">The details that separate deep from standard</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vent covers, door tops, stair railings, decor, and light fixtures round out the list. This level of detail is why a
              full{" "}
              <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning service</Link>{" "}
              is measured in hours, not in rooms, and why housekeeping pros insist on it before starting a recurring schedule.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">How Much Does a First Cleaning Cost in Maryland?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Here is what house cleaning costs in Maryland look like in practice, using the same ranges we see across Montgomery
              County:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left p-3 rounded-tl-xl">Home size</th>
                    <th className="text-left p-3">Standard cleaning (recurring)</th>
                    <th className="text-left p-3 rounded-tr-xl">First visit (deep clean)</th>
                  </tr>
                </thead>
                <tbody>
                  {priceRows.map((r, i) => (
                    <tr key={r[0]} className={i % 2 ? "bg-secondary/40" : "bg-white"}>
                      <td className="p-3 font-medium text-foreground">{r[0]}</td>
                      <td className="p-3 text-muted-foreground">{r[1]}</td>
                      <td className="p-3 font-semibold text-accent">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Those ranges hold across Rockville, Gaithersburg, and Germantown, with the higher end showing up in larger Potomac
              homes. Your exact initial deep cleaning cost depends on square footage, condition, and add-ons like inside the oven
              or fridge. For the full local picture, see our guide to{" "}
              <Link to="/blog/house-cleaning-prices-maryland-2026" className="text-accent underline hover:no-underline">house cleaning prices in Maryland</Link>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              One more thing explains why is the first house cleaning more expensive on some quotes than others: how the price is
              structured. An hourly quote on a first visit can grow while the team works, while a flat quote cannot. Our
              comparison of{" "}
              <Link to="/blog/flat-rate-vs-hourly-house-cleaning" className="text-accent underline hover:no-underline">flat rate vs hourly house cleaning</Link>{" "}
              explains why the first visit is exactly when a flat number protects you most.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              That is also why we quote flat rates at Capital Clean Care. You know your first time house cleaning price before
              anyone rings the doorbell, not after. If you want a number for your own home, you can get a free quote at{" "}
              <a href="/#quote" className="text-accent underline hover:no-underline">capitalcleancare.com</a> in about a minute.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA headline="Want your first-clean number before anyone rings the doorbell?" subtext="Flat written pricing on every initial deep clean across Rockville, Bethesda & Silver Spring: eco-friendly products, background-checked crews, satisfaction guaranteed." ctaLabel="Get My Flat Quote" ctaTo="/contact" />
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">How the First Visit Makes Every Future Cleaning Cheaper</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Here is the part quote-shoppers miss: the question of why is the first house cleaning more expensive matters for
              exactly one visit. After that, the math flips in your favor.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Once your home is reset to a professionally cleaned baseline, a standard visit really is just maintenance. The team
              is not fighting buildup, so the job fits a smaller time budget and a smaller price.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Put it on a recurring schedule and the discounts stack on top: weekly service saves up to 25%, biweekly saves 15%,
              and monthly saves 5%. On a 1 to 2 bedroom home with a $150 to $180 standard rate, a biweekly plan lands around $128
              to $153 per visit. See how{" "}
              <Link to="/services/recurring-cleaning" className="text-accent underline hover:no-underline">recurring cleaning service</Link>{" "}
              pricing works, and if you are not sure which schedule fits your household, our guide on{" "}
              <Link to="/blog/how-often-should-you-hire-a-cleaning-service" className="text-accent underline hover:no-underline">how often you should hire a cleaning service</Link>{" "}
              walks through it.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In other words, the initial deep cleaning cost is the price of admission to the cheapest cleanings you will ever buy.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">How to Prepare So Your First Cleaning Goes Faster</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              First visits are priced on hours and condition, which means a little prep genuinely saves you money. Before the team
              arrives:
            </p>
            <ul className="space-y-2.5 mb-6">
              {prepSteps.map((p) => (
                <li key={p.title} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span><strong className="text-foreground">{p.title}</strong> {p.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every item on that checklist shaves minutes off the job, and on a first visit, minutes are exactly what you are
              paying for.
            </p>
          </FadeInSection>

          <FadeInSection>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you want that first cleaning handled by a licensed and insured, family-owned local team rather than a franchise,
              Capital Clean Care serves{" "}
              <Link to="/locations/rockville-md" className="text-accent underline hover:no-underline">Rockville</Link>, Bethesda,
              Silver Spring, Gaithersburg, and the rest of Montgomery County, plus Washington DC and Northern Virginia. Every
              visit uses EPA Safer Choice{" "}
              <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">eco-friendly cleaning</Link>{" "}
              products that are safe for kids and pets, every cleaner is background checked, and every flat-rate quote is backed
              by a satisfaction guarantee.
            </p>
            <div className="bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 text-center mt-8">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">Your first clean, priced flat before we arrive</h3>
              <p className="text-primary-foreground/80 text-sm mb-5 max-w-md mx-auto">One written number for the whole initial deep clean, and the discounted standard rate on every visit after.</p>
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
              <Sparkles className="h-6 w-6 text-accent" /> FAQ: First-Time Cleaning Questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="why-first-house-cleaning-costs-more" />
      <StickyCTA />
    </Layout>
  );
};

export default WhyFirstHouseCleaningCostsMore;
