import { BrandType } from '@/models/Brand';
import { TechnologyType } from '@/models/Technology';

export interface Project {
  type: 'mobile' | 'web';
  name: string;
  link?: string;
  company?: string;
  description: string;
  image?: string;
  technologies: TechnologyType[];
  images?: string[];
  client?: BrandType;
  discontinued?: boolean;
  year: number;
}

export interface ProjectCollection {
  title: string;
  projects: Project[];
}
