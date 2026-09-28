import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight, ExternalLink, HardHat, Wind, Home, ShieldCheck, MapPin, Lightbulb, Building2, Layers,
  Sofa, Fan, Phone, CheckCircle2, Sparkles, Wrench, PlayCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import Breadcrumbs from "@/components/Breadcrumbs";
import FadeInSection from "@/components/blog/FadeInSection";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";
import FAQAccordion from "@/components/blog/FAQAccordion";

// Case study written by the owner (2026-09-28): one real post-renovation clean of a furnished
// three-story townhouse in Washington, DC. Every photo on this page is an owner-provided photo of
// this project. The homeowner's name is changed. No HowTo markup on purpose.
// Layout follows the owner's reference mockup (28/09): hero + trust row, quick answer + snapshot,
// five process cards, equipment block, "why it is different" cards, dark CTA band, two-column FAQ.
const SLUG = "post-construction-cleaning-washington-dc-townhouse";
const URL = `https://capitalcleancare.com/resources/${SLUG}`;
const IMG = "/images/blog/post-construction-dc-townhouse";
const HERO_IMAGE = `${IMG}/hero-kitchen-living.webp`;
const HERO_IMAGE_640 = `${IMG}/hero-kitchen-living-640.webp`;
const OG_IMAGE = `${IMG}/hero-og.jpg`;
const DATE_ISO = "2026-09-28";
// Filled in by the owner before publication; until then the copy says "Washington, DC" only.
const NEIGHBORHOOD: string | null = null;
const PLACE = NEIGHBORHOOD ? `${NEIGHBORHOOD}, Washington, DC` : "Washington, DC";
const PHONE_DISPLAY = "(240) 704-2551";
const PHONE_TEL = "tel:+12407042551";
const XPOWER_URL = "https://xpower.com/shop/xpower-x-2580-professional-4-stage-hepa-mini-air-scrubber/";
const EPA_PM_URL = "https://www.epa.gov/pm-pollution/particulate-matter-pm-basics";
const EPA_INDOOR_URL = "https://www.epa.gov/indoor-air-quality-iaq/indoor-particulate-matter";

const trustRow = [
  { icon: Wind, title: "HEPA air scrubbing", text: "Captures 99.97% of 0.3-micron particles" },
  { icon: Sofa, title: "Furnished-home detail cleaning", text: "Every object cleaned by hand" },
  { icon: ShieldCheck, title: "Insured, background-checked team", text: "The same crews that clean our homes" },
  { icon: MapPin, title: "Serving DC, MD and VA", text: "Washington, DC and Montgomery County" },
];

const snapshot: { icon: typeof MapPin; k: string; v: string }[] = [
  { icon: MapPin, k: "Location", v: PLACE },
  { icon: Building2, k: "Property", v: "Townhouse, 3 floors" },
  { icon: HardHat, k: "Scope", v: "Full repaint, new hardwood floors" },
  { icon: Sofa, k: "Condition", v: "Furnished and occupied: furniture, clothes, books and electronics stayed inside" },
  { icon: Fan, k: "Key equipment", v: "HEPA vacuums, XPOWER X-2580 HEPA air scrubber, rotary floor machine with moisture control, steam, carpet extractor" },
  { icon: Layers, k: "Order of work", v: "Top floor down, one room at a time, each room sealed after cleaning" },
];

const steps: { n: string; title: string; text: string; detail: string }[] = [
  {
    n: "01", title: "Top floor first",
    text: "Dust falls, so we start at the top. Third floor: home gym, guest room, bathroom and office.",
    detail: "Ceiling, then light fixtures (taken down, bulbs cleaned), then walls, then every object, then the floor last.",
  },
  {
    n: "02", title: "Read the floor before cleaning it",
    text: "After three vacuum passes we inspect the whole floor for paint drips, glue, chemicals and stains.",
    detail: "Each mark comes off with the right method for that material before any mopping starts.",
  },
  {
    n: "03", title: "Seal the room and clean the air",
    text: "When a room is done, the XPOWER X-2580 HEPA air scrubber goes in and every opening is sealed with plastic.",
    detail: "It runs for up to 24 hours, so airborne dust is captured instead of settling back on clean surfaces.",
  },
  {
    n: "04", title: "Bathrooms get their own protocol",
    text: "The crew used these bathrooms for weeks. Wiping is not sanitizing.",
    detail: "Rotary machine on shower walls, glass and tile scraped, toilet seats taken apart, steam plus EPA-registered disinfectants.",
  },
  {
    n: "05", title: "Kitchen, closets and final handoff",
    text: "The new kitchen was cleaned ceiling to floor, including the refrigerator, range, hood and every cabinet inside and out.",
    detail: "Closets emptied, cleaned inside, everything put back where it was. Construction trash bagged and taken out.",
  },
];

const projectPhotos = [
  { src: `${IMG}/office-bookshelf.webp`, alt: "Team member wiping each shelf of the office bookcase by hand, with books and boxes set aside", caption: "Step 1: the office, shelf by shelf, object by object." },
  { src: `${IMG}/bathroom-light-shades.webp`, alt: "Three frosted glass light shades taken down from the bathroom vanity fixture, with the screws and tools on the counter", caption: "Step 4: vanity shades come down so the bulbs and the inside of the fixture get cleaned too." },
  { src: `${IMG}/kitchen-refrigerator.webp`, alt: "Team member cleaning the empty shelves inside the new refrigerator", caption: "Step 5: the new refrigerator, inside and out." },
];

const equipmentChips = ["HEPA filtration", "Up to 550 CFM airflow", "Four filter stages", "Runs in every finished room"];
const equipmentWhy = [
  "Captures fine construction dust that is still floating after the surfaces are clean",
  "Runs inside a sealed room, so the air it cleans stays clean",
  "Keeps dust from rooms still being cleaned out of rooms already finished",
  "Final HEPA stage rated for 99.97% of particles as small as 0.3 microns",
];

const different = [
  { icon: Wind, title: "Construction dust behaves differently", text: "Sanding, drywall and flooring dust is fine enough to stay airborne for hours and settle again after you wipe. Surfaces alone are not enough; the air has to be filtered too." },
  { icon: Sofa, title: "Every surface and object is affected", text: "Ceilings, walls, inside light fixtures, inside cabinets and drawers, and on a furnished renovation, every book, weight and cable in the house." },
  { icon: Wrench, title: "It needs specific equipment and sequence", text: "HEPA vacuums, an air scrubber, a rotary floor machine with moisture control and products matched to each material, in a fixed top-down order." },
];

const included: { title: string; items: string[] }[] = [
  { title: "Every room, ceiling to floor", items: ["Ceilings and the corners where ceiling meets wall", "Light fixtures taken down, bulbs and the inside of the fixture cleaned", "Walls top to bottom with HEPA vacuums and microfiber", "Every object cleaned individually and put back", "Floor vacuumed three times, inspected, then mopped with a product made for that finish"] },
  { title: "Bathrooms used during the work", items: ["Shower walls washed with the rotary machine, product matched to tile, stone or paint", "Glass and tile scraped, not just wiped", "Paint cleared off mirrors where the painters hit them", "Toilet seats and lids taken apart to clean every hinge and gap, or replaced if they cannot be restored", "Steam plus EPA-registered disinfectants on every touch surface", "Inside every cabinet and drawer"] },
  { title: "Kitchen and handoff", items: ["Protective film peeled off new windows, glass cleaned", "Paint residue removed from countertops, glass and window frames", "Refrigerator, range and hood cleaned inside and out", "Every cabinet inside and out", "Carpets and rugs shampooed and extracted", "Construction trash bagged and removed"] },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "What is included in post construction cleaning?",
    a: "On this project: ceilings, walls, light fixtures taken down and cleaned inside, every object cleaned by hand, floors vacuumed three times and mopped with a product made for the finish, a HEPA air scrubber in each sealed room, a separate sanitizing protocol for the bathrooms, the full kitchen inside and out, and all construction trash removed. Scope is confirmed in the walkthrough before the cleaning day.",
  },
  {
    q: "Can construction dust make you sick?",
    a: "We are cleaners, not doctors, so we point to the EPA: particles smaller than 10 micrometers are inhalable, some can get deep into the lungs, and construction sites are listed among the sources of that particle pollution. That is why we filter the air with a HEPA scrubber instead of only wiping surfaces, and why we recommend not moving back in before the clean.",
  },
  {
    q: "How do you clean dust from the air after construction?",
    a: "Finish the surfaces first, then place a HEPA air scrubber in the room, seal every opening with plastic and let it run for up to 24 hours. The XPOWER X-2580 we use moves up to 550 cubic feet of air per minute through four stages and captures 99.97% of particles as small as 0.3 microns.",
  },
  {
    q: "How long does post-construction cleaning take in Washington, DC?",
    a: "An empty unit can often be done in a day. A furnished, multi-level townhouse takes longer, because every object is cleaned by hand, and each finished room also gets up to 24 hours of HEPA air scrubbing.",
  },
  {
    q: "What is the difference between post-renovation and new-construction cleaning?",
    a: "In new construction the house is usually empty, so you clean surfaces. After a renovation, furniture and belongings are often still inside, and the dust settles on all of them. Each item has to be cleaned individually.",
  },
  {
    q: "Do I need an air scrubber after a renovation?",
    a: "If the work involved sanding, drywall or flooring, yes. Fine construction dust stays in the air and settles back on clean surfaces. A HEPA air scrubber filters that air, capturing 99.97% of particles as small as 0.3 microns.",
  },
  {
    q: "Can a floor machine damage new hardwood?",
    a: "It can if the moisture is not controlled. We use a rotary machine with moisture control and a product made for the floor's finish.",
  },
  {
    q: "Do you sanitize bathrooms the construction workers used?",
    a: "Yes. Bathrooms get a separate protocol with steam and EPA-registered disinfectants on the toilet, shower and every touch surface. Toilet seats are taken apart and cleaned, or replaced if they cannot be restored.",
  },
  {
    q: "Why do you visit before the cleaning day?",
    a: "Every renovation leaves different problems. The walkthrough lets us plan products, equipment and the room order, so nothing is improvised on the cleaning day.",
  },
  {
    q: "Is Capital Clean Care insured?",
    a: "Yes, we are fully insured.",
  },
];

const H2 = "font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight";
const EYEBROW = "text-xs font-semibold uppercase tracking-wider text-primary mb-2";

const PostConstructionCleaningWashingtonDcTownhouse = () => {
  const { seoHelmet } = useSEO({
    title: "Post Construction Cleaning in Washington DC: Why Complete Dust Removal Matters",
    description:
      "Post construction cleaning services in Washington DC, shown on a real 3-story townhouse: how we remove construction dust from every room, filter the air with a HEPA scrubber and sanitize the bathrooms.",
    canonical: URL,
    ogType: "article",
    ogImage: OG_IMAGE,
  });

  const faqLeft = faqs.slice(0, Math.ceil(faqs.length / 2));
  const faqRight = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="post construction cleaning washington dc, post construction cleaning services, construction dust removal, after construction cleaning, post remodel cleaning dc, hepa air scrubber after renovation" />
        <link rel="preload" as="image" href={HERO_IMAGE} imageSrcSet={`${HERO_IMAGE_640} 640w, ${HERO_IMAGE} 1600w`} imageSizes="(min-width: 1024px) 560px, 100vw" fetchPriority="high" />
      </Helmet>
      <ArticleSchema
        title="Post Construction Cleaning in Washington, DC: Inside a Real 3-Story Townhouse Project"
        description="Post construction cleaning services in Washington DC, shown on a real 3-story townhouse: how we remove construction dust from every room, filter the air with a HEPA scrubber and sanitize the bathrooms."
        url={URL}
        datePublished={DATE_ISO}
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resource Center", href: "/resources" }, { label: "Post-Construction Cleaning in Washington, DC", href: URL }]} />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-mesh">
        <div className="hidden md:block absolute -top-24 -left-24 w-96 h-96 bg-accent/25 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" />
        <div className="hidden md:block absolute top-10 -right-24 w-96 h-96 bg-primary/25 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000" />

        <div className="relative container mx-auto px-4 pt-8 pb-12 md:pt-10 md:pb-16">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resource Center", href: "/resources" }, { label: "Post-Construction Cleaning in Washington, DC" }]} className="mb-6" />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-5 animate-fade-up">
                <HardHat className="h-4 w-4 text-accent" aria-hidden="true" />
                <span className="text-xs font-semibold text-foreground uppercase tracking-wider">Real project · Washington, DC</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] text-foreground mb-5 animate-fade-up drop-shadow-sm" style={{ animationDelay: "100ms" }}>
                Post Construction Cleaning in Washington, DC: <span className="text-gradient">Inside a 3-Story Townhouse</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mb-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
                A furnished townhouse, freshly repainted and refloored, cleaned room by room with HEPA vacuums and a sealed-room
                air scrubber, so the family could move back into a home without construction dust.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mb-7 animate-fade-up" style={{ animationDelay: "250ms" }}>
                By Rodrigo Reis, Owner · MD · DC · VA · <time dateTime={DATE_ISO}>September 28, 2026</time>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
                <Button variant="cta" size="lg" className="text-sm px-8 h-14 rounded-full shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <a href="/#quote">Get a Post-Construction Estimate <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" /></a>
                </Button>
                <Button size="lg" variant="outline" className="text-sm px-8 h-14 rounded-full glass hover:bg-white/40 dark:hover:bg-black/40 transition-all duration-300" asChild>
                  <a href="#process"><PlayCircle className="mr-2 h-4 w-4" aria-hidden="true" />See the cleaning process</a>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-up" style={{ animationDelay: "250ms" }}>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 ring-1 ring-black/5 aspect-[4/3] max-w-xl mx-auto lg:ml-auto">
                <img
                  src={HERO_IMAGE}
                  srcSet={`${HERO_IMAGE_640} 640w, ${HERO_IMAGE} 1600w`}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  alt="Capital Clean Care team cleaning the new kitchen and living area of a renovated Washington, DC townhouse, island covered in plastic during the post-construction clean"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={1600}
                  height={1200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute left-4 right-4 bottom-4 rounded-xl bg-background/90 backdrop-blur px-4 py-3 shadow-lg">
                  <p className="text-xs font-bold text-foreground leading-snug">Owner-provided project photo</p>
                  <p className="text-xs text-muted-foreground leading-snug">The new kitchen, mid-clean. Our team working the kitchen and living level.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 md:mt-12">
            {trustRow.map((t) => (
              <div key={t.title} className="flex items-start gap-3 rounded-2xl bg-background/80 backdrop-blur border border-border px-4 py-4">
                <span className="shrink-0 h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center"><t.icon className="h-5 w-5" aria-hidden="true" /></span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-foreground leading-snug">{t.title}</p>
                  <p className="text-xs text-muted-foreground leading-snug mt-0.5">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUICK ANSWER + SNAPSHOT ===== */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="grid lg:grid-cols-[1.35fr_1fr] gap-6 lg:gap-8">
              <div className="rounded-2xl border border-primary/15 bg-primary/5 p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="h-5 w-5 text-primary" aria-hidden="true" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Quick answer</p>
                </div>
                <p className="text-foreground leading-relaxed md:text-lg">
                  A proper post construction clean in Washington, DC starts with a site walkthrough, cleans every room from the
                  ceiling down, finishes each room with a HEPA air scrubber running in a sealed space, and treats bathrooms with
                  a separate sanitizing protocol. On a furnished renovation, it also means cleaning every object in the house by
                  hand. Below is exactly how we did it on a three-story townhouse in {PLACE}.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-secondary/40 p-6 md:p-7">
                <p className="font-heading text-xl font-bold text-foreground mb-4">Project snapshot</p>
                <dl className="divide-y divide-border">
                  {snapshot.map((row) => (
                    <div key={row.k} className="grid grid-cols-[minmax(0,7.5rem)_1fr] gap-3 py-2.5">
                      <dt className="flex items-center gap-2 text-sm font-semibold text-foreground"><row.icon className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />{row.k}</dt>
                      <dd className="text-sm text-muted-foreground leading-snug">{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </FadeInSection>

          {/* The call and the walkthrough */}
          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-14 md:mt-16">
              <div>
                <p className={EYEBROW}>The call</p>
                <h2 className={`${H2} mb-4`}>All of the dust was left behind</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The contractor had finished. New paint, new hardwood, the whole house redone. The homeowner, who I'll call
                  Joshua (not his real name), had a problem most post construction guides skip: his family never moved their
                  things out. Furniture, clothes, the books in the office, the weights in the gym, all of it stayed through the
                  entire remodel.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  So the fine dust from sanding and painting didn't just sit on the floor. It was on everything. In an empty new
                  build, you clean surfaces. In a furnished renovation, you clean a family's whole life, piece by piece.
                </p>
              </div>
              <div>
                <p className={EYEBROW}>Before the team</p>
                <h2 className={`${H2} mb-4`}>Why I send someone to walk the house first</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I don't send a crew into a post construction job without a plan. One of our representatives walks every room
                  before the cleaning day. On Joshua's house, that walkthrough answered four things:
                </p>
                <ol className="list-decimal list-outside pl-5 space-y-2 text-muted-foreground leading-relaxed">
                  <li><strong className="text-foreground">What kind of clean this is.</strong> Standard, or with full bathroom sanitizing. Workers used the bathrooms for weeks.</li>
                  <li><strong className="text-foreground">What each surface needs.</strong> New hardwood, tile, glass and fresh paint each get their own product.</li>
                  <li><strong className="text-foreground">What the contractor left behind.</strong> Paint on mirrors, glue on floors, film on new windows, fixtures to take down.</li>
                  <li><strong className="text-foreground">Where the air scrubber goes</strong>, and the order the rooms get sealed.</li>
                </ol>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process" className="bg-secondary/40 py-14 md:py-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
              <div>
                <p className={EYEBROW}>Our process</p>
                <h2 className={H2}>How we cleaned it, top floor to kitchen</h2>
              </div>
              <p className="text-muted-foreground md:max-w-sm md:text-right">The same order in every room: ceiling, fixtures, walls, every object, floor last.</p>
            </div>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {steps.map((s) => (
                <li key={s.n} className="rounded-2xl bg-white border border-border p-5 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="h-9 w-9 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shrink-0">{s.n}</span>
                    <h3 className="font-heading text-base font-bold text-foreground leading-snug">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.text}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-3 mt-auto">{s.detail}</p>
                </li>
              ))}
            </ol>
          </FadeInSection>

          <FadeInSection>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {projectPhotos.map((p) => (
                <figure key={p.src} className="rounded-2xl overflow-hidden bg-white border border-border">
                  <img src={p.src} srcSet={`${p.src.replace(".webp", "-640.webp")} 640w, ${p.src} 1200w`} sizes="(min-width: 640px) 33vw, 100vw" alt={p.alt} loading="lazy" decoding="async" width={1200} height={1600} className="w-full aspect-[4/3] object-cover" />
                  <figcaption className="px-4 py-3 text-xs text-muted-foreground leading-snug"><span className="font-semibold text-foreground">Owner-provided photo.</span> {p.caption}</figcaption>
                </figure>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mt-6 max-w-3xl">
              On the new hardwood we finish with a rotary machine that controls the moisture going into the wood, using a product
              made for that finish. Too much water and boards can cup or warp. The full sequence is in our{" "}
              <Link to="/resources/how-to-clean-hardwood-floors-after-construction" className="text-primary hover:underline">guide on cleaning hardwood floors after construction</Link>.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ===== EQUIPMENT ===== */}
      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/5 via-white to-accent/5 p-6 md:p-10 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
              <div>
                <p className={EYEBROW}>The equipment that makes the difference</p>
                <h2 className={`${H2} mb-4`}>How we remove dust from the air, not just the surfaces</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Here's what most people don't know about construction dust: a lot of it is still floating after the surfaces are
                  clean. You can wipe every shelf perfectly and, in a few hours, a new layer settles on top.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  So when a room is done, an <strong className="text-foreground">XPOWER X-2580 HEPA air scrubber</strong> goes in and every opening
                  is sealed with plastic for up to 24 hours. It moves up to 550 cubic feet of air per minute through four filter
                  stages, and the final HEPA stage captures 99.97% of particles as small as 0.3 microns
                  (<a href={XPOWER_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">manufacturer specifications<ExternalLink className="inline h-3 w-3 ml-0.5 align-baseline" aria-hidden="true" /></a>).
                  Vents and grilles in the room are vacuumed and wiped like any other surface; duct cleaning is a separate trade and is not part of this service.
                </p>
                <ul className="flex flex-wrap gap-2">
                  {equipmentChips.map((c) => (
                    <li key={c} className="inline-flex items-center gap-1.5 rounded-full bg-white border border-border px-3 py-1.5 text-xs font-semibold text-foreground"><CheckCircle2 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />{c}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white border border-border p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Fan className="h-5 w-5 text-primary" aria-hidden="true" />
                  <p className="font-heading text-lg font-bold text-foreground">Why it matters</p>
                </div>
                <ul className="space-y-2.5">
                  {equipmentWhy.map((w) => (
                    <li key={w} className="flex items-start gap-2 text-sm text-muted-foreground leading-snug"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />{w}</li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== WHY IT IS DIFFERENT / DUST ===== */}
      <section className="bg-secondary/40 py-14 md:py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <p className={EYEBROW}>Construction dust</p>
            <h2 className={`${H2} mb-4`}>Why construction dust is more than a cosmetic problem</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
              The EPA describes particle pollution as inhalable particles 10 micrometers and smaller, with fine particles at 2.5
              micrometers and smaller, and lists construction sites among the sources emitted directly into the air. In its words,
              some particles under 10 micrometers "can get deep into your lungs and some may even get into your bloodstream"
              (<a href={EPA_PM_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">EPA, Particulate Matter Basics<ExternalLink className="inline h-3 w-3 ml-0.5 align-baseline" aria-hidden="true" /></a>).
              That is the reason a post construction clean is a different job from a deep clean, and why we treat the air as a surface.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {different.map((d) => (
                <div key={d.title} className="rounded-2xl bg-white border border-border p-6">
                  <span className="h-11 w-11 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4"><d.icon className="h-5 w-5" aria-hidden="true" /></span>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 leading-snug">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.text}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== WHAT IS INCLUDED ===== */}
      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <p className={EYEBROW}>Scope</p>
            <h2 className={`${H2} mb-3`}>What's included in post construction cleaning</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
              This is the scope we delivered on the townhouse. The walkthrough confirms it for each project, because every
              renovation leaves different problems behind.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {included.map((g) => (
                <div key={g.title} className="rounded-2xl border border-border bg-secondary/30 p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3 flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />{g.title}</h3>
                  <ul className="space-y-2">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground leading-snug"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="bg-primary text-primary-foreground py-12 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3">Renovation complete? Don't move back into the dust.</h2>
              <p className="text-primary-foreground/85 leading-relaxed max-w-xl">
                Every day you live in the dust, it spreads into the rooms that were fine. The first step is always the same: we
                come walk your house, see what the contractor left, and build the plan for your project.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
              <Button variant="cta" size="lg" className="text-sm px-8 h-14 rounded-full shadow-lg" asChild>
                <a href="/#quote">Get a Post-Construction Estimate <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" /></a>
              </Button>
              <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 h-14 px-6 rounded-full border border-primary-foreground/40 text-sm font-semibold hover:bg-primary-foreground/10 transition-colors">
                <Phone className="h-4 w-4" aria-hidden="true" />{PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AREAS ===== */}
      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12">
              <div>
                <p className={EYEBROW}>Where we work</p>
                <h2 className={`${H2} mb-4`}>Post-remodel cleaning in DC, Bethesda, Silver Spring and Rockville</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We clean renovated homes in Washington, DC, Montgomery County and across the DMV. The process on this page is
                  the same one we bring to a condo in Bethesda or a colonial in Rockville; the walkthrough is what changes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  After a lot of these jobs, here's what I tell every homeowner: ask if they clean the air, not just the surfaces.
                  Ask who plans the job. Ask about the bathrooms specifically. And don't move back in before the clean.
                </p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 self-start">
                {[
                  { to: "/services/post-construction-cleaning", label: "Post-construction cleaning service", sub: "Scope, what to confirm in the quote" },
                  { to: "/locations/bethesda-md/post-construction-cleaning", label: "Bethesda, MD", sub: "Post-construction cleaning" },
                  { to: "/locations/silver-spring-md/post-construction-cleaning", label: "Silver Spring, MD", sub: "Post-construction cleaning" },
                  { to: "/locations/rockville-md/post-construction-cleaning", label: "Rockville, MD", sub: "Post-construction cleaning" },
                  { to: "/resources/post-construction-cleaning-montgomery-county-md", label: "Montgomery County guide", sub: "If your project is in Maryland" },
                  { to: "/resources/how-to-clean-hardwood-floors-after-construction", label: "Hardwood floors after construction", sub: "The floor sequence in detail" },
                ].map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-secondary/30 px-4 py-3 hover:border-primary/40 hover:bg-primary/5 transition-colors">
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-foreground leading-snug">{l.label}</span>
                        <span className="block text-xs text-muted-foreground leading-snug">{l.sub}</span>
                      </span>
                      <ArrowRight className="h-4 w-4 text-primary shrink-0 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-secondary/40 py-14 md:py-20">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <p className={EYEBROW}>FAQ</p>
            <h2 id="faq" className={`${H2} mb-8 scroll-mt-32`}>Frequently asked questions</h2>
            <div className="grid lg:grid-cols-2 gap-x-6 gap-y-3 items-start [&_.space-y-3>div]:bg-white">
              <FAQAccordion faqs={faqLeft} />
              <FAQAccordion faqs={faqRight} />
            </div>
          </FadeInSection>

          {/* Sources and photo note */}
          <FadeInSection>
            <h2 id="sources" className="font-heading text-xl md:text-2xl font-bold text-foreground mt-14 mb-4 scroll-mt-32">Sources and about the photos</h2>
            <ul className="list-disc list-outside pl-6 space-y-2 text-sm text-muted-foreground leading-relaxed mb-4 max-w-3xl">
              <li>
                XPOWER Manufacture, <a href={XPOWER_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">X-2580 Professional 4-Stage HEPA Mini Air Scrubber</a>: 550 CFM, four filter stages, HEPA stage rated for 99.97% of 0.3-micron particles. Manufacturer's specifications, checked on {DATE_ISO}.
              </li>
              <li>
                U.S. EPA, <a href={EPA_PM_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Particulate Matter (PM) Basics</a> and <a href={EPA_INDOOR_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Indoor Particulate Matter</a>: definitions of PM10 and PM2.5, construction sites as a direct source, and the sentence quoted above. Checked on {DATE_ISO}.
              </li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
              About the photos on this page: they are owner-provided photos of this project, taken by Capital Clean Care during the
              clean. The homeowner's name has been changed. Photos show our team and the work, not the family's personal belongings
              in detail.
            </p>
          </FadeInSection>
        </div>
      </section>

      <RelatedPosts currentSlug={SLUG} showVideos={false} />
      <StickyCTA />
    </Layout>
  );
};

export default PostConstructionCleaningWashingtonDcTownhouse;
