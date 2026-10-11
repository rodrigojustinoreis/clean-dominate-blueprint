/**
 * Home trust band strip (owner, 2026-10-11): the four chips (BBB Accredited, Google Verified,
 * EPA Safer Choice, 24-Hour Re-Clean Guarantee) glide slowly in one continuous row, same engine as
 * the contact marquee (pauses on hover/focus/touch, static scroller under reduced motion, server HTML
 * holds the four chips once). No frame or label: the strip sits inside the existing trust band.
 */
import { CheckCircle, Leaf } from "lucide-react";
import { Marquee } from "@/components/TrustMarquee";
import { CredentialChips } from "@/components/VerifiedCredentials";

const HOME_PX_PER_S = 20;
const chip = "shrink-0";

const ProductChips = ({ clone, wrap = false }: { clone: boolean; wrap?: boolean }) =>
  [
    { icon: Leaf, label: "EPA Safer Choice" },
    { icon: CheckCircle, label: "24-Hour Re-Clean Guarantee" },
  ].map((item) => (
    <li key={item.label} className={`group flex min-h-11 cursor-default items-center gap-2.5 ${wrap ? "" : chip}`} aria-hidden={clone || undefined}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 transition-all duration-300 group-hover:bg-accent/20 motion-safe:group-hover:scale-110">
        <item.icon className="h-4 w-4 text-accent transition-transform duration-300 motion-safe:group-hover:scale-110" aria-hidden="true" />
      </span>
      <p className={`${wrap ? "" : "whitespace-nowrap "}text-sm font-semibold leading-tight text-foreground`}>{item.label}</p>
    </li>
  ));

/** The same four chips, static, in a 2x2 grid (service-page heroes, 2026-10-11). */
export const StaticTrustChips = ({ className = "" }: { className?: string }) => (
  <ul aria-label="Credentials and guarantees" className={`grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 sm:gap-y-3 ${className}`}>
    <CredentialChips as="li" stackDetail />
    <ProductChips clone={false} wrap />
  </ul>
);

const Chips = ({ clone }: { clone: boolean }) => (
  <>
    <CredentialChips as="li" className={chip} clone={clone} />
    <ProductChips clone={clone} />
  </>
);

const HomeTrustMarquee = ({ className = "mx-auto mb-6 max-w-4xl", pxPerSecond = HOME_PX_PER_S, trackClassName = "gap-10 py-1 sm:gap-14" }: { className?: string; pxPerSecond?: number; trackClassName?: string }) => (
  <div className={className}>
    <Marquee tone="plain" ariaLabel="Credentials and guarantees" pxPerSecond={pxPerSecond} trackClassName={trackClassName} cards={(clone) => <Chips clone={clone} />} />
  </div>
);

export default HomeTrustMarquee;
