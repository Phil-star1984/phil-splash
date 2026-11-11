import Image from "next/image";
import Link from "next/link";
import { GalleryViewSwitch } from "@/components/gallery/GalleryViewSwitch";
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
  return (
    <header className="relative isolate min-h-[11.5rem] overflow-hidden border-b border-white/8 md:min-h-[13.5rem]">
      <div className="absolute inset-0">
        <Image
          src={HEADER_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={60}
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-black/10 to-black/35" />
      </div>

      {/* Same full-bleed nav geometry as homepage Hero */}
      <nav className="relative z-20 flex items-center justify-between gap-4 px-6 py-6 md:px-10 lg:px-14">
        <Link
          href={`/${locale}`}
          className="font-display tracking-[0.18em] text-[0.7rem] uppercase text-titanium transition-colors hover:text-laser md:text-xs"
        >
          <span className="text-signal">{SITE.name}</span>
          <span className="mx-3 text-titanium-dim">/</span>
          <span>{dict.brand.alias}</span>
        </Link>
        <div className="flex items-center gap-5 md:gap-8">
          <LanguageSwitcher locale={locale} label={dict.nav.languageLabel} />
          <Link
            href={`/${locale}/galerie`}
            className="text-[0.7rem] uppercase tracking-[0.22em] text-laser md:text-xs"
            aria-current="page"
          >
            {dict.nav.gallery}
          </Link>
          <Link
            href={`/${locale}#access`}
            className="text-[0.7rem] uppercase tracking-[0.22em] text-titanium transition-colors hover:text-laser md:text-xs"
          >
            {dict.nav.inquire}
          </Link>
        </div>
      </nav>

      <div className="relative z-10 flex items-end px-6 pb-5 pt-2 md:px-10 md:pb-6 lg:px-14">
        <div className="flex w-full flex-wrap items-end justify-between gap-4">
          <div className="min-w-0 max-w-2xl">
            <p className="font-display text-[0.65rem] uppercase tracking-[0.32em] text-laser">
              {dict.gallery.eyebrow}
            </p>
            <h1 className="font-display mt-2 text-[clamp(1.35rem,2.8vw,1.9rem)] leading-[1.08] font-bold tracking-[-0.03em] text-signal">
              {dict.gallery.title}
            </h1>
          </div>
          <GalleryViewSwitch dict={dict} locale={locale} active={active} />
        </div>
      </div>
    </header>
  );
}
