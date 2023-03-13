import CustomButtom from '../components/button';
import CustomBmrForm from '../components/forms/form';
import CustomFormTitle from '../components/forms/form-title';
import HeadComponent from '../components/head';
import CustomSelect from '../components/select';
import { workoutVolume, goalOptions } from '../helper/data';
import useZodForm from '../hooks/useZodForm';
import { GoalsInput, goalsSchema } from '../types/goalsSchema';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import BannerInfoComponent from '../components/banner-info';
import {
	calculateCaloricGoal,
	calculateCaloricGoalWithTrainning,
} from '../helper/goal';
import FormPageLayout from '../layout/form-layout';

function GoalPage() {
	const location = useLocation();
	const navigate = useNavigate();
	const bmr = location.state.bmr;

	const { handleSubmit, register } = useZodForm({
		schema: goalsSchema,
		defaultValues: {
			activity: '',
			objective: '',
		},
	});

	function onSubmitGoalsValuesPage(values: GoalsInput) {
		const caloricGoal = calculateCaloricGoal(bmr, values.objective);
		const caloricGoalWithTrainning = calculateCaloricGoalWithTrainning(
			bmr,
			values.objective,
			values.activity
		);

		navigate('/results', {
			state: { bmr, caloricGoal, caloricGoalWithTrainning },
		});
	}

	return (
		<FormPageLayout>
			<HeadComponent
				title="Goal Calculator"
				content="Set your goals and objectives to get a realistic approach to your calories"
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
						<CustomButtom
							type="button"
							label="Previous"
							onClick={() => navigate('/')}
						/>
						<CustomButtom type="submit" label="Calculate" />
					</div>
				</CustomBmrForm>
			</div>
		</FormPageLayout>
	);
}

export default GoalPage;
