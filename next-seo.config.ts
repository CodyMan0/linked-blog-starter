import { DefaultSeoProps } from "next-seo";

const description =
	"안녕하세요. 프론트 개발에 주력하고 있는 이주영입니다. 저에 대한 간단한 소개와 프로젝트 그리고 제 지식 노트를 확인하실 수 있습니다.";
// See https://www.npmjs.com/package/next-seo for more options
const config: DefaultSeoProps = {
	titleTemplate: "%s | 주영",
	defaultTitle: "주영::DevHub",
	description,

	openGraph: {
		type: "website",
		locale: "ko_KR",
		title: "프론트엔드 이주영",
		description,
	},
	additionalLinkTags: [
		{
			rel: "icon",
			type: "image/png",
			href: "/favicon/favicon-32x32.png",
			sizes: "32x32",
		},
		{
			rel: "icon",
			type: "image/png",
			href: "/favicon/favicon-16x16.png",
			sizes: "16x16",
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			href: "/favicon/apple-touch-icon.png",
		},
		{
			rel: "shortcut icon",
			type: "image/png",
			href: "/favicon/favicon.ico",
		},
		{
			rel: "manifest",
			href: "/favicon/site.webmanifest",
		},
	],
};

export default config;
