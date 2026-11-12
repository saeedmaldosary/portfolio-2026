import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { t, type Lang } from "@/lib/content";

const siteUrl = process.env.SITE_URL ?? "https://saeedmaldosary.com";
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function buildMetadata(lang: Lang): Metadata {
  const c = t[lang];
  const path = lang === "ar" ? "/ar/" : "/";
  return {
    metadataBase: new URL(siteUrl),
    title: c.metaTitle,
    description: c.metaDesc,
    icons: { icon: `${base}/favicon.svg` },
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

// Each language's layout chooses the fonts. They reach the CSS as variables:
// --font-main is the page font (Tailwind's font-sans), --font-arabic is for Arabic words on the English page.
export function RootShell({
  lang,
  fontFamily,
  arabicFontFamily,
  children,
}: {
  lang: Lang;
  fontFamily: string;
  arabicFontFamily?: string;
  children: React.ReactNode;
}) {
  return (
    <html
      lang={lang}
      dir={t[lang].dir}
      suppressHydrationWarning
      className="antialiased"
      style={{ "--font-main": fontFamily, "--font-arabic": arabicFontFamily } as React.CSSProperties}
    >
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
