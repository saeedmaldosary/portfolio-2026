import { buttonVariants } from "@/components/ui/button";
import { t, type Lang } from "@/lib/content";
import { ThemeToggle } from "./theme-toggle";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Header({ lang }: { lang: Lang }) {
  const c = t[lang];
  const otherLang = lang === "en" ? "ar" : "en";
  const otherLangHref = otherLang === "ar" ? `${base}/ar/` : `${base}/`;

  const links = [
    { href: "#about", label: c.nav.about },
    { href: "#work", label: c.nav.work },
    { href: "#skills", label: c.nav.skills },
    { href: "#certifications", label: c.nav.certs },
    { href: "#contact", label: c.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <a href="#top" className="font-semibold">
          {c.name}
        </a>

        <ul className="hidden gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={buttonVariants({ variant: "ghost" })}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={otherLangHref} lang={otherLang} className={buttonVariants({ variant: "outline" })}>
            {c.switchLang}
          </a>
          <ThemeToggle label={c.theme} />
        </div>
      </nav>
    </header>
  );
}
