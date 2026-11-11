import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";

export function GalleryViewSwitch({
  dict,
  locale,
  active,
}: {
  dict: Dictionary;
  locale: Locale;
  active: "overview" | "albums" | "album";
}) {
  const overviewActive = active === "overview";
  const albumsActive = active === "albums" || active === "album";

  return (
    <div
      className="inline-flex rounded-full border border-white/12 bg-black/35 p-1 backdrop-blur-md"
      role="tablist"
      aria-label={dict.gallery.navLabel}
    >
      <Link
        href={`/${locale}/galerie`}
        role="tab"
        aria-selected={overviewActive}
        className={
          overviewActive
            ? "rounded-full bg-signal px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-void transition md:px-5"
            : "rounded-full px-4 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-titanium transition hover:text-signal md:px-5"
        }
      >
        {dict.gallery.navOverview}
      </Link>
      <Link
        href={`/${locale}/galerie/alben`}
        role="tab"
        aria-selected={albumsActive}
        className={
          albumsActive
            ? "rounded-full bg-signal px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-void transition md:px-5"
            : "rounded-full px-4 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-titanium transition hover:text-signal md:px-5"
        }
      >
        {dict.gallery.navAlbums}
      </Link>
    </div>
  );
}
