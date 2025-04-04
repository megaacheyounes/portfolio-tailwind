import { Experience } from '@/models/Experience';

export const PRESENT = 'present';
export const EXP_DIVIDER = '●';

// TODO: update experiences from resume
export const EXPERIENCES: Experience[] = [
  {
    start: 'Mar 2024',
    end: PRESENT,
    title: 'Software Engineer – Wearables',
    company: {
      name: 'Huawei Technologies',
      logo: '/web/appgallery.png',
      website: 'https://www.huawei.com/en',
    },
    location: 'Dubai, UAE',
    technologies: [
      'HarmonyOS',
      'JavaScript',
      'TypeScript',
      'Android',
      'Kotlin',
      'Swift',
      'React-Native',
      'HTML',
      'CSS',
    ],
    achievements: [
      'Lead full-cycle development of HarmonyOS smartwatch applications for partners such as Emirates Airline, Anghami, Carrefour, Tawsal, Dubai Sports and others, utilizing ArkTS, JavaScript, and HarmonyOS UI declarative frameworks (ArkUI/HML/CSS).',
      'Developed a wrapper SDK for the Huawei Wear Engine SDK and provided technical support, reducing integration time by 50%.',
      'Design and implement user interfaces in Figma, translating  requirements into user friendly layouts for diverse wearable screen specifications.',
      'Worked closely with Product Managers and QA in Agile sprints to meet project deadlines.',
      'Provide mentorship to junior engineers on HarmonyOS development practices and ArkTS/ArkUI.',
    ],
  },
  {
    start: 'Jan 2020',
    end: 'Mar 2024',
    title: 'Software Engineer',
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
      'ApkTool',
      'JADX',
    ],
    achievements: [
      'Integrated HUAWEI Mobile Services (HMS) into native and React Native apps for major partners, including Carrefour, Dubai Police, Virgin Mobile, and Dubai Mall.',
      'Created custom HMS plugins for React Native, improving developer experience and reducing integration time for services like Site and Location SDKs.',
      'Developed a tool for APK decompiling and static analysis to determine app tech stacks, find bugs, and guide integration improvements using Node.js, Apktool, and JADX.',
      'Developed and deployed an automation platform with Next.js, MongoDB, and Node.js, saving 2+ hours daily by streamlining routine tasks.',
      'Led the development of APPFinder, an Android app store with 2M+ Installs, using MVVM architecture, Kotlin, coroutines, Flow, and dependency injection.',
      'Developed an app that improved Huawei customer service efficiency by tracking device sales and customer information using Kotlin, Android SDK, Jetpack Compose, and Next.js.',
      'Hosted workshops and tech talks, onboarding 50+ engineers into HMS technologies.',
      'Provided hands-on technical support for HUAWEI, Google, and Firebase partners, resolving 90% of critical technical issues.',
      'Expanded Huawei developer ecosystem by onboarding over 50 developers through workshops, online meetings, tech talks, and published technical articles on Huawei developer forums.',
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
