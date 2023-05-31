import { NextSeo } from "next-seo";
import Timeline from "../../components/element/Timeline";
import "react-vertical-timeline-component/style.min.css";
import { jsonData as projects, IOtherProjects } from "../../content/projects";
import { jsonData as about, IOtherAbout } from "../../content/about";
import ContainerLayout from "../../components/misc/layout/containerLayout";

interface Props {
	projectList: IOtherProjects;
}

export default function Projects({ projectList }: Props) {
	console.log("pL", projectList);
	return (
		<ContainerLayout>
			<NextSeo
				title="Projects"
				// openGraph={{
				// 	title: post.title,
				// 	description,
				// 	type: "article",
				// 	images: [
				// 		{
				// 			url: post.ogImage?.url
				// 				? post.ogImage.url
				// 				: "https://fleetingnotes.app/favicon/512.png",
				// 			width: post.ogImage?.url ? null : 512,
				// 			height: post.ogImage?.url ? null : 512,
				// 			type: null,
				// 		},
				// 	],
				// }}
			/>

			<Timeline {...projectList} />
		</ContainerLayout>
	);
}

export async function getStaticProps() {
	return {
		props: {
			projectList: projects,
		},
	};
}
