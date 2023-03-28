import BannerInfoComponent from '../components/banner-info';
import CustomPieChart from '../components/dashboard/chart/pie-chart';
import CustomMacroCard from '../components/dashboard/macro-card';
import DashboardTabsComponent from '../components/dashboard/tabs';
import HeadComponent from '../components/head';
import { objectiveValues } from '../helper/data';
import { getallDietObjectives, getMacroDistribution } from '../helper/tdee';
import ResultsPageLayout from '../layout/results-layout';
import { bmrAtom, bmrCalculationValuesAtom } from './bmr';
import {
	tdeeAtom,
	dietObjectiveAtom,
	dietObjectiveListAtom,
	activityAtom,
	objectiveAtom,
	macrosAtom,
} from './tdee';
import { useAtom } from 'jotai';
import { ReactNode, useState } from 'react';

type DisplayMacrosType = {
	children: ReactNode;
	activePlanTab: string;
	handlePlanTabClick: (e: React.FormEvent<HTMLButtonElement>) => void;
};
type IndividualMacroTypes = {
	individualMacros: {
		[key: string]: {
			protein: number;
			fats: number;
			carbs: number;
		};
	};
};
const DisplayBaseInfo = ({ individualMacros }: IndividualMacroTypes) => {
	const [bmrData] = useAtom(bmrCalculationValuesAtom);
	const [bmr] = useAtom(bmrAtom);
	const [tdee] = useAtom(tdeeAtom);
	const [objective] = useAtom(objectiveAtom);
	const [activity] = useAtom(activityAtom);
	const [allDietObjectives] = useAtom(dietObjectiveListAtom);

	return (
		<div className="bg-slate-100 border border-slate-400  p-2  rounded relative text-center m-5">
			<div className="justify-between flex flex-row p-4 m-5">
				<div className="w-64 shadow-sm justify-center  shadow-slate-800  bg-white p-6 border border-spacing-2 rounded">
					<h1 className="text-xl font-bold mb-2">Biometric Data</h1>
					<p className="text-sm">
						<label className="font-bold">sex: </label>
						<span>{bmrData.sex}</span>
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
				<div className="w-64 shadow-sm justify-center  shadow-slate-800  bg-white p-6 border border-spacing-2 rounded">
					<h1 className="text-xl font-bold mb-2">TDEE</h1>
					<p className="text-sm ">
						<span className="text-lg">{tdee}</span>
					</p>
				</div>
				<div className="w-64 shadow-sm justify-center  shadow-slate-800  bg-white p-6 border border-spacing-2 rounded">
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

const DisplayCalorieObjective = () => {
	const [dietObjective] = useAtom(dietObjectiveAtom);
	const [objective] = useAtom(objectiveAtom);

	return (
		<div className="bg-slate-100 border border-slate-400  p-2  rounded relative text-center m-5">
			<div
				className=" m-5 justify-center text-center p-2 items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 border border-blue-200 border-spacing-2 rounded"
				role="alert">
				<p className="text-sm">
					<label className="font-bold">Calories target:&nbsp; </label>
					<span>
						For {objective} you should consume{' '}
						<span className="underline font-bold text-lg">{dietObjective}</span>{' '}
						per day or&nbsp;
					</span>
					<span>
						<span className="underline font-bold text-lg">
							{dietObjective * 7}
						</span>{' '}
						per week
					</span>
				</p>
			</div>
		</div>
	);
};

const DisplayMacros = ({
	children,
	activePlanTab,
	handlePlanTabClick,
}: DisplayMacrosType) => {
	return (
		<div className="bg-slate-100 border border-slate-400  p-2  rounded relative text-center m-5">
			<DashboardTabsComponent
				planOptions={objectiveValues}
				activePlanTab={activePlanTab}
				onPlanOptionClick={handlePlanTabClick}>
				{children}
			</DashboardTabsComponent>
		</div>
	);
};

function ResultsPage() {
	const [objective] = useAtom(objectiveAtom);
	const [activePlanTab, setActivePlanTab] = useState(objective);
	const [tdee] = useAtom(tdeeAtom);
	const dietObjectives = getallDietObjectives(tdee, activePlanTab);

	const [bmrData] = useAtom(bmrCalculationValuesAtom);

	const [individualMacros] = useAtom(macrosAtom);

	//FIX LOCAL STATE
	const [macroDistribution, setMacroDistribution] = useState(
		getMacroDistribution(
			dietObjectives[activePlanTab as keyof typeof dietObjectives]
		)
	);

	const handlePlanTabClick = (e: React.FormEvent<HTMLButtonElement>) => {
		const tab = e.currentTarget.value;

		const newMacroDistribution = getMacroDistribution(
			dietObjectives[tab as keyof typeof dietObjectives]
		);
		setActivePlanTab(tab);
		setMacroDistribution(newMacroDistribution);
	};

	return (
		<ResultsPageLayout>
			<HeadComponent
				title="Calories and Macros results"
				content="Macro distribution according to goals and objectives and your bio data"
			/>

			<div className="container">
				<BannerInfoComponent
					title="Measuring: "
					label={`You are using ${bmrData.metric} system`}
				/>
				<DisplayBaseInfo individualMacros={individualMacros} />
				<BannerInfoComponent
					title="Advice: "
					label="Keep in mind the body is not a calculator and this or any tool out there are just extimatives. Adjust yours for the best result possible and enjoy the process."
				/>
				<DisplayCalorieObjective />
				<DisplayMacros
					handlePlanTabClick={handlePlanTabClick}
					activePlanTab={activePlanTab}>
					<div className=" flex flex-wrap flex-row justify-center">
						<div>
							<span>{macroDistribution['Moderate Carb'].protein}</span>
						</div>
						<CustomPieChart
							protein={macroDistribution['Moderate Carb'].protein}
							fats={macroDistribution['Moderate Carb'].fats}
							carbs={macroDistribution['Moderate Carb'].carbs}
							title="Moderate Carb"
						/>
						<CustomPieChart
							protein={macroDistribution['Low Carb'].protein}
							fats={macroDistribution['Low Carb'].fats}
							carbs={macroDistribution['Low Carb'].carbs}
							title="Low Carb"
						/>
						<CustomPieChart
							protein={macroDistribution['High Carb'].protein}
							fats={macroDistribution['High Carb'].fats}
							carbs={macroDistribution['High Carb'].carbs}
							title="High Carb"
						/>
					</div>
				</DisplayMacros>
			</div>
		</ResultsPageLayout>
	);
}

export default ResultsPage;
