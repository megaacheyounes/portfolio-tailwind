import { SkillType } from '@/models/project';

export const PRESENT = 'present';
export const EXP_DIVIDER = '●';

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
  technologies: SkillType[];
  //will be calculated by DataProvider.tsx
  duration?: string;
}

//todo: update experiences from resume
export const EXPERIENCES: Experience[] = [
  {
    start: 'Jan 2020',
    end: PRESENT,
    title: 'Full Stack Software Developer',
    company: {
      name: 'Huawei Technologies',
      logo: '/web/appgallery.png',
      website: 'https://www.huawei.com/en',
    },
    location: 'Dubai, UAE',
    technologies: [
      'Android',
      'HarmonyOS',
      'Kotlin',
      'Java',
      'React-Native',
      'Huawei Mobile Services (HMS)',
      'Firebase',
      'JavaScript',
      'CSS',
      'HTML',
      'Laravel',
      'PHP',
      'Node.js',
      'Next.js',
      // "Figma"
    ],
    achievements: [
      'Deliver Robost production code for a diverse array of Android projects for companies including Dubai Police, Carrefour, Virgin Mobile, Visit Abudhabi and many more ',
      'Collaborated with designers and developers from Top companies like Emirates, Tawasal, Steppi and others, to publish their smartwatch apps',
      'Provide leadership within engineering deparment through close collaboration, knowledge shares, and mentorship',
    ],
  },
  {
    start: 'Nov 2018',
    end: 'Nov 2019',
    title: 'Full Stack Web Developer',
    company: {
      name: 'Algebratec Technologies',
      logo: '/web/algebratec.png',
      website: 'http://www.algebratec.com',
    },
    location: 'Constantine, Algeria',
    technologies: [
      'Angular',
      'Node.js',
      'Express.js',
      'TypeScript',
      'Laravel',
      'PHP',
      // fixme: add logos
      // "jQuery",
      // "Swagger-ui",
      // "Angular Material",
      // "Bootstrap",
      // "Animate.css",
      // "NativeScript",
      'React',
    ],
    achievements: [
      'Developed and Styled web apps for 5+ clients using Angular.js and various Anguar UI frameworks.',
      "Built and deployed Algeratec's dashboard for managing clients API access using Angular and Laravel, and built a documentation page using Swagger-UI",
      'Developed Algerbratec business website using WordPress',
      'Collected data from various hotel websites using Goutte/php and Laravel.',
    ],
  },
  {
    start: 'Mar 2016',
    end: 'Sep 2019',
    title: 'Android Developer',
    company: {
      name: 'Younes Apps',
      logo: '/mobile/playstore.png',
      website: 'https://play.google.com/store/apps/dev?id=6738840468807111573',
    },
    location: 'Constantine, Algeria',
    technologies: [
      'Android',
      'Java',
      'Google Play Services',
      'Firebase',
      'Laravel',
      'PHP',
      'Node.js',
    ],
    achievements: [
      'Developed, tested and published 25+ Android apps for different purposes using Java, Android  SDK and Firebase',
      'Created 2 games using LibGDX',
      'Built two RESTful API services for using Laravel/PHP.',

      'Adhered to Google Material Design guidelines and MVVM app architecutre',
    ],
  },
];
