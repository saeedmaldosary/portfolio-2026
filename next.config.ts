import type { NextConfig } from "next";

// BASE_PATH is set by the deploy workflow:
//   GitHub Pages preview  -> /portfolio-2026
//   saeedmaldosary.com    -> "" (empty)
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  experimental: {
    // By default the bundler merges small CSS files across pages, which made the English page
    // preload the Arabic fonts (and the other way round). With requestCost 0, each page loads
    // only the CSS it imports, so it preloads only its own font.
    cssChunking: { type: "graph", requestCost: 0 },
  },
};

export default nextConfig;
