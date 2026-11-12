# portfolio-2026

Personal site of Saeed Aldosary — **Next.js 16 (App Router) + shadcn/ui + Tailwind CSS 4**, statically exported.
English at `/`, Arabic (RTL) at `/ar/`, dark/light themes.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # ESLint
npm run typecheck  # TypeScript
npm run build      # static export in out/
```

- Content (from the CV: summary, case studies, experience, skills, certifications, links): `src/lib/content.ts`
- Page: `src/components/site/portfolio.tsx` puts the sections in order. Each section is one small file:
  `hero.tsx`, `selected-work.tsx`, `experience.tsx`, `skills.tsx`, `certifications.tsx`, `contact.tsx`
  (shared pieces: `section.tsx`, `theme-toggle.tsx`, `brand-icons.tsx`)
- Routes: `src/app/(en)/page.tsx` (English) and `src/app/(ar)/ar/page.tsx` (Arabic, RTL). Each has its own layout,
  which picks that language's font (Geist for English, Almarai for Arabic) and passes it to `root-shell.tsx`,
  so a page only downloads the fonts it uses
- Page metadata, link-preview tags and structured data: `root-shell.tsx`
- Static files in `public/`: `favicon.svg`, the link-preview cards `og-en.jpg` / `og-ar.jpg`
  (shown when the link is shared; regenerate them if the name, title or photo changes), `robots.txt`, `sitemap.xml`
- shadcn components: `src/components/ui/` (add more with `npx shadcn add <name>`)
- Theme colors: `src/app/globals.css`

## Deploy

Every push to `main` runs lint, type-check and build, then deploys to GitHub Pages (`.github/workflows/deploy.yml`)
at https://saeedmaldosary.com (custom domain set in Settings -> Pages; DNS points at GitHub Pages).
If lint or the type-check fails, nothing is deployed and the live site keeps the last good version.
