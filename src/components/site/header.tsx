"use client";

import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { t, type Lang } from "@/lib/content";
import { SiteControls } from "./site-controls";

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
    // Hidden on phones (shown from md up); on phones the language and theme buttons sit at the top of the hero.
    <header className="sticky top-0 z-50 hidden border-b bg-background/80 backdrop-blur md:block">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-4">
        {/* Logo: initials badge, links back to the top */}
        <a href="#top" aria-label={c.name} className="flex h-16 items-center">
          <span className="grid size-9 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            {c.initials}
          </span>
        </a>

        {/* Section links */}
        <ul className="flex gap-1">
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

        <SiteControls lang={lang} />
      </nav>
    </header>
  );
}
