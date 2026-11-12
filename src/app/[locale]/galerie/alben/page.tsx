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
        <div className="mx-auto max-w-5xl px-6 pt-6 pb-4 md:px-10 md:pt-8 lg:px-14">
          <p className="max-w-xl text-sm text-titanium-dim">{dict.gallery.albumsIntro}</p>
          <p className="mt-3 text-[0.65rem] uppercase tracking-[0.2em] text-titanium-dim/70">
            {galleryAlbums.length} {dict.gallery.albumsLabel}
          </p>
        </div>

        <div className="mx-auto max-w-5xl border-t border-white/8 px-6 pb-16 md:px-10 lg:px-14">
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
