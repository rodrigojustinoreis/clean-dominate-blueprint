import { Link } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import AuthorBio from "@/components/blog/AuthorBio";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const SLUG = "cleaning-schedule-working-parents-toddlers";
const URL = `https://capitalcleancare.com/resources/${SLUG}`;
const HERO_IMAGE = "/images/resources/toddler-cleaning-schedule/hero.webp";
const HERO_IMAGE_SMALL = "/images/resources/toddler-cleaning-schedule/hero-640.webp";
const MEALTIME_IMAGE = "/images/resources/toddler-cleaning-schedule/mealtime-cleanup.webp";

const QUOTE = "/#quote";
const RECURRING = "/services/recurring-cleaning";
const HOUSE = "/services/house-cleaning";
const DEEP = "/services/deep-cleaning";
const KITCHEN = "/services/kitchen-cleaning";
const BATHROOM = "/services/bathroom-cleaning";
const CRAWLING = "/resources/baby-crawling-floor-cleaning-guide";
const NEWBORN = "/resources/bringing-baby-home-cleaning-guide";
const PREGNANCY = "/resources/cleaning-during-pregnancy-prepare-home-for-baby";
const PRESCHOOL = "/resources/how-to-clean-a-backpack-and-lunch-box";

const CDC_CLEANING = "https://www.cdc.gov/hygiene/about/when-and-how-to-clean-and-disinfect-your-home.html";
const AAP_GREEN = "https://www.healthychildren.org/English/safety-prevention/all-around/Pages/green-cleaning-choosing-products-that-are-safer-for-your-family.aspx";
const AAP_CLEANERS = "https://www.healthychildren.org/English/health-issues/conditions/prevention/Pages/Cleaners-Sanitizers-Disinfectants.aspx";
const EPA_SAFER = "https://www.epa.gov/saferchoice/products";
const POISON_CONTROL = "https://www.poison.org/";

const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const dailyPriorities = [
  "Food and drink spills: handle them promptly, especially on floors, upholstery, and around the high chair.",
  "Kitchen close: clear food, load dishes, wipe food-preparation surfaces, and leave the sink ready for morning.",
  "Main-floor pass: sweep or vacuum crumbs, tracked-in grit, and pet hair where your toddler eats and plays.",
  "Bathroom check: address visible toilet, sink, bath, or potty-training messes instead of automatically deep-cleaning the room.",
  "Ten-minute reset: return loose toys to simple bins so tomorrow's cleaning starts with reachable surfaces.",
];

const weeklyRows = [
  { day: "Monday", zone: "Bathrooms", task: "Toilet, sink, tub or shower, mirrors, and floor", fallback: "Clean the toilet and sink; move the rest to next week" },
  { day: "Tuesday", zone: "Kitchen", task: "Appliance fronts, cabinet touchpoints, table, chairs, and floor", fallback: "Wipe the table, high chair, counters, and visible floor soil" },
  { day: "Wednesday", zone: "Living + play areas", task: "Dust reachable surfaces, vacuum upholstery and floors", fallback: "Vacuum the main play path and under the eating area" },
  { day: "Thursday", zone: "Bedrooms", task: "Sheets as needed, dusting, vacuuming, and wastebaskets", fallback: "Change necessary bedding and clear the floor" },
  { day: "Friday", zone: "Catch-up or rest", task: "One missed zone or one rotating deeper task", fallback: "Do nothing beyond the daily priorities" },
  { day: "Weekend", zone: "Protect family time", task: "A short shared reset—not a whole-house cleaning marathon", fallback: "Choose one 20-minute block or delegate the recurring clean" },
];

const faqs = [
  {
    q: "What is the best cleaning schedule for working parents with a toddler?",
    a: "The best schedule protects a few daily priorities—food spills, dishes, kitchen surfaces, crumbs, and urgent bathroom messes—then assigns one cleaning zone to each weekday. It should include a fallback version for exhausted days and leave room to skip, rotate, or delegate non-urgent work.",
  },
  {
    q: "How do you keep a house clean when a toddler makes a mess all day?",
    a: "Separate cleanliness from tidiness. Address food, liquid, bathroom messes, and walking hazards promptly. Use simple bins for a short toy reset, but accept that toys may be visible during the day. Rotate deeper cleaning by zone instead of repeatedly starting over across the whole house.",
  },
  {
    q: "What should working parents clean every day?",
    a: "Focus on tasks that become harder or less sanitary when postponed: food spills, dishes, food-preparation surfaces, high-chair soil, crumbs in eating and play areas, and urgent bathroom or potty-training messes. A full bathroom scrub, baseboards, windows, and detailed dusting usually do not need to happen daily.",
  },
  {
    q: "How long should a daily cleaning routine take?",
    a: "Use the time your household genuinely has rather than an arbitrary perfect number. A 10- to 20-minute reset can cover the kitchen close, visible crumbs, and toy pickup. On difficult days, do only the task that prevents damage, food residue, odor, or a safety problem.",
  },
  {
    q: "Do toddler toys need to be disinfected every day?",
    a: "Usually not. Clean visibly dirty toys according to the manufacturer's instructions and give extra attention after illness, contamination, or shared use. Material matters: electronic, plush, wooden, plastic, and bath toys cannot all be treated the same way. Cleaning and disinfecting are different steps.",
  },
  {
    q: "How do you clean safely while a toddler is home?",
    a: "Keep products in their original containers and locked or stored out of sight and reach. Follow every product label, ventilate as directed, and keep the child in another supervised area while products are being applied or floors are wet. Never mix cleaning products.",
  },
  {
    q: "How should parents handle toddler food messes?",
    a: "Remove food and blot liquids promptly, then clean the surface with a method approved by its manufacturer. Prioritize the high chair, table, nearby floor, and upholstery when affected. A small washable mat under the eating area can make the daily reset faster without requiring a full kitchen clean after every meal.",
  },
  {
    q: "How does having pets change a toddler cleaning schedule?",
    a: "Pets can add hair, tracked-in soil, bowl splashes, and toys to shared spaces. Vacuum or sweep the main toddler paths more often, keep litter and feeding areas separate from play space, clean spills promptly, and adjust frequency to your pet's shedding and outdoor routine rather than following a universal schedule.",
  },
  {
    q: "Is it worth hiring a cleaner when you have a toddler?",
    a: "It can be worthwhile when recurring bathrooms, floors, dusting, and kitchen cleaning are consuming the family's limited rest or weekend time. A cleaner does not replace everyday food cleanup or toy pickup; the value is removing the heavier repeat work from the parents' schedule.",
  },
  {
    q: "Should parents choose recurring cleaning or a one-time deep clean?",
    a: "Recurring cleaning fits families who want bathrooms, floors, dust, kitchens, and common areas maintained on a predictable rhythm. A one-time deep clean can help reset a home where detail work has accumulated. The right choice depends on the current baseline, budget, and which tasks keep falling behind.",
  },
];

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="mb-7 space-y-3 pl-1">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-lg">
        <span className="mt-2.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ToddlerCleaningSchedule = () => {
  const { seoHelmet } = useSEO({
    title: "Working Parents’ Cleaning Schedule | Capital Clean Care",
    description:
      "A realistic cleaning schedule for working parents with toddlers: daily priorities, weekly zones, spills, toys, pets, and tasks to delegate.",
    canonical: URL,
    ogType: "article",
    ogImage: HERO_IMAGE,
    preloadImage: HERO_IMAGE_SMALL,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="best cleaning schedule for working parents, cleaning schedule for working moms, realistic cleaning schedule, cleaning with a toddler, how to keep house clean with kids, toddler cleaning routine"
        />
      </Helmet>

      <ArticleSchema
        title="The Best Cleaning Schedule for Working Parents With Toddlers"
        description="A practical daily and weekly cleaning schedule built around the recurring food, floor, bathroom, toy, and pet messes that working parents face during the toddler stage."
        url={URL}
        datePublished="2026-08-21"
        dateModified="2026-08-21"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Cleaning Schedule for Working Parents", href: `/resources/${SLUG}` },
        ]}
      />

      <div className="border-b bg-gray-50 py-4">
        <div className="container mx-auto max-w-5xl px-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Cleaning Schedule for Working Parents" },
            ]}
          />
        </div>
      </div>

      <BlogHero
        src={HERO_IMAGE}
        alt="Working parents play with their toddler while a Capital Clean Care professional cleans the family kitchen"
      >
        <span className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-accent">
          Family Life · Toddler Stage
        </span>
        <h1 className="mb-6 font-heading text-3xl font-extrabold leading-tight drop-shadow-md md:text-4xl lg:text-5xl">
          The Best Cleaning Schedule for Working Parents With Toddlers
        </h1>
        <p className="mb-4 text-xl font-medium leading-relaxed text-gray-200 md:text-2xl">
          A realistic system for what to clean now, what can wait, and what you can delegate—without sacrificing every evening and weekend.
        </p>
        <p className="mb-8 text-sm uppercase tracking-widest text-gray-300">
          By Rodrigo Reis, Owner · Serving MD, DC &amp; Northern Virginia · 10 min read
        </p>
        <Button size="lg" className="rounded-full bg-accent px-8 py-6 text-lg text-white shadow-lg hover:bg-accent/90" asChild>
          <Link to={QUOTE}>Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </BlogHero>

      <article className="bg-white py-14 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-xl leading-relaxed text-gray-700">
          <FadeInSection>
            <p className="mb-6 text-2xl font-medium leading-relaxed text-gray-800">
              The best cleaning schedule for working parents with a toddler is not a plan that keeps every room perfect. It is
              a repeatable system that handles food, spills, bathrooms, floors, and other time-sensitive messes first; rotates
              the heavier work through the week; and deliberately lets lower-priority tasks wait.
            </p>
            <p className="mb-6">
              The toddler stage changes the job. A newly mobile child can carry toys and crumbs from room to room, touch
              reachable surfaces, eat more independently, and create several small messes before breakfast is over. Parents
              often respond by cleaning continuously—yet the home can still look lived-in five minutes later.
            </p>
            <p className="mb-8">
              That does not mean the routine is failing. It means the routine needs a different target: <strong>clean enough
              where it matters, reset enough to function, and flexible enough to survive a difficult workday.</strong>
            </p>

            <div className="mb-10 rounded-2xl border-l-4 border-accent bg-accent/5 p-6 md:p-8">
              <h2 className="mb-3 font-heading text-2xl font-bold text-gray-900">The short answer</h2>
              <p className="text-lg leading-relaxed">
                Clean food and liquid spills promptly. Close the kitchen each night, remove crumbs from the toddler's main
                eating and play paths, and address urgent bathroom messes. Add one zone per weekday—bathrooms, kitchen, living
                areas, then bedrooms—rather than trying to clean the whole house at once. Keep a minimum version for hard days:
                dishes, food, one clear walkway, and tomorrow's essentials. Toys can remain visible; baseboards can wait. If
                recurring bathrooms, floors, dusting, and kitchen work are consuming the family's only rest time, those are
                logical tasks to delegate.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="mb-5 mt-12 font-heading text-3xl font-bold text-gray-900">First, Separate “Messy” From “Dirty”</h2>
            <p className="mb-6">
              A basket of blocks on the rug is visual clutter. Yogurt under the high chair, a wet bathroom floor, and pet hair
              collecting where a toddler snacks are cleaning problems. Treating both categories as equally urgent creates an
              endless workload and makes a normal family home feel like a failure.
            </p>
            <div className="mb-8 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full min-w-[680px] border-collapse text-left text-base">
                <thead className="bg-primary text-white">
                  <tr>
                    <th scope="col" className="p-4 font-semibold">Priority</th>
                    <th scope="col" className="p-4 font-semibold">Examples</th>
                    <th scope="col" className="p-4 font-semibold">Response</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-red-50/50"><td className="p-4 font-bold">Handle now</td><td className="p-4">Food, liquid, glass, bodily-fluid, or slip hazards</td><td className="p-4">Contain and clean promptly</td></tr>
                  <tr className="border-b"><td className="p-4 font-bold">Handle tonight</td><td className="p-4">Dishes, table, high chair, crumbs, kitchen counters</td><td className="p-4">Use the kitchen-close routine</td></tr>
                  <tr className="border-b bg-gray-50"><td className="p-4 font-bold">Rotate weekly</td><td className="p-4">Bathrooms, dust, full vacuuming, mopping, bedrooms</td><td className="p-4">Assign one zone per day</td></tr>
                  <tr><td className="p-4 font-bold">Can wait</td><td className="p-4">Perfect toy sorting, baseboards, windows, detail work</td><td className="p-4">Rotate monthly, skip, or delegate</td></tr>
                </tbody>
              </table>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="mb-5 mt-12 font-heading text-3xl font-bold text-gray-900">The Daily Toddler-House Minimum</h2>
            <p className="mb-6">
              These are not rules from a perfect-home checklist. They are a decision filter. If the day falls apart, choose the
              item that prevents damage, residue, odor, pests, or a walking hazard and let the rest move forward.
            </p>
            <Bullets items={dailyPriorities} />
            <p className="mb-8">
              A useful reset may take 10 minutes one evening and 25 the next. The schedule should bend around commute days,
              illness, solo-parent evenings, and changing sleep—not punish the household for missing a box.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="mb-5 mt-12 font-heading text-3xl font-bold text-gray-900">A Realistic Weekly Cleaning Schedule for Working Parents</h2>
            <p className="mb-6">
              Give each day one zone and a smaller fallback. You will not have the entire home freshly cleaned at the same
              moment, but you avoid turning the weekend into one long recovery session.
            </p>
            <div className="mb-10 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full min-w-[820px] border-collapse text-left text-base">
                <thead className="bg-primary text-white">
                  <tr><th scope="col" className="p-4">Day</th><th scope="col" className="p-4">Zone</th><th scope="col" className="p-4">Standard version</th><th scope="col" className="p-4">Low-energy fallback</th></tr>
                </thead>
                <tbody>
                  {weeklyRows.map((row, index) => (
                    <tr key={row.day} className={`border-b last:border-b-0 ${index % 2 ? "bg-gray-50" : "bg-white"}`}>
                      <td className="p-4 font-bold text-gray-900">{row.day}</td>
                      <td className="p-4 font-medium">{row.zone}</td>
                      <td className="p-4">{row.task}</td>
                      <td className="p-4">{row.fallback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mb-8 text-base text-gray-600">
              This is a framework, not a required hygiene schedule. Adjust it for your flooring, household size, pets, illness,
              childcare routine, and manufacturer instructions.
            </p>
          </FadeInSection>

          <BlogInlineCTA
            headline="Want the weekly reset handled for you?"
            subtext="Recurring cleaning can maintain bathrooms, floors, kitchens, dust, and common areas while your family handles everyday toddler life."
            ctaLabel="Explore Recurring Cleaning"
            ctaTo={RECURRING}
          />

          <FadeInSection>
            <h2 className="mb-5 mt-12 font-heading text-3xl font-bold text-gray-900">How to Handle the Messes That Define the Toddler Stage</h2>

            <h3 className="mb-3 mt-8 font-heading text-2xl font-bold text-gray-900">Food, the high chair, and the kitchen floor</h3>
            <p className="mb-6">
              Remove food and blot liquids promptly. Clean the high chair according to its manufacturer—especially straps,
              seams, trays, and the area beneath it—and use a surface-appropriate method on the nearby floor. A washable mat
              can narrow the daily work area. The goal is not a full <Link to={KITCHEN} className="font-medium text-accent hover:underline">kitchen cleaning</Link> after every snack; it is preventing food residue from becoming tomorrow's harder job.
            </p>

            <figure className="my-9 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm">
              <img src={MEALTIME_IMAGE} alt="Capital Clean Care team member cleans a toddler's mealtime area while parent and child read together" width={1400} height={933} loading="lazy" decoding="async" className="aspect-[3/2] w-full object-cover" />
              <figcaption className="px-5 py-3 text-sm leading-relaxed text-gray-600">
                Delegating repeat kitchen and common-area cleaning can protect time for the parts of family life that cannot be outsourced.
              </figcaption>
            </figure>

            <h3 className="mb-3 mt-8 font-heading text-2xl font-bold text-gray-900">Toys and play areas</h3>
            <p className="mb-6">
              Keep organization intentionally simple: broad bins, a clear walking path, and a short reset. Clean toys when they
              are visibly dirty and after relevant illness or contamination, using instructions for the actual material. Plush,
              wood, electronics, bath toys, and hard plastic need different care. Do not turn every toy pickup into a
              disinfection project.
            </p>

            <h3 className="mb-3 mt-8 font-heading text-2xl font-bold text-gray-900">Fingerprints and reachable surfaces</h3>
            <p className="mb-6">
              Wipe sticky or visibly soiled door glass, low cabinets, table edges, and washable walls as needed. Cosmetic
              fingerprints can wait for the assigned zone. This prevents the highly visible toddler layer from hijacking the
              entire schedule.
            </p>

            <h3 className="mb-3 mt-8 font-heading text-2xl font-bold text-gray-900">Pets plus a toddler</h3>
            <p className="mb-8">
              Add quick vacuuming or sweeping in the shared eating and play paths, keep litter and pet feeding areas separate,
              and clean bowl splashes promptly. Frequency should respond to shedding, weather, outdoor access, and the size of
              your home—not a universal internet rule.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="mb-5 mt-12 font-heading text-3xl font-bold text-gray-900">Cleaning Safely While a Toddler Is Home</h2>
            <p className="mb-6">
              Routine cleaning and disinfecting are not the same. The <a href={CDC_CLEANING} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">CDC explains that routine cleaning is usually sufficient in most homes</a>, while disinfecting may be appropriate in specific situations such as illness or contamination. More chemical is not automatically more clean.
            </p>
            <Bullets items={[
              "Read and follow the entire product label, including dilution, ventilation, contact time, rinsing, and surface compatibility.",
              "Keep every product in its original labeled container and locked or stored out of sight and reach.",
              "Keep your toddler in another safe, supervised space while products are applied and while floors or surfaces remain wet.",
              "Never mix cleaning products. If an exposure occurs or you need product-specific guidance, contact Poison Control in the United States at 1-800-222-1222 or use Poison.org.",
              "If you prefer products evaluated against specific safety criteria, search the EPA Safer Choice product list; still follow each label exactly.",
            ]} />
            <p className="mb-8">
              For additional guidance, see the American Academy of Pediatrics resources on <a href={AAP_GREEN} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">choosing products that are safer for families</a> and the differences among <a href={AAP_CLEANERS} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">cleaners, sanitizers, and disinfectants</a>. Use <a href={EPA_SAFER} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">EPA Safer Choice</a> to verify qualifying products and <a href={POISON_CONTROL} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">Poison Control</a> for exposure questions. This article provides general household information, not individualized medical advice.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="mb-5 mt-12 font-heading text-3xl font-bold text-gray-900">When Hiring a Cleaner Becomes a Practical Part of the Schedule</h2>
            <p className="mb-6">
              Parents usually do not need someone to teach them how to wipe a counter. The pressure comes from heavier,
              recurring tasks—bathrooms, mopping, vacuuming, dusting, kitchens, and common areas—competing with work, sleep,
              errands, and the few available hours with their child.
            </p>
            <p className="mb-6">
              <Link to={RECURRING} className="font-medium text-accent hover:underline">Recurring cleaning</Link> is a natural fit
              when those same tasks repeatedly fall behind or consume the weekend. A <Link to={DEEP} className="font-medium text-accent hover:underline">deep cleaning</Link> may make more sense when the home needs a detailed reset before maintenance can feel manageable. Everyday food spills, dishes, laundry, and toy pickup still belong to household life; professional help removes part of the repeat workload, not every trace that a toddler lives there.
            </p>
            <div className="mb-10 rounded-2xl bg-primary p-7 text-white shadow-lg md:p-9">
              <h3 className="mb-4 font-heading text-2xl font-bold">A simple delegation test</h3>
              <Bullets items={[
                "Which tasks take the longest but do not need your personal attention?",
                "Which jobs keep moving from one week to the next?",
                "Would removing bathrooms, floors, dusting, and kitchen detail protect meaningful rest or family time?",
                "Would a predictable baseline make the short daily reset easier?",
              ]} />
            </div>
            <p className="mb-8">
              Capital Clean Care provides <Link to={HOUSE} className="font-medium text-accent hover:underline">professional house cleaning</Link> for families across Montgomery County, Maryland—including Bethesda, Rockville, Silver Spring, Gaithersburg, and Germantown—as well as Washington, DC, and Northern Virginia.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="mb-5 mt-12 font-heading text-3xl font-bold text-gray-900">This Guide's Place in the Family Life-Stage Series</h2>
            <p className="mb-6">
              Each stage changes what matters most. The <Link to={PREGNANCY} className="font-medium text-accent hover:underline">pregnancy cleaning guide</Link> focuses on preparing the home and delegating physically demanding work. <Link to={NEWBORN} className="font-medium text-accent hover:underline">Bringing Baby Home</Link> covers realistic cleaning during the first sleep-deprived weeks. The <Link to={CRAWLING} className="font-medium text-accent hover:underline">crawling-baby floor guide</Link> explains mopping frequency, floor types, and product labels. This toddler guide moves beyond the floor to a whole-home system for continuous small messes.
            </p>
            <p className="mb-8">
              <strong>Next in the series:</strong> when preschool begins, the daily routine gains a school-to-home transition.
              Learn <Link to={PRESCHOOL} className="font-medium text-accent hover:underline">how to clean a backpack and lunch box</Link>,
              handle leaks and odors, and create a practical unloading zone.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="mb-6 mt-14 font-heading text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <section key={faq.q} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <h3 className="mb-2 font-heading text-xl font-bold text-gray-900">{faq.q}</h3>
                  <p className="text-lg leading-relaxed">{faq.a}</p>
                </section>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mt-14 rounded-3xl bg-primary p-8 text-center text-primary-foreground shadow-xl md:p-12">
              <h2 className="mb-3 font-heading text-2xl font-bold md:text-3xl">Keep the Routine. Delegate the Heavy Part.</h2>
              <p className="mx-auto mb-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
                Request a free quote for recurring house cleaning in Montgomery County, Maryland, Washington, DC, or Northern Virginia.
              </p>
              <div className="flex flex-col items-center gap-4">
                <Button size="lg" className="w-full rounded-full bg-accent px-10 py-6 text-lg text-white shadow-md hover:bg-accent/90 sm:w-auto" asChild>
                  <Link to={QUOTE}>Get My Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 font-semibold text-white hover:text-accent">
                  <Phone className="h-5 w-5" /> {PHONE}
                </a>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/75">
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Free quote</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Local team</span>
                <span className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Recurring options</span>
              </div>
            </div>
          </FadeInSection>
        </div>
      </article>

      <AuthorBio />
      <RelatedPosts currentSlug={SLUG} />
      <StickyCTA />
    </Layout>
  );
};

export default ToddlerCleaningSchedule;
