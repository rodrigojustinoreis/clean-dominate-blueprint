import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { createElement } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

/**
 * SEO hook that returns a Helmet element for SSR-compatible meta tags.
 * Usage: place {seoHelmet} in your component's JSX.
 */
export const useSEO = ({ title, description, canonical, ogType = "website", ogImage }: SEOProps) => {
  // Fallback for crawlers that don't execute useEffect
  useEffect(() => {
    document.title = title;
  }, [title]);

  const seoHelmet = createElement(Helmet, null,
    createElement("title", null, title),
    createElement("meta", { name: "description", content: description }),
    canonical && createElement("link", { rel: "canonical", href: canonical }),
    createElement("meta", { property: "og:title", content: title }),
    createElement("meta", { property: "og:description", content: description }),
    createElement("meta", { property: "og:type", content: ogType }),
    canonical && createElement("meta", { property: "og:url", content: canonical }),
    ogImage && createElement("meta", { property: "og:image", content: ogImage }),
    createElement("meta", { name: "twitter:card", content: "summary_large_image" }),
    createElement("meta", { name: "twitter:title", content: title }),
    createElement("meta", { name: "twitter:description", content: description }),
    ogImage && createElement("meta", { name: "twitter:image", content: ogImage }),
  );

  return { seoHelmet };
};
