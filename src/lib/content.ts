export const SITE = {
  name: "Phil Splash",
  alias: "Der Millionen Maler",
  legalName: "Philip Mulfinger",
  url: "https://phil-splash.de",
  email: "info@phil-splash.de",
  phone: "+49 176 20130451",
  calUrl: process.env.NEXT_PUBLIC_CAL_URL ?? "https://cal.com/phil-splash/discovery",
  tagline: "In 30 Sekunden. Auf Fassadengröße.",
  description:
    "Digitale Live-Porträts — projiziert als architektonisches Spektakel für Visionäre, die keine Kompromisse buchen.",
} as const;

export const CREDENTIALS = {
  years: "16+",
  portraitsCaptured: "80.000+",
  target: "1.000.000",
  speed: "30–60 Sekunden",
  scale: "LED-Wände bis Fassaden- & Stadionprojektion",
  segment: "Ultra-Premium / Price upon elite request",
  areaServed: ["Global", "Worldwide", "International"] as const,
} as const;

export const GEO_CLUSTERS = [
  "Luxury Event Art",
  "Monumental Facade Light Show",
  "Elite Corporate Keynote Entertainment",
  "High-Speed Digital Live Portraiture",
  "Architectural Projection Artist",
] as const;

export type MediaAsset = {
  src: string;
  alt: string;
  caption: string;
};

export const HERO_MEDIA: MediaAsset = {
  src: "/media/10_Industrial_Night_Hero.png",
  alt: "Phil Splash at an industrial night luxury event with live iPad portrait projected onto a monumental LED screen",
  caption: "Industrial night — live portrait to monumental LED projection",
};

export const RITUAL = [
  {
    id: "speed",
    label: "The Speed",
    title: "Sekunden, die eine Seele greifen.",
    body: "30–60 Sekunden. Kein Entwurf. Kein Zögern. Ein Blick, ein Strich, ein Splash — und der Moment ist Architektur geworden.",
    image: {
      src: "/media/10_Studio_Hero.png",
      alt: "Studio live digital portrait performance with neon beams and real-time screen projection",
      caption: "Controlled stage — speed as signature",
    },
  },
  {
    id: "tech",
    label: "The Tech",
    title: "iPad. Strahl. Fassade.",
    body: "Digitale Präzision in Echtzeit: vom Apple Pencil auf den 4K-Stream. Flawless Execution — Kunst als Live-Protokoll.",
    image: {
      src: "/media/05_Automotive_Launch.png",
      alt: "Automotive launch night with Phil Splash drawing a luxury guest portrait mirrored on a vertical display",
      caption: "Automotive night — tech as spectacle",
    },
  },
  {
    id: "scale",
    label: "The Monumental Scale",
    title: "Räume werden Galerien.",
    body: "Gala. Keynote. Stadion. Fassade. Dieselbe Geste — andere Architektur. Dein Event wird zur lebendigen Monumentalfläche.",
    image: {
      src: "/media/08_Stadium_VIP_Lounge.png",
      alt: "Stadium VIP lounge live portrait with panoramic arena backdrop and large screen reveal",
      caption: "Stadium VIP — scale without compromise",
    },
  },
] as const;

export const PROOF_GALLERY: MediaAsset[] = [
  {
    src: "/media/01_Glasshouse_Gala.png",
    alt: "Glasshouse gala live portrait projection for luxury evening guests",
    caption: "Glasshouse Gala",
  },
  {
    src: "/media/09_Corporate_Innovation.png",
    alt: "Corporate innovation atrium with elite live digital portraiture",
    caption: "Corporate Innovation",
  },
  {
    src: "/media/05_Luxury_Gala.png",
    alt: "Luxury gala digital live portrait with monumental screen display",
    caption: "Luxury Gala",
  },
  {
    src: "/media/04_Tech_Conference.png",
    alt: "Tech conference keynote entertainment with high-speed digital portraits",
    caption: "Tech Conference",
  },
  {
    src: "/media/01_Rooftop_Portrait_Reveal.png",
    alt: "Rooftop portrait reveal with architectural night backdrop",
    caption: "Rooftop Reveal",
  },
  {
    src: "/media/06_Design_Festival.png",
    alt: "Design festival live art performance with projected digital portraits",
    caption: "Design Festival",
  },
  {
    src: "/media/02_Theater_Foyer.png",
    alt: "Theater foyer elite event with Phil Splash live portrait projection",
    caption: "Theater Foyer",
  },
  {
    src: "/media/03_Rooftop_Blue_Hour.png",
    alt: "Blue hour rooftop live portrait session at architectural scale",
    caption: "Rooftop Blue Hour",
  },
];

export const VERTICAL_STRIP: MediaAsset[] = [
  {
    src: "/media/04_new_york_rooftop_redhead_1080x1920.jpg",
    alt: "Vertical live portrait on New York rooftop — monumental mobile frame",
    caption: "NY Rooftop",
  },
  {
    src: "/media/17_opera_house_redhead_1080x1920.jpg",
    alt: "Opera house vertical live portrait projection frame",
    caption: "Opera House",
  },
  {
    src: "/media/01_rooftop_silver_hair_green_glasses_1920x1080.jpg",
    alt: "Rooftop silver-hair portrait with green glasses — cinematic proof frame",
    caption: "Silver Hair Rooftop",
  },
  {
    src: "/media/08_rammed_earth_afro_white_suit_1920x1080.jpg",
    alt: "Rammed earth campus live portrait of guest in white suit",
    caption: "Rammed Earth Campus",
  },
];
