import React, { useEffect, useState } from 'react';
import CustomTdeeForm from '../components/forms/form';
import CustomPageTitle from '../components/page-title';
import { workoutVolume } from '../data/tdee';
import useZodForm from '../hooks/useZodForm';
import Pagelayout from '../layout/layout';
import styles from '../styles/index.module.css';
import { TdeeProperties, tdeeSchema } from '../types/tdeeSchema';

function TdeePage() {
	function onSumitRegisterValues(values: TdeeProperties) {
		// return await mutation.mutate(values, {
		// 	onSuccess: async () => router.push('http://localhost:5005/login/signin'),
		// 	onError: async (error) => {
		// 		console.log(error);
		// 	},
		// });
		console.log('values', values);
		return 0;
	}

	const [selectedValue, setSelectedValue] = useState<String>(
		workoutVolume[0].label
	);

	function radioGroupHandler(event: React.ChangeEvent<HTMLInputElement>) {
		setSelectedValue(event.target.value);
	}

	useEffect(() => {
		console.log(selectedValue);
	}, [selectedValue]);

	return (
		<Pagelayout>
			<CustomPageTitle title="Macro calculator" />
			<div className="w-full max-w-xs ">
				<CustomTdeeForm
					onSumitRegisterValues={onSumitRegisterValues}
					onRadioListChange={radioGroupHandler}
				/>
			</div>
		</Pagelayout>
	);
}

export default TdeePage;
