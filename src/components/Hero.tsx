import Image from "next/image";
import { HERO_MEDIA, SITE } from "@/lib/content";

export function Hero() {
  return (
    <header className="relative min-h-[100svh] overflow-hidden projection-canvas">
      <div className="absolute inset-0">
        <Image
          src={HERO_MEDIA.src}
          alt={HERO_MEDIA.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%] scale-[1.01]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/45 to-black/15 md:via-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/35" />
        <div className="projection-scan" aria-hidden />
        <div className="beam-veil absolute inset-0" aria-hidden />
      </div>

      <nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-10 lg:px-14">
        <div className="font-display tracking-[0.18em] text-[0.7rem] uppercase text-titanium md:text-xs">
          <span className="text-signal">{SITE.name}</span>
          <span className="mx-3 text-titanium-dim">/</span>
          <span>{SITE.alias}</span>
        </div>
        <a
          href="#access"
          className="text-[0.7rem] uppercase tracking-[0.22em] text-titanium transition-colors hover:text-laser md:text-xs"
        >
          Anfragen
        </a>
      </nav>

      <div className="relative z-20 flex min-h-[calc(100svh-5.5rem)] flex-col justify-end px-6 pb-16 pt-24 md:px-10 md:pb-20 lg:px-14 lg:pb-24">
        <p className="reveal-up font-display text-[0.72rem] uppercase tracking-[0.35em] text-laser md:text-xs">
          {SITE.alias}
        </p>
        <h1 className="reveal-up-delay-1 font-display mt-5 max-w-5xl text-[clamp(2.6rem,8vw,6.4rem)] leading-[0.92] font-bold tracking-[-0.03em] text-signal">
          {SITE.name}
        </h1>
        <p className="reveal-up-delay-2 mt-6 max-w-2xl font-display text-[clamp(1.35rem,3.4vw,2.35rem)] leading-[1.15] font-semibold tracking-[-0.02em] text-signal">
          {SITE.tagline}
        </p>
        <p className="reveal-up-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-titanium md:text-lg">
          {SITE.description}
        </p>
        <p className="reveal-up-delay-2 mt-4 max-w-2xl text-sm leading-relaxed text-titanium-dim md:text-base">
          {SITE.descriptionLong}
        </p>
        <div className="reveal-up-delay-3 mt-10 flex flex-wrap items-center gap-5">
          <a
            href="#access"
            className="inline-flex items-center justify-center border border-laser/70 bg-laser/10 px-7 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-signal transition-all hover:border-laser hover:bg-laser/20"
          >
            Anfrage
          </a>
          <a
            href="#formate"
            className="inline-flex items-center justify-center px-2 py-3.5 text-[0.72rem] uppercase tracking-[0.24em] text-titanium transition-colors hover:text-signal"
          >
            Formate →
          </a>
        </div>
      </div>
    </header>
  );
}
