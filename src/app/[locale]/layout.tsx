import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { GEO_CLUSTERS, SITE } from "@/lib/content";
import { buildJsonLd } from "@/lib/jsonld";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, locales, type Locale } from "@/i18n/config";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: dict.meta.titleDefault,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
    keywords: [
      SITE.name,
      dict.brand.alias,
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
      locale: locale === "de" ? "de_DE" : "en_US",
      alternateLocale: locale === "de" ? ["en_US"] : ["de_DE"],
      url: `${SITE.url}/${locale}`,
      siteName: `${SITE.name} | ${dict.brand.alias}`,
      title: dict.meta.ogTitle,
      description: dict.meta.description,
      images: [
        {
          url: "/media/call_fUG0wZIAn8DWBemEicLWe2VC.jpg",
          width: 1672,
          height: 941,
          alt: dict.meta.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE.name} | ${dict.brand.alias}`,
      description: dict.meta.description,
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
      canonical: `/${locale}`,
      languages: {
        de: "/de",
        en: "/en",
        "x-default": "/de",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const jsonLd = buildJsonLd(dict.hero.descriptionLong);

  return (
    <html
      lang={locale}
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
