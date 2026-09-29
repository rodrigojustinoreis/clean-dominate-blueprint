import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

/**
 * Full-screen viewer for a small set of photos: tap outside or Escape to close, arrows or swipe-free
 * prev/next buttons, caption under the image. Body scroll is locked while open.
 */
const Lightbox = ({ images, index, onClose, onIndex }: { images: LightboxImage[]; index: number | null; onClose: () => void; onIndex: (i: number) => void }) => {
  const open = index !== null && index >= 0 && index < images.length;

  const prev = useCallback(() => { if (index !== null) onIndex((index - 1 + images.length) % images.length); }, [index, images.length, onIndex]);
  const next = useCallback(() => { if (index !== null) onIndex((index + 1) % images.length); }, [index, images.length, onIndex]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, prev, next]);

  if (!open || index === null) return null;
  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={img.alt}
    >
      <button
        type="button"
        className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        onClick={onClose}
        aria-label="Close photo"
      >
        <X className="h-4 w-4" aria-hidden="true" /> Close
      </button>
      {images.length > 1 && (
        <>
          <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous photo" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white/25 md:left-6">
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next photo" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white/25 md:right-6">
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </>
      )}
      <figure onClick={(e) => e.stopPropagation()} className="flex max-w-5xl flex-col items-center gap-3">
        <img key={img.src} src={img.src} alt={img.alt} className="max-h-[78vh] max-w-full rounded-lg object-contain shadow-2xl animate-in zoom-in-95 duration-200" decoding="async" />
        {img.caption && <figcaption className="max-w-2xl text-center text-sm text-white/85">{img.caption}</figcaption>}
        <p className="text-xs text-white/60">{index + 1} / {images.length}</p>
      </figure>
    </div>
  );
};

export default Lightbox;
