import Buttom from '../components/button';
import BmrForm from '../components/forms/form';
import FormTitle from '../components/forms/form-title';
import HeadComponent from '../components/head';
import Select from '../components/select';
import {
	activityLevelValues,
	dataOptions,
	goalList,
	CaloricDistribution,
	PersonalData,
} from '../helper/data';
import {
	calculateTDEE,
	calculateCalorieTarget,
	getallDietObjectives,
	calculateMacros,
} from '../helper/tdee';
import useZodForm from '../hooks/useZodForm';
import FormPageLayout from '../layout/form-layout';
import { GoalsInput, goalsSchema } from '../types/goalsSchema';
import { bmrAtom } from './bmr';
import { atom, useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

const DietObjctiveListInitialValues = {
	Maintenance: 0,
	Bulking: 0,
	Cutting: 0,
};

export const tdeeAtom = atom(0);
export const dietObjectiveAtom = atom(0);
export const dietObjectiveListAtom = atom(DietObjctiveListInitialValues);
export const objectiveAtom = atom('');
export const activityAtom = atom('');
export const macrosAtom = atom(CaloricDistribution);

function TdeePage() {
	const navigate = useNavigate();
	const [, setTdee] = useAtom(tdeeAtom);
	const [, setCaloricObjectve] = useAtom(dietObjectiveAtom);
	const [, setdietObjectiveList] = useAtom(dietObjectiveListAtom);
	const [, setObjective] = useAtom(objectiveAtom);
	const [, setActivity] = useAtom(activityAtom);
	const [, setMacros] = useAtom(macrosAtom);

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
		const dietObjective = calculateCalorieTarget(tdee, values.objective);
		const allDietObjectives = getallDietObjectives(tdee);
		const individualMacros = calculateMacros(tdee);
		setTdee(tdee);
		setObjective(values.objective);
		setActivity(values.activity);
		setCaloricObjectve(dietObjective);
		setdietObjectiveList(allDietObjectives);
		setMacros(individualMacros);
		navigate('/results');
	}

	return (
		<FormPageLayout>
			<HeadComponent
				title="Goal Calculator"
				content="Set your goals and objectives to get a realistic approach to your calories"
			/>
			<div className="w-full max-w-xs ">
				<BmrForm onFormSubmit={handleSubmit(onSubmitGoals)}>
					<FormTitle title="Calculate your TDEE" />

					<Select
						label="Weekly activity"
						id="activity"
						options={dataOptions(activityLevelValues)}
						selected
						methods={register(PersonalData.ACTIVITY)}
						placeholder="Weekly activity"
					/>

					<Select
						label="Diet objective"
						id="objective"
						options={dataOptions(goalList)}
						selected
						methods={register(PersonalData.OBJECTIVE)}
						placeholder="Diet objective"
					/>

					<div className="flex justify-between">
						<Buttom
							type="button"
							label="Previous"
							onClick={() => navigate('/')}
						/>
						<Buttom type="submit" label="Calculate" />
					</div>
				</BmrForm>
			</div>
		</FormPageLayout>
	);
}

export default TdeePage;
