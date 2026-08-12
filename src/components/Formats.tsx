import { FORMAT_OPTIONS } from "@/lib/content";

export function Formats() {
  return (
    <section
      id="formate"
      aria-labelledby="formate-heading"
      className="section-defer relative border-t border-white/5 bg-void-elevated"
    >
      <div className="laser-line" aria-hidden />
      <div className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-laser">
          Zwei Formate
        </p>
        <h2
          id="formate-heading"
          className="font-display mt-4 max-w-3xl text-[clamp(1.8rem,4.5vw,3.2rem)] leading-[1.05] font-bold tracking-[-0.03em] text-signal"
        >
          Fassade oder Screen.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-titanium md:text-lg">
          Dieselbe Live-Zeichnung auf dem iPad — unterschiedlich ausgespielt, abhängig von Location
          und Eventziel.
        </p>

        <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2">
          {FORMAT_OPTIONS.map((format) => (
            <article
              key={format.id}
              className="bg-void px-6 py-10 md:px-10 md:py-12"
            >
              <p className="font-display text-[0.65rem] uppercase tracking-[0.28em] text-splash">
                {format.label}
              </p>
              <h3 className="font-display mt-4 text-[clamp(1.5rem,2.5vw,2.1rem)] font-bold tracking-[-0.02em] text-signal">
                {format.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-titanium">
                {format.body}
              </p>
              <a
                href={format.href}
                className="mt-8 inline-flex text-[0.72rem] uppercase tracking-[0.24em] text-laser transition-colors hover:text-signal"
              >
                {format.cta} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
