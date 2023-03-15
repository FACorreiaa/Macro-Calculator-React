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

const DisplayBMRCalculationValues = () => {
	const [bmrData] = useAtom(bmrCalculationValuesAtom);

	const { age, gender, height, metric, weight } = bmrData;
	return (
		<>
			<div className="container">
				<div className="m-5  shadow-sm flex justify-center flex-row shadow-purple-200  bg-white p-2 border border-spacing-2 rounded">
					<div className="mr-2">
						<label className="font-bold">Gender: </label>
						<span>{gender}</span>
					</div>
					<div className="mr-2">
						<label className="font-bold">Measure: </label>
						<span>{metric}</span>
					</div>
					<div className="mr-2 ">
						<label className="font-bold">Age: </label>
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

const DisplayInformation = () => {
	const [activity] = useAtom(activityAtom);
	const [objective] = useAtom(objectiveAtom);
	return (
		<div className="conatiner">
			<div
				className=" m-5 justify-center text-center p-2 items-center bg-blue-500 text-white text-sm font-bold px-4 py-3  border-spacing-2 rounded"
				role="alert">
				<div>
					<p>
						Your selected activity habbit was:<span>{activity}</span>
					</p>
				</div>
				<div>
					<p>
						Your selected objective was: <span>{objective}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

const DisplayBmrAndTdee = () => {
	const [bmrData] = useAtom(bmrCalculationValuesAtom);

	return (
		<>
			<div className="container justify-around flex flex-row">
				<div className="m-5 items-center shadow-sm justify-center  shadow-purple-200  bg-white p-2 border border-spacing-2 rounded">
					<p className="text-sm">
						TESTING THIS SHIT FOR <span className="font-bold text-xl">BMR</span>
						VALUE
					</p>
				</div>
				<div className="m-5  shadow-sm justify-center  shadow-purple-200  bg-white p-2 border border-spacing-2 rounded">
					<p className="text-sm">
						TESTING THIS SHIT FOR{' '}
						<span className="font-bold text-xl">TDEE</span>
						VALUE
					</p>
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

			<div className="container ">
				<DisplayBMRCalculationValues />
				<DisplayInformation />
				<DisplayBmrAndTdee />
			</div>
		</ResultsPageLayout>
	);
}

export default ResultsPage;
