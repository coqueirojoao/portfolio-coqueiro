export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  [key: string]: Skill[];
}

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  tech: string[];
  image: string;
  link: string;
  github: string;
}

export interface SocialLinks {
  email: string;
  linkedin: string;
  github: string;
}
