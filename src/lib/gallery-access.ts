/**
 * Soft album gates (client-side). Not real security — images remain in /public.
 *
 * To protect an album later, add its slug here:
 *   "mein-album-slug": "MeinPasswort2026",
 */
const albumPasswords: Record<string, string> = {
  // empty on purpose — add entries only when an album should be gated
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
