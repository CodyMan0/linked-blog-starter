import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { IOtherAbout } from "../../content/about";

const Timeline = ({ title, list }: IOtherAbout) => {
	return (
		<section>
			<h2 className="text-2xl font-bold my-7">{title}</h2>
			<VerticalTimeline>
				{list.map((project, index) => (
					<VerticalTimelineElement
						key={index}
						className="vertical-timeline-element--work"
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
									alignItems: "center",
									justifyContent: "center",
								}}
								src={project.imageSrc}
								alt={project.alt}
							/>
						}
						iconStyle={{
							width: "60px",
							height: "60px",
							color: "#fff",
							display: "flex",
						}}
					>
						<h3 className="vertical-timeline-element-title">
							<strong>{project.subTitle.text}</strong>
						</h3>

						<p>{project.description}</p>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</section>
	);
};
export default Timeline;
