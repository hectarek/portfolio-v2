"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Badge } from "@/app/_components/ui/badge";
import { getSkillIconUrl } from "@/src/lib/skill-icons";

interface TechnologyBadgeProps {
  technology: string;
  variant?: "default" | "secondary" | "outline";
  size?: "sm" | "md";
}

export function TechnologyBadge({
  technology,
  variant = "secondary",
  size = "sm",
}: TechnologyBadgeProps) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Determine theme for skill-icons
  const currentTheme = theme === "system" ? systemTheme : theme;
  const iconTheme = currentTheme === "dark" ? "dark" : "light";

  const iconUrl = getSkillIconUrl(technology, iconTheme);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sizeClasses = size === "sm" ? "text-xs" : "text-sm";
  const iconSize = size === "sm" ? 14 : 16;

  return (
    <Badge
      variant={variant}
      className={`flex items-center gap-1.5 font-medium ${sizeClasses} text-zinc-600 dark:text-zinc-400`}
    >
      {mounted && iconUrl && (
        <Image
          src={iconUrl}
          alt={`${technology} icon`}
          width={iconSize}
          height={iconSize}
          className="shrink-0"
          unoptimized
        />
      )}
      <span>{technology}</span>
    </Badge>
  );
}
