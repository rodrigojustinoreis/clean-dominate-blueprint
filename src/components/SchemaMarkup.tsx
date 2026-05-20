import { Helmet } from "react-helmet-async";
import { BUSINESS_INFO } from "@/data/business-info";

// Shared business info constants — single source of truth in src/data/business-info.ts
const BUSINESS = {
  name: BUSINESS_INFO.name,
  legalName: BUSINESS_INFO.legalName,
  phone: BUSINESS_INFO.phone.display,
  email: BUSINESS_INFO.email,
  url: BUSINESS_INFO.url,
  street: BUSINESS_INFO.address.streetAddress,
  city: BUSINESS_INFO.address.addressLocality,
  state: BUSINESS_INFO.address.addressRegion,
  zip: BUSINESS_INFO.address.postalCode,
  priceRange: BUSINESS_INFO.priceRange,
  lat: BUSINESS_INFO.geo.latitude,
  lng: BUSINESS_INFO.geo.longitude,
};

const businessAddress = {
  "@type": "PostalAddress" as const,
  streetAddress: BUSINESS.street,
  addressLocality: BUSINESS.city,
  addressRegion: BUSINESS.state,
  postalCode: BUSINESS.zip,
  addressCountry: "US",
};

const businessRef = {
  "@type": "LocalBusiness" as const,
  "@id": `${BUSINESS.url}/#business`,
  name: BUSINESS.name,
  telephone: BUSINESS.phone,
  address: businessAddress,
  priceRange: BUSINESS.priceRange,
};

const defaultAreaServedRegions = [
  { "@type": "State" as const, name: "Maryland" },
  { "@type": "AdministrativeArea" as const, name: "Washington, DC" },
  { "@type": "State" as const, name: "Virginia" },
];

function JsonLd({ id, schema }: { id: string; schema: Record<string, unknown> }) {
  return (
    <Helmet>
      <script type="application/ld+json" id={id}>
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

// ── LocalBusiness Schema ──────────────────────────────────────
interface LocalBusinessSchemaProps {
  areaServed?: string[];
  reviews?: { name: string; text: string; location?: string }[];
  inLanguage?: string;
}

export const LocalBusinessSchema = ({ areaServed, reviews, inLanguage = "en-US" }: LocalBusinessSchemaProps = {}) => {
  const defaultCityAreas = [
    "Silver Spring, MD", "Rockville, MD", "Bethesda, MD", "Germantown, MD",
    "Gaithersburg, MD", "Potomac, MD", "Frederick, MD", "Columbia, MD",
    "Ellicott City, MD", "Wheaton, MD", "Kensington, MD", "Chevy Chase, MD",
    "Washington, DC", "Georgetown, DC", "Capitol Hill, DC", "Dupont Circle, DC",
    "Arlington, VA", "McLean, VA", "Fairfax, VA", "Alexandria, VA",
    "Falls Church, VA", "Vienna, VA", "Tysons, VA",
  ];

  const areas = areaServed || defaultCityAreas;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS.url}/#business`,
    inLanguage,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description: "Premium eco-friendly residential cleaning services in Maryland, Washington DC, and Northern Virginia. Licensed, insured, background-checked teams using non-toxic plant-based products.",
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    url: BUSINESS.url,
    logo: `${BUSINESS.url}/logo.png`,
    image: `${BUSINESS.url}/og-image.jpg`,
    address: businessAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.lat,
      longitude: BUSINESS.lng,
    },
    areaServed: [
      ...defaultAreaServedRegions,
      ...areas.map((area) => ({ "@type": "Place", name: area })),
    ],
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card, Digital Payment",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS_INFO.rating.value,
      reviewCount: BUSINESS_INFO.rating.count,
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: BUSINESS_INFO.hours.days,
      opens: BUSINESS_INFO.hours.opens,
      closes: BUSINESS_INFO.hours.closes,
    },
    sameAs: [
      BUSINESS_INFO.social.instagram,
      BUSINESS_INFO.social.facebook,
      BUSINESS_INFO.social.googleMaps,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Standard House Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Eco-Friendly Deep Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Move In / Move Out Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Post-Construction Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Recurring Cleaning Plans" } },
      ],
    },
  };

  // Reviews must live on LocalBusiness — Google does not accept Service as parent type
  if (reviews && reviews.length > 0) {
    schema.review = reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewBody: r.text,
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    }));
  }

  return <JsonLd id="local-business-schema" schema={schema} />;
};

// ── Service Schema ────────────────────────────────────────────
interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  url: string;
  areaServed?: string[];
}

export const ServiceSchema = ({
  serviceName,
  description,
  url,
  areaServed,
}: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    url,
    provider: businessRef,
    areaServed: areaServed
      ? areaServed.map((a) => ({ "@type": "Place", name: a }))
      : defaultAreaServedRegions,
    serviceType: "House Cleaning",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      eligibleRegion: defaultAreaServedRegions,
    },
  };

  const id = `service-schema-${serviceName.replace(/\s/g, "-").toLowerCase()}`;
  return <JsonLd id={id} schema={schema} />;
};

// ── FAQ Schema ────────────────────────────────────────────────
interface FAQSchemaProps {
  faqs: { q: string; a: string }[];
}

export const FAQSchema = ({ faqs }: FAQSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return <JsonLd id="faq-schema" schema={schema} />;
};

// ── BreadcrumbList Schema ─────────────────────────────────────
interface BreadcrumbSchemaProps {
  items: { label: string; href: string }[];
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${BUSINESS.url}${item.href}`,
    })),
  };

  return <JsonLd id="breadcrumb-schema" schema={schema} />;
};

// ── WebSite Schema (for sitelinks search) ─────────────────────
export const WebSiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BUSINESS.name,
    url: BUSINESS.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BUSINESS.url}/faq?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd id="website-schema" schema={schema} />;
};

// ── Blog/Article Schema ───────────────────────────────────────
interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}

export const ArticleSchema = ({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: ArticleSchemaProps) => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: "Rodrigo Reis",
      url: `${BUSINESS.url}/about`,
      worksFor: { "@type": "Organization", name: BUSINESS.name },
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.url,
      logo: { "@type": "ImageObject", url: `${BUSINESS.url}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  if (image) schema.image = { "@type": "ImageObject", url: image, width: 800, height: 450 };

  const id = `article-schema-${title.replace(/\s/g, "-").toLowerCase().slice(0, 40)}`;
  return <JsonLd id={id} schema={schema} />;
};

// ── HowTo Schema ──────────────────────────────────────────────
interface HowToStep {
  name: string;
  text: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  url: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration, e.g. "PT3H"
  image?: string;
}

export const HowToSchema = ({ name, description, url, steps, totalTime, image }: HowToSchemaProps) => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };

  if (totalTime) schema.totalTime = totalTime;
  if (image) schema.image = { "@type": "ImageObject", url: image };

  return <JsonLd id="howto-schema" schema={schema} />;
};

// ── City/Location Review Schema ───────────────────────────────
interface CityReviewSchemaProps {
  cityName: string;
  cityUrl: string;
  reviews: { name: string; text: string; location: string; date: string }[];
}

export const CityReviewSchema = ({ cityName, cityUrl, reviews }: CityReviewSchemaProps) => {
  if (!reviews || reviews.length === 0) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS.url}/#business-${cityName.toLowerCase().replace(/\s/g, "-")}`,
    name: BUSINESS.name,
    url: cityUrl,
    telephone: BUSINESS.phone,
    address: businessAddress,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      datePublished: r.date,
      reviewBody: r.text,
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    })),
  };
  return <JsonLd id={`city-review-schema-${cityName.toLowerCase().replace(/\s/g, "-")}`} schema={schema} />;
};

// ── ContactPage Schema ────────────────────────────────────────
export const ContactPageSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Capital Clean Care",
    description: "Get in touch with Capital Clean Care for a free house cleaning quote. Serving MD, DC & VA.",
    url: `${BUSINESS.url}/contact`,
    mainEntity: businessRef,
  };

  return <JsonLd id="contact-page-schema" schema={schema} />;
};

// ── Founder / Person Schema ───────────────────────────────────
export const FounderPersonSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rodrigo Reis",
    jobTitle: "Founder & Owner",
    worksFor: {
      "@type": "LocalBusiness",
      "@id": `${BUSINESS.url}/#business`,
      name: BUSINESS.name,
    },
    url: `${BUSINESS.url}/about`,
    description: "Founder of Capital Clean Care, a family-owned eco-friendly residential cleaning company serving Maryland, Washington DC, and Northern Virginia since 2015.",
    knowsAbout: ["Eco-Friendly Cleaning", "Residential House Cleaning", "Green Cleaning Products", "Home Sanitation", "DMV Area Cleaning Services"],
    address: businessAddress,
  };
  return <JsonLd id="founder-person-schema" schema={schema} />;
};

// ── AboutPage Schema ──────────────────────────────────────────
export const AboutPageSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Capital Clean Care — Founder Story, GreenShield Method & Our Team",
    description: "The story behind Capital Clean Care: a family-founded eco-friendly cleaning service serving MD, DC & VA for 9+ years. Learn about our GreenShield 5-Step Clean™ methodology and our dedicated team.",
    url: `${BUSINESS.url}/about`,
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": `${BUSINESS.url}/#business`,
      name: BUSINESS.name,
      foundingDate: BUSINESS_INFO.yearFounded,
      foundingLocation: {
        "@type": "Place",
        name: "Silver Spring, MD",
      },
      founder: {
        "@type": "Person",
        name: "Rodrigo Reis",
      },
      numberOfEmployees: { "@type": "QuantitativeValue", minValue: 5, maxValue: 20 },
      slogan: "We Clean Like It's Our Own Home",
    },
  };
  return <JsonLd id="about-page-schema" schema={schema} />;
};
