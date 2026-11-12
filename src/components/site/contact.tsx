import { Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { links, t, type Lang } from "@/lib/content";
import { LinkedinIcon } from "./brand-icons";
import { Section } from "./section";

export function Contact({ lang }: { lang: Lang }) {
  const c = t[lang];

  return (
    // Min height so the header can highlight "Contact" when scrolled to the bottom.
    <Section id="contact" title={c.contactTitle} subtitle={c.contactBody} className="md:min-h-[60svh]">
      <div className="flex flex-wrap items-center gap-3">
        <a href={links.email} dir="ltr" className={buttonVariants({ size: "lg" })}>
          <Mail /> {links.emailText}
        </a>
        <a href={links.linkedin} target="_blank" rel="noopener" className={buttonVariants({ size: "lg", variant: "outline" })}>
          <LinkedinIcon className="size-4" /> LinkedIn
        </a>
      </div>
    </Section>
  );
}
