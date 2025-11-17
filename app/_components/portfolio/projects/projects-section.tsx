"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItemScale,
  viewportOptions,
} from "@/src/lib/animations";
import type { Project } from "@/src/types/portfolio";
import { ProjectCard } from "./project-card";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
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
          Featured Projects
        </motion.h2>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={staggerItemScale}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUp}
        >
          <a
            href="/projects"
            className="text-base font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
          >
            View all projects →
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
