type PageTitleProps = {
	title: string;
};
function PageTitle({ title }: PageTitleProps) {
	return (
		<h1 className="text-3xl font-bold text-ctp-white pb-6 text-stone-950">
			{title}
		</h1>
	);
}

export default PageTitle;
