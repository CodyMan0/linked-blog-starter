import BlockTemplate from "../components/misc/BlockTemplate";
import { BLOCK_LIST } from "../lib/constants";

export default function Home() {
	return (
		<div className="flex flex-row flex-wrap text-black">
			{BLOCK_LIST.map((block) => {
				console.log("test", block);
				return (
					<BlockTemplate
						key={block.id}
						width={block.width}
						color={block.color}
						label={block.label}
					/>
				);
			})}
		</div>
	);
}
