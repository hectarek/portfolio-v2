"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/app/_components/ui/button";
import {
  staggerContainer,
  staggerItem,
  viewportOptions,
} from "@/src/lib/animations";
import type { SkillCategory } from "@/src/types/portfolio";
import { SkillBadge } from "./skill-badge";

interface SkillsGridProps {
  categories: SkillCategory[];
}

const INITIAL_SKILLS_COUNT = 6;

export function SkillsGrid({ categories }: SkillsGridProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(),
  );

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryName)) {
        newSet.delete(categoryName);
      } else {
        newSet.add(categoryName);
      }
      return newSet;
    });
  };

  return (
    <motion.div
      className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={staggerContainer}
    >
      {categories.map((category) => {
        const isExpanded = expandedCategories.has(category.name);
        const hasMoreSkills = category.skills.length > INITIAL_SKILLS_COUNT;
        const visibleSkills = isExpanded
          ? category.skills
          : category.skills.slice(0, INITIAL_SKILLS_COUNT);

        return (
          <motion.div
            key={category.name}
            className="space-y-3"
            variants={staggerItem}
          >
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {visibleSkills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
            {hasMoreSkills && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleCategory(category.name)}
                className="mt-2 h-auto p-1 text-xs text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {isExpanded ? (
                  <>
                    See less
                    <ChevronDown className="ml-1 h-3 w-3 rotate-180" />
                  </>
                ) : (
                  <>
                    See more ({category.skills.length - INITIAL_SKILLS_COUNT})
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </>
                )}
              </Button>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
