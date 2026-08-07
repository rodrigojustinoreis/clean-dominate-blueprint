interface BlogInlineImageProps {
  src: string;
  alt: string;
  caption?: string;
  /** Set when the image has no matching -640.webp variant (skips srcset). */
  single?: boolean;
}

/**
 * Responsive, lazy-loaded inline article image. Mirrors BlogHero's srcset
 * convention (`<name>-640.webp` + full) so mobile pulls the smaller file.
 * Fixed 3:2 box (object-cover) keeps layout stable — no CLS.
 */
const BlogInlineImage = ({ src, alt, caption, single }: BlogInlineImageProps) => {
  const srcSet =
    !single && src.endsWith(".webp")
      ? `${src.replace(/\.webp$/, "-640.webp")} 640w, ${src} 1280w`
      : undefined;

  return (
    <figure className="my-8 not-prose">
      <img
        src={src}
        srcSet={srcSet}
        sizes="(max-width: 768px) 100vw, 768px"
        alt={alt}
        loading="lazy"
        decoding="async"
        width={1200}
        height={800}
        className="w-full rounded-2xl shadow-md object-cover aspect-[3/2]"
      />
      {caption && (
        <figcaption className="mt-3 text-sm text-muted-foreground text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default BlogInlineImage;
