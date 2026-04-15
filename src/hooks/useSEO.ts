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
  const children = [
    createElement("title", { key: "title" }, title),
    createElement("meta", { key: "desc", name: "description", content: description }),
    createElement("meta", { key: "og-site", property: "og:site_name", content: "Capital Clean Care" }),
    createElement("meta", { key: "og-locale", property: "og:locale", content: "en_US" }),
    createElement("meta", { key: "og-title", property: "og:title", content: title }),
    createElement("meta", { key: "og-desc", property: "og:description", content: description }),
    createElement("meta", { key: "og-type", property: "og:type", content: ogType }),
    createElement("meta", { key: "tw-card", name: "twitter:card", content: "summary_large_image" }),
    createElement("meta", { key: "tw-title", name: "twitter:title", content: title }),
    createElement("meta", { key: "tw-desc", name: "twitter:description", content: description }),
    ...(canonical ? [
      createElement("link", { key: "canonical", rel: "canonical", href: canonical }),
      createElement("meta", { key: "og-url", property: "og:url", content: canonical }),
    ] : []),
    createElement("meta", { key: "tw-site", name: "twitter:site", content: "@CapitalCleanCare" }),
    ...(ogImage ? [
      createElement("meta", { key: "og-img", property: "og:image", content: ogImage }),
      createElement("meta", { key: "og-img-w", property: "og:image:width", content: "1200" }),
      createElement("meta", { key: "og-img-h", property: "og:image:height", content: "630" }),
      createElement("meta", { key: "og-img-alt", property: "og:image:alt", content: title }),
      createElement("meta", { key: "tw-img", name: "twitter:image", content: ogImage }),
    ] : []),
  ];

  const seoHelmet = createElement(Helmet, null, ...children);

  return { seoHelmet };
};
