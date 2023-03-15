import HeadComponent from '../components/head';
import ResultsPageLayout from '../layout/results-layout';
import { useAtom } from 'jotai';
import { bmrAtom, bmrCalculationValuesAtom } from './bmr';
import { tdeeAtom, dietObjectiveAtom, dietObjectiveListAtom } from './tdee';

const DisplayBMRCalculationValues = () => {
	const [bmrData] = useAtom(bmrCalculationValuesAtom);
	const { age, gender, height, metric, weight } = bmrData;
	return (
		<>
			<div className="container">
				<div className="m-5 shadow-sm justify-center align-center shadow-purple-200 max-w-xs bg-slate-200 p-2 border border-spacing-2 rounded">
					<h1 className="text-3xl font-extrabold dark:text-slate-900">
						Biometric data
					</h1>

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

const Test = () => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-300">
			<img
				className="w-full"
				src="/img/card-top.jpg"
				alt="Sunset in the mountains"
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">The Coldest Sunset</div>
				<p className="text-gray-700 text-base">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
					quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
					nihil.
				</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					#photography
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					#travel
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					#winter
				</span>
			</div>
		</div>
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
			</div>
		</ResultsPageLayout>
	);
}

export default ResultsPage;
