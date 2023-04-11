import BasicContentLayout from "../../components/misc/layout/basicContentLayout";
import { PROJECT_LIST } from "../../lib/constants";

const result = PROJECT_LIST.find((item) => item.label === "KODA");
console.log(result);
const Koda = () => {
	return (
		<BasicContentLayout
			title="Koda"
			summary="SURVEY"
			introduction="프로젝트 요약란"
			skillSet={result.stacks}
		>
			dfd
		</BasicContentLayout>
	);
};

export default Koda;
