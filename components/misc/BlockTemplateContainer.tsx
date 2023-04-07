import { useRouter } from "next/router";
import { BLOCK_LIST, PROJECT_LIST } from "../../lib/constants";
import BlockTemplate from "./BlockTemplate";

const BlockTemplateContainer = () => {
	const router = useRouter();
	const location = router.pathname;

	const changedListAsLocation = location === "/" ? BLOCK_LIST : PROJECT_LIST;
	return (
		<div className="grid lg:grid-cols-2 phone:auto-rows-[40vh] sm:auto-rows-[50vh] md:auto-rows-[50vh] lg:auto-rows-[35vh] overflow-hidden">
			{changedListAsLocation.map((block) => {
				console.log(block);
				return (
					<BlockTemplate
						key={block.id}
						width={block.width}
						color={block.color}
						label={block.label}
						image={block?.image}
						stacks={block?.stacks}
					/>
				);
			})}
		</div>
	);
};
export default BlockTemplateContainer;
