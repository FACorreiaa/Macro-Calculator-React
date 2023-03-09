import CustomButtom from '../components/button';
import CustomTdeeForm from '../components/forms/form';
import CustomFormTitle from '../components/forms/form-title';
import CustomSelect from '../components/select';
import { genderValues, objectiveValues, workoutVolume } from '../data/tdee';
import useZodForm from '../hooks/useZodForm';
import Pagelayout from '../layout/layout';
import { TdeeProperties, tdeeSchema } from '../types/tdeeSchema';

function GoalPage() {
	const { handleSubmit, register, formState } = useZodForm({
		schema: tdeeSchema,
		defaultValues: {
			age: '',
			height: '',
			weight: '',
			metric: '',
			gender: '',
			activity: '',
			objective: '',
		},
	});

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

	return (
		<Pagelayout>
			<div className="w-full max-w-xs ">
				<CustomTdeeForm onFormSubmit={handleSubmit(onSumitRegisterValues)}>
					<CustomFormTitle title="Calculate your TDEE" />
					<CustomSelect
						label="Gender"
						id="gender"
						options={genderValues}
						selected
						methods={register('gender')}
					/>

					<CustomSelect
						label="Activity volume"
						id="activity"
						options={workoutVolume}
						selected
						methods={register('activity')}
					/>

					<CustomSelect
						label="Activity volume"
						id="activity"
						options={objectiveValues}
						selected
						methods={register('objective')}
					/>

					{/* <CustomRadioList
						title="Select your daily activity:"
						options={workoutVolume}
						name="activity"
						methods={register('activity')}
					/> */}

					<div className="flex justify-center">
						<CustomButtom type="submit" label="Calculate  " />
					</div>
				</CustomTdeeForm>
			</div>
		</Pagelayout>
	);
}

export default GoalPage;
