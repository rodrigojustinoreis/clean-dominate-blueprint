import { Helmet } from "react-helmet-async";

// Shared business info constants
const BUSINESS = {
  name: "Capital Clean Care",
  phone: "(240) 704-2551",
  email: "capitalcleancare@gmail.com",
  url: "https://capitalcleancare.com",
  street: "4111 Postgate Terrace",
  city: "Silver Spring",
  state: "MD",
  zip: "20906",
  priceRange: "$$",
  lat: "39.08",
  lng: "-77.02",
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
}

export const LocalBusinessSchema = ({ areaServed }: LocalBusinessSchemaProps = {}) => {
  const defaultCityAreas = [
    "Silver Spring, MD", "Rockville, MD", "Bethesda, MD", "Germantown, MD",
    "Gaithersburg, MD", "Potomac, MD", "Frederick, MD", "Columbia, MD",
    "Ellicott City, MD", "Wheaton, MD", "Kensington, MD", "Chevy Chase, MD",
    "Washington, DC", "Georgetown, DC", "Capitol Hill, DC", "Dupont Circle, DC",
    "Arlington, VA", "McLean, VA", "Fairfax, VA", "Alexandria, VA",
    "Falls Church, VA", "Vienna, VA", "Tysons, VA",
  ];

  const areas = areaServed || defaultCityAreas;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
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
      ratingValue: "5.0",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sarah M." },
        datePublished: "2025-11-15",
        reviewBody: "Capital Clean Care transformed our home. The team was professional, thorough, and used products safe for my kids and pets.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "James T." },
        datePublished: "2025-12-02",
        reviewBody: "We've used their bi-weekly service for over a year and every visit exceeds expectations. Highly recommend!",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Lauren K." },
        datePublished: "2026-01-10",
        reviewBody: "After our kitchen renovation, the post-construction cleaning was incredible. They removed every trace of dust.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Patricia W." },
        datePublished: "2026-01-22",
        reviewBody: "Best maid service in Silver Spring. They show up on time, do an incredible job, and the eco-friendly products are a huge bonus for our family.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Robert L." },
        datePublished: "2026-02-05",
        reviewBody: "Used them for move-out cleaning and got my full deposit back. The apartment looked better than when I moved in. Incredible service.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Amanda F." },
        datePublished: "2026-02-18",
        reviewBody: "My Airbnb rating went from 4.6 to 5.0 stars after switching to Capital Clean Care for turnovers. Guests love how clean everything is.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Diana T." },
        datePublished: "2026-03-01",
        reviewBody: "Needed house cleaning near me fast before a family visit. They fit me in within 2 days and the house was spotless. Highly recommend.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.instagram.com/capital_cleancare",
      "https://www.facebook.com/capitalcleancare",
      "https://www.google.com/maps/place/Capital+Clean+Care/@39.0887503,-77.0783716,17z/data=!3m1!4b1!4m6!3m5!1s0xa2bc172727d57413:0x18a0025a4f044b49!8m2!3d39.0887503!4d-77.0783716!16s%2Fg%2F11wp5v7v9c",
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

  return <JsonLd id="local-business-schema" schema={schema} />;
};

// ── Service Schema ────────────────────────────────────────────
interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  url: string;
  areaServed?: string[];
  reviews?: { name: string; text: string; location?: string }[];
}

export const ServiceSchema = ({
  serviceName,
  description,
  url,
  areaServed,
  reviews,
}: ServiceSchemaProps) => {
  const schema: Record<string, unknown> = {
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

  if (reviews && reviews.length > 0) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: String(reviews.length),
      bestRating: "5",
      worstRating: "1",
    };
    schema.review = reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewBody: r.text,
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    }));
  }

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
  items: { label: string; href?: string }[];
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${BUSINESS.url}${item.href}` } : {}),
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
}

export const ArticleSchema = ({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: ArticleSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.url,
      logo: { "@type": "ImageObject", url: `${BUSINESS.url}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const id = `article-schema-${title.replace(/\s/g, "-").toLowerCase().slice(0, 40)}`;
  return <JsonLd id={id} schema={schema} />;
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
