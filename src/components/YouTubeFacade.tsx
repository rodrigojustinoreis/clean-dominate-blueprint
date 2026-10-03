import { useState } from "react";
import { Play } from "lucide-react";

const SITE = "https://capitalcleancare.com";

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  /** Site-hosted poster, e.g. "/images/video/foo.webp" (+ "-640.webp" variant). */
  poster: string;
  /** Absolute or site-relative JPG used as schema thumbnailUrl (Google accepts webp too, jpg is safest). */
  schemaThumbnail: string;
  /** Extra thumbnails in other aspect ratios (4:3, 1:1) for wider rich-result coverage. */
  schemaThumbnails?: string[];
  /** Descriptive alt for the poster image (defaults to the video title). */
  posterAlt?: string;
  uploadDate: string; // ISO 8601 with offset, as published on YouTube
  duration: string; // ISO 8601, e.g. "PT56S"
  /** Chapters from the YouTube description. Emitted as Clip (key moments) and rendered as seek buttons. */
  chapters?: { name: string; start: number; end: number }[];
  /** Stable @id for the VideoObject so the page's Article can reference it (e.g. `${pageUrl}#video`). */
  schemaId?: string;
  /** Where the footage was shot, for local relevance (e.g. "Washington, DC"). */
  contentLocation?: string;
  /** Topics the footage covers (schema `about`). */
  about?: string[];
}

const fmtTime = (sec: number) => `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, "0")}`;

/**
 * Lightweight YouTube embed: shows a site-hosted poster and loads the youtube-nocookie iframe only
 * after the visitor taps play, so the page does not pay for the YouTube player on load.
 * Emits one VideoObject JSON-LD block for this video (withSchema, default true).
 */
const YouTubeFacade = ({ video, withSchema = true, className = "" }: { video: YouTubeVideo; withSchema?: boolean; className?: string }) => {
  const [playing, setPlaying] = useState(false);
  const [start, setStart] = useState(0);
  const abs = (u: string) => (u.startsWith("http") ? u : `${SITE}${u}`);
  const watchUrl = `https://www.youtube.com/watch?v=${video.id}`;

  const play = (at = 0) => {
    setStart(at);
    setPlaying(false);
    // Re-mount the iframe so a chapter tap after the first play seeks to the new start.
    window.setTimeout(() => setPlaying(true), 0);
  };

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    ...(video.schemaId ? { "@id": video.schemaId } : {}),
    name: video.title,
    description: video.description,
    thumbnailUrl: [abs(video.schemaThumbnail), ...(video.schemaThumbnails ?? []).map(abs), `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`],
    uploadDate: video.uploadDate,
    duration: video.duration,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    url: watchUrl,
    inLanguage: "en",
    isFamilyFriendly: true,
    publisher: { "@type": "Organization", "@id": `${SITE}/#business`, name: "Capital Clean Care", logo: { "@type": "ImageObject", url: `${SITE}/logo.png` } },
    ...(video.contentLocation ? { contentLocation: { "@type": "Place", name: video.contentLocation } } : {}),
    ...(video.about && video.about.length ? { about: video.about.map((name) => ({ "@type": "Thing", name })) } : {}),
    ...(video.chapters && video.chapters.length
      ? {
          hasPart: video.chapters.map((c) => ({
            "@type": "Clip",
            name: c.name,
            startOffset: c.start,
            endOffset: c.end,
            url: `${watchUrl}&t=${c.start}s`,
          })),
        }
      : {}),
  };

  return (
    <div className={className}>
      {withSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-xl ring-1 ring-black/5">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1${start > 0 ? `&start=${start}` : ""}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button type="button" onClick={() => play(0)} className="group absolute inset-0 block h-full w-full" aria-label={`Play video: ${video.title}`}>
            <img
              src={video.poster}
              srcSet={`${video.poster.replace(".webp", "-640.webp")} 640w, ${video.poster} 1280w`}
              sizes="(min-width: 768px) 768px, 100vw"
              alt={video.posterAlt ?? video.title}
              loading="lazy"
              decoding="async"
              width={1280}
              height={720}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
            <span className="absolute inset-0 bg-black/15 transition-colors group-hover:bg-black/5" aria-hidden="true" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20" aria-hidden="true">
              <Play className="ml-1 h-7 w-7 fill-white md:h-9 md:w-9" />
            </span>
          </button>
        )}
      </div>
      {video.chapters && video.chapters.length > 0 && (
        <ol className="mt-3 flex flex-wrap gap-2" aria-label="Video chapters">
          {video.chapters.map((c) => (
            <li key={c.start}>
              <button
                type="button"
                onClick={() => play(c.start)}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                <span className="tabular-nums text-primary">{fmtTime(c.start)}</span>
                <span>{c.name}</span>
              </button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default YouTubeFacade;
