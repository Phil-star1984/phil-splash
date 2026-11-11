"use client";

import JSZip from "jszip";

export async function downloadFile(url: string, filename: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed (${res.status})`);
  const blob = await res.blob();
  const objectUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = objectUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(objectUrl);
}

export async function downloadAlbumZip(
  files: Array<{ url: string; name: string }>,
  zipName: string,
  onProgress?: (done: number, total: number) => void,
) {
  const zip = new JSZip();
  let done = 0;
  for (const file of files) {
    const res = await fetch(file.url);
    if (!res.ok) throw new Error(`Failed: ${file.name}`);
    zip.file(file.name, await res.blob());
    done += 1;
    onProgress?.(done, files.length);
  }
  const blob = await zip.generateAsync({ type: "blob", compression: "DEFLATE" });
  const objectUrl = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = objectUrl;
  a.download = zipName.endsWith(".zip") ? zipName : `${zipName}.zip`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(objectUrl);
}
