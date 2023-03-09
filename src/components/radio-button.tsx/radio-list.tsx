import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import CustomRadioButton from './radio-button';
import RadioListHeader from './radio-list-header';
export interface IOption {
	label: string;
	name?: string;
	value: number;
}

export interface IInputGroup {
	title: string;
	label?: string;
	options: IOption[];
	name: string;
	methods: UseFormRegisterReturn<string>;
}

const CustomRadioList = ({ options, title, name, ...methods }: IInputGroup) => {
	function renderOptions() {
		return options.map(({ label, name, value }: IOption) => {
			const shortenedOptionLabel = label.replace(/\s+/g, '');
			const optionId = `radio-option-${shortenedOptionLabel}`;

			return (
				<CustomRadioButton
					value={value}
					label={label}
					key={optionId}
					id={optionId}
					name={name}
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
