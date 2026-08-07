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
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/team/real-team-luxury-home.webp";
const URL = "https://capitalcleancare.com/resources/house-cleaning-for-seniors";
const DEEP = "/services/deep-cleaning";
const PRICING = "/pricing";
const QUOTE = "/#quote";
const SENIOR = "/senior-home-cleaning-montgomery-county-md";
const MEDICARE = "https://www.medicare.gov/coverage/home-health-services";
const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const faqs = [
  {
    q: "How much does house cleaning for seniors cost?",
    a: "Cost depends on the size and condition of the home and the type of service. Recurring visits usually cost less per clean than a one-time visit, and a first-time deep clean costs more than routine upkeep because it sets the baseline. The most helpful thing is a clear, upfront quote before any work begins — so there are no surprises. You can request a free quote from Capital Clean Care by phone or online, and pricing is confirmed before the first visit.",
  },
  {
    q: "Can a family member schedule cleaning for an older parent?",
    a: "Yes, and it's very common. An adult child, relative, or caregiver can arrange and pay for the service, choose the main point of contact, and stay in the loop about scheduling. We're glad to communicate with the senior, a family member, or both — whatever the household prefers. Many of our clients are booked by a son or daughter who wants their parent's home kept comfortable and safe.",
  },
  {
    q: "Do seniors need to leave the house during cleaning?",
    a: "No. You're welcome to stay home and relax while our team works, or to be out running errands — whichever is more comfortable for you. Our professionals are background-checked, uniformed, and respectful of your space and routine. If you'd rather not be disturbed in a particular room, just let us know and we'll work around it.",
  },
  {
    q: "Are cleaning products safe for homes with pets or sensitivities?",
    a: "Yes. Capital Clean Care uses non-toxic, plant-based products that are EPA Safer Choice-certified, with no bleach, ammonia, or synthetic fragrances. They're chosen to be appropriate for homes with children, pets, and people who are sensitive to strong chemicals or odors — which matters in many older adults' homes.",
  },
  {
    q: "How often should an older adult's home be professionally cleaned?",
    a: "It depends on the household. Many older adults do well with a visit every two weeks for steady maintenance, while busier homes — with pets or frequent visitors — may prefer weekly. Lighter-use homes sometimes need only monthly service. A common starting point is one deep clean to reset the home, followed by biweekly visits, then adjusting from there.",
  },
  {
    q: "Does Medicare pay for routine house cleaning?",
    a: "Original Medicare generally does not pay for routine homemaker services like house cleaning when that is the only help you need. Some home health services can be covered when specific medical requirements are met, and certain Medicare Advantage plans may offer extra benefits that vary by plan. Always check with Medicare and your individual plan. This is general information, not financial or medical advice.",
  },
];

const HouseCleaningForSeniors = () => {
  const { seoHelmet } = useSEO({
    title: "House Cleaning for Seniors in MD, DC & VA",
    description:
      "Safe, reliable house cleaning for seniors in Maryland, DC and Virginia. Learn what to look for and how Capital Clean Care can help.",
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
          content="house cleaning for seniors, house cleaning services for seniors, house cleaning for seniors near me, senior home cleaning services, house cleaning service for seniors, cleaning services for seniors"
        />
      </Helmet>

      <ArticleSchema
        title="House Cleaning for Seniors: A Safer, Easier Way to Care for Home"
        description="A warm, plain-language guide to house cleaning for seniors in Maryland, DC and Northern Virginia — why housework gets harder with age, what senior home cleaning should include, how to choose a service you can trust, a simple cleaning schedule, and what Medicare does and doesn't cover."
        url={URL}
        datePublished="2026-08-06"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "House Cleaning for Seniors", href: "/resources/house-cleaning-for-seniors" },
        ]}
      />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "House Cleaning for Seniors" },
            ]}
          />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="Capital Clean Care professional providing house cleaning for a senior homeowner.">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Senior Home Care
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          House Cleaning for Seniors: A Safer, Easier Way to Care for Home
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          Keep enjoying the home you love — without the heavy lifting.
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

          {/* ── Intro ── */}
          <FadeInSection>
            <p className="mb-6">
              For many older adults, the home is the center of everything — and keeping it clean is part of what makes it
              feel like home. Over time, though, the physical side of housework can wear you down. Scrubbing bathrooms,
              hauling a vacuum up the stairs, changing bed linens, mopping floors, and reaching high shelves take more
              effort than they used to. That is where <strong className="text-foreground">house cleaning for seniors</strong>{" "}
              comes in. A professional service takes the heavy, tiring jobs off your plate so you can keep enjoying your
              home, on your own terms, without the strain.
            </p>
            <p className="mb-8">
              This guide walks through why housework gets harder with age, what a good senior cleaning service should
              include, how to choose one you can trust, and how Capital Clean Care helps families across Maryland, DC, and
              Northern Virginia.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA
              headline="Prefer to talk it through?"
              subtext="Capital Clean Care serves Maryland, DC & Northern Virginia with background-checked teams and non-toxic products. Request a free quote or call us — no pressure, ever."
              ctaLabel="Get a Free Quote"
              ctaTo={QUOTE}
            />
          </FadeInSection>

          {/* ── H2: Why it gets harder ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why House Cleaning Can Become Harder With Age
            </h2>
            <p className="mb-4">
              There is nothing wrong with finding housework harder than it once was — it is simply how the body changes.
              Cleaning asks a lot of you physically: lifting, bending, kneeling, reaching overhead, gripping, and staying
              on your feet for long stretches. Any one of those can be uncomfortable, and a full clean can leave you sore
              or worn out for a day or two.
            </p>
            <p className="mb-4">Some jobs are especially demanding:</p>
            <ul className="space-y-3 mb-6 pl-1">
              {[
                "Scrubbing showers, tubs, tile, and grout",
                "Cleaning underneath furniture",
                "Carrying a vacuum between floors",
                "Reaching ceiling fans and high cabinets",
                "Cleaning ovens and baked-on grease",
                "Changing sheets and making beds",
                "Moving objects to clean behind them",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-8">
              Recognizing which tasks have gotten hard is not a sign of decline — it is good sense. Handing off the few
              jobs that strain your back and knees frees your energy for the parts of home life you actually enjoy.
            </p>
          </FadeInSection>

          {/* ── H2: How services help ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              How House Cleaning Services Help Seniors
            </h2>
            <p className="mb-6">
              The right help does more than tidy a room. House cleaning services for seniors support the whole household —
              the resident first, and the family who cares about them too.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Less Strain From Demanding Chores</h3>
            <p className="mb-6">
              The hardest, most physical jobs — the bending, scrubbing, and lifting — are handled by a team that does them
              every day. You keep your strength and your energy for the things that matter more than housework.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">A More Comfortable Living Environment</h3>
            <p className="mb-6">
              A regularly cleaned home is simply better to live in. Clear floors and a fresh bathroom and kitchen mean
              fewer allergens and less clutter to move around — a home that feels good and is easier to get around safely.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Support for Aging at Home</h3>
            <p className="mb-6">
              Most people want to stay in their own home as long as they can. Keeping up with the cleaning is one of the
              simplest ways to make that realistic. Dependable{" "}
              <Link to={SENIOR} className="text-accent font-medium hover:underline">senior home cleaning services</Link>{" "}
              take one recurring worry off the table so the home stays a place you can manage and love.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Reassurance for Family Members</h3>
            <p className="mb-8">
              For adult children and caregivers, a trusted cleaning service brings real peace of mind. Knowing a
              background-checked professional visits on a set schedule — and that someone is inside the home regularly and
              noticing how things are going — is a quiet comfort, especially for families who live far away.
            </p>
          </FadeInSection>

          {/* ── H2: What it should include ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              What Should Senior Home Cleaning Include?
            </h2>
            <p className="mb-6">
              A good clean covers the rooms that affect comfort and safety the most. Here is what thorough senior home
              cleaning typically covers, room by room.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Kitchen Cleaning</h3>
            <ul className="space-y-2 mb-6 pl-1">
              {[
                "Countertops, backsplash, and sink cleaned and sanitized",
                "Stovetop, range hood, and microwave wiped down",
                "Outside of appliances and cabinet fronts cleaned",
                "Floors swept and mopped, trash taken out",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <BlogInlineImage
              src="/images/services/kitchen-hero.webp"
              alt="A clean, bright kitchen with wiped counters and appliances after a Capital Clean Care visit."
              caption="A senior-friendly kitchen clean — counters, appliances, and floors handled for you, no bending or scrubbing required."
            />

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Bathroom Cleaning</h3>
            <ul className="space-y-2 mb-6 pl-1">
              {[
                "Toilet, tub, shower, and tile scrubbed and disinfected",
                "Sink, counters, and mirrors cleaned",
                "Grout and hard-water spots addressed",
                "Floors sanitized — a key safety zone for slips",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <BlogInlineImage
              src="/images/services/bathroom-hero.webp"
              alt="A freshly cleaned, sanitized bathroom with a spotless tub and tile."
              caption="Bathrooms get extra attention — sanitized tub, shower, and floors in one of the most important rooms for everyday safety."
            />

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Bedroom and Living Area Cleaning</h3>
            <ul className="space-y-2 mb-6 pl-1">
              {[
                "Dusting surfaces, shelves, and reachable high spots",
                "Vacuuming carpets and rugs, mopping hard floors",
                "Changing sheets and making beds on request",
                "Tidying and wiping down frequently touched surfaces",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <BlogInlineImage
              src="/images/services/living-area-hero.webp"
              alt="A tidy, dust-free living room with clean floors and surfaces."
              caption="Fresh, dust-free living areas and bedrooms — the comfortable spaces where you spend most of your day."
            />

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Deep-Cleaning Add-ons</h3>
            <p className="mb-8">
              When a home needs more than routine upkeep — after a busy season, a hospital stay, or simply because it has
              been a while — a <Link to={DEEP} className="text-accent font-medium hover:underline">deep cleaning</Link>{" "}
              goes further: inside the oven and fridge, baseboards and window sills, behind and under furniture, and the
              built-up grime that a standard visit does not reach. Many households start here, then keep it up with regular
              visits.
            </p>
          </FadeInSection>

          {/* ── H2: How to choose ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              How to Choose House Cleaning for Seniors
            </h2>
            <p className="mb-6">
              Not every cleaning company is set up for an older adult's home. A few honest questions will tell you a great
              deal about whether a service is the right fit.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Are the Cleaners Background-Checked and Insured?</h3>
            <p className="mb-6">
              This is the first thing to confirm. You want professionals who have passed background checks and a company
              that is licensed and insured, so you are protected if anything is ever damaged. Capital Clean Care is a
              licensed and insured, family-owned local company, and every team member is background-checked.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Are the Products Appropriate for the Household?</h3>
            <p className="mb-6">
              Strong chemical smells and harsh cleaners can bother anyone, and they matter more in a home with sensitivities,
              breathing concerns, or pets. We use non-toxic, plant-based, EPA Safer Choice-certified products — with no
              bleach, ammonia, or synthetic fragrances — chosen to be safe for children, pets, and people who are sensitive
              to chemicals.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Can the Service Follow a Consistent Routine?</h3>
            <p className="mb-6">
              Familiarity builds trust. The same reliable team on a set schedule learns your home and your preferences, and
              a consistent face at the door is far more comfortable than a rotating cast of strangers — especially for a
              senior living alone.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Is Pricing Clear Before the Visit?</h3>
            <p className="mb-6">
              You should know what a clean costs before anyone starts. Look for clear, upfront pricing with no hidden fees.
              You can review our{" "}
              <Link to={PRICING} className="text-accent font-medium hover:underline">cleaning prices</Link>{" "}
              and get a firm quote before the first visit, so there are no surprises for you or the family member arranging it.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">What Happens if Something Is Missed?</h3>
            <p className="mb-8">
              Even great teams are human. What matters is how a company makes it right. Capital Clean Care backs every visit
              with a 24-hour satisfaction guarantee: if something was missed, tell us within a day and we will come back and
              take care of it at no charge.
            </p>
          </FadeInSection>

          {/* ── H2: Schedule table ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              A Simple Cleaning Schedule for an Older Adult's Home
            </h2>
            <p className="mb-4">
              There is no single right frequency — it depends on the home and how it is used. This table is a simple starting
              point.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse text-base md:text-lg">
                <caption className="sr-only">Cleaning frequency options and when each works well for an older adult's home</caption>
                <thead>
                  <tr className="bg-secondary">
                    <th scope="col" className="border border-border px-4 py-3 font-heading font-semibold text-foreground">Frequency</th>
                    <th scope="col" className="border border-border px-4 py-3 font-heading font-semibold text-foreground">Often works well for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="border border-border px-4 py-3 font-semibold text-foreground align-top whitespace-nowrap">Weekly</th>
                    <td className="border border-border px-4 py-3">Active kitchens, pets, frequent visitors, or minimal household help</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <th scope="row" className="border border-border px-4 py-3 font-semibold text-foreground align-top whitespace-nowrap">Every two weeks</th>
                    <td className="border border-border px-4 py-3">Routine maintenance for many apartments and homes</td>
                  </tr>
                  <tr>
                    <th scope="row" className="border border-border px-4 py-3 font-semibold text-foreground align-top whitespace-nowrap">Monthly</th>
                    <td className="border border-border px-4 py-3">Lighter-use homes where the resident handles simple upkeep</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <th scope="row" className="border border-border px-4 py-3 font-semibold text-foreground align-top whitespace-nowrap">One-time deep clean</th>
                    <td className="border border-border px-4 py-3">Seasonal cleaning, recovery periods, family visits, or restarting maintenance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-8">
              For many households, a one-time deep clean followed by visits every two weeks is a good place to start — the
              deep clean resets the home, and biweekly visits keep it that way. But the plan should always be personalized to
              the home, the budget, and how much the resident wants to do themselves.
            </p>
          </FadeInSection>

          {/* ── H2: Preparing for first visit ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Preparing for the First Cleaning Visit
            </h2>
            <p className="mb-4">
              A little preparation makes the first visit smooth and comfortable. You do not need to clean beforehand — that
              is our job — but these simple steps help:
            </p>
            <ol className="space-y-4 mb-6">
              {[
                "Put away medications, documents, cash, and sentimental valuables.",
                "Identify rooms or items that are off-limits.",
                "Share entry, parking, pet, and alarm instructions.",
                "Point out unstable furniture, loose rugs, damaged surfaces, or delicate objects.",
                "Write down the three most important cleaning priorities.",
                "Decide whether the senior, relative, or caregiver will be the main contact.",
              ].map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-accent/15 text-accent font-bold text-base" aria-hidden="true">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-lg">{step}</span>
                </li>
              ))}
            </ol>
            <p className="mb-8">
              And to say it plainly: there is no need to tidy up before the team arrives. Cleaning the home exactly as it is
              is what we are there for.
            </p>
          </FadeInSection>

          {/* ── H2: Medicare ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Does Medicare Cover House Cleaning for Seniors?
            </h2>
            <p className="mb-4">
              This is one of the most common questions families ask, so it is worth answering carefully. In general,{" "}
              <strong className="text-foreground">Original Medicare does not pay for homemaker services</strong> — everyday
              help like shopping, laundry, and cleaning — when those services are not part of a covered medical plan of care.
            </p>
            <p className="mb-4">A few important points to keep in mind:</p>
            <ul className="space-y-3 mb-6 pl-1">
              {[
                "Certain home health services (such as part-time skilled nursing or therapy) can be covered when specific requirements are met and a doctor certifies the need.",
                "Medicare Advantage plan benefits vary from plan to plan — some may offer extra supportive benefits.",
                "You should always check directly with Medicare and your individual plan for what applies to you.",
                "Local programs, nonprofit organizations, long-term care insurance, or veterans' benefits may offer some help in certain situations.",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-8">
              We cannot promise coverage, and this is general information rather than financial or medical advice. For the
              official details, see Medicare's own page on{" "}
              <a href={MEDICARE} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">
                home health services at Medicare.gov
              </a>
              , and confirm anything specific with Medicare or your plan directly. For a fuller breakdown of Medicaid
              waivers, veterans&#x27; benefits, and other ways to lower the cost, see our guide to{" "}
              <Link to="/resources/free-house-cleaning-for-seniors" className="text-accent font-medium hover:underline">free and low-cost house cleaning for seniors</Link>.
            </p>
          </FadeInSection>

          {/* ── H2: DMV local ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Senior-Friendly House Cleaning in Maryland, DC and Virginia
            </h2>
            <p className="mb-4">
              Capital Clean Care is a family-owned local company that has served the DMV for more than ten years. If you have
              been searching for house cleaning for seniors near you, we cover Maryland, Washington DC, and Northern Virginia —
              including Bethesda, Rockville, Silver Spring, Arlington, and Alexandria — with the same trusted teams and
              standards throughout.
            </p>
            <p className="mb-4">What families choose us for:</p>
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

          {/* ── H2: Conclusion + primary CTA ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Give Yourself—or Someone You Love—a Cleaner Home
            </h2>
            <p className="mb-6">
              A clean, comfortable home supports the things that matter most as we get older: dignity, independence, and the
              freedom to keep living where you want to live. Letting go of the heavy, tiring chores is not giving something
              up — it is choosing to spend your energy on better things. Whether this is for you or for a parent you love,
              professional house cleaning for seniors is a simple, respectful way to keep a home safe, fresh, and easy to
              enjoy.
            </p>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Ready When You Are</h2>
              <p className="text-primary-foreground/85 mb-6 leading-relaxed max-w-xl mx-auto text-lg">
                Request a free quote online, or call and talk it through with us — no pressure, no hard sell. We are happy to
                answer questions from seniors, relatives, and caregivers alike.
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
            </div>
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="house-cleaning-for-seniors" />
      <StickyCTA />
    </Layout>
  );
};

export default HouseCleaningForSeniors;
