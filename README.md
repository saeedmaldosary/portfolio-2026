# portfolio-2026

Personal site of Saeed Aldosary, built with [Astro](https://astro.build) and Tailwind CSS 4.
English at `/`, Arabic (RTL) at `/ar/`, with light and dark themes.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

All text, projects, skills and certifications are in `src/data/content.ts`.

## Deploy

Every push to `main` builds and deploys to GitHub Pages (`.github/workflows/deploy.yml`).

**Moving saeedmaldosary.com here:**

1. Remove the custom domain from the old `react-material-ui-tailwind-portfolio` repo (Settings → Pages).
2. Set repo variables `SITE_URL=https://saeedmaldosary.com` and `BASE_PATH=/` (Settings → Secrets and variables → Actions → Variables).
3. Add `saeedmaldosary.com` as the custom domain in this repo's Settings → Pages and re-run the deploy. DNS already points at GitHub Pages, so no DNS change is needed.
