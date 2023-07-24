
import { Project } from "@/models/project";



export const WEBSITES: Project[] = [
  {
    type: 'web',
    name: "AppGallery MEA newsletter",
    description:
      "Designed, developed, tested and published AppGallery newsletter with dedicated admin dashboard to create and manage newsletters, I used NextJS to build the website, and manually deployed it to SUSE Enterprise server",
    image: "/web/appgallery.png",
    link: "http://appgallerymea.com:7777/",
    technologies: ["Next.js", "Express.js", "Linux"],
    company: "HUAWEI Technologies",
    images: ["/demo.png", "/web/appgallery.png", "/demo.png", "/web/appgallery.png"],
    client: "Huawei"
  },
  {
    type: 'web',
    name: "Server monitoring tool",
    description:
      "Designed, developed, tested and deployed a private tool to measure and monitor download speed from various server nodes at Huawei, which consist of an API interface, Dashboard, and an android App, and deployed it to a SUSE enterprise server",
    image: "/web/appgallery.png",
    link: "http://appgallerymea.com:7778",
    technologies: [
      "Next.js",
      "Express.js",
      "React",
      "MUI",
      "Kotlin",
    ],
    company: "HUAWEI Technologies",
    client: "Huawei"
  },
  {
    type: 'web',
    name: "Algebratec website",
    description: `Created the official business website of Algebratec Technologies using Wordpress and customized it using PHP and Javascript`,
    image: "/web/algebratec.png",
    link: "http://Algebratec.com",
    technologies: ["WordPress", "PHP", "JavaScript"],
    company: "Algebratec",
    client: "Algebratec"
  },
  {
    type: 'web',
    name: "Booking API dashboard",
    description:
      "A full stack project I created while working at Algebratec for internal use, to monitor Flight and Hotel booking APIs access and performance, I developed the front end using Angular and used Laravel/Lumen for the backend",
    image: "/web/algebratec.png",
    // link: "",
    technologies: ["Angular", "TypeScript", "Laravel", "PHP"],
    company: "Algebratec",
    client: "Algebratec"

  },
  {
    type: 'web',
    name: "DCB Payment Microservice",
    description:
      "developed an private microservice using Java and Spring Boot to handle direct carrier billing API requests for a client in Pakistan",
    image: "/web/appgallery.png",
    link: "",
    technologies: ["Java", "Spring Boot"],
    client: "Huawei"
  },
  {
    type: 'web',
    name: "Zedeal Store",
    description:
      "An eCommerce website built with wordpress and WooCommerce ",
    image: "/web/algebratec.png",
    technologies: ["WordPress", "WooCommerce"],
    company: "Algebratec",
    client: "Algebratec"

  },

  {
    type: 'web',
    name: "Personal website",
    description:
      "My new personal website, built with NextJs and MaterialUI, designed the UI in Figma, then developed it using NextJS and MaterialUI, deployed to Firebase and used Firebase functions to send form messages.",
    image: "/favicon.png",
    link: "http://younes-megaache.com",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Firebase",
    ],
    company: "Personal",
  },
  {
    type: 'web',
    name: "Personal website (deprecated)",
    description:
      "My personal website/online resume, built using MEAN stack, source code (outdated) is available on my github, developed the website based on MEAN stack (MongoDB, ExpressJs, Angular, Nodejs)",
    image: "/favicon.png",
    link: "http://younes-megaache.com",
    technologies: ["Angular", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    company: "Personal",
  },
  {
    type: 'web',
    name: "Hot headlines",
    description:
      "Anews website that shows news from most popular news websites, developed the website based on MEAN stack (MongoDB, ExpressJs, Angular, Nodejs)",
    image: "/favicon.png",
    technologies: ["Angular", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    company: "personal",
  },
  {
    type: 'web',
    name: "youtube downloader",
    description:
      "A Tool to download and covert youtube videos and playlists, developed the website based on MEAN stack (MongoDB, ExpressJs, Angular, Nodejs)",
    image: "/favicon.png",
    technologies: ["Angular", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    company: "Personal",
  },
  {
    type: 'web',
    name: "fitGirl repacks",
    description:
      "An advanced search and filtering tool for fitGirl's repacks (pc games), developed the website based on MEAN stack (MongoDB, ExpressJs, Angular, Nodejs), and developed a scraping tool using cheerio and Puppeteer to scrap data from their official website",
    image: "/favicon.png",
    technologies: ["Angular", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    company: "Personal",
  },
];
//todo: verify all links
export const APPS: Project[] = [
  {
    type: 'mobile',
    name: "AppFinder",
    description: `Handled the full lifecycle development of AppFinder app, used Kotlin, Flow, Coroutines and JetPack components to build the app based on MVVM, the app lets users download most popular apps that are missing from Huawei AppGallery, it reached 14M installs and 250K monthly active users on Huawei AppGallery`,
    image: "/mobile/appfinder.png",
    link: "https://appgallery.huawei.com/app/C101908701",
    technologies: ["Android", "Kotlin"],
    company: "HUAWEI Technologies",
    client: 'Huawei'

  }, {
    type: 'mobile',
    name: "Emirates smartwatch app",
    description: `Developed 70% of Emirates HarmonyOS wearable app for Huawei smartwatches using Java and HarmonyOS SDK,`,
    image: "/mobile/emirates.png",
    link: "https://appgallery.huawei.com/app/C101772055",
    technologies: ["HarmonyOS", "Java"],
    company: "HUAWEI Technologies",
    client: 'Emirates'
  },
  {
    type: 'mobile',
    name: "Steppi wearable app",
    description: `Developed Steppi HarmonyOS app for Huawei smartwatches using Java and HarmonyOS SDK, in a challenging 2 months.`,
    image: "/mobile/steppi.png",
    link: "https://appgallery.huawei.com/app/C102997517",
    technologies: ["HarmonyOS", "Java"],
    company: "HUAWEI Technologies",
    client: 'Steppi'
  },

  {
    type: 'mobile',
    name: "Dubai Police",
    description: `I have worked on Dubai Police app by handling the integration of Huawei maps, location and Site SDKs into Dubai Police android app, and helped publish it on Huawei AppGallery`,
    image: "/mobile/dubai_police.png",
    link: "https://appgallery.huawei.com/app/C101307553",
    technologies: ["HarmonyOS", "Java"],
    company: "HUAWEI Technologies",
    client: 'Dubai Police',

  },
  {
    type: 'mobile',
    name: "Dubai Sport wearable app",
    description: `I Handled the full lifecycle development of Dubai Sports wearable app for HarmonyOS smartwatches, the app shows latest football matches, fixtures, in-match events and details as well as news, developed using Java and HarmonyOS SDK`,
    image: "/mobile/dubai_sports.png",
    link: "https://appgallery.huawei.com/app/C103817825",
    technologies: ["HarmonyOS", "Java"],
    company: "HUAWEI Technologies",
    client: "Dubai Sporrts"

  },
  {
    type: 'mobile',
    name: "Carrefour",
    description: `I have worked on Carrefour android app by integrating Huawei services like maps, Location, QR scan and push messaging`,
    image: "/mobile/carrefour.png",
    technologies: ["HarmonyOS", "Java"],
    link: "https://appgallery.huawei.com/app/C101288903",
    company: "HUAWEI Technologies",
    client: 'Carrefour'
  },

  {
    type: 'mobile',
    name: "Visit Abu Dhabi",
    description: `Handled the integration of HMS info Visit Abu Dhabi app, where I integrated Huawei Map, Location, push messaging and Analytics services (SDKs)`,
    image: "/mobile/visit_abudhabi.png",
    technologies: ["Android", "Kotlin"],
    link: "https://appgallery.huawei.com/app/C103127211",
    client: "Visit Abudhabi"
  },
  {
    type: 'mobile',
    name: "Steppi",
    description: `Integrated steppi android app with Huawei Health, location and push messaging services (SDK), and published it to Huawei AppGallery`,
    image: "/mobile/steppi.png",

    technologies: ["Android", "Kotlin"],
    link: "https://appgallery.huawei.com/app/C102997517",
    company: "HUAWEI Technologies",
    client: 'Steppi'
  },
  {
    type: 'mobile',
    name: "Spacetoon GO",
    description: `Its a subscription based streaming app for cartoons and kids shows, I have handled the integration Huawei In-App-Purchases SDK and Machine learning SDK to sharpen images, as well as Huawei Location, Push messaging and Huawei SignIn SDK`,
    image: "/mobile/spacetoon.png",
    link: "https://appgallery.huawei.com/app/C103544485",
    technologies: ["HarmonyOS", "Java"],
    company: "HUAWEI Technologies",

  },
  {

    type: 'mobile',
    name: "eSouq",
    description: `eSouq is an online marketplace that uses GPS to help you find
        great deals or let you sell your goods to nearby people quickly, developed using Java, Android SDK and Firebase SDKs`,
    image: "/mobile/esouq.png",
    technologies: ["Android", "Java", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.esouq.app",
  },
  {
    type: 'mobile',
    name: "Golden Souq",
    description: `Quickly sell things you list on Golden Souq and find great deals nearby.
      Electronics, games, clothes, cars, furniture, décor and much more.`,
    image: "/mobile/golden_souq.png",
    link: "https://play.google.com/store/apps/details?id=app.megaache.goldensouq",
    technologies: ["Android", "Java", "Firebase"],
  },
  {
    type: 'mobile',
    name: "Smart base converter",
    description: `Smart base converter/calculator allows you to convert real and fractional numbers from base n to n.`,
    image: "/mobile/smart_base_converter.png",
    link: "https://play.google.com/store/apps/details?id=app.megaache.smartbaseconverter",
    technologies: ["Android", "Java"],
  },
  {
    type: 'mobile',
    name: "M Torch",
    description: `illuminate your way with the best flashlight app for android`,
    image: "/mobile/m_torch.png",
    link: "https://play.google.com/store/apps/details?id=app.megaache.mtorch",
    technologies: ["Android", "Java"],
  },
  {
    type: 'mobile',
    name: "Smart flash alert",
    description: `let your flashlight notify you about incoming calls or received messages`,
    image: "/mobile/smart_flash_alerts.png",
    link: "https://play.google.com/store/apps/details?id=app.megaache.smartflashalerts",
    technologies: ["Android", "Java"],
  }
];



export const PROJECTS_HIGHLIGHT = [
  APPS[0], APPS[1], WEBSITES[0], APPS[3]
]