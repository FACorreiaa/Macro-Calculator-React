import React from 'react';

type CustomFormTitleProps = {
	title: string;
};
function CustomFormTitle({ title }: CustomFormTitleProps) {
	return (
		<span className="text-gray-700 text-xxl font-bold mb-2 text-center w-full">
			<head>{title}</head>
			{title}
		</span>
	);
}

export default CustomFormTitle;
