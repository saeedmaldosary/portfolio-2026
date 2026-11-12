import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { t, type Lang } from "@/lib/content";
import portrait from "@/assets/saeed.webp";

export function Hero({ lang }: { lang: Lang }) {
  const c = t[lang];

  return (
    // On larger screens the hero fills the first screen (minus the 4rem header).
    <section
      id="top"
      className="mx-auto grid max-w-5xl items-center gap-12 px-4 py-16 md:min-h-[calc(100svh-4rem)] md:grid-cols-[1fr_auto]"
    >
      <div>
        <h1 className="text-5xl font-bold tracking-tight rtl:tracking-normal md:text-6xl">{c.name}</h1>
        <p className="mt-5 text-xl leading-relaxed md:text-2xl">{c.headline}</p>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className={buttonVariants({ size: "lg" })}>
            <Mail /> {c.contactCta}
          </a>
          <a href="#work" className={buttonVariants({ size: "lg", variant: "outline" })}>
            <ArrowDown /> {c.seeWork}
          </a>
        </div>
      </div>

      <Image
        src={portrait}
        alt={c.name}
        priority
        className="mx-auto aspect-[4/5] w-full max-w-sm rounded-2xl bg-primary/80 object-cover object-top md:w-80"
      />
    </section>
  );
}
