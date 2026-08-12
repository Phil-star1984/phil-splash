import { SITE } from "@/lib/content";

export function Access() {
  const hasCal = Boolean(SITE.calUrl);

  return (
    <section
      id="access"
      aria-labelledby="access-heading"
      className="relative border-t border-white/5 bg-void-elevated"
    >
      <div className="laser-line" aria-hidden />
      <div className="mx-auto max-w-4xl px-6 py-24 text-center md:px-10 md:py-32 lg:px-14">
        <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-laser">
          Anfrage
        </p>
        <h2
          id="access-heading"
          className="font-display mt-5 text-[clamp(1.9rem,4.8vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.03em] text-signal"
        >
          Für Ihr Event verfügbar?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-titanium md:text-lg">
          Firmenfeier, Corporate Branding, Product Launch oder Gala: Senden Sie Ort, Datum und
          gewünschtes Format — wir klären Technik, Ablauf und Angebot.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-titanium-dim md:text-lg">
          Preise auf Anfrage. National und international buchbar. Zum internen Weiterleiten steht
          ein{" "}
          <a href="#angebot" className="text-laser underline-offset-4 hover:underline">
            Angebots-PDF
          </a>{" "}
          bereit.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={SITE.mailtoHref}
            className="inline-flex min-w-[240px] items-center justify-center border border-laser bg-laser/15 px-8 py-4 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-signal transition-all hover:bg-laser/25"
          >
            Anfrage per E-Mail
          </a>
          {hasCal ? (
            <a
              href={SITE.calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[240px] items-center justify-center border border-white/15 px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-titanium transition-colors hover:border-titanium hover:text-signal"
            >
              Termin im Kalender
            </a>
          ) : (
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex min-w-[240px] items-center justify-center border border-white/15 px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-titanium transition-colors hover:border-titanium hover:text-signal"
            >
              Anrufen
            </a>
          )}
        </div>
        <p className="mt-8 text-sm text-titanium-dim">
          {SITE.email} · {SITE.phoneDisplay}
        </p>
      </div>
    </section>
  );
}
