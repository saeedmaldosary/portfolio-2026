import Image from "next/image";
import { ArrowDown, Check, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { t, type Lang } from "@/lib/content";
import banner from "@/assets/hero-banner.webp";

export function Hero({ lang }: { lang: Lang }) {
  const c = t[lang];

  return (
    // The banner photo is dark, so the hero always uses the dark theme ("dark" class) in both modes.
    // Background colour = the navy of the photo, so the area around it blends in.
    <section id="top" className="dark relative overflow-hidden bg-[#0f1735] text-foreground">
      <Image
        src={banner}
        alt={c.name}
        priority
        className="aspect-[4/3] w-full object-cover object-left sm:aspect-[2/1]"
      />

      {/* Text: below the photo on smaller screens, over the empty right side of the photo on large screens */}
      <div className="mx-auto max-w-5xl px-4 pt-8 pb-16 xl:absolute xl:inset-y-0 xl:right-[6%] xl:flex xl:w-[40%] xl:max-w-none xl:items-center xl:p-0">
        <div>
          <h1 className="text-5xl font-bold tracking-tight rtl:tracking-normal md:text-6xl">{c.name}</h1>
          <p className="mt-5 text-xl leading-relaxed md:text-2xl">{c.headline}</p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{c.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className={buttonVariants({ size: "lg" })}>
              <Mail /> {c.contactCta}
            </a>
            <a href="#work" className={buttonVariants({ size: "lg", variant: "outline" })}>
              <ArrowDown /> {c.seeWork}
            </a>
          </div>

          {/* Quick credibility facts a CTO would otherwise only find further down */}
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t pt-6 text-sm text-muted-foreground">
            {c.credentials.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="size-4 text-primary" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
