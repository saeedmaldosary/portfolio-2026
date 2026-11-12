import "../../globals.css";
import { Almarai } from "next/font/google";
import { RootShell, buildMetadata } from "@/components/site/root-shell";

// Arabic uses Almarai for everything, so English words like "Next.js" match the Arabic around them.
// Almarai has no 500 or 600 weight: the browser uses 400 for medium text and 700 for semibold and bold.
const almarai = Almarai({ subsets: ["arabic", "latin"], weight: ["400", "700"] });

export const metadata = buildMetadata("ar");

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell lang="ar" fontFamily={almarai.style.fontFamily}>
      {children}
    </RootShell>
  );
}
