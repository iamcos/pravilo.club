import { Dictionary } from '@/lib/i18n';

type SchemaMarkupProps = {
  dictionary: Dictionary;
  lang: string;
};

export default function SchemaMarkup({ dictionary, lang }: SchemaMarkupProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pravilo.Club",
    "description": dictionary.main_content.introductory_offer,
    "url": `https://pravilo.club/${lang}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "", // To be filled by Misha
      "addressLocality": "", // To be filled by Misha
      "addressRegion": "", // To be filled by Misha
      "postalCode": "", // To be filled by Misha
      "addressCountry": "", // To be filled by Misha
    },
    "telephone": "", // To be filled by Misha
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        "opens": "09:00", // To be filled by Misha
        "closes": "18:00", // To be filled by Misha
      },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pravilo Sessions",
      "itemListElement": dictionary.services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description,
        },
      })),
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Misha", // To be filled by Misha
    "url": `https://pravilo.club/${lang}/misha`, // To be filled by Misha
    "image": "", // To be filled by Misha
    "sameAs": [], // Social media links to be filled by Misha
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
