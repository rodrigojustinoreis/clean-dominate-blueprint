interface PhotoAttributionProps {
  name: string;
  url: string;
  platform?: string;
}

const PhotoAttribution = ({ name, url, platform = "Pexels" }: PhotoAttributionProps) => (
  <p className="text-xs text-center text-muted-foreground bg-gray-50 py-2 px-4">
    Photo by{" "}
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">
      {name}
    </a>{" "}
    / {platform}
  </p>
);

export default PhotoAttribution;
