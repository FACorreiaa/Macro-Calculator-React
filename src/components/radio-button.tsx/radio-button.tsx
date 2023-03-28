import { UseFormRegisterReturn } from 'react-hook-form';

type RadioButtonProps = {
	label: string;
	disabled?: boolean;
	id: string;
	value: number;
	name?: string;
	methods: UseFormRegisterReturn<string>;
};
function RadioButton({ id, value, label, methods }: RadioButtonProps) {
	return (
		<div className="mb-1 flex items-center">
			<input
				id={id}
				type="radio"
				value={value}
				className="dark:text-slate-950 w-4 h-4 text-slate-600 bg-gray-100 border-gray-300 focus:ring-slate-500 dark:focus:ring-slate-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
				{...methods}
			/>
			<label className="ml-2 text-sm font-medium text-gray-950 dark:text-gray-800">
				{label}
			</label>
		</div>
	);
}

export default RadioButton;
