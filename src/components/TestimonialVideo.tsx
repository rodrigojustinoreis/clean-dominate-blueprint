import { useRef, useState, useEffect } from "react";
import { Volume2 } from "lucide-react";

interface TestimonialVideoProps {
  src: string;
  poster: string;
  label: string;
  heading?: string;
  subtext?: string;
}

/**
 * Client video testimonial that auto-plays (muted) when it scrolls into view and
 * pauses when it leaves — the "scroll → play" effect. Performance-safe: only the
 * poster renders until the block is near the viewport, then the <video> mounts.
 * Autoplay must be muted (browser policy) since the clip has speech, so controls
 * stay visible and a "Tap for sound" hint invites unmuting. Honors reduced-motion.
 */
const TestimonialVideo = ({
  src,
  poster,
  label,
  heading = "Hear It Straight From a Client",
  subtext = "A real Montgomery County homeowner on what it's like to have Capital Clean Care.",
}: TestimonialVideoProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

  // Mount the <video> only when the block scrolls near the viewport (no weight on load).
  useEffect(() => {
    if (mounted) return;
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setMounted(true);
          io.disconnect();
        }
      },
      { rootMargin: "250px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mounted]);

  // Once mounted: play (muted) while ≥50% visible, pause when it leaves. Skips reduced-motion.
  useEffect(() => {
    if (!mounted) return;
    const v = videoRef.current;
    const el = wrapRef.current;
    if (!v || !el) return;
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            void v.play?.().catch(() => {});
          } else {
            v.pause?.();
          }
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mounted]);

  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            <Volume2 className="h-3.5 w-3.5" aria-hidden="true" /> Client Testimonial
          </span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">{heading}</h2>
          <p className="text-muted-foreground mt-3 text-base md:text-lg max-w-2xl mx-auto">{subtext}</p>
        </div>

        <div
          ref={wrapRef}
          className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden border border-border shadow-xl ring-1 ring-accent/15 bg-[#0a1726]"
        >
          {mounted ? (
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover block"
              muted
              autoPlay
              playsInline
              controls
              preload="none"
              poster={poster}
              aria-label={label}
            >
              <source src={src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={poster}
              alt={label}
              className="w-full aspect-video object-cover block"
              loading="lazy"
              width={1280}
              height={720}
            />
          )}
          <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
            <Volume2 className="h-3.5 w-3.5" aria-hidden="true" /> Tap for sound
          </span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideo;
