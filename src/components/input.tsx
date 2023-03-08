import React from 'react';

type CustomInputProps = {
	label: string;
	id: string;
	type: string;
	placeholder: string;
};
function CustomInput({ label, id, type, placeholder }: CustomInputProps) {
	return (
		<React.Fragment>
			<label className="block text-gray-200 dark:text-gray-900 text-sm font-bold mb-2">
				{label}
			</label>
			<input
				className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
				id={id}
				type={type}
				placeholder={placeholder}
			/>
		</React.Fragment>
	);
}

export default CustomInput;
