import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

// Shared frame for legal documents (Terms of Service, Privacy Policy).
// Why: both pages used `prose prose-lg`, but @tailwindcss/typography is not registered in
// tailwind.config, so the classes were inert — H2s rendered at body size with no vertical rhythm.
// Registering the plugin would restyle ~40 other pages at once, so the hierarchy is set here by
// hand instead. Measure: max-w-2xl + 17px/28px ≈ 70 characters per line (was ~92).
// The wording and dates of the documents are content, not styling — pass them through untouched.

export const LEGAL_LIST = "list-disc pl-5 space-y-1.5 marker:text-muted-foreground";

export interface LegalImage {
  /** Base path without extension: `<base>.webp` (1280w) and `<base>-640.webp` must both exist. */
  base: string;
  alt: string;
}

interface LegalSectionProps {
  id: string;
  title: string;
  /** Optional illustration for the clause — same figure treatment the site uses on service/blog pages. */
  image?: LegalImage;
  children: ReactNode;
}

export const LegalSection = ({ id, title, image, children }: LegalSectionProps) => (
  <section id={id} aria-labelledby={`${id}-heading`}>
    <h2
      id={`${id}-heading`}
      className="font-heading text-xl md:text-2xl font-semibold tracking-tight tabular-nums mb-4 scroll-mt-28"
    >
      {title}
    </h2>
    <div className={image ? "grid gap-5 md:grid-cols-[240px_minmax(0,1fr)] md:gap-8 items-start" : undefined}>
      {image && (
        <figure className="m-0">
          <img
            src={`${image.base}.webp`}
            srcSet={`${image.base}-640.webp 640w, ${image.base}.webp 1280w`}
            sizes="(min-width: 768px) 240px, 100vw"
            alt={image.alt}
            width={1280}
            height={853}
            loading="lazy"
            decoding="async"
            className="w-full aspect-[4/3] object-cover rounded-2xl shadow-md ring-1 ring-border"
          />
        </figure>
      )}
      <div className="space-y-4 text-[17px] leading-7 text-foreground/90">{children}</div>
    </div>
  </section>
);

interface LegalDocProps {
  /** Rendered <title>/meta from useSEO — must live inside <Layout>. */
  head: ReactNode;
  title: string;
  href: string;
  updated: { iso: string; label: string };
  sibling: { label: string; href: string };
  /** Wider frame (max-w-4xl) when sections carry an image column; text column stays ~65–70 cpl. */
  wide?: boolean;
  children: ReactNode;
}

const LegalDoc = ({ head, title, href, updated, sibling, wide = false, children }: LegalDocProps) => (
  <Layout>
    {head}
    <section className="py-16 md:py-24">
      <div className={`container mx-auto px-4 ${wide ? "max-w-4xl" : "max-w-2xl"}`}>
        <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: title, href }]} />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} className="mb-6" />
        <h1 className="font-heading text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 mb-10 text-sm text-muted-foreground">
          Last updated <time dateTime={updated.iso}>{updated.label}</time>
          <span aria-hidden="true"> · </span>
          <Link
            to={sibling.href}
            className="text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-colors"
          >
            {sibling.label}
          </Link>
        </p>
        <div className="space-y-10 md:space-y-12">{children}</div>
      </div>
    </section>
  </Layout>
);

export default LegalDoc;
