import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { GalleryHeader } from "@/components/gallery/GalleryHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { isAlbumProtected } from "@/lib/gallery-access";
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

  const publicImages = galleryImages.filter((img) => !isAlbumProtected(img.albumSlug));
  const publicAlbumCount = galleryAlbums.filter((a) => !isAlbumProtected(a.slug)).length;

  return (
    <>
      <GalleryHeader dict={dict} locale={locale} active="overview" />
      <main className="flex-1 bg-void">
        <div className="flex items-center justify-between gap-4 px-6 py-4 md:px-10 lg:px-14">
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-titanium-dim">
            {publicImages.length} {dict.gallery.portraitsLabel}
            <span className="mx-2 text-titanium-dim/40">·</span>
            {publicAlbumCount} {dict.gallery.albumsLabel}
          </p>
          <p className="hidden max-w-md text-right text-xs text-titanium-dim sm:block">
            {dict.gallery.overviewHint}
          </p>
        </div>
        <div className="px-1.5 pb-10 sm:px-2 md:px-2.5 lg:px-3">
          <GalleryGrid
            dict={dict}
            items={publicImages.map((img) => ({
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
