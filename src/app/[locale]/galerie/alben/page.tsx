import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AlbumCard } from "@/components/gallery/AlbumCard";
import { GalleryHeader } from "@/components/gallery/GalleryHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { galleryAlbums } from "@/lib/gallery-catalog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = await getDictionary(raw);
  return {
    title: dict.gallery.albumsMetaTitle,
    description: dict.gallery.metaDescription,
    alternates: {
      canonical: `/${raw}/galerie/alben`,
      languages: {
        de: "/de/galerie/alben",
        en: "/en/galerie/alben",
        "x-default": "/de/galerie/alben",
      },
    },
  };
}

export default async function GalleryAlbumsPage({
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
      <GalleryHeader dict={dict} locale={locale} active="albums" />
      <main className="flex-1 bg-void">
        <div className="px-6 py-5 md:px-10 lg:px-14">
          <p className="max-w-2xl text-sm text-titanium-dim">{dict.gallery.albumsIntro}</p>
        </div>
        <div className="pb-12">
          {galleryAlbums.map((album, index) => (
            <AlbumCard
              key={album.slug}
              album={album}
              dict={dict}
              locale={locale}
              index={index}
            />
          ))}
        </div>
      </main>
      <SiteFooter dict={dict} locale={locale} />
    </>
  );
}
