import { useRouter } from "next/router";
import { BLOCK_LIST, PROJECT_LIST } from "../../lib/constants";
import BlockTemplate from "./BlockTemplate";

const BlockTemplateContainer = () => {
	const router = useRouter();
	const location = router.pathname;

	return (
		<div className="grid grid-cols-2 auto-rows-[35vh] overflow-hidden">
			{location === "/"
				? BLOCK_LIST.map((block) => {
						return (
							<BlockTemplate
								key={block.id}
								width={block.width}
								color={block.color}
								label={block.label}
							/>
						);
				  })
				: PROJECT_LIST.map((block) => {
						return <BlockTemplate key={block.id} label={block.label} />;
				  })}
		</div>
	);
};
export default BlockTemplateContainer;
