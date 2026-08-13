import type { Dictionary } from "@/i18n/dictionaries/types";
import { CREDENTIALS } from "@/lib/content";

export function Origin({ dict }: { dict: Dictionary }) {
  const clients = `${CREDENTIALS.clients.slice(0, 3).join(", ")} · ${CREDENTIALS.clients[3]}`;
  const p2 = dict.origin.p2
    .replace("{portraits}", CREDENTIALS.portraitsCaptured)
    .replace("{clients}", clients);

  return (
    <section
      id="origin"
      aria-labelledby="origin-heading"
      className="section-defer relative overflow-hidden border-t border-white/5 bg-void"
    >
      <div className="beam-veil absolute inset-0 opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-splash">
          {dict.origin.eyebrow}
        </p>
        <h2
          id="origin-heading"
          className="font-display mt-5 text-[clamp(1.9rem,4.8vw,3.6rem)] leading-[1.05] font-bold tracking-[-0.03em] text-signal"
        >
          {dict.origin.title}
        </h2>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-titanium md:text-xl">
          <p>{dict.origin.p1}</p>
          <p>{p2}</p>
          <p>{dict.origin.p3}</p>
        </div>

        <p className="font-display mt-16 border-t border-white/10 pt-10 text-[clamp(2.8rem,10vw,7rem)] leading-none font-bold tracking-[-0.04em] text-signal">
          {CREDENTIALS.target}
          <span className="mt-4 block font-display text-[0.72rem] font-medium uppercase tracking-[0.35em] text-laser md:text-sm">
            {dict.origin.targetLabel}
          </span>
        </p>
      </div>
    </section>
  );
}
