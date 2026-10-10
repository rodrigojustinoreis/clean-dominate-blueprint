/**
 * Two verifiable credentials (BBB accreditation, Google Local Services Ads verification) as plain
 * text links, plus a native <details> that explains what each one is and is not. Used on the home
 * trust band ("chips" variant) and next to the contact form ("compact" variant). No seal graphics,
 * no rating, no guarantee wording. Data: src/data/verified-credentials.ts.
 */
import type { ReactNode } from "react";
import { ExternalLink, Info, ChevronDown } from "lucide-react";
import { CREDENTIALS, CREDENTIALS_FAQ, GOOGLE_REVIEWS } from "@/data/verified-credentials";

// Neutral icons on purpose (no seal look): the credential is the text and the link.
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

/** Home trust band: two chips in the same visual language as the existing ones, each a link. */
export const CredentialChips = () =>
  CREDENTIALS.map((c) => {
    const Icon = ICONS[c.id];
    return (
      <Ext
        key={c.id}
        href={c.href}
        className="group col-span-2 flex min-h-11 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:col-auto"
      >
        <span className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-accent/20 motion-safe:group-hover:scale-110">
          <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
        </span>
        <span className="leading-tight">
          <span className="block font-semibold text-sm text-foreground">
            {c.label} <span className="whitespace-nowrap font-normal text-muted-foreground">· {c.detail}</span>
          </span>
          <span className="block text-sm text-primary underline underline-offset-2 group-hover:no-underline">{c.linkText}</span>
        </span>
      </Ext>
    );
  });

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
