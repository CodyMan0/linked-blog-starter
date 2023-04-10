import { useRouter } from "next/router";
import { BLOCK_LIST, PROJECT_LIST } from "../../lib/constants";
import BlockTemplate from "./BlockTemplate";

const BlockTemplateContainer = () => {
	const router = useRouter();
	const location = router.pathname;

	const changedListAsLocation = location === "/" ? BLOCK_LIST : PROJECT_LIST;
	return (
		<div
			className={`grid ${
				location === "/" ? "lg:grid-cols-3" : "lg:grid-cols-4"
			} phone:auto-rows-[40vh] sm:auto-rows-[50vh] md:auto-rows-[50vh] lg:auto-rows-[35vh] overflow-hidden`}
		>
			{changedListAsLocation.map((block) => {
				return (
					<BlockTemplate
						key={block.id}
						label={block?.label}
						image={block?.image}
						stacks={block?.stacks}
						gridLayout={block?.gridLayout}
					/>
				);
			})}
		</div>
	);
};
export default BlockTemplateContainer;
