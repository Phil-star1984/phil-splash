import { MediaImage } from "@/components/MediaImage";
import type { Dictionary } from "@/i18n/dictionaries/types";
import { SCREEN_FEATURED_SRC, SCREEN_GALLERY_SRCS } from "@/lib/content";

function Shot({
  src,
  alt,
  caption,
  sizes,
  className,
}: {
  src: string;
  alt: string;
  caption: string;
  sizes: string;
  className?: string;
}) {
  return (
    <figure className={`relative overflow-hidden bg-void ${className ?? ""}`}>
      <MediaImage
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.03]"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-5">
        <span className="font-display text-[0.68rem] uppercase tracking-[0.28em] text-titanium">
          {caption}
        </span>
      </figcaption>
    </figure>
  );
}

export function ScreenFormat({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="screen-format"
      aria-labelledby="screen-heading"
      className="section-defer relative border-t border-white/5 bg-void"
    >
      <div className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <p className="font-display text-[0.7rem] uppercase tracking-[0.32em] text-splash">
          {dict.screen.eyebrow}
        </p>
        <h2
          id="screen-heading"
          className="font-display mt-4 max-w-3xl text-[clamp(1.8rem,4.5vw,3.2rem)] leading-[1.05] font-bold tracking-[-0.03em] text-signal"
        >
          {dict.screen.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-titanium md:text-lg">
          {dict.screen.intro}
        </p>
      </div>

      <div className="bg-white/5">
        <Shot
          src={SCREEN_FEATURED_SRC}
          alt={dict.screen.featuredAlt}
          caption={dict.screen.featuredCaption}
          sizes="100vw"
          className="aspect-[16/10] md:aspect-[21/9]"
        />
      </div>

      <div className="border-y border-white/5 px-6 py-12 md:px-10 lg:px-14">
        <p className="max-w-3xl text-base leading-relaxed text-titanium md:text-lg">
          {dict.screen.body}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px bg-white/5 md:grid-cols-2">
        {SCREEN_GALLERY_SRCS.map((src, i) => (
          <Shot
            key={src}
            src={src}
            alt={dict.screen.gallery[i].alt}
            caption={dict.screen.gallery[i].caption}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="aspect-[16/10]"
          />
        ))}
      </div>
    </section>
  );
}
