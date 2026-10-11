/**
 * Two verifiable credentials (BBB accreditation, Google Local Services Ads verification): label-only
 * chips with the official marks on the home trust band, plus a native <details> that explains what
 * each one is and is not and holds the proof links. "Compact" variant (text links) is kept for the
 * contact page history but is unused since the contact marquee. No rating, no guarantee wording.
 * Data: src/data/verified-credentials.ts.
 */
import type { ReactNode } from "react";
import { ExternalLink, Info, ChevronDown } from "lucide-react";
import { CREDENTIALS, CREDENTIALS_FAQ, GOOGLE_REVIEWS } from "@/data/verified-credentials";

// Compact variant only: neutral icons, the credential is the text and the link.
const ICONS = { bbb: ExternalLink, google: Info } as const;
const linkClass =
  "inline-flex min-h-11 items-center text-primary underline underline-offset-2 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm";

const Ext = ({ href, children, className = linkClass }: { href: string; children: ReactNode; className?: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
    {children}
    <span className="sr-only"> (opens in a new tab)</span>
  </a>
);

const Disclosure = ({ summary }: { summary: string }) => (
  <details className="group/cred mt-3 rounded-xl border border-border bg-card text-left">
    <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-4 py-2.5 text-sm font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary [&::-webkit-details-marker]:hidden">
      <span>{summary}</span>
      <ChevronDown aria-hidden="true" className="h-4 w-4 shrink-0 text-muted-foreground motion-safe:transition-transform group-open/cred:rotate-180" />
    </summary>
    <div className="space-y-3 border-t border-border px-4 pb-4 pt-3 text-sm leading-relaxed text-muted-foreground">
      {CREDENTIALS.map((c) => (
        <div key={c.id}>
          <p>
            <strong className="text-foreground">{c.label}.</strong> {c.explain}
          </p>
          <Ext href={c.href}>{c.linkText}</Ext>
        </div>
      ))}
      <div>
        <p>
          <strong className="text-foreground">{CREDENTIALS_FAQ.q}</strong> {CREDENTIALS_FAQ.a}
        </p>
        <Ext href={GOOGLE_REVIEWS.href}>{GOOGLE_REVIEWS.text}</Ext>
      </div>
    </div>
  </details>
);

/**
 * Home trust band (2026-10-11): the two credentials use the same layout as the "EPA Safer Choice"
 * and "24-Hour Re-Clean Guarantee" chips next to them (mark on the left, bold label on the right)
 * and carry no external link; the official marks replace the generic icons. The proof links live
 * only in the on-page disclosure below the strip (CredentialsDisclosure). Marks: the BBB torch logo
 * supplied by the owner (bbb-logo.png) and Google's "Google Verified" badge, both inside the same
 * 36px tile as the product chips.
 */
const MARKS = { bbb: { src: "/images/trust/bbb-logo.png", w: 194, h: 283 }, google: { src: "/images/trust/google-verified.svg", w: 25, h: 25 } } as const;

export const CredentialMark = ({ id }: { id: (typeof CREDENTIALS)[number]["id"] }) => {
  const m = MARKS[id];
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 transition-all duration-300 group-hover:bg-accent/20 motion-safe:group-hover:scale-110">
      <img src={m.src} alt="" aria-hidden="true" width={m.w} height={m.h} loading="lazy" decoding="async" className={id === "bbb" ? "h-8 w-auto" : "h-6 w-6"} />
    </span>
  );
};

/** The two credential chips (label + detail, no link). Rendered as <li> inside the home strip. */
export const CredentialChips = ({ as: Tag = "div", className = "", clone = false, stackDetail = false }: { as?: "div" | "li"; className?: string; clone?: boolean; stackDetail?: boolean }) =>
  CREDENTIALS.map((c) => (
    <Tag key={c.id} className={`group flex min-h-11 cursor-default items-center gap-2.5 ${className}`} aria-hidden={clone || undefined}>
      <CredentialMark id={c.id} />
      <p className="text-sm font-semibold leading-tight text-foreground">
        {c.label}
        {/* Detail under the label on phones (and always when stacked, e.g. a narrow hero column); inline with a dot from sm up. */}
        <span className={`block font-normal text-muted-foreground ${stackDetail ? "" : "sm:inline sm:whitespace-nowrap sm:before:content-['_·_']"}`}>{c.detail}</span>
      </p>
    </Tag>
  ));

export const CredentialsDisclosure = () => <Disclosure summary="What do these credentials mean?" />;

/** Contact page: one compact line above the form, then the same disclosure. */
export const CredentialsCompact = () => (
  <aside aria-label="Verifiable credentials" className="mb-4 md:mb-6">
    <ul className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm">
      {CREDENTIALS.map((c) => {
        const Icon = ICONS[c.id];
        return (
          <li key={c.id} className="flex flex-wrap items-center gap-x-2">
            <span className="inline-flex items-center gap-2">
              <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span className="font-semibold text-foreground">{c.label}</span>
              <span className="text-muted-foreground">· {c.detail}</span>
            </span>
            <Ext href={c.href}>{c.linkText}</Ext>
          </li>
        );
      })}
    </ul>
    <Disclosure summary="What do these credentials mean?" />
  </aside>
);

export default CredentialsCompact;
