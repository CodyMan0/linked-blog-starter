import React from "react";

type Props = {
	children: React.ReactNode;
	title: string;
	introduction?: string;
};

const BasicContentLayout = ({ children, title, introduction }: Props) => {
	return (
		<div className="w-full h-full p-16">
			<h1 className="text-4xl font-bold my-7">{title && `제목:${title}`}</h1>
			<h2 className="leading-relaxed text-lg pb-7 tracking-wider">
				{`소개: ${introduction}`}
			</h2>
			{children}
		</div>
	);
};

export default BasicContentLayout;
