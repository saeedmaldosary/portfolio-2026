import "../globals.css";
import { RootShell, buildMetadata } from "@/components/site/root-shell";

export const metadata = buildMetadata("en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
