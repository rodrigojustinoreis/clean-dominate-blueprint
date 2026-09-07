import type { ComponentType, ReactNode, SVGProps } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, MessageCircleQuestion } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { trackPhoneClick } from "@/lib/analytics";

// Shared frame for the legal documents (Terms of Service, Privacy Policy), mirroring the site's
// closest utility sibling — FAQPage.tsx — so these pages open and read like the rest of the site:
// bg-mesh hero with the glass pill / big H1 with one accent word / lede / anchor chips / CTAs and a
// photo card on the right, then one rounded-3xl card per clause with an icon tile, then the same
// "Still have questions?" band. Document wording, dates, title/meta/canonical and the H1 text are
// passed through untouched (the accent word is only a <span> inside the same H1 text).
// Why not `prose`: @tailwindcss/typography is not registered in tailwind.config, and registering it
// would restyle ~40 other pages at once.

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export const LEGAL_LIST = "list-disc pl-5 space-y-1.5 marker:text-muted-foreground";
export const LEGAL_LINK = "text-primary font-medium underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-colors";

interface LegalSectionProps {
  id: string;
  title: string;
  icon: Icon;
  children: ReactNode;
}

/** One clause = one card, same anatomy as the FAQ category cards (icon tile + H2). */
export const LegalSection = ({ id, title, icon: SectionIcon, children }: LegalSectionProps) => (
  <section
    id={id}
    aria-labelledby={`${id}-heading`}
    className="scroll-mt-24 rounded-3xl border border-border bg-card p-6 md:p-8 shadow-sm"
  >
    <div className="flex items-center gap-3 mb-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent shadow-sm">
        <SectionIcon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h2 id={`${id}-heading`} className="font-heading text-2xl font-bold text-foreground tracking-tight tabular-nums">
        {title}
      </h2>
    </div>
    <div className="space-y-4 text-[17px] leading-7 text-foreground/90">{children}</div>
  </section>
);

interface LegalDocProps {
  /** Rendered <title>/meta from useSEO — must live inside <Layout>. */
  head: ReactNode;
  /** Full H1 text, e.g. "Terms of Service" (kept byte-identical for SEO). */
  title: string;
  /** Trailing word(s) of `title` rendered with the site's text-gradient — must be a suffix of `title`. */
  accentWord: string;
  href: string;
  /** Hero pill icon. */
  icon: Icon;
  updated: { iso: string; label: string };
  /** Lede under the H1 — reuse the page's meta description (no new copy). */
  lede: string;
  /** Anchor chips into the clauses (navigation only). */
  chips: { label: string; href: string; icon: Icon }[];
  sibling: { label: string; href: string };
  heroImage: { base: string; alt: string };
  /** Floating glass card on the photo — facts that already appear in the clauses. */
  badge: { icon: Icon; text: string };
  /** Pill text of the closing band, e.g. "Questions about these terms?" */
  contactPrompt: string;
  children: ReactNode;
}

const LegalDoc = ({ head, title, accentWord, href, icon: PillIcon, updated, lede, chips, sibling, heroImage, badge, contactPrompt, children }: LegalDocProps) => {
  const lead = title.endsWith(accentWord) ? title.slice(0, title.length - accentWord.length) : title + " ";
  const BadgeIcon = badge.icon;
  return (
    <Layout>
      {head}

      {/* ===== HERO — same anatomy as FAQPage ===== */}
      <section className="relative overflow-hidden bg-mesh">
        <div className="hidden md:block absolute -top-24 -left-24 w-96 h-96 bg-accent/25 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" />
        <div className="hidden md:block absolute top-10 -right-24 w-96 h-96 bg-primary/25 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000" />
        <div className="hidden md:block absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: title, href }]} />
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} className="mb-6" />

              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 animate-fade-up">
                <PillIcon className="h-4 w-4 text-accent" aria-hidden="true" />
                <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                  Last updated <time dateTime={updated.iso}>{updated.label}</time>
                </span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground mb-6 animate-fade-up drop-shadow-sm" style={{ animationDelay: "100ms" }}>
                {lead}<span className="text-gradient">{accentWord}</span>
              </h1>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mb-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
                {lede}
              </p>

              <div className="flex flex-wrap gap-2.5 mb-8 animate-fade-up" style={{ animationDelay: "300ms" }}>
                {chips.map(({ label, href: chipHref, icon: ChipIcon }) => (
                  <a
                    key={chipHref}
                    href={chipHref}
                    className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium text-foreground hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <ChipIcon className="h-4 w-4 text-accent" aria-hidden="true" />
                    {label}
                  </a>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "400ms" }}>
                <Button variant="cta" size="lg" className="text-sm px-8 h-14 rounded-full shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="text-sm px-8 h-14 rounded-full glass hover:bg-white/40 dark:hover:bg-black/40 transition-all duration-300" asChild>
                  <Link to={sibling.href}><FileText className="mr-2 h-4 w-4" /> {sibling.label}</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-up" style={{ animationDelay: "250ms" }}>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 ring-1 ring-black/5 aspect-[4/3] max-w-lg mx-auto">
                <img
                  src={`${heroImage.base}.webp`}
                  srcSet={`${heroImage.base}-640.webp 640w, ${heroImage.base}.webp 1280w`}
                  sizes="(min-width: 1024px) 512px, 100vw"
                  alt={heroImage.alt}
                  className="w-full h-full object-cover animate-kenburns"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={1280}
                  height={853}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              </div>
              <div className="absolute left-3 bottom-8 glass-card rounded-2xl px-4 py-3 shadow-xl animate-float max-w-[260px]">
                <div className="flex items-start gap-2">
                  <BadgeIcon className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                  <p className="text-xs text-foreground leading-snug font-medium">{badge.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Clauses — one card each ===== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">{children}</div>
      </section>

      {/* ===== Closing band — same as FAQPage ===== */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-secondary">
        <div className="hidden md:block absolute -top-20 right-0 w-80 h-80 bg-accent/15 rounded-full filter blur-3xl opacity-60 animate-blob" />
        <div className="relative container mx-auto px-4 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-5 text-xs font-semibold uppercase tracking-wider text-foreground">
            <MessageCircleQuestion className="h-4 w-4 text-accent" aria-hidden="true" /> {contactPrompt}
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 tracking-tight">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Contact us directly or request a free quote — we're happy to help, usually within a few hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" className="rounded-full shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300" asChild>
              <a href="mailto:info@capitalcleancare.com">Email info@capitalcleancare.com <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button variant="secondary" size="lg" className="rounded-full" asChild>
              <a href="tel:+12407042551" onClick={() => trackPhoneClick("legal_page")}>Call (240) 704-2551</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LegalDoc;
