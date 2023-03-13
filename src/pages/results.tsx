import HeadComponent from '../components/head';
import ResultsPageLayout from '../layout/results-layout';
import { useAtom } from 'jotai';
import { bmrAtom, bmrCalculationValuesAtom } from './bmr';
import {
	tdeeAtom,
	caloricObjectiveAtom,
	caloricObjectiveListAtom,
} from './tdee';

function ResultsPage() {
	const [bmrValues] = useAtom(bmrCalculationValuesAtom);
	const [bmr] = useAtom(bmrAtom);
	const [tdee] = useAtom(tdeeAtom);
	const [caloricObjective] = useAtom(caloricObjectiveAtom);
	const [allObjectives] = useAtom(caloricObjectiveListAtom);
	console.log(allObjectives);
	return (
		<ResultsPageLayout>
			<HeadComponent
				title="Calories and Macros results"
				content="Macro distribution according to goals and objectives and your bio data"
			/>
		</ResultsPageLayout>
	);
}

export default ResultsPage;
