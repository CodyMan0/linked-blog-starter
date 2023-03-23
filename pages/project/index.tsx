import Image from "next/image";
import Layout from "../../components/misc/layout";
import koda from "/public/assets/blog/authors/koda.png";

export default function Project() {
	return (
		<div className="flex flex-row flex-wrap text-black">
			<div className="min-w-[50%] h-64">
				<Image
					src={koda}
					alt="project"
					style={{ height: "100%", width: "100%" }}
				/>
			</div>
			<div className="min-w-[50%] h-64">2</div>
			<div className="min-w-[50%] h-64">3</div>
			<div className="min-w-[50%] h-64">4</div>
		</div>
	);
}
