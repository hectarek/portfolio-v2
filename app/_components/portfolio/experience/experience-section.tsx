"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { fadeInUp, viewportOptions } from "@/src/lib/animations";
import type { ExperienceData } from "@/src/types/portfolio";
import { ExperienceTimeline } from "./experience-timeline";

interface ExperienceSectionProps {
  experience: ExperienceData;
  showCTA?: boolean;
}

export function ExperienceSection({
  experience,
  showCTA = false,
}: ExperienceSectionProps) {
  // Ensure we have experience data
  if (!experience?.experience || experience.experience.length === 0) {
    return null;
  }

  return (
    <motion.section
      className="px-4 py-16 sm:py-24"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl"
          variants={fadeInUp}
        >
          Experience
        </motion.h2>
        <ExperienceTimeline experiences={experience.experience} />
        {showCTA && (
          <motion.div
            className="mt-8 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <Button asChild variant="outline">
              <Link href="/about">
                See the full list
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
