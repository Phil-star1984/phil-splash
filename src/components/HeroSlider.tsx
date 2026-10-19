"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MediaImage } from "@/components/MediaImage";
import { HERO_SLIDES } from "@/lib/content";

const HOLD_MS = 5200;
const FADE_MS = 2200;

export function HeroSlider({ alt }: { alt: string }) {
  const [current, setCurrent] = useState(0);
  const [incoming, setIncoming] = useState<number | null>(null);
  const [blendIn, setBlendIn] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const currentRef = useRef(0);
  const busyRef = useRef(false);

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const advance = useCallback(() => {
    if (busyRef.current || HERO_SLIDES.length < 2) return;
    busyRef.current = true;
    const next = (currentRef.current + 1) % HERO_SLIDES.length;
    setIncoming(next);
    setBlendIn(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setBlendIn(true));
    });
  }, []);

  useEffect(() => {
    if (reduceMotion || HERO_SLIDES.length < 2) return;
    const id = window.setInterval(advance, HOLD_MS);
    return () => window.clearInterval(id);
  }, [advance, reduceMotion]);

  useEffect(() => {
    if (incoming === null || !blendIn) return;
    const t = window.setTimeout(() => {
      setCurrent(incoming);
      currentRef.current = incoming;
      setIncoming(null);
      setBlendIn(false);
      busyRef.current = false;
    }, FADE_MS);
    return () => window.clearTimeout(t);
  }, [incoming, blendIn]);

  const fade = reduceMotion ? "none" : `opacity ${FADE_MS}ms ease-in-out`;

  return (
    <div className="absolute inset-0 bg-void">
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <MediaImage
          src={HERO_SLIDES[current]}
          alt={alt}
          fill
          priority
          soft={false}
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
      </div>

      {incoming !== null && (
        <div
          className="absolute inset-0"
          style={{
            zIndex: 2,
            opacity: blendIn ? 1 : 0,
            transition: fade,
            pointerEvents: "none",
          }}
          aria-hidden
        >
          <MediaImage
            src={HERO_SLIDES[incoming]}
            alt=""
            fill
            soft={false}
            sizes="100vw"
            className="object-cover object-[center_40%]"
          />
        </div>
      )}
    </div>
  );
}
