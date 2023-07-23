
export const Skill = [
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
	"Express.js",
	"Google Play Services",
	"Photoshop",
	"Linux",
	"WordPress",
	"MUI",
	"Angular",
	"WooCommerce",
	"TypeScript",
	"MongoDB",
	"React",
	"Jetpack Compose",
	"Spring Boot",
	"Tailwind CSS"
] as const
export type SkillType = typeof Skill[number]


const Brand = [
	'Huawei',
	"Algebratec",
	"Tawasal",
	"Carrefour",
	"Dubai Police",
	"Reel Cinemas",
	"Dubai Sporrts",
	"Emirates",
	"Steppi",
	"Visit Abudhabi"

] as const

export type BrandType = typeof Brand[number]


export interface Project {
	type: 'mobile' | 'web';
	name: string;
	link?: string;
	company?: string;
	description: string;
	image?: string;
	technologies: SkillType[],
	images?: string[]
	client?: BrandType
}


export interface ProjectCollection {
	title: string,
	projects: Project[]
}
