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
} as const;

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

/** Landscape hero slides — crossfade in header (first = LCP priority). */
export const HERO_SLIDES = [
  "/media/call_fUG0wZIAn8DWBemEicLWe2VC.jpg",
  "/media/facade_courtyard_projection_landscape.jpg",
  "/media/call_9jaYJQS2fgXnIoALx7Ng02SE.jpg",
  "/media/02_industrial_courtyard_moustache_laugh_1920x1080.jpg",
  "/media/04_observatory_balcony_platinum_pixie_1920x1080.jpg",
  "/media/08_rammed_earth_afro_white_suit_1920x1080.jpg",
] as const;

export const HERO_MEDIA = {
  src: HERO_SLIDES[0],
} as const;

export const RITUAL_MEDIA = [
  { src: "/media/04_observatory_balcony_platinum_pixie_1920x1080.jpg" },
  { src: "/media/call_4IpYOXhJoNrwGKiFQDy3bWho.jpg" },
  { src: "/media/facade_courtyard_projection_landscape.jpg" },
] as const;

export const SCREEN_FEATURED_SRC = "/media/05_Civic_Transit_Atrium.jpg";
export const SCREEN_GALLERY_SRCS = [
  "/media/04_Alpine_Lodge_Live_Drawing.jpg",
  "/media/01_Glasshouse_Gala.jpg",
  "/media/02_Art_Deco_Joint_Hold.jpg",
  "/media/03_Art_Courtyard_Waist_Embrace.jpg",
] as const;

export const PROOF_FEATURED_SRC = "/media/call_9jaYJQS2fgXnIoALx7Ng02SE.jpg";
export const PROOF_PAIR_A_SRCS = [
  "/media/02_industrial_courtyard_moustache_laugh_1920x1080.jpg",
  "/media/06_rain_glass_passage_white_beard_1920x1080.jpg",
] as const;
export const PROOF_PAIR_B_SRCS = [
  "/media/08_rammed_earth_afro_white_suit_1920x1080.jpg",
  "/media/09_greenhouse_vitiligo_saffron_1920x1080.jpg",
] as const;
export const VERTICAL_STRIP_SRCS = [
  "/media/01_glass_gasometer_woman_1080x1920.jpg",
  "/media/04_new_york_rooftop_redhead_1080x1920.jpg",
  "/media/02_brutalist_woman_black_dress_1080x1920.jpg",
  "/media/14_stone_cliff_braids_process_1080x1920.jpg",
] as const;
