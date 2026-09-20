export interface PersonalInfo {
  name: string;
  role: string;
  specialization: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
  resumeViewUrl?: string;
}

export interface StatItem {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Internship' | 'Contract';
  description: string[];
  skills: string[];
  current?: boolean;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  cgpa: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level?: string;
    iconName?: string;
    highlight?: boolean;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  features: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
  architecture?: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  type: 'Full Stack & Backend' | 'API & System Architecture' | 'Microservice';
}

export interface PhilosophyItem {
  title: string;
  description: string;
  iconName: string;
}
