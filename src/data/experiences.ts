import { TechnologyType } from '@/models/project';

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
  technologies: TechnologyType[];
  //will be calculated by DataProvider.tsx
  duration?: string;
}

//todo: update experiences from resume
export const EXPERIENCES: Experience[] = [
  {
    start: 'Jan 2020',
    end: PRESENT,
    title: 'Full Stack Mobile Developer',
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
      'Next.js',
      'Node.js',
      'JavaScript',
      'TypeScript',
      'Laravel',
      'PHP',
      'HTML',
      'CSS',
    ],
    achievements: [
      'Design, develop and publish smartwatch apps for various top companies including Emirates, Tawasal, Steppi, and more',
      'Deliver high quality Java and Kotlin code to a diverse array of companies including Carrefour, Dubai Police, Emirates Auction, Talabat, Virgin Mobile and more',
      'Help 2 Million Huawei users download apps by developing “AppFinder”, an Android app store based on MVVM architecture using Kotlin, Coroutines, Retrofit, Flow, and Hilt',
      'Reduce integration time of Huawei Maps, Location, and Site SDKs by creating easy to use libraries for Android and React-native.',
      'Save 2 hours/week publishing app updates by creating pipeline for Azure using python',
      'Develop a windows CLI tool to automate internal operation tasks using Node.js',
      'Create and maintain a monthly newsletter using Next.js and Material UI to keep business partners updated on Huawei news',
      'Provide leadership within the engineering department through close collaboration, knowledge sharing, and mentorship',
    ],
  },
  // algebratec
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
      'React',
      'Express.js',
      'Node.js',
      'TypeScript',
      'Laravel',
      'PHP',
    ],
    achievements: [
      'Saved the team 4 weeks of work by creating Node.js scripts to automate creating Angular projects, enhancing code sharing across projects',
      "Developed Algeratec's dashboard for managing clients API access using Angular and Laravel, along with API documentation website",
      'Designed Algebratec modern business website using WordPress',
      'Collected data from hotel booking websites using Goutte/php and Laravel',
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
      'Firebase',
      'Google Play Services',
      'Laravel',
      'PHP',
    ],
    achievements: [
      'Developed, tested, and published over 25 Android apps using Java, Android SDK, Firebase and Google SDKs for diverse purposes',
      'Created 2 fun games using libGDX, although they were not published due to copyright',
      'Built two REST API services using Laravel/PHP',
    ],
  },
];
