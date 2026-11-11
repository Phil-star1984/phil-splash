"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DownloadIcon } from "@/components/gallery/GalleryIcons";
import { ShareMenu, galleryIconBtn } from "@/components/gallery/ShareMenu";
import { downloadAlbumZip } from "@/lib/gallery-download";
import type { Dictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";
import type { GalleryAlbum } from "@/lib/gallery-catalog";

export function AlbumCard({
  album,
  dict,
  locale,
}: {
  album: GalleryAlbum;
  dict: Dictionary;
  locale: Locale;
}) {
  const [busy, setBusy] = useState(false);
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  async function onDownload(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (busy) return;
    setBusy(true);
    try {
      await downloadAlbumZip(
        album.images.map((img) => ({ url: img.src, name: `${img.id}.jpg` })),
        `phil-splash-${album.slug}`,
      );
    } finally {
      setBusy(false);
    }
  }

  const shareUrl = origin
    ? `${origin}/${locale}/galerie/alben/${album.slug}`
    : `/${locale}/galerie/alben/${album.slug}`;

  return (
    <div className="group relative">
      <Link
        href={`/${locale}/galerie/alben/${album.slug}`}
        className="block outline-none focus-visible:ring-2 focus-visible:ring-laser"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-void-elevated">
          <Image
            src={album.cover}
            alt={album.title}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
            quality={60}
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 pr-16 md:p-6 md:pr-20">
            <h2 className="font-display text-[clamp(1.35rem,2.6vw,1.85rem)] leading-[1.05] font-bold tracking-[-0.03em] text-signal">
              {album.title}
            </h2>
            <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-titanium-dim">
              {album.count} {dict.gallery.portraitsLabel}
            </p>
          </div>
        </div>
      </Link>

      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5">
        <ShareMenu
          dict={dict}
          url={shareUrl}
          title={album.title}
          text={`${album.title} — Phil Splash`}
        />
        <button
          type="button"
          onClick={onDownload}
          disabled={busy}
          className={galleryIconBtn}
          aria-label={dict.gallery.downloadAlbum}
          title={dict.gallery.downloadAlbum}
        >
          <DownloadIcon />
        </button>
      </div>
    </div>
  );
}
