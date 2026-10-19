import type { Dictionary } from "@/i18n/dictionaries/types";
import { CREDENTIALS } from "@/lib/content";

export function Million({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="million"
      aria-labelledby="million-heading"
      className="section-defer relative border-t border-white/5 bg-void-elevated"
    >
      <div className="laser-line" aria-hidden />
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-laser">
          {dict.million.eyebrow}
        </p>
        <h2
          id="million-heading"
          className="font-display mt-5 max-w-4xl text-[clamp(1.9rem,4.8vw,3.6rem)] leading-[1.05] font-bold tracking-[-0.03em] text-signal"
        >
          {dict.million.title}
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-titanium md:text-xl">
          {dict.million.body}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-titanium-dim md:text-lg">
          {dict.million.bodySecondary}
        </p>
        <p className="font-display mt-16 text-[clamp(2.8rem,10vw,7rem)] leading-none font-bold tracking-[-0.04em] text-signal">
          {CREDENTIALS.target}
          <span className="mt-4 block font-display text-[0.72rem] font-medium uppercase tracking-[0.35em] text-laser md:text-sm">
            {dict.million.mark}
          </span>
        </p>
      </div>
    </section>
  );
}
