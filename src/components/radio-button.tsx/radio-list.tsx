import React from 'react';
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
	hasFullWidth?: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomRadioList = ({ label, options, onChange, title }: IInputGroup) => {
	function renderOptions() {
		return options.map(({ label, name, disabled }: IOption, index: number) => {
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
