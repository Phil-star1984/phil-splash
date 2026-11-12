/** Soft album gates (client-side). Not real security — images remain in /public. */

const albumPasswords: Record<string, string> = {
  // Test album — share link + password "Kulturspeicher2026"
  "koenig-bauer-kulturspeicher": "Kulturspeicher2026",
};

export function isAlbumProtected(slug: string): boolean {
  return Boolean(albumPasswords[slug]);
}

export function normalizeAlbumPassword(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, "");
}

export function checkAlbumPassword(slug: string, input: string): boolean {
  const expected = albumPasswords[slug];
  if (!expected) return true;
  return normalizeAlbumPassword(input) === normalizeAlbumPassword(expected);
}

export function albumUnlockStorageKey(slug: string): string {
  return `phil-splash-gallery-unlock:${slug}`;
}
