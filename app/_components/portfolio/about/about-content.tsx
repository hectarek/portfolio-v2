"use client";

import { motion } from "framer-motion";
import { ExperienceSection } from "@/app/_components/portfolio/experience/experience-section";
import { heroItem, heroVariants, viewportOptions } from "@/src/lib/animations";
import type { ExperienceData, Profile } from "@/src/types/portfolio";
import { BrandSection } from "./brand-section";

interface AboutContentProps {
  profile: Profile;
  experience: ExperienceData;
}

export function AboutContent({ profile, experience }: AboutContentProps) {
  return (
    <>
      <motion.div
        className="mx-auto max-w-4xl px-4 py-16 sm:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={heroVariants}
      >
        <motion.div className="mb-12" variants={heroItem}>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            About Me
          </h1>
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {profile.bio}
            </p>
          </div>
        </motion.div>

        <motion.div variants={heroItem}>
          <BrandSection />
        </motion.div>

        {profile.consulting.available && (
          <motion.section
            className="mt-12 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
            variants={heroItem}
          >
            <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Consulting
            </h2>
            <p className="text-base text-zinc-700 dark:text-zinc-300">
              {profile.consulting.note}
            </p>
          </motion.section>
        )}
      </motion.div>
      <ExperienceSection experience={experience} />
    </>
  );
}
