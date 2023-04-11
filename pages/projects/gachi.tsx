import BasicContentLayout from "../../components/misc/layout/basicContentLayout";
import { PROJECT_LIST } from "../../lib/constants";

const result = PROJECT_LIST.find((item) => item.label === "GACHI");
console.log(result);
const Gachi = () => {
	return (
		<BasicContentLayout
			title={result.label}
			summary="community"
			introduction="프로젝트 요약란"
			skillSet={result.stacks}
		>
			Gachi
		</BasicContentLayout>
	);
};

export default Gachi;
