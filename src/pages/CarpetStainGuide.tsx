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
const TITLE = "Carpet Stain Guide: Pet Accidents, Wine, Milk, Blood and Coffee";
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
  ["first-minutes", "The First Five Minutes, for Any Spill"],
  ["stains", "Stain by Stain"],
  ["comes-back", "Why a Spot or Smell Comes Back"],
  ["disinfecting", "Spot Cleaning Is Not Disinfecting"],
  ["fibers", "Wool, Silk and Unknown Fibers"],
  ["winter", "Winter: Mud, Road Salt and Wet Boots"],
  ["call-a-pro", "When to Call a Professional"],
  ["faq", "Frequently Asked Questions"],
  ["sources", "Sources"],
];

// The six moves that apply to every spill on synthetic carpet. Each is attributed in the rail.
const firstSteps: [string, ReactNode][] = [
  ["Pick up what you can", "Lift solids with a spoon or plastic scraper. Do not press them into the pile. Blot liquids with a dry white cloth or plain white paper towels (CRI, IICRC)."],
  ["Blot, do not rub", "Rubbing frays the fibers and pushes the spill deeper (CRI, Shaw Floors). Press and lift, then move to a clean part of the cloth."],
  ["Work from the edge in", "Start at the outside of the spot and move toward the center, so it does not spread (CRI, WoolSafe)."],
  ["Pretest anything you apply", "Try the product on a hidden spot first, such as inside a closet, and check the cloth for color (CRI)."],
  ["Small amounts, on the cloth", "Apply the solution to the cloth, not straight onto the carpet, and never a stronger mix than the label or the CRI page gives (CRI, WoolSafe)."],
  ["Rinse and dry", "Blot with clear water until no product is left, then blot dry. Avoid soaking the carpet (CRI)."],
];

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
      "Remove solids, then take up as much liquid as you can. The IICRC suggests a wet/dry vacuum before any spotting.",
    then: (
      <>
        The <Ext href={SRC.criVomit}>CRI vomit page</Ext> applies the detergent solution, blots, rinses, then
        the vinegar solution, and ends with a cold water rinse blotted dry.
      </>
    ),
    caution:
      "Stomach acid and food or medicine dyes can stain permanently, and the longer vomit sits, the more likely the stain and the odor (IICRC). If it came from someone who is sick, read the disinfecting section below.",
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
        The <Ext href={SRC.criWine}>CRI wine page</Ext> uses the detergent solution and a water rinse. It warns
        that using the vinegar solution before the wine is completely removed can set a permanent stain. The
        full walkthrough, with photos, is in our{" "}
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
      "Medications in the bloodstream of a person or a pet can prevent full removal (IICRC).",
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
      "Coffee and tea are dyes; the IICRC notes that full removal is not always possible on every fiber.",
    pro: "A tan ring that comes back after the spot dries.",
  },
];

const faqs = [
  {
    q: "How do I get cat pee out of carpet?",
    a: "Blot with white paper towels until nothing more transfers. The Carpet and Rug Institute's pet urine bulletin then blots in a solution of 1/4 teaspoon of liquid dish detergent in 1 cup of lukewarm water, rinses with water, repeats while there is transfer, and finishes with 1 cup of white vinegar in 2 cups of water, blotted dry. Enzyme products from pet stores are an option; follow the label and pretest. The CRI warns that unless cat urine is completely removed, complete odor removal is unlikely, so old or repeated spots are usually a job for a carpet cleaning professional.",
  },
  {
    q: "How do I get dog poop out of carpet?",
    a: "Put on gloves, lift the solids with a plastic scraper or spoon without pressing down, and bag them. The CRI feces page then works in the detergent solution, blots, rinses with lukewarm water, uses the vinegar solution, and finishes with a cold water rinse blotted dry. For loose stools the IICRC treats the area like fresh urine and follows with a disinfectant whose label allows soft surfaces.",
  },
  {
    q: "How do I get throw up out of carpet?",
    a: "Remove the solids, take up as much liquid as you can (the IICRC suggests a wet/dry vacuum), then follow the CRI vomit page: detergent solution, blot, rinse, vinegar solution, cold rinse, blot dry. If the person may have a stomach virus, the CDC's norovirus guidance is to wear gloves, wipe up with paper towels into a plastic bag, use an EPA-registered product effective against norovirus, and wash your hands. On carpet, that product's label also has to allow use on carpet or soft surfaces, and you follow its directions and contact time. If no product meets both, have the area assessed by a specialist rather than relying on spot cleaning.",
  },
  {
    q: "How do I get milk out of carpet, and the sour smell?",
    a: "Blot promptly, work in the detergent solution, and rinse several times with lukewarm water, then blot dry and let it dry completely. If a sour smell stays after the spot has dried, some milk may be left in the fibers, the backing or the pad. The smell alone does not tell you where, so a smell that persists is the point to have the carpet assessed by a carpet cleaning professional.",
  },
  {
    q: "Can I use a steam cleaner on pet urine?",
    a: "Not as a first step. Treat and rinse the spot by hand first. The IICRC notes that the heat and humidity of cleaning can amplify odors, and its tip sheet only uses a home machine to rinse with clear water after no evidence of the stain remains. Check your carpet's care guide before using any machine on it.",
  },
  {
    q: "Is vinegar safe on carpet?",
    a: "On synthetic carpet, the CRI uses 1 cup of white vinegar in 2 cups of water after the detergent step for several stains, to reduce the alkalinity left by detergent. It is not a first step, and on wine the CRI warns that using it before the spill is removed can set the stain. On wool, WoolSafe says to use only WoolSafe-approved products. Pretest in a hidden spot either way.",
  },
  {
    q: "How do I dry a wet carpet spot in winter?",
    a: "Blot with dry towels until no moisture transfers, and do not soak the area while cleaning. The EPA says that if wet materials are dried within 24 to 48 hours, in most cases mold will not grow. The IICRC points out that the pad can stay wet while the surface feels dry. That window is for prevention, not for waiting. If the pad is soaked, the water came from a leak or is contaminated, or you cannot get the spot drying promptly, ask for a water-damage assessment early rather than doing more spot cleaning.",
  },
];

const whoToCall: [string, string][] = [
  ["Carpet cleaning professional", "Spots that return, odors that linger, old pet urine, large spills, and anything the carpet's warranty asks a professional to handle. The IICRC has a locator for certified firms."],
  ["WoolSafe approved cleaner", "Wool and wool-rich carpets and rugs. WoolSafe keeps a directory of approved service providers."],
  ["Water damage or restoration specialist", "Carpet that stays wet, a musty smell that keeps coming back, or water from a leak or sewage. The EPA says contaminated water calls for a professional with that experience."],
  ["Veterinarian", "A pet that keeps having accidents. That is not a carpet question, and no cleaning method answers it."],
];

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
const StainSelector = () => {
  const [active, setActive] = useState(0);
  return (
    <div>
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
              className={`min-h-11 rounded-full border px-3 py-2 text-sm font-semibold leading-tight transition-colors sm:min-h-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                selected ? "border-primary bg-primary text-white" : "border-border bg-white text-foreground hover:border-primary/50"
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>
      {stains.map((s, i) => (
        <div
          key={s.id}
          role="tabpanel"
          id={`stain-panel-${s.id}`}
          aria-labelledby={`stain-tab-${s.id}`}
          hidden={active !== i}
          className="overflow-hidden rounded-2xl border border-border bg-white p-5 sm:p-6"
        >
          {s.image ? (
            <figure className="-mx-5 -mt-5 mb-5 sm:-mx-6 sm:-mt-6">
              <img
                src={s.image.src}
                srcSet={s.image.srcSet}
                sizes={PANEL_SIZES}
                alt={s.image.alt}
                width={s.image.width}
                height={s.image.height}
                loading="lazy"
                decoding="async"
                className="aspect-[3/2] w-full rounded-t-2xl object-cover"
              />
              <figcaption className="px-5 pt-2 text-xs text-muted-foreground sm:px-6">{ILLUSTRATION_NOTE}</figcaption>
            </figure>
          ) : null}
          <h3 className="mb-4 font-heading text-xl font-bold text-foreground">{s.label}</h3>
          <dl className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">First</dt>
              <dd>{s.first}</dd>
            </div>
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
                aria-expanded={isOpen}
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
              hidden={!isOpen}
              className="px-5 pb-5 pt-4 border-t border-border text-muted-foreground leading-relaxed"
            >
              {faq.a}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const railItem =
  "relative flex gap-4 pb-6 last:pb-0 after:absolute after:bottom-1 after:left-[13.5px] after:top-9 after:w-px after:bg-border after:content-[''] last:after:hidden";
const railDot = "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold tabular-nums text-primary";

const CarpetStainGuide = () => {
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
        <link rel="preload" as="image" href={HERO.src} imageSrcSet={HERO.srcSet} imageSizes={HERO_SIZES} fetchPriority="high" />
      </Helmet>

      <ArticleSchema
        title={TITLE}
        description="First-response steps for any carpet spill, stain-by-stain guidance for pet urine, feces, vomit, red wine, milk, blood and coffee, why spots come back, wool and fiber limits, winter mud and road salt, and when to call a professional. Sourced from the Carpet and Rug Institute, IICRC, WoolSafe, CDC and EPA."
        url={URL}
        datePublished={PUBLISHED}
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
        {/* Hero: text left, the first-five-minutes card right. No photo (see the file comment). */}
        <section className="bg-gradient-to-br from-primary/[0.08] via-background to-accent/[0.08]">
          <div className="container mx-auto max-w-6xl px-4 pb-10 pt-6 lg:pb-16 lg:pt-10">
            {/* Fixed-height slot: the breadcrumb separator icons are 24px until the full stylesheet
                arrives, which otherwise shifts the page on phones (measured on the dust guide). */}
            <div className="mb-6 flex min-h-14 items-start sm:min-h-6">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Resources", href: "/resources" },
                  { label: "Carpet Stain Guide" },
                ]}
              />
            </div>
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center lg:gap-14">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">Home Care Guides</p>
                <h1 className="mb-4 font-heading text-3xl font-bold leading-[1.12] text-foreground md:text-4xl lg:text-[2.75rem]">{TITLE}</h1>
                <p className="mb-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  What to do first, what the carpet industry's own instructions say for each stain, and when to stop and call someone
                </p>
                <p className="mb-6 text-sm text-muted-foreground">
                  By Rodrigo Reis, Owner, Capital Clean Care · Published <time dateTime={PUBLISHED}>October 7, 2026</time>
                </p>
                <aside aria-label="Short answer" className="rounded-2xl border border-primary/20 bg-white p-5 shadow-sm sm:p-6">
                  <p className="font-heading text-sm font-bold uppercase tracking-wider text-primary mb-2">Short answer</p>
                  <p className="text-base md:text-lg leading-relaxed text-foreground">
                    For almost any spill on carpet: pick up the solids, blot with a white cloth or paper towel,
                    never rub, and work from the edge of the spot toward the center. Pretest any cleaner in a
                    hidden spot, use small amounts on a cloth, then rinse with water and blot dry. Pet urine, wool
                    rugs and anything from a sick person have extra rules, covered below.
                  </p>
                </aside>
              </div>
              <div className="space-y-6">
              <figure>
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
              {/* Desktop only: on phones it would sit under the short answer and repeat the rail below. */}
              <aside aria-label="Any spill, first five minutes" className="hidden rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-6 lg:block">
                <p className="font-heading text-sm font-bold uppercase tracking-wider text-primary mb-3">Any spill, the first five minutes</p>
                <ol className="space-y-2 text-sm leading-snug text-foreground">
                  {firstSteps.map(([step], i) => (
                    <li key={step} className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold tabular-nums text-primary">{i + 1}</span>
                      <span className="pt-0.5 font-medium">{step}</span>
                    </li>
                  ))}
                </ol>
                <a href="#first-minutes" className={`mt-4 inline-block text-sm ${linkClass}`}>
                  Why each step matters
                </a>
              </aside>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-white py-10 md:py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <p className={pClass}>
              This guide is written by a house cleaning company, not a carpet mill or a restoration firm. Where it
              gives a procedure, the procedure is the Carpet and Rug Institute's, the IICRC's or WoolSafe's, with a
              link to the page it came from, so you can check the exact wording and the exact mix. Your carpet's
              own care guide and warranty come first when they say something different.
            </p>

            <nav aria-label="Table of contents" className="my-8 rounded-2xl border border-border bg-gray-50 p-5 sm:p-6">
              <p className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">In this guide</p>
              <ol className="grid gap-2 sm:grid-cols-2 text-sm">
                {toc.map(([id, label], i) => (
                  <li key={id}>
                    <a href={`#${id}`} className="flex gap-2 text-foreground underline-offset-2 hover:underline focus-visible:underline">
                      <span className="text-primary font-semibold">{i + 1}.</span> {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <aside aria-label="Key facts">
              <p className="font-heading font-bold text-foreground mb-3">Key facts, with sources</p>
              <ul className="grid gap-4 sm:grid-cols-3">
                <li className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <span aria-hidden="true" className="block font-heading text-3xl font-extrabold leading-none tabular-nums text-primary md:text-4xl">1/4 tsp</span>
                  <span className="mt-2 block text-[15px] leading-snug text-muted-foreground">
                    The CRI's home spotting solution is 1/4 teaspoon of liquid dish detergent in 1 cup of lukewarm water,
                    never stronger, pretested first (<Ext href={SRC.criBlood}>CRI</Ext>).
                  </span>
                </li>
                <li className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <span aria-hidden="true" className="block font-heading text-3xl font-extrabold leading-none text-primary md:text-4xl">Not on wool</span>
                  <span className="mt-2 block text-[15px] leading-snug text-muted-foreground">
                    WoolSafe says never to use dish washing liquids or other general household cleaners on wool carpets
                    and rugs (<Ext href={SRC.woolsafe}>WoolSafe</Ext>).
                  </span>
                </li>
                <li className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <span aria-hidden="true" className="block font-heading text-3xl font-extrabold leading-none tabular-nums text-primary md:text-4xl">24 to 48 h</span>
                  <span className="mt-2 block text-[15px] leading-snug text-muted-foreground">
                    If wet materials are dried within 24 to 48 hours, in most cases mold will not grow (
                    <Ext href={SRC.epaMold}>EPA</Ext>).
                  </span>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <Band id="first-minutes" eyebrow="Any spill" title="The First Five Minutes, for Any Spill" tinted>
          <p className={pClass}>
            The CRI's stain pages open with the same line every time: act quickly, because delay can turn a spill
            into a permanent stain. The six moves below are the common ground of the{" "}
            <Ext href={SRC.criCare}>CRI</Ext>, <Ext href={SRC.shaw}>Shaw Floors</Ext>, the{" "}
            <Ext href={SRC.iicrc}>IICRC tip sheet</Ext> and <Ext href={SRC.woolsafe}>WoolSafe</Ext>. They apply to
            synthetic carpet; wool and silk have their own section.
          </p>
          <div className="mb-6 rounded-2xl border border-border bg-white p-5">
            <EdgeToCenterDiagram />
          </div>
          <ol className="mb-6">
            {firstSteps.map(([step, why], i) => (
              <li key={step} className={railItem}>
                <span aria-hidden="true" className={railDot}>{i + 1}</span>
                <div>
                  <strong className="block font-heading text-base text-foreground">{step}</strong>
                  <span className="mt-1 block text-base leading-relaxed text-muted-foreground">{why}</span>
                </div>
              </li>
            ))}
          </ol>
          <p className="rounded-2xl border border-border bg-white p-5 text-base text-muted-foreground leading-relaxed">
            <strong className="text-foreground">What to keep out of it.</strong> Laundry detergent and dishwasher
            detergent (the CRI says never; they carry brighteners and bleaching agents), a stronger mix than the one
            given, and any product that claims no rinsing is needed (the IICRC's own
            test: let a half ounce evaporate in a glass; sticky residue in the glass means sticky residue in your
            carpet). For a large wet spill, the IICRC's first tool is a small wet/dry vacuum. With pets in the
            house, read the label the way our guide to{" "}
            <Link to={PET_SAFE_LABELS} className={linkClass}>what "pet-safe" cleaning really means</Link> explains.
          </p>
        </Band>

        <Band id="stains" eyebrow="Pick your stain" title="Stain by Stain" still>
          <p className={pClass}>
            Each card names the CRI page it follows. "Detergent solution" and "vinegar solution" mean the CRI
            mixes from the key facts: 1/4 teaspoon of liquid dish detergent per cup of lukewarm water, and 1 cup of
            white vinegar per 2 cups of water. Pretest both in a hidden spot.
          </p>
          <StainSelector />
        </Band>

        <Band id="comes-back" eyebrow="The second day" title="Why a Spot or Smell Comes Back" tinted>
          <p className={pClass}>
            The IICRC calls it wicking: as the carpet dries, whatever is left at the base of the yarn and in the
            backing travels up to the tips and shows again. Wine, coffee and urine that reached the backing or the
            pad are the usual cases. The surface can look clean while the pad still holds the spill, which is why
            an odor can return on a humid day even after a good cleaning (<Ext href={SRC.iicrc}>IICRC</Ext>).
          </p>
          <p className={pClass}>
            For a stain that reappears after the carpet has been cleaned and dried, and only for that (not for a
            soaked pad or water still coming in), the IICRC tip sheet gives a patient routine: let the carpet dry for
            at least 48 hours, vacuum the area slowly from three or more directions, lightly mist distilled
            water and blot with a white towel while it keeps picking up soil, then cover the spot with a thick pad
            of white paper towels weighed down with a few books for 6 to 8 hours, changing them as they absorb.
          </p>
          <p className={pClass}>
            Odor is a different problem. The CRI notes that an odor, especially from cat urine, is unlikely to go
            completely unless the urine itself is completely removed. If the smell keeps coming back, more surface
            cleaning will not fix it. For the rest of the house, our{" "}
            <Link to={DOG_SMELL_GUIDE} className={linkClass}>guide to dog smell</Link> covers bedding, furniture and air,
            and <Link to={PET_HAIR_ODORS} className={linkClass}>removing pet hair and odors</Link> goes room by room. A
            musty smell is a moisture question rather than a pet one; see{" "}
            <Link to={MILDEW_SMELL} className={linkClass}>how to get rid of a mildew smell</Link>.
          </p>
        </Band>

        <Band id="disinfecting" eyebrow="Body fluids" title="Spot Cleaning Is Not Disinfecting" still>
          <p className={pClass}>
            Everything above removes the spill. It does not kill germs. The CDC separates the two: cleaning removes
            most germs and dirt with water, soap and scrubbing; disinfecting kills most germs on a surface. For
            soft surfaces such as carpet and rugs, the CDC's advice is to clean with products made for those
            surfaces, launder what can be laundered, and vacuum. It suggests disinfecting in addition when someone
            in the home is sick or at higher risk (<Ext href={SRC.cdcClean}>CDC</Ext>).
          </p>
          <p className={pClass}>
            After vomiting or diarrhea from a person who may have a stomach virus, the CDC's norovirus page says
            to wear gloves, wipe the area up with paper towels into a plastic trash bag, use an EPA-registered
            product effective against norovirus, and wash your hands afterward (<Ext href={SRC.cdcNoro}>CDC</Ext>).
            The CDC does not give a carpet procedure. On carpet, a product is an option only when its label claims
            effectiveness against norovirus and also allows use on carpet or soft surfaces; follow its directions
            and contact time. Cleaning the spot is not the same as disinfecting it against this virus. If no product
            fits both, have the area assessed by a specialist. Never mix products, and never mix bleach
            with ammonia or with an ammonia-based spotter.
          </p>
          <p className={pClass}>
            Blood and larger body-fluid spills are outside home cleaning. The IICRC says they need a technician
            trained in that kind of removal. Capital Clean Care does not do biohazard cleanup.
          </p>
        </Band>

        <Band id="fibers" eyebrow="Know the fiber" title="Wool, Silk and Unknown Fibers" tinted>
          <p className={pClass}>
            Most wall-to-wall carpet in the area is nylon, polyester or olefin, and the CRI procedures above are
            written for it. Wool is different. WoolSafe's consumer guide says never to use dish washing liquids,
            soaps or other general household cleaners on wool carpets and rugs: they can cause rapid resoiling,
            color bleeding or damage to the pile or backing. It recommends only products carrying the WoolSafe
            mark, no rubbing, small amounts on a cloth, a thorough rinse of any water-based spotter, and drying the
            spot afterward (<Ext href={SRC.woolsafe}>WoolSafe</Ext>). The IICRC adds that 3% hydrogen peroxide is
            not recommended on wool or other natural fibers without extensive testing for color loss.
          </p>
          <p className={pClass}>
            Silk, viscose, jute and antique or hand-knotted rugs are a professional's job from the first minute:
            blot with a dry white cloth, nothing else, and call. If you do not know what a rug is made of, treat it
            the same way. A label on the back, the retailer, or the mill's care guide will tell you the fiber and
            the warranty's own cleaning rules.
          </p>
        </Band>

        <Band id="winter" eyebrow="Maryland winters" title="Winter: Mud, Road Salt and Wet Boots" still>
          <p className={pClass}>
            From the first snow to the last thaw, the entry rug and the first few feet of hallway carpet take
            snowmelt, mud and road salt every day. Treat the two halves differently. Water from snowmelt or wet boots
            gets blotted up right away so the area starts drying. Mud is the exception: once it has dried, it lifts
            out with a vacuum instead of smearing. Our{" "}
            <Link to={WINTER_TIPS} className={linkClass}>eco cleaning tips for Maryland winters</Link> cover the rest of
            the house in the same season.
          </p>
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
          <ul className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-2xl border border-border bg-white p-5">
              <strong className="block font-heading text-base text-foreground">Mud</strong>
              <span className="mt-1 block text-[15px] leading-snug text-muted-foreground">
                Let it dry, break it up and vacuum it out, then the <Ext href={SRC.criMud}>CRI mud page</Ext>:
                detergent solution, blot, lukewarm rinse, cold rinse, blot dry. Wet mud smears; dry mud lifts.
              </span>
            </li>
            <li className="rounded-2xl border border-border bg-white p-5">
              <strong className="block font-heading text-base text-foreground">Road salt and ice melt</strong>
              <span className="mt-1 block text-[15px] leading-snug text-muted-foreground">
                The <Ext href={SRC.criSalt}>CRI salt page</Ext> starts by vacuuming the dry residue, then the
                detergent solution, a lukewarm rinse and a cold rinse, blotted dry. A white crust that shows again
                as the spot dries is wicking: repeat the rinse and blot, or have the area cleaned.
              </span>
            </li>
            <li className="rounded-2xl border border-border bg-white p-5">
              <strong className="block font-heading text-base text-foreground">Wet boots</strong>
              <span className="mt-1 block text-[15px] leading-snug text-muted-foreground">
                The CRI's winter advice is an entry mat at every outside door, cleaned regularly through the season,
                that lies flat and stays put (<Ext href={SRC.criWinter}>CRI</Ext>). WoolSafe says the same for wool.
                Boots off at the mat does more than any cleaner.
              </span>
            </li>
          </ul>
          <p className={pClass}>
            Drying is the winter problem. Windows stay shut, air moves less, and the IICRC warns that the pad can
            stay wet long after the surface feels dry. Blot until nothing transfers, keep the area from being
            soaked while you clean (the CRI's one rule for every stain), and give it air. The EPA says to act quickly:
            materials dried within 24 to 48 hours usually do not grow mold (<Ext href={SRC.epaMold}>EPA</Ext>). That
            is a prevention window, not a time to wait. If the pad is soaked, the water came from a leak or is
            contaminated, or you cannot get the area drying promptly, ask for a water-damage assessment early
            instead of waiting to see. For
            the rest of the season's carpet care, see{" "}
            <Link to={CARPET_GUIDE} className={linkClass}>how to clean the carpet in your home or apartment</Link>.
          </p>
        </Band>

        <Band id="call-a-pro" eyebrow="Being straight about it" title="When to Call a Professional" tinted still>
          <p className={pClass}>
            The CRI ends every stain page the same way: professional cleaners have the ability and the equipment
            to use more aggressive cleaning solutions. Who to call depends on what you are looking at:
          </p>
          <ul className="mb-8 grid gap-4 sm:grid-cols-2">
            {whoToCall.map(([who, when]) => (
              <li key={who} className="rounded-2xl border border-border bg-white p-5">
                <strong className="block font-heading text-base text-foreground">{who}</strong>
                <span className="mt-1 block text-base leading-relaxed text-muted-foreground">{when}</span>
              </li>
            ))}
          </ul>
          <p className="mb-6 text-base text-muted-foreground leading-relaxed">
            Directories: <Ext href={SRC.iicrcLocator}>IICRC certified firms</Ext> and{" "}
            <Ext href={SRC.woolsafeFind}>WoolSafe approved service providers</Ext>.
          </p>
          {/* Bridge to house cleaning (owner's objective, 05/10/2026). The scope named here is the
              published one of the recurring service (vacuuming carpets and rugs, mopping hard floors,
              entryway and mudroom). Carpet extraction, rug washing, water damage and biohazard work are
              named as separate trades; nothing here says we provide them. */}
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
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              A stain is one afternoon. What a Maryland winter does to a home is daily: grit and salt at the
              door, hallway carpet that needs slow vacuuming, hard floors that need a damp mop before the residue
              dulls them, baseboards and the mudroom. That ongoing work is house cleaning, which is what we do.
              Our <Link to={RECURRING} className={linkClass}>recurring cleaning</Link> covers vacuuming carpets and
              rugs, mopping hard floors and the entryway on a schedule you choose. After a long winter, a{" "}
              <Link to={DEEP_CLEANING} className={linkClass}>deep cleaning</Link> adds the detail work, baseboards and
              vents included. Leaving a rental? Start with our{" "}
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

        <Band id="faq" eyebrow="Questions" title="Frequently Asked Questions">
          <FaqList items={faqs} />
        </Band>

        <Band id="sources" eyebrow="References" title="Sources" tinted still>
          <ul className="space-y-2 mb-6 list-disc pl-6 text-base text-muted-foreground leading-relaxed">
            {sources.map(([label, href]) => (
              <li key={href}>
                <Ext href={href}>{label}</Ext>
              </li>
            ))}
          </ul>
          <p className="rounded-2xl border border-border bg-white p-5 text-sm text-muted-foreground leading-relaxed">
            This guide is general information from a house cleaning company. Carpet fibers, dyes, backings and
            warranties differ; the manufacturer's care instructions and the product label take precedence over
            anything here. Capital Clean Care does not provide biohazard cleanup, water damage restoration or mold
            remediation.
          </p>
        </Band>
      </article>

      <RelatedPosts currentSlug={SLUG} showVideos={false} authorBioVariant="factual" />
      <StickyCTA />
    </Layout>
  );
};

export default CarpetStainGuide;
