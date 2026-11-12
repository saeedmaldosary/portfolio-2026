import Image from "next/image";
import { FileText, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { links, t, type Lang } from "@/lib/content";
import portrait from "@/assets/saeed.webp";

export function Hero({ lang }: { lang: Lang }) {
  const c = t[lang];

  return (
    <section id="top" className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight rtl:tracking-normal sm:text-5xl">{c.name}</h1>
        <p className="mt-4 text-xl leading-relaxed">{c.headline}</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">{c.intro}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#contact" className={buttonVariants({ size: "lg" })}>
            <Mail /> {c.contactCta}
          </a>
          <a href={links.resume} target="_blank" rel="noopener" className={buttonVariants({ size: "lg", variant: "outline" })}>
            <FileText /> {c.resume}
          </a>
        </div>
      </div>

      <Image
        src={portrait}
        alt={c.name}
        priority
        className="mx-auto aspect-[4/5] w-full max-w-sm rounded-2xl bg-primary/80 object-cover object-top"
      />
    </section>
  );
}
