"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DownloadIcon } from "@/components/gallery/GalleryIcons";
import { ShareMenu, galleryIconBtn } from "@/components/gallery/ShareMenu";
import { downloadAlbumZip } from "@/lib/gallery-download";
import {
  albumUnlockStorageKey,
  isAlbumProtected,
} from "@/lib/gallery-access";
import type { Dictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";
import type { GalleryAlbum } from "@/lib/gallery-catalog";

function LockIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="5"
        y="11"
        width="14"
        height="10"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 11V8a4 4 0 0 1 8 0v3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AlbumCard({
  album,
  dict,
  locale,
  index = 0,
}: {
  album: GalleryAlbum;
  dict: Dictionary;
  locale: Locale;
  index?: number;
}) {
  const protectedAlbum = isAlbumProtected(album.slug);
  const [busy, setBusy] = useState(false);
  const [origin, setOrigin] = useState("");
  const [unlocked, setUnlocked] = useState(!protectedAlbum);

  useEffect(() => {
    setOrigin(window.location.origin);
    if (!protectedAlbum) return;
    try {
      setUnlocked(sessionStorage.getItem(albumUnlockStorageKey(album.slug)) === "1");
    } catch {
      setUnlocked(false);
    }
  }, [album.slug, protectedAlbum]);

  async function onDownload(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (busy || (protectedAlbum && !unlocked)) return;
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
  const href = `/${locale}/galerie/alben/${album.slug}`;

  return (
    <article className="group flex h-full flex-col bg-void-elevated ring-1 ring-white/10 transition duration-300 hover:ring-laser/35">
      <Link
        href={href}
        className="relative block aspect-[4/5] overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-laser"
      >
        <Image
          src={album.cover}
          alt={album.title}
          fill
          sizes="(max-width:640px) 50vw, 25vw"
          quality={70}
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          priority={index < 4}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80" />
        {protectedAlbum ? (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-black/55 px-2 py-1 text-[0.58rem] uppercase tracking-[0.16em] text-signal backdrop-blur-sm">
            <LockIcon className="h-3 w-3" />
            {dict.gallery.lockedBadge}
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col gap-3 px-3.5 py-4 md:px-4 md:py-5">
        <div className="min-w-0">
          <h2 className="font-display text-[clamp(1rem,1.8vw,1.25rem)] leading-[1.15] font-semibold tracking-[-0.02em] text-signal">
            <Link href={href} className="transition hover:text-laser">
              {album.title}
            </Link>
          </h2>
          <p className="mt-1.5 text-[0.62rem] uppercase tracking-[0.18em] text-titanium-dim">
            {album.count} {dict.gallery.portraitsLabel}
          </p>
        </div>

        <div className="mt-auto flex items-center gap-1.5">
          <Link
            href={href}
            className="mr-auto text-[0.62rem] uppercase tracking-[0.18em] text-titanium transition hover:text-laser"
          >
            {protectedAlbum && !unlocked
              ? dict.gallery.openLockedAlbum
              : dict.gallery.openAlbum}
          </Link>
          <ShareMenu
            dict={dict}
            url={shareUrl}
            title={album.title}
            text={`${album.title} — Phil Splash`}
          />
          {!protectedAlbum || unlocked ? (
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
          ) : null}
        </div>
      </div>
    </article>
  );
}
