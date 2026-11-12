import { Badge } from "@/components/ui/badge";
import { skillGroups, t, type Lang } from "@/lib/content";
import { Section } from "./section";

export function Skills({ lang }: { lang: Lang }) {
  const c = t[lang];

  return (
    <Section id="skills" title={c.skillsTitle}>
      <dl className="divide-y rounded-xl border">
        {skillGroups.map((group) => (
          <div key={group.title.en} className="grid gap-3 p-4 sm:grid-cols-[12rem_1fr]">
            <dt className="font-semibold">{group.title[lang]}</dt>
            <dd className="flex flex-wrap gap-2" dir="ltr">
              {group.items.map((skill) => (
                <Badge key={skill} variant="secondary" className="h-7 px-3 text-sm">
                  {skill}
                </Badge>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
