import { URLSearchParams } from "url";
import Explain from "../../components/misc/Explain";
import BasicContentLayout from "../../components/misc/layout/basicContentLayout";
import { useRouter } from "next/router";

export default function About() {
	return (
		<BasicContentLayout summary="introduction" title="Hi~ Brian here!">
			<Explain
				content="안녕하세요. 프론트엔드 개발자 이주영입니다. 저는 영문학을 전공으로 하였습니다. 하지만 우연치않게 프로그래밍 입문이라는 교양 수업을 듣고 프로그래밍에 대해 관심을 가지게 되었습니다.
			theOdinProject이라는 오픈소스를 활용하여 3개월간 독학을 하였고 이후 팀프로젝트 경험을 위해 부트캠프를 진행하면서 개발자의 역량을 키우는데 노력했습니다. 부트 캠프를 수료한 이후 사이드 프로젝트를 진행하며 기본기를 쌓는데 노력하고 있습니다. "
			/>
			<Explain content=" " />
		</BasicContentLayout>
	);
}
