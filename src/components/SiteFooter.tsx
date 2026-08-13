import Link from "next/link";
import { SITE } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-void px-6 py-10 md:px-10 lg:px-14">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-sm tracking-[0.2em] uppercase text-signal">
            {SITE.name}
          </p>
          <p className="mt-2 text-sm text-titanium-dim">
            {SITE.alias} · Live-Porträts & Fassadenprojektion
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-[0.68rem] uppercase tracking-[0.22em] text-titanium-dim">
          <a
            href="/downloads/phil-splash-live-portraets-fassadenprojektion.pdf"
            className="hover:text-laser"
            download
          >
            Angebot PDF
          </a>
          <a href={`mailto:${SITE.email}`} className="hover:text-laser">
            Kontakt
          </a>
          <Link href="/impressum" className="hover:text-laser">
            Impressum
          </Link>
          <a href="/llms.txt" className="hover:text-laser">
            llms.txt
          </a>
        </div>
      </div>
      <p className="mt-8 text-xs text-titanium-dim/70">
        © {new Date().getFullYear()} {SITE.legalName} · {SITE.name}
        <span className="mx-2 text-titanium-dim/40">·</span>
        <Link href="/impressum#bildhinweis" className="hover:text-titanium">
          Hinweis zu Bildern
        </Link>
      </p>
    </footer>
  );
}
