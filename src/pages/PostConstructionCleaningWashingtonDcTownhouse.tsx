import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight, ExternalLink, HardHat, Wind, Home, ShieldCheck, MapPin, Lightbulb, Building2, Layers,
  Sofa, Fan, Phone, CheckCircle2, Sparkles, Wrench, PlayCircle, ZoomIn,
} from "lucide-react";
import ReadingProgress from "@/components/blog/ReadingProgress";
import SectionJumpNav from "@/components/blog/SectionJumpNav";
import Lightbox from "@/components/blog/Lightbox";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import Breadcrumbs from "@/components/Breadcrumbs";
import FadeInSection from "@/components/blog/FadeInSection";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";
import FAQAccordion from "@/components/blog/FAQAccordion";
import YouTubeFacade, { type YouTubeVideo } from "@/components/YouTubeFacade";

// Case study written by the owner (2026-09-28): one real post-renovation clean of a furnished
// three-story townhouse in Washington, DC. Every photo on this page is an owner-provided photo of
// this project. The homeowner's name is changed. No HowTo markup on purpose.
// Layout follows the owner's reference mockup (28/09): hero + trust row, quick answer + snapshot,
// five process cards, equipment block, "why it is different" cards, dark CTA band, two-column FAQ.
const SLUG = "post-construction-cleaning-washington-dc-townhouse";
const URL = `https://capitalcleancare.com/resources/${SLUG}`;
const IMG = "/images/blog/post-construction-dc-townhouse";
// Cover: the owner's team photo taken inside this townhouse's home gym (owner-provided, 29/09/2026).
const HERO_IMAGE = `${IMG}/hero-team.webp`;
const HERO_IMAGE_640 = `${IMG}/hero-team-640.webp`;
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

// One owner-provided photo per step (29/09/2026: the owner sent the floor and air-scrubber photos
// and asked for each photo in its own step).
const steps: { n: string; title: string; text: string; detail: string; photo: { src: string; alt: string; caption: string; position?: string } }[] = [
  {
    n: "01", title: "Top floor first",
    text: "Dust falls, so we start at the top. Third floor: home gym, guest room, bathroom and office.",
    detail: "Ceiling, then light fixtures (taken down, bulbs cleaned), then walls, then every object, then the floor last.",
    photo: { src: `${IMG}/office-bookshelf.webp`, alt: "Team member wiping each shelf of the office bookcase by hand, with books and boxes set aside", caption: "The office, shelf by shelf, object by object." },
  },
  {
    n: "02", title: "Read the floor before cleaning it",
    text: "After three vacuum passes we inspect the whole floor for paint drips, glue, chemicals and stains.",
    detail: "Each mark comes off with the right method for that material before any mopping starts.",
    photo: { src: `${IMG}/floor-vacuum.webp`, alt: "Team member running a cordless vacuum with a green headlight over the new hardwood floor in a bedroom", caption: "One of the three vacuum passes on the new hardwood, headlight on to show the dust.", position: "object-[center_60%]" },
  },
  {
    n: "03", title: "Seal the room and clean the air",
    text: "When a room is done, the XPOWER X-2580 HEPA air scrubber goes in and every opening is sealed with plastic.",
    detail: "It runs for up to 24 hours, so airborne dust is captured instead of settling back on clean surfaces.",
    photo: { src: `${IMG}/air-scrubber.webp`, alt: "Team member kneeling on the new hardwood floor to set the blue XPOWER HEPA air scrubber next to a wall vent", caption: "The XPOWER X-2580 goes in before the room is sealed.", position: "object-[center_40%]" },
  },
  {
    n: "04", title: "Bathrooms get their own protocol",
    text: "The crew used these bathrooms for weeks. Wiping is not sanitizing.",
    detail: "Rotary machine on shower walls, glass and tile scraped, toilet seats taken apart, steam plus EPA-registered disinfectants.",
    // Owner-provided photo (29/09/2026), placed here at the owner's request.
    photo: { src: `${IMG}/bathroom-towel-bar.webp`, alt: "Team member in pink gloves detailing the chrome towel bar and the wall behind it with a brush", caption: "Every touch surface by hand, down to the towel bar and the wall behind it.", position: "object-[center_30%]" },
  },
  {
    n: "05", title: "Kitchen, closets and final handoff",
    text: "The new kitchen was cleaned ceiling to floor, including the refrigerator, range, hood and every cabinet inside and out.",
    detail: "Closets emptied, cleaned inside, everything put back where it was. Construction trash bagged and taken out.",
    photo: { src: `${IMG}/kitchen-refrigerator.webp`, alt: "Team member cleaning the empty shelves inside the new refrigerator", caption: "The new refrigerator, inside and out." },
  },
];

const projectPhotos = steps.map((s) => ({ ...s.photo, caption: `Step ${Number(s.n)}: ${s.photo.caption}` }));

const equipmentChips = ["HEPA filtration", "Up to 550 CFM airflow", "Four filter stages", "Runs in every finished room"];
const equipmentWhy = [
  "Construction dust removal from the air: captures the fine dust that is still floating after the surfaces are clean",
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
    a: "In an after construction cleaning, finish the surfaces first, then place a HEPA air scrubber in the room, seal every opening with plastic and let it run for up to 24 hours. The XPOWER X-2580 we use moves up to 550 cubic feet of air per minute through four stages and captures 99.97% of particles as small as 0.3 microns.",
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
    a: "Yes. Capital Clean Care is fully insured, and the crew that cleaned this townhouse is the same background-checked team that cleans our homes in Washington, DC and Maryland. The walkthrough before the cleaning day is also when we confirm access, protection of finished surfaces and the room order.",
  },
];

const HERO_ALT = "The Capital Clean Care team, five people in navy uniforms, standing in the finished home gym of the renovated Washington, DC townhouse";
const HERO_CAPTION = "Owner-provided project photo: the team in the townhouse's home gym, the first room we cleaned.";
// Every photo on the page, in reading order, for the tap-to-enlarge viewer (hero first).
const lightboxImages = [
  { src: HERO_IMAGE, alt: HERO_ALT, caption: HERO_CAPTION },
  ...projectPhotos.map((p) => ({ src: p.src, alt: p.alt, caption: `Owner-provided photo. ${p.caption}` })),
];

// Owner's YouTube video of this same project (published 29/09/2026). Chapters come from the video
// description on YouTube; the poster is the video's own thumbnail, hosted here.
const PROJECT_VIDEO: YouTubeVideo = {
  id: "XsVTzealxxY",
  title: "Post-Construction Cleaning Washington DC | Dirty to Move-In Ready",
  description:
    "Before and after of a post-construction clean on a renovated 3-story Washington, DC townhouse: construction dust on every surface, then kitchen, oven and fridge inside and out, stairs, bedrooms and every bathroom the workers used, sanitized. Filmed by the Capital Clean Care team on the job.",
  poster: "/images/video/post-construction-dc-townhouse-video.webp",
  schemaThumbnail: "/images/video/post-construction-dc-townhouse-video.jpg",
  schemaThumbnails: ["/images/video/post-construction-dc-townhouse-video-4x3.jpg", "/images/video/post-construction-dc-townhouse-video-1x1.jpg"],
  posterAlt: "Before and after of the post-construction clean in the Washington, DC townhouse: the stairs, spotless",
  // YouTube reports Pacific time; same instant in Eastern (EDT), where the business operates.
  uploadDate: "2026-09-29T21:30:22-04:00",
  duration: "PT58S",
  schemaId: `${URL}#video`,
  contentLocation: "Washington, DC",
  about: ["Post-construction cleaning", "Construction dust", "Washington, DC"],
  chapters: [
    { name: "Before: the dirty house after renovation", start: 0, end: 23 },
    { name: "After: the clean walkthrough", start: 23, end: 39 },
    { name: "Showers, bedrooms and final result", start: 39, end: 58 },
  ],
};

const jumpItems = [
  { id: "video", label: "Video" },
  { id: "process", label: "Process" },
  { id: "equipment", label: "Air scrubbing" },
  { id: "dust", label: "Construction dust" },
  { id: "included", label: "What's included" },
  { id: "areas", label: "DC, MD areas" },
  { id: "faq", label: "FAQ" },
];

const H2 = "font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight";
const EYEBROW = "text-xs font-semibold uppercase tracking-wider text-primary mb-2";

const PostConstructionCleaningWashingtonDcTownhouse = () => {
  const { seoHelmet } = useSEO({
    // <title> is the 60-character SERP variant; the H1 and the JSON-LD headline share the longer page framing
    // ("Inside a 3-Story Townhouse"), as Google asks the headline to match the visible title. Description at 145.
    title: "Post Construction Cleaning in Washington, DC: A Real Project",
    description:
      "See how we removed construction dust from a real Washington DC townhouse: room by room cleaning, a HEPA air scrubber and full bathroom sanitizing.",
    canonical: URL,
    ogType: "article",
    ogImage: OG_IMAGE,
  });

  const faqLeft = faqs.slice(0, Math.ceil(faqs.length / 2));
  const faqRight = faqs.slice(Math.ceil(faqs.length / 2));
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <Layout>
      {seoHelmet}
      <ReadingProgress />
      <Helmet>
        <meta name="keywords" content="post construction cleaning washington dc, post construction cleaning services, construction dust removal, after construction cleaning, post remodel cleaning dc, hepa air scrubber after renovation" />
        <link rel="preload" as="image" href={HERO_IMAGE} imageSrcSet={`${HERO_IMAGE_640} 640w, ${HERO_IMAGE} 1200w`} imageSizes="(min-width: 1024px) 480px, 100vw" fetchPriority="high" />
        <meta property="og:video" content={`https://www.youtube.com/embed/${PROJECT_VIDEO.id}`} />
        <meta property="og:video:secure_url" content={`https://www.youtube.com/embed/${PROJECT_VIDEO.id}`} />
        <meta property="og:video:type" content="text/html" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />
      </Helmet>
      <ArticleSchema
        title="Post Construction Cleaning in Washington, DC: Inside a 3-Story Townhouse"
        description="See how we removed construction dust from a real Washington DC townhouse: room by room cleaning, a HEPA air scrubber and full bathroom sanitizing."
        url={URL}
        datePublished={DATE_ISO}
        image={HERO_IMAGE}
        imageWidth={1200}
        imageHeight={1500}
        imageCaption={HERO_CAPTION}
        about={["Post-construction cleaning", "Construction dust", "HEPA air scrubber", "Particulate matter", "Washington, DC"]}
        video={{ "@type": "VideoObject", "@id": PROJECT_VIDEO.schemaId }}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resource Center", href: "/resources" }, { label: "Post Construction Cleaning in Washington, DC", href: URL }]} />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-mesh">
        <div className="hidden md:block absolute -top-24 -left-24 w-96 h-96 bg-accent/25 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" />
        <div className="hidden md:block absolute top-10 -right-24 w-96 h-96 bg-primary/25 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000" />

        <div className="relative container mx-auto px-4 pt-8 pb-12 md:pt-10 md:pb-16">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resource Center", href: "/resources" }, { label: "Post Construction Cleaning in Washington, DC" }]} className="mb-6" />
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
              <div className="group relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 ring-1 ring-black/5 aspect-[4/5] max-w-md mx-auto lg:ml-auto">
                <button type="button" onClick={() => setLightbox(0)} className="block h-full w-full cursor-zoom-in" aria-label="Enlarge photo: the team in the townhouse's home gym">
                  <img
                    src={HERO_IMAGE}
                    srcSet={`${HERO_IMAGE_640} 640w, ${HERO_IMAGE} 1200w`}
                    sizes="(min-width: 1024px) 480px, 100vw"
                    alt={HERO_ALT}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width={1200}
                    height={1500}
                  />
                </button>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" aria-hidden="true" />
                <span className="pointer-events-none absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-semibold text-foreground shadow-sm backdrop-blur"><ZoomIn className="h-3.5 w-3.5" aria-hidden="true" />Tap to enlarge</span>
                <div className="pointer-events-none absolute left-4 right-4 bottom-4 rounded-xl bg-background/90 backdrop-blur px-4 py-3 shadow-lg">
                  <p className="text-xs font-bold text-foreground leading-snug">Owner-provided project photo</p>
                  <p className="text-xs text-muted-foreground leading-snug">The team in the townhouse's home gym, the first room we cleaned.</p>
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

      <SectionJumpNav items={jumpItems} />

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

          {/* ===== VIDEO: the same project, before and after, 58 s ===== */}
          <FadeInSection>
            <div id="video" className="scroll-mt-28 mt-12 md:mt-14 grid lg:grid-cols-[1.35fr_1fr] gap-6 lg:gap-10 items-start">
              {/* Text first in the DOM (heading introduces the media on phones); the player sits left on lg+. */}
              <div className="lg:order-2">
                <p className={EYEBROW}>Watch the project</p>
                <h2 className={`${H2} mb-4`}>The same townhouse, before and after, in 58 seconds</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our team filmed this on the job: the dust the contractor left on every surface, then the walkthrough after
                  the clean. The kitchen, the oven and fridge inside and out, the stairs, the bedrooms and the bathrooms the
                  workers used are the same rooms described step by step below.
                </p>
                <p className="hidden lg:block text-sm text-muted-foreground leading-relaxed">
                  Tap a chapter to jump to that part. The video plays from YouTube only after you press play, so the page stays
                  light until then. Prefer to watch it there? <a href={`https://www.youtube.com/watch?v=${PROJECT_VIDEO.id}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline-offset-4 hover:underline">Open on YouTube</a>.
                </p>
              </div>
              <div className="lg:order-1">
                <YouTubeFacade video={PROJECT_VIDEO} />
                <p className="lg:hidden mt-3 text-sm text-muted-foreground leading-relaxed">
                  Tap a chapter to jump to that part. The video plays from YouTube only after you press play. Prefer to watch it there? <a href={`https://www.youtube.com/watch?v=${PROJECT_VIDEO.id}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline-offset-4 hover:underline">Open on YouTube</a>.
                </p>
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
              {steps.map((s, i) => (
                <li key={s.n} className="group rounded-2xl bg-white border border-border overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                  <button type="button" onClick={() => setLightbox(i + 1)} className="relative block w-full cursor-zoom-in overflow-hidden" aria-label={`Enlarge photo: ${s.photo.alt}`}>
                    <img src={s.photo.src} srcSet={`${s.photo.src.replace(".webp", "-640.webp")} 640w, ${s.photo.src} 1200w`} sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" alt={s.photo.alt} loading="lazy" decoding="async" width={1200} height={1600} className={`w-full aspect-[4/3] sm:aspect-[5/4] object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${s.photo.position ?? ""}`} />
                    <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm opacity-90 transition-opacity group-hover:opacity-100"><ZoomIn className="h-4 w-4" aria-hidden="true" /></span>
                  </button>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="h-9 w-9 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">{s.n}</span>
                      <h3 className="font-heading text-base font-bold text-foreground leading-snug">{s.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.text}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-3 mt-auto">{s.detail}</p>
                    <p className="text-[11px] text-muted-foreground leading-snug mt-2"><span className="font-semibold text-foreground">Owner-provided photo.</span> {s.photo.caption}</p>
                  </div>
                </li>
              ))}
            </ol>
          </FadeInSection>

          <FadeInSection>
            <p className="text-sm text-muted-foreground leading-relaxed mt-6 max-w-3xl">
              On the new hardwood we finish with a rotary machine that controls the moisture going into the wood, using a product
              made for that finish. Too much water and boards can cup or warp. The full sequence is in our{" "}
              <Link to="/resources/how-to-clean-hardwood-floors-after-construction" className="text-primary hover:underline">guide on cleaning hardwood floors after construction</Link>.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ===== EQUIPMENT ===== */}
      <section id="equipment" className="bg-white py-14 md:py-20 scroll-mt-32">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/5 via-white to-accent/5 p-6 md:p-10 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
              <div>
                <p className={EYEBROW}>The equipment that makes the difference</p>
                <h2 className={`${H2} mb-4`}>How we remove dust from the air, not just the surfaces</h2>
                <p className="text-foreground leading-relaxed mb-4 font-medium">
                  We finish the surfaces first, then seal the room in plastic and run a HEPA air scrubber for up to 24 hours: an
                  XPOWER X-2580 rated to move up to 550 cubic feet of air per minute and capture 99.97% of particles as small as
                  0.3 microns.
                </p>
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
      <section id="dust" className="bg-secondary/40 py-14 md:py-20 scroll-mt-32">
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
      <section id="included" className="bg-white py-14 md:py-20 scroll-mt-32">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <p className={EYEBROW}>Scope</p>
            <h2 className={`${H2} mb-3`}>What's included in post construction cleaning</h2>
            <p className="text-foreground leading-relaxed max-w-3xl mb-3 font-medium">
              Post construction cleaning removes dust from ceilings, walls, light fixtures, floors and every object in the home,
              then sanitizes the bathrooms and cleans the kitchen inside and out, with the scope confirmed in a walkthrough before
              the cleaning day.
            </p>
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
      <section id="areas" className="bg-white py-14 md:py-20 scroll-mt-32">
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
                  { to: "/locations/washington-dc/post-construction-cleaning", label: "Washington, DC", sub: "Post-construction cleaning" },
                  { to: "/washington-dc", label: "Washington, DC service area", sub: "Neighborhoods we clean" },
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
      <section id="faq" className="bg-secondary/40 py-14 md:py-20 scroll-mt-32">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <p className={EYEBROW}>FAQ</p>
            <h2 className={`${H2} mb-8`}>Frequently asked questions</h2>
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
      <Lightbox images={lightboxImages} index={lightbox} onClose={() => setLightbox(null)} onIndex={setLightbox} />
    </Layout>
  );
};

export default PostConstructionCleaningWashingtonDcTownhouse;
