"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  staggerItem,
  viewportOptions,
} from "@/src/lib/animations";

export function BrandSection() {
  return (
    <motion.section
      className="px-4 py-12"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={staggerContainer}
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-6 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl"
          variants={staggerItem}
        >
          Brand & Personality
        </motion.h2>
        <motion.div
          className="prose prose-zinc dark:prose-invert max-w-none"
          variants={staggerItem}
        >
          <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            I build modern, scalable systems for learning and
            operations—combining engineering clarity, product strategy, and
            educational impact.
          </p>
          <div className="mt-6 space-y-4">
            <motion.div variants={staggerItem}>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                Voice Qualities
              </h3>
              <ul className="list-disc space-y-1 pl-6 text-base text-zinc-700 dark:text-zinc-300">
                <li>Direct — information-first, no fluff</li>
                <li>
                  Analytical — grounded in reasoning, structure, and constraints
                </li>
                <li>Pragmatic — minimal, efficient, purpose-driven</li>
                <li>
                  Builder Mindset — focuses on systems, pipelines, architecture,
                  and execution
                </li>
                <li>
                  Modern Technical — uses contemporary stacks, patterns, and
                  automation approaches
                </li>
              </ul>
            </motion.div>
            <motion.div variants={staggerItem}>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                What I Emphasize
              </h3>
              <ul className="list-disc space-y-1 pl-6 text-base text-zinc-700 dark:text-zinc-300">
                <li>
                  Systems Design — templates, pipelines, architecture decisions,
                  scaling strategies
                </li>
                <li>
                  Engineering + Product Hybrid — defining requirements,
                  translating to architecture, building with minimal complexity
                </li>
                <li>
                  Educational Innovation — game-based learning, micro-credential
                  ecosystems, structured curriculum pipelines
                </li>
                <li>
                  Automation + Tooling — allocations systems, data ingestion,
                  background workers, AI-integrated flows
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
