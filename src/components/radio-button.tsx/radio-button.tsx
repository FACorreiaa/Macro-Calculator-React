import React from 'react';

type CustomCustomRadioButtonProps = {
	label: string;
	disabled?: boolean;
	defaultChecked: boolean;
	id: string;
	value: string;
	name?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function CustomRadioButton({
	disabled,
	defaultChecked,
	id,
	value,
	name,
	onChange,
	label,
}: CustomCustomRadioButtonProps) {
	return (
		<div className="mb-1 flex items-center">
			<input
				onChange={onChange}
				defaultChecked
				id={id}
				type="radio"
				value={value}
				name={name}
				className="dark:text-slate-900 w-4 h-4 text-slate-600 bg-gray-100 border-gray-300 focus:ring-slate-500 dark:focus:ring-slate-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
			/>
			<label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-800">
				{label}
			</label>
		</div>
	);
}

export default CustomRadioButton;
