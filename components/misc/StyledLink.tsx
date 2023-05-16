import Link from "next/link";

type IStyledLink = {
	href: string;
	children: string;
	location: string; // 링크를 사용할 위치 컴포넌트 넘겨주기 각기 다른 스타일링을 위한 코드
};

const StyledLink = ({ href, children, location }: IStyledLink) => {
	const changeLinkStyle = {
		footer: "hover:text-blue-200 transition-all duration-300",
		header:
			"relative pl-1 pb-1 lg:pb-2 leading-normal lg:text-3xl md:text-2xl sm:text-xl hover:text-blue-200 transition-all duration-300 after:content-[''] after:bg-white after:h-[3px] after:w-[0%] after:left-0 after:bottom-0 after:absolute after:hover:w-full after:transition-all after:duration-300 tracking-wide",
	};

	return (
		<span className="">
			<Link className={changeLinkStyle[location]} href={href}>
				{children}
			</Link>
		</span>
	);
};

export default StyledLink;
