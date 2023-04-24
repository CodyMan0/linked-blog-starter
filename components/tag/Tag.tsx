import React from "react";

const Tag = ({ content }) => {
	return (
		<span className="leading-relaxed text-sm tracking-wider px-1 py-1 border border-black mx-1 rounded-sm">
			{content}
		</span>
	);
};

export default Tag;
