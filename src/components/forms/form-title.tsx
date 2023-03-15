import React from 'react';

type FormTitleProps = {
	title: string;
};
function FormTitle({ title }: FormTitleProps) {
	return (
		<span className="flex text-gray-700 text-xxl font-bold py-6 text-center w-full">
			{title}
		</span>
	);
}

export default FormTitle;
