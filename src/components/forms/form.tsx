import React from 'react';
import useZodForm from '../../hooks/useZodForm';
import { tdeeSchema } from '../../types/tdeeSchema';
import CustomSelect from '../select';
import styles from '../styles/forms.module.css';
type RegisterPageProps = {
	age: number;
	height: number;
	weight: number;
};

const measureValues = ['Metric', 'Imperial'];
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

	return (
		<React.Fragment>
			<div className="w-full max-w-xs ">
				<form
					className="shadow-lg rounded-xl p-8 mb-4 bg-gray-200 dark:bg-slate-500"
					onSubmit={methods.handleSubmit(onSumitRegisterValues)}>
					<span className="text-gray-700 text-xxl font-bold mb-2 text-center w-full">
						Calculate your TDEE
					</span>
					<CustomSelect
						label="Select your metric"
						id="metrics"
						options={measureValues}
						selected
					/>
					<div className="mb-2">
						<label className="block text-gray-200 dark:text-gray-900 text-sm font-bold mb-2">
							Age
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
							id="username"
							type="text"
							placeholder="Insert your age"
						/>
					</div>
					<div className="mb-2">
						<label className="block text-gray-700 dark:text-gray-900 text-sm font-bold mb-2">
							Weight
						</label>
						<input
							className="dark:text-slate-900 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="username"
							type="text"
							placeholder="Insert your age"
						/>
					</div>
					<div className="mb-2">
						<label className="block dark:text-gray-900 text-gray-700 text-sm font-bold mb-2">
							Height
						</label>
						<input
							className="dark:text-slate-900 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="username"
							type="text"
							placeholder="Insert your age"
						/>
					</div>

					<div className="mb-2">
						<label className="block dark:text-gray-900 text-gray-700 text-sm font-bold mb-2">
							Gender
						</label>
						<div className="inline-block relative w-64">
							<select
								id="gender"
								className="dark:text-slate-900 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
								<option selected>Male</option>
								<option>Female</option>
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
					<div className="mb-2">
						<label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-900">
							Select your daily activity
						</label>
						<div className="flex items-center">
							<input
								id="default-radio-1"
								type="radio"
								value=""
								name="default-radio"
								className="dark:text-slate-900 w-4 h-4 text-slate-600 bg-gray-100 border-gray-300 focus:ring-slate-500 dark:focus:ring-slate-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-800">
								I don't workout.
							</label>
						</div>
						<div className="flex items-center">
							<input
								checked
								id="default-radio-2"
								type="radio"
								value=""
								name="default-radio"
								className="dark:text-slate-900 w-4 h-4 text-slate-600 bg-gray-100 border-gray-300 focus:ring-slate-500 dark:focus:ring-slate-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-800">
								Workout 1 to 2 days per week
							</label>
						</div>
						<div className="flex items-center">
							<input
								checked
								id="default-radio-2"
								type="radio"
								value=""
								name="default-radio"
								className="dark:text-slate-900 w-4 h-4 text-slate-600 bg-gray-100 border-gray-300 focus:ring-slate-500 dark:focus:ring-slate-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-800">
								Workout 3-5 days per week
							</label>
						</div>
						<div className="flex items-center">
							<input
								checked
								id="default-radio-2"
								type="radio"
								value=""
								name="default-radio"
								className="dark:text-slate-900 w-4 h-4 text-slate-600 bg-gray-100 border-gray-300 focus:ring-slate-500 dark:focus:ring-slate-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label className=" ml-2 text-sm font-medium text-gray-900 dark:text-gray-800">
								Workout 5 to 7 days per week
							</label>
						</div>
						<div className="flex items-center">
							<input
								checked
								id="default-radio-2"
								type="radio"
								value=""
								name="default-radio"
								className="w-4 h-4 text-slate-600 bg-gray-100 border-gray-300 focus:ring-slate-500 dark:focus:ring-slate-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-800">
								Giga Dog! Trainning twice a day!
							</label>
						</div>
					</div>

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
