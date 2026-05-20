interface TeamImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  priority?: boolean;
  className?: string;
}

const RATIO_CLASSES = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};

const TeamImage = ({ src, alt, caption, aspectRatio = "square", priority = false, className = "" }: TeamImageProps) => {
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/, ".webp");
  const hasSeparateWebp = webpSrc !== src;

  return (
    <figure className={`w-full max-w-[400px] mx-auto ${className}`}>
      <div className={`${RATIO_CLASSES[aspectRatio]} w-full overflow-hidden rounded-2xl bg-secondary`}>
        {hasSeparateWebp ? (
          <picture>
            <source srcSet={webpSrc} type="image/webp" />
            <img
              src={src}
              alt={alt}
              loading={priority ? "eager" : "lazy"}
              decoding={priority ? "sync" : "async"}
              width={400}
              height={aspectRatio === "square" ? 400 : aspectRatio === "portrait" ? 533 : 300}
              className="w-full h-full object-cover"
            />
          </picture>
        ) : (
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding={priority ? "sync" : "async"}
            width={400}
            height={aspectRatio === "square" ? 400 : aspectRatio === "portrait" ? 533 : 300}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm italic text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default TeamImage;
