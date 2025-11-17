"use client";

import { motion } from "framer-motion";
import { heroItem, heroVariants } from "@/src/lib/animations";
import type { Profile } from "@/src/types/portfolio";
import { HeroImage } from "./hero-image";

interface HeroSectionProps {
  profile: Profile;
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <motion.section
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center sm:py-24"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      <motion.div className="mb-8" variants={heroItem}>
        <HeroImage profile={profile} />
      </motion.div>
      <motion.h1
        className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl md:text-6xl"
        variants={heroItem}
      >
        {profile.name}
      </motion.h1>
      <motion.p
        className="mb-6 text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl"
        variants={heroItem}
      >
        {profile.title}
      </motion.p>
      <motion.p
        className="max-w-2xl text-base text-zinc-700 dark:text-zinc-300 sm:text-lg"
        variants={heroItem}
      >
        {profile.bio}
      </motion.p>
    </motion.section>
  );
}
