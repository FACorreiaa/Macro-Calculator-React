import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import CustomRadioButton from './radio-button';
import RadioListHeader from './radio-list-header';
export interface IOption {
	label: string;
	name?: string;
	disabled?: boolean;
}

export interface IOptionGroup {
	label: string;
	options: IOption[];
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IOption {
	label: string;
	name?: string;

	disabled?: boolean;
}

export interface IInputGroup {
	title: string;
	label?: string;
	options: IOption[];
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	methods: UseFormRegisterReturn<string>;
}

const CustomRadioList = ({
	options,
	onChange,
	title,
	name,
	...methods
}: IInputGroup) => {
	function renderOptions() {
		return options.map(({ label, name, disabled }: IOption) => {
			const shortenedOptionLabel = label.replace(/\s+/g, '');
			const optionId = `radio-option-${shortenedOptionLabel}`;

			return (
				<CustomRadioButton
					value={label}
					label={label}
					key={optionId}
					id={optionId}
					name={name}
					disabled={disabled}
					onChange={onChange}
					{...methods}
				/>
			);
		});
	}
	return (
		<div className="mb-2">
			<RadioListHeader title={title} />
			{renderOptions()}
		</div>
	);
};
export default CustomRadioList;
