import { ReactNode } from "react";

interface BlogHeroProps {
  src: string;
  alt: string;
  children: ReactNode;
}

const BlogHero = ({ src, alt, children }: BlogHeroProps) => (
  <section className="relative w-full overflow-hidden bg-gray-900 text-white py-20 lg:py-32">
    <div className="absolute inset-0 z-0">
      <img
        src={src}
        alt={alt}
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

export default BlogHero;
