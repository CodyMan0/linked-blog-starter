import { jsonData as about, IOtherAbout } from "../../content/about";
import { NextSeo } from "next-seo";
import "react-vertical-timeline-component/style.min.css";
import Link from "next/link";
import Timeline from "../../components/element/Timeline";

interface Props {
	aboutInfo: IOtherAbout;
}

export default function About({ aboutInfo }: Props) {
	return (
		<>
			<NextSeo
				title="About"
				openGraph={{
					description: "안녕하세요. 프론트엔드 개발자 이주영입니다.",
					type: "website",
				}}
			/>
			<div className="w-full p-2 lg:p-16 max-w-screen-xl mx-auto my-0">
				<span className="tracking-wider text-lg uppercase">
					<strong className="hover:text-blue-200 transition-all duration-300">
						FRONTEND
					</strong>{" "}
					SOFTWARE ENGINEER
				</span>
				<h1 className="text-4xl font-extrabold my-7">
					안녕하세요 이주영입니다.
				</h1>

				<article className="mb-20">
					<h2 className="text-2xl font-bold my-5">Introduction</h2>
					<p className="about-p">
						안녕하세요 🥰 찾아와 주셔서 감사합니다. 프론트엔드 개발자{" "}
						<strong>이주영</strong>입니다.
					</p>
					<p className="about-p ">
						2022년 여름, 교양 수업을 통해 프로그래밍의 무궁무진한 가능성을
						체감했습니다.
					</p>
					<p className="about-p ">
						가만히 있을 수 없었고 좋아했던 영어를 도구 삼아 학습할 수 있는 무료
						오픈소스 (the odin project)를 통해 개발에 입문 하게 되었습니다.
					</p>

					<p className="about-p">
						<strong>React</strong>와 <strong>Typescript</strong>를 주로 사용하고
						있으며 현재는 Web Service를 즐겁게 개발하고 있습니다.
					</p>
					<p className="about-p">
						빠르게 성장하고 있을 뿐 아니라 지식을 체계적으로 정리하고 있습니다.
						문제 해결에 필요한 개념들을 빠르게 찾아 익히는 데 집중하고 있습니다.
					</p>
					<p>
						Obsidian 메모 어플리케이션을 활용하여 정리한 내용이 자동으로{" "}
						<Link
							href="/knowledge_MOCs"
							className="underline underline-offset-4 text-link"
						>
							개인 웹페이지
						</Link>
						에 베포되도록 설정했습니다.
					</p>
				</article>

				<Timeline {...aboutInfo} type="about" />
			</div>
		</>
	);
}

export async function getStaticProps() {
	return {
		props: {
			aboutInfo: about,
		},
	};
}
