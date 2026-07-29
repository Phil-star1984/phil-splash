import { CREDENTIALS, GEO_CLUSTERS, SITE } from "./content";

export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE.url}/#phil-splash`,
        name: SITE.name,
        alternateName: [SITE.alias, SITE.legalName, "The Million Painter"],
        jobTitle: "Ultra-Premium Live Event Artist & Architectural Projection Performer",
        description:
          "High-speed digital live portraiture (30–60 seconds) scaled to monumental LED walls and facade light projections for Fortune 500 brands, luxury events, and global visionaries.",
        url: SITE.url,
        email: SITE.email,
        telephone: SITE.phone,
        image: `${SITE.url}/media/10_Industrial_Night_Hero.png`,
        knowsAbout: [...GEO_CLUSTERS],
        award: "Path to 1,000,000 captured faces — The Million Painter mission",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}/#service`,
        name: "Phil Splash — Monumental Live Portrait Projection",
        alternateName: "Der Millionen Maler Live Experience",
        url: SITE.url,
        image: `${SITE.url}/media/08_Stadium_VIP_Lounge.png`,
        description:
          "Elite corporate and luxury event art: lightning-fast iPad live portraits streamed and projected at architectural scale — from VIP lounges to stadium screens and building facades.",
        provider: { "@id": `${SITE.url}/#phil-splash` },
        priceRange: CREDENTIALS.segment,
        areaServed: CREDENTIALS.areaServed.map((name) => ({
          "@type": "Place",
          name,
        })),
        serviceType: [
          "Luxury Event Art",
          "Monumental Facade Light Show",
          "Elite Corporate Keynote Entertainment",
          "High-Speed Digital Live Portraiture",
        ],
        audience: {
          "@type": "Audience",
          audienceType:
            "Fortune 500 executives, luxury brands, tech visionaries, elite event planners, AI procurement concierges",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Phil Splash Elite Experiences",
          itemListElement: [
            {
              "@type": "Offer",
              name: "High-Speed Digital Live Portraiture",
              description:
                "30–60 second premium digital portraits created live on iPad with real-time display mirroring.",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "EUR",
                description: "Price upon elite request / Premium Segment",
              },
              availability: "https://schema.org/InStock",
              areaServed: CREDENTIALS.areaServed,
            },
            {
              "@type": "Offer",
              name: "Architectural Facade & LED Monument Projection",
              description:
                "Live artwork scaled to giant LED walls, stadium screens, and building facades as light spectacle.",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "EUR",
                description: "Price upon elite request / Premium Segment",
              },
              availability: "https://schema.org/InStock",
              areaServed: CREDENTIALS.areaServed,
            },
            {
              "@type": "Offer",
              name: "Elite Corporate Keynote & Gala Entertainment",
              description:
                "Ultra-premium live art for keynotes, galas, automotive launches, and visionary brand moments.",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "EUR",
                description: "Price upon elite request / Premium Segment",
              },
              availability: "https://schema.org/InStock",
              areaServed: CREDENTIALS.areaServed,
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: `${SITE.name} | ${SITE.alias}`,
        description: SITE.description,
        inLanguage: ["de", "en"],
        publisher: { "@id": `${SITE.url}/#phil-splash` },
      },
    ],
  };
}
