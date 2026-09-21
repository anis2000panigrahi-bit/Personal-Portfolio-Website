export type ProjectCategory = 'All' | 'AI/ML' | 'Data Analytics' | 'Predictive Modeling' | 'Python';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'AI/ML' | 'Data Analytics' | 'Predictive Modeling' | 'Python';
  tagline: string;
  description: string;
  fullOverview: string;
  techStack: string[];
  metrics: ProjectMetric[];
  architectureSteps: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured: boolean;
  date: string;
  stars: number;
  interactiveType?: 'prediction-demo' | 'analytics-demo' | 'nlp-demo';
}

export interface SkillItem {
  name: string;
  category: 'AI & ML' | 'Data & SQL' | 'Programming' | 'Cloud & Tools' | 'Professional';
  proficiency: number; // 0 - 100
  experience: string;
  highlight: string;
  iconName: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  boardOrUniversity: string;
  year: string;
  scoreOrStatus: string;
  highlight: string;
  subjects: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  periodOrYear: string;
  skills: string[];
  description: string;
  verificationBadge: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  tags: string[];
  publishedDate: string;
  readTime: string;
  views: number;
  likes: number;
  comments: {
    id: string;
    author: string;
    date: string;
    text: string;
  }[];
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  category: 'Recruiter / Hiring' | 'Project Collaboration' | 'General Inquiry' | 'Feedback';
  message: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'verified';
}

export interface SystemLog {
  id: string;
  timestamp: string;
  level: 'info' | 'success' | 'warn' | 'error';
  service: string;
  message: string;
  latencyMs: number;
}

export type UserRole = 'guest' | 'recruiter' | 'admin';
