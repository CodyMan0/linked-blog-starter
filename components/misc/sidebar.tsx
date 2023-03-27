import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";
import image from "/public/assets/blog/authors/brian.png";

const SideBar = () => {
	return (
		<aside className="w-full h-full flex flex-col flex-nowrap justify-between bg-black text-white p-10">
			<div className="items-start flex flex-col gap-10">
				<Link href="/">
					<Image
						width={80}
						height={80}
						src={image}
						alt="Picture of me"
						className="rounded-full"
					/>
				</Link>
				<div className="flex flex-col gap-2">
					<Link
						href="/about"
						className="relative pl-1 leading-normal text-3xl hover:text-blue-200 transition-all duration-300 after:content-[''] after:bg-white after:h-[3px] after:w-[0%] after:left-0 after:bottom-0 after:absolute after:hover:w-1/2 after:transition-all after:duration-300"
					>
						About
					</Link>
					<Link
						href="/project"
						className="relative pl-1 leading-normal text-3xl hover:text-blue-200 transition-all duration-300 after:content-[''] after:bg-white after:h-[3px] after:w-[0%] after:left-0 after:bottom-0 after:absolute after:hover:w-1/2 after:transition-all after:duration-300"
					>
						Project
					</Link>
					<Link
						href="/knowledge_MOCs"
						className="relative pl-1 leading-normal text-3xl hover:text-blue-200 transition-all duration-300 after:content-[''] after:bg-white after:h-[3px] after:w-[0%] after:left-0 after:bottom-0 after:absolute after:hover:w-full after:transition-all after:duration-300"
					>
						KnowledgeBase
					</Link>
				</div>
			</div>
			<Footer />
		</aside>
	);
};

export default SideBar;
