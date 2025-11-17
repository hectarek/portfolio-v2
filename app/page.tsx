import type { Metadata } from "next";
import { ContactCTA } from "@/app/_components/portfolio/contact/contact-cta";
import { ExperienceSection } from "@/app/_components/portfolio/experience/experience-section";
import { HeroSection } from "@/app/_components/portfolio/hero/hero-section";
import { ProjectsSection } from "@/app/_components/portfolio/projects/projects-section";
import { SkillsSection } from "@/app/_components/portfolio/skills/skills-section";
import {
  getExperience,
  getFeaturedProjects,
  getProfile,
  getSkills,
} from "@/src/lib/data";
import { generateSEOMetadata } from "@/src/shared/utils/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Hector Gonzalez | CTO, Full Stack Engineer, Startup Co-Founder",
  description:
    "Problem-focused technical leader who designs scalable, modern products. Blends engineering clarity with educational vision to turn complex ideas into repeatable, high-impact experiences.",
  keywords: [
    "Hector Gonzalez",
    "CTO",
    "Full Stack Engineer",
    "Startup Co-Founder",
    "Portfolio",
    "Systems Design",
  ],
  type: "website",
});

export default function Home() {
  const profile = getProfile();
  const skills = getSkills();
  const featuredProjects = getFeaturedProjects();
  const allExperience = getExperience();

  // Show only the 2 most recent experiences on home page
  const recentExperience = {
    experience: allExperience.experience.slice(0, 2),
  };

  return (
    <>
      <HeroSection profile={profile} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={featuredProjects} />
      <ExperienceSection experience={recentExperience} showCTA={true} />
      <ContactCTA profile={profile} />
    </>
  );
}
