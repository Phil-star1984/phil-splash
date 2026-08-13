import { SITE } from "@/lib/content";
import { locales } from "@/i18n/config";

export default function sitemap() {
  const now = new Date();
  return [
    ...locales.map((locale) => ({
      url: `${SITE.url}/${locale}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${SITE.url}/${l}`])),
      },
    })),
    ...locales.map((locale) => ({
      url: `${SITE.url}/${locale}/impressum`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
    {
      url: `${SITE.url}/llms.txt`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE.url}/.well-known/llms.txt`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];
}
