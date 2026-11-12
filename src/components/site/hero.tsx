import Image from "next/image";
import { Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { links, t, type Lang } from "@/lib/content";
import portrait from "@/assets/saeed.webp";
import { ThemeToggle } from "./theme-toggle";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Hero({ lang }: { lang: Lang }) {
  const c = t[lang];

  return (
    <section id="top" className="mx-auto max-w-5xl px-4">
      {/* The page has no header: the language switch and theme toggle sit in the top corner */}
      <div className="flex items-center justify-end gap-1 pt-4">
        {/* lang tells the browser this link's text is in the other language (it also picks the right font) */}
        <a
          href={lang === "en" ? `${base}/ar/` : `${base}/`}
          lang={lang === "en" ? "ar" : "en"}
          className={buttonVariants({ variant: "ghost" })}
        >
          {lang === "en" ? "العربية" : "English"}
        </a>
        <ThemeToggle label={c.theme} />
      </div>

      {/* Text and photo: stacked on phones; side by side on larger screens */}
      <div className="grid items-center gap-12 pt-6 pb-16 md:grid-cols-[1fr_auto] md:pt-12 md:pb-20">
        <div>
          <h1 className="text-5xl font-bold tracking-tight rtl:tracking-normal md:text-6xl">{c.name}</h1>
          <p className="mt-5 text-xl leading-relaxed md:text-2xl">{c.headline}</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className={buttonVariants({ size: "lg" })}>
              <Mail /> {c.contactCta}
            </a>
            <a href={links.resume} target="_blank" rel="noopener" className={buttonVariants({ size: "lg", variant: "outline" })}>
              {c.resume}
            </a>
          </div>
        </div>

        <Image
          src={portrait}
          alt={c.name}
          loading="eager"
          fetchPriority="high"
          className="mx-auto aspect-[4/5] w-full max-w-sm rounded-2xl bg-primary/80 object-cover object-top md:w-80"
        />
      </div>
    </section>
  );
}
