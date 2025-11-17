"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportOptions } from "@/src/lib/animations";
import type { SkillsData } from "@/src/types/portfolio";
import { SkillsGrid } from "./skills-grid";

interface SkillsSectionProps {
  skills: SkillsData;
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <motion.section
      className="px-4 py-16 sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeInUp}
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl"
          variants={fadeInUp}
        >
          Skills
        </motion.h2>
        <SkillsGrid categories={skills.categories} />
      </div>
    </motion.section>
  );
}
