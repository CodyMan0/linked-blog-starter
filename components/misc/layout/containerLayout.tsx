type Props = {
	children: React.ReactNode;
};

const ContainerLayout = ({ children }: Props) => {
	return (
		<div className="w-full p-2 lg:p-16 max-w-screen-xl mx-auto my-0">
			{children}
		</div>
	);
};

export default ContainerLayout;
