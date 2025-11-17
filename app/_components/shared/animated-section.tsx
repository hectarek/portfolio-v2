"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp, viewportOptions } from "@/src/lib/animations";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

/**
 * Animated section wrapper component
 * Wraps sections with fade-in-up animation
 */
export function AnimatedSection({
  children,
  className,
  variants = fadeInUp,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  );
}
