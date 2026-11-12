import { ArrowUpRight } from "lucide-react";
import { certifications, t, type Lang } from "@/lib/content";
import { Section } from "./section";

export function Certifications({ lang }: { lang: Lang }) {
  const c = t[lang];

  return (
    <Section id="certifications" title={c.certsTitle}>
      <ul className="divide-y rounded-xl border">
        {certifications.map((cert) => (
          <li key={cert.url}>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-between gap-4 p-4 hover:bg-muted"
            >
              <span dir="ltr" className="text-start">
                <span className="block font-medium">{cert.name[lang]}</span>
                <span className="block text-sm text-muted-foreground">{cert.org}</span>
              </span>
              <span className="flex shrink-0 items-center gap-1 text-sm text-primary">
                {c.verify} <ArrowUpRight className="size-4" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
