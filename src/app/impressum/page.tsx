import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum und rechtliche Angaben zu ${SITE.name} / ${SITE.legalName}`,
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-void text-signal">
      <header className="border-b border-white/5 px-6 py-6 md:px-10 lg:px-14">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link
            href="/"
            className="font-display text-[0.7rem] uppercase tracking-[0.22em] text-titanium transition-colors hover:text-laser"
          >
            ← {SITE.name}
          </Link>
          <p className="font-display text-[0.7rem] uppercase tracking-[0.22em] text-titanium-dim">
            Impressum
          </p>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24 lg:px-0">
        <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-laser">
          Rechtliches
        </p>
        <h1 className="font-display mt-4 text-[clamp(2rem,5vw,3.2rem)] font-bold tracking-[-0.03em]">
          Impressum
        </h1>

        <section className="mt-12 space-y-4 text-base leading-relaxed text-titanium">
          <h2 className="font-display text-xl font-bold text-signal">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            {SITE.legalName}
            <br />
            {SITE.brandStudio}
            <br />
            {SITE.address.street}
            <br />
            {SITE.address.zip} {SITE.address.city}
          </p>
          <p>
            Ust.-Idnr.: {SITE.vatId}
            <br />
            E-Mail:{" "}
            <a className="text-laser hover:underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            <br />
            Telefon:{" "}
            <a className="text-laser hover:underline" href={`tel:${SITE.phone}`}>
              {SITE.phoneDisplay}
            </a>
          </p>
        </section>

        <section className="mt-14 space-y-4 text-base leading-relaxed text-titanium">
          <h2 className="font-display text-xl font-bold text-signal">Haftungsausschluss</h2>
          <h3 className="font-display text-lg font-semibold text-signal">Haftung für Inhalte</h3>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als
            Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
            den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
            diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
            wir diese Inhalte umgehend entfernen.
          </p>
          <h3 className="font-display text-lg font-semibold text-signal">Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
            übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
            Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
            verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
            entfernen.
          </p>
          <h3 className="font-display text-lg font-semibold text-signal">Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
            nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
            dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir diese Inhalte
            umgehend entfernen.
          </p>
          <p className="text-sm text-titanium-dim">
            Quellen: Disclaimer von eRecht24, dem Portal zum Internetrecht von Rechtsanwalt Sören
            Siebert.
          </p>
        </section>

        <section className="mt-14 space-y-4 text-base leading-relaxed text-titanium">
          <h2 className="font-display text-xl font-bold text-signal">Datenschutz</h2>
          <p>
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich.
            Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder
            E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger
            Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte
            weitergegeben.
          </p>
          <p>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der
            Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
            Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </p>
          <p>
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch
            Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und
            Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten
            behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
            Werbeinformationen, etwa durch Spam-Mails, vor.
          </p>
          <p className="text-sm text-titanium-dim">
            Quelle: Datenschutzerklärung eRecht24. Inhalte übernommen und angepasst aus dem
            bestehenden Impressum auf millionpainter.de/kontakt.
          </p>
        </section>
      </article>
    </main>
  );
}
