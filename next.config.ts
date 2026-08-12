import type { NextConfig } from "next";

const longCache = "public, max-age=31536000, immutable";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1280, 1600, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: "/llms.txt",
        headers: [
          { key: "Content-Type", value: "text/markdown; charset=utf-8" },
          { key: "X-Robots-Tag", value: "all" },
        ],
      },
      {
        source: "/media/:path*",
        headers: [{ key: "Cache-Control", value: longCache }],
      },
      {
        source: "/downloads/:path*",
        headers: [{ key: "Cache-Control", value: longCache }],
      },
    ];
  },
};

export default nextConfig;
