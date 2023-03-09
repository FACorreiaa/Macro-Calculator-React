import React from 'react';

type CustomPageTitleProps = {
	title: string;
};
function CustomPageTitle({ title }: CustomPageTitleProps) {
	return (
		<h1 className="text-3xl font-bold underline text-ctp-white pb-6">
			<head>{title}</head>
			{title}
		</h1>
	);
}

export default CustomPageTitle;
