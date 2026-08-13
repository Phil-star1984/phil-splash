import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import type { Dictionary } from "@/i18n/dictionaries/types";

export function Videos({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="videos"
      aria-labelledby="videos-heading"
      className="section-defer relative border-t border-white/5 bg-void"
    >
      <div className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-laser">
          {dict.videos.eyebrow}
        </p>
        <h2
          id="videos-heading"
          className="font-display mt-4 max-w-3xl text-[clamp(1.8rem,4.5vw,3.2rem)] leading-[1.05] font-bold tracking-[-0.03em] text-signal"
        >
          {dict.videos.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-titanium md:text-lg">
          {dict.videos.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px bg-white/5 lg:grid-cols-2">
        {dict.videos.items.map((video) => (
          <article key={video.id} className="bg-void">
            <div className="relative aspect-video overflow-hidden bg-black">
              <YouTubeEmbed
                id={video.id}
                title={video.title}
                playLabel={dict.youtube.play}
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
