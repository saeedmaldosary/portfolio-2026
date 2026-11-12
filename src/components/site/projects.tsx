import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { links, projects, t, type Lang } from "@/lib/content";
import { Section } from "./section";

export function Projects({ lang }: { lang: Lang }) {
  const c = t[lang];

  return (
    <Section id="projects" title={c.projectsTitle} subtitle={c.projectsSub}>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name}>
            <CardHeader>
              <CardTitle className="text-lg">{project.name}</CardTitle>
              <CardDescription>{project.desc[lang]}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2" dir="ltr">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <a href={project.repo} target="_blank" rel="noopener" className={buttonVariants({ variant: "link" })}>
                {c.viewCode} <ArrowUpRight />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <a href={links.github} target="_blank" rel="noopener" className={buttonVariants({ variant: "outline", className: "mt-6" })}>
        {c.allRepos}
      </a>
    </Section>
  );
}
