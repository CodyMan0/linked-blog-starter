import { NextSeo } from "next-seo";

export default function About() {
	return (
		<>
			<NextSeo
				title="About"
				openGraph={{
					description: "안녕하세요. 프론트엔드 개발자 이주영입니다.",
					type: "website",
				}}
			/>
			<div className="w-full p-16 max-w-screen-xl mx-auto my-0">
				<span className="tracking-wider text-lg uppercase">
					프론트엔드 개발자
				</span>
				<h1 className="text-4xl font-extrabold my-7">
					안녕하세요 이주영이에요.
				</h1>
			</div>
		</>
	);
}
