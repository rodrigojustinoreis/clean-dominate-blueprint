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

const HERO_IMAGE = "/images/blog/cleaning-during-pregnancy-hero.webp";
const INLINE_IMAGE = "/images/blog/pre-baby-cleaning-checklist.webp";
const URL = "https://capitalcleancare.com/resources/cleaning-during-pregnancy-prepare-home-for-baby";
const HOUSE = "/services/house-cleaning";
const DEEP = "/services/deep-cleaning";
const QUOTE = "/#quote";
const CONTACT = "/contact";
const CDC_BLEACH = "https://www.cdc.gov/hygiene/about/cleaning-and-disinfecting-with-bleach.html";
const MTB = "https://mothertobaby.org/";
const MTB_CLEANERS = "https://mothertobaby.org/baby-blog/whats-the-dirt-on-household-cleaners-when-pregnant/";
const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const CHECKLIST: { area: string; items: string[] }[] = [
  {
    area: "Bedroom and baby area",
    items: [
      "Dust reachable surfaces and window sills",
      "Vacuum rugs or clean hard floors",
      "Wash essential bedding and washable fabrics",
      "Clear walkways and reduce unnecessary clutter",
      "Organize frequently used baby items",
    ],
  },
  {
    area: "Kitchen",
    items: [
      "Clean counters, sink, and faucet",
      "Wipe appliance and cabinet handles",
      "Clean refrigerator shelves and discard expired food",
      "Create space for feeding supplies",
      "Restock easy meals and household essentials",
    ],
  },
  {
    area: "Bathroom",
    items: [
      "Clean toilet, sink, shower, or tub",
      "Wipe handles and switches",
      "Clean the floor",
      "Wash towels and bath mats",
      "Restock soap, toilet paper, and personal-care items",
    ],
  },
  {
    area: "Floors and living areas",
    items: [
      "Vacuum carpets, rugs, and accessible upholstery",
      "Clean hard floors",
      "Address visible dust and pet hair",
      "Wipe frequently touched surfaces",
      "Empty trash and recycling",
    ],
  },
  {
    area: "Before finishing",
    items: [
      "Catch up on essential laundry",
      "Store cleaning products securely",
      "Check that walkways are clear",
      "Delegate any remaining heavy or exhausting work",
      "Leave optional projects for another time",
    ],
  },
];

// The visible FAQ and the FAQPage JSON-LD are both rendered from this one array,
// so their text always matches (a same-source-of-truth requirement of the build pack).
const faqs = [
  {
    q: "What should I clean before my baby arrives?",
    a: "Prioritize the bedroom or baby sleep area, kitchen, bathroom, floors, accumulated dust, and frequently touched surfaces. Catch up on laundry and household essentials as well. The goal is a clean, manageable home rather than a completely sterile environment.",
  },
  {
    q: "When should I deep clean my house before having a baby?",
    a: "There is no universal medically required week. From a practical standpoint, larger cleaning projects can be completed while the expecting parent still feels comfortable, followed by lighter maintenance closer to the due date. Individual pregnancy restrictions should be discussed with a healthcare provider.",
  },
  {
    q: "Can you clean your house while pregnant?",
    a: "Many people with uncomplicated pregnancies can continue ordinary household cleaning. Follow product instructions, ventilate appropriately, avoid unnecessary chemical exposure, and avoid physically unsafe tasks such as unstable climbing or heavy lifting. Individual restrictions should come from a healthcare provider.",
  },
  {
    q: "Is bleach safe to use during pregnancy?",
    a: "MotherToBaby reports that typical household exposure to chlorine and chlorinated disinfectants such as bleach has not been shown to increase birth-defect risk. Bleach should still be used according to its label, with appropriate ventilation, and must never be mixed with ammonia, acids, vinegar, or other cleaners.",
  },
  {
    q: "Do I need to disinfect my entire house before bringing a newborn home?",
    a: "Generally, a newborn does not require every household surface to be disinfected. Routine cleaning of important rooms and frequently touched surfaces is a more practical approach. Disinfection can be appropriate in specific situations, such as illness, and products should always be used according to their labels.",
  },
  {
    q: "Should I hire a cleaner before my baby arrives?",
    a: "Professional cleaning can be useful when fatigue, discomfort, limited time, or physically demanding cleaning makes preparing the home difficult. A pre-baby deep clean can focus on labor-intensive areas while the family handles baby preparation and lighter maintenance.",
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

// Contextual illustration that supports the text of the section it sits in.
// The campaign carousel slides carry their own caption text, so `caption` is optional.
const Illo = ({
  src,
  alt,
  caption,
  width,
  height,
  narrow,
}: {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  narrow?: boolean;
}) => (
  <figure className={`my-10 not-prose ${narrow ? "max-w-md" : "max-w-xl"} mx-auto`}>
    <img
      src={src}
      alt={alt}
      className="rounded-2xl shadow-md w-full h-auto"
      loading="lazy"
      decoding="async"
      width={width}
      height={height}
    />
    {caption ? <figcaption className="text-center text-sm text-muted-foreground mt-3">{caption}</figcaption> : null}
  </figure>
);

const CleaningDuringPregnancy = () => {
  const { seoHelmet } = useSEO({
    title: "Cleaning During Pregnancy: Prepare for Baby",
    description:
      "A practical guide to cleaning during pregnancy, including product precautions, priority rooms, tasks to delegate, and a pre-baby checklist.",
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
          content="cleaning during pregnancy, pre-baby cleaning checklist, cleaning house while pregnant, deep cleaning before baby, safe cleaning products during pregnancy, can you use bleach while pregnant, preparing house for baby, nesting cleaning checklist"
        />
      </Helmet>

      <ArticleSchema
        title="Cleaning During Pregnancy: How to Prepare Your Home for Baby"
        description="Create a clean, manageable home with practical product precautions, room priorities, delegation guidance, and a complete pre-baby checklist."
        url={URL}
        datePublished="2026-08-07"
        dateModified="2026-08-16"
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

      <BlogHero
        src={HERO_IMAGE}
        alt="Capital Clean Care professional vacuuming while an expecting parent organizes baby clothing"
      >
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Family &amp; New Baby
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          Cleaning During Pregnancy: How to Prepare Your Home for Baby
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          A calmer way to get your home ready — without exhausting yourself.
        </p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">
          By Rodrigo Reis, Owner · Serving MD, DC &amp; Northern Virginia · 8 min read
        </p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <Link to={QUOTE}>Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-xl text-gray-700 leading-relaxed">

          {/* ── Intro ── */}
          <FadeInSection>
            <p className="mb-6">
              Preparing for a baby can make every room feel suddenly important. The floors look dustier. The kitchen seems
              too crowded. The bathroom needs attention. A simple nesting list can quickly turn into a whole-house project.
            </p>
            <p className="mb-6">
              The good news is that cleaning during pregnancy does not have to mean making your home perfectly sterile. A
              more useful goal is to create a clean, comfortable, manageable space for the first weeks after your baby
              arrives.
            </p>
            <p className="mb-8">
              This guide explains which rooms to prioritize, how to approach household cleaning products, what physically
              demanding work may be better to delegate, and how to build a realistic pre-baby cleaning checklist. It
              provides general information — not individualized medical advice. Discuss pregnancy restrictions, symptoms, or
              exposure concerns with your healthcare provider.
            </p>
          </FadeInSection>

          {/* ── Manageable home ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Start With a Manageable Home, Not a Perfect One</h2>
            <p className="mb-4">
              A newborn does not require every household surface to be disinfected from top to bottom. For most homes,
              routine cleaning in the rooms the family uses most is a more practical starting point.
            </p>
            <p className="mb-4">
              Cleaning removes dust, crumbs, spills, and visible soil. Disinfection is a separate step intended for
              particular situations and surfaces. It may be appropriate when someone is ill or when a product label
              specifically directs its use, but it does not need to become the default treatment for every wall, floor, or
              piece of furniture.
            </p>
            <p className="mb-4">Before starting, divide your list into three groups:</p>
            <ol className="space-y-3 mb-6 pl-6 list-decimal marker:text-accent marker:font-bold">
              <li><strong className="text-foreground">Daily-use spaces:</strong> bedroom or nursery, kitchen, bathroom, and main living area.</li>
              <li><strong className="text-foreground">Basic reset tasks:</strong> floors, accumulated dust, high-touch surfaces, laundry, trash, and household supplies.</li>
              <li><strong className="text-foreground">Jobs to delegate:</strong> heavy lifting, moving furniture, unstable climbing, and long or exhausting deep-cleaning projects.</li>
            </ol>
            <p className="mb-8">
              This approach gives the household a clear finish line. It also leaves room for lighter maintenance closer to
              the due date.
            </p>
            <Illo
              src="/images/blog/pregnancy-prepare-home.webp"
              alt="A calm expecting mother arranging folded baby clothes in a bright, freshly cleaned nursery"
              caption="The goal is a clean, comfortable, manageable home — not a perfectly sterile one."
              width={1400}
              height={933}
            />
          </FadeInSection>

          {/* ── Products / precautions ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Cleaning Products During Pregnancy: Practical Precautions</h2>
            <p className="mb-8">
              Household cleaning products vary widely, so there is no responsible way to label every cleaner as universally
              appropriate for every pregnancy. Start with the product label. Use the product only for its intended purpose,
              follow dilution and surface instructions, and use any protective equipment specified by the manufacturer.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Use one product at a time</h3>
            <p className="mb-4">
              Never improvise by mixing household cleaning chemicals. The{" "}
              <a href={CDC_BLEACH} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">Centers for Disease Control and Prevention</a>{" "}
              advises households never to mix bleach or disinfectants with other cleaners. Mixing bleach with ammonia,
              acids, vinegar, or other products can release dangerous vapors.
            </p>
            <p className="mb-8">
              Keep products in their original containers, close them after use, and store them away from children and pets.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Ventilate as directed</h3>
            <p className="mb-4">
              If the product label recommends ventilation, open a window or door and allow fresh air to move through the
              room. Avoid using more product than directed. A stronger smell does not mean a surface is cleaner.
            </p>
            <p className="mb-8">
              If a product causes irritation, dizziness, breathing difficulty, or another concerning symptom, stop using it,
              move away from the exposure, and seek appropriate medical guidance. For questions about a specific pregnancy
              exposure, contact your healthcare provider or a specialist service such as{" "}
              <a href={MTB} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">MotherToBaby</a>.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">What about bleach?</h3>
            <p className="mb-4">
              <a href={MTB_CLEANERS} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">MotherToBaby reports</a>{" "}
              that chlorine and chlorinated disinfectants have not been shown to increase the risk of birth defects. That
              statement should not be treated as a blanket guarantee for every product, concentration, exposure, or
              individual pregnancy.
            </p>
            <p className="mb-8">
              If bleach is used, follow its label, provide appropriate ventilation, and never combine it with other
              cleaners. Questions about a specific exposure belong with a healthcare provider or poison-control
              professional.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA
              headline="Ready to take deep cleaning off your pre-baby checklist?"
              subtext="Capital Clean Care can handle the labor-intensive work while your family focuses on getting ready for the baby. Serving Maryland, DC & Northern Virginia."
              ctaLabel="Get My Free Quote"
              ctaTo={QUOTE}
            />
          </FadeInSection>

          {/* ── What to clean before baby ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What to Clean Before Your Baby Arrives</h2>
            <p className="mb-8">
              Focus first on the spaces that will support sleeping, feeding, bathing, laundry, and everyday family routines.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">1. Bedroom or baby sleep area</h3>
            <p className="mb-4">
              Whether the baby will initially sleep in your room or in a separate nursery, give the area a practical reset:
            </p>
            <Bullets items={[
              "Dust reachable shelves, window sills, and furniture.",
              "Vacuum rugs and clean hard floors.",
              "Remove unnecessary clutter from walkways.",
              "Wash bedding and washable fabrics according to their care labels.",
              "Organize frequently needed items where adults can reach them comfortably.",
            ]} />
            <p className="mb-8">
              Avoid placing cleaning products or supplies near the baby’s sleep area. Follow current safe-sleep guidance
              from your healthcare provider or pediatrician when arranging the sleep space.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">2. Kitchen</h3>
            <p className="mb-4">
              The kitchen may soon hold bottles, pump parts, feeding supplies, medication, and quick meals for tired
              adults. Make the room easier to use rather than trying to make it look untouched.
            </p>
            <Bullets items={[
              "Clean counters, sink, faucet, and appliance handles.",
              "Wipe refrigerator shelves and discard expired food.",
              "Create a defined area for feeding supplies.",
              "Clean the microwave and frequently used small appliances.",
              "Restock simple meals, snacks, paper goods, and dishwashing supplies.",
              "Keep household cleaners separated from food and feeding items.",
            ]} />

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">3. Bathroom</h3>
            <p className="mb-4">A bathroom reset can reduce the amount of work waiting after delivery:</p>
            <Bullets items={[
              "Clean the toilet, sink, faucet, shower, or tub.",
              "Wipe frequently touched handles and switches.",
              "Clean the floor and empty the trash.",
              "Wash towels and bath mats.",
              "Restock toilet paper, soap, and personal-care essentials.",
            ]} />
            <p className="mb-8">
              If scrubbing the tub or shower requires prolonged bending, an uncomfortable posture, or significant effort,
              place it on the delegation list.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">4. Floors, rugs, and accumulated dust</h3>
            <p className="mb-4">
              Floors collect soil, crumbs, dust, and pet hair. A whole-home floor reset can make later maintenance simpler.
            </p>
            <Bullets items={[
              "Vacuum carpets, area rugs, and accessible upholstery.",
              "Clean hard floors according to the flooring manufacturer’s instructions.",
              "Address visible dust on baseboards and reachable ledges.",
              "Pay attention to pet hair in the rooms where the family spends the most time.",
              "Move only lightweight items that can be handled comfortably.",
            ]} />
            <p className="mb-8">
              Large rugs, heavy furniture, and appliances should not be moved by someone who has been advised to avoid heavy
              lifting.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">5. Frequently touched surfaces</h3>
            <p className="mb-4">
              High-touch surfaces are easy to overlook because they rarely look dirty. Add a simple pass through the home
              for door handles, light switches, cabinet and drawer pulls, faucet handles, stair rails, remote controls, and
              frequently used counters.
            </p>
            <p className="mb-8">
              Follow the surface and product instructions. Routine cleaning may be sufficient unless there is a specific
              reason to disinfect.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">6. Laundry and household basics</h3>
            <p className="mb-4">
              The most helpful preparation may be the ordinary work that prevents small problems during the first days home:
            </p>
            <Bullets items={[
              "Catch up on essential laundry.",
              "Wash baby clothes and linens according to their care instructions.",
              "Empty household trash and recycling.",
              "Replace vacuum filters or bags when needed.",
              "Restock soap, paper goods, trash bags, and laundry supplies.",
              "Clear safe walking paths through bedrooms and living areas.",
            ]} />
            <p className="mb-8">
              The objective is not to complete every optional organizing project. Prioritize the basics that make daily
              routines easier.
            </p>
          </FadeInSection>

          {/* ── Delegate ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Cleaning Tasks That May Be Better to Delegate</h2>
            <p className="mb-4">
              Pregnancy experiences and medical restrictions differ. A task that feels comfortable for one person may be
              inappropriate or exhausting for another. Follow the restrictions provided by your healthcare team.
            </p>
            <p className="mb-4">From a practical standpoint, consider delegating work that involves:</p>
            <Bullets items={[
              "Moving furniture, mattresses, or heavy equipment",
              "Carrying heavy loads or full buckets",
              "Climbing ladders or using unstable stools",
              "Prolonged bending, kneeling, or overhead reaching",
              "Strong odors or products that cause irritation",
              "Mold, pest waste, renovation dust, or other specialized contamination",
              "Hours of continuous scrubbing or whole-home deep cleaning",
            ]} />
            <p className="mb-8">
              A partner, family member, friend, or professional cleaning team can handle labor-intensive work while the
              expecting parent focuses on lighter organization and baby preparation.
            </p>
            <Illo
              src="/images/blog/pregnancy-delegate-cleaning.webp"
              alt="A professional cleaner in a navy uniform vacuuming while an expecting parent folds baby laundry"
              caption="A professional team can handle the labor-intensive work while you prepare for the baby."
              width={1400}
              height={933}
            />
          </FadeInSection>

          {/* ── Timing ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">When Should You Deep Clean Before the Baby Comes?</h2>
            <p className="mb-4">
              There is no universal medically required week for deep cleaning a home before delivery. A practical schedule
              is to complete larger projects while the expecting parent still feels comfortable, then use lighter routine
              maintenance as the due date approaches.
            </p>
            <p className="mb-4">One possible timeline is:</p>
            <Bullets items={[
              "Several weeks before the due date: complete bathrooms, kitchen details, floors, accumulated dust, and other demanding work.",
              "One to two weeks before: wash essential laundry, refresh high-use rooms, remove trash, and restock supplies.",
              "Closer to the due date: limit the plan to light maintenance and tasks that remain comfortable.",
            ]} />
            <p className="mb-8">
              Pregnancy complications, activity restrictions, fatigue, pain, or other symptoms can change that timeline.
              Follow individualized medical advice rather than a generic schedule. If you are scheduling a professional{" "}
              <Link to={DEEP} className="text-accent font-medium hover:underline">deep cleaning</Link>, booking before the
              final stretch can remove one more item from the family’s last-minute list.
            </p>
          </FadeInSection>

          {/* ── Checklist ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Complete Pre-Baby Cleaning Checklist</h2>
            <p className="mb-8">Use this checklist as a menu, not a requirement to complete every item personally.</p>
            <figure className="mb-10 not-prose">
              <img
                src={INLINE_IMAGE}
                srcSet={`${INLINE_IMAGE.replace(/\.webp$/, "-640.webp")} 640w, ${INLINE_IMAGE} 1200w`}
                sizes="(min-width: 768px) 640px, 100vw"
                alt="Expecting couple reviewing a practical pre-baby home cleaning checklist in a bright nursery"
                className="rounded-2xl shadow-lg w-full max-w-md mx-auto h-auto"
                loading="lazy"
                decoding="async"
                width={1200}
                height={1500}
              />
            </figure>
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

          {/* ── Hire a cleaner ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 mt-12">Should You Hire a Cleaner Before Your Baby Arrives?</h2>
            <p className="mb-4">
              Professional cleaning can be useful when time, fatigue, discomfort, or physical restrictions make a whole-home
              reset difficult. It is not a requirement, and it does not need to replace every household task.
            </p>
            <p className="mb-4">
              A pre-baby cleaning service can focus on labor-intensive areas such as bathrooms, kitchen details, floors,
              dust, and high-touch surfaces. The family can then handle personal organizing, baby supplies, and lighter
              maintenance. When choosing a company, ask what is included, which products the team uses, whether special
              product requests are possible, and how the company handles ventilation, pets, access, and quality control.
            </p>
            <p className="mb-8">
              Capital Clean Care provides{" "}
              <Link to={HOUSE} className="text-accent font-medium hover:underline">professional house cleaning</Link> and{" "}
              <Link to={DEEP} className="text-accent font-medium hover:underline">deep-cleaning services</Link> across
              Maryland, Washington DC, and Northern Virginia. Our trained team can handle the demanding cleaning work while
              your family focuses on preparing for the baby.
            </p>
          </FadeInSection>

          {/* ── FAQ ── */}
          <FadeInSection>
            <div className="mt-4">
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

          {/* ── Closing + CTA ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 mt-14">Prepare the Home Without Exhausting Yourself</h2>
            <p className="mb-6">
              Preparing for a baby should make the first weeks at home easier — not create another impossible standard.
              Focus on the rooms your family will use, follow cleaning-product directions, ventilate when needed, and
              delegate physically demanding work.
            </p>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Take Deep Cleaning Off Your Pre-Baby List</h2>
              <p className="text-primary-foreground/85 mb-6 leading-relaxed max-w-xl mx-auto text-lg">
                If you would like to remove deep cleaning from your pre-baby list, Capital Clean Care serves families
                throughout Maryland, Washington DC, and Northern Virginia. Request a free quote and tell us which rooms or
                tasks matter most to your household.
              </p>
              <div className="flex flex-col items-center gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-10 py-6 rounded-full shadow-md w-full sm:w-auto" asChild>
                  <Link to={QUOTE}>Get My Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 text-primary-foreground text-lg font-semibold hover:text-accent transition-colors">
                  <Phone className="h-5 w-5" /> {PHONE}
                </a>
                <Link to={CONTACT} className="text-primary-foreground/80 text-sm underline hover:text-primary-foreground">Or send us a message</Link>
              </div>
            </div>
          </FadeInSection>

          {/* ── Medical disclaimer (end) ── */}
          <FadeInSection>
            <div className="rounded-2xl border border-border bg-secondary/40 p-5 md:p-6 mt-10 text-base md:text-lg text-muted-foreground italic">
              This article provides general educational information and is not medical advice. Consult your healthcare
              provider about pregnancy restrictions, symptoms, or specific exposure concerns.
            </div>
          </FadeInSection>

          <FadeInSection>
            <AuthorBio />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="cleaning-during-pregnancy-prepare-home-for-baby" />
      <StickyCTA />
    </Layout>
  );
};

export default CleaningDuringPregnancy;
