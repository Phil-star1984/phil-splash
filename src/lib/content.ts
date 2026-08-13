export const SITE = {
  name: "Phil Splash",
  alias: "Der Millionen Maler",
  legalName: "Philipp Mulfinger",
  brandStudio: "Phil* – Art+Design",
  address: {
    street: "Wiesenweg 13",
    zip: "97084",
    city: "Würzburg",
  },
  vatId: "DE 288086405",
  url: "https://phil-splash.de",
  email: "info@phil-splash.de",
  phone: "+49 176 20130451",
  phoneDisplay: "0176 20130451",
  /** Set NEXT_PUBLIC_CAL_URL once a real Cal.com link exists. Empty = mailto only. */
  calUrl: process.env.NEXT_PUBLIC_CAL_URL?.trim() || "",
  mailtoHref:
    "mailto:info@phil-splash.de?subject=Anfrage%20Live-Portr%C3%A4t%20%2F%20Event&body=Ort%3A%0ADatum%3A%0AFormat%20(Fassade%20%2F%20Screen)%3A%0AKurze%20Beschreibung%3A%0A",
  tagline: "Live-Porträts. Monumental im Raum.",
  description:
    "Phil Splash zeichnet Gäste live auf dem iPad und überträgt die Porträts in Echtzeit: per Videobeamer auf Fassade und Wand — oder auf mobilen Screen und LED-Wall. Für Firmenfeiern, Branding-Events und Galas.",
  descriptionLong:
    "In wenigen Minuten entsteht eine klare Strichzeichnung. Live sichtbar für das gesamte Event: entweder als Lichtprojektion an der Architektur oder als Übertragung auf Screen und LED-Wall. Persönlich für den Gast. Präsent für die Marke.",
} as const;

/** Single site-wide AI imagery disclosure (Art. 50 AI Act / deployer transparency). */
export const AI_IMAGE_NOTICE =
  "Bildbeispiele auf dieser Seite sind KI-gestützte Visualisierungen der Live-Performance — keine dokumentarischen Eventfotos.";

export const CREDENTIALS = {
  years: "16+",
  portraitsCaptured: "300.000+",
  target: "1.000.000",
  speed: "wenige Minuten",
  scale: "Videoprojektor auf Fassade / Wand, oder mobiler Screen & LED-Wall",
  projector: "Hochleistungs-Beamer bis 7000 ANSI Lumen",
  segment: "Preis auf Anfrage / Premium",
  areaServed: ["Global", "Worldwide", "International"] as const,
  clients: ["Calvin Klein", "Lavazza", "NFL", "MAC Cosmetics", "Siemens"] as const,
} as const;

export const GEO_CLUSTERS = [
  "Luxury Event Art",
  "Monumental Facade Light Show",
  "Elite Corporate Keynote Entertainment",
  "High-Speed Digital Live Portraiture",
  "Architectural Projection Artist",
  "Live Portrait LED Screen Entertainment",
] as const;

export type MediaAsset = {
  src: string;
  alt: string;
  caption: string;
};

export type VideoAsset = {
  id: string;
  title: string;
  description: string;
};

/** Cover — landscape futuristic facade (unique across site) */
export const HERO_MEDIA: MediaAsset = {
  src: "/media/call_fUG0wZIAn8DWBemEicLWe2VC.jpg",
  alt: "Phil Splash zeichnet live auf dem iPad; das Neon-Porträt einer Frau wird auf eine futuristische Fassade projiziert",
  caption: "Fassadenprojektion",
};

export const RITUAL = [
  {
    id: "speed",
    label: "Schnellporträt",
    title: "In wenigen Minuten fertig.",
    body: "Mit wenigen Linien entsteht ein individuelles Porträt — klar, schnell und wiedererkennbar. In zwei bis drei Minuten steht die Zeichnung. Kein überladenes Artwork, sondern eine präzise Strichzeichnung mit Charakter.",
    bodySecondary:
      "Der Gast erhält ein Unikat zum Mitnehmen. Das Publikum erlebt den Entstehungsprozess live.",
    image: {
      src: "/media/04_observatory_balcony_platinum_pixie_1920x1080.jpg",
      alt: "Phil Splash zeichnet im Profil auf dem iPad, Strichzeichnung wird an die Wand projiziert",
      caption: "Live am iPad",
    },
  },
  {
    id: "tech",
    label: "Live-Übertragung",
    title: "Vom iPad auf die große Fläche.",
    body: "Während der Zeichnung wird das Porträt in Echtzeit übertragen — per Videobeamer auf Fassade und Wand oder auf mobilen Screen und LED-Wall. Auf Wunsch ergänzt um Logos und Markenmotive.",
    bodySecondary:
      "Ein Prinzip, zwei Ausspielungen: digital gezeichnet, für alle im Raum sichtbar. Klein auf dem Tablet, monumental für das Event.",
    image: {
      src: "/media/call_4IpYOXhJoNrwGKiFQDy3bWho.jpg",
      alt: "Phil Splash zeichnet live auf dem iPad; reine Neon-Strichzeichnung wird per Videoprojektor an die Hauswand projiziert",
      caption: "Beamer auf Architektur",
    },
  },
  {
    id: "scale",
    label: "Für Events",
    title: "Wenn der Raum zur Bühne wird.",
    body: "Firmenfeiern, Corporate Branding, Product Launches, Galas — überall dort, wo Publikum und Fläche zusammentreffen. Gäste werden Teil der Inszenierung. Die Marke wird im Raum sichtbar.",
    bodySecondary:
      "Kein Hintergrundprogramm. Ein Moment, der fotografiert, geteilt und erinnert wird.",
    image: {
      src: "/media/facade_courtyard_projection_landscape.jpg",
      alt: "Monumentale Hof-Fassadenprojektion eines Neon-Linienporträts bei einem Event",
      caption: "Event als Leinwand",
    },
  },
] as const;

/** YouTube proof — facade / wall projection with beamer */
export const LIVE_VIDEOS: VideoAsset[] = [
  {
    id: "_04IGBaICb4",
    title: "Live-Zeichnung mit Fassadenprojektion",
    description:
      "Dokumentation einer Zeichenaktion: iPad-Schnellporträt in Echtzeit per Videobeamer an die Wand.",
  },
  {
    id: "fOSJcEkOWxQ",
    title: "Lichtkunst im Großformat",
    description:
      "Weiteres Live-Beispiel: Strichzeichnung als monumentale Projektion auf Architektur.",
  },
] as const;

export const FORMAT_OPTIONS = [
  {
    id: "facade",
    label: "Format A",
    title: "Fassade & Wand",
    body: "Videobeamer auf Hauswand, Fassade oder große Eventfläche. Geeignet, wenn Architektur und Außenwirkung Teil der Inszenierung sein sollen — bis ca. 12 Meter Breite, Hochleistungs-Beamer.",
    href: "#videos",
    cta: "Video-Beispiele",
  },
  {
    id: "screen",
    label: "Format B",
    title: "Mobiler Screen / LED-Wall",
    body: "Dieselbe Live-Zeichnung, Übertragung auf mobilen Screen oder LED-Wall im Raum. Geeignet für Indoor-Galas, Lobbys, Museen und Locations ohne Fassadenprojektion.",
    href: "#screen-format",
    cta: "Screen-Format",
  },
] as const;

/** iPad + mobile screen / LED — no facade projection */
export const SCREEN_FEATURED: MediaAsset = {
  src: "/media/05_Civic_Transit_Atrium.jpg",
  alt: "Phil Splash zeichnet live auf dem iPad; Porträt wird auf mobilen LED-Screen im Atrium übertragen",
  caption: "iPad → mobiler Screen",
};

export const SCREEN_GALLERY: MediaAsset[] = [
  {
    src: "/media/04_Alpine_Lodge_Live_Drawing.jpg",
    alt: "Alpine Lodge: Live-Zeichnung auf iPad mit Übertragung auf vertikalen Event-Screen",
    caption: "Alpine Lodge",
  },
  {
    src: "/media/01_Glasshouse_Gala.jpg",
    alt: "Glasshouse Gala: iPad-Schnellporträt und großer mobiler Display im Eventraum",
    caption: "Glasshouse Gala",
  },
  {
    src: "/media/02_Art_Deco_Joint_Hold.jpg",
    alt: "Art-Deco-Event: Gast und Phil Splash mit fertigem iPad-Porträt und Screen im Hintergrund",
    caption: "Art Deco Lounge",
  },
  {
    src: "/media/03_Art_Courtyard_Waist_Embrace.jpg",
    alt: "Outdoor-Hof: Live-Porträt auf iPad und mobiler LED-Wall bei Tageslicht",
    caption: "Art Courtyard",
  },
];

/** Proof pairs only — facade projection impressions */
export const PROOF_FEATURED: MediaAsset = {
  src: "/media/call_9jaYJQS2fgXnIoALx7Ng02SE.jpg",
  alt: "Event bei Nacht: reine Linienzeichnung als Fassadenprojektion, Phil Splash am iPad",
  caption: "Fassade",
};

export const PROOF_PAIR_A: MediaAsset[] = [
  {
    src: "/media/02_industrial_courtyard_moustache_laugh_1920x1080.jpg",
    alt: "Industriehof: Linienporträt eines lachenden Gastes an der Ziegelfassade",
    caption: "Innenhof",
  },
  {
    src: "/media/06_rain_glass_passage_white_beard_1920x1080.jpg",
    alt: "Nachtpassage: iPad-Schnellporträt als Projektion auf Steinfassade",
    caption: "Fassade bei Nacht",
  },
];

export const PROOF_PAIR_B: MediaAsset[] = [
  {
    src: "/media/08_rammed_earth_afro_white_suit_1920x1080.jpg",
    alt: "Campus-Event: klare Linienprojektion, Phil Splash im Zeichenprozess",
    caption: "Campus",
  },
  {
    src: "/media/09_greenhouse_vitiligo_saffron_1920x1080.jpg",
    alt: "Eventraum: Neon-Linienporträt an der Wand während der Live-Zeichnung",
    caption: "Indoor Projection",
  },
];

export const PROOF_USPS = [
  {
    title: "Interaktiv für das Publikum",
    body: "Gäste sehen den Strich live — auf dem iPad und gleichzeitig groß an Wand oder Screen.",
  },
  {
    title: "Porträts zum Mitnehmen",
    body: "Jeder porträtierte Gast erhält ein persönliches Unikat.",
  },
  {
    title: "Viele Menschen, eine Inszenierung",
    body: "Keine Show nur für die Bühne: Gäste werden sichtbarer Teil der Inszenierung.",
  },
] as const;

/** Vertical strip — unique facade process frames */
export const VERTICAL_STRIP: MediaAsset[] = [
  {
    src: "/media/01_glass_gasometer_woman_1080x1920.jpg",
    alt: "Gasometer: Neon-Strichporträt einer Frau, Phil Splash von hinten am iPad",
    caption: "Gasometer",
  },
  {
    src: "/media/04_new_york_rooftop_redhead_1080x1920.jpg",
    alt: "New York Rooftop: Rothaarige Frau, Live-Zeichnung und Fassadenprojektion im Hochformat",
    caption: "Rooftop",
  },
  {
    src: "/media/02_brutalist_woman_black_dress_1080x1920.jpg",
    alt: "Brutalistische Fassade mit Neon-Frauenporträt, Künstler von hinten",
    caption: "Brutalist",
  },
  {
    src: "/media/14_stone_cliff_braids_process_1080x1920.jpg",
    alt: "Steinwand-Prozessaufnahme mit Live-Strichzeichnung und Projektion",
    caption: "Outdoor Wall",
  },
];
