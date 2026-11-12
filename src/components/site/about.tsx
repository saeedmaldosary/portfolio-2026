import { t, type Lang } from "@/lib/content";
import { Section } from "./section";

export function About({ lang }: { lang: Lang }) {
  const c = t[lang];

  return (
    <Section id="about" title={c.aboutTitle}>
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
        {c.aboutBody.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
