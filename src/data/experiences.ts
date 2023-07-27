import { SkillType } from "@/models/project";

export const PRESENT = "present";
export const EXP_DIVIDER = "●";

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
		start: "Jan 2020",
		end: PRESENT,
		title: "Full Stack Software Developer",
		company: {
			name: "Huawei Technologies",
			logo: "/web/appgallery.png",
			website: "https://www.huawei.com/en",
		},
		location: "Dubai, UAE",
		technologies: [
			"Android",
			"HarmonyOS",
			"Kotlin",
			"Java",
			"React-Native",
			"Huawei Mobile Services (HMS)",
			"Firebase",
			"JavaScript",
			"CSS",
			"HTML",
			"Laravel",
			"PHP",
			"Node.js",
			"Next.js",
			// "Figma"
		],
		achievements: [
			"Deliver Robost production code for a diverse array of Android projects for companies including Dubai Police, Carrefour, Virgin Mobile, Visit Abudhabi and many more ",
			"Collaborated with designers and developers from Top companies like Emirates, Tawasal, Steppi and others, to publish their smartwatch apps",
			"Provide leadership within engineering deparment through close collaboration, knowledge shares, and mentorship",
		],
	},
	{
		start: "Nov 2018",
		end: "Nov 2019",
		title: "Full Stack Web Developer",
		company: {
			name: "Algebratec Technologies",
			logo: "/web/algebratec.png",
			website: "http://www.algebratec.com",
		},
		location: "Constantine, Algeria",
		technologies: [
			"Angular",
			"Node.js",
			"Express.js",
			"TypeScript",
			"Laravel",
			"PHP",
			// fixme: add logos
			// "jQuery",
			// "Swagger-ui",
			// "Angular Material",
			// "Bootstrap",
			// "Animate.css",
			// "NativeScript",
			"React",
		],
		achievements: [
			"Saved the team 4 weeks of work by creating NodeJs scripts to automate creating Angular projects and maximise code sharing between our projects.",
			"Helped manage our clients by creating a dashboard using Angular and Laravel.",
			"mproved the image of the company by designing a modern website using WordPress.",
			"Collected data from various hotel websites by developing a scraping tool using Goutte/php.",
			"Eased the integration of our API by developing a documentation page using Swagger-UI.",
			"Managed and Organized the workflow of the projects with Trello, and used GIT for versioning.",
		],
	},
	{
		start: "Mar 2016",
		end: "Sep 2019",
		title: "Android Developer",
		company: {
			name: "Younes Apps",
			logo: "/mobile/playstore.png",
			website:
				"https://play.google.com/store/apps/dev?id=6738840468807111573",
		},
		location: "Constantine, Algeria",
		technologies: [
			"Android",
			"Java",
			"Google Play Services",
			"Firebase",
			"Laravel",
			"PHP",
			"Node.js"
		],
		achievements: [
			"Created 25+ android apps for different purposes.",
			"Developed the apps mainly in JAVA mastering all of its features.",
			"Integrated google auth, maps SDK and the Drive API for multiple apps.",
			"Used the LibGDX framework to create two games.",
			"Created a RESTful API service for an app with Laravel (PHP).",
			"Implemented Firebase as a backend for two apps.",
			"Created modern designs following google’s material design guidelines.",
			"Used the MVVM architecture utilizing data binding and JetPack components.",
		],
	},
];
