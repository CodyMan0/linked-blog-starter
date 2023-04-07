import React from "react";

type Props = {
	children: React.ReactNode;
	summary?: string;
	title: string;
	introduction?: string;
};

const BasicContentLayout = ({
	children,
	title,
	introduction,
	summary,
}: Props) => {
	return (
		<div className="w-full h-full p-16">
			<span className="tracking-wider text-lg uppercase">{summary}</span>
			<h1 className="text-4xl font-bold my-7">{title}</h1>
			<h2 className="leading-relaxed text-lg pb-7 tracking-wider">
				{introduction}
			</h2>
			{children}
		</div>
	);
};

export default BasicContentLayout;
