import Image from "next/image";
import { Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { links, t, type Lang } from "@/lib/content";
import portrait from "@/assets/saeed.webp";

export function Hero({ lang }: { lang: Lang }) {
  const c = t[lang];

  return (
    // On larger screens the hero fills the first screen (minus the 4rem header).
    <section
      id="top"
      className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-12 md:min-h-[calc(100svh-4rem)] md:grid-cols-[1fr_auto] md:gap-12 md:py-16"
    >
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

      {/* Phones: a small photo above the name. Larger screens: the photo card on the side. */}
      <Image
        src={portrait}
        alt={c.name}
        priority
        className="order-first aspect-[4/5] w-36 rounded-2xl bg-primary/80 object-cover object-top md:order-none md:mx-auto md:w-80"
      />
    </section>
  );
}
