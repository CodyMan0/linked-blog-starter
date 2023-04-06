import Image from "next/image";
import Link from "next/link";
import PreviewLink from "./preview-link";
import instaIcon from "/public/favicon/instagram.png";

const Footer = () => {
	return (
		<footer className="relative bottom-0 lg:fixed lg:left-0 lg:bottom-0 lg:w-96  w-full p-10 text-white bg-black">
			<div className="flex flex-row gap-3">
				<Link href="www">
					<Image
						width={30}
						height={30}
						src={instaIcon}
						alt="instagramIcon"
						className="rounded-md bg-white hover:bg-cyan transition-all duration-300"
					/>
				</Link>
			</div>
			<p>
				<Link href="/info">Made with</Link> 하트
			</p>
			<p>Terms of use | Privacy Policy | Disclaimer</p>
		</footer>
	);
};

export default Footer;
