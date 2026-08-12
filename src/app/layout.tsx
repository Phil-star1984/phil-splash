import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { SITE, GEO_CLUSTERS } from "@/lib/content";
import { buildJsonLd } from "@/lib/jsonld";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.alias} — Monumental Live Portrait Projection`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    SITE.name,
    SITE.alias,
    "The Million Painter",
    ...GEO_CLUSTERS,
    "Fortune 500 event artist",
    "iPad live portrait projection",
    "Fassadenprojektion Live Portrait",
    "Premium Event Künstler buchen",
  ],
  authors: [{ name: SITE.legalName }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: ["en_US"],
    url: SITE.url,
    siteName: `${SITE.name} | ${SITE.alias}`,
    title: `${SITE.name} — Live-Porträts. Monumental im Raum.`,
    description: SITE.description,
    images: [
      {
        url: "/media/call_fUG0wZIAn8DWBemEicLWe2VC.jpg",
        width: 1672,
        height: 941,
        alt: "Phil Splash facade projection of a live neon line portrait on futuristic architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.alias}`,
    description: SITE.description,
    images: ["/media/call_fUG0wZIAn8DWBemEicLWe2VC.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = buildJsonLd();

  return (
    <html
      lang="de"
      className={`${spaceGrotesk.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-signal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
