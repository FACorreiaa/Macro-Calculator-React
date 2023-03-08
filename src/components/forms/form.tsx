import React, { useEffect, useState } from 'react';
import { genderValues, measureValues, workoutVolume } from '../../data/tdee';
import useZodForm from '../../hooks/useZodForm';
import { tdeeSchema } from '../../types/tdeeSchema';
import CustomInput from '../input';
import CustomRadioList from '../radio-button.tsx/radio-list';
import CustomSelect from '../select';
import styles from '../styles/forms.module.css';
import CustomFormTitle from './form-title';
type RegisterPageProps = {
	age: number;
	height: number;
	weight: number;
};

function CustomForm() {
	const methods = useZodForm({
		schema: tdeeSchema,
		defaultValues: {
			age: 0,
			height: 0,
			weight: 0,
		},
	});

	async function onSumitRegisterValues(values: RegisterPageProps) {
		// return await mutation.mutate(values, {
		// 	onSuccess: async () => router.push('http://localhost:5005/login/signin'),
		// 	onError: async (error) => {
		// 		console.log(error);
		// 	},
		// });
	}

	const [selectedValue, setSelectedValue] = useState<String>(
		workoutVolume[0].label
	);

	function radioGroupHandler(event: React.ChangeEvent<HTMLInputElement>) {
		setSelectedValue(event.target.value);
	}

	const onSelectGender = () => {};
	const onSelectMeric = () => {};

	useEffect(() => {
		console.log(selectedValue);
	}, [selectedValue]);

	console.log('selectedValue', selectedValue);
	return (
		<React.Fragment>
			<div className="w-full max-w-xs ">
				<form
					className="shadow-lg rounded-xl p-8 mb-4 bg-gray-200 dark:bg-slate-500"
					onSubmit={methods.handleSubmit(onSumitRegisterValues)}>
					<CustomFormTitle title="Calculate your TDEE" />
					<div className="mb-2">
						<CustomSelect
							label="Select your metric"
							id="metrics"
							options={measureValues}
							selected
							onChange={onSelectMeric}
						/>
					</div>

					<div className="mb-2">
						<CustomInput
							label="Age"
							id="age"
							type="number"
							placeholder="Insert your age"
						/>
					</div>
					<div className="mb-2">
						<CustomInput
							label="Weight"
							id="weight"
							type="number"
							placeholder="Insert your weight"
						/>
					</div>
					<div className="mb-2">
						<CustomInput
							label="Height"
							id="height"
							type="number"
							placeholder="Insert your height"
						/>
					</div>

					<div className="mb-2">
						<CustomSelect
							onChange={onSelectGender}
							label="Gender"
							id="gender"
							options={genderValues}
							selected
						/>
					</div>
					<CustomRadioList
						title="Select your daily activity:"
						options={workoutVolume}
						onChange={radioGroupHandler}
					/>

					<div className="flex justify-between">
						<button
							disabled
							type="button"
							className="text-white disabled:bg-slate-300 disabled:cursor-not-allowed	 bg-gray-800 hover:bg-gray-900 disabled:hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 disabled:dark:hover:bg-gray-200 disabled:text-slate-900 font-bold dark:focus:ring-gray-700 dark:border-gray-700">
							Prev
						</button>
						<button
							type="button"
							className="text-white disabled:bg-slate-300 disabled:cursor-not-allowed bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
							Next
						</button>
					</div>
				</form>
			</div>

			<p className="text-center text-gray-500 text-xs">
				&copy;2020 Acme Corp. All rights reserved.
			</p>
		</React.Fragment>
	);
}

export default CustomForm;
