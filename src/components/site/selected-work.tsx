import { ArrowDown } from "lucide-react";
import { caseStudies, t, type Lang } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Section } from "./section";

/**
 * A simple pipeline diagram: one box per step with an arrow between boxes; the focus step is purple.
 * Phones: top to bottom. Larger screens: one row, and the arrow turns to point along the reading direction.
 */
function Flow({ steps, focus }: { steps: string[]; focus: string }) {
  return (
    <ol className="flex flex-col items-center gap-1 md:flex-row md:justify-center md:gap-2">
      {steps.map((step, index) => (
        <li key={step} className="flex flex-col items-center gap-1 md:flex-row md:gap-2">
          {index > 0 && <ArrowDown className="size-4 shrink-0 text-muted-foreground md:-rotate-90 md:rtl:rotate-90" />}
          <span
            dir="ltr"
            className={cn(
              "rounded-md border px-3 py-2 text-center text-sm font-medium whitespace-nowrap",
              step === focus ? "border-primary bg-primary text-primary-foreground" : "bg-background",
            )}
          >
            {step}
          </span>
        </li>
      ))}
    </ol>
  );
}

export function SelectedWork({ lang }: { lang: Lang }) {
  const c = t[lang];

  return (
    <Section id="work" title={c.workTitle} subtitle={c.workSub} className="bg-muted/40">
      <div className="divide-y">
        {caseStudies.map((study) => (
          <article key={study.focus} className="py-10 first:pt-0 last:pb-0">
            <h3 className="text-xl font-semibold">{study.title[lang]}</h3>
            <div className="mt-3 grid gap-2 leading-relaxed text-muted-foreground md:grid-cols-2 md:gap-10">
              <p>
                <span className="font-medium text-foreground">{c.challenge}: </span>
                {study.challenge[lang]}
              </p>
              <p>
                <span className="font-medium text-foreground">{c.approach}: </span>
                {study.approach[lang]}
              </p>
            </div>
            <figure className="mt-6 rounded-xl border bg-background p-5">
              <Flow steps={study.steps} focus={study.focus} />
            </figure>
          </article>
        ))}
      </div>
    </Section>
  );
}
