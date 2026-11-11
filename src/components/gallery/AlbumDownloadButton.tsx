"use client";

import { useState } from "react";
import { DownloadIcon } from "@/components/gallery/GalleryIcons";
import { galleryIconBtn } from "@/components/gallery/ShareMenu";
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

  async function onClick() {
    if (busy || !files.length) return;
    setBusy(true);
    try {
      await downloadAlbumZip(files, zipName);
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={busy}
      className={galleryIconBtn}
      aria-label={busy ? dict.gallery.preparingZip : dict.gallery.downloadAlbum}
      title={busy ? dict.gallery.preparingZip : dict.gallery.downloadAlbum}
    >
      <DownloadIcon />
    </button>
  );
}
