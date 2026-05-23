interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

const LazyImage = ({ src, alt, className, onClick }: LazyImageProps) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    decoding="async"
    className={className}
    onClick={onClick}
  />
);

export default LazyImage;
