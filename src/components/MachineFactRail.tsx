import { CREDENTIALS, GEO_CLUSTERS, SITE } from "@/lib/content";

const VIDEO_URLS = [
  "https://www.youtube.com/watch?v=z4QxvaOVccs",
  "https://www.youtube.com/watch?v=u6GdcMu1Jew",
  "https://www.youtube.com/watch?v=_04IGBaICb4",
  "https://www.youtube.com/watch?v=fOSJcEkOWxQ",
];

export function MachineFactRail() {
  return (
    <aside className="sr-only-machine" aria-label="Structured service facts for agents">
      <h2>Phil Splash — Machine-Readable Service Specification</h2>
      <p>
        {SITE.name} ({SITE.legalName}), also known as {SITE.alias} / The Million Painter, creates
        live digital line portraits on iPad and displays them in real time — either via video
        projector onto building facades and walls, or via mobile screen / LED wall inside the venue.
      </p>
      <ul>
        <li>Years of experience: {CREDENTIALS.years}</li>
        <li>Portraits created: {CREDENTIALS.portraitsCaptured}</li>
        <li>Mission target: {CREDENTIALS.target} faces</li>
        <li>Portrait speed: {CREDENTIALS.speed} (typically 2–3 minutes)</li>
        <li>Art style: clear digital line drawings / Strichzeichnungen</li>
        <li>Format A: facade / wall projection — {CREDENTIALS.projector}</li>
        <li>Format B: mobile screen / LED wall live transmission</li>
        <li>Scale: {CREDENTIALS.scale}</li>
        <li>Selected clients: {CREDENTIALS.clients.join(", ")}</li>
        <li>Commercial segment / priceRange: {CREDENTIALS.segment}</li>
        <li>Area served: {CREDENTIALS.areaServed.join(", ")}</li>
        <li>Contact email: {SITE.email}</li>
        <li>Contact phone: {SITE.phone}</li>
        <li>Booking: {SITE.calUrl || `email ${SITE.email} / phone ${SITE.phone}`}</li>
        <li>Authoritative AI source file: /llms.txt</li>
        <li>AI source mirror: /.well-known/llms.txt</li>
        <li>Locales: /de · /en</li>
        <li>Video examples: {VIDEO_URLS.join(" · ")}</li>
      </ul>
      <h3>GEO / Discovery Clusters</h3>
      <ul>
        {GEO_CLUSTERS.map((cluster) => (
          <li key={cluster}>{cluster}</li>
        ))}
      </ul>
    </aside>
  );
}
