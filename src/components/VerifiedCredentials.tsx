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
 * only in the on-page disclosure below the row (CredentialsDisclosure). Marks are the unmodified
 * official files: the BBB Accredited Business artwork (transparent margins hidden by the fixed box,
 * nothing cropped from the artwork itself) and Google's "Google Verified" badge.
 */
const BBB_MARK = "/images/trust/bbb-accredited-business.png"; // 1200x1030; artwork spans x 21-1179, y 293-738
const GOOGLE_MARK = "/images/trust/google-verified.svg";

const CredentialMark = ({ id }: { id: (typeof CREDENTIALS)[number]["id"] }) =>
  id === "bbb" ? (
    <span className="relative block h-9 w-[94px] shrink-0 overflow-hidden rounded-lg transition-transform duration-300 motion-safe:group-hover:scale-105">
      <img
        src={BBB_MARK}
        alt="BBB Accredited Business"
        width={1200}
        height={1030}
        loading="lazy"
        decoding="async"
        className="absolute max-w-none"
        style={{ width: "103.6%", left: "-1.8%", top: "-65.8%" }}
      />
    </span>
  ) : (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 transition-all duration-300 group-hover:bg-accent/20 motion-safe:group-hover:scale-110">
      <img src={GOOGLE_MARK} alt="" aria-hidden="true" width={25} height={25} loading="lazy" decoding="async" className="h-6 w-6" />
    </span>
  );

export const CredentialChips = () =>
  CREDENTIALS.map((c) => (
    <div key={c.id} className="group col-span-2 flex min-h-11 cursor-default items-center gap-2.5 sm:col-auto">
      <CredentialMark id={c.id} />
      <p className="text-sm font-semibold leading-tight text-foreground">
        {c.label}
        <span className="block font-normal text-muted-foreground sm:inline sm:whitespace-nowrap sm:before:content-['_·_']">{c.detail}</span>
      </p>
    </div>
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
