import BannerInfoComponent from '../components/banner-info';
import DisplayCalorieObjective from '../components/dashboard/calories-objective';
import CustomPieChart from '../components/dashboard/chart/pie-chart';
import MacroTable from '../components/dashboard/macro-table';
import DisplayBaseInfo from '../components/dashboard/main-info';
import BannerMetricInfo from '../components/dashboard/metric-info';
import DashboardTabsComponent from '../components/dashboard/tabs';
import HeadComponent from '../components/head';
import { CarbIntake, objectiveValues } from '../helper/data';
import { getallDietObjectives, getMacroDistribution } from '../helper/tdee';
import ResultsPageLayout from '../layout/results-layout';
import { tdeeAtom, objectiveAtom } from './tdee';
import { useAtom } from 'jotai';
import { ReactNode, useEffect, useState } from 'react';

type DisplayMacrosType = {
	children: ReactNode;
	activePlanTab: string;
	handlePlanTabClick: (e: React.FormEvent<HTMLButtonElement>) => void;
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

	useEffect(() => {
		const newMacroDistribution = getMacroDistribution(
			dietObjectives[activePlanTab as keyof typeof dietObjectives]
		);
		setMacroDistribution(newMacroDistribution);
	}, [activePlanTab]);

	return (
		<ResultsPageLayout>
			<HeadComponent
				title="Calories and Macros results"
				content="Macro distribution according to goals and objectives and your bio data"
			/>

			<div className="container">
				<BannerMetricInfo />
				<DisplayBaseInfo />
				<BannerInfoComponent
					title="Advice: "
					label="Keep in mind the body is not a calculator and this or any tool out there are just extimatives. Adjust yours for the best result possible and enjoy the process."
				/>
				<DisplayCalorieObjective />
				<DisplayMacros
					handlePlanTabClick={handlePlanTabClick}
					activePlanTab={activePlanTab}>
					<div className=" flex flex-wrap flex-row justify-center">
						<CustomPieChart
							protein={macroDistribution[CarbIntake.MODERATE].protein}
							fats={macroDistribution[CarbIntake.MODERATE].fats}
							carbs={macroDistribution[CarbIntake.MODERATE].carbs}
							title="Moderate Carb"
						/>
						<CustomPieChart
							protein={macroDistribution[CarbIntake.LOW].protein}
							fats={macroDistribution[CarbIntake.LOW].fats}
							carbs={macroDistribution[CarbIntake.LOW].carbs}
							title="Low Carb"
						/>
						<CustomPieChart
							protein={macroDistribution[CarbIntake.HIGH].protein}
							fats={macroDistribution[CarbIntake.HIGH].fats}
							carbs={macroDistribution[CarbIntake.HIGH].carbs}
							title="High Carb"
						/>
					</div>
					<MacroTable macroDistribution={macroDistribution} />
				</DisplayMacros>
			</div>
		</ResultsPageLayout>
	);
}

export default ResultsPage;
