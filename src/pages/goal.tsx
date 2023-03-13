import CustomButtom from '../components/button';
import CustomBmrForm from '../components/forms/form';
import CustomFormTitle from '../components/forms/form-title';
import HeadComponent from '../components/head';
import CustomSelect from '../components/select';
import { workoutVolume, goalOptions } from '../helper/data';
import useZodForm from '../hooks/useZodForm';
import Pagelayout from '../layout/layout';
import { GoalsInput, goalsSchema } from '../types/goalsSchema';
import { useLocation } from 'react-router-dom';
import BannerInfoComponent from '../components/banner-info';

function GoalPage() {
	const location = useLocation();
	const { handleSubmit, register } = useZodForm({
		schema: goalsSchema,
		defaultValues: {
			activity: '',
			objective: '',
		},
	});

	function onSubmitGoalsValuesPage(values: GoalsInput) {
		return 0;
	}

	const bmr = location.state.bmr;

	return (
		<Pagelayout>
			<HeadComponent
				title="Goal Calculator"
				name="Goal Calculator"
				content="Calculate your goals with your tdee"
			/>
			<div className="w-full max-w-xs ">
				<CustomBmrForm onFormSubmit={handleSubmit(onSubmitGoalsValuesPage)}>
					<CustomFormTitle title="Calculate your TDEE" />

					<BannerInfoComponent title="Your BMR is: " label={bmr} />

					<CustomSelect
						label="Activity volume"
						id="activity"
						options={workoutVolume}
						selected
						methods={register('activity')}
						placeholder="Select activity"
					/>

					<CustomSelect
						label="Activity volume"
						id="activity"
						options={goalOptions}
						selected
						methods={register('objective')}
						placeholder="Select objective"
					/>

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
