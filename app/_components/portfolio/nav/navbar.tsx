"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/_lib/utils";
import {
  navbarVariants,
  staggerContainerFast,
  staggerItem,
} from "@/src/lib/animations";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      className="sticky top-0 z-50 border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="flex h-16 items-center justify-between"
          variants={staggerContainerFast}
        >
          <motion.div variants={staggerItem}>
            <Link
              href="/"
              className="text-lg font-semibold text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400"
            >
              Hector Gonzalez
            </Link>
          </motion.div>
          <motion.div
            className="flex items-center gap-6"
            variants={staggerContainerFast}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.div key={item.href} variants={staggerItem}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      isActive
                        ? "text-zinc-900 dark:text-zinc-100"
                        : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
