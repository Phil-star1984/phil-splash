import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { GalleryHeader } from "@/components/gallery/GalleryHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { galleryAlbums, galleryImages } from "@/lib/gallery-catalog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = await getDictionary(raw);
  return {
    title: dict.gallery.metaTitle,
    description: dict.gallery.metaDescription,
    alternates: {
      canonical: `/${raw}/galerie`,
      languages: {
        de: "/de/galerie",
        en: "/en/galerie",
        "x-default": "/de/galerie",
      },
    },
  };
}

export default async function GalleryOverviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <GalleryHeader dict={dict} locale={locale} active="overview" />
      <main className="flex-1 bg-void px-6 py-10 md:px-10 md:py-14 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-titanium-dim">
                {galleryImages.length} {dict.gallery.portraitsLabel}
                <span className="mx-2 text-titanium-dim/40">·</span>
                {galleryAlbums.length} {dict.gallery.albumsLabel}
              </p>
              <p className="mt-2 max-w-xl text-sm text-titanium">{dict.gallery.overviewHint}</p>
            </div>
            <Link
              href={`/${locale}/galerie/alben`}
              className="text-[0.68rem] uppercase tracking-[0.22em] text-laser transition hover:text-signal"
            >
              {dict.gallery.toAlbums} →
            </Link>
          </div>

          <GalleryGrid
            dict={dict}
            items={galleryImages.map((img) => ({
              id: img.id,
              title: img.title,
              src: img.src,
              thumb: img.thumb,
              albumTitle: img.albumTitle,
              albumSlug: img.albumSlug,
            }))}
          />
        </div>
      </main>
      <SiteFooter dict={dict} locale={locale} />
    </>
  );
}
