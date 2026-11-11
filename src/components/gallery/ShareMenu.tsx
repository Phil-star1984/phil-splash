"use client";

import { useEffect, useRef, useState } from "react";
import { ShareIcon } from "@/components/gallery/GalleryIcons";
import type { Dictionary } from "@/i18n/dictionaries/types";

const iconBtn =
  "inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-signal/95 ring-1 ring-white/15 backdrop-blur-md transition hover:bg-black/75 hover:text-laser hover:ring-laser/40 disabled:opacity-50";

export function ShareMenu({
  dict,
  url,
  title,
  text,
}: {
  dict: Dictionary;
  url: string;
  title: string;
  text?: string;
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

  async function onShareClick() {
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({ title, text: shareText, url });
        return;
      } catch {
        /* cancelled — fall through to menu */
      }
    }
    setOpen((v) => !v);
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={onShareClick}
        className={iconBtn}
        aria-label={dict.gallery.share}
        title={dict.gallery.share}
      >
        <ShareIcon />
      </button>

      {open ? (
        <div className="absolute bottom-full right-0 z-30 mb-2 min-w-[10.5rem] overflow-hidden rounded-xl border border-white/10 bg-void/95 py-1 shadow-2xl shadow-black/50 backdrop-blur-xl">
          <a
            href={mailHref}
            className="block px-3.5 py-2 text-[0.75rem] text-titanium transition hover:bg-white/5 hover:text-signal"
            onClick={() => setOpen(false)}
          >
            {dict.gallery.shareEmail}
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="block px-3.5 py-2 text-[0.75rem] text-titanium transition hover:bg-white/5 hover:text-signal"
            onClick={() => setOpen(false)}
          >
            {dict.gallery.shareWhatsApp}
          </a>
          <button
            type="button"
            className="block w-full px-3.5 py-2 text-left text-[0.75rem] text-titanium transition hover:bg-white/5 hover:text-signal"
            onClick={copyLink}
          >
            {copied ? dict.gallery.linkCopied : dict.gallery.copyLink}
          </button>
        </div>
      ) : null}
    </div>
  );
}

export { iconBtn as galleryIconBtn };
