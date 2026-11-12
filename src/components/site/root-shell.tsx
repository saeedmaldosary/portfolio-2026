import type { Metadata } from "next";
import { Geist, Vazirmatn } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { t, type Lang } from "@/lib/content";

// One font per language, both exposed as --font-main (used by Tailwind's font-sans).
// English: Geist. Arabic: Vazirmatn, which also has Latin letters, so mixed text
// like "Next.js" inside an Arabic sentence matches the Arabic around it.
const geist = Geist({ variable: "--font-main", subsets: ["latin"] });
const vazirmatn = Vazirmatn({ variable: "--font-main", subsets: ["arabic", "latin"] });
const fonts = { en: geist, ar: vazirmatn };

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
