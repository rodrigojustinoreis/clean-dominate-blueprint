/**
 * Guide: carpet stain triage (pet urine and feces, vomit, red wine, milk, blood, coffee, plus a
 * winter block on mud, road salt and wet boots). Informational, written under
 * capitalcleancare.com-audit/carpet-stain-guide-2026-10-05/HANDOFF-CLAUDE.md and WINTER-ADDENDUM.md.
 *
 * Same presentation as the dust guide (CanHouseDustMakeYouSick.tsx): light two-column hero with the
 * short answer, tiles, alternating bands, a numbered rail, a local FAQ whose answers are in the
 * prerendered HTML. No sales modules. There is no company photo of carpet work in the repo. At the
 * owner's request (06/10/2026) each situation has an AI-generated illustration made with gpt-image-2
 * from the owner's master photo of a team member (back view, real uniform and logo, no face); every
 * one is captioned as an illustration and none is presented as a photo of a job. The one real photo
 * is the team member vacuuming, beside the house cleaning section.
 *
 * Every procedure here is attributed to the Carpet and Rug Institute (CRI), the IICRC consumer tip
 * sheet, WoolSafe, the CDC or the EPA. Capital Clean Care does not claim carpet extraction, rug
 * washing, UV inspection or any proprietary carpet method on this page.
 */
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import FadeInSection from "@/components/blog/FadeInSection";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const SLUG = "carpet-stain-guide-pets-wine-milk";
const URL = `https://capitalcleancare.com/resources/${SLUG}`;
const TITLE = "How to Get Stains Out of Carpet";
// Revision of 2026-10-08 (shorter page, answer and stain selector first). Publication date unchanged.
const MODIFIED = "2026-10-08";
// Publication date (authorized by the owner on 2026-10-07).
const PUBLISHED = "2026-10-07";
const WINE_GUIDE = "/resources/how-to-remove-red-wine-stains";
const CARPET_GUIDE = "/resources/how-to-clean-carpet-home-apartment";
const DOG_SMELL_GUIDE = "/resources/how-to-get-rid-of-dog-smell-pet-safe";
const CONTACT = "/contact";
const RECURRING = "/services/recurring-cleaning";
const DEEP_CLEANING = "/services/deep-cleaning";
const PET_SAFE_LABELS = "/resources/what-pet-safe-cleaning-really-means";
const PET_HAIR_ODORS = "/resources/remove-pet-hair-odors-dmv-homes";
const MILDEW_SMELL = "/resources/how-to-get-rid-of-mildew-smell-naturally";
const WINTER_TIPS = "/resources/eco-cleaning-tips-winters-maryland";
const MOVE_OUT_CHECKLIST = "/resources/move-out-cleaning-checklist-maryland-tenants";

const IMG = "/images/blog/carpet-stain-guide";
type Pic = { src: string; srcSet: string; alt: string; width: number; height: number };
// Generated illustrations: 1280x853 with a 640 variant.
const pic = (name: string, alt: string): Pic => ({
  src: `${IMG}/${name}.webp`,
  srcSet: `${IMG}/${name}-640.webp 640w, ${IMG}/${name}.webp 1280w`,
  alt,
  width: 1280,
  height: 853,
});
const HERO = pic("hero", "Illustration: a Capital Clean Care team member kneeling on a beige carpet, blotting a small spill with a folded white cloth.");
const WINTER = pic("winter", "Illustration: a team member vacuuming dried mud and road salt from a hallway rug, with an entry mat and boots by the door.");
const REAL_VACUUM = {
  src: `${IMG}/team-vacuuming-real.webp`,
  alt: "Capital Clean Care team member vacuuming a wood floor beneath lifted upholstered furniture.",
  width: 570,
  height: 760,
};
const HERO_SIZES = "(min-width: 1024px) 384px, 100vw";
const HERO_FIGURE_SIZES = "(min-width: 768px) 720px, 100vw";
const PANEL_SIZES = "(min-width: 768px) 720px, 100vw";
// 1200x630 crop of the hero illustration, so the size useSEO declares is the real one.
const OG_IMAGE = `${IMG}/og.jpg`;
const ILLUSTRATION_NOTE = "Illustration (AI-generated) of this step, not a photo of a real job.";

// Primary sources, read on 2026-10-05. Facts are attributed in the text where they are used.
const SRC = {
  criCare: "https://carpet-rug.org/carpet-for-homes/cleaning-and-maintenance/",
  cri411: "https://carpet-rug.org/carpet-stains-4-1-1-best-practices-for-removing-stains/",
  criUrine: "https://carpet-rug.org/technical-bulletin-pet-urine-and-carpet/",
  criUrineDry: "https://carpet-rug.org/spot-solver/urine-dry/",
  criFeces: "https://carpet-rug.org/spot-solver/feces/",
  criVomit: "https://carpet-rug.org/spot-solver/vomit/",
  criWine: "https://carpet-rug.org/spot-solver/wine/",
  criMilk: "https://carpet-rug.org/spot-solver/milk/",
  criBlood: "https://carpet-rug.org/spot-solver/blood/",
  criCoffee: "https://carpet-rug.org/spot-solver/coffee/",
  criMud: "https://carpet-rug.org/spot-solver/mud/",
  criSalt: "https://carpet-rug.org/spot-solver/salt/",
  criWinter: "https://carpet-rug.org/preparing-for-winters-wrath/",
  iicrc: "https://iicrc.org/wp-content/uploads/2023/01/Tip-Sheet-Carpet-Topics.pdf",
  iicrcLocator: "https://www.iicrc.org/page/IICRCGlobalLocator",
  woolsafe: "https://www.woolsafe.org/wp-content/uploads/2020/08/Safe-way-to-care-WHITE-A5-Aug-20-1.pdf",
  woolsafeFind: "https://www.woolsafe.org/find-a-carpet-cleaner/",
  shaw: "https://shawfloors.com/en-us/care-and-warranties/carpet",
  cdcClean: "https://www.cdc.gov/hygiene/about/when-and-how-to-clean-and-disinfect-your-home.html",
  cdcNoro: "https://www.cdc.gov/norovirus/prevention/index.html",
  epaMold: "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home",
};

const sources: [string, string][] = [
  ["Carpet and Rug Institute (CRI): Cleaning and Maintenance", SRC.criCare],
  ["CRI: Carpet Stains 4-1-1, Best Practices for Removing Stains", SRC.cri411],
  ["CRI: Technical Bulletin, Pet Urine and Carpet", SRC.criUrine],
  ["CRI Spot Solver: Urine, Dry", SRC.criUrineDry],
  ["CRI Spot Solver: Feces", SRC.criFeces],
  ["CRI Spot Solver: Vomit", SRC.criVomit],
  ["CRI Spot Solver: Wine", SRC.criWine],
  ["CRI Spot Solver: Milk", SRC.criMilk],
  ["CRI Spot Solver: Blood", SRC.criBlood],
  ["CRI Spot Solver: Coffee", SRC.criCoffee],
  ["CRI Spot Solver: Mud", SRC.criMud],
  ["CRI Spot Solver: Salt", SRC.criSalt],
  ["CRI: Preparing for Winter's Wrath (entry mats)", SRC.criWinter],
  ["IICRC: Consumer Floor and Furnishings Care Information (PDF)", SRC.iicrc],
  ["WoolSafe: The Safe Way to Care for Your Wool Carpets and Rugs (PDF)", SRC.woolsafe],
  ["Shaw Floors: Carpet Care and Maintenance", SRC.shaw],
  ["CDC: When and How to Clean and Disinfect Your Home", SRC.cdcClean],
  ["CDC: Preventing Norovirus (cleaning up after vomiting or diarrhea)", SRC.cdcNoro],
  ["EPA: A Brief Guide to Mold, Moisture and Your Home", SRC.epaMold],
];

const toc: [string, string][] = [
  ["stains", "Stain by stain"],
  ["first-minutes", "First five minutes"],
  ["comes-back", "Why it comes back"],
  ["disinfecting", "Disinfecting"],
  ["fibers", "Wool and silk"],
  ["winter", "Winter"],
  ["call-a-pro", "Who to call"],
  ["faq", "FAQ"],
]

// The six moves that apply to every spill on synthetic carpet. Each is attributed in the rail.
const firstSteps: [string, ReactNode][] = [
  ["Pick up what you can", "Solids with a spoon or plastic scraper, without pressing them in. Liquids with a dry white cloth or plain white paper towels (CRI, IICRC)."],
  ["Blot, do not rub", "Rubbing frays the fibers and pushes the spill deeper (CRI, Shaw Floors)."],
  ["Work from the edge in", "So the spot does not spread (CRI, WoolSafe)."],
  ["Pretest anything you apply", "In a hidden spot, such as inside a closet; check the cloth for color (CRI)."],
  ["Small amounts, on the cloth", "Not poured on the carpet, never a stronger mix than the label or the CRI page gives (CRI, WoolSafe)."],
  ["Rinse and blot dry", "Clear water until no product is left, without soaking the carpet (CRI)."],
]

const pClass = "text-lg text-muted-foreground leading-relaxed mb-4";
const linkClass = "text-primary underline underline-offset-2 hover:no-underline";

// Declared before the stain cards, which use it at module load.
const Ext = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
    {children}
  </a>
);

type Stain = {
  id: string;
  label: string;
  /** Omitted on purpose for blood: the generated figure shows short sleeves, which contradicts the
   *  card's own line about long sleeves (visual review, 07/10/2026). The file stays in the repo. */
  image?: Pic;
  first: string;
  then: ReactNode;
  caution: string;
  pro: string;
};

const stains: Stain[] = [
  {
    id: "urine-fresh",
    image: pic("urine-fresh", "Illustration: a team member pressing a stack of white paper towels onto a damp spot on a hallway carpet, a dog nearby."),
    label: "Pet urine, fresh",
    first:
      "Blot the damp area right away with plain white paper towels, pressing firmly, until nothing more transfers.",
    then: (
      <>
        The <Ext href={SRC.criUrine}>CRI pet urine bulletin</Ext> blots in a solution of 1/4 teaspoon of liquid
        dish detergent (no bleach, no lanolin) in 1 cup of lukewarm water, absorbs it, rinses with water, and
        repeats while the towel keeps picking up anything. It finishes with 1 cup of white vinegar in 2 cups of
        water, blotted dry. Enzyme-based products are sold at pet stores; follow the label and pretest.
      </>
    ),
    caution:
      "Hold off on heat or a machine until the spot is handled. The IICRC notes that the heat and humidity of cleaning can make odors more evident.",
    pro: "The urine soaked through to the pad, the odor returns, or the carpet dye changed color (the CRI bulletin notes urine can affect dyes).",
  },
  {
    id: "urine-old",
    image: pic("urine-old", "Illustration: a team member spraying a little solution onto a white cloth, not onto the carpet, before dabbing an old spot."),
    label: "Pet urine, dried",
    first: "Find every spot you can. Old urine often shows no stain, only an odor in humid weather.",
    then: (
      <>
        The <Ext href={SRC.criUrineDry}>CRI dry urine page</Ext> uses the same detergent solution, a water
        rinse, then the vinegar solution. It also lists an ammonia solution with a warning that ammonia can
        change colors, which is a step we would leave to a professional.
      </>
    ),
    caution:
      "The CRI is direct about cats: unless the urine can be completely removed, complete odor removal is unlikely.",
    pro: "Several old spots, a smell that comes back, or color damage. The IICRC describes slow reactions over days or months that change dyes and weaken fibers, and says aged urine often cannot be fully restored.",
  },
  {
    id: "feces",
    image: pic("feces", "Illustration: a gloved team member lifting a pet accident with a plastic scraper into a plastic bag."),
    label: "Dog or cat feces",
    first:
      "Wear gloves. Lift solids with a plastic scraper or spoon without pressing down, bag them, and wash your hands.",
    then: (
      <>
        The <Ext href={SRC.criFeces}>CRI feces page</Ext> works in the detergent solution, blots, rinses with
        lukewarm water, and uses the vinegar solution to reduce the alkalinity left by detergent, then a cold
        water rinse and a dry blot. For loose stools the IICRC treats the area like fresh urine and follows with
        a disinfectant whose label allows it.
      </>
    ),
    caution:
      "Food dyes in pet food or treats can leave a color at the spot (IICRC). Do not scrub it; that spreads it.",
    pro: "Diarrhea that soaked through, a color that stays after rinsing, or a smell that returns.",
  },
  {
    id: "vomit",
    image: pic("vomit", "Illustration: a gloved team member dropping used paper towels into a plastic trash bag on a living room rug."),
    label: "Vomit",
    first:
      "If it came from someone who is sick, do not spot clean first: gloves on, lift everything with paper towels into a plastic bag, wash your hands, and read the disinfecting section before anything else. Otherwise, remove solids with a scraper and blot the liquid with paper towels.",
    then: (
      <>
        The <Ext href={SRC.criVomit}>CRI vomit page</Ext> applies the detergent solution, blots, rinses, then
        the vinegar solution, and ends with a cold water rinse blotted dry.
      </>
    ),
    caution:
      "Stomach acid and food or medicine dyes can stain permanently, and the longer vomit sits, the more likely the stain and the odor (IICRC). Cleaning the spot is not disinfecting it.",
    pro: "A large amount, a pad that got wet (the IICRC says it may need treatment under the surface or replacement), or a color that remains.",
  },
  {
    id: "wine",
    image: pic("wine", "Illustration: a team member blotting a red wine spot with a white cloth next to a tipped glass."),
    label: "Red wine",
    first:
      "Blot at once. For a big spill the IICRC suggests extracting with a wet/dry vacuum first, then blotting with a cloth dampened with clear water.",
    then: (
      <>
        The <Ext href={SRC.criWine}>CRI wine page</Ext> uses the detergent solution, then the vinegar solution to
        lower the alkalinity the detergent leaves, then a water rinse. Its warning about a permanent stain is for
        the stain-resist solution of a spot removal kit used before the wine is completely removed. The full
        walkthrough, with photos, is in our{" "}
        <Link to={WINE_GUIDE} className={linkClass}>red wine stain guide</Link>.
      </>
    ),
    caution:
      "Skip anything with bleach. Wine that reached the backing can reappear as the carpet dries (IICRC).",
    pro: "A pink or red tint that stays. The IICRC sees this most on natural fibers and older synthetic carpet.",
  },
  {
    id: "milk",
    image: pic("milk", "Illustration: a team member blotting spilled milk on a rug, with a bowl of clean water and a second cloth for rinsing."),
    label: "Milk",
    first: "Blot as much as you can right away. Milk that stays in the pile can sour as it dries.",
    then: (
      <>
        The <Ext href={SRC.criMilk}>CRI milk page</Ext> lists a dry-cleaning-type spot solvent first (never
        poured on, never reaching the backing), then the detergent solution, then several rinses with lukewarm
        water. At home, the detergent solution and a thorough rinse are the usual steps.
      </>
    ),
    caution: "Rinse more than you think you need to. Detergent left in the pile attracts dirt (CRI).",
    pro: "A sour smell that stays after the spot has dried. Residue may be left in the fibers, the backing or the pad, and a smell that persists is worth having assessed.",
  },
  {
    id: "blood",
    label: "Blood",
    first:
      "Gloves, eye protection and long sleeves. The IICRC treats blood as potentially infectious. Blot small droplets with a dry cloth, then with a cloth dampened with clear water.",
    then: (
      <>
        The <Ext href={SRC.criBlood}>CRI blood page</Ext> uses the detergent solution, lukewarm rinses and a
        final cold water rinse blotted dry. For residual color on synthetic fibers the IICRC mists fresh 3%
        hydrogen peroxide and lets it sit, after testing; it is not recommended on wool or other natural fibers.
      </>
    ),
    caution:
      "Peroxide only after the detergent step has been rinsed out, on its own, never mixed with anything. Medications in the bloodstream of a person or a pet can prevent full removal (IICRC).",
    pro: "Anything larger than small droplets. The IICRC says larger spills need a technician trained in that kind of cleanup.",
  },
  {
    id: "coffee",
    image: pic("coffee", "Illustration: a team member blotting a coffee spill on a gray office carpet next to a tipped mug."),
    label: "Coffee or tea",
    first: "Blot. Coffee with milk or sugar is harder, so do not let it dry.",
    then: (
      <>
        The <Ext href={SRC.criCoffee}>CRI coffee page</Ext> applies the detergent solution, then the vinegar
        solution, then lukewarm rinses and a final cold rinse blotted dry. The IICRC adds a light mist of fresh
        3% hydrogen peroxide for leftover color on synthetic fibers, after testing.
      </>
    ),
    caution:
      "Vinegar and peroxide are separate steps with a water rinse between them, never mixed and never on wool. Coffee and tea are dyes; the IICRC notes that full removal is not always possible on every fiber.",
    pro: "A tan ring that comes back after the spot dries.",
  },
];

const faqs = [
  {
    q: "How do I get cat pee out of carpet?",
    a: "Blot with white paper towels until nothing transfers, then follow the CRI pet urine bulletin: 1/4 teaspoon of liquid dish detergent in 1 cup of lukewarm water blotted in, a water rinse, repeated while there is transfer, then 1 cup of white vinegar in 2 cups of water, blotted dry. Enzyme products are an option if you follow the label and pretest. The CRI says odor removal is unlikely unless the urine is completely removed, so old or repeated spots usually need a carpet cleaning professional. Synthetic carpet only, with a pretest and the product label; wool, silk or an unknown fiber is a job for a professional.",
  },
  {
    q: "How do I get dog poop out of carpet?",
    a: "Gloves on, lift solids with a plastic scraper or spoon without pressing, bag them, then the CRI feces steps: detergent solution, blot, lukewarm rinse, vinegar solution, cold rinse, blot dry. Loose stools: treat like fresh urine and follow with a disinfectant whose label allows carpet (IICRC). Synthetic carpet only, with a pretest and the product label; wool, silk or an unknown fiber is a job for a professional.",
  },
  {
    q: "How do I get throw up out of carpet?",
    a: "First ask who it came from. If the person may have a stomach virus, follow the CDC norovirus cleanup before anything else: gloves, everything lifted with paper towels into a plastic bag, hands washed, then a product only if its label claims norovirus and allows carpet, with its contact time; if no such product, have the area assessed instead of spot cleaning. Otherwise, remove solids, blot the liquid, then the CRI vomit steps: detergent solution, blot, rinse, vinegar solution, cold rinse, blot dry. Synthetic carpet only, with a pretest and the product label; wool, silk or an unknown fiber is a job for a professional.",
  },
  {
    q: "How do I get milk out of carpet, and the sour smell?",
    a: "Blot promptly, work in the detergent solution, rinse several times with lukewarm water and let it dry completely. A sour smell that stays means residue is left somewhere in the fibers, backing or pad; the smell does not tell you where, so have it assessed. Synthetic carpet only, with a pretest and the product label; wool, silk or an unknown fiber is a job for a professional.",
  },
  {
    q: "Can I use a steam cleaner on pet urine?",
    a: "Not as a first step. Treat and rinse the spot by hand first. The IICRC notes that heat and humidity from cleaning can amplify odors, and uses a home machine only to rinse with clear water once no stain shows. Check your carpet's care guide before using any machine.",
  },
  {
    q: "Is vinegar safe on carpet?",
    a: "On synthetic carpet the CRI uses 1 cup of white vinegar in 2 cups of water after the detergent step, to lower the alkalinity the detergent leaves; it is not a first step and not a stain remover on its own. On wool, WoolSafe allows only WoolSafe-approved products. Pretest either way.",
  },
]

const whoToCall: [string, string][] = [
  ["Carpet cleaning professional", "Spots that return, lingering odor, old pet urine, large spills, or whatever your warranty asks a professional to handle."],
  ["WoolSafe approved cleaner", "Wool and wool-rich carpets and rugs."],
  ["Water damage specialist", "Carpet that stays wet, a musty smell that returns, or water from a leak or sewage (EPA)."],
  ["Veterinarian", "A pet that keeps having accidents. No cleaning method answers that."],
]

// One full-width band per topic, alternating white and tinted. The heading block carries the
// anchor: scroll-mt-28 clears the sticky header (102px on desktop). `still` keeps the content out
// of the scroll-reveal wrapper for the parts that must not depend on an animation.
const Band = ({
  id,
  eyebrow,
  title,
  tinted = false,
  still = false,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  tinted?: boolean;
  still?: boolean;
  children: ReactNode;
}) => {
  const body = (
    <>
      <div id={id} className="scroll-mt-28">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</span>
        <h2 className="mb-4 mt-2 font-heading text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
      </div>
      {children}
    </>
  );
  return (
    <section className={`border-t border-border py-10 md:py-16 ${tinted ? "bg-secondary/30" : "bg-white"}`}>
      <div className="container mx-auto max-w-3xl px-4">{still ? body : <FadeInSection>{body}</FadeInSection>}</div>
    </section>
  );
};

// "Edge to center", drawn as inline SVG with a light native animation (Web Animations API, no
// library): a cloth presses on the edge of the spot, lifts straight up, moves one width inward
// and presses again, three times. It never drags, and the spot does not vanish. Playback is user
// started (no autoplay), with Play/Pause and Replay buttons; with prefers-reduced-motion the three
// positions are drawn side by side and nothing moves. The drawing is aria-hidden: the steps are
// written out as text next to it.
const CLOTH_STOPS = [0, 34, 68];
const PRESS_DURATION_MS = 7000;

const clothKeyframes = (): Keyframe[] => {
  const frames: Keyframe[] = [];
  const n = CLOTH_STOPS.length;
  CLOTH_STOPS.forEach((x, i) => {
    const base = i / n;
    const seg = 1 / n;
    const at = (f: number, transform: string) => frames.push({ offset: Math.min(1, base + seg * f), transform });
    at(0, `translate(${x}px, 0px) scale(1)`);
    at(0.12, `translate(${x}px, 3px) scale(0.88)`);
    at(0.55, `translate(${x}px, 3px) scale(0.88)`);
    at(0.7, `translate(${x}px, -8px) scale(1)`);
    at(0.84, `translate(${x}px, -8px) scale(1)`);
    if (i < n - 1) at(1, `translate(${CLOTH_STOPS[i + 1]}px, 0px) scale(1)`);
    else at(1, `translate(${x}px, 0px) scale(1)`);
  });
  return frames;
};

const Cloth = ({ x, opacity = 1, label }: { x: number; opacity?: number; label?: string }) => (
  <g transform={`translate(${x} 0)`} opacity={opacity}>
    <rect x="6" y="84" width="32" height="32" rx="6" fill="#fff" stroke="hsl(var(--primary))" strokeWidth="3" />
    <circle cx="22" cy="100" r="5" fill="hsl(var(--primary) / 0.35)" />
    {label ? (
      <text x="22" y="134" textAnchor="middle" fontSize="13" fontWeight="700" fill="hsl(var(--primary))">
        {label}
      </text>
    ) : null}
  </g>
);

const EdgeToCenterDiagram = () => {
  const clothRef = useRef<SVGGElement>(null);
  const animRef = useRef<Animation | null>(null);
  const [reduced, setReduced] = useState(false);
  const [status, setStatus] = useState<"ready" | "playing" | "paused" | "done">("ready");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const el = clothRef.current;
    if (!el || reduced || typeof el.animate !== "function") return;
    const anim = el.animate(clothKeyframes(), { duration: PRESS_DURATION_MS, easing: "ease-in-out", fill: "forwards" });
    anim.pause();
    anim.onfinish = () => setStatus("done");
    animRef.current = anim;
    return () => {
      anim.cancel();
      animRef.current = null;
    };
  }, [reduced]);

  const play = () => {
    const anim = animRef.current;
    if (!anim) return;
    if (status === "done") anim.currentTime = 0;
    anim.play();
    setStatus("playing");
  };
  const pause = () => {
    animRef.current?.pause();
    setStatus("paused");
  };
  const replay = () => {
    const anim = animRef.current;
    if (!anim) return;
    anim.currentTime = 0;
    anim.play();
    setStatus("playing");
  };

  const btn =
    "min-h-11 rounded-full border border-primary px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:min-h-0";
  const statusText =
    status === "playing" ? "Playing" : status === "paused" ? "Paused" : status === "done" ? "Finished. Replay to watch again." : "Press Play to watch";

  return (
    <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
      <svg viewBox="0 0 200 200" className="h-40 w-40 shrink-0 sm:h-44 sm:w-44" aria-hidden="true" focusable="false">
        <defs>
          <marker id="csg-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="hsl(var(--primary) / 0.55)" />
          </marker>
        </defs>
        <circle cx="100" cy="100" r="96" fill="hsl(var(--secondary))" />
        <circle cx="100" cy="100" r="46" fill="hsl(var(--primary) / 0.18)" />
        <circle cx="100" cy="100" r="22" fill="hsl(var(--primary) / 0.32)" />
        {[60, 120, 240, 300].map((deg) => {
          const r = (deg * Math.PI) / 180;
          return (
            <line
              key={deg}
              x1={100 + Math.cos(r) * 84}
              y1={100 + Math.sin(r) * 84}
              x2={100 + Math.cos(r) * 36}
              y2={100 + Math.sin(r) * 36}
              stroke="hsl(var(--primary) / 0.55)"
              strokeWidth="3"
              strokeLinecap="round"
              markerEnd="url(#csg-arrow)"
            />
          );
        })}
        {reduced ? (
          <>
            <Cloth x={CLOTH_STOPS[0]} label="1" />
            <Cloth x={CLOTH_STOPS[1]} opacity={0.7} label="2" />
            <Cloth x={CLOTH_STOPS[2]} opacity={0.45} label="3" />
          </>
        ) : (
          <g ref={clothRef} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
            <Cloth x={0} />
          </g>
        )}
      </svg>
      <div className="min-w-0 flex-1">
        <p className="mb-2 text-base leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Edge to center, press and lift.</strong> Every source says to start at the
          outside of the spot and work in, so the spill is not pushed outward into clean pile.
        </p>
        <ol className="mb-3 list-decimal space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
          <li>Press the folded cloth on the edge of the spot and hold a moment.</li>
          <li>Lift it straight up. No dragging, no rubbing.</li>
          <li>Move one cloth-width toward the center and press again, until you reach the middle.</li>
        </ol>
        {reduced ? (
          <p className="text-xs text-muted-foreground">The drawing shows the three positions side by side because your device asks for reduced motion.</p>
        ) : (
          <div role="group" aria-label="Diagram playback" className="flex flex-wrap items-center gap-2">
            {status === "playing" ? (
              <button type="button" onClick={pause} className={`${btn} bg-white text-primary hover:bg-secondary/60`}>
                Pause
              </button>
            ) : (
              <button type="button" onClick={play} className={`${btn} bg-primary text-white hover:bg-primary/90`}>
                {status === "paused" ? "Resume" : "Play"}
              </button>
            )}
            <button type="button" onClick={replay} className={`${btn} bg-white text-primary hover:bg-secondary/60`}>
              Replay
            </button>
            <span aria-live="polite" className="text-xs text-muted-foreground">
              {statusText}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

// Stain selector: a row of tabs (two columns on phones) and one panel per stain. All panels are in
// the HTML, hidden with the `hidden` attribute, so the answers are prerendered and reachable.
const SAFETY: ReactNode[] = [
  <>Pretest every product in a hidden spot.</>,
  <>Wool, silk or unknown fiber: a dry white cloth only, then the care label and <a href="#fibers" className={linkClass}>wool and silk</a>.</>,
  <>Never mix products, and never bleach with ammonia.</>,
  <>Vomit or diarrhea from someone who is sick: cleaning is not disinfecting; see <a href="#disinfecting" className={linkClass}>disinfecting</a>.</>,
  <>Water still coming in or a soaked pad: start drying now and get an assessment; see <a href="#winter" className={linkClass}>drying</a>.</>,
];

const StainSelector = () => {
  const [active, setActive] = useState(0);
  // Before hydration (and without JavaScript) every panel is visible in order, so the answers do
  // not depend on the script. The tabs take over once the component is live.
  const [live, setLive] = useState(false);
  useEffect(() => setLive(true), []);
  // Deep link: #stain-tab-<id> or #stain-panel-<id> in the URL selects that stain after hydration.
  useEffect(() => {
    const m = window.location.hash.match(/^#stain-(?:tab|panel)-([a-z-]+)$/);
    if (!m) return;
    const i = stains.findIndex((s) => s.id === m[1]);
    if (i >= 0) setActive(i);
  }, []);
  return (
    <div>
      <ul aria-label="Before you start" className="mb-5 grid gap-1.5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-snug text-foreground sm:grid-cols-2">
        {SAFETY.map((s, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <div role="tablist" aria-label="Choose a stain" className="mb-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
        {stains.map((s, i) => {
          const selected = active === i;
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              id={`stain-tab-${s.id}`}
              aria-selected={selected}
              aria-controls={`stain-panel-${s.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
                e.preventDefault();
                const next = (i + (e.key === "ArrowRight" ? 1 : stains.length - 1)) % stains.length;
                setActive(next);
                document.getElementById(`stain-tab-${stains[next].id}`)?.focus();
              }}
              className={`min-h-11 rounded-full border px-3 py-2 text-sm font-semibold leading-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                selected ? "border-primary bg-primary text-white" : "border-border bg-white text-foreground hover:border-primary/50"
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        Each card follows the Carpet and Rug Institute (CRI) page it links to. "Detergent solution" means 1/4 teaspoon
        of liquid dish detergent in 1 cup of lukewarm water, never stronger; "vinegar solution" means 1 cup of white
        vinegar in 2 cups of water. Both are for synthetic carpet.
      </p>
      {stains.map((s, i) => (
        <div
          key={s.id}
          role="tabpanel"
          id={`stain-panel-${s.id}`}
          aria-labelledby={`stain-tab-${s.id}`}
          hidden={live && active !== i}
          className={`overflow-hidden rounded-2xl border border-border bg-white p-5 sm:p-6 ${live ? "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-300" : "mb-4"}`}
        >
          <h3 className="mb-3 font-heading text-xl font-bold text-foreground">{s.label}</h3>
          <dl className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">First</dt>
              <dd>{s.first}</dd>
            </div>
          </dl>
          {s.image ? (
            <figure className="my-5">
              <img
                src={s.image.src}
                srcSet={s.image.srcSet}
                sizes={PANEL_SIZES}
                alt={s.image.alt}
                width={s.image.width}
                height={s.image.height}
                loading="lazy"
                decoding="async"
                className="aspect-[3/2] w-full rounded-xl object-cover"
              />
              <figcaption className="mt-2 text-xs text-muted-foreground">{ILLUSTRATION_NOTE}</figcaption>
            </figure>
          ) : null}
          <dl className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">Then</dt>
              <dd>{s.then}</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Careful with</dt>
              <dd>{s.caution}</dd>
            </div>
            <div className="rounded-xl bg-secondary/40 p-4">
              <dt className="font-semibold text-foreground">Call a professional when</dt>
              <dd>{s.pro}</dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  );
};

const FaqList = ({ items }: { items: { q: string; a: string }[] }) => {
  const [open, setOpen] = useState<number | null>(null);
  // Same idea as the stain panels: answers are visible until the accordion is live.
  const [live, setLive] = useState(false);
  useEffect(() => setLive(true), []);
  return (
    <div className="space-y-3">
      {items.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q} className="border border-border rounded-xl overflow-hidden bg-white">
            <h3>
              <button
                type="button"
                id={`carpet-faq-q-${i}`}
                aria-expanded={live ? isOpen : true}
                aria-controls={`carpet-faq-a-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-3 p-5 text-left font-semibold text-foreground hover:bg-secondary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div
              id={`carpet-faq-a-${i}`}
              role="region"
              aria-labelledby={`carpet-faq-q-${i}`}
              hidden={live && !isOpen}
              className="px-5 pb-5 pt-4 border-t border-border text-muted-foreground leading-relaxed motion-safe:animate-in motion-safe:fade-in motion-safe:duration-200"
            >
              {faq.a}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// The six moves as a checklist you can tick while you work (state only, nothing stored).
const FirstMinutesChecklist = () => {
  const [done, setDone] = useState<boolean[]>(() => firstSteps.map(() => false));
  const count = done.filter(Boolean).length;
  const toggle = (i: number) => setDone((d) => d.map((v, j) => (j === i ? !v : v)));
  return (
    <div className="mb-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-foreground">Tick each move as you go</p>
        <span aria-live="polite" className="text-sm tabular-nums text-muted-foreground">
          {count} of {firstSteps.length}
        </span>
      </div>
      <div aria-hidden="true" className="mb-5 h-1.5 overflow-hidden rounded-full bg-secondary">
        <div className="h-full rounded-full bg-primary motion-safe:transition-[width] motion-safe:duration-300" style={{ width: `${(count / firstSteps.length) * 100}%` }} />
      </div>
      <ol>
        {firstSteps.map(([step, why], i) => (
          <li key={step} className={railItem}>
            <button
              type="button"
              aria-pressed={done[i]}
              aria-label={`${done[i] ? "Done" : "Mark done"}: ${step}`}
              onClick={() => toggle(i)}
              className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold tabular-nums transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                done[i] ? "bg-primary text-white" : "bg-primary/10 text-primary"
              }`}
            >
              <span aria-hidden="true">{done[i] ? "✓" : i + 1}</span>
            </button>
            <div className={done[i] ? "opacity-60 motion-safe:transition-opacity" : "motion-safe:transition-opacity"}>
              <strong className="block font-heading text-base text-foreground">{step}</strong>
              <span className="mt-1 block text-base leading-relaxed text-muted-foreground">{why}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

const railItem =
  "relative flex gap-4 pb-6 last:pb-0 after:absolute after:bottom-1 after:left-[21.5px] after:top-12 after:w-px after:bg-border after:content-[''] last:after:hidden";
const railDot = "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold tabular-nums text-primary";
const cardHover = "motion-safe:transition-[transform,box-shadow] motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 hover:shadow-md";

const CarpetStainGuide = () => {
  // Smooth in-page jumps while this page is mounted, unless the device asks for reduced motion.
  // Set on <html> here and removed on unmount, so no global stylesheet changes.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "smooth";
    return () => {
      html.style.scrollBehavior = prev;
    };
  }, []);
  const { seoHelmet } = useSEO({
    title: "How to Get Stains Out of Carpet: Pet, Wine, Milk, Blood",
    description:
      "What to do in the first minutes after a pet accident or spill on carpet, the Carpet and Rug Institute steps for each stain, and when to call a professional.",
    canonical: URL,
    ogType: "article",
    ogImage: OG_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        {/* Hero illustration is the LCP image on desktop; the preload mirrors the <img>. */}
        <link rel="preload" as="image" href={HERO.src} imageSrcSet={HERO.srcSet} imageSizes={HERO_SIZES} fetchPriority="high" media="(min-width: 1024px)" />
      </Helmet>

      <ArticleSchema
        title={TITLE}
        description="First-response steps for any carpet spill, stain-by-stain guidance for pet urine, feces, vomit, red wine, milk, blood and coffee, why spots come back, wool and fiber limits, winter mud and road salt, and when to call a professional. Sourced from the Carpet and Rug Institute, IICRC, WoolSafe, CDC and EPA."
        url={URL}
        datePublished={PUBLISHED}
        dateModified={MODIFIED}
        image={HERO.src}
        imageWidth={HERO.width}
        imageHeight={HERO.height}
        imageCaption={HERO.alt}
        about={["Carpet stain removal", "Pet stains"]}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Carpet Stain Guide", href: `/resources/${SLUG}` },
        ]}
      />

      <article>
        {/* Compact hero: title, one-line answer, jump links. On desktop the illustration sits on the
            right; on phones nothing large comes before the stain selector, which starts right under. */}
        <section className="bg-gradient-to-br from-primary/[0.08] via-background to-accent/[0.08]">
          <div className="container mx-auto max-w-6xl px-4 pb-8 pt-5 lg:pb-12 lg:pt-8">
            <div className="mb-4 flex min-h-14 items-start sm:min-h-6">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Resources", href: "/resources" },
                  { label: "Carpet Stain Guide" },
                ]}
              />
            </div>
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-14">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">Home Care Guides</p>
                <h1 className="mb-3 font-heading text-3xl font-bold leading-[1.12] text-foreground md:text-4xl lg:text-[2.75rem]">{TITLE}</h1>
                <p className="mb-3 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Pet urine and feces, vomit, red wine, milk, blood, coffee, and winter mud and road salt. What to do
                  first, the carpet industry's own steps for each, and when to stop and call someone.
                </p>
                <p className="mb-5 text-sm text-muted-foreground">
                  By Rodrigo Reis, Owner, Capital Clean Care · Published <time dateTime={PUBLISHED}>October 7, 2026</time> ·
                  Updated <time dateTime={MODIFIED}>October 8, 2026</time>
                </p>
                <aside aria-label="Short answer" className="rounded-2xl border border-primary/20 bg-white p-5 shadow-sm">
                  <p className="font-heading text-sm font-bold uppercase tracking-wider text-primary mb-2">Short answer</p>
                  <p className="text-base md:text-lg leading-relaxed text-foreground">
                    Pick up the solids, blot with a white cloth from the edge of the spot inward, never rub, pretest
                    any cleaner, then rinse with water and blot dry. Pick your stain below for the exact steps.
                  </p>
                </aside>
                <nav aria-label="Jump to" className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {toc.map(([id, label]) => (
                    <a key={id} href={`#${id}`} className="text-primary underline-offset-2 hover:underline focus-visible:underline">
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
              <figure className="hidden lg:block">
                <img
                  src={HERO.src}
                  srcSet={HERO.srcSet}
                  sizes={HERO_SIZES}
                  alt={HERO.alt}
                  width={HERO.width}
                  height={HERO.height}
                  loading="eager"
                  fetchPriority="high"
                  className="aspect-[3/2] w-full rounded-2xl border border-border object-cover shadow-sm"
                />
                <figcaption className="mt-2 text-xs text-muted-foreground">{ILLUSTRATION_NOTE}</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <Band id="stains" eyebrow="Pick your stain" title="Stain by Stain" still>
          <StainSelector />
        </Band>

        <Band id="first-minutes" eyebrow="Any spill" title="The First Five Minutes" tinted>
          <p className={pClass}>
            The CRI opens every stain page the same way: act quickly, because delay can make a spill permanent. These
            six moves are the common ground of the <Ext href={SRC.criCare}>CRI</Ext>,{" "}
            <Ext href={SRC.shaw}>Shaw Floors</Ext>, the <Ext href={SRC.iicrc}>IICRC tip sheet</Ext> and{" "}
            <Ext href={SRC.woolsafe}>WoolSafe</Ext>, for synthetic carpet.
          </p>
          <div className="mb-6 rounded-2xl border border-border bg-white p-5">
            <EdgeToCenterDiagram />
          </div>
          <FirstMinutesChecklist />
          <p className="rounded-2xl border border-border bg-white p-5 text-base text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Keep out of it:</strong> laundry or dishwasher detergent (brighteners
            and bleaching agents, says the CRI), any product that claims no rinsing is needed (the IICRC's test: let
            half an ounce evaporate in a glass and look for sticky residue), and anything the carpet's care guide
            excludes. For a large wet spill, the IICRC's first tool is a small wet/dry vacuum. With pets at home, read
            labels the way our guide to{" "}
            <Link to={PET_SAFE_LABELS} className={linkClass}>what "pet-safe" cleaning really means</Link> explains.
          </p>
        </Band>

        <Band id="comes-back" eyebrow="The second day" title="Why a Spot or Smell Comes Back">
          <p className={pClass}>
            The IICRC calls it wicking: as the carpet dries, what is left at the base of the yarn or in the backing
            travels up to the tips and shows again. Wine, coffee and urine that reached the pad are the usual cases,
            and a pad that still holds the spill can bring an odor back on a humid day (
            <Ext href={SRC.iicrc}>IICRC</Ext>).
          </p>
          <p className={pClass}>
            For a stain that reappears after the carpet has been cleaned and dried (not for a soaked pad or water
            still coming in), the IICRC's routine is patient: let it dry at least 48 hours, vacuum slowly from three
            directions, mist distilled water and blot while the towel still picks up soil, then weigh a thick pad of
            white paper towels on the spot for 6 to 8 hours. Odor is different: the CRI says cat urine odor is
            unlikely to go unless the urine itself is completely removed. For the rest of the house, see{" "}
            <Link to={DOG_SMELL_GUIDE} className={linkClass}>dog smell</Link>,{" "}
            <Link to={PET_HAIR_ODORS} className={linkClass}>pet hair and odors</Link> and, for a musty smell,{" "}
            <Link to={MILDEW_SMELL} className={linkClass}>mildew</Link>.
          </p>
        </Band>

        <Band id="disinfecting" eyebrow="Body fluids" title="Spot Cleaning Is Not Disinfecting" tinted still>
          <p className={pClass}>
            Everything above removes the spill; it does not kill germs. The CDC separates cleaning (soap, water,
            scrubbing) from disinfecting (killing most germs), tells you to clean soft surfaces with products made
            for them and to disinfect in addition when someone at home is sick or at higher risk, and says never to
            mix products (<Ext href={SRC.cdcClean}>CDC</Ext>).
          </p>
          <p className={pClass}>
            After vomiting or diarrhea from someone who may have a stomach virus, the CDC's norovirus page says to
            wear gloves, wipe up with paper towels into a plastic bag, use an EPA-registered product effective
            against norovirus, and wash your hands (<Ext href={SRC.cdcNoro}>CDC</Ext>). It gives no carpet procedure.
            On carpet, a product is an option only when its label claims norovirus and also allows carpet or soft
            surfaces; follow its directions and contact time. If no product fits both, have the area assessed.
            Blood beyond small droplets and larger body-fluid spills need a trained technician (IICRC); Capital
            Clean Care does not do biohazard cleanup.
          </p>
        </Band>

        <Band id="fibers" eyebrow="Know the fiber" title="Wool, Silk and Unknown Fibers" still>
          <p className={pClass}>
            The CRI steps above are written for nylon, polyester and olefin. WoolSafe says never to use dish washing
            liquids, soaps or other household cleaners on wool carpets and rugs (rapid resoiling, color bleeding,
            damage to pile or backing), only products carrying the WoolSafe mark, in small amounts on a cloth, rinsed
            and dried (<Ext href={SRC.woolsafe}>WoolSafe</Ext>). The IICRC adds that 3% hydrogen peroxide is not
            recommended on wool or other natural fibers without extensive testing for color loss.
          </p>
          <p className={pClass}>
            Silk, viscose, jute, antique or hand-knotted rugs, and any rug whose fiber you do not know: blot with a
            dry white cloth, nothing else, and call. The label on the back, the retailer or the mill's care guide will
            tell you the fiber and the warranty's own rules.
          </p>
        </Band>

        <Band id="winter" eyebrow="Maryland winters" title="Winter: Mud, Road Salt and Wet Boots" tinted still>
          <p className={pClass}>
            From the first snow to the last thaw, the entry rug and the first feet of hallway carpet take snowmelt,
            mud and road salt daily. Water from snowmelt or wet boots gets blotted up right away so the area starts
            drying. Mud is the exception: once dry, it lifts out with a vacuum instead of smearing. Our{" "}
            <Link to={WINTER_TIPS} className={linkClass}>eco cleaning tips for Maryland winters</Link> cover the rest
            of the house.
          </p>
          <ul className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className={`rounded-2xl border border-border bg-white p-5 ${cardHover}`}>
              <strong className="block font-heading text-base text-foreground">Mud</strong>
              <span className="mt-1 block text-[15px] leading-snug text-muted-foreground">
                Dry, break up, vacuum, then the <Ext href={SRC.criMud}>CRI mud page</Ext>: detergent solution, blot,
                lukewarm rinse, cold rinse, blot dry.
              </span>
            </li>
            <li className={`rounded-2xl border border-border bg-white p-5 ${cardHover}`}>
              <strong className="block font-heading text-base text-foreground">Road salt and ice melt</strong>
              <span className="mt-1 block text-[15px] leading-snug text-muted-foreground">
                The <Ext href={SRC.criSalt}>CRI salt page</Ext> vacuums the dry residue first, then detergent solution,
                lukewarm and cold rinses, blot dry. A white crust that returns as it dries is wicking: rinse and blot
                again, or have it cleaned.
              </span>
            </li>
            <li className={`rounded-2xl border border-border bg-white p-5 ${cardHover}`}>
              <strong className="block font-heading text-base text-foreground">Wet boots</strong>
              <span className="mt-1 block text-[15px] leading-snug text-muted-foreground">
                An entry mat at every outside door, cleaned regularly, that lies flat and stays put (
                <Ext href={SRC.criWinter}>CRI</Ext>). Boots off at the mat does more than any cleaner.
              </span>
            </li>
          </ul>
          <figure className="mb-6">
            <img
              src={WINTER.src}
              srcSet={WINTER.srcSet}
              sizes={PANEL_SIZES}
              alt={WINTER.alt}
              width={WINTER.width}
              height={WINTER.height}
              loading="lazy"
              decoding="async"
              className="aspect-[3/2] w-full rounded-2xl border border-border object-cover"
            />
            <figcaption className="mt-2 text-xs text-muted-foreground">{ILLUSTRATION_NOTE}</figcaption>
          </figure>
          <p className={pClass}>
            <strong className="text-foreground">Drying is the winter problem.</strong> Windows stay shut, and the
            IICRC warns that the pad can stay wet long after the surface feels dry. Blot until nothing transfers, do
            not soak the area while cleaning, and give it air. The EPA says to act quickly: materials dried within 24
            to 48 hours usually do not grow mold (<Ext href={SRC.epaMold}>EPA</Ext>), a prevention window, not a time
            to wait. A soaked pad, water from a leak or contaminated water, or an area you cannot get drying
            promptly: ask for a water-damage assessment early. Season-long carpet care is in{" "}
            <Link to={CARPET_GUIDE} className={linkClass}>how to clean the carpet in your home or apartment</Link>.
          </p>
        </Band>

        <Band id="call-a-pro" eyebrow="Being straight about it" title="When to Call a Professional" still>
          <p className={pClass}>
            The CRI ends every stain page the same way: professional cleaners have the ability and the equipment to
            use more aggressive cleaning solutions. Who to call depends on what you see. Directories:{" "}
            <Ext href={SRC.iicrcLocator}>IICRC certified firms</Ext> and{" "}
            <Ext href={SRC.woolsafeFind}>WoolSafe approved providers</Ext>.
          </p>
          <ul className="mb-8 grid gap-4 sm:grid-cols-2">
            {whoToCall.map(([who, when]) => (
              <li key={who} className={`rounded-2xl border border-border bg-white p-5 ${cardHover}`}>
                <strong className="block font-heading text-base text-foreground">{who}</strong>
                <span className="mt-1 block text-[15px] leading-snug text-muted-foreground">{when}</span>
              </li>
            ))}
          </ul>
          {/* Bridge to house cleaning (owner's objective). The scope named is the published one of the
              recurring service; extraction, rug washing, water damage and biohazard work are named as
              separate trades, and nothing here says we provide them. */}
          <aside aria-label="House cleaning" className="grid gap-5 rounded-2xl border border-primary/20 bg-white p-5 sm:grid-cols-[minmax(0,1fr)_11rem] md:p-6">
            <figure className="sm:order-2">
              <img
                src={REAL_VACUUM.src}
                alt={REAL_VACUUM.alt}
                width={REAL_VACUUM.width}
                height={REAL_VACUUM.height}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rounded-xl object-cover object-[center_35%] sm:aspect-[3/4]"
              />
              <figcaption className="mt-2 text-xs text-muted-foreground">A Capital Clean Care team member vacuuming a wood floor beneath lifted furniture on a house cleaning visit. Real photo.</figcaption>
            </figure>
            <div className="sm:order-1">
              <h3 className="mb-2 font-heading text-xl font-bold text-foreground">The rest of the house, after the spot</h3>
              <p className="mb-3 text-base leading-relaxed text-muted-foreground">
                A stain is one afternoon. A Maryland winter is daily: grit and salt at the door, hallway carpet that
                needs slow vacuuming, hard floors that need a damp mop, baseboards and the mudroom. That ongoing work
                is house cleaning, which is what we do.
              </p>
              <p className="mb-4 text-base leading-relaxed text-muted-foreground">
                Our <Link to={RECURRING} className={linkClass}>recurring cleaning</Link> covers vacuuming carpets and
                rugs, mopping hard floors and the entryway on a schedule you choose; after a long winter, a{" "}
                <Link to={DEEP_CLEANING} className={linkClass}>deep cleaning</Link> adds baseboards and vents. Leaving
                a rental? See the{" "}
                <Link to={MOVE_OUT_CHECKLIST} className={linkClass}>move-out cleaning checklist for Maryland tenants</Link>.
                Carpet extraction, rug washing, water damage and biohazard cleanup are separate trades from house
                cleaning.
              </p>
              <Link
                to={CONTACT}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Get a House Cleaning Quote
              </Link>
            </div>
          </aside>
        </Band>

        <Band id="faq" eyebrow="Questions" title="Frequently Asked Questions" tinted>
          <FaqList items={faqs} />
        </Band>

        <Band id="sources" eyebrow="References" title="Sources" still>
          {/* Native disclosure: the list is in the HTML, collapsed by default on every width. */}
          <details className="mb-6 rounded-2xl border border-border bg-white">
            <summary className="cursor-pointer list-none p-5 font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary [&::-webkit-details-marker]:hidden">
              {sources.length} primary sources, read on October 5, 2026
            </summary>
            <ul className="space-y-2 border-t border-border px-5 pb-5 pt-4 list-disc pl-10 text-base text-muted-foreground leading-relaxed">
              {sources.map(([label, href]) => (
                <li key={href}>
                  <Ext href={href}>{label}</Ext>
                </li>
              ))}
            </ul>
          </details>
          <p className="rounded-2xl border border-border bg-white p-5 text-sm text-muted-foreground leading-relaxed">
            General information from a house cleaning company. Carpet fibers, dyes, backings and warranties differ;
            the manufacturer's care instructions and the product label take precedence over anything here. Capital
            Clean Care does not provide biohazard cleanup, water damage restoration or mold remediation.
          </p>
        </Band>
      </article>

      <RelatedPosts currentSlug={SLUG} showVideos={false} authorBioVariant="factual" />
      <StickyCTA />
    </Layout>
  );
};

export default CarpetStainGuide;
