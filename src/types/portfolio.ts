export interface Profile {
  name: string;
  title: string;
  bio: string;
  image: string;
  email: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  consulting: {
    available: boolean;
    note: string;
  };
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SkillsData {
  categories: SkillCategory[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  url: string | null;
  github: string | null;
  featured: boolean;
  date: string;
}

export interface ProjectsData {
  projects: Project[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface ExperienceData {
  experience: Experience[];
}
