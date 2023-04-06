import { useRouter } from "next/router";
import { BLOCK_LIST, PROJECT_LIST } from "../../lib/constants";
import BlockTemplate from "./BlockTemplate";

const BlockTemplateContainer = () => {
	const router = useRouter();
	const location = router.pathname;

	const changedListAsLocation = location === "/" ? BLOCK_LIST : PROJECT_LIST;
	return (
		<div className="grid lg:grid-cols-2 auto-rows-[60vh] lg:auto-rows-[35vh] overflow-hidden">
			{changedListAsLocation.map((block) => {
				return (
					<BlockTemplate
						key={block.id}
						width={block.width}
						color={block.color}
						label={block.label}
						image={block?.image}
					/>
				);
			})}
		</div>
	);
};
export default BlockTemplateContainer;
