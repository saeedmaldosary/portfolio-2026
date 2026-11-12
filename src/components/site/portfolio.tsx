import type { Lang } from "@/lib/content";
import { Certifications } from "./certifications";
import { Contact } from "./contact";
import { Experience } from "./experience";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";
import { Skills } from "./skills";

/** The whole one-page site. Used by both the English (/) and Arabic (/ar) routes. */
export function Portfolio({ lang }: { lang: Lang }) {
  return (
    <>
      <Header lang={lang} />
      <main>
        <Hero lang={lang} />
        <Experience lang={lang} />
        <Skills lang={lang} />
        <Certifications lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
