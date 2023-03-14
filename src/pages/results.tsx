import HeadComponent from '../components/head';
import ResultsPageLayout from '../layout/results-layout';
import { useAtom } from 'jotai';
import { bmrAtom, bmrCalculationValuesAtom } from './bmr';
import { tdeeAtom, dietObjectiveAtom, dietObjectiveListAtom } from './tdee';

const DisplayBMRCalculationValues = () => {
	const [bmrData] = useAtom(bmrCalculationValuesAtom);
	const { age, gender, height, metric, weight } = bmrData;
	console.log('bmrData', bmrData);
	return (
		<>
			<div className="container">
				<div className="m-5 shadow-sm justify-center align-center shadow-purple-200 max-w-xs flex flex-column bg-slate-200 p-2 border border-spacing-2 rounded">
					<div className="mr-2">
						<label>Gender: </label>
						<span>{gender}</span>
					</div>
					<div className="mr-2">
						<label>Measure: </label>
						<span>{metric}</span>
					</div>
				</div>

				<div className="m-5 shadow-sm justify-center align-center shadow-purple-200 max-w-xs flex flex-column bg-slate-200 p-2 border border-spacing-2 rounded">
					<div className="mr-2 ">
						<label>Age: </label>
						<span>{age}</span>
					</div>
					<div className="mr-2">
						<label>Height: </label>
						<span>{height}</span>
					</div>
					<div className="mr-2">
						<label>Weight: </label>
						<span>{weight}</span>
					</div>
				</div>
			</div>
		</>
	);
};

function ResultsPage() {
	const [bmr] = useAtom(bmrAtom);
	const [tdee] = useAtom(tdeeAtom);
	const [dietObjective] = useAtom(dietObjectiveAtom);
	const [allDietObjectives] = useAtom(dietObjectiveListAtom);
	return (
		<ResultsPageLayout>
			<HeadComponent
				title="Calories and Macros results"
				content="Macro distribution according to goals and objectives and your bio data"
			/>
			<div className="container flex flex-column">
				<DisplayBMRCalculationValues />
				<DisplayBMRCalculationValues />
			</div>
		</ResultsPageLayout>
	);
}

export default ResultsPage;
