// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// SITE_URL / BASE_PATH are set by the deploy workflow.
// Preview on GitHub Pages:  SITE_URL=https://saeedmaldosary.github.io  BASE_PATH=/portfolio-2026
// Custom domain:            SITE_URL=https://saeedmaldosary.com        BASE_PATH=/
export default defineConfig({
  site: process.env.SITE_URL ?? "https://saeedmaldosary.com",
  base: process.env.BASE_PATH ?? "/",
  trailingSlash: "ignore",
  vite: { plugins: [tailwindcss()] },
});
