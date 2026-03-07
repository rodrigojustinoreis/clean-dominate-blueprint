import { useEffect } from "react";

interface LocalBusinessSchemaProps {
  name?: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  url?: string;
  areaServed?: string[];
}

export const LocalBusinessSchema = ({
  name = "Capital Clean Care",
  phone = "(240) 704-2551",
  address = {
    street: "4111 Postgate Terrace",
    city: "Silver Spring",
    state: "MD",
    zip: "20906",
  },
  url = "https://capitalcleancare.com",
  areaServed,
}: LocalBusinessSchemaProps) => {
  useEffect(() => {
    const defaultAreas = [
      // Maryland
      "Silver Spring, MD", "Rockville, MD", "Bethesda, MD", "Germantown, MD",
      "Gaithersburg, MD", "Potomac, MD", "Frederick, MD", "Columbia, MD",
      "Ellicott City, MD", "Wheaton, MD", "Kensington, MD", "Chevy Chase, MD",
      // DC
      "Washington, DC", "Georgetown, DC", "Capitol Hill, DC", "Dupont Circle, DC",
      // Virginia
      "Arlington, VA", "McLean, VA", "Fairfax, VA", "Alexandria, VA",
      "Falls Church, VA", "Vienna, VA", "Tysons, VA",
    ];

    const areas = areaServed || defaultAreas;

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${url}/#business`,
      name,
      description: "Premium eco-friendly residential cleaning services in Maryland, Washington DC, and Northern Virginia. Licensed, insured, background-checked teams using non-toxic plant-based products.",
      telephone: phone,
      email: "capitalcleancare@gmail.com",
      url,
      logo: `${url}/logo.png`,
      image: `${url}/og-image.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: address.street,
        addressLocality: address.city,
        addressRegion: address.state,
        postalCode: address.zip,
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "39.08",
        longitude: "-77.02",
      },
      areaServed: [
        { "@type": "State", name: "Maryland" },
        { "@type": "AdministrativeArea", name: "Washington, DC" },
        { "@type": "State", name: "Virginia" },
        ...areas.map((area) => ({ "@type": "Place", name: area })),
      ],
      priceRange: "$$",
      currenciesAccepted: "USD",
      paymentAccepted: "Cash, Credit Card, Debit Card, Check",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "30",
        bestRating: "5",
        worstRating: "1",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "19:00",
      },
      sameAs: [
        "https://www.instagram.com/capital_cleancare",
        "https://www.facebook.com/capitalcleancare",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cleaning Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Standard House Cleaning" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deep Cleaning" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Move In / Move Out Cleaning" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Post-Construction Cleaning" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Recurring Cleaning" } },
        ],
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "local-business-schema";
    script.textContent = JSON.stringify(schema);

    const existing = document.getElementById("local-business-schema");
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("local-business-schema");
      if (el) el.remove();
    };
  }, [name, phone, url, areaServed]);

  return null;
};

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  url: string;
  provider?: string;
}

export const ServiceSchema = ({
  serviceName,
  description,
  url,
  provider = "Capital Clean Care",
}: ServiceSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceName,
      description,
      url,
      provider: {
        "@type": "LocalBusiness",
        name: provider,
        telephone: "(240) 704-2551",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4111 Postgate Terrace",
          addressLocality: "Silver Spring",
          addressRegion: "MD",
          postalCode: "20906",
          addressCountry: "US",
        },
        priceRange: "$$",
      },
      areaServed: [
        { "@type": "State", name: "Maryland" },
        { "@type": "AdministrativeArea", name: "Washington, DC" },
        { "@type": "State", name: "Virginia" },
      ],
      serviceType: "House Cleaning",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        eligibleRegion: [
          { "@type": "State", name: "Maryland" },
          { "@type": "AdministrativeArea", name: "Washington, DC" },
          { "@type": "State", name: "Virginia" },
        ],
      },
    };

    const id = `service-schema-${serviceName.replace(/\s/g, "-").toLowerCase()}`;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.textContent = JSON.stringify(schema);

    const existing = document.getElementById(id);
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, [serviceName, description, url]);

  return null;
};

interface FAQSchemaProps {
  faqs: { q: string; a: string }[];
}

export const FAQSchema = ({ faqs }: FAQSchemaProps) => {
  useEffect(() => {
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

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.textContent = JSON.stringify(schema);

    const existing = document.getElementById("faq-schema");
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("faq-schema");
      if (el) el.remove();
    };
  }, [faqs]);

  return null;
};
