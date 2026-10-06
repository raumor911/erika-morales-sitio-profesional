export interface TimelineStage {
  id: string;
  orderNumber: number;
  role: string;
  department: string;
  area: string;
  organization: string;
  period: string;
  badgeColor: 'gold' | 'blue' | 'slate' | 'sky' | 'amber';
  focusSummary: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  skillsUsed: string[];
  keyStakeholders: string[];
}

export interface ImpactMetric {
  id: string;
  title: string;
  category: 'ai' | 'commercial' | 'strategy' | 'award';
  categoryLabel: string;
  headlineMetric: string;
  timeframe: string;
  summary: string;
  detailedPoints: string[];
  icon: string;
  accentColor: string;
  isFeatured?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  description: string;
  skills: {
    name: string;
    description: string;
    isKey?: boolean;
  }[];
}

export interface CertificationItem {
  name: string;
  institution: string;
  year: string;
  badge?: string;
  credentialId?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
}

export interface ProfileData {
  fullName: string;
  shortName: string;
  roleTitle: string;
  currentPosition: string;
  organization: string;
  email: string;
  phone: string;
  phoneClean: string;
  location: string;
  geoPosition: string;
  linkedInUrl: string;
  whatsAppUrl: string;
  canonicalUrl: string;
  languages: {
    language: string;
    level: string;
    detail: string;
  }[];
}
