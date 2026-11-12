import type { Metadata } from "next";
import { Almarai, Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { t, type Lang } from "@/lib/content";

const geist = Geist({ subsets: ["latin"] });
const almarai = Almarai({ subsets: ["arabic", "latin"], weight: ["300", "400", "700", "800"] });

// The page font, passed to CSS as --font-main (used by Tailwind's font-sans).
// English: Geist, with Almarai for any Arabic letters (like the "العربية" button).
// Arabic: Almarai for everything, so words like "Next.js" match the Arabic around them.
const fontFamily = {
  en: `${geist.style.fontFamily}, ${almarai.style.fontFamily}`,
  ar: almarai.style.fontFamily,
};

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
      className="antialiased"
      style={{ "--font-main": fontFamily[lang] } as React.CSSProperties}
    >
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
