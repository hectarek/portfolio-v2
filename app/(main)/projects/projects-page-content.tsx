"use client";

import { motion } from "framer-motion";
import { ProjectsList } from "@/app/_components/portfolio/projects/projects-list";
import { fadeInUp, viewportOptions } from "@/src/lib/animations";
import type { Project } from "@/src/types/portfolio";

interface ProjectsPageContentProps {
  projects: Project[];
}

export function ProjectsPageContent({ projects }: ProjectsPageContentProps) {
  return (
    <motion.div
      className="px-4 py-16 sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeInUp}
    >
      <div className="mx-auto max-w-6xl">
        <motion.h1
          className="mb-12 text-center text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl"
          variants={fadeInUp}
        >
          Projects
        </motion.h1>
        <ProjectsList projects={projects} />
      </div>
    </motion.div>
  );
}
