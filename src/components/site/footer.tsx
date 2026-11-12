import { t, type Lang } from "@/lib/content";

export function Footer({ lang }: { lang: Lang }) {
  const c = t[lang];

  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-2 px-4 py-6 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {c.name}
        </p>
      </div>
    </footer>
  );
}
