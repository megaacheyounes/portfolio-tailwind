import { Experience } from '@/models/Experience';

export const PRESENT = 'present';
export const EXP_DIVIDER = '●';

// TODO: update experiences from resume
export const EXPERIENCES: Experience[] = [
  {
    start: 'Mar 2024',
    end: PRESENT,
    title: 'Software Engineer — Wearables & HarmonyOS',
    company: {
      name: 'Huawei Technologies',
      logo: '/web/appgallery.png',
      website: 'https://www.huawei.com/en',
    },
    location: 'Dubai, UAE',
    technologies: [
      'HarmonyOS',
      'ArkTS',
      'ArkUI',
      'Wearables',
      'Figma',
      'JavaScript',
      'SDK Integration',
      'Android-to-Watch Sync',
      'Partner Delivery',
    ],
    achievements: [
      'Lead development of connected-device and wearable applications for Huawei partners across aviation, retail, mobility, government, and sports sectors.',
      'Delivered 20+ connected-device and wearable applications, including released work for Emirates, MAF Carrefour, RTA, UAE MOI, Dubai Sports, and other enterprise partners.',
      'Built wearable applications using ArkTS, JavaScript, HarmonyOS UI declarative framework, ArkUI, HTML/CSS, and device-specific UI patterns.',
      'Designed and implemented 20+ wearable and small-screen interfaces in Figma, translating partner requirements into production-ready layouts.',
      'Designed and built a reusable Wear Engine wrapper SDK for Android-to-watch synchronization, reducing repeated partner integration effort by 50%+.',
      'Mentored and onboarded two engineers on HarmonyOS wearable development practices, reusable components, and partner delivery workflows.',
      'Worked with product managers, QA, and partner teams to deliver wearable apps under tight enterprise project timelines.',
    ],
  },
  {
    start: 'Jan 2020',
    end: 'Mar 2024',
    title: 'Software Engineer — Android, HMS Integrations & Mobile Tooling',
    company: {
      name: 'Huawei Technologies',
      logo: '/web/appgallery.png',
      website: 'https://www.huawei.com/en',
    },
    location: 'Dubai, UAE',
    technologies: [
      'Android',
      'Kotlin',
      'Jetpack Compose',
      'HMS',
      'React Native',
      'Firebase',
      'GMS Compatibility',
      'Node.js',
      'Next.js',
      'MongoDB',
      'Apktool',
      'JADX',
      'SDK Integration',
    ],
    achievements: [
      "Delivered Android and React Native platform integrations, partner support, and internal mobile tooling across Huawei's UAE ecosystem.",
      'Delivered SDK/API integrations and technical support across 50+ Android and React Native applications, including Dubai Police, MAF Carrefour, Virgin Mobile, and Visit Abu Dhabi.',
      'Built reusable React Native plugins for location and site-discovery integrations, reducing repeated partner implementation work.',
      'Helped enterprise partners bring production Android releases to market by resolving SDK, dependency, Firebase/GMS compatibility, and app-submission blockers.',
      'Led development and maintenance of AppFinder, a Kotlin Android product built with MVVM, coroutines, Flow, dependency injection, and Jetpack components; the app reached 2M+ downloads.',
      'Built a Kotlin/Jetpack Compose sales tracking and lead capture app with a Next.js/MongoDB dashboard, adopted by 400+ Huawei employees.',
      'Developed APK decompilation and static-analysis tooling using Node.js, Apktool, and JADX to support mobile integration assessment and troubleshooting.',
      'Built internal automation tooling with Next.js, Node.js, and MongoDB to streamline research, scraping, and repeated CLI workflows, saving approximately two hours per day on routine tasks.',
      'Hosted workshops and technical sessions, onboarding 50+ developers to HMS technologies.',
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
