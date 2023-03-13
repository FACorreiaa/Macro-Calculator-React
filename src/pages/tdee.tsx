import CustomButtom from '../components/button';
import CustomBmrForm from '../components/forms/form';
import CustomFormTitle from '../components/forms/form-title';
import HeadComponent from '../components/head';
import CustomSelect from '../components/select';
import { workoutVolumesList, dataOptions, goalList } from '../helper/data';
import useZodForm from '../hooks/useZodForm';
import { GoalsInput, goalsSchema } from '../types/goalsSchema';
import { useNavigate } from 'react-router-dom';
import { bmrAtom, bmrCalculationValuesAtom } from './bmr';

import BannerInfoComponent from '../components/banner-info';

import FormPageLayout from '../layout/form-layout';
import {
	calculateTDEE,
	calculateCalorieTarget,
	getAllObjectives,
} from '../helper/tdee';
import { atom, useAtom } from 'jotai';

export const tdeeAtom = atom(0);
export const caloricObjectiveAtom = atom(0);
export const caloricObjectiveListAtom = atom({});

function TdeePage() {
	const navigate = useNavigate();
	const [, setTdee] = useAtom(tdeeAtom);
	const [, setCaloricObjectve] = useAtom(caloricObjectiveAtom);
	const [, setCaloricObjectiveList] = useAtom(caloricObjectiveListAtom);

	const [bmr] = useAtom(bmrAtom);

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
		setTdee(tdee);
		setCaloricObjectve(caloricObjective);
		setCaloricObjectiveList(allObjectives);
		navigate('/results');
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

					<BannerInfoComponent title="Your BMR is: " label={bmr.toString()} />

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
