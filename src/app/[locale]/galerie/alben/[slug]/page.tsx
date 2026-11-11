import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlbumDownloadButton } from "@/components/gallery/AlbumDownloadButton";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { GalleryHeader } from "@/components/gallery/GalleryHeader";
import { ShareMenu } from "@/components/gallery/ShareMenu";
import { SiteFooter } from "@/components/SiteFooter";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { galleryAlbums, getAlbum } from "@/lib/gallery-catalog";
import { SITE } from "@/lib/content";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    galleryAlbums.map((album) => ({ locale, slug: album.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const album = getAlbum(slug);
  if (!album) return {};
  const dict = await getDictionary(raw);
  return {
    title: `${album.title} — ${dict.gallery.metaTitle}`,
    description: album.description || dict.gallery.metaDescription,
    alternates: {
      canonical: `/${raw}/galerie/alben/${slug}`,
      languages: {
        de: `/de/galerie/alben/${slug}`,
        en: `/en/galerie/alben/${slug}`,
        "x-default": `/de/galerie/alben/${slug}`,
      },
    },
  };
}

export default async function GalleryAlbumPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const album = getAlbum(slug);
  if (!album) notFound();
  const dict = await getDictionary(locale);

  const zipFiles = album.images.map((img) => ({
    url: img.src,
    name: `${img.id}.jpg`,
  }));

  const shareUrl = `${SITE.url}/${locale}/galerie/alben/${album.slug}`;

  return (
    <>
      <GalleryHeader dict={dict} locale={locale} active="album" />
      <main className="flex-1 bg-void">
        <div className="flex flex-wrap items-end justify-between gap-4 px-6 py-5 md:px-10 lg:px-14">
          <div className="min-w-0 max-w-3xl">
            <Link
              href={`/${locale}/galerie/alben`}
              className="text-[0.68rem] uppercase tracking-[0.22em] text-titanium-dim transition hover:text-laser"
            >
              ← {dict.gallery.backToAlbums}
            </Link>
            <h2 className="font-display mt-3 text-[clamp(1.85rem,4vw,2.85rem)] leading-[1.02] font-bold tracking-[-0.03em] text-signal">
              {album.title}
            </h2>
            {album.description ? (
              <p className="mt-2 text-sm text-titanium">{album.description}</p>
            ) : null}
            <p className="mt-2 text-[0.68rem] uppercase tracking-[0.2em] text-titanium-dim">
              {album.count} {dict.gallery.portraitsLabel}
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <ShareMenu
              dict={dict}
              url={shareUrl}
              title={album.title}
              text={`${album.title} — Phil Splash Galerie`}
            />
            <AlbumDownloadButton
              dict={dict}
              zipName={`phil-splash-${album.slug}`}
              files={zipFiles}
            />
          </div>
        </div>

        <div className="px-1.5 pb-10 sm:px-2 md:px-2.5 lg:px-3">
          <GalleryGrid
            dict={dict}
            items={album.images.map((img) => ({
              id: img.id,
              title: img.title,
              src: img.src,
              thumb: img.thumb,
              albumTitle: album.title,
              albumSlug: album.slug,
            }))}
          />
        </div>
      </main>
      <SiteFooter dict={dict} locale={locale} />
    </>
  );
}
