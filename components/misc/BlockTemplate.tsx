type Props = {
	label?: string;
	width: number;
	color: string;
	image?: string;
};

const BlockTemplate = ({ width, color, image, label }: Props) => {
	console.log(`위드 ${width} 컬러${color}`);

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
		<div
			className={`${widthVariants[width]} ${colorVariants[color]} h-64 relative`}
		>
			{image && "이미지"}
			<button className="bg-white z-10 absolute top-3.5 right-3.5 p-3 text-2xl font-bold border-2 border-black rounded-sm drop-shadow-lg">
				{label}
			</button>
		</div>
	);
};

export default BlockTemplate;
