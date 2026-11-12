"use client";

import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { t, type Lang } from "@/lib/content";
import { ThemeToggle } from "./theme-toggle";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const sectionIds = ["work", "experience", "skills", "certifications", "contact"] as const;

export function Header({ lang }: { lang: Lang }) {
  const c = t[lang];

  const sections = [
    { id: "work", label: c.nav.work },
    { id: "experience", label: c.nav.experience },
    { id: "skills", label: c.nav.skills },
    { id: "certifications", label: c.nav.certs },
    { id: "contact", label: c.nav.contact },
  ];

  // Highlight the menu link of the section being read: the last section whose top has passed
  // the middle of the screen. At the very bottom of the page, the last section (Contact).
  const [active, setActive] = useState("");
  useEffect(() => {
    function update() {
      const middle = window.innerHeight / 2;
      let current = "";
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= middle) current = id;
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      setActive(atBottom ? "contact" : current);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-4">
        {/* Logo: initials badge, links back to the top */}
        <a href="#top" aria-label={c.name} className="flex h-16 items-center">
          <span className="grid size-9 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            {c.initials}
          </span>
        </a>

        {/* Section links: hidden on phones to keep the header to one row */}
        <ul className="hidden gap-1 md:flex">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={buttonVariants({ variant: "ghost", className: active === section.id ? "bg-muted" : "" })}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Language switch + theme toggle */}
        <div className="flex items-center gap-1">
          <a href={lang === "en" ? `${base}/ar/` : `${base}/`} className={buttonVariants({ variant: "ghost" })}>
            {lang === "en" ? "العربية" : "English"}
          </a>
          <ThemeToggle label={c.theme} />
        </div>
      </nav>
    </header>
  );
}
