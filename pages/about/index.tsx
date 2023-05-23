import { NextSeo } from "next-seo";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { widthVariants } from "../../lib/constants";
import Link from "next/link";

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
			<div className="w-full p-2 lg:p-16 max-w-screen-xl mx-auto my-0">
				<span className="tracking-wider text-lg uppercase">
					<strong>FRONTEND</strong> SOFTWARE ENGINEER
				</span>
				<h1 className="text-4xl font-extrabold my-7">
					안녕하세요 이주영입니다.
				</h1>
				<article className="">
					<p className="about-p">
						안녕하세요 🥰 찾아와 주셔서 감사합니다.
						<br /> 프론트엔드 개발자,이주영입니다.
					</p>
					<p className="about-p ">
						2022년 여름, 교양 수업을 통해 프로그래밍의 무궁무진한 가능성을
						체감했습니다. <br />
						가만히 있을 수 없었고 좋아했던 영어를 도구 삼아 학습할 수 있는 무료
						오픈소스 (the odin project)를 통해 개발에 입문 하게 되었습니다.
					</p>
					<p className="about-p">
						<strong>React</strong>와 <strong>Typescript</strong>를 주로 사용하고
						있으며 현재는 Web Service를 즐겁게 개발하고 있습니다.
					</p>
					<p className="about-p">
						색다르게 정리하는 것을 좋아합니다. Obsidian 메모 어플리케이션을
						활용하여 정리한 내용이 자동적으로{" "}
						<Link
							href="/knowledge_MOCs"
							className="underline underline-offset-4 text-link"
						>
							개인 웹페이지
						</Link>
						에 베포되도록 설정했으며, <br />
						사소할 수 있으나 다양하게 오픈소스 활동에 기여하고 있습니다.
					</p>
					<p className="about-p">
						<strong>
							궁극적으로 모두에게 도움이 되고 사회에 이롭게 기여할 수 있는
							개발자가 되는 것이 목표입니다.
						</strong>
					</p>
				</article>

				<section>
					<h2 className="text-2xl font-bold my-7">My Dev Journey</h2>
					<VerticalTimeline>
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{
								boxShadow:
									"0 10px 25px 20px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
								borderRadius: "10px",
							}}
							date="2023.1 ~ 현재"
							icon={
								<img
									style={{
										borderRadius: "50%",
										alignItems: "center",
										justifyContent: "center",
									}}
									src="/assets/submit.jpeg"
									alt="pre_on_boarding_image"
								/>
							}
							iconStyle={{
								color: "#fff",
								display: "flex",
							}}
							// iconOnClick={() => window.open()}
						>
							<h3 className="vertical-timeline-element-title">
								<strong>취업 준비</strong>
							</h3>

							<p>
								취업을 준비하면서 비옥한 토양을 만들기 위해 매일 개인 웹페이지에
								지식을 정리하고 있습니다. 기본적인 알고리즘 및 네트워크 기본을
								공부하고 있으며 꾸준히 실제 일상에서 불편한 점을 찾아 해결하는
								프로젝트를 기획하고 진행하고 있습니다.
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{
								boxShadow:
									"0 10px 25px 20px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
								borderRadius: "10px",
							}}
							date="2022.11 ~ 2022.12"
							icon={
								<img
									style={{
										borderRadius: "50%",
										alignItems: "center",
										justifyContent: "center",
									}}
									src="/assets/pre.png"
									alt="pre_on_boarding_image"
								/>
							}
							iconStyle={{
								color: "#fff",
								display: "flex",
							}}
							// iconOnClick={() => window.open()}
						>
							<h3 className="vertical-timeline-element-title">
								<strong>원티드 프리온보딩 코스</strong>
							</h3>

							<p>
								원티드에서 주관하는 프론트엔드 코스로써 여러 IT기업의 실무
								과제로 이루어졌으며 실무자/취준생 등 여러 팀원들과 같이 다양한
								프로젝트를 진행하였습니다
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{
								boxShadow:
									"0 10px 25px 20px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
								borderRadius: "10px",
							}}
							date="2022.09 ~ 2022.10"
							icon={
								<img
									style={{
										borderRadius: "50%",
										alignItems: "center",
										justifyContent: "center",
									}}
									src="/assets/kolon.png"
									alt="kolon_global_image"
								/>
							}
							iconStyle={{
								color: "#fff",
								padding: "5px",
								display: "flex",
							}}
							// iconOnClick={() => window.open()}
						>
							<h3 className="vertical-timeline-element-title">
								<strong>코오롱 글로벌 인턴십</strong>
							</h3>

							<p>
								부트캠프 기업 협업 인턴쉽으로 코오롱 글로벌 DT전략 기획팀에서
								설문조사 웹 어플리케이션 프로젝트를 진행하면서 실무 로직 및
								가이드를 경험하였습니다
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{
								boxShadow:
									"0 10px 25px 20px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
								borderRadius: "10px",
							}}
							date="2022.07 ~ 2022.10"
							icon={
								<img
									style={{
										borderRadius: "50%",
										alignItems: "center",
										justifyContent: "center",
									}}
									src="/assets/we.png"
									alt="wecode_logo"
								/>
							}
							iconStyle={{
								color: "#fff",
								display: "flex",
							}}
							// iconOnClick={() => window.open()}
						>
							<h3 className="vertical-timeline-element-title">
								<strong>위코드 부트캠프</strong>
							</h3>

							<p>
								프론트엔드 개발자로 나아가고 다양한 프로젝트를 경험하기 위해
								위코드 부트캠프를 수료하였습니다. 웹에 대한 폭넓은 학습 및
								알고리즘을 학습했으며, 동료 개발자와 다양한 프로젝트를
								진행하면서 많은 경험을 쌓았습니다.
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{
								boxShadow:
									"0 10px 25px 20px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
								borderRadius: "10px",
							}}
							date="2022.04 ~ 2022.06"
							icon={
								<img
									style={{
										borderRadius: "50%",
										alignItems: "center",
										justifyContent: "center",
									}}
									src="/assets/odin.png"
									alt="odin_image"
								/>
							}
							iconStyle={{
								color: "#fff",
								display: "flex",
							}}
							// iconOnClick={() => window.open()}
						>
							<h3 className="vertical-timeline-element-title">
								<strong>오딘 (해외 오픈소스) </strong>
							</h3>
							<p>
								4학년 1학기에 수강한 프로그래밍 교양 수업을 통해 처음으로
								python을 학습했습니다. 지금까지 너무나 당연하게 사용하고 있었던
								Internet이 궁금해졌고 WEB에 대한 궁금증으로 해외 무료 오픈소스인
								오딘을 통해 3개월간 학습을 진행했습니다
							</p>
						</VerticalTimelineElement>
					</VerticalTimeline>
				</section>
			</div>
		</>
	);
}
