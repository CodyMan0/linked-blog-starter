import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";
import image from "/public/assets/blog/authors/brian.png";

const SideBar = () => {
	return (
		<aside className="w-full h-full flex flex-col flex-nowrap justify-between bg-black text-white p-10">
			<div className="items-start flex flex-col gap-10">
				<Image
					width={80}
					height={80}
					src={image}
					alt="Picture of me"
					className="rounded-full"
				/>
				<div className="flex flex-col gap-2">
					<Link href="/about" className="pl-1 leading-normal text-3xl">
						About
					</Link>
					<Link href="/project" className="pl-1 leading-normal text-3xl">
						Project
					</Link>
					<Link href="/knowledge_MOCs" className="pl-1 leading-normal text-3xl">
						KnowledgeBase
					</Link>
				</div>
			</div>
			<Footer />
		</aside>
	);
};

export default SideBar;
