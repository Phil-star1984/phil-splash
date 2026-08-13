"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";

export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname() || "/";
  const rest = pathname.replace(/^\/(de|en)(?=\/|$)/, "") || "";

  return (
    <div
      className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-titanium-dim md:text-xs"
      aria-label={label}
    >
      {locales.map((code, index) => {
        const href = `/${code}${rest}`;
        const active = code === locale;
        return (
          <span key={code} className="flex items-center gap-2">
            {index > 0 && <span className="text-titanium-dim/40" aria-hidden>/</span>}
            <Link
              href={href}
              hrefLang={code}
              className={
                active
                  ? "text-laser"
                  : "text-titanium transition-colors hover:text-signal"
              }
              aria-current={active ? "true" : undefined}
            >
              {code.toUpperCase()}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
