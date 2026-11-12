"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  albumUnlockStorageKey,
  checkAlbumPassword,
  isAlbumProtected,
} from "@/lib/gallery-access";
import type { Dictionary } from "@/i18n/dictionaries/types";

export function AlbumUnlockGate({
  slug,
  dict,
  children,
}: {
  slug: string;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  const protectedAlbum = isAlbumProtected(slug);
  const [ready, setReady] = useState(!protectedAlbum);
  const [unlocked, setUnlocked] = useState(!protectedAlbum);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!protectedAlbum) {
      setUnlocked(true);
      setReady(true);
      return;
    }
    try {
      const ok = sessionStorage.getItem(albumUnlockStorageKey(slug)) === "1";
      setUnlocked(ok);
    } catch {
      setUnlocked(false);
    }
    setReady(true);
  }, [protectedAlbum, slug]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!checkAlbumPassword(slug, value)) {
      setError(true);
      return;
    }
    try {
      sessionStorage.setItem(albumUnlockStorageKey(slug), "1");
    } catch {
      /* ignore */
    }
    setError(false);
    setUnlocked(true);
  }

  if (!ready) {
    return <div className="min-h-[40vh] bg-void" aria-hidden />;
  }

  if (unlocked) return <>{children}</>;

  return (
    <div className="mx-auto flex min-h-[55vh] max-w-md flex-col justify-center px-6 py-16 md:px-10">
      <p className="font-display text-[0.65rem] uppercase tracking-[0.28em] text-laser">
        {dict.gallery.lockedEyebrow}
      </p>
      <h2 className="font-display mt-3 text-2xl font-bold tracking-[-0.03em] text-signal md:text-3xl">
        {dict.gallery.lockedTitle}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-titanium">{dict.gallery.lockedBody}</p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <label className="block">
          <span className="sr-only">{dict.gallery.passwordLabel}</span>
          <input
            type="password"
            autoComplete="off"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            placeholder={dict.gallery.passwordPlaceholder}
            className="w-full border border-white/15 bg-black/40 px-4 py-3 text-sm text-signal outline-none transition placeholder:text-titanium-dim focus:border-laser/50"
          />
        </label>
        {error ? (
          <p className="text-xs text-splash" role="alert">
            {dict.gallery.passwordError}
          </p>
        ) : null}
        <button
          type="submit"
          className="w-full bg-signal px-4 py-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-void transition hover:bg-laser"
        >
          {dict.gallery.passwordSubmit}
        </button>
      </form>
    </div>
  );
}
