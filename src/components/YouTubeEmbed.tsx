"use client";

import { useState } from "react";

type YouTubeEmbedProps = {
  id: string;
  title: string;
  playLabel?: string;
};

/** Click-to-play facade — loads the player only when the user starts the video. */
export function YouTubeEmbed({ id, title, playLabel = "Play" }: YouTubeEmbedProps) {
  const [active, setActive] = useState(false);
  const poster = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  if (active) {
    return (
      <iframe
        className="absolute inset-0 h-full w-full border-0"
        src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className="group absolute inset-0 z-10 h-full w-full cursor-pointer border-0 bg-black p-0 text-left"
      aria-label={`${playLabel}: ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt=""
        width={480}
        height={360}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
        onError={(e) => {
          e.currentTarget.style.opacity = "0.3";
        }}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/60 text-signal transition-transform group-hover:scale-105">
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
