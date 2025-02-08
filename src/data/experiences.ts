import { Experience } from '@/models/Experience';

export const PRESENT = 'present';
export const EXP_DIVIDER = '●';

// TODO: update experiences from resume
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
      'Improved HUAWEI customer service efficiency by developing an app to track device sales and customer information using Kotlin, Android SDK, Jetpack Compose, and Next.js.',
      "Led the development of 'APPFinder,' an Android app store that enabled 2 million HUAWEI users to download apps, leveraging MVVM architecture, Kotlin, coroutines, Flow, and dependency injection (DI).",
      'Spearheaded the development of smartwatch apps for leading companies such as Emirates Airline, Tawasal, Steppi, Dubai Sports, and Prayer Now using Java, JavaScript, HTML, and the HarmonyOS SDK.',
      'Integrated HUAWEI Mobile Services (HMS) into native and React Native apps for major partners including Carrefour, Dubai Police, Virgin Mobile, Visit Abu Dhabi and others.',
      'Optimized HMS integration in React Native apps by creating custom plugins for HUAWEI’s Site and Location SDKs, reducing development time and improving developer experience.',
      'Developed an automation platform using Next.js, MongoDB, and Node.js, saving colleagues 2 hours daily by streamlining routine tasks.',
      'Enhanced game analytics by building a PHP service with Laravel, improving data collection and insights.',
      'Boosted app update efficiency by implementing automated CI/CD pipelines for HUAWEI AppGallery using Microsoft Azure.',
      'Brought 50+ developers to HMS ecosystem by hosting workshops and speaking at tech talks.',
      'Provided technical support for HUAWEI, Google and Firebase services to high-value HUAWEI partners.',
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
