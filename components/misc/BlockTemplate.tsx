import Image from "next/image";
import Link from "next/link";
import { convertLabelName } from "../../lib/constants";

type Props = {
	label?: string;
	width?: number;
	color?: string;
	image?: any;
};

const BlockTemplate = ({ width, color, image, label }: Props) => {
	console.log(image);
	return (
		<div className="w-full relative overflow-hidden">
			<Link href={`/${convertLabelName[label]}`} className="">
				{image && (
					<Image
						src={`/assets/blog/authors/${image}`}
						alt="project"
						fill
						style={{ width: "100%", height: "100%" }}
						className=" object-cover absolute t-0 left-0 w-full h-full transition ease-in-out delay-150 hover:-translate-1 hover:scale-110"
					/>
				)}
				<button className="bg-white z-10 absolute top-3.5 right-3.5 p-3 sm:text-sm md:text-xl lg:text-2xl font-bold border-2 border-black rounded-sm drop-shadow-lg">
					{label}
				</button>
			</Link>
		</div>
	);
};

export default BlockTemplate;
