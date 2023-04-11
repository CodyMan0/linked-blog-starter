import React from "react";

type Props = {
	children: React.ReactNode;
	summary?: string;
	title: string;
	introduction?: string;
	skillSet: string[];
};

const BasicContentLayout = ({
	children,
	title,
	introduction,
	summary,
	skillSet,
}: Props) => {
	return (
		<div className="w-full h-full p-16">
			<span className="tracking-wider text-lg uppercase">{summary}</span>
			<h1 className="text-4xl font-extrabold my-7">{title}</h1>
			<div>
				기술 키워드
				<span className="leading-relaxed text-sm pb-7 tracking-wider">
					{skillSet}
				</span>
			</div>

			<div>
				작업 키워드
				<span className="leading-relaxed text-sm pb-7 tracking-wider"></span>
			</div>

			<h2 className="leading-relaxed text-lg pb-7 tracking-wider">
				{introduction}
			</h2>

			{children}
		</div>
	);
};

export default BasicContentLayout;
