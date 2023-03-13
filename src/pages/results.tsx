import HeadComponent from '../components/head';
import ResultsPageLayout from '../layout/results-layout';
import { useAtom } from 'jotai';
import { bmrAtom, bmrCalculationValuesAtom } from './bmr';
import { tdeeAtom, dietObjectiveAtom, dietObjectiveListAtom } from './tdee';

function ResultsPage() {
	const [bmrData] = useAtom(bmrCalculationValuesAtom);
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
		</ResultsPageLayout>
	);
}

export default ResultsPage;
