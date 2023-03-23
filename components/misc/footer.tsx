import Image from "next/image";
import Link from "next/link";
import PreviewLink from "./preview-link";
import instaIcon from "/public/favicon/instagram.png";

const Footer = () => {
	return (
		<footer className="fixed left-0 bottom-0 p-10 text-white">
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
			<p>Made with 하트</p>
			<p>Terms of use | Privacy Policy | Disclaimer</p>
		</footer>
	);
};

export default Footer;
