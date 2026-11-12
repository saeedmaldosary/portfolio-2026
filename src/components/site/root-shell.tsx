import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { experience, links, t, type Lang } from "@/lib/content";

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
    // How the link looks when it is shared (LinkedIn, WhatsApp, Slack...): title, description and a card image.
    openGraph: {
      type: "website",
      title: c.metaTitle,
      description: c.metaDesc,
      url: `${base}${path}`,
      locale: lang === "ar" ? "ar_SA" : "en_US",
      images: [{ url: `${base}/og-${lang}.jpg`, width: 1200, height: 630, alt: c.name }],
    },
    twitter: { card: "summary_large_image" },
  };
}

// Structured data (schema.org): tells search engines who this site is about.
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: t.en.name,
  alternateName: t.ar.name,
  jobTitle: experience[0].role.en,
  url: siteUrl,
  image: `${siteUrl}${base}/og-en.jpg`,
  sameAs: [links.linkedin],
};

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
