import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { certifications, t, type Lang } from "@/lib/content";
import { Section } from "./section";

export function Certifications({ lang }: { lang: Lang }) {
  const c = t[lang];

  return (
    <Section id="certifications" title={c.certsTitle}>
      <ul className="divide-y rounded-xl border">
        {certifications.map((cert) => (
          <li key={cert.name} className="flex flex-wrap items-center justify-between gap-4 p-4">
            <div>
              {/* dir="ltr" on the English text only, so it keeps its order but follows the page alignment */}
              <p className="font-medium">
                <span dir="ltr">{cert.name}</span>
              </p>
              <p className="text-sm text-muted-foreground">
                <span dir="ltr">{cert.org}</span>
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-muted-foreground">{cert.date[lang]}</span>
              {cert.url && (
                <a href={cert.url} target="_blank" rel="noopener" className={buttonVariants({ variant: "ghost", size: "sm", className: "text-primary" })}>
                  {c.verify} <ArrowUpRight className="size-4 rtl:-scale-x-100" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
