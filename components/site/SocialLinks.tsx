import { Facebook, Instagram, Linkedin } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

const links = [
  { href: site.social.instagram, label: "Instagram", Icon: Instagram },
  { href: site.social.facebook, label: "Facebook", Icon: Facebook },
  { href: site.social.linkedin, label: "LinkedIn", Icon: Linkedin },
];

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center", className)}>
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Paul E. on ${label}`}
            className="inline-flex transition-colors hover:text-gold"
          >
            <Icon className={cn("size-4", iconClassName)} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
