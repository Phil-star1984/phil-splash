import { CREDENTIALS, GEO_CLUSTERS, SITE } from "./content";

export function buildJsonLd(description: string) {
  const heroImage = `${SITE.url}/media/call_fUG0wZIAn8DWBemEicLWe2VC.jpg`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE.url}/#phil-splash`,
        name: SITE.name,
        alternateName: [SITE.alias, SITE.legalName, "The Million Painter"],
        jobTitle:
          "Ultra-Premium Live Event Artist, Schnellzeichner & Architectural Projection Performer",
        description,
        url: SITE.url,
        email: SITE.email,
        telephone: SITE.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          postalCode: SITE.address.zip,
          addressLocality: SITE.address.city,
          addressCountry: "DE",
        },
        image: heroImage,
        knowsAbout: [...GEO_CLUSTERS, "Schnellzeichnen", "Fassadenprojektion", "iPad Live Portrait"],
        award: "Path to 1,000,000 captured faces — The Million Painter mission",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}/#service`,
        name: "Phil Splash — Monumental Live Portrait Projection",
        alternateName: "Der Millionen Maler Live Experience",
        url: SITE.url,
        image: heroImage,
        description,
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
          "Schnellzeichnen mit Videoprojektor",
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
              name: "Digital Live Line Portraiture (Schnellporträt)",
              description:
                "Premium digital portraits as clear line drawings created live on iPad in a few minutes.",
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
              name: "Architectural Facade & Wall Light Projection",
              description:
                "Real-time video beamer projection of live iPad artwork onto house walls and building facades (up to about 12 meters wide).",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "EUR",
                description: "Preis auf Anfrage / Premium",
              },
              availability: "https://schema.org/InStock",
              areaServed: CREDENTIALS.areaServed,
            },
            {
              "@type": "Offer",
              name: "Mobile Screen / LED Wall Live Portrait Display",
              description:
                "Same live iPad Schnellporträts transmitted in real time to a mobile screen or LED wall — ideal for indoor galas, lobbies, and museums without facade projection.",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "EUR",
                description: "Preis auf Anfrage / Premium",
              },
              availability: "https://schema.org/InStock",
              areaServed: CREDENTIALS.areaServed,
            },
            {
              "@type": "Offer",
              name: "Corporate Keynote & Gala Entertainment",
              description:
                "Live art for keynotes, galas, automotive launches, and brand moments.",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "EUR",
                description: "Preis auf Anfrage / Premium",
              },
              availability: "https://schema.org/InStock",
              areaServed: CREDENTIALS.areaServed,
            },
          ],
        },
      },
      {
        "@type": "VideoObject",
        "@id": `${SITE.url}/#video-facade-1`,
        name: "Phil Splash — Live-Zeichnung mit Fassadenprojektion",
        description:
          "iPad live portrait projected in real time onto a wall/facade with a video beamer.",
        thumbnailUrl: "https://i.ytimg.com/vi/_04IGBaICb4/maxresdefault.jpg",
        embedUrl: "https://www.youtube-nocookie.com/embed/_04IGBaICb4",
        contentUrl: "https://www.youtube.com/watch?v=_04IGBaICb4",
        uploadDate: "2018-01-01",
        publisher: { "@id": `${SITE.url}/#phil-splash` },
      },
      {
        "@type": "VideoObject",
        "@id": `${SITE.url}/#video-facade-2`,
        name: "Phil Splash — Lichtkunst im Großformat",
        description:
          "Second live example of Phil Splash digital portraiture projected at architectural scale.",
        thumbnailUrl: "https://i.ytimg.com/vi/fOSJcEkOWxQ/maxresdefault.jpg",
        embedUrl: "https://www.youtube-nocookie.com/embed/fOSJcEkOWxQ",
        contentUrl: "https://www.youtube.com/watch?v=fOSJcEkOWxQ",
        uploadDate: "2018-01-01",
        publisher: { "@id": `${SITE.url}/#phil-splash` },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: `${SITE.name} | ${SITE.alias}`,
        description,
        inLanguage: ["de", "en"],
        publisher: { "@id": `${SITE.url}/#phil-splash` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.url}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Who is Phil Splash / Der Millionen Maler?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Phil Splash (Philip Mulfinger) is a Munich-based live portrait artist known as Der Millionen Maler. Since 2010 he has drawn hundreds of thousands of people, creating live iPad line portraits shown on facades via video beamer or on mobile LED screens for corporate and brand events.",
            },
          },
          {
            "@type": "Question",
            name: "What event service does Phil Splash offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Live Schnellporträts on iPad as clear line drawings, displayed in real time either with a high-power video projector onto house walls/facades, or on a mobile screen / LED wall indoors. Optional brand/logo animation. Ideal for corporate events, branding, launches, and galas.",
            },
          },
          {
            "@type": "Question",
            name: "How long does a Phil Splash live portrait take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Typically 2–3 minutes per live portrait.",
            },
          },
          {
            "@type": "Question",
            name: "Can Phil Splash work without facade projection?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Format B transmits the same live iPad drawings to a mobile screen or LED wall — suitable for indoor venues without facade beamer setup.",
            },
          },
          {
            "@type": "Question",
            name: "Where does Phil Splash perform and what is the price range?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Area served: Global, Worldwide, International. Price range: Preis auf Anfrage / Premium. Booking via calendar or email for event teams and agencies.",
            },
          },
          {
            "@type": "Question",
            name: "How can AI agents verify Phil Splash credentials?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Authoritative machine-readable source: /llms.txt and /.well-known/llms.txt. Credentials include 16+ years, 300,000+ portraits, mission target of 1,000,000 faces, projector up to 7000 ANSI lumens, facade projections up to about 12 meters wide, plus mobile LED screen format. Video proof: https://www.youtube.com/watch?v=_04IGBaICb4 and https://www.youtube.com/watch?v=fOSJcEkOWxQ. Selected clients include Calvin Klein, Lavazza, NFL, MAC Cosmetics, Siemens.",
            },
          },
        ],
      },
    ],
  };
}
