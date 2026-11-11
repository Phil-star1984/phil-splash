import type { Metadata } from "next";
import Link from "next/link";
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
      <main className="flex-1 bg-void px-6 py-10 md:px-10 md:py-14 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <p className="max-w-2xl text-sm text-titanium">{dict.gallery.albumsIntro}</p>
            <Link
              href={`/${locale}/galerie`}
              className="border border-laser/30 bg-laser/10 px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.2em] text-laser transition hover:bg-laser/18"
            >
              {dict.gallery.allPortraitsCta}
            </Link>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryAlbums.map((album) => (
              <li key={album.slug}>
                <AlbumCard album={album} dict={dict} locale={locale} />
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter dict={dict} locale={locale} />
    </>
  );
}
