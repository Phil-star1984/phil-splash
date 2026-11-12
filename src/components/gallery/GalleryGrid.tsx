"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DownloadIcon,
} from "@/components/gallery/GalleryIcons";
import { ShareMenu, galleryIconBtn } from "@/components/gallery/ShareMenu";
import { downloadFile } from "@/lib/gallery-download";
import type { Dictionary } from "@/i18n/dictionaries/types";

export type GalleryGridItem = {
  id: string;
  title: string;
  src: string;
  thumb: string;
  albumTitle?: string;
  albumSlug?: string;
};

export function GalleryGrid({
  items,
  dict,
}: {
  items: GalleryGridItem[];
  dict: Dictionary;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [origin, setOrigin] = useState("");

  const active = activeIndex === null ? null : items[activeIndex] ?? null;

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveIndex(null);
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setActiveIndex((i) => {
          if (i === null || items.length === 0) return i;
          return (i - 1 + items.length) % items.length;
        });
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setActiveIndex((i) => {
          if (i === null || items.length === 0) return i;
          return (i + 1) % items.length;
        });
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, items.length]);

  async function handleDownload(item: GalleryGridItem) {
    setBusyId(item.id);
    try {
      await downloadFile(item.src, `${item.id}.jpg`);
    } finally {
      setBusyId(null);
    }
  }

  function shareUrl(item: GalleryGridItem) {
    if (!origin) return item.src;
    return `${origin}${item.src}`;
  }

  function goPrev() {
    setActiveIndex((i) => {
      if (i === null || items.length === 0) return i;
      return (i - 1 + items.length) % items.length;
    });
  }

  function goNext() {
    setActiveIndex((i) => {
      if (i === null || items.length === 0) return i;
      return (i + 1) % items.length;
    });
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 sm:gap-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
        {items.map((item, index) => (
          <div
            key={`${item.albumSlug || "all"}-${item.id}`}
            className="group relative aspect-[3/4] overflow-hidden bg-void-elevated"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="absolute inset-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-laser"
              aria-label={item.title}
            >
              <Image
                src={item.thumb}
                alt={item.title}
                fill
                sizes="(max-width:640px) 50vw, (max-width:1024px) 25vw, 14vw"
                quality={60}
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                priority={index < 10}
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 transition group-hover:opacity-90" />
            </button>

            <div className="absolute bottom-2 right-2 z-10 flex items-center gap-1.5 opacity-90 transition group-hover:opacity-100">
              <ShareMenu
                dict={dict}
                url={shareUrl(item)}
                title={item.title}
                text={
                  item.albumTitle ? `${item.title} — ${item.albumTitle}` : item.title
                }
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  void handleDownload(item);
                }}
                disabled={busyId === item.id}
                className={galleryIconBtn}
                aria-label={dict.gallery.downloadImage}
                title={dict.gallery.downloadImage}
              >
                <DownloadIcon />
              </button>
            </div>
          </div>
        ))}
      </div>

      {active && activeIndex !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-black/50 text-signal ring-1 ring-white/15 transition hover:bg-black/75 hover:text-laser md:left-4 md:h-12 md:w-12"
            aria-label={dict.gallery.prevImage}
            title={dict.gallery.prevImage}
          >
            <ChevronLeftIcon />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-black/50 text-signal ring-1 ring-white/15 transition hover:bg-black/75 hover:text-laser md:right-4 md:h-12 md:w-12"
            aria-label={dict.gallery.nextImage}
            title={dict.gallery.nextImage}
          >
            <ChevronRightIcon />
          </button>

          <div
            className="relative flex max-h-full w-full max-w-6xl flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative mx-auto aspect-[3/4] w-full max-h-[78svh] overflow-hidden bg-void-elevated md:aspect-auto md:h-[78svh]">
              <Image
                key={active.src}
                src={active.src}
                alt={active.title}
                fill
                sizes="92vw"
                quality={75}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-display text-sm tracking-wide text-signal">{active.title}</p>
                {active.albumTitle ? (
                  <p className="mt-1 text-xs text-titanium-dim">{active.albumTitle}</p>
                ) : null}
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-titanium-dim/70">
                  {activeIndex + 1} / {items.length}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ShareMenu
                  dict={dict}
                  url={shareUrl(active)}
                  title={active.title}
                  text={
                    active.albumTitle
                      ? `${active.title} — ${active.albumTitle}`
                      : active.title
                  }
                />
                <button
                  type="button"
                  disabled={busyId === active.id}
                  onClick={() => handleDownload(active)}
                  className={galleryIconBtn}
                  aria-label={dict.gallery.downloadImage}
                  title={dict.gallery.downloadImage}
                >
                  <DownloadIcon />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="px-3 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-titanium transition hover:text-signal"
                >
                  {dict.gallery.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
