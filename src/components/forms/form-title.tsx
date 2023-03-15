import React from 'react';

type CustomFormTitleProps = {
	title: string;
};
function CustomFormTitle({ title }: CustomFormTitleProps) {
	return (
		<span className="flex text-gray-700 text-xxl font-bold py-6 text-center w-full">
			{title}
		</span>
	);
}

export default CustomFormTitle;
