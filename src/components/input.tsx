import { UseFormRegisterReturn } from 'react-hook-form';

type InputProps = {
	label: string;
	id: string;
	type: string;
	placeholder: string;
	methods: UseFormRegisterReturn<string>;
	errorMessage: string | undefined;
};
function Input({
	label,
	id,
	type,
	placeholder,
	errorMessage,
	methods,
}: InputProps) {
	return (
		<div className="mb-6">
			<label className="block text-gray-200 dark:text-gray-950 mb-1 text-sm font-bold">
				{label}
			</label>
			<input
				className="shadow appearance-none border rounded w-full py-1 px-2 dark:text-slate-950 leading-tight focus:outline-none focus:shadow-outline"
				id={id}
				key={id}
				type={type}
				placeholder={placeholder}
				required
				{...methods}
			/>
			{!!errorMessage && (
				<span className="mt-0 text-left text-xs text-red-700">
					{errorMessage}
				</span>
			)}
		</div>
	);
}

export default Input;
