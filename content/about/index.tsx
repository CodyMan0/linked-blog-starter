import jsonData from "./about.json";

export interface IAbout {
	subTitle: {
		text: string;
	};
	startDate: string;
	endDate: string;
	description: string;
	imageSrc: string;
	alt: string;
}

export interface IOtherAbout {
	title: string;
	list: IAbout[];
}

export { jsonData };
