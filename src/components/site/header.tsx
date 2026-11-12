import { t, type Lang } from "@/lib/content";
import { LanguageSwitch } from "./language-switch";
import { ThemeToggle } from "./theme-toggle";

export function Header({ lang }: { lang: Lang }) {
  const c = t[lang];

  const links = [
    { href: "#experience", label: c.nav.experience },
    { href: "#skills", label: c.nav.skills },
    { href: "#certifications", label: c.nav.certs },
    { href: "#contact", label: c.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 px-4">
        {/* Logo: initials badge + name and role */}
        <a href="#top" className="flex h-16 items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            {c.initials}
          </span>
          <span className="leading-tight">
            <span className="block font-semibold">{c.name}</span>
            <span className="block text-xs text-muted-foreground">{c.shortRole}</span>
          </span>
        </a>

        {/* Section links: a second row on phones, inline on larger screens */}
        <ul className="order-last flex w-full justify-center gap-6 pb-3 text-sm text-muted-foreground md:order-none md:w-auto md:pb-0">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Language switch + theme toggle */}
        <div className="flex items-center gap-2">
          <LanguageSwitch current={lang} />
          <ThemeToggle label={c.theme} />
        </div>
      </nav>
    </header>
  );
}
