import React from "react";

import Header from "./header";
import SideBar from "./sidebar";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className="flex  min-h-screen overflow-hidden">
			<div className="flex-initial w-96">
				<SideBar />
			</div>
			<div className="flex-1">
				{/* <Header /> */}
				<main className="grow">{children}</main>
			</div>
		</div>
	);
};

export default Layout;
