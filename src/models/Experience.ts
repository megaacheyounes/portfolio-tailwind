import { TechnologyType } from '@/models/Technology';

export interface Experience {
  start: string;
  end: string;
  title: string;
  company: {
    name: string;
    logo: string;
    website: string;
  };
  location: string;
  achievements: string[];
  technologies: TechnologyType[];
  //will be calculated by DataProvider.tsx
  duration?: string;
}
