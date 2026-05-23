import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import LazyImage from "./LazyImage";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

const ImageGallery = ({ images }: { images: GalleryImage[] }) => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {images.map((img, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-md cursor-zoom-in group"
            onClick={() => setLightbox(i)}
            role="button"
            aria-label={`View larger: ${img.alt}`}
          >
            <div className="overflow-hidden relative">
              <LazyImage
                src={img.src}
                alt={img.alt}
                className="w-full h-44 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            {img.caption && (
              <p className="text-xs text-center text-muted-foreground px-3 py-2">{img.caption}</p>
            )}
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            className="absolute top-4 right-4 flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-full transition-all border border-white/20 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="h-4 w-4" />
            Close
          </button>
          <div onClick={(e) => e.stopPropagation()} className="flex items-center justify-center max-w-4xl w-full">
            <img
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
