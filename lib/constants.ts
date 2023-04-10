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
		label: "RUNNERUP",
		gridLayout: "1/3",
	},
	{
		id: 4,
		label: "GACHI",
		image: "gachi.png",
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
		label: "RUNNERUP",
		stacks: ["nextJs", "typescript", "storybook"],
		gridLayout: "1/2",
	},
	{
		id: 2,
		label: "GACHI",
		image: "gachi.png",
		stacks: ["svelteKit", "typescript", "tailwind"],
		gridLayout: "1/2",
	},
	{
		id: 3,
		label: "PODO",
		image: "",
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
	RUNNERUP: "projects/runnerup",
	GACHI: "projects/gachi",
	PODO: "projects/podo",
	"Digital Garden": "knowledge_MOCs",
};
