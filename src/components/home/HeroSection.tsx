import { ArrowRight, Phone, Star, Shield, Leaf, Home, Sparkles, Package, HardHat } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { dirServiceCards } from "@/data/home-directory";

// Served from /public (stable URLs) so they can be <link rel="preload">-ed for the fastest LCP
// (the media-scoped preload pair is declared by Index.tsx via useSEO).
const teamPhoto = "/images/hero/team-hero.webp";          // md+: the real team, full-bleed
const mobileInterior = "/images/hero/home-hero-m.webp";   // <md: bright, clean living room (owner's mockup)
// 1x1 transparent GIF: keeps the browser from downloading the other breakpoint's photo.
const BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
import { trackPhoneClick, trackBookNowClick } from "@/lib/analytics";

// Real Google reviews (trimmed) — see src/data/realReviews.ts. Never invent testimonials.
const miniTestimonials = [
  { text: "Rodrigo and his team were incredible — worth every penny. They left it spotless!", author: "David Reed, Google review" },
  { text: "The thoroughness and attention to detail was exceptional — the home was spotless and looked beautiful.", author: "Steph M., Google review" },
  { text: "The crew arrived right on time and the apartment was spotless. Five stars without hesitation!", author: "Grace J., Google review" },
  { text: "Fantastic move-out clean — every crook and cranny spotlessly clean. The house is totally immaculate.", author: "Lisa Phillips, Google review" },
];

const avatars = [
  { src: "/images/team/avatars/team-scrubbing-door-detail-96.webp", alt: "Capital Clean Care team member" },
  { src: "/images/team/avatars/team-cleaning-glass-door-96.webp",   alt: "Capital Clean Care team member" },
  { src: "/images/team/avatars/team-polishing-fridge-96.webp",      alt: "Capital Clean Care team member" },
  { src: "/images/team/avatars/team-mopping-uniform-96.webp",       alt: "Capital Clean Care team member" },
];

const trustItems = [
  { icon: Star, label: "5-Star Rated" },
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Leaf, label: "Eco-Friendly" },
];

// Phone-only shortcuts strip (owner's mockup, 28/09/2026). Labels come from the same directory data
// as the services grid, so no new wording is introduced.
const SHORTCUTS: { slug: string; icon: typeof Home; tone: string }[] = [
  { slug: "house-cleaning", icon: Home, tone: "bg-sky-100 text-sky-700" },
  { slug: "deep-cleaning", icon: Sparkles, tone: "bg-emerald-100 text-emerald-700" },
  { slug: "move-out-cleaning", icon: Package, tone: "bg-amber-100 text-amber-700" },
  { slug: "post-construction-cleaning", icon: HardHat, tone: "bg-rose-100 text-rose-700" },
];
const shortcuts = SHORTCUTS.map((sc) => {
  const s = dirServiceCards.find((c) => c.slug === sc.slug);
  return s ? { ...sc, name: s.name } : null;
}).filter((x): x is NonNullable<typeof x> => x !== null);

// Phones (<md) follow the owner's mockup (28/09/2026): bright living-room photo behind a white
// left-to-right wash, eyebrow line, H1 with the second line in solid blue, the same copy, one CTA,
// three trust items with outline icons, a four-item shortcuts card and the rating row. No wording
// changes. md+ keeps the original hero: team photo full-bleed, pills, two CTAs, social proof.
const HeroSection = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTestimonialIdx((i) => (i + 1) % miniTestimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
  <section className="relative min-h-[580px] md:min-h-[700px] lg:min-h-[820px] flex items-center overflow-hidden">
    {/* Animated background blobs — desktop only (heavy filter on mobile hurts PageSpeed) */}
    <div className="hidden md:block absolute top-0 -left-1/4 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
    <div className="hidden md:block absolute top-0 -right-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
    <div className="hidden md:block absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />

    {/* Background: phones get the bright interior, md+ the team photo. Each <picture> hands the
        other breakpoint a 1x1 GIF so only one photo is ever downloaded. */}
    <div className="absolute inset-0 z-0">
      <picture className="md:hidden">
        <source media="(min-width: 768px)" srcSet={BLANK} />
        <img
          src={mobileInterior}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-[70%_center]"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={640}
          height={800}
        />
      </picture>
      <picture className="hidden md:block">
        <source media="(max-width: 767px)" srcSet={BLANK} />
        <img
          src={teamPhoto}
          alt="Capital Clean Care team of professional cleaners"
          className="w-full h-full object-cover object-top scale-105"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={760}
          height={1140}
        />
      </picture>
      {/* Phones: white wash from the left so the copy reads on the photo, fading to white at the
          bottom under the cards. Desktop: the original left-to-right gradient. */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 via-60% to-background/40 md:via-100% md:bg-gradient-to-r md:from-background md:via-background/60 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background md:hidden" />
      <div className="hidden md:block absolute inset-0 bg-mesh opacity-20" />
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 pt-10 pb-8 md:py-24">
      {/* flex-col so phones can reorder (CTA before the trust row) without changing the desktop DOM order */}
      <div className="max-w-2xl flex flex-col md:block">
        {/* Badge: eyebrow line on phones, glass pill on md+ */}
        <div className="inline-flex items-center gap-2 mb-5 md:glass md:rounded-full md:px-5 md:py-2.5 md:mb-8 animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="whitespace-nowrap text-[10.5px] min-[400px]:text-[11px] md:text-xs font-semibold text-slate-700 md:text-foreground uppercase tracking-[0.04em] min-[400px]:tracking-[0.08em] md:tracking-wider">Same-day slots available · 15% OFF first clean</span>
        </div>

        <h1 className="font-heading text-[2.35rem] sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-foreground leading-[1.05] md:leading-[1.1] tracking-[-0.03em] mb-5 md:mb-6 animate-fade-up drop-shadow-sm" style={{ animationDelay: "100ms" }}>
          {/* "Professional" removed from the H1 (owner decision 30/09/2026); kept in the meta description. */}
          Eco-Friendly House Cleaning
          <br />
          <span className="text-sky-600 md:text-gradient">in Maryland, DC & Virginia</span>
        </h1>

        <p className="text-slate-700 md:text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: "200ms" }}>
          Eco-friendly cleaning by background-checked professionals. Safe for kids and pets. Licensed & insured, with a 24-hour satisfaction guarantee.
        </p>

        {/* Trust items: DOM order is the desktop order (before the CTAs). Phones render them after the
            CTA as three outline-icon items (order-3); md+ keeps the original glass pills. */}
        <div className="order-4 md:order-none flex flex-wrap gap-x-4 gap-y-2 mt-5 md:mt-0 md:gap-3 md:mb-12 animate-fade-up" style={{ animationDelay: "400ms" }}>
          {trustItems.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-1.5 whitespace-nowrap md:gap-2 md:glass md:rounded-full md:px-4 md:py-2 text-xs md:text-sm font-medium text-foreground">
              <Icon className="h-5 w-5 md:h-4 md:w-4 shrink-0 text-primary md:text-accent stroke-[1.75] md:stroke-2" />
              <span className="leading-tight">{label}</span>
            </span>
          ))}
        </div>

        {/* CTAs: one full-width button on phones (the phone number lives in the header and the sticky bar), both on md+ */}
        <div className="order-1 md:order-none flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <div className="flex flex-col items-stretch sm:items-start gap-1">
            <Button variant="cta" size="lg" className="text-sm px-8 h-14 rounded-full shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300" asChild>
              <a href="#quote" onClick={() => trackBookNowClick("hero_section")}>Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <span className="text-xs text-muted-foreground pl-2 mt-1 md:mt-0">No commitment · Response within hours</span>
            <a href="tel:+12407042551" onClick={() => trackPhoneClick("hero_section_mobile")} className="md:hidden inline-flex min-h-11 items-center justify-center gap-2 text-sm font-semibold text-primary">
              <Phone className="h-4 w-4" aria-hidden="true" /> or call (240) 704-2551
            </a>
          </div>
          <Button
            size="lg"
            variant="outline"
            className="hidden md:inline-flex text-sm px-8 h-14 rounded-full glass hover:bg-white/40 dark:hover:bg-black/40 transition-all duration-300"
            asChild
          >
            <a href="tel:+12407042551" onClick={() => trackPhoneClick("hero_section")}><Phone className="mr-2 h-4 w-4" /> (240) 704-2551</a>
          </Button>
        </div>

        {/* Phone-only shortcuts card (md+ has the full services grid further down) */}
        {shortcuts.length > 0 && (
          <nav aria-label="Popular services" className="order-5 md:hidden mt-6 grid grid-cols-2 min-[400px]:grid-cols-4 min-[400px]:divide-x divide-border rounded-2xl overflow-hidden bg-background/85 backdrop-blur border border-border shadow-sm animate-fade-up" style={{ animationDelay: "450ms" }}>
            {shortcuts.map((sc) => (
              <Link key={sc.slug} to={`/services/${sc.slug}`} className="flex flex-col items-center gap-2 px-2 py-4 text-center hover:bg-accent/5 max-[399px]:border-b max-[399px]:odd:border-r border-border">
                <span className={`flex h-12 w-12 items-center justify-center rounded-full ${sc.tone}`}><sc.icon className="h-5 w-5" aria-hidden="true" /></span>
                <span className="text-xs min-[400px]:text-[11px] font-medium leading-tight text-foreground">{sc.name}</span>
              </Link>
            ))}
          </nav>
        )}

        {/* Phone-only rating row, right under the CTA: real team photo + 5.0 (SEO + design review 30/09/2026) */}
        <div className="order-3 md:hidden mt-4 mr-14 flex items-center gap-3 rounded-2xl border border-border bg-background/90 p-2.5 pr-3 shadow-sm min-[400px]:mr-0 animate-fade-up" style={{ animationDelay: "350ms" }}>
          <img src="/images/team/team-group-uniforms-640.webp" alt="The Capital Clean Care team in navy uniforms" width={640} height={412} loading="lazy" decoding="async" className="h-14 w-20 shrink-0 rounded-xl object-cover object-[center_30%]" />
          <div className="min-w-0">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
              ))}
              <span className="text-sm text-foreground ml-1.5 font-bold">5.0</span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5 font-medium">Trusted by homeowners in MD, DC & VA</p>
          </div>
        </div>

        {/* Social proof: desktop only */}
        <div className="hidden md:flex flex-col gap-4 mt-12 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: "500ms" }}>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {avatars.map((a) => (
                <div key={a.src} className="w-10 h-10 rounded-full border-2 border-background shadow-sm overflow-hidden">
                  <img src={a.src} alt={a.alt} width={40} height={40} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-sm text-foreground ml-1.5 font-bold">5.0</span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 font-medium">Trusted by homeowners in MD, DC & VA</p>
            </div>
          </div>
          {/* Mini testimonial — rotates every 5 s */}
          <div className="glass-card rounded-xl px-4 py-3 max-w-sm transition-opacity duration-500">
            <p className="text-xs text-foreground italic leading-relaxed">
              "{miniTestimonials[testimonialIdx].text}"
            </p>
            <p className="text-xs text-muted-foreground mt-1.5 font-semibold">— {miniTestimonials[testimonialIdx].author}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default HeroSection;
