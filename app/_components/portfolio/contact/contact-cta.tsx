"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { heroItem, heroVariants, viewportOptions } from "@/src/lib/animations";
import type { Profile } from "@/src/types/portfolio";

interface ContactCTAProps {
  profile: Profile;
}

export function ContactCTA({ profile }: ContactCTAProps) {
  return (
    <motion.section
      className="px-4 py-16 sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={heroVariants}
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl"
          variants={heroItem}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="mb-8 text-lg text-zinc-600 dark:text-zinc-400"
          variants={heroItem}
        >
          {profile.consulting.available && (
            <span className="block mb-2">{profile.consulting.note}</span>
          )}
          Interested in working together or have a question? Get in touch.
        </motion.p>
        <motion.div variants={heroItem}>
          <Button asChild size="lg">
            <Link href={`mailto:${profile.email}`}>
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
