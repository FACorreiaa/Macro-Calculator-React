import React from 'react';
import {
	FieldValues,
	UseFormRegisterReturn,
	UseFormReturn,
} from 'react-hook-form';
import { genderValues, measureValues, workoutVolume } from '../../data/tdee';
import useZodForm from '../../hooks/useZodForm';
import { TdeeProperties, tdeeSchema } from '../../types/tdeeSchema';
import CustomButtom from '../button';
import CustomInput from '../input';
import CustomRadioList from '../radio-button.tsx/radio-list';
import CustomSelect from '../select';
import CustomFormTitle from './form-title';

type CustomTdeeFormProps = {
	onRadioListChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSumitRegisterValues: (values: TdeeProperties) => number;
};
function CustomTdeeForm({
	onRadioListChange,
	onSumitRegisterValues,
}: CustomTdeeFormProps) {
	const { control, handleSubmit, register, formState } = useZodForm({
		schema: tdeeSchema,
		defaultValues: {
			age: '',
			height: '',
			weight: '',
			metric: '',
			gender: '',
			activity: '',
		},
	});

	return (
		<React.Fragment>
			<form
				className="shadow-lg rounded-xl p-8 mb-4 bg-gray-200 dark:bg-slate-500"
				onSubmit={handleSubmit(onSumitRegisterValues)}>
				<CustomFormTitle title="Calculate your TDEE" />
				<CustomSelect
					label="Select your metric"
					id="metrics"
					options={measureValues}
					selected
					methods={register('metric')}
				/>

				<CustomInput
					label="Age"
					id="age"
					type="number"
					placeholder="Insert your age"
					methods={register('age')}
					errorMessage={formState.errors.age?.message}
				/>
				<CustomInput
					label="Weight"
					id="weight"
					type="number"
					placeholder="Insert your weight"
					methods={register('weight')}
					errorMessage={formState.errors.weight?.message}
				/>
				<CustomInput
					label="Height"
					id="height"
					type="number"
					placeholder="Insert your height"
					methods={register('height')}
					errorMessage={formState.errors.age?.message}
				/>

				<CustomSelect
					label="Gender"
					id="gender"
					options={genderValues}
					selected
					methods={register('gender')}
				/>
				<CustomRadioList
					title="Select your daily activity:"
					options={workoutVolume}
					name="activity"
					onChange={() => console.log('this')}
					methods={register('activity')}
				/>

				<div className="flex justify-center">
					<CustomButtom type="submit" label="Calculate" />
				</div>
			</form>
		</React.Fragment>
	);
}

export default CustomTdeeForm;
