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
  const reverse = index % 2 === 1;

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
    <article
      className={`grid overflow-hidden border-y border-white/8 md:grid-cols-12 ${
        index === 0 ? "border-t" : ""
      }`}
    >
      <Link
        href={href}
        className={`relative block min-h-[18rem] overflow-hidden bg-void-elevated outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-laser md:min-h-[22rem] md:col-span-7 ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <Image
          src={album.cover}
          alt={album.title}
          fill
          sizes="(max-width:768px) 100vw, 58vw"
          quality={70}
          className="object-cover transition duration-700 hover:scale-[1.03]"
          priority={index < 2}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-black/20" />
      </Link>

      <div
        className={`flex flex-col justify-between gap-8 bg-void px-6 py-8 md:col-span-5 md:px-8 md:py-10 lg:px-10 ${
          reverse ? "md:order-1" : ""
        }`}
      >
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-[0.65rem] uppercase tracking-[0.24em] text-titanium-dim">
              {String(index + 1).padStart(2, "0")}
            </p>
            {protectedAlbum ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-titanium">
                <LockIcon className="h-3 w-3" />
                {dict.gallery.lockedBadge}
              </span>
            ) : null}
          </div>

          <h2 className="font-display mt-4 text-[clamp(1.7rem,3.2vw,2.45rem)] leading-[1.05] font-bold tracking-[-0.03em] text-signal">
            <Link href={href} className="transition hover:text-laser">
              {album.title}
            </Link>
          </h2>

          {album.description ? (
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-titanium">
              {album.description}
            </p>
          ) : null}

          <p className="mt-4 text-[0.68rem] uppercase tracking-[0.2em] text-titanium-dim">
            {album.count} {dict.gallery.portraitsLabel}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={href}
            className="inline-flex items-center border border-white/15 px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.2em] text-signal transition hover:border-laser/40 hover:text-laser"
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
