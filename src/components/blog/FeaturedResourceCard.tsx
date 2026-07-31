import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/pages/Blog";

// Large image-backed "hero" card for the top of the Resource Center (Ionic-style featured row).
// Uses the post's cover image with a navy gradient scrim so the brand-white text stays legible.
// The whole card is one crawlable <Link> to the post — good for SEO and a big mobile tap target.
export default function FeaturedResourceCard({
  post,
  ctaLabel = "Read the guide",
}: {
  post: BlogPost;
  ctaLabel?: string;
}) {
  const cover = post.coverImage || "/images/team/team-mopping-bright-room.jpg";
  return (
    <Link
      to={`/resources/${post.slug}`}
      className="group relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-2xl p-6 shadow-md ring-1 ring-black/5 outline-none transition-shadow hover:shadow-xl focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 md:min-h-[300px]"
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
        style={{ background: "linear-gradient(180deg, rgba(13,43,94,.15) 0%, rgba(13,43,94,.55) 55%, rgba(13,43,94,.92) 100%)" }}
      />
      <div className="relative">
        <span className="mb-2 inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-[#9CC8EE]">
          {post.category}
        </span>
        <h3 className="font-heading text-xl font-bold leading-snug text-white drop-shadow-sm md:text-2xl">
          {post.title}
        </h3>
        <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0D2B5E] shadow-sm transition-transform group-hover:translate-y-[-1px]">
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
