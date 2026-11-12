import { buttonVariants } from "@/components/ui/button";
import { t, type Lang } from "@/lib/content";
import { ThemeToggle } from "./theme-toggle";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
        {/* Logo: initials badge, links back to the top */}
        <a href="#top" aria-label={c.name} className="flex h-16 items-center">
          <span className="grid size-9 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            {c.initials}
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
          <a href={lang === "en" ? `${base}/ar/` : `${base}/`} className={buttonVariants({ variant: "outline", size: "sm" })}>
            {lang === "en" ? "العربية" : "English"}
          </a>
          <ThemeToggle label={c.theme} />
        </div>
      </nav>
    </header>
  );
}
