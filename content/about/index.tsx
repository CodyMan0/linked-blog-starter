import jsonData from "./about.json";

export interface IAbout {
	Title: {
		text: string;
	};
	gitRepo?: string;
	startDate: string;
	endDate: string;
	description: string;
	imageSrc: string;
	alt: string;
}

export interface IOtherAbout {
	title: string;
	list: IAbout[];
	type: string;
}

export { jsonData };
