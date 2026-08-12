import Image from "next/image";
import {
  PROOF_FEATURED,
  PROOF_PAIR_A,
  PROOF_PAIR_B,
  PROOF_USPS,
  VERTICAL_STRIP,
} from "@/lib/content";

function Shot({
  shot,
  sizes,
  className,
}: {
  shot: { src: string; alt: string; caption: string };
  sizes: string;
  className?: string;
}) {
  return (
    <figure className={`relative overflow-hidden bg-void ${className ?? ""}`}>
      <Image
        src={shot.src}
        alt={shot.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.03]"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-5">
        <span className="font-display text-[0.68rem] uppercase tracking-[0.28em] text-titanium">
          {shot.caption}
        </span>
      </figcaption>
    </figure>
  );
}

export function Proof() {
  return (
    <section
      id="proof"
      aria-labelledby="proof-heading"
      className="relative border-t border-white/5 bg-void"
    >
      <div className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-laser">
          Format A · Impressionen
        </p>
        <h2
          id="proof-heading"
          className="font-display mt-4 max-w-3xl text-[clamp(1.8rem,4.5vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.03em] text-signal"
        >
          Fassadenprojektion — weitere Eindrücke.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-titanium md:text-lg">
          Weitere Bilder der Beamer-Übertragung auf Architektur. Ergänzend: die Video-Dokumentation
          oben sowie das Screen-Format für Indoor-Locations.
        </p>
      </div>

      <div className="bg-white/5">
        <Shot
          shot={PROOF_FEATURED}
          sizes="100vw"
          className="aspect-[16/9] md:aspect-[21/9]"
        />
      </div>

      <div className="grid grid-cols-1 gap-px bg-white/5 md:grid-cols-2">
        {PROOF_PAIR_A.map((shot) => (
          <Shot
            key={shot.src}
            shot={shot}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="aspect-[16/10]"
          />
        ))}
      </div>

      <div className="border-y border-white/5 px-6 py-16 md:px-10 md:py-20 lg:px-14">
        <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-splash">
          Nutzen für das Event
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-12">
          {PROOF_USPS.map((usp) => (
            <div key={usp.title}>
              <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-signal md:text-2xl">
                {usp.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-titanium">{usp.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-px bg-white/5 md:grid-cols-2">
        {PROOF_PAIR_B.map((shot) => (
          <Shot
            key={shot.src}
            shot={shot}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="aspect-[16/10]"
          />
        ))}
      </div>

      <div className="mt-px border-t border-white/5 bg-white/5">
        <div className="grid grid-cols-2 gap-px lg:grid-cols-4">
          {VERTICAL_STRIP.map((shot) => (
            <figure
              key={shot.src}
              className="relative aspect-[3/4] overflow-hidden bg-void sm:aspect-[9/16]"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-4 py-4 sm:px-5 sm:py-5">
                <span className="font-display text-[0.6rem] uppercase tracking-[0.24em] text-titanium sm:text-[0.65rem]">
                  {shot.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
