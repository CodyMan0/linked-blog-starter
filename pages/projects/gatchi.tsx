import Github from "../../components/link/Github";
import BasicContentLayout from "../../components/misc/layout/basicContentLayout";
import { PROJECT_LIST } from "../../lib/constants";

const result = PROJECT_LIST.find((item) => item.label === "GATCHI");
console.log(result);
const Gatchi = () => {
	return (
		<BasicContentLayout
			title={result.label}
			summary="community"
			introduction="프로젝트 요약란"
			skillSet={result.stacks}
		>
			<Github />
		</BasicContentLayout>
	);
};

export default Gatchi;
