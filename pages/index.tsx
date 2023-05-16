import Head from "next/head";
import BlockTemplateContainer from "../components/misc/BlockTemplateContainer";
import Footer from "../components/misc/footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Brian | problem-solver</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<BlockTemplateContainer />
		</>
	);
}
