import { Link } from "react-router-dom";
import { ArrowRight, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import AuthorBio from "@/components/blog/AuthorBio";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/blog/cleaning-during-pregnancy-prepare-home-for-baby.webp";
const URL = "https://capitalcleancare.com/resources/cleaning-during-pregnancy-prepare-home-for-baby";
const DEEP = "/services/deep-cleaning";
const RECURRING = "/services/recurring-cleaning";
const MOVE_IN = "/resources/move-in-cleaning-checklist";
const QUOTE = "/#quote";
const CONTACT = "/contact";
const EPA = "https://www.epa.gov/saferchoice/products";
const MTB_CLEANERS = "https://mothertobaby.org/baby-blog/whats-the-dirt-on-household-cleaners-when-pregnant/";
const MTB = "https://mothertobaby.org/";
const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const CHECKLIST: { area: string; items: string[] }[] = [
  {
    area: "Bedroom / Nursery",
    items: [
      "Dust reachable surfaces",
      "Vacuum carpet or clean hard flooring",
      "Wipe window sills",
      "Clean reachable baseboards where dust has accumulated",
      "Wipe doors, handles, and switches",
      "Reduce unnecessary clutter",
      "Prepare changing and feeding areas",
      "Wash baby textiles per manufacturer instructions",
    ],
  },
  {
    area: "Kitchen",
    items: [
      "Clean counters and backsplash",
      "Wipe cabinet and appliance handles",
      "Clean refrigerator interior as needed",
      "Discard expired food",
      "Clean the microwave",
      "Clean sink and faucet",
      "Vacuum and mop the floor",
      "Create space for baby feeding supplies",
    ],
  },
  {
    area: "Bathroom",
    items: [
      "Clean toilet",
      "Clean sink and faucet",
      "Clean shower or tub",
      "Wipe handles and switches",
      "Clean mirrors",
      "Vacuum and mop the floor",
      "Restock household essentials",
    ],
  },
  {
    area: "Living Areas",
    items: [
      "Dust surfaces",
      "Vacuum upholstery",
      "Vacuum rugs and carpets",
      "Clean hard floors",
      "Remove pet hair",
      "Wipe high-touch surfaces",
      "Declutter walking paths",
    ],
  },
  {
    area: "Whole Home",
    items: [
      "Replace or check the HVAC filter per system guidance",
      "Address visible moisture problems",
      "Have significant mold evaluated appropriately",
      "Remove trash and recycling",
      "Catch up on laundry",
      "Put frequently needed items within easy reach",
      "Delegate heavy or high-risk tasks",
    ],
  },
];

const faqs = [
  {
    q: "Can I clean the house while pregnant?",
    a: "For many uncomplicated pregnancies, routine household cleaning is generally possible. Follow product labels, ventilate the area, avoid unsafe lifting or climbing, and ask your healthcare provider about restrictions specific to your pregnancy.",
  },
  {
    q: "Are cleaning products safe during pregnancy?",
    a: "Safety depends on the product, ingredients, amount of exposure, and how it is used. Use products according to their labels, ventilate when needed, wear recommended protection, and consult your healthcare provider or an evidence-based exposure resource if you are concerned about a particular chemical.",
  },
  {
    q: "Can I use bleach while pregnant?",
    a: "MotherToBaby states that chlorine and chlorinated disinfectants have not been shown to increase the risk of birth defects in typical household use. Follow the label, ventilate the room, avoid concentrated fumes, and never mix bleach with ammonia, acids, vinegar, or other cleaners.",
  },
  {
    q: "Should I disinfect my whole house before bringing a newborn home?",
    a: "Usually, routine cleaning is more important than trying to disinfect every surface. Disinfection can be appropriate for certain high-touch surfaces or when illness is present. Follow public-health and product-label guidance.",
  },
  {
    q: "When should I deep clean before the baby arrives?",
    a: "There is no universal required week. A practical strategy is to complete heavier cleaning while you still feel comfortable and use lighter maintenance closer to the due date.",
  },
  {
    q: "Is professional cleaning worth it before a baby arrives?",
    a: "For many families, yes — especially if the home needs a deep clean, pregnancy fatigue is significant, or the family wants to reduce its workload before and immediately after delivery.",
  },
];

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 mb-6 pl-1">
    {items.map((item) => (
      <li key={item} className="flex gap-3 items-start text-lg">
        <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const CleaningDuringPregnancy = () => {
  const { seoHelmet } = useSEO({
    title: "Cleaning During Pregnancy: How to Prepare Your Home for Baby",
    description:
      "Learn practical ways to clean and prepare your home during pregnancy, including ventilation, product safety, deep-cleaning priorities, and a pre-baby checklist.",
    canonical: URL,
    ogType: "article",
    ogImage: HERO_IMAGE,
    preloadImage: HERO_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="cleaning during pregnancy, cleaning while pregnant, safe cleaning products during pregnancy, preparing house for baby, deep cleaning before baby arrives, nesting cleaning checklist, can you use bleach while pregnant, pre-baby cleaning checklist"
        />
      </Helmet>

      <ArticleSchema
        title="Cleaning During Pregnancy: A Safer, Lower-Stress Guide to Preparing Your Home for Baby"
        description="A practical, educational guide to cleaning during pregnancy and preparing your home before a baby arrives — product safety and ventilation, what to clean first, a pre-baby deep-cleaning checklist, the nesting phase, bleach questions, and when professional cleaning can help."
        url={URL}
        datePublished="2026-08-07"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Cleaning During Pregnancy", href: "/resources/cleaning-during-pregnancy-prepare-home-for-baby" },
        ]}
      />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Cleaning During Pregnancy" },
            ]}
          />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A calm, tidy nursery corner prepared for a new baby — crib, folded baby clothes, and soft natural daylight">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Family &amp; New Baby
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          Cleaning During Pregnancy: A Safer, Lower-Stress Guide to Preparing Your Home for Baby
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          A calmer way to get your home ready — without exhausting yourself.
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
            <p className="mb-6">Preparing for a baby changes the way you look at your home.</p>
            <p className="mb-6">
              Suddenly, the floor is not just a floor. It is where your baby may eventually crawl. The bedroom is not just
              another room — it may become a nursery, feeding space, changing area, or the place where a bassinet sits
              beside your bed.
            </p>
            <p className="mb-6">
              And during pregnancy, many parents begin asking new questions: Are my usual cleaning products okay to use?
              Should I avoid strong fumes? When should we deep clean? What actually needs to be cleaned before the baby
              comes? And do I really need to scrub every baseboard in the house?
            </p>
            <p className="mb-6">
              The good news is that preparing your home does not have to mean making it sterile or exhausting yourself. A
              better goal is a home that feels clean, manageable, well ventilated, and ready to support your family during
              the first demanding weeks after birth.
            </p>
            <p className="mb-8">
              This guide explains how to approach cleaning during pregnancy, which precautions matter, what to prioritize
              before your baby arrives, and when professional cleaning can make the process easier.
            </p>
          </FadeInSection>

          {/* ── Medical disclaimer ── */}
          <FadeInSection>
            <div className="rounded-2xl border border-border bg-secondary/40 p-5 md:p-6 mb-10 text-base md:text-lg text-muted-foreground">
              <strong className="text-foreground">Medical note:</strong> This article provides general educational
              information and is not a substitute for advice from your obstetrician, midwife, or other healthcare
              professional. If you have a high-risk pregnancy, asthma, chemical sensitivities, or questions about a
              particular product or exposure, ask your healthcare provider.
            </div>
          </FadeInSection>

          {/* ── Is it safe ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Is It Safe to Clean During Pregnancy?</h2>
            <p className="mb-4">
              For many people with uncomplicated pregnancies, ordinary household cleaning can remain part of normal life.
              But pregnancy is a good time to be more thoughtful about exposure, ventilation, physical strain, and product
              directions.
            </p>
            <p className="mb-4">
              <a href={MTB_CLEANERS} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">MotherToBaby</a>,
              a service of the nonprofit Organization of Teratology Information Specialists, notes that typical household
              use of several common cleaners is not expected to create increased pregnancy risks when products are used as
              directed. It also emphasizes practical precautions such as ventilation and avoiding unnecessary exposure.
            </p>
            <p className="mb-4">
              The U.S. Environmental Protection Agency also maintains its{" "}
              <a href={EPA} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">Safer Choice</a>{" "}
              program, which identifies products whose ingredients have been reviewed against EPA safety criteria. For
              households wanting to reduce exposure to certain chemicals, this can be one useful way to compare products.
            </p>
            <p className="mb-8 font-medium text-foreground">
              The simplest rule: use the least aggressive product that can safely do the job, follow the label, ventilate
              the space, and never improvise chemical mixtures.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">1. Ventilation matters</h3>
            <p className="mb-4">Cleaning products can release odors, sprays, or volatile compounds into indoor air. When possible:</p>
            <Bullets items={[
              "Open windows or doors.",
              "Run bathroom or kitchen exhaust fans.",
              "Avoid spending unnecessary time in a poorly ventilated room with strong fumes.",
              "Leave the room and get fresh air if a product causes dizziness, nausea, coughing, eye irritation, or breathing discomfort.",
            ]} />
            <p className="mb-8">
              Pregnancy can already make some people more sensitive to smells, so a cleaner that never bothered you before
              may suddenly feel overwhelming. You do not get extra cleaning points for suffering through the smell.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">2. Never mix cleaning chemicals</h3>
            <p className="mb-4">This rule matters whether you are pregnant or not.</p>
            <Bullets items={[
              "Never mix bleach with ammonia, acids, vinegar, or other household cleaners — dangerous gases can be produced by incompatible combinations.",
              "Use one product at a time and follow its label instructions.",
              "If a surface needs a second product, rinse or otherwise follow the manufacturer's directions before applying anything else.",
            ]} />

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">3. Read the label instead of assuming &ldquo;natural&rdquo; means safer</h3>
            <p className="mb-4">
              &ldquo;Natural,&rdquo; &ldquo;green,&rdquo; &ldquo;eco-friendly,&rdquo; and similar marketing terms do not
              automatically tell you whether a product is appropriate for a specific person, surface, or use. Look for:
            </p>
            <Bullets items={[
              "Clear ingredient information",
              "Usage instructions",
              "Required ventilation",
              "Contact-time instructions for disinfectants",
              "Warnings about skin or eye exposure",
              "EPA Safer Choice labeling when relevant",
            ]} />
            <p className="mb-8">
              If you are concerned about a particular ingredient, ask your healthcare provider or consult an evidence-based
              exposure resource such as{" "}
              <a href={MTB} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">MotherToBaby</a>.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">4. Use gloves and reduce direct exposure</h3>
            <p className="mb-8">
              Household gloves can reduce repeated skin contact with cleaning solutions. Avoid spraying cleaners toward your
              face — when a product can be applied to a cloth instead of dispersed broadly into the air, that may reduce
              unnecessary airborne mist. Always follow the manufacturer's instructions, because some products are designed
              for a specific application method.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">5. Know when to delegate</h3>
            <p className="mb-4">
              Pregnancy is not the ideal moment to prove that you can move a dresser, balance on a chair to clean a ceiling
              fan, or spend hours bent over scrubbing grout. Consider delegating tasks involving:
            </p>
            <Bullets items={[
              "Heavy lifting",
              "Climbing ladders or unstable stools",
              "Moving large furniture",
              "Long periods of kneeling or bending",
              "Strong chemical odors",
              "Mold or other contamination requiring specialized remediation",
              "Large-scale deep cleaning when fatigue is already significant",
            ]} />
            <p className="mb-8">If a task feels physically unsafe or unusually exhausting, it can wait or belong to someone else.</p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA
              headline="Ready to take deep cleaning off your pre-baby checklist?"
              subtext="Capital Clean Care can handle the labor-intensive work while your family focuses on getting ready for the baby. Serving Maryland, DC & Northern Virginia."
              ctaLabel="Get a Free Quote"
              ctaTo={QUOTE}
            />
          </FadeInSection>

          {/* ── What to clean before baby ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What Should You Clean Before the Baby Arrives?</h2>
            <p className="mb-8">
              A newborn does not need a museum-perfect house. Focus first on the spaces and surfaces that will affect
              everyday life after you come home.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Priority 1: Bedroom and baby sleep area</h3>
            <p className="mb-4">
              Whether the baby has a nursery or sleeps in your room initially, clear unnecessary clutter and make frequently
              used surfaces easy to wipe. Focus on floors, baseboards (if visibly dusty), window sills, nightstands,
              changing surfaces, shelving, door handles, light switches, and other dust-catching surfaces around the sleep
              area.
            </p>
            <p className="mb-8">
              The goal is not sterility. It is to reduce accumulated dust and create a practical, easy-to-maintain space.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Priority 2: Kitchen</h3>
            <p className="mb-4">
              The kitchen becomes surprisingly important after a baby arrives. Bottles, pump parts, snacks, quick meals, and
              endless cups of coffee tend to make this room work overtime. Before delivery, consider:
            </p>
            <Bullets items={[
              "Cleaning refrigerator shelves and discarding expired food",
              "Wiping cabinet handles",
              "Degreasing commonly touched kitchen surfaces",
              "Cleaning the microwave",
              "Cleaning counters and backsplash",
              "Mopping the floor",
              "Creating easy-access space for feeding supplies and pumping equipment",
            ]} />
            <p className="mb-8">A functional kitchen may be more valuable postpartum than a perfectly organized closet.</p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Priority 3: Bathroom</h3>
            <p className="mb-4">Give the bathroom a thorough but practical reset — toilet, sink and faucet, shower or tub, floor, mirrors, and frequently touched handles and switches.</p>
            <p className="mb-8">Then stock the basics so you are not running out for household supplies during the first days home.</p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Priority 4: Floors and dust</h3>
            <p className="mb-4">Dust collects on more than shelves. Before the baby arrives, consider vacuuming or cleaning:</p>
            <Bullets items={[
              "Rugs and carpets",
              "Hard floors",
              "Upholstered furniture",
              "Under accessible furniture",
              "Window sills",
              "Ceiling-fan blades, if someone can reach them safely",
              "Vents and return-air grilles when visibly dusty",
            ]} />
            <p className="mb-8">If you have pets, pay extra attention to hair and dander in the areas where the baby will spend the most time.</p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Priority 5: High-touch surfaces</h3>
            <p className="mb-4">You do not need to disinfect the entire house every day. Instead, routinely clean the surfaces hands touch constantly:</p>
            <Bullets items={[
              "Door handles",
              "Cabinet pulls",
              "Faucet handles",
              "Light switches",
              "Refrigerator handles",
              "Remote controls",
              "Frequently used tables and counters",
            ]} />
            <p className="mb-8">
              Cleaning removes dirt and many germs. Disinfection is a separate step that may be useful in specific
              circumstances, especially when someone is sick. Follow product labels carefully.
            </p>
          </FadeInSection>

          {/* ── Bleach ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What About Bleach During Pregnancy?</h2>
            <p className="mb-4">This is one of the questions expecting parents frequently ask online.</p>
            <p className="mb-4">
              MotherToBaby reports that chlorine and chlorinated disinfectants such as household bleach have not been shown
              to increase the risk of birth defects when used in typical household circumstances. That does not mean more
              bleach is better. If bleach is needed:
            </p>
            <Bullets items={[
              "Follow the product label.",
              "Use appropriate ventilation.",
              "Avoid breathing concentrated fumes.",
              "Protect skin and eyes as directed.",
              "Never mix bleach with ammonia, acids, vinegar, or other cleaners.",
            ]} />
            <p className="mb-8">
              For ordinary soil and routine household cleaning, soap, detergent, or another appropriate cleaner may be
              enough. Disinfection is not automatically necessary for every surface.
            </p>
          </FadeInSection>

          {/* ── Nesting ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">The &ldquo;Nesting&rdquo; Phase: Use the Energy Wisely</h2>
            <p className="mb-4">
              &ldquo;Nesting&rdquo; is the popular term for the urge some expecting parents feel to organize, clean, and
              prepare before the baby arrives. Online pregnancy communities show a recurring pattern: parents want the house
              deeply cleaned but may also be tired, physically uncomfortable, or unsure where to begin.
            </p>
            <p className="mb-4 font-medium text-foreground">
              That creates a useful rule: use nesting energy to make life easier — not to create a perfection contest.
            </p>
            <p className="mb-8">
              A clean refrigerator, fresh bathroom, vacuumed bedroom, organized feeding station, and manageable laundry
              system will probably help you more after delivery than spending an afternoon trying to make every baseboard
              look new.
            </p>
          </FadeInSection>

          {/* ── Timing ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">When Is the Best Time for a Pre-Baby Deep Cleaning?</h2>
            <p className="mb-4">
              There is no medically required week when every family must deep clean. From a practical standpoint, many
              families find it helpful to complete larger projects before the final stretch of pregnancy, then use lighter
              maintenance cleaning as the due date approaches. The exact timing depends on your pregnancy and provider's
              advice, your energy level, whether you are moving or setting up a nursery, other children, pets, work
              schedule, the size and condition of the home, and whether family or professional help is available.
            </p>
            <p className="mb-8">
              If you are hiring a professional cleaning company for a{" "}
              <Link to={DEEP} className="text-accent font-medium hover:underline">deep cleaning</Link> — or planning a{" "}
              <Link to={MOVE_IN} className="text-accent font-medium hover:underline">move-in clean</Link> for a new home —
              scheduling before the due date can reduce one more item on the family's last-minute list.
            </p>
          </FadeInSection>

          {/* ── Checklist cards ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Pre-Baby Deep Cleaning Checklist</h2>
            <p className="mb-8">Use this as a practical starting point rather than a demand to clean everything at once.</p>
            <div className="grid gap-6 sm:grid-cols-2 not-prose">
              {CHECKLIST.map((card) => (
                <div key={card.area} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4">{card.area}</h3>
                  <ul className="space-y-2.5">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-2.5 items-start text-base text-gray-700">
                        <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* ── Professional help ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 mt-12">When Professional House Cleaning Can Help During Pregnancy</h2>
            <p className="mb-4">
              Hiring a cleaning service is not about being unable to clean your own home. Sometimes it is simply a smart
              allocation of energy. Professional help can be especially useful when:
            </p>
            <Bullets items={[
              "Fatigue makes routine cleaning difficult",
              "Bending or prolonged scrubbing is uncomfortable",
              "The home needs a deeper reset before delivery",
              "You want help maintaining the home late in pregnancy",
              "You already have children or pets",
              "You want to return from the hospital to a freshly cleaned home",
            ]} />
            <p className="mb-8">
              A professional service can handle labor-intensive work while the family focuses on preparing for the baby —
              whether that is a one-time{" "}
              <Link to={DEEP} className="text-accent font-medium hover:underline">deep clean</Link> or{" "}
              <Link to={RECURRING} className="text-accent font-medium hover:underline">recurring house cleaning</Link>{" "}
              to keep things manageable in the final weeks.
            </p>
          </FadeInSection>

          {/* ── How CCC helps + CTA ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">How Capital Clean Care Can Help</h2>
            <p className="mb-6">
              Capital Clean Care can help expecting families create a cleaner, more manageable home before the baby arrives.
              Depending on the home and service selected, a pre-baby cleaning plan can focus on high-use rooms, accumulated
              dust, floors, bathrooms, kitchen surfaces, and other areas that are difficult or time-consuming to tackle late
              in pregnancy. When scheduling, tell the team that the household is preparing for a baby and discuss any product
              preferences, fragrance sensitivities, priority rooms, pets, or other concerns in advance.
            </p>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Take Deep Cleaning Off Your Pre-Baby Checklist</h2>
              <p className="text-primary-foreground/85 mb-6 leading-relaxed max-w-xl mx-auto text-lg">
                Contact Capital Clean Care to discuss a cleaning plan for your home and schedule service before your baby's
                arrival — no pressure, just a friendly conversation about what would help most.
              </p>
              <div className="flex flex-col items-center gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-10 py-6 rounded-full shadow-md w-full sm:w-auto" asChild>
                  <Link to={QUOTE}>Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 text-primary-foreground text-lg font-semibold hover:text-accent transition-colors">
                  <Phone className="h-5 w-5" /> {PHONE}
                </a>
                <Link to={CONTACT} className="text-primary-foreground/80 text-sm underline hover:text-primary-foreground">Or send us a message</Link>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <AuthorBio />
          </FadeInSection>

          {/* ── FAQ ── */}
          <FadeInSection>
            <div className="mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
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

      <RelatedPosts currentSlug="cleaning-during-pregnancy-prepare-home-for-baby" />
      <StickyCTA />
    </Layout>
  );
};

export default CleaningDuringPregnancy;
