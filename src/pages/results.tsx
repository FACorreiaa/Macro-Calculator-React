import HeadComponent from '../components/head';
import { useLocation } from 'react-router-dom';
import ResultsPageLayout from '../layout/results-layout';

function ResultsPage() {
	const location = useLocation();
	console.log('location', location);

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
