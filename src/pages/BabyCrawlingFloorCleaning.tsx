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

const HERO_IMAGE = "/images/resources/baby-crawling/hero-family-official-uniform-v2.webp";
const INLINE_MOP = "/images/resources/baby-crawling/professional-mopping.webp";
const INLINE_PETHAIR = "/images/resources/baby-crawling/pet-hair-crumbs-crawling-zone.webp";
const INLINE_LABEL = "/images/resources/baby-crawling/reading-cleaner-label-official-uniform.webp";
const URL = "https://capitalcleancare.com/resources/baby-crawling-floor-cleaning-guide";

// Internal links (all resolve to real routes)
const HOUSE = "/services/house-cleaning";
const DEEP = "/services/deep-cleaning";
const RECURRING = "/services/recurring-cleaning";
const ECO = "/services/eco-friendly-cleaning";
const QUOTE = "/#quote";
const PREGNANCY = "/resources/cleaning-during-pregnancy-prepare-home-for-baby";
const NEWBORN = "/resources/bringing-baby-home-cleaning-guide";
const HARDWOOD = "/resources/how-to-clean-hardwood-floors-naturally";
const TODDLER = "/resources/cleaning-schedule-working-parents-toddlers";

// External authority sources (verified live)
const CDC_HOME = "https://www.cdc.gov/hygiene/about/when-and-how-to-clean-and-disinfect-your-home.html";
const EPA_SAFER = "https://www.epa.gov/saferchoice/products";
const EPA_DISINFECTANTS = "https://www.epa.gov/pesticide-registration/selected-epa-registered-disinfectants";
const AAP_CHILDPROOF = "https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Childproofing-Your-Home.aspx";
const AAP_GREEN = "https://www.healthychildren.org/English/safety-prevention/all-around/Pages/green-cleaning-choosing-products-that-are-safer-for-your-family.aspx";
const POISON_CONTROL = "https://www.poison.org/";

const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const InlineArticleImage = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
  <figure className="my-8 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm">
    <img
      src={src}
      alt={alt}
      width={1400}
      height={933}
      loading="lazy"
      decoding="async"
      className="aspect-[3/2] w-full object-cover"
    />
    <figcaption className="px-5 py-3 text-sm leading-relaxed text-gray-600">{caption}</figcaption>
  </figure>
);

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

// Floor-type frequency guidance (rendered as an accessible, horizontally scrollable table).
const FLOOR_ROWS: { type: string; everyday: string; deep: string; note: string }[] = [
  {
    type: "Sealed hardwood",
    everyday: "Dry dust-mop or sweep the busiest paths",
    deep: "Damp-mop 1–2× a week with a well-wrung mop",
    note: "Use a hardwood-specific cleaner; avoid excess water and steam unless the manufacturer allows it.",
  },
  {
    type: "Laminate",
    everyday: "Sweep or dry-mop crumbs",
    deep: "Lightly damp-mop about once a week",
    note: "Never soak it—standing water can swell the boards. Follow the laminate maker's cleaner.",
  },
  {
    type: "Vinyl / LVP",
    everyday: "Sweep or vacuum debris",
    deep: "Damp-mop 1–2× a week",
    note: "Tolerates more moisture; use a pH-neutral cleaner per the product label.",
  },
  {
    type: "Tile",
    everyday: "Sweep or vacuum",
    deep: "Mop 1–2× a week; address grout as needed",
    note: "Rinse if the label requires it, and keep the baby off the floor until it is dry.",
  },
  {
    type: "Carpet & rugs",
    everyday: "Spot-clean spills promptly",
    deep: "Vacuum play areas often; deep-clean periodically",
    note: "Let treated areas dry fully; follow the carpet or product instructions.",
  },
];

// The visible FAQ and the FAQPage JSON-LD are both rendered from this one array,
// so their text always matches (a same-source-of-truth requirement of the build pack).
const faqs = [
  {
    q: "How often should you mop floors when you have a crawling baby?",
    a: "There is no single required schedule. Many families do a quick daily pass on the busiest paths and a more thorough mop a few times a week. Adjust for pets, shoes-off habits, spills, and your floor manufacturer's instructions.",
  },
  {
    q: "What is a baby-safe floor cleaner?",
    a: "\"Baby-safe\" is a marketing phrase, not a guarantee. Choose a product made for your floor type, follow the label, ventilate, use only the amount directed, and store it out of reach. Look for the EPA Safer Choice label, and never treat \"natural\" or \"non-toxic\" as an absolute assurance.",
  },
  {
    q: "Do you need to disinfect floors every day for a crawling baby?",
    a: "Usually no. The CDC says routine cleaning is enough in most household situations. Disinfecting is a separate step for specific cases—illness or contamination—using an EPA-registered product per its label. Clean first, and follow individualized advice from your pediatrician.",
  },
  {
    q: "How long should a baby stay off a freshly cleaned floor?",
    a: "Keep the baby off the floor until it is fully dry and any label-required rinse is finished. Wet floors are a slip and exposure risk. Ventilate the room and let cleaners dry or be rinsed before the baby crawls there again.",
  },
  {
    q: "How do you handle pet hair on floors with a crawling baby?",
    a: "Vacuum high-use areas often instead of repeatedly deep cleaning the whole house. Focus on the rooms where the baby plays, entryways, and spots where pet hair collects. Wash your hands after cleaning pet areas, and keep pet bowls and litter away from crawling space.",
  },
  {
    q: "How often should you clean different floor types?",
    a: "It varies. Sealed hardwood and laminate usually need light, damp cleaning; vinyl and tile tolerate more frequent mopping; carpet and rugs need regular vacuuming plus periodic deeper cleaning. Always follow your flooring manufacturer's instructions to avoid damage.",
  },
  {
    q: "Is recurring house cleaning worth it once the baby is crawling?",
    a: "For many families, yes. Recurring cleaning keeps floors, bathrooms, and high-touch surfaces consistently maintained so parents get time back for rest and for the baby. It does not replace daily tidying or medical care—it removes the heavy, repetitive work.",
  },
  {
    q: "Can you use a robot vacuum around a crawling baby?",
    a: "It can help with routine maintenance, but run it while the baby is in another safe, supervised area rather than crawling next to it. Keep the dock, cords, and small parts out of reach, and maintain the unit so it actually picks up debris. A robot does not replace prompt spill cleanup or the approved wet cleaning your floors need.",
  },
  {
    q: "How should you clean a baby play mat?",
    a: "Shake off or vacuum loose debris, then wipe spills and soil with a cleaner the manufacturer approves for that material. Rinse if the label says to, and let the mat dry completely before the baby is back on it. Do not assume a play mat tolerates disinfectant—follow the maker's directions to avoid damage and residue.",
  },
  {
    q: "Are vinegar or steam mops safe for floors with a crawling baby?",
    a: "Not universally. Vinegar and steam can damage hardwood, laminate, stone, and some finishes, and neither is a guaranteed disinfectant. Match the method to your floor type and follow the manufacturer's instructions. Whatever you use, keep the baby off the floor until it is dry, and store any products out of reach.",
  },
];

const BabyCrawlingFloorCleaning = () => {
  const { seoHelmet } = useSEO({
    title: "Mopping Floors With a Crawling Baby | Capital Clean Care",
    description:
      "How often should you mop with a crawling baby? Compare floor types, safer product labels, pets, play mats, and realistic cleaning help.",
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
          content="how often should you mop your floors, baby safe floor cleaner, baby safe cleaning products, crawling baby floor cleaning, how often to mop floors, baby safe disinfectant, cleaning service for new parents"
        />
      </Helmet>

      <ArticleSchema
        title="Baby Starts Crawling: How Often Should You Mop Your Floors—and Which Products Are Baby-Safe?"
        description="A practical guide to cleaning floors once your baby is crawling: how often to mop by floor type, how to choose a baby-safe cleaner by reading the label, cleaning vs. disinfecting, and when recurring cleaning helps."
        url={URL}
        datePublished="2026-08-20"
        dateModified="2026-08-20"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Baby Crawling Floor Cleaning Guide", href: "/resources/baby-crawling-floor-cleaning-guide" },
        ]}
      />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Baby Crawling Floor Cleaning Guide" },
            ]}
          />
        </div>
      </div>

      <BlogHero
        src={HERO_IMAGE}
        alt="A smiling mother sits on a clean hardwood floor as her baby crawls toward her, while a Capital Clean Care team member in the navy company uniform mops in the background"
      >
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Family &amp; New Baby
        </span>
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
          Baby Starts Crawling: How Often Should You Mop Your Floors—and Which Products Are Baby-Safe?
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          A practical floor-cleaning routine for the crawling stage—how often to mop by floor type, and how to pick a safer cleaner.
        </p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">
          By Rodrigo Reis, Owner · Serving MD, DC &amp; Northern Virginia · 9 min read
        </p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <Link to={QUOTE}>Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-xl text-gray-700 leading-relaxed">

          {/* ── Direct answer (AEO) ── */}
          <FadeInSection>
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5 md:p-6 mb-8">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                <strong className="font-semibold">Quick answer:</strong> How often should you mop your floors once your baby
                starts crawling? There is no universal schedule. A practical routine is a quick daily pass on the busiest
                paths and a thorough mop a few times a week—adjusted for floor type, pets, spills, shoes, and visible soil.
                Clean first, follow every product and floor label, and disinfect only when it is truly needed.
              </p>
            </div>
            <p className="mb-6">
              When your baby learns to crawl, the floor stops being just a floor. It becomes the surface your baby moves
              across, touches, and puts their hands on before those hands go to the mouth. That is why the crawling stage is
              a natural time to rethink how—and how often—you clean your floors.
            </p>
            <p className="mb-8">
              The goal is not a sterile home. It is a clean, manageable floor routine that fits real life with a baby. This
              guide covers how often to clean by floor type, how to choose a safer cleaner by reading the label, the
              difference between cleaning and disinfecting, and when handing the heavy work to a professional makes sense. It
              is general household information—not medical advice. Ask your pediatrician about your baby's individual needs.
              If you're in Montgomery County, Maryland, Washington DC, or Northern Virginia, Capital Clean Care can handle the
              floors while your family focuses on the baby.
            </p>
          </FadeInSection>

          {/* ── What changes ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What Changes When Your Baby Starts Crawling?</h2>
            <p className="mb-4">
              Before crawling, a baby spends most of the day held, in a bassinet, or on a blanket. Once they are mobile, they
              explore the floor directly—palms down, often heading straight for the spot you just wiped. Hand-to-mouth
              behavior is normal at this age, so the floor effectively becomes a high-touch surface.
            </p>
            <p className="mb-4">That shifts the priorities:</p>
            <Bullets items={[
              "Crumbs, spills, and small objects matter more because they end up in little hands.",
              "The paths your family walks most collect tracked-in soil and pet hair.",
              "Cleaning products need to be chosen and stored with a curious, mobile baby in mind.",
              "Low surfaces—not just floors—come within a crawler's reach.",
            ]} />
            <p className="mb-8">
              If you are earlier in the journey, our{" "}
              <Link to={PREGNANCY} className="text-accent font-medium hover:underline">cleaning during pregnancy guide</Link>{" "}
              and{" "}
              <Link to={NEWBORN} className="text-accent font-medium hover:underline">bringing baby home guide</Link>{" "}
              cover the earlier stages. This article picks up once your baby is on the move.
            </p>
          </FadeInSection>

          {/* ── Cleaning vs sanitizing vs disinfecting ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Cleaning vs. Sanitizing vs. Disinfecting</h2>
            <p className="mb-4">These three words are often used interchangeably, but they are different tasks:</p>
            <Bullets items={[
              "Cleaning removes dirt, crumbs, and impurities using soap or detergent, water, and physical action. It is the everyday step.",
              "Sanitizing reduces germs on a surface to a level considered safe by public-health standards.",
              "Disinfecting uses a product intended to kill germs on a surface after it has been cleaned.",
            ]} />
            <p className="mb-8">
              The{" "}
              <a href={CDC_HOME} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">CDC notes that routine cleaning is enough in most household situations</a>.
              For daily floor care with a crawling baby, cleaning first—and cleaning consistently—usually matters more than
              reaching for a disinfectant.
            </p>
          </FadeInSection>

          {/* ── How often to mop (primary) ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">How Often Should You Mop Your Floors?</h2>
            <p className="mb-4">
              There is no single correct number. How often you mop depends on your floor type, foot traffic, whether the
              household is shoes-off, pets, and how much the baby is on the floor. A realistic pattern for most homes is a
              light daily reset plus a deeper clean a few times a week.
            </p>
            <p className="mb-4 font-semibold text-foreground">Try a five-minute daily floor reset:</p>
            <ol className="space-y-3 mb-6 pl-6 list-decimal marker:text-accent marker:font-bold">
              <li className="text-foreground"><strong>Do a quick sweep or dry dust-mop</strong> of the main crawling and walking paths.</li>
              <li className="text-foreground"><strong>Wipe up visible spills</strong> right away, before they spread or dry.</li>
              <li className="text-foreground"><strong>Pick up small objects and crumbs</strong> within the baby's reach.</li>
              <li className="text-foreground"><strong>Spot-mop one high-use area</strong> if it needs it.</li>
              <li className="text-foreground"><strong>Reset one clear, safe path</strong> through the room the baby uses most.</li>
            </ol>
            <p className="mb-8">
              If the baby needs you halfway through, stop. A short routine done most days protects the floor better than an
              ambitious plan that never happens.
            </p>
            <InlineArticleImage
              src={INLINE_MOP}
              alt="A Capital Clean Care team member damp-mopping a hardwood floor in a bright, uncluttered room"
              caption="A quick daily pass plus a thorough mop a few times a week keeps crawling-space floors manageable without over-doing it."
            />
          </FadeInSection>

          {/* ── Where the mess comes from ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Where the Mess Actually Comes From</h2>
            <p className="mb-4">
              Floors rarely get dirty on their own. Targeting the real sources keeps the routine short:
            </p>
            <Bullets items={[
              "Crumbs and food from feeding, snacks, and older siblings.",
              "Spills—milk, water, and everyday drips—that attract more soil if left.",
              "Pet hair and dander, especially in the rooms where the baby plays.",
              "Shoes and tracked-in soil from entryways and visitors.",
              "Higher activity from guests, deliveries, and daily comings and goings.",
            ]} />
            <p className="mb-8">
              A simple habit—shoes off near the door, a mat at each entry, and prompt spill cleanup—reduces how often the
              whole floor needs a deeper clean.
            </p>
            <InlineArticleImage
              src={INLINE_PETHAIR}
              alt="A cordless vacuum lifting scattered crumbs from a hardwood floor beside a play area, with a cat resting on the sofa and a baby in a playpen in the background"
              caption="Most floor mess is crumbs, spills, and pet hair in the rooms the baby actually uses—vacuuming those spots often beats deep cleaning the whole house."
            />
          </FadeInSection>

          {/* ── Floor-type table ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">How Often to Clean Each Floor Type</h2>
            <p className="mb-4">
              Frequency and method depend on the surface. Use this as a starting point, and always defer to your flooring
              manufacturer's instructions—the wrong product or too much water can void a warranty or damage the floor.
            </p>
            <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-left text-sm md:text-base border-collapse">
                <caption className="sr-only">How often and how to clean common floor types when a baby is crawling</caption>
                <thead className="bg-secondary/50">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-heading font-bold text-foreground whitespace-nowrap">Floor type</th>
                    <th scope="col" className="px-4 py-3 font-heading font-bold text-foreground">Everyday</th>
                    <th scope="col" className="px-4 py-3 font-heading font-bold text-foreground">Deeper clean</th>
                    <th scope="col" className="px-4 py-3 font-heading font-bold text-foreground">Product note</th>
                  </tr>
                </thead>
                <tbody>
                  {FLOOR_ROWS.map((r) => (
                    <tr key={r.type} className="border-t border-border align-top">
                      <th scope="row" className="px-4 py-3 font-semibold text-foreground whitespace-nowrap">{r.type}</th>
                      <td className="px-4 py-3 text-gray-700">{r.everyday}</td>
                      <td className="px-4 py-3 text-gray-700">{r.deep}</td>
                      <td className="px-4 py-3 text-gray-700">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mb-8">
              For real wood specifically, see our guide on{" "}
              <Link to={HARDWOOD} className="text-accent font-medium hover:underline">how to clean hardwood floors naturally</Link>{" "}
              for gentler, low-moisture methods.
            </p>
          </FadeInSection>

          {/* ── Choosing a baby-safe cleaner ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">How to Choose a Baby-Safe Floor Cleaner</h2>
            <p className="mb-4">
              "Baby-safe" and "newborn-safe" are marketing phrases, not a substitute for reading the label. No product is
              safe if it is used on the wrong surface, in the wrong amount, or stored where a crawler can reach it. And never
              call any product "chemical-free"—water, soap, and every cleaning ingredient are chemicals.
            </p>
            <p className="mb-4">
              For routine floor cleaning, one useful signal is the{" "}
              <a href={EPA_SAFER} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">EPA Safer Choice label</a>,
              where the EPA reviews a product's intentionally added ingredients against its human-health and environmental
              criteria. The label does not mean a product can be used carelessly or that it fits every surface.
            </p>
            <p className="mb-4">Practical rules for the crawling stage:</p>
            <Bullets items={[
              "Match the product to your floor type and the task.",
              "Read the label: follow dilution, ventilation, contact-time, and rinse directions.",
              "Ventilate the room, and keep the baby out until the floor is dry or rinsed.",
              "Use only the amount directed—more product does not mean a cleaner floor.",
              "Never mix cleaning or disinfecting products.",
              "Store every product closed, labeled, and out of reach—up high or in a latched cabinet.",
              "Do not treat \"natural\" or \"non-toxic\" as an absolute guarantee.",
            ]} />
            <p className="mb-4">
              If disinfecting is genuinely needed—illness or a contaminated surface—clean first, then use an{" "}
              <a href={EPA_DISINFECTANTS} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">EPA-registered disinfectant exactly as its label directs</a>,
              including contact time and any rinse step, and keep the baby away during use.
            </p>
            <p className="mb-8">
              For safe storage and childproofing as your baby becomes mobile, the{" "}
              <a href={AAP_CHILDPROOF} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">American Academy of Pediatrics childproofing guidance</a>{" "}
              recommends locking away cleaners and medicines. Save your regional Poison Control number—in the U.S., call{" "}
              <a href={POISON_CONTROL} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">Poison Control</a>{" "}
              at 1-800-222-1222 for a suspected exposure, and 911 for an emergency.
            </p>
            <InlineArticleImage
              src={INLINE_LABEL}
              alt="A Capital Clean Care team member in the navy company uniform reading the directions on a cleaning-product label before using it"
              caption={'Reading the label first—surface, dilution, ventilation, and storage—matters more than any "baby-safe" claim on the front of the bottle.'}
            />
          </FadeInSection>

          {/* ── High-touch surfaces at a crawler's reach ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Beyond Floors: High-Touch Surfaces at a Crawler's Reach</h2>
            <p className="mb-4">
              A crawler explores more than the floor. As part of the same routine, give a light, regular wipe to the low
              surfaces small hands find:
            </p>
            <Bullets items={[
              "Coffee-table edges, chair and table legs, and low shelves.",
              "Cabinet and drawer pulls within reach.",
              "Baseboards and door frames along crawling paths.",
              "Toy bins, gates, and the tray or rails of play equipment.",
              "Low door handles and light switches.",
            ]} />
            <p className="mb-8">
              Routine cleaning is usually enough for these surfaces. Follow the product and surface instructions, and pair
              the wipe-down with childproofing—covers, latches, and moving hazards up and out of reach.
            </p>
          </FadeInSection>

          {/* ── Play mats, rugs, robot vacuums ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What About Play Mats, Rugs, and Robot Vacuums?</h2>
            <p className="mb-4">
              Once a baby is crawling and putting hands to mouth, the mats, rugs, and gear they play on get more contact than
              the rest of the floor. Clean them the way you clean floors: remove debris, wipe spills, follow the
              manufacturer&apos;s directions, and let everything dry. The{" "}
              <a href={AAP_GREEN} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">American Academy of Pediatrics&apos; green-cleaning guidance</a>{" "}
              is a helpful reference for choosing and storing products as your baby becomes more mobile.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Play mats</h3>
            <p className="mb-6">
              Shake off or vacuum loose debris, then wipe spills and visible soil with a cleaner the manufacturer approves
              for that material. Rinse if the label calls for it, and let the mat dry completely before the baby is back on
              it. Do not assume a play mat tolerates disinfectant—foam and fabric can be damaged, and residue is left right
              where hands and mouths go.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Rugs and carpet</h3>
            <p className="mb-6">
              Vacuum play-area rugs and carpet as often as debris and pets require, and spot-clean spills before they set.
              Use a product suited to the rug&apos;s material and follow the label; over-wetting can leave residue or take too
              long to dry. Let treated areas dry fully before the baby crawls back over them.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Robot vacuums and robot mops</h3>
            <p className="mb-8">
              A robot vacuum or mop can help with day-to-day maintenance, but run it while the baby is in another safe,
              supervised area—not crawling alongside it. Keep the dock, cords, and any small parts out of reach; empty and
              maintain the unit so it actually picks up debris; and remember it does not replace prompt spill cleanup or the
              approved wet cleaning your floors need.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA
              headline="Get the deep floor work off your plate"
              subtext="Capital Clean Care keeps floors, bathrooms, kitchens, and high-touch surfaces consistently clean while your family focuses on the baby. Serving Maryland, DC & Northern Virginia."
              ctaLabel="Get My Free Quote"
              ctaTo={QUOTE}
            />
          </FadeInSection>

          {/* ── Checklist ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Weekly Floor &amp; Crawl-Space Checklist</h2>
            <p className="mb-6">Use this as a flexible menu. It does not need to be finished in one day.</p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Every day or as needed</h3>
            <ul className="space-y-2 mb-8 pl-1">
              {[
                "Sweep or dry-mop the main crawling and walking paths",
                "Wipe up visible spills right away",
                "Pick up crumbs and small objects within reach",
                "Reset one clear, safe path through the busiest room",
                "Wipe an obviously dirty low surface",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">A few times each week</h3>
            <ul className="space-y-2 mb-8 pl-1">
              {[
                "Damp-mop the floors that allow it, per the manufacturer",
                "Vacuum play areas and spots where pet hair collects",
                "Wipe low shelves, table legs, and reachable handles",
                "Clean entryway mats and shake out small rugs",
                "Check that cleaning products are stored out of reach",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Weekly or when manageable</h3>
            <ul className="space-y-2 mb-8 pl-1">
              {[
                "Deeper-clean the most-used floors and baseboards",
                "Deep-vacuum or refresh rugs and carpet in play areas",
                "Clean less-used floors and lower cabinet fronts",
                "Restock supplies and check that latches and covers work",
                "Delegate postponed deep-cleaning tasks",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeInSection>

          {/* ── Common mistakes ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Common Floor-Cleaning Mistakes With a Crawling Baby</h2>
            <p className="mb-6">
              A few habits create more work—or more risk—without making floors any safer. The most common ones:
            </p>
            <ol className="space-y-4 mb-8 pl-6 list-decimal marker:text-accent marker:font-bold">
              <li className="text-foreground"><strong>Trying to sterilize everything, every day.</strong> Routine cleaning removes most germs; whole-floor disinfecting is a situational step for illness or contamination, not a daily requirement.</li>
              <li className="text-foreground"><strong>Using too much product—or mixing products.</strong> More cleaner does not mean cleaner floors, and it can leave residue right where hands and mouths go. Never mix cleaning or disinfecting products.</li>
              <li className="text-foreground"><strong>Assuming &quot;natural,&quot; &quot;baby-safe,&quot; &quot;fragrance-free,&quot; vinegar, or steam works on any floor.</strong> None of these are guarantees or universal methods. Match the product and method to your floor type and follow the manufacturer&apos;s directions—steam and acids can damage some surfaces.</li>
              <li className="text-foreground"><strong>Letting the baby back before the floor is dry or rinsed.</strong> Wet floors are a slip and exposure risk. Keep the baby off until the surface is dry and any label-required rinse is finished.</li>
              <li className="text-foreground"><strong>Cleaning the whole house instead of the zones that matter.</strong> Prioritize crawling paths, entryways, and the spots that collect food and pet hair before the rooms the baby rarely touches.</li>
            </ol>
          </FadeInSection>

          {/* ── Recurring cleaning ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">When Recurring Cleaning Gives You Time Back</h2>
            <p className="mb-4">
              Daily tidying is one thing; keeping up with deeper floor care, bathrooms, and dust on little sleep is another.
              Recurring cleaning can be worth it when:
            </p>
            <Bullets items={[
              "Deeper floor and bathroom cleaning keeps getting postponed.",
              "You want consistent upkeep without adding hours to your week.",
              "Fatigue, work, or other children make a full reset hard to reach.",
              "You would rather spend that time resting or with the baby.",
            ]} />
            <p className="mb-8">
              Capital Clean Care offers{" "}
              <Link to={RECURRING} className="text-accent font-medium hover:underline">recurring cleaning</Link>,{" "}
              <Link to={HOUSE} className="text-accent font-medium hover:underline">house cleaning</Link>,{" "}
              <Link to={DEEP} className="text-accent font-medium hover:underline">deep cleaning</Link>, and{" "}
              <Link to={ECO} className="text-accent font-medium hover:underline">eco-friendly cleaning</Link>{" "}
              for families across Montgomery County, Maryland—including Bethesda, Silver Spring, Rockville, and Takoma Park—as well as Washington DC and Northern Virginia. A recurring plan can
              handle floors, bathrooms, kitchens, and accumulated dust so the household work does not pile up during the
              crawling stage.
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
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 mt-14">A Floor Routine That Fits Life With a Crawler</h2>
            <p className="mb-6">
              You do not need a spotless floor at every hour of the day. Keep the crawling paths clean, wipe spills quickly,
              choose products by reading the label, store them out of reach, and let a professional handle the heavy,
              repetitive work when it helps.
            </p>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Keep the Floors Handled—Focus on the Baby</h2>
              <p className="text-primary-foreground/85 mb-6 leading-relaxed max-w-xl mx-auto text-lg">
                If floors, bathrooms, and recurring cleaning are taking time away from rest and your baby, Capital Clean Care
                can help. Request a free quote for professional house cleaning in Bethesda, Silver Spring, Rockville, and
                other areas of Montgomery County, Maryland, as well as Washington DC and Northern Virginia.
              </p>
              <div className="flex flex-col items-center gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-10 py-6 rounded-full shadow-md w-full sm:w-auto" asChild>
                  <Link to={QUOTE}>Get My Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 text-primary-foreground text-lg font-semibold hover:text-accent transition-colors">
                  <Phone className="h-5 w-5" /> {PHONE}
                </a>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mt-10 rounded-2xl border border-accent/20 bg-accent/5 p-6 text-lg">
              <p>
                <strong>Next in the family life-stage series:</strong> once your child is walking, eating more independently,
                and spreading small messes from room to room, use our{" "}
                <Link to={TODDLER} className="font-medium text-accent hover:underline">
                  realistic cleaning schedule for working parents with toddlers
                </Link>.
              </p>
            </div>
          </FadeInSection>

          {/* ── Disclaimer (end) ── */}
          <FadeInSection>
            <div className="rounded-2xl border border-border bg-secondary/40 p-5 md:p-6 mt-10 text-base md:text-lg text-muted-foreground italic">
              This article provides general household information and is not medical advice. Always follow product and
              flooring-manufacturer instructions, and ask your pediatrician or healthcare provider about your baby's
              individual health needs, allergies, or exposure concerns.
            </div>
          </FadeInSection>

          <FadeInSection>
            <AuthorBio />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="baby-crawling-floor-cleaning-guide" />
      <StickyCTA />
    </Layout>
  );
};

export default BabyCrawlingFloorCleaning;
