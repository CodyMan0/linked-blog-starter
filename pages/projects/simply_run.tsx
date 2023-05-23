import Github from "../../components/link/Github";
import BasicContentLayout from "../../components/misc/layout/basicContentLayout";
import { PROJECT_LIST } from "../../lib/constants";

const result = PROJECT_LIST.find((item) => item.label === "SIMPLY_RUN");

const Simply_run = () => {
	return (
		<BasicContentLayout
			title=""
			summary="RUNNING_PLATFORM"
			introduction="프로젝트 요약란"
			skillSet={result.stacks}
		>
			<Github />
		</BasicContentLayout>
	);
};

export default Simply_run;
