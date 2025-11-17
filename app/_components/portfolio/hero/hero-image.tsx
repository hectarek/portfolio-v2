"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { scaleIn } from "@/src/lib/animations";
import type { Profile } from "@/src/types/portfolio";

interface HeroImageProps {
  profile: Profile;
}

export function HeroImage({ profile }: HeroImageProps) {
  return (
    <motion.div
      className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-zinc-200 dark:border-zinc-800 sm:h-40 sm:w-40"
      variants={scaleIn}
      initial="hidden"
      animate="visible"
    >
      <Image
        src={profile.image}
        alt={`${profile.name} profile picture`}
        fill
        className="object-cover"
        priority
        sizes="(max-width: 640px) 128px, 160px"
      />
    </motion.div>
  );
}
