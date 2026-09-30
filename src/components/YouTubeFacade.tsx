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
  uploadDate: string; // ISO 8601 with offset, as published on YouTube
  duration: string; // ISO 8601, e.g. "PT56S"
}

/**
 * Lightweight YouTube embed: shows a site-hosted poster and loads the youtube-nocookie iframe only
 * after the visitor taps play, so the page does not pay for the YouTube player on load.
 * Emits one VideoObject JSON-LD block for this video (withSchema, default true).
 */
const YouTubeFacade = ({ video, withSchema = true, className = "" }: { video: YouTubeVideo; withSchema?: boolean; className?: string }) => {
  const [playing, setPlaying] = useState(false);
  const abs = (u: string) => (u.startsWith("http") ? u : `${SITE}${u}`);

  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: [abs(video.schemaThumbnail), `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`],
    uploadDate: video.uploadDate,
    duration: video.duration,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    url: `https://www.youtube.com/watch?v=${video.id}`,
    publisher: { "@type": "Organization", "@id": `${SITE}/#business`, name: "Capital Clean Care", logo: { "@type": "ImageObject", url: `${SITE}/logo.png` } },
  };

  return (
    <div className={className}>
      {withSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-xl ring-1 ring-black/5">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0 block h-full w-full" aria-label={`Play video: ${video.title}`}>
            <img
              src={video.poster}
              srcSet={`${video.poster.replace(".webp", "-640.webp")} 640w, ${video.poster} 1280w`}
              sizes="(min-width: 768px) 768px, 100vw"
              alt=""
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
    </div>
  );
};

export default YouTubeFacade;
