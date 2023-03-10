import React from 'react';

type CustomPageTitleProps = {
	title: string;
};
function CustomPageTitle({ title }: CustomPageTitleProps) {
	return (
		<h1 className="text-3xl font-bold text-ctp-white pb-6 text-stone-200">
			{title}
		</h1>
	);
}

export default CustomPageTitle;
