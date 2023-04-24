import React from "react";
import Tag from "../../tag/Tag";
import { useRouter } from "next/router";

type Props = {
	children: React.ReactNode;
	summary?: string;
	title: string;
	introduction?: string;
	skillSet?: string[];
};

const BasicContentLayout = ({
	children,
	title,
	introduction,
	summary,
	skillSet,
}: Props) => {
	const router = useRouter();
	const path = router.pathname;
	return (
		<div className="w-full p-16 max-w-screen-xl mx-auto my-0">
			<span className="tracking-wider text-lg uppercase">{summary}</span>
			<h1 className="text-4xl font-extrabold my-7">{title}</h1>
			{skillSet?.length > 0 && (
				<div className="mb-4">
					기술 키워드:
					<Tag content={skillSet[0]} />
					<Tag content={skillSet[1]} />
					<Tag content={skillSet[2]} />
				</div>
			)}
			{path !== "/about" && (
				<div className="mb-4">
					작업 키워드:
					<span className="leading-relaxed text-sm pb-7 tracking-wider mx-1">
						정리해보기
					</span>
				</div>
			)}
			{children}
		</div>
	);
};

export default BasicContentLayout;
