"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { education, experience, t, type Lang } from "@/lib/content";
import { Section } from "./section";

export function Experience({ lang }: { lang: Lang }) {
  const c = t[lang];
  // false = short summary, true = full details from the CV
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Section id="experience" title={c.experienceTitle}>
      <button onClick={() => setShowDetails(!showDetails)} className={buttonVariants({ variant: "outline", size: "sm" })}>
        {showDetails ? c.showSummary : c.showDetails}
      </button>

      <div className="mt-8 space-y-12">
        {experience.map((job) => (
          <article key={job.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">
                {job.role[lang]} · {job.company}{" "}
                <span className="text-base font-normal text-muted-foreground">({job.companyNote[lang]})</span>
              </h3>
              <p className="text-sm text-muted-foreground">{job.period[lang]}</p>
            </div>
            <p className="mt-1 text-sm text-primary">
              <span dir="ltr">{job.stack}</span>
            </p>
            <ul className="mt-4 list-disc space-y-2 ps-5 leading-relaxed text-muted-foreground">
              {(showDetails ? job.details : job.points).map((point) => (
                <li key={point.en}>{point[lang]}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h3 className="mt-14 text-2xl font-bold">{c.educationTitle}</h3>
      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="font-semibold">{education.school[lang]}</p>
          <p className="text-muted-foreground">{education.degree[lang]}</p>
        </div>
        <p className="text-sm text-muted-foreground">{education.period[lang]}</p>
      </div>
    </Section>
  );
}
