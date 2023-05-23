import Image from "next/image";
import Link from "next/link";
import instaIcon from "/public/favicon/favicon-32x32.png";
import StyledLink from "./StyledLink";

const Footer = () => {
	return (
		<footer className="relative lg:fixed bottom-0 lg:left-0 lg:bottom-0 lg:w-96  w-full p-10 text-white bg-black">
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
			<StyledLink href="/info" location="">
				Made with ❤️.
			</StyledLink>
			© 2023
			<p className="text-[12px]">Terms of use | Privacy Policy | Disclaimer</p>
		</footer>
	);
};

export default Footer;
