import React from 'react';
import HeadComponent from '../components/head';
import { useLocation } from 'react-router-dom';
import PageLayout from '../layout/form-layout';
import ResultsPageLayout from '../layout/results-layout';

function ResultsPage() {
	const location = useLocation();
	console.log('location', location);

	return (
		<ResultsPageLayout>
			<HeadComponent
				title="Calories and Macros results"
				name="Macro Distribution"
				content="Macro distribution according to goals and objectives"
			/>
			<div>oi</div>
			<div>oi</div>
			<div>oi</div>
		</ResultsPageLayout>
	);
}

export default ResultsPage;
