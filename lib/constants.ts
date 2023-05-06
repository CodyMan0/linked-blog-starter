export const CMS_NAME = "Markdown";
export const HOME_OG_IMAGE_URL =
	"https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg";

export const BLOCK_LIST = [
	{
		id: 1,
		label: "KODA",
		image: "survey.png",
		gridLayout: "1/3",
	},
	{
		id: 2,
		label: "About Me",
		image: "aboutMe.jpg",
		gridLayout: "2/3",
	},
	{
		id: 3,
		label: "SIMPLY_RUN",
		image: "simplyRun.png",
		gridLayout: "1/3",
	},
	{
		id: 4,
		label: "GATCHI",
		image: "gatchi.png",
		gridLayout: "1/3",
	},
	{
		id: 5,
		image: "obsidian.png",
		label: "Digital Garden",
		gridLayout: "1/3",
	},
];

export const PROJECT_LIST = [
	{
		id: 1,
		label: "SIMPLY_RUN",
		image: "simplyRun.png",
		stacks: ["nextJs", "typescript", "storybook", "react-query"],
		gridLayout: "1/2",
	},
	{
		id: 2,
		label: "GATCHI",
		image: "gatchi.png",
		stacks: ["svelteKit", "typescript", "tailwind"],
		gridLayout: "1/2",
	},
	{
		id: 3,
		label: "PODO",
		image: "Favicon.jpeg",
		stacks: ["reactJs", "typescript", "express.js", "EC2"],
		gridLayout: "1/2",
	},
	{
		id: 4,
		label: "KODA",
		image: "survey.png",
		stacks: ["reactJs", "javascript", "css-in-js"],
		gridLayout: "1/2",
	},
];

export const widthVariants = {
	40: "min-w-[40%]",
	60: "min-w-[60%]",
	33.3: "min-w-[33.3%]",
};
export const colorVariants = {
	blue: "bg-blue-600 hover:bg-blue-500",
	red: "bg-red-500 hover:bg-red-400",
	yellow: "bg-yellow-300 hover:bg-yellow-400 ",
	pink: "bg-yellow-300 hover:bg-yellow-400 ",
	purple: "bg-yellow-300 hover:bg-yellow-400 ",
};

export const convertLabelName = {
	"About Me": "about",
	KODA: "projects/koda",
	SIMPLY_RUN: "projects/simply_run",
	GATCHI: "projects/gatchi",
	PODO: "projects/podo",
	"Digital Garden": "knowledge_MOCs",
};
