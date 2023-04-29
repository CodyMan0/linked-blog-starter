import Image from "next/image";
import Link from "next/link";
import { convertLabelName } from "../../lib/constants";

type Props = {
	label?: string;
	width?: number;
	color?: string;
	image?: string | undefined;
	stacks?: string[] | undefined;
	gridLayout?: string | undefined;
};

const BlockTemplate = ({ gridLayout, image, label, stacks }: Props) => {
	const customObject = {
		"1/3": "col-span-1",
		"2/3": "col-span-2",
		"3/3": "col-span-3",
		"1/2": "col-span-2",
	};

	console.log(gridLayout, image, label, stacks);

	return (
		<div
			className={`w-full ${customObject[gridLayout]} relative overflow-hidden`}
		>
			<Link href={`/${convertLabelName[label]}`} className="">
				<>
					{image && (
						<Image
							src={`/assets/blog/authors/${image}`}
							alt="project"
							fill
							style={{ width: "100%", height: "100%" }}
							className=" object-cover absolute t-0 left-0 w-full h-full transition ease-in-out delay-100 hover:-translate-1 hover:scale-110 brightness-75 hover:brightness-100"
						/>
					)}

					<button className="bg-white absolute z-10 top-3.5 right-3.5 p-3 sm:text-sm md:text-xl lg:text-2xl font-bold border-2 border-black rounded-sm drop-shadow-lg">
						{label}
					</button>

					<div className=" absolute top-[85%] right-3.5 sm:text-sm lg:text-md">
						{stacks &&
							stacks?.map((stack, idx) => {
								return (
									<span
										key={idx}
										className="font-medium bg-white border p-1 m-1 border-black"
									>
										{stack}
									</span>
								);
							})}
					</div>
				</>
			</Link>
		</div>
	);
};

export default BlockTemplate;
