/**
 * Guide: "Can House Dust Make You Sick?". Informational, health-adjacent, written under
 * capitalcleancare.com-audit/dust-health-guide-2026-10-04/BRIEF-E-FONTES.md.
 *
 * Layout (owner's request, 04/10/2026): the visual rhythm of the post-construction service page
 * (two-column light hero, tiles under the answer, figure tiles, eyebrow labels, alternating
 * section bands, a numbered rail beside a photo, small photo cards, one calm closing card), in the
 * Resource Center palette. The service page's selling blocks are deliberately absent: no offer
 * bar, rating badge, quote buttons in the hero, proof strip, pricing, reviews, quote form or dark
 * closing call. The text of the guide is the reviewed text; only its presentation changed.
 */
import { useState, type ReactNode } from "react";
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

const URL = "https://capitalcleancare.com/resources/can-house-dust-make-you-sick";
const TITLE = "Can House Dust Make You Sick? A Practical Guide to Dust and Indoor Air";
// Candidate date. If the page is published on another day, set this (and the visible date in the
// hero) to the real publication date.
const PUBLISHED = "2026-10-04";
const MARYLAND_DUST_GUIDE = "/resources/why-dust-builds-up-maryland-homes";
const DEEP_CLEANING = "/services/deep-cleaning";

// Real photos only, reused from files already in the repo (nothing copied or edited):
//  - DC_DIR: sent by the owner for the Washington, DC post-renovation project, 1200x1600 with a
//    640x853 variant (see PostConstructionCleaningWashingtonDcTownhouse.tsx).
//  - SERVICE_DIR: the real proof photos of the post-construction service page (its two generated
//    room images are not used here).
// Alt text and captions describe only what the picture shows: none of them is evidence of
// filtration performance, of a health effect or of what a visit includes.
const DC_DIR = "/images/blog/post-construction-dc-townhouse";
const SERVICE_DIR = "/images/services/post-construction";
// Hero: the air scrubber. The owner asked for it to be the first image, as the piece of equipment
// that sets the company's dust work apart (04/10/2026). It is the original, unedited photo.
const HERO_PHOTO = {
  src: `${DC_DIR}/air-scrubber.webp`,
  srcSet: `${DC_DIR}/air-scrubber-640.webp 640w, ${DC_DIR}/air-scrubber.webp 1200w`,
  alt: "Capital Clean Care team member setting up a blue portable air scrubber beside a wall vent.",
  width: 1200,
  height: 1600,
};
const FLOOR_PHOTO = {
  src: `${DC_DIR}/floor-vacuum.webp`,
  srcSet: `${DC_DIR}/floor-vacuum-640.webp 640w, ${DC_DIR}/floor-vacuum.webp 1200w`,
  alt: "Team member using a floor cleaner with green lights on a wood floor.",
  width: 1200,
  height: 1600,
};
const DETAIL_PHOTO = {
  src: `${DC_DIR}/bathroom-towel-bar.webp`,
  srcSet: `${DC_DIR}/bathroom-towel-bar-640.webp 640w, ${DC_DIR}/bathroom-towel-bar.webp 1200w`,
  alt: "Team member detailing a chrome towel bar against a painted wall.",
  width: 1200,
  height: 1600,
};
const VENT_PHOTO = {
  src: `${SERVICE_DIR}/vent-cover.webp`,
  srcSet: `${SERVICE_DIR}/vent-cover-sm.webp 340w, ${SERVICE_DIR}/vent-cover.webp 680w`,
  alt: "Team member washing a dust-covered HVAC return cover in a sink.",
  width: 680,
  height: 680,
};
const TEAM_PHOTO = {
  src: `${SERVICE_DIR}/team-crew.webp`,
  srcSet: `${SERVICE_DIR}/team-crew-sm.webp 380w, ${SERVICE_DIR}/team-crew.webp 760w`,
  alt: "Five members of the Capital Clean Care team in navy uniforms, standing in a client's home.",
  width: 760,
  height: 1013,
};
// From lg the hero photo column is 26rem wide. Below lg the photo fills a box 37.5rem tall, so it
// is never narrower than 450px (3:4 at that height) and is as wide as the viewport above that.
const HERO_SIZES = "(min-width: 1024px) 416px, (min-width: 450px) 100vw, 450px";
// Link previews are cropped to a wide strip. This file is a plain 1200x630 crop of the hero photo
// (the air scrubber and the arm setting it down), with nothing added, so the size useSEO declares
// is the real one.
const OG_IMAGE = "/images/blog/can-house-dust/og-air-scrubber.jpg";

// Primary sources, read on 2026-10-04. Each fact taken from one of them is attributed in the text
// and used once in the body and at most once more in the key facts or the FAQ.
const SRC = {
  epaIaq: "https://www.epa.gov/indoor-air-quality-iaq/factsheet-what-indoor-air-quality",
  epaPm: "https://www.epa.gov/indoor-air-quality-iaq/sources-indoor-particulate-matter-pm",
  epaAsthma: "https://www.epa.gov/air-quality/asthma-and-your-health",
  epaDucts: "https://www.epa.gov/indoor-air-quality-iaq/should-you-have-air-ducts-your-home-cleaned",
  epaAirCleaners: "https://www.epa.gov/indoor-air-quality-iaq/guide-air-cleaners-home",
  airnowAqi: "https://www.airnow.gov/aqi/aqi-basics/",
  acaai: "https://acaai.org/allergies/allergic-conditions/dust-allergies/",
  cdcMold: "https://www.cdc.gov/mold-health/about/index.html",
  nioshMold: "https://www.cdc.gov/niosh/mold/health-problems/index.html",
};

const sources: [string, string][] = [
  ["EPA: What Is Indoor Air Quality? (factsheet)", SRC.epaIaq],
  ["EPA: Sources of Indoor Particulate Matter", SRC.epaPm],
  ["EPA: Asthma and Your Health", SRC.epaAsthma],
  ["EPA: Should You Have the Air Ducts in Your Home Cleaned?", SRC.epaDucts],
  ["EPA: Guide to Air Cleaners in the Home", SRC.epaAirCleaners],
  ["AirNow: Air Quality Index (AQI) Basics", SRC.airnowAqi],
  ["American College of Allergy, Asthma and Immunology (ACAAI): Dust Allergies", SRC.acaai],
  ["CDC: Mold", SRC.cdcMold],
  ["CDC NIOSH: Health Problems, Mold", SRC.nioshMold],
];

const toc: [string, string][] = [
  ["what-is-in-dust", "What Is in House Dust"],
  ["symptoms", "Symptoms Do Not Tell You the Cause"],
  ["closed-homes", "Why a Closed House Can Feel Dustier in Winter"],
  ["dust-or-moisture", "Dust, or a Moisture Problem?"],
  ["missed-spots", "Reachable Spots That Often Get Missed"],
  ["routine", "A Practical Order for Lowering Dust"],
  ["limits", "What Cleaning Can and Cannot Do"],
  ["faq", "Frequently Asked Questions"],
  ["sources", "Sources"],
];

// Three tiles under the hero. Each restates something the short answer or the FAQ already says.
const glance: [string, string][] = [
  ["Who it affects", "Some people. It depends on your own sensitivities and on the home."],
  ["What cleaning does", "It lowers the dust around you. It does not diagnose or treat anything."],
  ["When to see a doctor", "When symptoms persist, keep returning or affect your breathing."],
];

// Observations about the home, never about the reader's body. The middle column is a possibility
// and the third one a next step: neither is a test of what the dust contains or of how safe it is.
const observationRows: [string, string, string][] = [
  [
    "A thin gray film that comes back on furniture and shelves",
    "Settled dust. How it looks does not show what it contains or where it comes from.",
    "Dust with a damp cloth, vacuum and check the HVAC filter. Then look at likely sources such as fabrics, pets and open windows.",
  ],
  [
    "Dust on return grilles or vent covers",
    "Usually normal. EPA says dusty air is pulled through the grate, and this alone does not show that the ducts are contaminated.",
    "Vacuum the outside of the covers you can reach.",
  ],
  [
    "A musty smell, or spots on caulk, window frames, walls or ceilings",
    "Possible mold, which needs moisture to grow",
    "Find and fix the moisture. CDC does not recommend testing for the type, because any type needs to be removed.",
  ],
  [
    "Condensation on windows, water stains or a leak",
    "Excess moisture",
    "Repair the leak and lower the humidity. For damp materials or growth that returns, call a water damage or mold remediation professional.",
  ],
];

const missedSpots = [
  "Baseboards and the strip of floor along the walls",
  "Window sills, blinds and door frames within reach",
  "Shelves, picture frames and the tops of furniture you can reach from the floor",
  "The outside of vent covers and return grilles within reach",
  "Under beds and furniture, as far as you can reach without lifting heavy pieces",
];

const whoToCall: [string, string][] = [
  ["A doctor or allergist", "for symptoms that persist, keep returning or involve breathing."],
  ["A plumber, roofer or remediation professional", "for leaks, damp materials, visible mold growth or a musty smell that stays."],
  ["An HVAC professional", "for filter questions and anything inside the ducts."],
  ["A house cleaning company", "for dust on reachable surfaces that has gotten ahead of you."],
];

const faqs = [
  {
    q: "Can house dust make you sick?",
    a: "Sometimes, but dust is only one possible explanation for symptoms. A clinician can help assess the cause. Cleaning cannot diagnose it.",
  },
  {
    q: "When should I see a doctor about dust symptoms?",
    a: "When symptoms persist, keep returning or affect your breathing. An allergist can evaluate possible triggers and decide whether testing is needed. Trouble breathing needs emergency care right away.",
  },
  {
    q: "Why do I feel worse right after I clean?",
    a: "Cleaning can briefly stir up settled particles. The ACAAI suggests an N95 mask for allergic people when dusting, sweeping or vacuuming.",
  },
  {
    q: "Is dust on my air vents a sign the ducts need cleaning?",
    a: "Usually not. EPA says it is normal for return registers to get dusty and recommends duct cleaning only as needed, for example when there is substantial visible mold, pests, or debris being released from the supply registers. Those cases belong to a qualified HVAC or duct cleaning professional.",
  },
  {
    q: "Will an air purifier solve a dust problem?",
    a: "It can help with airborne particles as a supplement. EPA says no air cleaner or filter removes all pollutants and advises choosing a unit with a clean air delivery rate (CADR) sized for the room. Dust that has already settled on surfaces still has to be cleaned.",
  },
  {
    q: "Does professional cleaning treat allergies or asthma?",
    a: "No. Cleaning removes dust from surfaces and can lower the amount in the home. It is not a medical treatment. Allergies and asthma are diagnosed and managed with a doctor.",
  },
];

const pClass = "text-lg text-muted-foreground leading-relaxed mb-4";
const linkClass = "text-primary underline underline-offset-2 hover:no-underline";

const Ext = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
    {children}
  </a>
);

// One full-width band per topic, alternating white and tinted, with a hairline between them.
// The heading block carries the anchor: scroll-mt-28 clears the sticky header (102px on desktop).
// `still` leaves the content out of the scroll-reveal wrapper, for the parts that must not depend
// on an animation to be seen (symptoms and emergency note, limits, sources and closing notice).
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

// Conceptual diagram, drawn here as inline SVG (no image file, no generated picture). The two
// drawings are decorative and hidden from assistive technology; every label and the whole
// explanation are real text next to them, so nothing depends on seeing the drawing. It shows
// where dust is, not what it contains, and it is labelled as an illustration in the caption.
const airDots: [number, number, number, number][] = [
  [28, 30, 3, 0.55], [62, 58, 2, 0.4], [44, 96, 2.5, 0.5], [90, 24, 2, 0.45], [112, 78, 3, 0.55],
  [84, 112, 2, 0.4], [138, 40, 2.5, 0.5], [150, 100, 2, 0.45], [24, 70, 2, 0.4], [70, 84, 2.5, 0.5],
  [128, 118, 2, 0.4], [104, 50, 2, 0.45], [226, 46, 2, 0.4], [248, 92, 2.5, 0.45], [232, 120, 2, 0.4],
];
const SurfacesAndAirDiagram = () => (
  <figure className="my-8 rounded-2xl border border-border bg-white p-4 sm:p-6">
    <p className="font-heading font-bold text-foreground mb-4">Two places dust is, and what works on each</p>
    <div className="grid gap-4 sm:grid-cols-2">
      {/* On phones from 360px the drawing sits beside the text to keep the figure short. Narrower
          than that the text column would be too thin, so the panel stacks. */}
      <div className="items-start gap-3 rounded-xl border border-border bg-gray-50 p-4 min-[360px]:flex sm:block">
        <svg viewBox="0 0 280 140" width="280" height="140" aria-hidden="true" focusable="false" className="mb-3 h-auto w-full shrink-0 text-primary min-[360px]:mb-0 min-[360px]:w-28 sm:w-full">
          {/* a shelf and a floor, each with a thin layer of dust resting on it */}
          <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none">
            <line x1="40" y1="58" x2="240" y2="58" />
            <line x1="62" y1="58" x2="62" y2="74" />
            <line x1="218" y1="58" x2="218" y2="74" />
            <line x1="16" y1="122" x2="264" y2="122" />
          </g>
          <g fill="currentColor" fillOpacity="0.45">
            {[52, 66, 79, 93, 108, 121, 136, 150, 163, 178, 191, 206, 220, 230].map((x, i) => (
              <circle key={`shelf-${x}`} cx={x} cy={i % 2 ? 53 : 54} r={i % 3 ? 2 : 2.6} />
            ))}
            {[26, 44, 58, 77, 92, 110, 124, 143, 158, 176, 190, 209, 224, 242, 255].map((x, i) => (
              <circle key={`floor-${x}`} cx={x} cy={i % 2 ? 117 : 118} r={i % 3 ? 2 : 2.6} />
            ))}
          </g>
        </svg>
        <div className="sm:mt-3">
          <p className="font-heading font-bold text-foreground">Settled on surfaces</p>
          <p className="mt-1 text-base text-muted-foreground leading-relaxed">
            Dust resting on shelves, floors, fabrics and bedding. Damp dusting and vacuuming remove it.
          </p>
        </div>
      </div>
      <div className="items-start gap-3 rounded-xl border border-border bg-gray-50 p-4 min-[360px]:flex sm:block">
        <svg viewBox="0 0 280 140" width="280" height="140" aria-hidden="true" focusable="false" className="mb-3 h-auto w-full shrink-0 text-primary min-[360px]:mb-0 min-[360px]:w-28 sm:w-full">
          {/* particles floating in a room; a filter on the right with some particles still past it */}
          <g fill="currentColor">
            {airDots.map(([cx, cy, r, o]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fillOpacity={o} />
            ))}
          </g>
          <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none">
            <rect x="184" y="20" width="22" height="104" rx="4" />
            <line x1="190" y1="38" x2="200" y2="38" />
            <line x1="190" y1="55" x2="200" y2="55" />
            <line x1="190" y1="72" x2="200" y2="72" />
            <line x1="190" y1="89" x2="200" y2="89" />
            <line x1="190" y1="106" x2="200" y2="106" />
          </g>
          <g className="text-accent" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M150 62 H172 M165 55 L172 62 L165 69" />
            <path d="M212 82 H234 M227 75 L234 82 L227 89" />
          </g>
        </svg>
        <div className="sm:mt-3">
          <p className="font-heading font-bold text-foreground">Suspended in the air</p>
          <p className="mt-1 text-base text-muted-foreground leading-relaxed">
            Fine particles that stay in the air for a while. Cutting sources and bringing in clean outdoor air lower
            them. Filtration supplements that.
          </p>
        </div>
      </div>
    </div>
    <p className="mt-4 text-base text-muted-foreground leading-relaxed">
      The two feed each other. Dusting, sweeping and vacuuming can lift settled dust into the air, and airborne
      particles can settle onto surfaces again. That is why the steps above work on both.
    </p>
    <figcaption className="mt-3 text-sm text-muted-foreground leading-relaxed">
      Conceptual illustration, not a photograph and not to scale. It shows where dust is, not what it contains or how
      much is in any home.
    </figcaption>
  </figure>
);

// Local FAQ list. The shared FAQAccordion only mounts an answer after a click, which would leave
// every answer out of the prerendered HTML. Here all answers are rendered and closed panels carry
// the `hidden` attribute, so the visible FAQ and the FAQPage JSON-LD say the same thing.
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
                id={`dust-faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`dust-faq-a-${i}`}
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
              id={`dust-faq-a-${i}`}
              role="region"
              aria-labelledby={`dust-faq-q-${i}`}
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

// Numbered rail (same construction as the service page's "Ceiling to floor, in this order"):
// the connector is drawn per item, between the dots.
const railItem =
  "relative flex gap-4 pb-6 last:pb-0 after:absolute after:bottom-1 after:left-[13.5px] after:top-9 after:w-px after:bg-border after:content-[''] last:after:hidden";
const railDot = "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold tabular-nums text-primary";

const CanHouseDustMakeYouSick = () => {
  const { seoHelmet } = useSEO({
    title: "Can House Dust Make You Sick?",
    description:
      "House dust can carry allergens and irritants, and reactions vary by person. What is in dust, what cleaning can and cannot do, and when to call a doctor instead.",
    canonical: URL,
    ogType: "article",
    ogImage: OG_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="can house dust make you sick, can dust make you sick, house dust and indoor air, reduce dust at home" />
        {/* Hero photo is the LCP image. imageSrcSet/imageSizes mirror the <img> so the browser
            preloads only the variant it will render (same approach as BlogHero). */}
        <link rel="preload" as="image" href={HERO_PHOTO.src} imageSrcSet={HERO_PHOTO.srcSet} imageSizes={HERO_SIZES} fetchPriority="high" />
      </Helmet>

      <ArticleSchema
        title={TITLE}
        description="What house dust can carry, why symptoms alone do not identify a cause, how to tell settled dust from a moisture problem, and a practical order for lowering dust at home, with EPA, CDC and ACAAI sources."
        url={URL}
        datePublished={PUBLISHED}
        image={HERO_PHOTO.src}
        imageWidth={HERO_PHOTO.width}
        imageHeight={HERO_PHOTO.height}
        imageCaption={HERO_PHOTO.alt}
        about={["House dust", "Indoor air quality"]}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Can House Dust Make You Sick?", href: "/resources/can-house-dust-make-you-sick" },
        ]}
      />

      {/* The article wraps the hero so the short answer, which sits in the hero, stays part of it. */}
      <article>
        {/* Hero.
            Below lg (owner's requests, 04/10/2026): the photo is the background of the top of the
            page, and the navy behind the title dissolves in a gradient so the air scrubber shows
            in the open band between the title and the short answer card.
              - the photo box starts 10rem down and is 37.5rem tall, which puts the machine in that band;
              - the navy gradient belongs to the title block, so it always ends just under the last
                line of text, however many lines the title takes at a given width;
              - both gradients are inline styles on purpose: they must be there before the full
                stylesheet arrives, or white text would sit on a bright photo for a moment.
            From lg: light gradient, text left, photo in a card on the right.
            One <img> serves both: its wrapper is absolutely positioned against the section below lg
            (the figure itself is display:contents there, so the caption becomes a normal grid item
            after the text) and a plain grid column from lg. */}
        <section className="relative overflow-hidden bg-primary lg:bg-transparent lg:bg-gradient-to-br lg:from-primary/[0.08] lg:via-background lg:to-accent/[0.08]">
          {/* Trail on its own light strip below lg, so its colours never sit on the navy photo.
              The slot has a fixed height: until the full stylesheet arrives the separator icons
              render at 24px (their size rule is not in the inlined critical CSS), which wraps the
              trail onto two lines on phones and then pulls everything up about 30px when it corrects
              (measured: CLS 0.15 without the fixed height). */}
          <div className="relative z-10 border-b border-border bg-gray-50 py-3 lg:border-0 lg:bg-transparent lg:pb-0 lg:pt-12">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="flex min-h-14 items-start sm:min-h-6">
                <Breadcrumbs
                  items={[
                    { label: "Home", href: "/" },
                    { label: "Resources", href: "/resources" },
                    { label: "Can House Dust Make You Sick?" },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="container mx-auto max-w-6xl px-4 pb-10 pt-8 lg:pb-16 lg:pt-6">
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-14">
              <div className="relative z-10">
                <div className="relative">
                  {/* Navy behind the title, full width, fading out over the 5rem below the text. */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-20 -top-8 left-1/2 w-screen -translate-x-1/2 lg:hidden"
                    style={{
                      background:
                        "linear-gradient(to bottom, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.94) calc(100% - 9rem), hsl(var(--primary) / 0.84) calc(100% - 5rem), hsl(var(--primary) / 0.35) calc(100% - 2.5rem), transparent 100%)",
                    }}
                  />
                  <div data-hero-text className="relative">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white lg:text-primary">Home Care Guides</p>
                    <h1 className="mb-4 font-heading text-3xl font-bold leading-[1.12] text-white md:text-4xl lg:text-[2.75rem] lg:text-foreground">{TITLE}</h1>
                    <p className="mb-4 max-w-xl text-lg leading-relaxed text-white lg:text-muted-foreground">
                      What dust carries and what cleaning can realistically do about it
                    </p>
                    <p className="text-sm text-white lg:text-muted-foreground">
                      By Rodrigo Reis, Owner, Capital Clean Care · Published{" "}
                      <time dateTime={PUBLISHED}>October 4, 2026</time>
                    </p>
                  </div>
                </div>
                {/* mt-40 below lg leaves the open band where the machine shows. */}
                <aside aria-label="Short answer" className="relative mt-40 rounded-2xl border border-primary/20 bg-white p-5 shadow-lg sm:p-6 lg:mt-6 lg:shadow-sm">
                  <p className="font-heading text-sm font-bold uppercase tracking-wider text-primary mb-2">Short answer</p>
                  <p className="text-base md:text-lg leading-relaxed text-foreground">
                    Yes, for some people. House dust can carry allergens such as dust mite debris, pet dander, pollen
                    and mold, along with fine particles that irritate the nose, eyes or lungs. How much it affects you
                    depends on your own sensitivities and on the home. Cleaning can lower the amount of dust around
                    you. It cannot diagnose or treat a health condition.
                  </p>
                </aside>
              </div>
              <figure className="contents lg:block">
                <div className="absolute inset-x-0 top-40 z-0 h-[37.5rem] overflow-hidden lg:static lg:z-auto lg:h-auto lg:rounded-3xl lg:border lg:border-border lg:shadow-2xl">
                  <img
                    src={HERO_PHOTO.src}
                    srcSet={HERO_PHOTO.srcSet}
                    sizes={HERO_SIZES}
                    alt={HERO_PHOTO.alt}
                    width={HERO_PHOTO.width}
                    height={HERO_PHOTO.height}
                    loading="eager"
                    fetchPriority="high"
                    className="h-full w-full object-cover object-[60%_70%] lg:h-auto"
                  />
                  {/* The top edge and the lower part of the photo fade into the section colour, so the
                      box has no visible seam and the caption sits on plain navy. */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 lg:hidden"
                    style={{
                      background:
                        "linear-gradient(to bottom, hsl(var(--primary)) 0%, transparent 14%, transparent 50%, hsl(var(--primary)) 92%, hsl(var(--primary)) 100%)",
                    }}
                  />
                </div>
                <figcaption className="relative z-10 text-xs leading-relaxed text-white/90 lg:mt-3 lg:text-sm lg:text-muted-foreground">
                  A Capital Clean Care team member setting up a portable air scrubber beside a wall vent. Photo from
                  one of our post-renovation jobs.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Three tiles in the slot where the service page shows its proof strip. No selling here:
            each tile restates the short answer or the FAQ. Hidden on phones, where they would sit
            right under the short answer they repeat and only add length. */}
        <section aria-label="At a glance" className="hidden border-y border-border bg-primary/[0.05] sm:block">
          <div className="container mx-auto grid max-w-6xl gap-3 px-4 py-6 sm:grid-cols-3 md:py-7">
            {glance.map(([label, value]) => (
              <div key={label} className="rounded-xl border border-primary/15 bg-white p-4">
                <span className="block text-xs font-bold uppercase tracking-wide text-primary">{label}</span>
                <span className="mt-1 block text-sm font-medium text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-white py-10 sm:border-t-0 md:py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <p className={pClass}>
              This guide is written by a house cleaning company. It covers what we know from the work: where dust
              collects and how to lower it. For anything about your health, it points to medical and government
              sources and to your own doctor.
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

            {/* Key facts as figure tiles (the service page's measurement tiles). Each keeps its sentence and source. */}
            <aside aria-label="Key facts">
              <p className="font-heading font-bold text-foreground mb-3">Key facts, with sources</p>
              <ul className="grid gap-4 sm:grid-cols-3">
                <li className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <span aria-hidden="true" className="block font-heading text-3xl font-extrabold leading-none tabular-nums text-primary md:text-4xl">90%</span>
                  <span className="mt-2 block text-[15px] leading-snug text-muted-foreground">
                    On average, people spend about 90 percent of their time indoors (<Ext href={SRC.epaIaq}>EPA</Ext>).
                  </span>
                </li>
                <li className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <span aria-hidden="true" className="block font-heading text-3xl font-extrabold leading-none tabular-nums text-primary md:text-4xl">30 to 50%</span>
                  <span className="mt-2 block text-[15px] leading-snug text-muted-foreground">
                    EPA suggests keeping indoor relative humidity below 60 percent, ideally between 30 and 50 percent (
                    <Ext href={SRC.epaPm}>EPA</Ext>).
                  </span>
                </li>
                <li className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <span aria-hidden="true" className="block font-heading text-3xl font-extrabold leading-none text-primary md:text-4xl">It varies</span>
                  <span className="mt-2 block text-[15px] leading-snug text-muted-foreground">
                    Damp and moldy environments may cause a variety of health effects, or none at all (
                    <Ext href={SRC.cdcMold}>CDC</Ext>).
                  </span>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <Band id="what-is-in-dust" eyebrow="The basics" title="What Is in House Dust" tinted>
          <p className={pClass}>
            House dust is a changing mix of particles from indoors and outdoors.{" "}
            <Ext href={SRC.epaPm}>EPA lists</Ext> cooking, smoking and burning candles among indoor particle
            sources. Fabrics and tracked-in dirt also contribute.
          </p>
          <p className={pClass}>
            Dust can contain biological allergens, but its appearance does not identify them. The{" "}
            <Ext href={SRC.acaai}>American College of Allergy, Asthma and Immunology (ACAAI)</Ext> describes
            common triggers and how an allergist evaluates a suspected dust allergy.
          </p>
          {/* The team, large, right under this first topic (owner's request, 04/10/2026). The file is a
              3:4 portrait; the 4:3 box keeps the five people and trims the ceiling and the floor. */}
          <figure className="mt-8">
            <img
              src={TEAM_PHOTO.src}
              srcSet={TEAM_PHOTO.srcSet}
              sizes="(min-width: 768px) 736px, calc(100vw - 32px)"
              alt={TEAM_PHOTO.alt}
              width={TEAM_PHOTO.width}
              height={TEAM_PHOTO.height}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-2xl object-cover object-[center_38%] ring-1 ring-border"
            />
            <figcaption className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Members of the Capital Clean Care team, who do this work in homes across Maryland, DC and Northern
              Virginia.
            </figcaption>
          </figure>
        </Band>

        <Band id="symptoms" eyebrow="Your health" title="Symptoms Do Not Tell You the Cause" still>
          <p className={pClass}>
            A dust allergy can look like a cold that does not end: sneezing, a stuffy or runny nose and itchy
            eyes, and in some people coughing or wheezing. Colds, seasonal pollen and smoke can look much the
            same, so symptoms alone do not identify a cause. A cleaning company cannot identify it either.
          </p>
          <p className={pClass}>
            If symptoms persist or keep returning, see a doctor. An allergist can evaluate possible triggers and
            decide whether testing is needed. People with asthma should follow the plan they have with their own
            doctor. <Ext href={SRC.epaAsthma}>EPA advises</Ext> working with one to identify triggers and plan
            treatment.
          </p>
          <p className="rounded-2xl border border-border bg-secondary/50 p-5 text-base text-foreground leading-relaxed">
            <strong>Trouble breathing needs medical care right away.</strong> If someone is struggling to breathe,
            call 911 or go to emergency care. A cleaning appointment is the wrong response to that.
          </p>
        </Band>

        <Band id="closed-homes" eyebrow="Seasons" title="Why a Closed House Can Feel Dustier in Winter" tinted>
          <p className={pClass}>
            When windows stay shut for months, less outdoor air comes in to dilute what is produced indoors, so
            particles from cooking, candles, fabrics and pets tend to stay around longer.
          </p>
          <p className={pClass}>
            <Ext href={SRC.epaAirCleaners}>EPA's general advice</Ext> is to reduce sources and ventilate with
            clean outdoor air. The word clean matters.{" "}
            <Ext href={SRC.airnowAqi}>AirNow</Ext> reports the local Air Quality Index, which covers pollutants
            such as particle pollution and ozone, so you can check it before opening windows. The index does not
            report pollen. If pollen is one of your triggers, check a pollen forecast separately. Kitchen and
            bathroom exhaust fans that vent outdoors move particles and moisture out without opening the house.
          </p>
          <p className={pClass}>
            Humidity matters too. Indoor air often gets drier in heating season, and a humidifier set too high can
            swing a room the other way. The range EPA suggests is in the key facts above, and an inexpensive
            humidity gauge shows where a room stands.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The local reasons dust returns quickly here, such as tree pollen and older housing, are covered in our
            guide to{" "}
            <Link to={MARYLAND_DUST_GUIDE} className={linkClass}>why dust builds up in Maryland homes</Link>.
          </p>
        </Band>

        <Band id="dust-or-moisture" eyebrow="What you see at home" title="Dust, or a Moisture Problem?">
          <p className={pClass}>
            Dust and dampness call for different responses, and dampness is not a cleaning job. The table is about
            what you can observe in the house. It cannot tell you what the dust contains or why you feel unwell.
          </p>
          <div className="my-8">
            <p className="sm:hidden text-xs text-muted-foreground mb-2 text-right" aria-hidden="true">Swipe to see the full table →</p>
            <div className="overflow-x-auto rounded-2xl border border-border" tabIndex={0} role="region" aria-label="What you notice at home and a reasonable next step">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="bg-secondary text-left">
                    <th scope="col" className="px-4 py-3 font-semibold text-foreground">What you notice at home</th>
                    <th scope="col" className="px-4 py-3 font-semibold text-foreground">What it may point to</th>
                    <th scope="col" className="px-4 py-3 font-semibold text-foreground">A reasonable next step</th>
                  </tr>
                </thead>
                <tbody>
                  {observationRows.map(([notice, pointsTo, next]) => (
                    <tr key={notice} className="border-t border-border align-top">
                      <th scope="row" className="px-4 py-3 text-left font-semibold text-foreground">{notice}</th>
                      <td className="px-4 py-3 text-muted-foreground">{pointsTo}</td>
                      <td className="px-4 py-3 text-muted-foreground">{next}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className={pClass}>
            The mold rows follow <Ext href={SRC.cdcMold}>CDC</Ext>, and the vent row follows{" "}
            <Ext href={SRC.epaDucts}>EPA's guidance on air duct cleaning</Ext>.
          </p>
          <figure className="my-8 grid grid-cols-[7.5rem_1fr] items-start gap-4 rounded-2xl border border-border bg-card p-4 sm:grid-cols-[minmax(0,11rem)_1fr] sm:items-center sm:gap-5 sm:p-5 md:gap-7 md:p-6">
            <img
              src={VENT_PHOTO.src}
              srcSet={VENT_PHOTO.srcSet}
              sizes="(min-width: 640px) 176px, 120px"
              alt={VENT_PHOTO.alt}
              width={VENT_PHOTO.width}
              height={VENT_PHOTO.height}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full rounded-xl object-cover ring-1 ring-border"
            />
            <figcaption className="text-[15px] leading-relaxed text-muted-foreground">
              <span className="block font-heading text-base font-bold text-foreground">A return cover, off the wall</span>
              <span className="mt-2 block">
                A team member washing an HVAC return cover in a sink on a post-renovation job. The buildup on this
                one came from the renovation. A dusty cover by itself says nothing about the inside of the ducts.
              </span>
            </figcaption>
          </figure>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Capital Clean Care is a house cleaning company. We do not remediate or test for mold, and we do not
            clean the inside of air ducts. Dust from deteriorating old paint or from damaged materials that may
            contain lead or asbestos is also outside routine house cleaning and belongs with a certified
            professional.
          </p>
        </Band>

        <Band id="missed-spots" eyebrow="Where to look" title="Reachable Spots That Often Get Missed" tinted>
          <div className="sm:grid sm:grid-cols-[minmax(0,1fr)_240px] sm:items-start sm:gap-8">
            <div>
              <p className={pClass}>
                Dust collects on surfaces that rarely get touched. Stay with the outside of surfaces you can reach
                safely from the floor:
              </p>
              <ul className="space-y-2 mb-6 list-disc pl-6 text-lg text-muted-foreground leading-relaxed">
                {missedSpots.map((spot) => (
                  <li key={spot}>{spot}</li>
                ))}
              </ul>
            </div>
            <figure className="mx-auto mb-6 w-full max-w-[260px] sm:mt-2 sm:max-w-none">
              <img
                src={DETAIL_PHOTO.src}
                srcSet={DETAIL_PHOTO.srcSet}
                sizes="(min-width: 640px) 240px, 260px"
                alt={DETAIL_PHOTO.alt}
                width={DETAIL_PHOTO.width}
                height={DETAIL_PHOTO.height}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl ring-1 ring-border"
              />
              <figcaption className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Detail work by hand on one of our jobs: a team member brushing a chrome towel bar, the kind of
                fixture a quick wipe can pass over.
              </figcaption>
            </figure>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Do not climb on furniture or take equipment apart, and skip what is out of reach. Ceiling fans, light
            fixtures and electronics need their own care: follow the manufacturer's instructions, and do not
            assume a damp cloth is safe on them. The inside of ducts belongs to an HVAC professional.
          </p>
        </Band>

        <Band id="routine" eyebrow="What to do" title="A Practical Order for Lowering Dust">
          <p className={pClass}>Work in this order.</p>
          {/* The rail carries the six steps; the photo sits beside it instead of interrupting it. */}
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_15rem] md:gap-10">
            <ol className="text-[17px] leading-relaxed text-muted-foreground">
              <li className={railItem}>
                <span aria-hidden="true" className={railDot}>1</span>
                <span>
                  <strong className="text-foreground">Deal with moisture and sources first.</strong> Fix leaks, run
                  exhaust fans that vent outdoors and keep humidity in the range above. Cleaning around an active
                  moisture problem does not last.
                </span>
              </li>
              <li className={railItem}>
                <span aria-hidden="true" className={railDot}>2</span>
                <span>
                  <strong className="text-foreground">Dust with a damp microfiber cloth.</strong> Start with the
                  highest surfaces you can reach and work down. <Ext href={SRC.epaPm}>EPA notes</Ext> that a damp
                  cloth helps keep settled dust from going back into the air.
                </span>
              </li>
              <li className={railItem}>
                <span aria-hidden="true" className={railDot}>3</span>
                <span>
                  <strong className="text-foreground">Vacuum floors, rugs and upholstered furniture.</strong> EPA
                  suggests considering a vacuum with a HEPA filter to reduce dust buildup.
                </span>
              </li>
              <li className={railItem}>
                <span aria-hidden="true" className={railDot}>4</span>
                <span>
                  <strong className="text-foreground">Wash bedding regularly,</strong> following the care label.
                </span>
              </li>
              <li className={railItem}>
                <span aria-hidden="true" className={railDot}>5</span>
                <span>
                  <strong className="text-foreground">Check the HVAC filter.</strong> EPA's guidance is a filter rated
                  MERV 13, or as high as your system will accommodate, replaced on schedule. An HVAC technician can
                  tell you what your system handles.
                </span>
              </li>
              <li className={railItem}>
                <span aria-hidden="true" className={railDot}>6</span>
                <span>
                  <strong className="text-foreground">Repeat.</strong> Dust keeps arriving, so the routine has to
                  continue.
                </span>
              </li>
            </ol>
            <figure className="mx-auto w-full max-w-[220px] md:sticky md:top-28 md:max-w-none md:self-start">
              <img
                src={FLOOR_PHOTO.src}
                srcSet={FLOOR_PHOTO.srcSet}
                sizes="(min-width: 768px) 240px, 220px"
                alt={FLOOR_PHOTO.alt}
                width={FLOOR_PHOTO.width}
                height={FLOOR_PHOTO.height}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-2xl ring-1 ring-border"
              />
              <figcaption className="mt-3 text-sm text-muted-foreground leading-relaxed">
                A team member running a floor cleaner with green lights over a wood floor. Photo from one of our
                jobs.
              </figcaption>
            </figure>
          </div>
          <SurfacesAndAirDiagram />
          <p className={pClass}>
            A portable air cleaner can supplement these steps. It does not replace them, and the FAQ below covers
            what EPA says about choosing one.
          </p>
          {/* The company's own practice, stated only as far as its service page documents it
              (air scrubber run on post-construction jobs). No performance or health claim. */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our own work follows the same idea. On post-renovation cleans we use a portable air scrubber in the room
            while we work, like the one in the photo at the top of this guide. It filters the air as the cleaning
            lifts dust. It supplements the surface cleaning and does not replace it.
          </p>
        </Band>

        <Band id="limits" eyebrow="Being straight about it" title="What Cleaning Can and Cannot Do" tinted still>
          <p className={pClass}>
            Thorough cleaning removes settled dust from surfaces, which leaves less of it to be stirred back into
            the air. That is the benefit. Cleaning does not diagnose an allergy, treat asthma or replace a
            doctor's plan.{" "}
            <Ext href={SRC.nioshMold}>NIOSH describes</Ext> evidence of an association between damp indoor spaces
            and asthma symptoms. That is a reason to deal with moisture. It is not evidence that a cleaning
            service prevents illness, and we do not promise health outcomes.
          </p>
          <p className={pClass}>Who to call depends on what you are seeing:</p>
          <ul className="mb-8 grid gap-4 sm:grid-cols-2">
            {whoToCall.map(([who, when]) => (
              <li key={who} className="rounded-2xl border border-border bg-white p-5">
                <strong className="block font-heading text-base text-foreground">{who}</strong>
                <span className="mt-1 block text-base leading-relaxed text-muted-foreground">{when}</span>
              </li>
            ))}
          </ul>
          {/* The one service link of the guide, after the limits, in a calm card. */}
          <p className="rounded-2xl border border-border bg-white p-5 text-lg text-muted-foreground leading-relaxed md:p-6">
            If what you have is settled dust in more places than you can keep up with, that is house cleaning
            work.{" "}
            <Link to={DEEP_CLEANING} className={linkClass}>See what our deep cleaning includes</Link>.
          </p>
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
            This guide is general information from a house cleaning company. It is not medical advice and does
            not replace an evaluation by a doctor. Capital Clean Care does not diagnose health conditions,
            remediate mold or clean the inside of air ducts.
          </p>
        </Band>
      </article>

      <RelatedPosts currentSlug="can-house-dust-make-you-sick" showVideos={false} authorBioVariant="factual" />
      <StickyCTA />
    </Layout>
  );
};

export default CanHouseDustMakeYouSick;
