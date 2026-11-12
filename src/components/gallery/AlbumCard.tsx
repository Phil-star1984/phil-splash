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
    <article className="group grid grid-cols-[5.5rem_minmax(0,1fr)] items-center gap-4 border-b border-white/8 py-5 sm:grid-cols-[7.5rem_minmax(0,1fr)_auto] sm:gap-6 md:grid-cols-[9rem_minmax(0,1fr)_auto] md:gap-8 md:py-6">
      <Link
        href={href}
        className="relative aspect-[3/4] overflow-hidden bg-void-elevated outline-none ring-1 ring-white/10 transition duration-300 group-hover:ring-laser/35 focus-visible:ring-2 focus-visible:ring-laser"
      >
        <Image
          src={album.cover}
          alt=""
          fill
          sizes="(max-width:640px) 88px, 144px"
          quality={70}
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
          priority={index < 4}
        />
      </Link>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="font-display text-[0.62rem] uppercase tracking-[0.22em] text-titanium-dim">
            {String(index + 1).padStart(2, "0")}
          </span>
          {protectedAlbum ? (
            <span className="inline-flex items-center gap-1 text-[0.6rem] uppercase tracking-[0.16em] text-titanium-dim">
              <LockIcon className="h-3 w-3" />
              {dict.gallery.lockedBadge}
            </span>
          ) : null}
        </div>

        <h2 className="font-display mt-1.5 text-[clamp(1.15rem,2.4vw,1.65rem)] leading-[1.15] font-semibold tracking-[-0.02em] text-signal">
          <Link href={href} className="transition hover:text-laser">
            {album.title}
          </Link>
        </h2>

        {album.description ? (
          <p className="mt-1.5 max-w-xl truncate text-sm text-titanium-dim sm:whitespace-normal sm:line-clamp-2">
            {album.description}
          </p>
        ) : null}

        <p className="mt-2 text-[0.65rem] uppercase tracking-[0.18em] text-titanium-dim/80">
          {album.count} {dict.gallery.portraitsLabel}
        </p>

        <div className="mt-3 flex items-center gap-2 sm:hidden">
          <Link
            href={href}
            className="text-[0.65rem] uppercase tracking-[0.18em] text-laser transition hover:text-signal"
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

      <div className="hidden items-center gap-2 sm:flex">
        <Link
          href={href}
          className="text-[0.65rem] uppercase tracking-[0.18em] text-titanium transition hover:text-laser"
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
    </article>
  );
}
