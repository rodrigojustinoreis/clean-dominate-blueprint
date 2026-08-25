import { showcaseVideos } from "@/data/showcase-videos";

/**
 * Carrossel de vídeos verticais (9:16) reutilizável.
 * - 1 vídeo  → mostra centralizado.
 * - 2+ vídeos → vira um carrossel deslizável (scroll-snap horizontal).
 * Os vídeos vêm de src/data/showcase-videos.ts (é só adicionar IDs do YouTube).
 * Colocado antes da cotação na Home e nas páginas de serviço.
 */
const VideoShowcase = ({
  heading = "See our team in action 👇",
  className = "",
}: {
  heading?: string;
  className?: string;
}) => {
  if (!showcaseVideos.length) return null;
  const multiple = showcaseVideos.length > 1;

  return (
    <section className={`py-10 ${className}`} aria-label="Cleaning videos">
      <p className="text-center text-sm font-semibold text-muted-foreground mb-4">
        {heading}
      </p>
      <div
        className={
          multiple
            ? "flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-3 max-w-4xl mx-auto"
            : "flex justify-center px-4"
        }
      >
        {showcaseVideos.map((v) => (
          <div
            key={v.id}
            className="snap-center shrink-0 w-full max-w-[300px] rounded-2xl overflow-hidden shadow-lg border border-border bg-secondary"
            style={{ aspectRatio: "9/16" }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${v.id}`}
              title={v.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {multiple && (
        <p className="text-center text-xs text-muted-foreground mt-2">
          ← deslize para ver mais →
        </p>
      )}
    </section>
  );
};

export default VideoShowcase;
