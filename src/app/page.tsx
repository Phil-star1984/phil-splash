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

export default function HomePage() {
  return (
    <>
      <MachineFactRail />
      <main>
        <Hero />
        <Ritual />
        <Formats />
        <Videos />
        <ScreenFormat />
        <Proof />
        <Origin />
        <OfferDownload />
        <Access />
      </main>
      <SiteFooter />
    </>
  );
}
