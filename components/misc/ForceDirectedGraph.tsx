import * as d3 from "d3";
import { useEffect, useRef } from "react";
import styles from "../../styles/ForceDirectedGraph.module.css";

type Props = {
	backlinks: {
		[k: string]: {
			title: string;
			excerpt: string;
		};
	};
	title: string;
};

const ForceDirectedGraph = ({ backlinks, title }: Props) => {
	const graphRef = useRef<SVGSVGElement>(null);

	const getGraphView = () => {
		if (!graphRef.current) return;
		const svgElement = graphRef.current;
		const width = svgElement.getBoundingClientRect().width;
		const height = svgElement.getBoundingClientRect().height;

		const simulation = d3
			.forceSimulation()
			.force(
				"link",
				d3.forceLink().id((d) => d.node)
			)
			.force("charge", d3.forceManyBody().strength(-50))
			.force("center", d3.forceCenter(width / 2, height / 2))
			.force(
				"collision",
				d3.forceCollide((d) => d.degree + 10)
			);

		const links = Object.values(backlinks).map((value) => ({
			source: value.title,
			target: title,
		}));

		const testNode = Object.values(backlinks).map((value) => ({
			node: value.title,
		}));

		const nodes = [
			{
				node: title,
			},
			...testNode,
		];

		simulation.nodes(nodes).on("tick", () => {
			link
				.attr("x1", (d) => d.source.x)
				.attr("y1", (d) => d.source.y)
				.attr("x2", (d) => d.target.x)
				.attr("y2", (d) => d.target.y);

			node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
		});

		simulation.force("link").links(links);

		const dragStarted = (event: any, d: any) => {
			if (!event.active) simulation.alphaTarget(0.3).restart();
			d.fx = d.x;
			d.fy = d.y;
		};

		const dragged = (event: any, d: any) => {
			d.fx = event.x;
			d.fy = event.y;
		};

		const dragEnded = (event: any, d: any) => {
			if (!event.active) simulation.alphaTarget(0);
			d.fx = null;
			d.fy = null;
		};

		const link = d3
			.select(graphRef.current)
			.append("g")
			.attr("class", styles.link)
			.selectAll("line")
			.data(links)
			.enter()
			.append("line");

		const node = d3
			.select(graphRef.current)
			.append("g")
			.attr("class", styles.node)
			.selectAll("circle")
			.data(nodes)
			.enter()
			.append("circle")
			.attr("r", 10)
			.call(
				d3
					.drag()
					.on("start", dragStarted)
					.on("drag", dragged)
					.on("end", dragEnded)
			);

		node
			.append("text")
			.attr("x", 12)
			.attr("dy", ".35em")
			.attr("class", styles.text)
			.text((d) => d.node);
	};

	useEffect(() => {
		getGraphView();
	}, []);

	return <svg className="w-full h-full relative" ref={graphRef} />;
};

export default ForceDirectedGraph;
