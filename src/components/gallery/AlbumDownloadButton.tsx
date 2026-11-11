"use client";

import { useState } from "react";
import { DownloadIcon } from "@/components/gallery/GalleryIcons";
import { downloadAlbumZip } from "@/lib/gallery-download";
import type { Dictionary } from "@/i18n/dictionaries/types";

export function AlbumDownloadButton({
  files,
  zipName,
  dict,
}: {
  files: Array<{ url: string; name: string }>;
  zipName: string;
  dict: Dictionary;
}) {
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState<string | null>(null);

  async function onClick() {
    if (busy || !files.length) return;
    setBusy(true);
    setProgress(`0 / ${files.length}`);
    try {
      await downloadAlbumZip(files, zipName, (done, total) => {
        setProgress(`${done} / ${total}`);
      });
    } catch {
      setProgress(dict.gallery.downloadError);
      return;
    } finally {
      setBusy(false);
    }
    setProgress(null);
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={busy}
      className="inline-flex items-center gap-2.5 border border-laser/35 bg-laser/10 px-4 py-2.5 text-[0.68rem] uppercase tracking-[0.2em] text-laser transition hover:bg-laser/18 disabled:opacity-60"
    >
      <DownloadIcon className="h-4 w-4" />
      <span>{busy ? dict.gallery.preparingZip : dict.gallery.downloadAlbum}</span>
      {progress ? <span className="text-titanium-dim normal-case tracking-normal">{progress}</span> : null}
    </button>
  );
}
