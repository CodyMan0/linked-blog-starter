import { AppProps } from "next/app";
import "../styles/index.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Layout from "../components/misc/layout";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</Layout>
	);
}
