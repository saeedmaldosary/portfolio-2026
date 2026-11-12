import { ArrowUpRight } from "lucide-react";
import { certifications, t, type Lang } from "@/lib/content";
import { Section } from "./section";

export function Certifications({ lang }: { lang: Lang }) {
  const c = t[lang];

  return (
    <Section id="certifications" title={c.certsTitle}>
      <ul className="divide-y rounded-xl border">
        {certifications.map((cert) => (
          <li key={cert.name} className="flex flex-wrap items-center justify-between gap-4 p-4">
            <div dir="ltr" className="text-start">
              <p className="font-medium">{cert.name}</p>
              <p className="text-sm text-muted-foreground">{cert.org}</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-muted-foreground">{cert.date[lang]}</span>
              {cert.url && (
                <a href={cert.url} target="_blank" rel="noopener" className="flex items-center gap-1 text-primary hover:underline">
                  {c.verify} <ArrowUpRight className="size-4" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
