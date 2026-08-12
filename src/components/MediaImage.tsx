import Image, { type ImageProps } from "next/image";

/** Tiny dark placeholder — instant paint while Next Image optimizer streams. */
const BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAACAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGfAP/EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//Z";

type MediaImageProps = Omit<ImageProps, "placeholder" | "blurDataURL"> & {
  /** Lower quality for below-the-fold gallery shots (default 70). Hero should pass 72–75. */
  soft?: boolean;
};

export function MediaImage({ soft = true, quality, alt, ...props }: MediaImageProps) {
  return (
    <Image
      alt={alt}
      placeholder="blur"
      blurDataURL={BLUR}
      quality={quality ?? (soft ? 68 : 74)}
      {...props}
    />
  );
}
