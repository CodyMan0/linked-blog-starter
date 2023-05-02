import { NextSeo } from "next-seo";
import BlockTemplateContainer from "../../components/misc/BlockTemplateContainer";

export default function Projects() {
	return (
		<>
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
			<BlockTemplateContainer />
		</>
	);
}
