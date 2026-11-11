#!/usr/bin/env node
/**
 * Import ImgBB albums into public/gallery (static, no backend).
 * Usage: node scripts/import-imgbb-gallery.mjs [/tmp/imgbb_full.json]
 */
import { createWriteStream, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { pipeline } from "node:stream/promises";
import { fileURLToPath } from "node:url";
import { Readable } from "node:stream";
import { execFileSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = join(ROOT, "public", "gallery");
const META = join(ROOT, "src", "lib", "gallery-catalog.ts");
const SOURCE = process.argv[2] || "/tmp/imgbb_full.json";

const SLUG_OVERRIDES = {
  D59fwX: "vietnam-2026",
  Y7yN4s: "vr-bank-wuerzburg",
  BGzH3H: "servicenow",
  TDjxSB: "somnomedics-25-jahre",
  dWByDW: "roedl-partner-sommerfest",
  HX3Rx1: "loungevoo-transportlogistic",
  nrG33v: "60j-jubilaeum",
  GxTSKm: "hochzeit-tabea-maxi",
};

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function ensureDir(p) {
  mkdirSync(p, { recursive: true });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function download(url, dest) {
  let lastErr;
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "PhilSplashGalleryImport/1.0" },
        redirect: "follow",
      });
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
      const cl = Number(res.headers.get("content-length") || 0);
      if (cl > 0 && cl < 5000) throw new Error(`Tiny response (${cl}) for ${url}`);
      await pipeline(Readable.fromWeb(res.body), createWriteStream(dest));
      return;
    } catch (e) {
      lastErr = e;
      await sleep(400 * attempt);
    }
  }
  throw lastErr;
}

function optimizeJpeg(src, dest, maxEdge) {
  // sips: resize longest edge, then re-encode jpeg
  execFileSync(
    "sips",
    ["-Z", String(maxEdge), "-s", "format", "jpeg", src, "--out", dest],
    { stdio: "pipe" },
  );
  // Mild recompress via sips quality if available
  try {
    execFileSync("sips", ["-s", "formatOptions", "72", dest], { stdio: "pipe" });
  } catch {
    /* formatOptions may fail on some macOS builds — keep resized file */
  }
}

function tsString(s) {
  return JSON.stringify(s ?? "");
}

async function main() {
  if (!existsSync(SOURCE)) {
    console.error(`Missing source JSON: ${SOURCE}`);
    process.exit(1);
  }
  const raw = JSON.parse(readFileSync(SOURCE, "utf8"));
  const albums = raw.albums || raw;
  ensureDir(OUT);

  const catalogAlbums = [];
  let total = 0;

  for (const album of albums) {
    const slug = SLUG_OVERRIDES[album.id] || slugify(album.name);
    const albumDir = join(OUT, "albums", slug);
    const thumbDir = join(albumDir, "thumbs");
    ensureDir(thumbDir);

    const images = [];
    console.log(`\n== ${album.name} (${slug}) · ${album.images.length} images`);

    for (let i = 0; i < album.images.length; i++) {
      const img = album.images[i];
      const id = img.id || `img-${i + 1}`;
      const fileName = `${id}.jpg`;
      const fullPath = join(albumDir, fileName);
      const thumbPath = join(thumbDir, fileName);
      const tmpPath = join(albumDir, `.tmp-${id}`);

      if (!existsSync(fullPath) || !existsSync(thumbPath)) {
        const candidates = [img.medium, img.url, img.thumb].filter(Boolean);
        let ok = false;
        let lastErr;
        for (const url of candidates) {
          try {
            await download(url, tmpPath);
            optimizeJpeg(tmpPath, fullPath, 1600);
            optimizeJpeg(tmpPath, thumbPath, 640);
            ok = true;
            break;
          } catch (e) {
            lastErr = e;
          }
        }
        try {
          if (existsSync(tmpPath)) execFileSync("rm", ["-f", tmpPath]);
        } catch {
          /* ignore */
        }
        if (!ok) {
          console.warn(`  skip ${id}: ${lastErr?.message || lastErr}`);
          await sleep(800);
          continue;
        }
        await sleep(120);
        process.stdout.write(`  [${i + 1}/${album.images.length}] ${fileName}\n`);
      }

      images.push({
        id,
        title: img.title || id,
        src: `/gallery/albums/${slug}/${fileName}`,
        thumb: `/gallery/albums/${slug}/thumbs/${fileName}`,
        width: img.width || 0,
        height: img.height || 0,
      });
      total += 1;
    }

    if (!images.length) continue;

    catalogAlbums.push({
      id: album.id,
      slug,
      title: album.name,
      description: album.description || "",
      cover: images[0].thumb,
      count: images.length,
      images,
    });
  }

  const allImages = catalogAlbums.flatMap((a) =>
    a.images.map((img) => ({ ...img, albumSlug: a.slug, albumTitle: a.title })),
  );

  const ts = `/* Auto-generated by scripts/import-imgbb-gallery.mjs — do not edit by hand */
export type GalleryImage = {
  id: string;
  title: string;
  src: string;
  thumb: string;
  width: number;
  height: number;
};

export type GalleryAlbum = {
  id: string;
  slug: string;
  title: string;
  description: string;
  cover: string;
  count: number;
  images: GalleryImage[];
};

export type GalleryFlatImage = GalleryImage & {
  albumSlug: string;
  albumTitle: string;
};

export const galleryAlbums: GalleryAlbum[] = ${JSON.stringify(catalogAlbums, null, 2)};

export const galleryImages: GalleryFlatImage[] = ${JSON.stringify(allImages, null, 2)};

export function getAlbum(slug: string): GalleryAlbum | undefined {
  return galleryAlbums.find((a) => a.slug === slug);
}
`;

  writeFileSync(META, ts);
  writeFileSync(
    join(OUT, "manifest.json"),
    JSON.stringify(
      {
        importedAt: new Date().toISOString(),
        albumCount: catalogAlbums.length,
        imageCount: allImages.length,
        albums: catalogAlbums.map(({ id, slug, title, count }) => ({
          id,
          slug,
          title,
          count,
        })),
      },
      null,
      2,
    ),
  );

  console.log(`\nDone: ${catalogAlbums.length} albums, ${total} images → ${OUT}`);
  console.log(`Catalog: ${META}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
