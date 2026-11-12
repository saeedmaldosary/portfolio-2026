# portfolio-2026

Personal site of Saeed Aldosary — **Next.js 16 (App Router) + shadcn/ui + Tailwind CSS 4**, statically exported.
English at `/`, Arabic (RTL) at `/ar/`, dark/light themes.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export in out/
```

- Content (from the CV: summary, experience, education, skills, certifications, links): `src/lib/content.ts`
- Page: `src/components/site/portfolio.tsx` puts the sections in order. Each section is one small file:
  `hero.tsx`, `selected-work.tsx`, `experience.tsx`, `skills.tsx`, `certifications.tsx`, `contact.tsx`, `footer.tsx`
  (shared pieces: `section.tsx`, `theme-toggle.tsx`, `brand-icons.tsx`)
- Routes: `src/app/(en)/page.tsx` (English) and `src/app/(ar)/ar/page.tsx` (Arabic, RTL); each has its own root layout via `root-shell.tsx`
- shadcn components: `src/components/ui/` (add more with `npx shadcn add <name>`)
- Theme colors: `src/app/globals.css`

## Deploy

Every push to `main` builds and deploys to GitHub Pages (`.github/workflows/deploy.yml`)
at https://saeedmaldosary.com (custom domain set in Settings -> Pages; DNS points at GitHub Pages).
