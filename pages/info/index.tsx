import { NextSeo } from "next-seo";
import Link from "next/link";

export default function Info() {
	return (
		<>
			<NextSeo
				title="Info"
				openGraph={{
					description: "사이드 정보 입니다.",
					type: "website",
				}}
			/>
			<div className="w-full p-2 lg:p-16 max-w-screen-xl mx-auto my-0">
				<h1 className="text-4xl font-extrabold my-7">사이드 정보</h1>
				<h2 className="text-2xl font-bold my-7">리소스 📚</h2>
				<ul>
					<li className="tracking-wider mt-3">
						해당 웹 페이지는 Next.js로 만들어졌습니다.
					</li>
					<li className="tracking-wider mt-3">
						옵시디언과 연동시켜주는 오픈 소스 :
						<Link
							href="https://github.com/matthewwong525/linked-blog-starter"
							className="underline underline-offset-4 text-link ml-4"
						>
							matthewwong525 / linked-blog-starter
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
}
