import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { HeroSlider } from "@/components/HeroSlider";
import type { Dictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";
import { SITE } from "@/lib/content";

export function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <header className="relative min-h-[100svh] overflow-hidden bg-void">
      <div className="absolute inset-0">
        <HeroSlider alt={dict.hero.description} />
        {/* Soft global dim so the image stays visible but calmer */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />
      </div>

      <nav className="relative z-20 flex items-center justify-between gap-4 px-6 py-6 md:px-10 lg:px-14">
        <div className="font-display tracking-[0.18em] text-[0.7rem] uppercase text-titanium md:text-xs">
          <span className="text-signal">{SITE.name}</span>
          <span className="mx-3 text-titanium-dim">/</span>
          <span>{dict.brand.alias}</span>
        </div>
        <div className="flex items-center gap-5 md:gap-8">
          <LanguageSwitcher locale={locale} label={dict.nav.languageLabel} />
          <a
            href="#access"
            className="text-[0.7rem] uppercase tracking-[0.22em] text-titanium transition-colors hover:text-laser md:text-xs"
          >
            {dict.nav.inquire}
          </a>
        </div>
      </nav>

      <div className="relative z-20 flex min-h-[calc(100svh-5.5rem)] flex-col justify-end px-6 pb-16 pt-24 md:px-10 md:pb-20 lg:px-14 lg:pb-24">
        {/* Apple-style readability: blur + soft dark veil only behind the copy */}
        <div className="relative max-w-3xl">
          <div
            aria-hidden
            className="hero-copy-frost pointer-events-none absolute -inset-x-5 -inset-y-6 z-0 sm:-inset-x-8 sm:-inset-y-8 md:-inset-x-10 md:-inset-y-10"
          />
          <div className="relative z-10">
            <p className="reveal-up font-display text-[0.72rem] uppercase tracking-[0.35em] text-laser md:text-xs">
              {dict.brand.alias}
            </p>
            <h1 className="reveal-up-delay-1 font-display mt-5 max-w-5xl text-[clamp(2.6rem,8vw,6.4rem)] leading-[0.92] font-bold tracking-[-0.03em] text-signal">
              {SITE.name}
            </h1>
            <p className="reveal-up-delay-2 mt-6 max-w-2xl font-display text-[clamp(1.35rem,3.4vw,2.35rem)] leading-[1.15] font-semibold tracking-[-0.02em] text-signal">
              {dict.hero.tagline}
            </p>
            <p className="reveal-up-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-titanium md:text-lg">
              {dict.hero.description}
            </p>
            <p className="reveal-up-delay-2 mt-4 max-w-2xl text-sm leading-relaxed text-titanium-dim md:text-base">
              {dict.hero.descriptionLong}
            </p>
            <div className="reveal-up-delay-3 mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#access"
                className="inline-flex items-center justify-center border border-laser/70 bg-laser/10 px-7 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-signal transition-all hover:border-laser hover:bg-laser/20"
              >
                {dict.hero.ctaPrimary}
              </a>
              <a
                href="#formate"
                className="inline-flex items-center justify-center px-2 py-3.5 text-[0.72rem] uppercase tracking-[0.24em] text-titanium transition-colors hover:text-signal"
              >
                {dict.hero.ctaSecondary}
              </a>
            </div>
            <p className="reveal-up-delay-3 mt-8 max-w-xl text-[0.7rem] leading-relaxed text-titanium-dim/90 md:text-xs">
              {dict.hero.aiNotice}{" "}
              <a
                href={`/${locale}/impressum#bildhinweis`}
                className="underline-offset-2 hover:text-titanium hover:underline"
              >
                {dict.hero.aiNoticeMore}
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
