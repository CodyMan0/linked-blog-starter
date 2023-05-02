import Link from "next/link";
import NotePreview from "./note-preview";

type Props = {
	backlinks: {
		[k: string]: {
			title: string;
			excerpt: string;
		};
	};
};

const Backlinks = ({ backlinks }: Props) => {
	console.log("ink", backlinks);

	return (
		<>
			{Object.keys(backlinks).map((slug, idx) => {
				const post = backlinks[slug];
				console.log(post);
				return (
					<Link key={idx} as={slug} href="[...slug]" className="col-span-1">
						<NotePreview title={post.title} content={post.excerpt} />
					</Link>
				);
			})}
		</>
	);
};

export default Backlinks;
