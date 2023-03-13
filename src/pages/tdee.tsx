import CustomButtom from '../components/button';
import CustomBmrForm from '../components/forms/form';
import CustomFormTitle from '../components/forms/form-title';
import HeadComponent from '../components/head';
import CustomSelect from '../components/select';
import { workoutVolumesList, dataOptions, goalList } from '../helper/data';
import useZodForm from '../hooks/useZodForm';
import { GoalsInput, goalsSchema } from '../types/goalsSchema';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import BannerInfoComponent from '../components/banner-info';

import FormPageLayout from '../layout/form-layout';
import {
	calculateTDEE,
	calculateCalorieTarget,
	getAllObjectives,
} from '../helper/tdee';

function TdeePage() {
	const location = useLocation();
	const navigate = useNavigate();
	const bmr = location.state.bmr;
	const bmrValues = location.state.bmrValues;

	const { handleSubmit, register } = useZodForm({
		schema: goalsSchema,
		defaultValues: {
			activity: '',
			objective: '',
		},
	});

	function onSubmitGoals(values: GoalsInput) {
		const tdee = calculateTDEE(bmr, values.activity);
		const caloricObjective = calculateCalorieTarget(tdee, values.objective);
		const allObjectives = getAllObjectives(tdee);
		navigate('/results', {
			state: {
				tdee,
				caloricObjective,
				allObjectives,
				bmrValues,
				goalValues: values,
			},
		});
	}

	return (
		<FormPageLayout>
			<HeadComponent
				title="Goal Calculator"
				content="Set your goals and objectives to get a realistic approach to your calories"
			/>
			<div className="w-full max-w-xs ">
				<CustomBmrForm onFormSubmit={handleSubmit(onSubmitGoals)}>
					<CustomFormTitle title="Calculate your TDEE" />

					<BannerInfoComponent title="Your BMR is: " label={bmr} />

					<CustomSelect
						label="Activity volume"
						id="activity"
						options={dataOptions(workoutVolumesList)}
						selected
						methods={register('activity')}
						placeholder="Select activity"
					/>

					<CustomSelect
						label="Activity volume"
						id="activity"
						options={dataOptions(goalList)}
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

export default TdeePage;
