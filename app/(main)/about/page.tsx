import type { Metadata } from "next";
import { AboutContent } from "@/app/_components/portfolio/about/about-content";
import { getExperience, getProfile } from "@/src/lib/data";
import { generateSEOMetadata } from "@/src/shared/utils/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "About | Hector Gonzalez",
  description:
    "Learn about Hector Gonzalez - CTO, Startup Co-Founder, Full Stack Engineer. Problem-focused technical leader who designs scalable, modern products.",
  keywords: [
    "Hector Gonzalez",
    "CTO",
    "Full Stack Engineer",
    "Startup Co-Founder",
    "Systems Design",
    "Engineering",
  ],
  type: "website",
});

export default function AboutPage() {
  const profile = getProfile();
  const experience = getExperience();

  return <AboutContent profile={profile} experience={experience} />;
}
