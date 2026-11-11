import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Dictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";
import { SITE } from "@/lib/content";

const HEADER_IMAGE = "/media/call_fUG0wZIAn8DWBemEicLWe2VC.jpg";

export function GalleryHeader({
  dict,
  locale,
  active,
}: {
  dict: Dictionary;
  locale: Locale;
  active: "overview" | "albums" | "album";
}) {
  const showBackToAll = active === "albums" || active === "album";

  return (
    <header className="relative isolate overflow-hidden border-b border-white/8">
      <div className="absolute inset-0">
        <Image
          src={HEADER_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={60}
          className="object-cover object-[center_28%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-black/40" />
      </div>

      <div className="relative z-10 px-6 py-4 md:px-10 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <Link
            href={`/${locale}`}
            className="font-display text-[0.68rem] uppercase tracking-[0.22em] text-titanium transition-colors hover:text-laser md:text-[0.72rem]"
          >
            <span className="text-signal">{SITE.name}</span>
            <span className="mx-2 text-titanium-dim/70">/</span>
            <span>{dict.brand.alias}</span>
          </Link>

          <nav
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.68rem] uppercase tracking-[0.22em] md:gap-x-6"
            aria-label={dict.gallery.navLabel}
          >
            <Link
              href={`/${locale}/galerie`}
              className={
                active === "overview"
                  ? "text-laser"
                  : "text-titanium transition-colors hover:text-signal"
              }
              aria-current={active === "overview" ? "page" : undefined}
            >
              {dict.gallery.navOverview}
            </Link>
            <Link
              href={`/${locale}/galerie/alben`}
              className={
                active === "albums" || active === "album"
                  ? "text-laser"
                  : "text-titanium transition-colors hover:text-signal"
              }
              aria-current={active === "albums" ? "page" : undefined}
            >
              {dict.gallery.navAlbums}
            </Link>
            <LanguageSwitcher locale={locale} label={dict.nav.languageLabel} />
            <Link
              href={`/${locale}#access`}
              className="hidden text-titanium transition-colors hover:text-laser sm:inline"
            >
              {dict.nav.inquire}
            </Link>
          </nav>
        </div>

        <div className="mx-auto mt-5 max-w-7xl pb-1 md:mt-6">
          {showBackToAll ? (
            <Link
              href={`/${locale}/galerie`}
              className="mb-3 inline-flex text-[0.68rem] uppercase tracking-[0.22em] text-laser transition hover:text-signal"
            >
              {dict.gallery.backToAllPortraits}
            </Link>
          ) : null}
          <p className="font-display text-[0.65rem] uppercase tracking-[0.32em] text-laser">
            {dict.gallery.eyebrow}
          </p>
          <h1 className="font-display mt-2 max-w-3xl text-[clamp(1.45rem,3.2vw,2.15rem)] leading-[1.08] font-bold tracking-[-0.03em] text-signal">
            {dict.gallery.title}
          </h1>
          <p className="mt-2 max-w-2xl text-[0.85rem] leading-relaxed text-titanium/90">
            {dict.gallery.intro}
          </p>
        </div>
      </div>
    </header>
  );
}
