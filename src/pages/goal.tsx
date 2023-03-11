import CustomButtom from '../components/button';
import CustomBmrForm from '../components/forms/form';
import CustomFormTitle from '../components/forms/form-title';
import CustomSelect from '../components/select';
import { workoutVolume, objectiveValues } from '../helper/data';
import useZodForm from '../hooks/useZodForm';
import Pagelayout from '../layout/layout';
import { GoalsInput, goalsSchema } from '../types/goalsSchema';

function GoalPage() {
	const { handleSubmit, register, formState } = useZodForm({
		schema: goalsSchema,
		defaultValues: {
			activity: '',
			objective: '',
		},
	});

	function onSubmitGoalsValuesPage(values: GoalsInput) {
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
				<CustomBmrForm onFormSubmit={handleSubmit(onSubmitGoalsValuesPage)}>
					<CustomFormTitle title="Calculate your bmr" />

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

					<div className="flex justify-between">
						<CustomButtom type="button" label="Previous" />
						<CustomButtom type="submit" label="Calculate" />
					</div>
				</CustomBmrForm>
			</div>
		</Pagelayout>
	);
}

export default GoalPage;
