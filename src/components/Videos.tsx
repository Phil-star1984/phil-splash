import { LIVE_VIDEOS } from "@/lib/content";

export function Videos() {
  return (
    <section
      id="videos"
      aria-labelledby="videos-heading"
      className="relative border-t border-white/5 bg-void"
    >
      <div className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-laser">
          Dokumentation
        </p>
        <h2
          id="videos-heading"
          className="font-display mt-4 max-w-3xl text-[clamp(1.8rem,4.5vw,3.2rem)] leading-[1.05] font-bold tracking-[-0.03em] text-signal"
        >
          Live-Zeichnung und Fassadenprojektion.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-titanium md:text-lg">
          Zwei Aufnahmen aus dem Einsatz: Schnellporträt auf dem iPad, Übertragung per Videobeamer
          auf Architektur — in Echtzeit.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px bg-white/5 lg:grid-cols-2">
        {LIVE_VIDEOS.map((video) => (
          <article key={video.id} className="bg-void">
            <div className="relative aspect-video overflow-hidden bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="border-t border-white/5 px-6 py-6 md:px-8">
              <h3 className="font-display text-lg font-bold tracking-[-0.02em] text-signal">
                {video.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-titanium md:text-base">
                {video.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
