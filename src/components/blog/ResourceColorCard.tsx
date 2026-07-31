import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/pages/Blog";

// On-brand colored card for the Resource Center category rows (Ionic-style).
// Solid brand-family gradient background, category eyebrow, title, and a "Read now" affordance.
// Colors cycle through the company palette (navy → blue → teal → light blue) so a row reads as
// colorful but stays 100% on-brand. A faint emoji watermark echoes Ionic's corner illustrations.
const PALETTE = [
  "linear-gradient(150deg, #0D2B5E 0%, #163a73 100%)", // navy
  "linear-gradient(150deg, #1A6BAD 0%, #2079c0 100%)", // brand blue
  "linear-gradient(150deg, #0E7CA8 0%, #1591C4 100%)", // teal
  "linear-gradient(150deg, #2E90D0 0%, #4AACE8 100%)", // light blue
];

export default function ResourceColorCard({
  post,
  index = 0,
  watermark,
}: {
  post: BlogPost;
  index?: number;
  watermark?: string;
}) {
  return (
    <Link
      to={`/resources/${post.slug}`}
      className="group relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-2xl p-5 text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
      style={{ background: PALETTE[index % PALETTE.length] }}
    >
      {watermark && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-4 -right-3 text-[92px] leading-none opacity-10 transition-opacity group-hover:opacity-20"
        >
          {watermark}
        </span>
      )}
      <span className="relative text-[10.5px] font-bold uppercase tracking-[0.15em] text-white/70">
        {post.category}
      </span>
      <div className="relative mt-3">
        <h3 className="font-heading text-base font-bold leading-snug line-clamp-3">{post.title}</h3>
        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-white/90">
          Read now
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
