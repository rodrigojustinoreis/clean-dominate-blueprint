// SSR-compatible SEO hook using react-helmet-async (not useEffect).
// Adds hreflang bilateral links automatically from route-map.ts.
import { Helmet } from "react-helmet-async";
import { createElement } from "react";
import { useLocation } from "react-router-dom";
import { getRoutePair, getCanonicalUrl } from "@/data/route-map";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  noIndex?: boolean;
  /** LCP image to <link rel="preload"> for this page only (e.g. the hero on the homepage). */
  preloadImage?: string;
}

export const useSEO = ({ title, description, canonical, ogType = "website", ogImage, noIndex, preloadImage }: SEOProps) => {
  const { pathname } = useLocation();
  const isSpanish = pathname.startsWith("/es/") || pathname === "/es";
  const lang = isSpanish ? "es" : "en";
  const locale = isSpanish ? "es_US" : "en_US";

  // Append the brand only when it keeps the title within Bing's 70-char limit;
  // otherwise the descriptive title stands alone (avoids truncation in search results).
  const withBrand = title.includes("Capital Clean Care") ? title : `${title} | Capital Clean Care`;
  const finalTitle = withBrand.length <= 70 ? withBrand : title;
  const canonicalUrl = canonical || getCanonicalUrl(pathname);
  const pair = getRoutePair(pathname);

  const hreflangLinks = pair
    ? [
        createElement("link", { key: "hreflang-en", rel: "alternate", hrefLang: "en", href: getCanonicalUrl(pair.en) }),
        createElement("link", { key: "hreflang-es", rel: "alternate", hrefLang: "es", href: getCanonicalUrl(pair.es) }),
        createElement("link", { key: "hreflang-xd", rel: "alternate", hrefLang: "x-default", href: getCanonicalUrl(pair.en) }),
      ]
    : [
        createElement("link", { key: "hreflang-self", rel: "alternate", hrefLang: isSpanish ? "es" : "en", href: canonicalUrl }),
        createElement("link", { key: "hreflang-xd", rel: "alternate", hrefLang: "x-default", href: canonicalUrl }),
      ];

  const children = [
    createElement("title", { key: "title" }, finalTitle),
    createElement("html", { key: "html", lang }),
    createElement("meta", { key: "desc", name: "description", content: description }),
    createElement("meta", { key: "og-site", property: "og:site_name", content: "Capital Clean Care" }),
    createElement("meta", { key: "og-locale", property: "og:locale", content: locale }),
    createElement("meta", { key: "og-title", property: "og:title", content: finalTitle }),
    createElement("meta", { key: "og-desc", property: "og:description", content: description }),
    createElement("meta", { key: "og-type", property: "og:type", content: ogType }),
    createElement("link", { key: "canonical", rel: "canonical", href: canonicalUrl }),
    createElement("meta", { key: "og-url", property: "og:url", content: canonicalUrl }),
    createElement("meta", { key: "tw-card", name: "twitter:card", content: "summary_large_image" }),
    createElement("meta", { key: "tw-title", name: "twitter:title", content: finalTitle }),
    createElement("meta", { key: "tw-desc", name: "twitter:description", content: description }),
    createElement("meta", { key: "tw-site", name: "twitter:site", content: "@CapitalCleanCare" }),
    ...hreflangLinks,
    ...(preloadImage
      ? [createElement("link", { key: "preload-lcp", rel: "preload", as: "image", href: preloadImage, fetchPriority: "high" })]
      : []),
    // Single source of truth for robots. Emitted on every page so there is never a
    // conflict with a static index.html default (noindex pages previously carried BOTH
    // an inherited "index,follow" and a Helmet "noindex,nofollow").
    createElement("meta", {
      key: "robots",
      name: "robots",
      content: noIndex
        ? "noindex,nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    }),
    ...(ogImage
      ? [
          createElement("meta", { key: "og-img", property: "og:image", content: ogImage }),
          createElement("meta", { key: "og-img-w", property: "og:image:width", content: "1200" }),
          createElement("meta", { key: "og-img-h", property: "og:image:height", content: "630" }),
          createElement("meta", { key: "og-img-alt", property: "og:image:alt", content: finalTitle }),
          createElement("meta", { key: "tw-img", name: "twitter:image", content: ogImage }),
        ]
      : []),
  ];

  const seoHelmet = createElement(Helmet, null, ...children);
  return { seoHelmet };
};
