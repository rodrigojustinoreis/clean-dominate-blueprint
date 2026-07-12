import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Play, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Clip {
  src: string;
  poster: string;
  title: string;
  caption: string;
  description: string;
}

// Real footage from Capital Clean Care deep cleans (self-hosted, click-to-open so the
// ~7-13 MB files only download when a visitor opens one — zero weight on load).
const CLIPS: Clip[] = [
  {
    src: "/videos/transformations/transformation-2.mp4",
    poster: "/videos/transformations/transformation-2-poster.webp",
    title: "Bathtub & Shower Deep Clean",
    caption: "Soap scum & mold → spotless",
    description: "Real before-and-after: a heavily stained bathtub and tile shower restored to spotless white by the Capital Clean Care team.",
  },
  {
    src: "/videos/transformations/transformation-4.mp4",
    poster: "/videos/transformations/transformation-4-poster.webp",
    title: "Stovetop Deep Clean",
    caption: "Baked-on grease → like new",
    description: "Capital Clean Care deep cleaning in action — cutting through built-up grease and grime down to a spotless finish.",
  },
  {
    src: "/videos/transformations/transformation-1.mp4",
    poster: "/videos/transformations/transformation-1-poster.webp",
    title: "Tile & Grout Restoration",
    caption: "Dingy grout → bright & even",
    description: "Discolored tile and grout scrubbed back to like-new — a real Capital Clean Care deep cleaning result.",
  },
  {
    src: "/videos/transformations/transformation-3.mp4",
    poster: "/videos/transformations/transformation-3-poster.webp",
    title: "Bathroom Deep Clean",
    caption: "Neglected → sanitized & fresh",
    description: "A neglected bathroom transformed top to bottom by the Capital Clean Care deep cleaning team.",
  },
];

// Spanish card overlay text for /es/* pages (schema descriptions stay in English).
const ES_CLIP_TEXT: Record<string, { title: string; caption: string }> = {
  "/videos/transformations/transformation-2.mp4": { title: "Limpieza Profunda de Tina y Ducha", caption: "Sarro y moho → impecable" },
  "/videos/transformations/transformation-4.mp4": { title: "Limpieza Profunda de Estufa", caption: "Grasa quemada → como nueva" },
  "/videos/transformations/transformation-1.mp4": { title: "Restauración de Azulejos y Lechada", caption: "Lechada opaca → brillante y pareja" },
  "/videos/transformations/transformation-3.mp4": { title: "Limpieza Profunda de Baño", caption: "Descuidado → desinfectado y fresco" },
};

const SITE = "https://capitalcleancare.com";

const videoSchema = {
  "@context": "https://schema.org",
  "@graph": CLIPS.map((c) => ({
    "@type": "VideoObject",
    name: `${c.title} — Capital Clean Care`,
    description: c.description,
    thumbnailUrl: `${SITE}${c.poster}`,
    contentUrl: `${SITE}${c.src}`,
    uploadDate: "2026-06-24T09:30:00-04:00",
    publisher: {
      "@type": "Organization",
      name: "Capital Clean Care",
      logo: { "@type": "ImageObject", url: `${SITE}/og-image.jpg` },
    },
  })),
};

interface TransformationsGalleryProps {
  heading?: string;
  subtext?: string;
}

const TransformationsGallery = ({
  heading = "Before & After: The Capital Clean Care Difference",
  subtext = "These aren't stock clips. Every video is unedited footage from our own DMV team: soap-scummed tubs, grease-caked stovetops, and grimy grout brought back to life with eco-friendly, family-safe products. This is what a real deep clean looks like.",
}: TransformationsGalleryProps) => {
  const [active, setActive] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [paused, setPaused] = useState(false);

  const isSpanish = useLocation().pathname.startsWith("/es");
  const t = (en: string, es: string) => (isSpanish ? es : en);
  const clipTitle = (c: Clip) => (isSpanish ? ES_CLIP_TEXT[c.src]?.title ?? c.title : c.title);
  const clipCaption = (c: Clip) => (isSpanish ? ES_CLIP_TEXT[c.src]?.caption ?? c.caption : c.caption);

  // Auto-rotate the carousel (pauses on hover, while a video is open, or for reduced motion).
  useEffect(() => {
    if (!api || paused || active !== null) return;
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => api.scrollNext(), 2500);
    return () => clearInterval(id);
  }, [api, paused, active]);

  // Close lightbox on Escape + lock body scroll while it's open.
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-secondary/60 via-background to-secondary/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />

      {/* Soft on-brand depth — blurred accent/primary glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-[0.18em] px-3.5 py-1.5 rounded-full mb-4">
            <Play className="h-3.5 w-3.5 fill-accent" /> {t("Real results · watch", "Resultados reales · mira")}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground max-w-3xl mx-auto leading-tight">
            {heading}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">{subtext}</p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true, duration: 30 }}
          setApi={setApi}
          className="px-1"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {CLIPS.map((c, i) => (
              <CarouselItem key={c.src} className="pl-3 md:pl-4 basis-[68%] sm:basis-[44%] md:basis-[31%]">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`${t("Watch", "Ver")}: ${clipTitle(c)}`}
                  className="group relative block w-full rounded-2xl overflow-hidden bg-card shadow-lg ring-1 ring-border transition-all duration-300 hover:shadow-2xl hover:ring-accent/40 hover:-translate-y-1 aspect-[9/16]"
                >
                  <img
                    src={c.poster}
                    alt={`${clipTitle(c)} — ${clipCaption(c)}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={360}
                    height={640}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/85 backdrop-blur-sm shadow-xl ring-1 ring-white/60 transition-transform duration-300 group-hover:scale-110">
                      <Play className="h-6 w-6 fill-accent text-accent ml-0.5" />
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <p className="text-white font-semibold text-sm leading-tight drop-shadow">{clipTitle(c)}</p>
                    <p className="text-white/85 text-xs mt-0.5 drop-shadow">{clipCaption(c)}</p>
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 md:-left-5 h-10 w-10 bg-white/95 hover:bg-white border-border text-foreground shadow-lg" />
          <CarouselNext className="right-1 md:-right-5 h-10 w-10 bg-white/95 hover:bg-white border-border text-foreground shadow-lg" />
        </Carousel>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-x-5 gap-y-3 text-center">
          <p className="text-muted-foreground/90 text-sm flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            {t("Authentic footage from our own team. No stock, no filters.", "Material auténtico de nuestro propio equipo. Sin stock, sin filtros.")}
          </p>
          <Button variant="cta" asChild>
            <Link to={isSpanish ? "/es/contacto" : "/contact"}>{t("Get results like these", "Consigue resultados como estos")} <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>

      {/* ── Lightbox / expanded player (medium size) ── */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-up"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={clipTitle(CLIPS[active])}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label={t("Close video", "Cerrar video")}
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors backdrop-blur-sm"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <video
              key={CLIPS[active].src}
              className="max-h-[68vh] max-w-[88vw] w-auto rounded-2xl shadow-2xl bg-black ring-1 ring-white/10"
              src={CLIPS[active].src}
              poster={CLIPS[active].poster}
              controls
              autoPlay
              playsInline
            />
            <p className="text-white/85 text-sm font-medium mt-3 text-center">
              {clipTitle(CLIPS[active])} — {clipCaption(CLIPS[active])}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default TransformationsGallery;
