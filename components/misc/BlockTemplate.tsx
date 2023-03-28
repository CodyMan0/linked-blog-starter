import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import survey from "/public/assets/blog/authors/survey.png";

type Props = {
	label?: string;
	width?: number;
	color?: string;
	image?: any;
};

const BlockTemplate = ({ width, color, image, label }: Props) => {
	console.log(image);

	const widthVariants = {
		40: "min-w-[40%]",
		60: "min-w-[60%]",
		33.3: "min-w-[33.3%]",
	};
	const colorVariants = {
		blue: "bg-blue-600 hover:bg-blue-500",
		red: "bg-red-500 hover:bg-red-400",
		yellow: "bg-yellow-300 hover:bg-yellow-400 ",
		pink: "bg-yellow-300 hover:bg-yellow-400 ",
		purple: "bg-yellow-300 hover:bg-yellow-400 ",
	};

	return (
		<div className="w-full relative overflow-hidden">
			<Link href="/" className="">
				{image && (
					<Image
						src={`/assets/blog/authors/${image}`}
						alt="project"
						fill
						style={{ width: "100%", height: "100%" }}
						className=" object-cover absolute t-0 left-0 w-full h-full transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 ;"
					/>
				)}
				<button className="bg-white z-10 absolute top-3.5 right-3.5 p-3 text-2xl font-bold border-2 border-black rounded-sm drop-shadow-lg">
					{label}
				</button>
			</Link>
		</div>
	);
};

export default BlockTemplate;
