import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

interface BlogHeroProps {
  src: string;
  alt: string;
  children: ReactNode;
}

const BlogHero = ({ src, alt, children }: BlogHeroProps) => {
  // Serve a 640w variant to phones and the full image to larger screens (LCP).
  // Every hero ships a matching `-640.webp` next to the source.
  const srcSet = src.endsWith(".webp")
    ? `${src.replace(/\.webp$/, "-640.webp")} 640w, ${src} 1280w`
    : undefined;

  return (
  <section className="relative w-full overflow-hidden bg-gray-900 text-white py-20 lg:py-32">
    {/* Preload the hero as this page's LCP image. imageSrcSet/imageSizes mirror the <img>
        below so the browser preloads the exact variant it will render (no double download). */}
    <Helmet>
      <link rel="preload" as="image" href={src} imageSrcSet={srcSet} imageSizes="100vw" fetchPriority="high" />
    </Helmet>
    <div className="absolute inset-0 z-0">
      <img
        src={src}
        srcSet={srcSet}
        sizes="100vw"
        alt={alt}
        width={1280}
        height={720}
        className="w-full h-full object-cover opacity-35"
        loading="eager"
        fetchPriority="high"
        style={{ objectPosition: "center 40%" }}
      />
    </div>
    <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
    <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
      {children}
    </div>
  </section>
  );
};

export default BlogHero;
