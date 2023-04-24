import Github from "../../components/link/Github";
import Explain from "../../components/misc/Explain";
import BasicContentLayout from "../../components/misc/layout/basicContentLayout";
import { PROJECT_LIST } from "../../lib/constants";

const result = PROJECT_LIST.find((item) => item.label === "KODA");

const Koda = () => {
	return (
		<BasicContentLayout
			title="Koda"
			summary="SURVEY"
			introduction="프로젝트 요약란"
			skillSet={result.stacks}
		>
			<Explain
				content={
					"Survey Tool 프로젝트로 서비스 설문조사 툴을 이용함에 따라 발생할 수 있는 개인정보 보호 이슈를 방지하고 고객 정보 및 응답 데이터를 자산화하기 위해 내부 서베이 툴을 구현했습니다."
				}
			/>
			<Github />
		</BasicContentLayout>
	);
};

export default Koda;
