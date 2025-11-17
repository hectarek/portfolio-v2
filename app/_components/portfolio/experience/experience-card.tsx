"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { TechnologyBadge } from "@/app/_components/portfolio/shared/technology-badge";
import { Button } from "@/app/_components/ui/button";
import type { Experience } from "@/src/types/portfolio";

interface ExperienceCardProps {
  experience: Experience;
}

const INITIAL_TECH_COUNT = 8;

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMoreTech = experience.technologies.length > INITIAL_TECH_COUNT;
  const visibleTech = isExpanded
    ? experience.technologies
    : experience.technologies.slice(0, INITIAL_TECH_COUNT);

  // Split description into bullet points
  // Split on periods followed by space and capital letter, or on em dashes
  const bulletPoints = experience.description
    .split(/(?<=\.)\s+(?=[A-Z])|(?<=—)\s+/)
    .map((point) => point.trim())
    .filter((point) => point.length > 0);

  return (
    <div className="relative border-l-2 border-zinc-200 pl-6 pb-8 dark:border-zinc-800 last:pb-0">
      <div className="absolute -left-2 top-0 h-4 w-4 rounded-full border-2 border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900" />
      <div className="mb-2">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {experience.role}
        </h3>
        <p className="text-base font-medium text-zinc-600 dark:text-zinc-400">
          {experience.company}
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          {experience.period}
        </p>
      </div>
      <ul className="mb-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
        {bulletPoints.map((point) => (
          <li
            key={`${experience.company}-${experience.role}-${point.slice(0, 20)}`}
          >
            {point}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {visibleTech.map((tech) => (
          <TechnologyBadge
            key={tech}
            technology={tech}
            variant="secondary"
            size="sm"
          />
        ))}
      </div>
      {hasMoreTech && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 h-auto p-1 text-xs text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          {isExpanded ? (
            <>
              See less
              <ChevronDown className="ml-1 h-3 w-3 rotate-180" />
            </>
          ) : (
            <>
              See more ({experience.technologies.length - INITIAL_TECH_COUNT})
              <ChevronDown className="ml-1 h-3 w-3" />
            </>
          )}
        </Button>
      )}
    </div>
  );
}
