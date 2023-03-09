import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface IOption {
	label: string;
	value: number;
}
type CustomSelectProps = {
	label: string;
	id: string;
	options: IOption[];
	selected?: boolean;
	methods: UseFormRegisterReturn<string>;
};
function CustomSelect({ label, id, options, methods }: CustomSelectProps) {
	return (
		<div className="mb-6">
			<label className="block text-gray-200 dark:text-gray-900 text-sm font-bold">
				{label}
			</label>
			<div className="inline-block relative w-64">
				<select
					{...methods}
					id={id}
					className="dark:text-slate-900 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 py-1 px-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
					{options.map(({ label, value }: IOption) => {
						let optionId = `select-${value}`;
						return (
							<option key={optionId} id={optionId} defaultValue={label[0]}>
								{label}
							</option>
						);
					})}
				</select>
				<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
					<svg
						className="fill-current h-4 w-4"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20">
						<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
					</svg>
				</div>
			</div>
		</div>
	);
}

export default CustomSelect;
