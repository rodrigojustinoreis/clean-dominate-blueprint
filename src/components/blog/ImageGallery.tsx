import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import LazyImage from "./LazyImage";
import PhotoAttribution from "./PhotoAttribution";

export interface GalleryImage {
  src: string;
  alt: string;
  attribution: { name: string; url: string };
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
            <PhotoAttribution name={img.attribution.name} url={img.attribution.url} />
            {img.caption && (
              <p className="text-xs text-center text-muted-foreground px-3 pb-2">{img.caption}</p>
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
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="flex flex-col items-center gap-3 max-w-4xl w-full">
            <img
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-xs text-gray-400">
              Photo by{" "}
              <a
                href={images[lightbox].attribution.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-gray-300"
                onClick={(e) => e.stopPropagation()}
              >
                {images[lightbox].attribution.name}
              </a>{" "}
              / Pexels
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
