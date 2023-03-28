import FooterComponent from '../footer';
import { FormEvent } from 'react';

type BmrFormProps = {
	children: React.ReactNode;
	onFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
};
function BmrForm({ children, onFormSubmit }: BmrFormProps) {
	return (
		<>
			<form
				className="shadow-lg rounded-xl p-8 pt-0 mb-4 bg-gray-200 dark:bg-purple-300"
				onSubmit={onFormSubmit}>
				{children}
			</form>
			<FooterComponent />
		</>
	);
}

export default BmrForm;
