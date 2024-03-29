type BannerInfoComponentProps = {
	title: string;
	label: string;
};

function BannerInfoComponent({ title, label }: BannerInfoComponentProps) {
	return (
		<div
			className="bg-red-100 border border-red-400 text-red-700 mt-2 p-2 mb-2 rounded relative text-center m-5"
			role="alert">
			<strong className="font-bold">{title}</strong>
			<span className="block sm:inline">{label}</span>
		</div>
	);
}

export default BannerInfoComponent;
