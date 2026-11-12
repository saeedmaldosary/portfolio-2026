import Image from "next/image";
import { FileText, Mail, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { links, t, type Lang } from "@/lib/content";
import portrait from "@/assets/saeed.png";
import { SocialLinks } from "./social-links";

export function Hero({ lang }: { lang: Lang }) {
  const c = t[lang];

  return (
    <section id="top" className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
      <div>
        <p className="text-lg text-muted-foreground">{c.hello}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{c.name}</h1>
        <p className="mt-3 text-lg font-medium text-primary">{c.role}</p>
        <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="size-4" /> {c.location}
        </p>
        <p className="mt-6 leading-relaxed text-muted-foreground">{c.summary}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#contact" className={buttonVariants({ size: "lg" })}>
            <Mail /> {c.contactCta}
          </a>
          <a href={links.resume} target="_blank" rel="noopener" className={buttonVariants({ size: "lg", variant: "outline" })}>
            <FileText /> {c.resume}
          </a>
          <SocialLinks />
        </div>
      </div>

      <Image
        src={portrait}
        alt={c.name}
        priority
        className="mx-auto w-full max-w-sm rounded-2xl bg-primary/80"
      />
    </section>
  );
}
