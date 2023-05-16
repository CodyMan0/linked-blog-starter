import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";
import image from "/public/assets/blog/authors/brian.png";
import StyledLink from "./StyledLink";

const SideBar = () => {
	return (
		<aside className="w-full h-full flex lg:flex-col flex-nowrap bg-black text-white p-10 phone:p-6 sm:p-8">
			<div className="w-full h-full flex items-center justify-between lg:items-start lg:justify-start lg:flex-col gap-10">
				<Link href="/">home</Link>
				<div className="flex lg:flex-col gap-6">
					<StyledLink href="./about" location="header">
						About
					</StyledLink>
					<StyledLink href="./projects" location="header">
						Projects
					</StyledLink>
					<StyledLink href="./knowledge_MOCs" location="header">
						Knowledge
					</StyledLink>
				</div>
				<Footer />
			</div>
		</aside>
	);
};

export default SideBar;
