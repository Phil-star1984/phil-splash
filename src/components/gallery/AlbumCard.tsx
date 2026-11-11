"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DownloadIcon } from "@/components/gallery/GalleryIcons";
import { ShareMenu } from "@/components/gallery/ShareMenu";
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
        className="block outline-none"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-void-elevated ring-1 ring-white/8 transition duration-300 group-hover:ring-laser/45 group-focus-visible:ring-2 group-focus-visible:ring-laser">
          <Image
            src={album.cover}
            alt={album.title}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
            quality={60}
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4 pr-14 md:p-5 md:pr-16">
            <h2 className="font-display text-[clamp(1.2rem,2.4vw,1.65rem)] leading-[1.08] font-bold tracking-[-0.03em] text-signal">
              {album.title}
            </h2>
            <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-titanium-dim">
              {album.count} {dict.gallery.portraitsLabel}
            </p>
          </div>
        </div>
      </Link>

      <div className="absolute bottom-3 right-3 z-10 flex flex-col gap-2">
        <ShareMenu
          compact
          dict={dict}
          url={shareUrl}
          title={album.title}
          text={`${album.title} — Phil Splash`}
        />
        <button
          type="button"
          onClick={onDownload}
          disabled={busy}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-signal ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-black/80 hover:text-laser disabled:opacity-50"
          aria-label={dict.gallery.downloadAlbum}
          title={dict.gallery.downloadAlbum}
        >
          <DownloadIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
