import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";
import { SITE } from "@/lib/content";

export function SiteFooter({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <footer className="border-t border-white/5 bg-void px-6 py-10 md:px-10 lg:px-14">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-sm tracking-[0.2em] uppercase text-signal">
            {SITE.name}
          </p>
          <p className="mt-2 text-sm text-titanium-dim">{dict.footer.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-6 text-[0.68rem] uppercase tracking-[0.22em] text-titanium-dim">
          <a
            href="/downloads/phil-splash-live-portraets-fassadenprojektion.pdf"
            className="hover:text-laser"
            download
          >
            {dict.footer.offerPdf}
          </a>
          <a href={`mailto:${SITE.email}`} className="hover:text-laser">
            {dict.footer.contact}
          </a>
          <Link href={`/${locale}/impressum`} className="hover:text-laser">
            {dict.footer.impressum}
          </Link>
          <a href="/llms.txt" className="hover:text-laser">
            llms.txt
          </a>
        </div>
      </div>
      <p className="mt-8 text-xs text-titanium-dim/70">
        © {new Date().getFullYear()} {SITE.legalName} · {SITE.name}
        <span className="mx-2 text-titanium-dim/40">·</span>
        <Link href={`/${locale}/impressum#bildhinweis`} className="hover:text-titanium">
          {dict.footer.imageNotice}
        </Link>
      </p>
    </footer>
  );
}
