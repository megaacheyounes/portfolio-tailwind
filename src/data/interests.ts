const INTERESTS_PATH_PREFIX = "assets/hobbies/";
export interface Interest {
	name: string;
	icon: string;
	color: string;
	bg: string;
}
//todo: add road trip[s
export const INTERESTS: Interest[] = [
	{
		name: "Gaming",
		icon: "videogame_asset",
		color: "c3",
		bg: INTERESTS_PATH_PREFIX + "gaming.jpg",
	},
	{
		name: "Workout",
		icon: "fitness_center",
		color: "c2",
		bg: INTERESTS_PATH_PREFIX + "gym.jpg",
	},
	{
		name: "Crypto Currencies",
		icon: "money",
		color: "c1",
		bg: INTERESTS_PATH_PREFIX + "cryptocurrency.jpg",
	},
	{
		name: "Running",
		icon: "directions_run",
		color: "c4",
		bg: INTERESTS_PATH_PREFIX + "running.jpg",
	},
];
