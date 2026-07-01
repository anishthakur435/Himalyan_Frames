export interface Film {
  id: string;
  title: string;
  location: string;
  category: string;
  duration: string;
  year: string;
  coverUrl: string;
  videoUrl?: string;
  description: string;
  roles: string[];
  specs: string[];
  isFeatured: boolean;
}

export interface Service {
  id: string;
  title: string;
  priority: number;
  description: string;
  highlight: string;
  details: string[];
  deliverables: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  basePrice: string;
  travelCovered: boolean;
  includes: string[];
  bestFor: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export type Theme = 'dark' | 'light';
