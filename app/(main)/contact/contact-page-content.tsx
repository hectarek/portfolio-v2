"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";
import { SocialLinks } from "@/app/_components/portfolio/contact/social-links";
import { Button } from "@/app/_components/ui/button";
import { heroItem, heroVariants, viewportOptions } from "@/src/lib/animations";
import type { Profile } from "@/src/types/portfolio";

interface ContactPageContentProps {
  profile: Profile;
}

export function ContactPageContent({ profile }: ContactPageContentProps) {
  return (
    <motion.div
      className="px-4 py-16 sm:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={heroVariants}
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.h1
          className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl"
          variants={heroItem}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          className="mb-8 text-lg text-zinc-600 dark:text-zinc-400"
          variants={heroItem}
        >
          {profile.consulting.available && (
            <span className="block mb-4">{profile.consulting.note}</span>
          )}
          Feel free to reach out via email or connect on social media.
        </motion.p>

        <motion.div className="mb-8 space-y-6" variants={heroVariants}>
          <motion.div variants={heroItem}>
            <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Email
            </h2>
            <Button
              asChild
              size="lg"
              aria-label={`Send email to ${profile.email}`}
            >
              <Link href={`mailto:${profile.email}`}>
                <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                {profile.email}
              </Link>
            </Button>
          </motion.div>

          <motion.div variants={heroItem}>
            <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Social Media
            </h2>
            <div className="flex justify-center">
              <SocialLinks profile={profile} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
