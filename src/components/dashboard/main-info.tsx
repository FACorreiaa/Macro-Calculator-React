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

export const DisplayBaseInfo = () => {
	const [individualMacros] = useAtom(macrosAtom);
	const [bmrData] = useAtom(bmrCalculationValuesAtom);
	const [bmr] = useAtom(bmrAtom);
	const [tdee] = useAtom(tdeeAtom);
	const [objective] = useAtom(objectiveAtom);
	const [activity] = useAtom(activityAtom);
	const [allDietObjectives] = useAtom(dietObjectiveListAtom);

	const metric = bmrData.metric;
	return (
		<div className="bg-slate-100 border border-slate-400  p-2  rounded relative text-center m-5">
			<div className="p-4 m-5">
				<div className="w-full shadow-sm justify-between flex flex-row sm:flex-column sm:justify-center shadow-slate-800  bg-white p-6 border border-spacing-2 rounded">
					<div>
						<h1 className="text-xl font-bold mb-2">Biometric Data</h1>
						<p className="text-sm">
							<label className="font-bold">Sex: </label>
							<span>{bmrData.sex}</span>
						</p>
						<p className="text-sm">
							<label className="font-bold">Age: </label>
							<span>{bmrData.age}</span>
						</p>
						<p className="text-sm">
							<label className="font-bold">Weight: </label>
							<span>
								{bmrData.weight} {Measure[metric].weight}
							</span>
						</p>
						<p className="text-sm">
							<label className="font-bold">Height: </label>
							<span>
								{bmrData.height} {Measure[metric].height}
							</span>
						</p>
						<p className="text-sm">
							<label className="font-bold">BMR: </label>
							<span>
								{bmr} {KCALS}
							</span>
						</p>
					</div>
					<div>
						<h1 className="text-xl font-bold mb-2">TDEE</h1>
						<p className="text-sm ">
							<span className="text-lg">
								{tdee} {KCALS}
							</span>
						</p>
					</div>
					<div>
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
				</div>
			</div>
			<div className="justify-between flex flex-row p-4 m-5">
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
