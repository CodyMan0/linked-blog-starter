import jsonData from "./projects.json";

export interface IProjects {
	subTitle: {
		text: string;
	};
	startDate: string;
	endDate: string;
	description: string;
	imageSrc: string;
	alt: string;
}

export interface IOtherProjects {
	title: string;
	list: IProjects[];
}

export { jsonData };
