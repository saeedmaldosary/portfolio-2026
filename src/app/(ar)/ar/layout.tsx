import "../../globals.css";
import { RootShell, buildMetadata } from "@/components/site/root-shell";

export const metadata = buildMetadata("ar");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="ar">{children}</RootShell>;
}
