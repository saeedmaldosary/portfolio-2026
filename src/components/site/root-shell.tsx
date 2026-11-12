import type { Metadata } from "next";
import { Almarai, Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { t, type Lang } from "@/lib/content";

// One font per language, both exposed as --font-main (used by Tailwind's font-sans).
// English: Geist. Arabic: Almarai, a Saudi-designed typeface that also has Latin
// letters, so mixed text like "Next.js" inside an Arabic sentence matches.
const geist = Geist({ variable: "--font-main", subsets: ["latin"] });
const almarai = Almarai({ variable: "--font-main", subsets: ["arabic", "latin"], weight: ["300", "400", "700", "800"] });
const fonts = { en: geist, ar: almarai };

const siteUrl = process.env.SITE_URL ?? "https://saeedmaldosary.com";
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function buildMetadata(lang: Lang): Metadata {
  const c = t[lang];
  const path = lang === "ar" ? "/ar/" : "/";
  return {
    metadataBase: new URL(siteUrl),
    title: c.metaTitle,
    description: c.metaDesc,
    icons: { icon: `${base}/favicon.ico` },
    alternates: {
      canonical: `${base}${path}`,
      languages: { en: `${base}/`, ar: `${base}/ar/` },
    },
    openGraph: {
      type: "website",
      title: c.metaTitle,
      description: c.metaDesc,
      url: `${base}${path}`,
      locale: lang === "ar" ? "ar_SA" : "en_US",
    },
  };
}

export function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html
      lang={lang}
      dir={t[lang].dir}
      suppressHydrationWarning
      className={`${fonts[lang].variable} antialiased`}
    >
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
