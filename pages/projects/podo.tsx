import Github from "../../components/link/Github";
import Explain from "../../components/misc/Explain";
import BasicContentLayout from "../../components/misc/layout/basicContentLayout";
import { PROJECT_LIST } from "../../lib/constants";

const result = PROJECT_LIST.find((item) => item.label === "PODO");

const Podo = () => {
	return (
		<BasicContentLayout
			title="포도"
			summary="SOCIALMEDIA"
			introduction="프로젝트 요약란"
			skillSet={result.stacks}
		>
			<Explain content={""} />
			<Github />
		</BasicContentLayout>
	);
};

export default Podo;
