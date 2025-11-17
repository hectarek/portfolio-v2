"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/src/lib/animations";
import type { Profile } from "@/src/types/portfolio";
import { SocialLinks } from "./social-links";

interface FooterProps {
  profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="border-t border-zinc-200 bg-zinc-50 px-4 py-8 dark:border-zinc-800 dark:bg-zinc-950"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-around gap-4 sm:flex-row">
          <motion.div className="text-center sm:text-left" variants={fadeInUp}>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <SocialLinks profile={profile} variant="footer" />
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
