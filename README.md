# portfolio-2026

Personal site of Saeed Aldosary — **Next.js 16 (App Router) + shadcn/ui + Tailwind CSS 4**, statically exported.
English at `/`, Arabic (RTL) at `/ar/`, dark/light themes.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export in out/
```

- Content (bio, projects, skills, certifications, links): `src/lib/content.ts`
- Page sections: `src/components/site/portfolio.tsx`
- shadcn components: `src/components/ui/` (add more with `npx shadcn add <name>`)
- Theme colors: `src/app/globals.css`

## Deploy

Every push to `main` builds and deploys to GitHub Pages (`.github/workflows/deploy.yml`).
Preview: https://saeedmaldosary.github.io/portfolio-2026/

**Moving saeedmaldosary.com here (when ready):**

1. Old repo `react-material-ui-tailwind-portfolio` → Settings → Pages → remove the custom domain.
2. This repo → Settings → Secrets and variables → Actions → Variables: add `SITE_URL=https://saeedmaldosary.com`.
   (With `SITE_URL` set, the base path becomes empty.)
3. This repo → Settings → Pages → Custom domain: `saeedmaldosary.com`, then re-run the deploy.
   DNS already points at GitHub Pages, so no DNS change is needed.
