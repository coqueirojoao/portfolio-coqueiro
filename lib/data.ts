import type { SkillCategory, Project, SocialLinks } from "@/types";

export const skills: SkillCategory = {
  frontend: [
    { name: "React", level: 90 },
    { name: "Angular", level: 85 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Bootstrap", level: 85 },
    { name: "Material UI", level: 80 },
    { name: "Chakra UI", level: 80 },
    { name: "Ionic", level: 85 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express", level: 85 },
    { name: "Python", level: 75 },
    { name: "REST API", level: 90 },
  ],
  database: [
    { name: "MySQL", level: 85 },
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 70 },
  ],
  tools: [
    { name: "Docker", level: 80 },
    { name: "Git", level: 90 },
    { name: "Jest", level: 85 },
    { name: "Cypress", level: 80 },
    { name: "Selenium", level: 75 },
  ],
};

export const projects: Project[] = [
  {
    id: "analyticsDashboard",
    titleKey: "projects.list.analyticsDashboard.title",
    descriptionKey: "projects.list.analyticsDashboard.description",
    tech: ["Next.js 16", "TypeScript", "MongoDB", "Recharts", "Tailwind CSS"],
    image: "/dashboard-screenshot.png",
    link: "https://dashboard-analytics-flax.vercel.app",
    github: "https://github.com/coqueirojoao/dashboard-analytics"
  }
];

export const socialLinks: SocialLinks = {
  email: "azevedo.joao1995@gmail.com",
  linkedin: "https://linkedin.com/in/joaocoqueiro",
  github: "https://github.com/coqueirojoao",
};
