import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/pages/Blog";

// The single content card for the whole Resource Center (hub rows, category pages, related guides).
// On-brand palette cycles navy → blue → teal → orange. Every combo is WCAG-AA legible:
// white text on the three dark blues, navy text on the orange pop.
export const RESOURCE_CARD_PALETTE = [
  { bg: "linear-gradient(150deg, #0D2B5E 0%, #173d78 100%)", fg: "#ffffff", sub: "rgba(255,255,255,.72)" }, // navy
  { bg: "linear-gradient(150deg, #15579C 0%, #1A6BAD 100%)", fg: "#ffffff", sub: "rgba(255,255,255,.75)" }, // brand blue
  { bg: "linear-gradient(150deg, #0B6787 0%, #0E7CA8 100%)", fg: "#ffffff", sub: "rgba(255,255,255,.78)" }, // teal
  { bg: "linear-gradient(150deg, #E89A00 0%, #F0A500 100%)", fg: "#0D2B5E", sub: "rgba(13,43,94,.62)" },    // orange pop
] as const;

interface ResourceColorCardProps {
  /** Either pass a full post… */
  post?: BlogPost;
  /** …or pass explicit link data (used by the related-guides grid, which only has hrefs). */
  href?: string;
  title?: string;
  category?: string;
  index?: number;
  watermark?: string;
}

export default function ResourceColorCard({
  post,
  href,
  title,
  category,
  index = 0,
  watermark,
}: ResourceColorCardProps) {
  const to = post ? `/resources/${post.slug}` : href || "#";
  const cardTitle = post?.title ?? title ?? "";
  const cardCategory = post?.category ?? category ?? "";
  const c = RESOURCE_CARD_PALETTE[index % RESOURCE_CARD_PALETTE.length];

  return (
    <Link
      to={to}
      style={{ background: c.bg, color: c.fg }}
      className="group relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-2xl p-5 shadow-sm outline-none transition-all duration-200 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent motion-safe:hover:-translate-y-1"
    >
      {watermark && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-4 -right-3 text-[92px] leading-none opacity-10 transition-opacity duration-200 group-hover:opacity-20"
        >
          {watermark}
        </span>
      )}
      <span className="relative text-[10.5px] font-bold uppercase tracking-[0.15em]" style={{ color: c.sub }}>
        {cardCategory}
      </span>
      <div className="relative mt-3">
        <h3 className="font-heading text-base font-bold leading-snug line-clamp-3">{cardTitle}</h3>
        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide" style={{ color: c.fg }}>
          Read now
          <ArrowRight className="h-3.5 w-3.5 transition-transform motion-safe:group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
