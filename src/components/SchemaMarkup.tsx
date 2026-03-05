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
  areaServed = ["Silver Spring", "Rockville", "Bethesda", "Arlington", "Washington DC"],
}: LocalBusinessSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${url}/#business`,
      name,
      telephone: phone,
      url,
      address: {
        "@type": "PostalAddress",
        streetAddress: address.street,
        addressLocality: address.city,
        addressRegion: address.state,
        postalCode: address.zip,
        addressCountry: "US",
      },
      areaServed: areaServed.map((area) => ({
        "@type": "Place",
        name: area,
      })),
      priceRange: "$$",
      image: `${url}/og-image.jpg`,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "30",
        bestRating: "5",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "19:00",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "local-business-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("local-business-schema");
      if (existing) existing.remove();
    };
  }, [name, phone, url]);

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
      },
      areaServed: {
        "@type": "Place",
        name: "Washington DC Metropolitan Area",
      },
    };

    const id = `service-schema-${serviceName.replace(/\s/g, "-").toLowerCase()}`;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById(id);
      if (existing) existing.remove();
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
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("faq-schema");
      if (existing) existing.remove();
    };
  }, [faqs]);

  return null;
};
