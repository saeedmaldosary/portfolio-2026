import { Badge } from "@/components/ui/badge";
import { skillGroups, t, type Lang } from "@/lib/content";
import { Section } from "./section";

export function Skills({ lang }: { lang: Lang }) {
  const c = t[lang];

  return (
    <Section id="skills" title={c.skillsTitle}>
      <div className="grid gap-8 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.key}>
            <h3 className="font-semibold">{c.skillGroups[group.key]}</h3>
            <div className="mt-3 flex flex-wrap gap-2" dir="ltr">
              {group.items.map((skill) => (
                <Badge key={skill} variant="outline" className="h-7 px-3 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
