import jsonData from "./projects.json";

export interface IProjects {
	Title: {
		text: string;
	};
	getRepo: string;
	startDate: string;
	endDate: string;
	description: string;
	imageSrc: string;
	alt: string;
}

export interface IOtherProjects {
	title: string;
	list: IProjects[];
	type: string;
}

export { jsonData };
