import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import type { Profile } from "@/src/types/portfolio";

interface SocialLinksProps {
  profile: Profile;
  variant?: "default" | "footer";
}

export function SocialLinks({
  profile,
  variant = "default",
}: SocialLinksProps) {
  const iconSize = variant === "footer" ? 18 : 20;
  const linkClass =
    variant === "footer"
      ? "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      : "text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100";

  return (
    <div className="flex flex-wrap items-center gap-4">
      {profile.social.github && (
        <Link
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label="GitHub"
        >
          <Github size={iconSize} />
        </Link>
      )}
      {profile.social.linkedin && (
        <Link
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label="LinkedIn"
        >
          <Linkedin size={iconSize} />
        </Link>
      )}
      {profile.social.twitter && (
        <Link
          href={profile.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label="Twitter"
        >
          <Twitter size={iconSize} />
        </Link>
      )}
      {profile.email && (
        <Link
          href={`mailto:${profile.email}`}
          className={linkClass}
          aria-label="Email"
        >
          <Mail size={iconSize} />
        </Link>
      )}
    </div>
  );
}
