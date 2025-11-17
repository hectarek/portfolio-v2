"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import type { Project } from "@/src/types/portfolio";
import { ProjectBadges } from "./project-badges";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 1 }}
    >
      <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
        <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={project.image}
            alt={`${project.title} project image`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <ProjectBadges technologies={project.technologies} />
        </CardContent>
        <CardFooter className="flex gap-2">
          {project.url && (
            <Button asChild variant="outline" size="sm">
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Site
              </Link>
            </Button>
          )}
          {project.github && (
            <Button asChild variant="outline" size="sm">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>
          )}
          <Button asChild variant="default" size="sm" className="ml-auto">
            <Link href={`/projects/${project.slug}`}>View Details</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
