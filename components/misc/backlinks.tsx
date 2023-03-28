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
			{Object.keys(backlinks).map((slug) => {
				return <Link as={slug} href="[...slug]" className="col-span-1"></Link>;
			})}
		</>
	);
};

export default Backlinks;
