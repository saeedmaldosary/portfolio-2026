import { cn } from "@/lib/utils";
import type { Lang } from "@/lib/content";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const options: { lang: Lang; label: string; href: string; name: string }[] = [
  { lang: "en", label: "EN", href: `${base}/`, name: "English" },
  { lang: "ar", label: "ع", href: `${base}/ar/`, name: "العربية" },
];

/** Two-option toggle: the current language is highlighted, the other one is a link. */
export function LanguageSwitch({ current }: { current: Lang }) {
  return (
    <div className="flex items-center rounded-full border p-0.5 text-sm" dir="ltr">
      {options.map((option) => (
        <a
          key={option.lang}
          href={option.href}
          lang={option.lang}
          aria-label={option.name}
          aria-current={option.lang === current ? "page" : undefined}
          className={cn(
            "grid h-7 min-w-9 place-items-center rounded-full px-2 font-medium transition-colors",
            option.lang === current
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {option.label}
        </a>
      ))}
    </div>
  );
}
