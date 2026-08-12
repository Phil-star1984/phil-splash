import Image from "next/image";
import { RITUAL } from "@/lib/content";

export function Ritual() {
  return (
    <section
      id="ritual"
      aria-labelledby="ritual-heading"
      className="relative border-t border-white/5 bg-void"
    >
      <div className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-laser">
          Ablauf
        </p>
        <h2
          id="ritual-heading"
          className="font-display mt-4 max-w-3xl text-[clamp(1.8rem,4.5vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.03em] text-signal"
        >
          Zeichnung. Übertragung. Wirkung.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-titanium md:text-lg">
          Parallel entsteht ein Unikat für den Gast und eine Inszenierung für das Publikum — sichtbar
          an Fassade, Wand oder Screen.
        </p>
      </div>

      <div className="flex flex-col">
        {RITUAL.map((pillar, index) => (
          <article
            key={pillar.id}
            className="relative grid min-h-[85svh] grid-cols-1 border-t border-white/5 lg:grid-cols-2"
          >
            <div
              className={`relative min-h-[50svh] lg:min-h-full ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={pillar.image.src}
                alt={pillar.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
            </div>
            <div
              className={`flex flex-col justify-center bg-void-elevated px-6 py-16 md:px-12 lg:px-16 ${
                index % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              <p className="font-display text-[0.68rem] uppercase tracking-[0.3em] text-splash">
                0{index + 1} — {pillar.label}
              </p>
              <h3 className="font-display mt-5 text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.08] font-bold tracking-[-0.02em] text-signal">
                {pillar.title}
              </h3>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-titanium md:text-lg">
                {pillar.body}
              </p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-titanium-dim md:text-lg">
                {pillar.bodySecondary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
