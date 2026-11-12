import { buttonVariants } from "@/components/ui/button";
import { t, type Lang } from "@/lib/content";
import { ThemeToggle } from "./theme-toggle";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Language switch + theme toggle. Used in the header (larger screens) and at the top of the hero (phones). */
export function SiteControls({ lang }: { lang: Lang }) {
  return (
    <div className="flex items-center gap-1">
      <a href={lang === "en" ? `${base}/ar/` : `${base}/`} className={buttonVariants({ variant: "ghost" })}>
        {lang === "en" ? "العربية" : "English"}
      </a>
      <ThemeToggle label={t[lang].theme} />
    </div>
  );
}
