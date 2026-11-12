import "../globals.css";
import { Almarai, Geist } from "next/font/google";
import { RootShell, buildMetadata } from "@/components/site/root-shell";

// English text uses Geist. The Arabic font is only for Arabic words on this page (the "العربية"
// button, marked lang="ar"), so it is not preloaded: the browser downloads it when it is needed.
const geist = Geist({ subsets: ["latin"] });
const almarai = Almarai({ weight: "400", preload: false });

export const metadata = buildMetadata("en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell lang="en" fontFamily={geist.style.fontFamily} arabicFontFamily={almarai.style.fontFamily}>
      {children}
    </RootShell>
  );
}
