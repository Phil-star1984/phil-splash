import { CREDENTIALS } from "@/lib/content";

export function Origin() {
  return (
    <section
      id="origin"
      aria-labelledby="origin-heading"
      className="relative overflow-hidden border-t border-white/5 bg-void"
    >
      <div className="beam-veil absolute inset-0 opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-splash">
          Der Künstler
        </p>
        <h2
          id="origin-heading"
          className="font-display mt-5 text-[clamp(1.9rem,4.8vw,3.6rem)] leading-[1.05] font-bold tracking-[-0.03em] text-signal"
        >
          Von der U-Bahn zur Fassade.
        </h2>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-titanium md:text-xl">
          <p>
            Seit 2010 porträtiert Phil Splash Menschen — begonnen in der Münchner U-Bahn. Die Presse
            prägte später den Namen „Der Millionen Maler“. Das Ziel: eine Million Gesichter.
          </p>
          <p>
            Bis heute entstanden {CREDENTIALS.portraitsCaptured} Porträts. Live-Aktionen unter anderem
            für {CREDENTIALS.clients.slice(0, 3).join(", ")} und {CREDENTIALS.clients[3]}. Berichtet
            wurde unter anderem bei RTL, ZDF, Süddeutscher Zeitung und BILD.
          </p>
          <p>
            Dieselbe Haltung trifft heute auf Hochleistungs-Beamer und Eventarchitektur:
            Schnellzeichnung auf dem iPad, Übertragung an Wand, Fassade oder Screen — persönlich für
            den Gast, präsent für den Raum.
          </p>
        </div>

        <p className="font-display mt-16 border-t border-white/10 pt-10 text-[clamp(2.8rem,10vw,7rem)] leading-none font-bold tracking-[-0.04em] text-signal">
          {CREDENTIALS.target}
          <span className="mt-4 block font-display text-[0.72rem] font-medium uppercase tracking-[0.35em] text-laser md:text-sm">
            Gesichter — das Ziel hinter dem Namen
          </span>
        </p>
      </div>
    </section>
  );
}
