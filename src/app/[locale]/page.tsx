import { Access } from "@/components/Access";
import { Formats } from "@/components/Formats";
import { Hero } from "@/components/Hero";
import { MachineFactRail } from "@/components/MachineFactRail";
import { OfferDownload } from "@/components/OfferDownload";
import { Origin } from "@/components/Origin";
import { Proof } from "@/components/Proof";
import { Ritual } from "@/components/Ritual";
import { ScreenFormat } from "@/components/ScreenFormat";
import { SiteFooter } from "@/components/SiteFooter";
import { Videos } from "@/components/Videos";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <MachineFactRail />
      <main>
        <Hero dict={dict} locale={locale} />
        <Ritual dict={dict} />
        <Formats dict={dict} />
        <Videos dict={dict} />
        <ScreenFormat dict={dict} />
        <Proof dict={dict} />
        <Origin dict={dict} />
        <OfferDownload dict={dict} />
        <Access dict={dict} />
      </main>
      <SiteFooter dict={dict} locale={locale} />
    </>
  );
}
