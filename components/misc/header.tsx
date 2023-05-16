import Link from "next/link";
import { useEffect, useState } from "react";
import Search from "./search";
import { useRouter } from "next/router";
import { convertSummaryName } from "../../lib/constants";

const Header = () => {
	const router = useRouter();
	const pathName = router.pathname;
	const [top, setTop] = useState(true);
	const [searching, setSearching] = useState(false);
	// detect whether user has scrolled the page down by 10px
	useEffect(() => {
		const scrollHandler = () => {
			window.pageYOffset > 10 ? setTop(false) : setTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [top]);

	return (
		<header
			className={`fixed w-full z-30 md:bg-white/90 transition duration-300 ease-in-out ${
				!top && "bg-white backdrop-blur-sm shadow-lg"
			}`}
		>
			<div className="w-full px-5 sm:px-6">
				<div className="flex items-center justify-between h-16 md:h-20">
					<h2 className="shrink-0 mr-4 text-2xl font-bold tracking-tight md:tracking-tighter leading-tight">
						<Link
							href="/"
							className="block hover:underline"
							aria-label="My Blog"
						>
							{convertSummaryName[pathName]}
						</Link>
					</h2>
					{convertSummaryName[pathName] === "Blog" && (
						<>
							<ul className="flex grow justify-end flex-wrap items-center">
								<li>
									<button
										className="w-4 h-4 my-auto mx-2 border-black cursor-pointer"
										aria-label="Search"
										onClick={() => setSearching(!searching)}
										disabled={searching}
									>
										<svg
											className="w-4 h-4 fill-current text-gray-400"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
										</svg>
									</button>
								</li>
							</ul>
							<p className="text-sm font-bold ">👈 Click! Search</p>
							<Search visible={searching} setVisible={setSearching} />
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
