export const CMS_NAME = "Markdown";
export const HOME_OG_IMAGE_URL =
	"https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg";

export const BLOCK_LIST = [
	{
		id: 1,
		width: 40,
		color: "blue",
		label: "KODA",
		image: "survey.png",
	},
	{
		id: 2,
		width: 60,
		color: "red",
		label: "About Me",
		image: "aboutMe.jpg",
	},
	{
		id: 3,
		width: 33.3,
		color: "yellow",
		label: "RUNNERUP",
	},
	{
		id: 4,
		width: 33.3,
		color: "purple",
		label: "GACHI",
		image: "gachi.png",
	},
	{
		id: 6,
		width: 33.3,
		color: "purple",
		image: "obsidian.png",
		label: "Digital Garden",
	},
];

export const PROJECT_LIST = [
	{
		id: 1,
		width: 33.3,
		color: "yellow",
		label: "RUNNERUP",
	},
	{
		id: 2,
		label: "GACHI",
		image: "gachi.png",
	},
	{
		id: 3,
		label: "KODA",
		image: "survey.png",
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
	"Digital Garden": "knowledge_MOCs",
};
