import { KCALS, Measure } from '../../helper/data';
import { bmrCalculationValuesAtom, bmrAtom } from '../../pages/bmr';
import {
	macrosAtom,
	tdeeAtom,
	objectiveAtom,
	activityAtom,
	dietObjectiveListAtom,
} from '../../pages/tdee';
import CustomMacroCard from './macro-card';
import { useAtom } from 'jotai';

interface PersonalData {
	sex: string;
	age: string;
	weight: string;
	height: string;
}
type BiometricDataCardProps = {
	biometricData: PersonalData;
	metric: string;
	bmr: number;
};
const BiometricDataCard = ({
	biometricData,
	metric,
	bmr,
}: BiometricDataCardProps) => {
	return (
		<div className="sm:mb-6 mb-4">
			<h1 className="text-xl font-bold pb-2">Biometric Data</h1>
			<p className="text-sm">
				<label className="font-bold">Sex: </label>
				<span>{biometricData.sex}</span>
			</p>
			<p className="text-sm">
				<label className="font-bold">Age: </label>
				<span>{biometricData.age}</span>
			</p>
			<p className="text-sm">
				<label className="font-bold">Weight: </label>
				<span>
					{biometricData.weight} {Measure[metric].weight}
				</span>
			</p>
			<p className="text-sm">
				<label className="font-bold">Height: </label>
				<span>
					{biometricData.height} {Measure[metric].height}
				</span>
			</p>
			<p className="text-sm">
				<label className="font-bold">BMR: </label>
				<span>
					{bmr} {KCALS}
				</span>
			</p>
		</div>
	);
};

type TdeeCardType = {
	tdee: number;
};
const TdeeCard = ({ tdee }: TdeeCardType) => {
	return (
		<div className="sm:mb-2 mb-4">
			<h1 className="text-xl font-bold">TDEE</h1>
			<p className="text-sm ">
				<span className="text-lg">
					{tdee} {KCALS}
				</span>
			</p>
		</div>
	);
};

interface DietObjectives {
	Maintenance: number;
	Bulking: number;
	Cutting: number;
}
type ObjectivesCardType = {
	objective: string;
	activity: string;
	allDietObjectives: DietObjectives;
};
const ObjectivesCard = ({
	objective,
	activity,
	allDietObjectives,
}: ObjectivesCardType) => {
	return (
		<div className="sm:mb-2 mb-4">
			<h1 className="text-xl font-bold mb-2">Goals and Objectives</h1>

			<p className="text-sm">
				<label className="font-bold">Objective: </label>
				<span>{objective}</span>
			</p>
			<p className="text-sm">
				<label className="font-bold">Activity: </label>
				<span>{activity}</span>
			</p>
			<p className="text-sm">
				<label className="font-bold">Maintenance calories: </label>
				<span>
					{allDietObjectives.Maintenance} {KCALS}
				</span>
			</p>
			<p className="text-sm">
				<label className="font-bold">Bulking Calories: </label>
				<span>
					{allDietObjectives.Bulking} {KCALS}
				</span>
			</p>
			<p className="text-sm">
				<label className="font-bold">Cutting Calories: </label>
				<span>
					{allDietObjectives.Cutting} {KCALS}
				</span>
			</p>
		</div>
	);
};
export const DisplayBaseInfo = () => {
	const [individualMacros] = useAtom(macrosAtom);
	const [biometricData] = useAtom(bmrCalculationValuesAtom);
	const [bmr] = useAtom(bmrAtom);
	const [tdee] = useAtom(tdeeAtom);
	const [objective] = useAtom(objectiveAtom);
	const [activity] = useAtom(activityAtom);
	const [allDietObjectives] = useAtom(dietObjectiveListAtom);

	const metric = biometricData.metric;
	return (
		<div className="bg-purple-200 border border-slate-400  p-2  rounded relative text-center m-5">
			<div className="p-2 m-5  rounded relative text-center flex justify-center items-center flex-col sm:flex-row sm:justify-between shadow-slate-800 shadow-sm border bg-white">
				<BiometricDataCard
					biometricData={biometricData}
					metric={metric}
					bmr={bmr}
				/>
				<TdeeCard tdee={tdee} />
				<ObjectivesCard
					objective={objective}
					activity={activity}
					allDietObjectives={allDietObjectives}
				/>
			</div>
			<div className="p-2 m-5  rounded relative text-center flex justify-center items-center flex-col sm:flex-row sm:justify-between shadow-slate-800">
				{Object.entries(individualMacros).map(([title, macros]: any) => (
					<CustomMacroCard
						key={title}
						title={title}
						protein={macros.protein}
						fats={macros.fats}
						carbs={macros.carbs}
					/>
				))}
			</div>
		</div>
	);
};

export default DisplayBaseInfo;
