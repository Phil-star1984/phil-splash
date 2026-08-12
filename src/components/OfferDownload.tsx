import { SITE } from "@/lib/content";

export const OFFER_PDF = {
  href: "/downloads/phil-splash-live-portraets-fassadenprojektion.pdf",
  filename: "phil-splash-live-portraets-fassadenprojektion.pdf",
  label: "Angebot als PDF",
  pages: "3 Seiten · A4 Querformat",
} as const;

export function OfferDownload() {
  return (
    <section
      id="angebot"
      aria-labelledby="angebot-heading"
      className="relative border-t border-white/5 bg-void"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-14 md:px-10 md:py-28 lg:px-14">
        <div>
          <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-laser">
            Unterlage
          </p>
          <h2
            id="angebot-heading"
            className="font-display mt-4 text-[clamp(1.8rem,4.2vw,3rem)] leading-[1.05] font-bold tracking-[-0.03em] text-signal"
          >
            Die Leistung auf drei Seiten.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-titanium md:text-lg">
            Kurzes Angebots-PDF: Ablauf, Wirkung und Leistungsumfang — mit denselben Bildern wie auf
            dieser Seite. Geeignet zur Weitergabe an Event-Team, Agentur oder Entscheider.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-titanium-dim md:text-base">
            <li>— Live-Porträt auf dem iPad</li>
            <li>— Übertragung auf Fassade oder LED</li>
            <li>— Ablauf, Nutzen, Kontakt</li>
          </ul>
        </div>

        <div className="border border-white/10 bg-void-elevated px-6 py-8 md:px-8">
          <p className="font-display text-[0.68rem] uppercase tracking-[0.28em] text-splash">
            PDF Download
          </p>
          <p className="font-display mt-4 text-xl font-bold tracking-[-0.02em] text-signal">
            {SITE.name}
          </p>
          <p className="mt-2 text-sm text-titanium">
            Live-Porträts &amp; Fassadenprojektion
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-titanium-dim">
            {OFFER_PDF.pages}
          </p>
          <a
            href={OFFER_PDF.href}
            download={OFFER_PDF.filename}
            className="mt-8 inline-flex w-full items-center justify-center border border-laser bg-laser/15 px-6 py-4 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-signal transition-all hover:bg-laser/25"
          >
            {OFFER_PDF.label} ↓
          </a>
          <p className="mt-4 text-center text-xs text-titanium-dim">
            Kostenlos · direkt im Browser speichern
          </p>
        </div>
      </div>
    </section>
  );
}
