import { buttonVariants } from "@/components/ui/button";
import { links } from "@/lib/content";
import { LinkedinIcon } from "./brand-icons";

export function SocialLinks() {
  return (
    <a href={links.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className={buttonVariants({ variant: "ghost", size: "icon-lg" })}>
      <LinkedinIcon className="size-5" />
    </a>
  );
}
