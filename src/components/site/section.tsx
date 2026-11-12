/** Shared wrapper so every section has the same width, spacing and heading style. */
export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-bold tracking-tight rtl:tracking-normal">{title}</h2>
        {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
