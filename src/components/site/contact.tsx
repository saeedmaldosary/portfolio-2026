import { Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { links, t, type Lang } from "@/lib/content";
import { Section } from "./section";

export function Contact({ lang }: { lang: Lang }) {
  const c = t[lang];

  return (
    <Section id="contact" title={c.contactTitle} subtitle={c.contactBody}>
      <a href={links.email} dir="ltr" className={buttonVariants({ size: "lg" })}>
        <Mail /> {links.emailText}
      </a>
    </Section>
  );
}
