import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { IOtherAbout } from "../../content/about";
import Link from "next/link";
import Image from "next/image";
import instaIcon from "/public/assets/github.png";

const Timeline = ({ title, list, type }: IOtherAbout) => {
	return (
		<section>
			<h2 className="text-2xl font-bold my-7">{title}</h2>
			<VerticalTimeline>
				{list.map((project, index) => (
					<VerticalTimelineElement
						key={index}
						contentStyle={{
							boxShadow:
								"0 10px 25px 20px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
							borderRadius: "10px",
						}}
						date={`${project.startDate} ~ ${project.endDate}`}
						icon={
							<img
								style={{
									borderRadius: "50%",
									maxWidth: "100%",
									height: "auto",
								}}
								src={project.imageSrc}
								alt={project.alt}
							/>
						}
						iconStyle={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							color: "#fff",
						}}
					>
						<h3 className="vertical-timeline-element-title">
							<strong>{project.Title.text}</strong>
						</h3>
						{type === "project" ? (
							<Link href={project?.gitRepo} className="flex items-center mt-3">
								<Image
									width={20}
									height={20}
									src={instaIcon}
									alt="instagramIcon"
									className="rounded-md bg-white hover:bg-cyan transition-all duration-300"
								/>
								<h4 className="vertical-timeline-element-subtitle text-xs">
									{project.gitRepo}
								</h4>
							</Link>
						) : null}

						<p>{project.description}</p>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</section>
	);
};
export default Timeline;
