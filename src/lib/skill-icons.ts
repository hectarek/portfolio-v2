/**
 * Skill Icons Mapping
 *
 * Maps skill names to their skill-icons repository icon filenames.
 * Uses individual SVG files from the skill-icons GitHub repository.
 *
 * Repository: https://github.com/tandpfun/skill-icons
 * Browse icons: https://skillicons.dev/
 */

/**
 * Map of skill names to their skill-icons icon filenames
 * Format: IconName-Dark.svg or IconName.svg (for light theme)
 * Check available icons: https://github.com/tandpfun/skill-icons/tree/main/icons
 */
export const skillIconMap: Record<string, { light: string; dark: string }> = {
  // Frameworks & Libraries
  "Next.js": { light: "NextJS-Dark.svg", dark: "NextJS-Dark.svg" },
  React: { light: "React-Dark.svg", dark: "React-Dark.svg" },
  TypeScript: { light: "TypeScript.svg", dark: "TypeScript.svg" },
  JavaScript: { light: "JavaScript.svg", dark: "JavaScript.svg" },
  "Node.js": { light: "NodeJS-Dark.svg", dark: "NodeJS-Dark.svg" },
  Bun: { light: "Bun.svg", dark: "Bun.svg" },

  // Databases & ORMs
  PostgreSQL: { light: "PostgreSQL-Dark.svg", dark: "PostgreSQL-Dark.svg" },
  "Drizzle ORM": { light: "Drizzle.svg", dark: "Drizzle.svg" },

  // Languages
  Python: { light: "Python-Dark.svg", dark: "Python-Dark.svg" },
  Go: { light: "Go.svg", dark: "Go.svg" },
  Rust: { light: "Rust.svg", dark: "Rust.svg" },

  // DevOps & Cloud
  Docker: { light: "Docker.svg", dark: "Docker.svg" },
  Kubernetes: { light: "Kubernetes.svg", dark: "Kubernetes.svg" },
  Vercel: { light: "Vercel-Dark.svg", dark: "Vercel-Dark.svg" },

  // Tools
  Git: { light: "Git.svg", dark: "Git.svg" },
  GitHub: { light: "Github-Dark.svg", dark: "Github-Dark.svg" },
  GitLab: { light: "GitLab-Dark.svg", dark: "GitLab-Dark.svg" },
  Figma: { light: "Figma-Dark.svg", dark: "Figma-Dark.svg" },
  Notion: { light: "Notion-Dark.svg", dark: "Notion-Dark.svg" },
  "Notion API": { light: "Notion-Dark.svg", dark: "Notion-Dark.svg" },
  "Google Apps Script": { light: "GoogleSheets.svg", dark: "GoogleSheets.svg" },
  "Google Sheets API": { light: "GoogleSheets.svg", dark: "GoogleSheets.svg" },
};

/**
 * Get skill-icons GitHub raw URL for a skill
 * @param skillName - The skill name
 * @param theme - 'light' or 'dark' (defaults to 'dark')
 */
export function getSkillIconUrl(
  skillName: string,
  theme: "light" | "dark" = "dark",
): string | null {
  const iconFiles = skillIconMap[skillName];
  if (!iconFiles) return null;

  const iconFile = theme === "dark" ? iconFiles.dark : iconFiles.light;

  // Use GitHub raw content URL for individual SVG files
  return `https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/${iconFile}`;
}
