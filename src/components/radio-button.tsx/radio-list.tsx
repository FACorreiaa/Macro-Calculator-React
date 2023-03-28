import RadioButton from './radio-button';
import RadioListHeader from './radio-list-header';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface Option {
	label: string;
	name?: string;
	value: number;
}

export interface IInputGroup {
	title: string;
	label?: string;
	options: Option[];
	name: string;
	methods: UseFormRegisterReturn<string>;
}

const RadioList = ({ options, title, ...methods }: IInputGroup) => {
	function renderOptions() {
		return options.map(({ label, value }: Option) => {
			const shortenedOptionLabel = label.replace(/\s+/g, '');
			const optionId = `radio-option-${shortenedOptionLabel}`;

			return (
				<RadioButton
					value={value}
					label={label}
					key={optionId}
					id={optionId}
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
export default RadioList;
