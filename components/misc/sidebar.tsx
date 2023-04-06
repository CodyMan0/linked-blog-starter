import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";
import image from "/public/assets/blog/authors/brian.png";

const SideBar = () => {
	return (
		<aside className="w-full h-full flex lg:flex-col flex-nowrap bg-black text-white p-10 phone:p-6 sm:p-8">
			<div className="w-full h-full flex items-center justify-between lg:items-start lg:justify-start lg:flex-col gap-10">
				<Link href="/">
					<Image
						width={90}
						height={90}
						src={image}
						alt="my picture"
						className="rounded-full phone:w-16 sm:w-20"
					/>
				</Link>
				<div className="flex lg:flex-col gap-6">
					<span className="">
						<Link
							className="relative pl-1 pb-1 lg:pb-2 leading-normal lg:text-3xl md:text-2xl sm:text-xl hover:text-blue-200 transition-all duration-300 after:content-[''] after:bg-white after:h-[3px] after:w-[0%] after:left-0 after:bottom-0 after:absolute after:hover:w-full after:transition-all after:duration-300 tracking-wide phone:hidden sm:inline"
							href="/about"
						>
							About
						</Link>
					</span>
					<span>
						<Link
							className="relative pl-1 pb-1 lg:pb-2 leading-normal lg:text-3xl md:text-2xl sm:text-xl hover:text-blue-200 transition-all duration-300 after:content-[''] after:bg-white after:h-[3px] after:w-[0%] after:left-0 after:bottom-0 after:absolute after:hover:w-full after:transition-all after:duration-300 tracking-wide phone:hidden sm:inline"
							href="/projects"
						>
							Projects
						</Link>
					</span>
					<span>
						<Link
							className="relative pl-1 pb-1 lg:pb-2 leading-normal lg:text-3xl md:text-2xl sm:text-xl hover:text-blue-200 transition-all duration-300 after:content-[''] after:bg-white after:h-[3px] after:w-[0%] after:left-0 after:bottom-0 after:absolute after:hover:w-full after:transition-all after:duration-300 tracking-wide phone:hidden sm:block md:block lg:block"
							href="/knowledge_MOCs"
						>
							KnowledgeBase
						</Link>
					</span>
				</div>
			</div>
		</aside>
	);
};

export default SideBar;
