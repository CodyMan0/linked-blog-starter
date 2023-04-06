import { useRouter } from "next/router";
import React from "react";
import Footer from "./footer";

import Header from "./header";
import SideBar from "./sidebar";
import Transition from "./Transition";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	const router = useRouter();
	const path = router.pathname;
	return (
		<div className="flex lg:flex-row flex-col min-h-screen overflow-hidden">
			<div className="flex-initial w-full lg:w-96">
				<SideBar />
			</div>
			<div className="flex-1">
				<Transition location={router.pathname}>
					{path === "/[...slug]" && <Header />}
					{children}
				</Transition>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
