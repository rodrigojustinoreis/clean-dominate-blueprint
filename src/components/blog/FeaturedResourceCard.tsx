import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/pages/Blog";

// The single image-backed card for the whole Resource Center — hub features & rows, category
// grids, Latest, search results, and related guides. Cover image + navy brand scrim keeps the
// white text legible. `featured` = the larger hero treatment (bigger title + a white CTA button);
// default = the compact grid treatment (whole card is one crawlable tap target).
interface FeaturedResourceCardProps {
  /** Either pass a full post… */
  post?: BlogPost;
  /** …or explicit link data (used by the related-guides grid, which only has hrefs). */
  href?: string;
  title?: string;
  category?: string;
  coverImage?: string;
  featured?: boolean;
  ctaLabel?: string;
}

const FALLBACK_COVER = "/images/team/team-mopping-bright-room.jpg";

export default function FeaturedResourceCard({
  post,
  href,
  title,
  category,
  coverImage,
  featured = false,
  ctaLabel = "Read the guide",
}: FeaturedResourceCardProps) {
  const to = post ? `/resources/${post.slug}` : href || "#";
  const cardTitle = post?.title ?? title ?? "";
  const cardCategory = post?.category ?? category ?? "";
  const cover = post?.coverImage ?? coverImage ?? FALLBACK_COVER;

  const minH = featured ? "min-h-[260px] md:min-h-[300px]" : "min-h-[200px]";
  const titleSize = featured ? "text-xl md:text-2xl" : "text-base md:text-lg";

  return (
    <Link
      to={to}
      className={`group relative flex ${minH} flex-col justify-end overflow-hidden rounded-2xl p-5 md:p-6 shadow-md ring-1 ring-black/5 outline-none transition-shadow hover:shadow-xl focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2`}
    >
      <img
        src={cover}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
      />
      {/* Navy brand scrim */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(13,43,94,.12) 0%, rgba(13,43,94,.55) 52%, rgba(13,43,94,.93) 100%)" }}
      />
      <div className="relative">
        <span className="mb-2 inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-[#9CC8EE]">
          {cardCategory}
        </span>
        <h3 className={`font-heading ${titleSize} font-bold leading-snug text-white drop-shadow-sm line-clamp-3`}>
          {cardTitle}
        </h3>
        {featured ? (
          <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0D2B5E] shadow-sm transition-transform motion-safe:group-hover:translate-y-[-1px]">
            {ctaLabel}
            <ArrowRight className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-0.5" />
          </span>
        ) : (
          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-white/90">
            {ctaLabel}
            <ArrowRight className="h-3.5 w-3.5 transition-transform motion-safe:group-hover:translate-x-0.5" />
          </span>
        )}
      </div>
    </Link>
  );
}
