import HeadComponent from '../components/head';
import ResultsPageLayout from '../layout/results-layout';
import { useAtom } from 'jotai';
import { bmrAtom, bmrCalculationValuesAtom } from './bmr';
import {
	tdeeAtom,
	dietObjectiveAtom,
	dietObjectiveListAtom,
	activityAtom,
	objectiveAtom,
} from './tdee';
import BannerInfoComponent from '../components/banner-info';

const DisplayBaseInfo = () => {
	const [bmrData] = useAtom(bmrCalculationValuesAtom);
	const [bmr] = useAtom(bmrAtom);
	const [tdee] = useAtom(tdeeAtom);
	const [objective] = useAtom(objectiveAtom);
	const [activity] = useAtom(activityAtom);
	const [allDietObjectives] = useAtom(dietObjectiveListAtom);

	return (
		<>
			<div className="container justify-evenly flex flex-row p-2 m-5">
				<div className="items-center shadow-sm justify-center  shadow-purple-200  bg-white p-6 border border-spacing-2 rounded">
					<h1>Biometric Data</h1>
					<p className="text-sm">
						<label className="font-bold">Gender: </label>
						<span>{bmrData.gender}</span>
					</p>
					<p className="text-sm">
						<label className="font-bold">Age: </label>
						<span>{bmrData.age}</span>
					</p>
					<p className="text-sm">
						<label className="font-bold">Weight: </label>
						<span>{bmrData.weight}</span>
					</p>
					<p className="text-sm">
						<label className="font-bold">Height: </label>
						<span>{bmrData.height}</span>
					</p>
					<p className="text-sm">
						<label className="font-bold">BMR: </label>
						<span>{bmr}</span>
					</p>
				</div>

				<div className="  shadow-sm justify-center  shadow-purple-200  bg-white p-6 border border-spacing-2 rounded">
					<h1>Goals and Objectives</h1>

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
						<span>{allDietObjectives.Maintenance}</span>
					</p>
					<p className="text-sm">
						<label className="font-bold">Bulking Calories: </label>
						<span>{allDietObjectives.Bulking}</span>
					</p>
					<p className="text-sm">
						<label className="font-bold">Cutting Calories: </label>
						<span>{allDietObjectives.Cutting}</span>
					</p>
				</div>
				<div className="shadow-sm justify-center  shadow-slate-800  bg-white p-6 border border-spacing-2 rounded">
					<h1>Macros</h1>
					<p className="text-sm">
						<label className="font-bold">Tdee: </label>
						<span>{tdee}</span>
					</p>

					<p className="text-sm">
						<label className="font-bold">Protein: </label>
						<span>Protein</span>
					</p>
					<p className="text-sm">
						<label className="font-bold">Fats: </label>
						<span>Fats</span>
					</p>
					<p className="text-sm">
						<label className="font-bold">Carbs: </label>
						<span>Carbs</span>
					</p>
				</div>
			</div>
		</>
	);
};

const DisplayCalorieObjective = () => {
	const [dietObjective] = useAtom(dietObjectiveAtom);
	const [objective] = useAtom(objectiveAtom);

	return (
		<div className="container">
			<div
				className=" m-5 justify-center text-center p-2 items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 border border-blue-200 border-spacing-2 rounded"
				role="alert">
				<p className="text-sm">
					<label className="font-bold">Calories target:&nbsp; </label>
					<span>
						For {objective} you should consume {dietObjective} per day or&nbsp;{' '}
					</span>
					<span>{dietObjective * 7} per week</span>
				</p>
			</div>
		</div>
	);
};

function ResultsPage() {
	const [bmrData] = useAtom(bmrCalculationValuesAtom);
	const [bmr] = useAtom(bmrAtom);
	const [tdee] = useAtom(tdeeAtom);

	return (
		<ResultsPageLayout>
			<HeadComponent
				title="Calories and Macros results"
				content="Macro distribution according to goals and objectives and your bio data"
			/>

			<div className="container">
				<BannerInfoComponent
					title="Measuring: "
					label={`You are using ${bmrData.metric} measures`}
				/>
				<DisplayBaseInfo />
				<BannerInfoComponent
					title="Advice: "
					label="Keep in mind the body is not a calculator and this or any tool out there are just extimatives. Adjust yours for the best result possible and enjoy the process."
				/>
				<DisplayCalorieObjective />
			</div>
		</ResultsPageLayout>
	);
}

export default ResultsPage;
