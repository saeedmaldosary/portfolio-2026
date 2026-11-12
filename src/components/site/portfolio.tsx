import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, BadgeCheck, FileText, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { certifications, links, projects, skillGroups, t, type Lang } from "@/lib/content";
import { GithubIcon, LinkedinIcon } from "./brand-icons";
import { RevealOnScroll } from "./reveal";
import { ThemeToggle } from "./theme-toggle";
import portrait from "@/assets/saeed.png";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Portfolio({ lang }: { lang: Lang }) {
  const c = t[lang];
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  const home = `${base}${lang === "ar" ? "/ar/" : "/"}`;
  const otherLangHref = lang === "en" ? `${base}/ar/` : `${base}/`;
  const navItems = [
    ["about", c.nav.about],
    ["work", c.nav.work],
    ["skills", c.nav.skills],
    ["certifications", c.nav.certs],
    ["contact", c.nav.contact],
  ] as const;

  const socials = [
    { href: links.github, label: "GitHub", Icon: GithubIcon },
    { href: links.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  ];

  return (
    <>
      <RevealOnScroll />

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href={home} className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid size-8 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
              S
            </span>
            <span className="hidden sm:inline">{c.name}</span>
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className={buttonVariants({ variant: "ghost", size: "lg" })}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href={otherLangHref}
              lang={lang === "en" ? "ar" : "en"}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              {c.switchLang}
            </a>
            <ThemeToggle label={c.theme} />
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
          <div className="glow pointer-events-none absolute inset-0" />
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Badge variant="outline" className="h-6 gap-2 bg-card/80 px-3 text-muted-foreground">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                {c.status}
              </Badge>
              <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight sm:text-6xl">
                <span className="block text-2xl font-medium text-muted-foreground sm:text-3xl">{c.hello}</span>
                <span className="bg-gradient-to-br from-foreground to-primary bg-clip-text text-transparent">
                  {c.name}
                </span>
              </h1>
              <p className="mt-4 text-lg font-medium text-primary">{c.role}</p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className={cn(buttonVariants({ size: "lg" }), "h-11 px-5 shadow-lg shadow-primary/25")}
                >
                  <Mail /> {c.contactCta}
                </a>
                <a
                  href={links.resume}
                  target="_blank"
                  rel="noopener"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-5")}
                >
                  <FileText /> {c.resume}
                </a>
                <div className="flex items-center gap-1 ps-1">
                  {socials.map(({ href, label, Icon }) => (
                    <Tooltip key={label}>
                      <TooltipTrigger
                        render={
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener"
                            aria-label={label}
                            className={cn(buttonVariants({ variant: "ghost", size: "icon-lg" }), "size-11")}
                          />
                        }
                      >
                        <Icon className="size-5" />
                      </TooltipTrigger>
                      <TooltipContent>{label}</TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm animate-in fade-in zoom-in-95 duration-700">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/40 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border bg-gradient-to-b from-primary/90 to-primary/60">
                <Image src={portrait} alt={c.name} priority className="w-full translate-y-2" />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
            <h2 className="reveal font-heading text-3xl font-bold tracking-tight sm:text-4xl">{c.aboutTitle}</h2>
            <div className="reveal space-y-5 text-lg leading-relaxed text-muted-foreground">
              {c.aboutBody.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <div className="grid grid-cols-3 gap-3 pt-6 sm:gap-4">
                {c.stats.map((s) => (
                  <Card key={s.label} size="sm">
                    <CardContent>
                      <p className="text-xs text-muted-foreground sm:text-sm">{s.label}</p>
                      <p className="mt-1 text-2xl font-bold text-foreground sm:text-3xl">{s.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="border-t py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="reveal flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">{c.workTitle}</h2>
                <p className="mt-2 text-muted-foreground">{c.workSub}</p>
              </div>
              <a
                href={`${links.github}?tab=repositories`}
                target="_blank"
                rel="noopener"
                className={buttonVariants({ variant: "link" })}
              >
                {c.allRepos} <Arrow />
              </a>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <a
                  key={p.name}
                  href={p.repo}
                  target="_blank"
                  rel="noopener"
                  className={cn("reveal group block", p.featured && "md:col-span-2")}
                >
                  <Card className="h-full transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:ring-primary/60">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between gap-4 text-xl">
                        {p.name}
                        <ArrowUpRight className="size-5 text-muted-foreground transition group-hover:text-primary" />
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">{p.desc[lang]}</CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto flex-wrap gap-2 border-t-0 bg-transparent" dir="ltr">
                      {p.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                          {tag}
                        </Badge>
                      ))}
                    </CardFooter>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-t py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="reveal font-heading text-3xl font-bold tracking-tight sm:text-4xl">{c.skillsTitle}</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {skillGroups.map((g) => (
                <Card key={g.key} className="reveal">
                  <CardHeader>
                    <CardTitle className="text-sm font-semibold tracking-wider text-primary uppercase">
                      {c.skillGroups[g.key]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2" dir="ltr">
                    {g.items.map((s) => (
                      <Badge key={s} variant="outline" className="h-7 px-3 text-sm">
                        {s}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="border-t py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="reveal font-heading text-3xl font-bold tracking-tight sm:text-4xl">{c.certsTitle}</h2>
            <Card className="reveal mt-10 gap-0 py-0">
              {certifications.map((cert, i) => (
                <div key={cert.url}>
                  {i > 0 && <Separator />}
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-center justify-between gap-4 p-5 transition hover:bg-muted/60 sm:px-6"
                  >
                    <div className="flex items-center gap-4">
                      <BadgeCheck className="size-6 shrink-0 text-primary" />
                      <div dir="ltr" className="text-start">
                        <p className="font-semibold">{cert.name[lang]}</p>
                        <p className="mt-0.5 text-sm text-muted-foreground">{cert.org}</p>
                      </div>
                    </div>
                    <span className="flex shrink-0 items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-primary">
                      {c.verify} <ArrowUpRight className="size-4" />
                    </span>
                  </a>
                </div>
              ))}
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Card className="reveal relative overflow-hidden py-14 text-center sm:py-20">
              <div className="glow pointer-events-none absolute inset-0" />
              <CardContent className="relative">
                <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-5xl">{c.contactTitle}</h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">{c.contactBody}</p>
                <a
                  href={links.email}
                  dir="ltr"
                  className={cn(buttonVariants({ size: "lg" }), "mt-8 h-12 px-6 text-base shadow-lg shadow-primary/25")}
                >
                  <Mail /> {links.emailText}
                </a>
                <div className="mt-6 flex justify-center gap-2">
                  {socials.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      <Icon className="size-4" /> {label}
                    </a>
                  ))}
                  <a href={links.resume} target="_blank" rel="noopener" className={buttonVariants({ variant: "ghost" })}>
                    <FileText /> {c.resume}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 text-sm text-muted-foreground sm:px-6">
          <p>
            © {new Date().getFullYear()} {c.name}
          </p>
          <p>{c.footer}</p>
        </div>
      </footer>
    </>
  );
}
