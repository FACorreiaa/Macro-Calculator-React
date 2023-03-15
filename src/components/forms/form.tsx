import React from 'react';
import FooterComponent from '../footer';

type BmrFormProps = {
	children: React.ReactNode;
	onFormSubmit: any;
};
function BmrForm({ children, onFormSubmit }: BmrFormProps) {
	return (
		<React.Fragment>
			<form
				className="shadow-lg rounded-xl p-8 pt-0 mb-4 bg-gray-200 dark:bg-purple-300"
				onSubmit={onFormSubmit}>
				{children}
			</form>
			<FooterComponent />
		</React.Fragment>
	);
}

export default BmrForm;
