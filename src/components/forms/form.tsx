import React from 'react';
import FooterComponent from '../footer';

type CustomBmrFormProps = {
	children: React.ReactNode;
	onFormSubmit: any;
};
function CustomBmrForm({ children, onFormSubmit }: CustomBmrFormProps) {
	return (
		<React.Fragment>
			<form
				className="shadow-lg rounded-xl p-8 mb-4 bg-gray-200 dark:bg-slate-500"
				onSubmit={onFormSubmit}>
				{children}
			</form>
			<FooterComponent />
		</React.Fragment>
	);
}

export default CustomBmrForm;
