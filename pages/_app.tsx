import { AppProps } from "next/app";
import "../styles/index.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Layout from "../components/misc/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</Layout>
	);
}
