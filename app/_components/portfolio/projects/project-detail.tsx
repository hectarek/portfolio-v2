import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import type { Project } from "@/src/types/portfolio";
import { ProjectBadges } from "./project-badges";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        aria-label="Back to projects page"
      >
        <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
        Back to Projects
      </Link>

      <div className="mb-8">
        <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900 sm:h-96">
          <Image
            src={project.image}
            alt={`${project.title} project image`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 896px"
            priority
          />
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          {project.title}
        </h1>

        <div className="mb-6">
          <ProjectBadges technologies={project.technologies} />
        </div>

        <div className="mb-8 flex flex-wrap gap-4">
          {project.url && (
            <Button
              asChild
              variant="default"
              aria-label={`View ${project.title} live site`}
            >
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                View Live Site
              </Link>
            </Button>
          )}
          {project.github && (
            <Button
              asChild
              variant="outline"
              aria-label={`View ${project.title} source code`}
            >
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                View Code
              </Link>
            </Button>
          )}
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            {project.longDescription}
          </p>
        </div>
      </div>
    </article>
  );
}
