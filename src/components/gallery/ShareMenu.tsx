"use client";

import { useEffect, useRef, useState } from "react";
import { ShareIcon } from "@/components/gallery/GalleryIcons";
import type { Dictionary } from "@/i18n/dictionaries/types";

export function ShareMenu({
  dict,
  url,
  title,
  text,
  compact = false,
}: {
  dict: Dictionary;
  url: string;
  title: string;
  text?: string;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const shareText = text || title;
  const mailHref = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${shareText}\n\n${url}`)}`;
  const waHref = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${url}`)}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  }

  async function nativeShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text: shareText, url });
        setOpen(false);
        return;
      } catch {
        /* user cancel or unsupported */
      }
    }
    setOpen((v) => !v);
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={nativeShare}
        className={
          compact
            ? "inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-signal ring-1 ring-white/15 backdrop-blur-sm transition hover:bg-black/75 hover:text-laser"
            : "inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3.5 py-2.5 text-[0.68rem] uppercase tracking-[0.2em] text-titanium transition hover:border-laser/35 hover:text-laser"
        }
        aria-label={dict.gallery.share}
        title={dict.gallery.share}
      >
        <ShareIcon className={compact ? "h-3.5 w-3.5" : "h-3.5 w-3.5"} />
        {compact ? null : <span>{dict.gallery.share}</span>}
      </button>

      {open ? (
        <div className="absolute right-0 z-30 mt-2 min-w-[11.5rem] overflow-hidden border border-white/12 bg-void-elevated/95 shadow-xl backdrop-blur-md">
          <a
            href={mailHref}
            className="block px-3.5 py-2.5 text-[0.72rem] text-titanium transition hover:bg-white/5 hover:text-signal"
            onClick={() => setOpen(false)}
          >
            {dict.gallery.shareEmail}
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="block px-3.5 py-2.5 text-[0.72rem] text-titanium transition hover:bg-white/5 hover:text-signal"
            onClick={() => setOpen(false)}
          >
            {dict.gallery.shareWhatsApp}
          </a>
          <button
            type="button"
            className="block w-full px-3.5 py-2.5 text-left text-[0.72rem] text-titanium transition hover:bg-white/5 hover:text-signal"
            onClick={copyLink}
          >
            {copied ? dict.gallery.linkCopied : dict.gallery.copyLink}
          </button>
        </div>
      ) : null}
    </div>
  );
}
