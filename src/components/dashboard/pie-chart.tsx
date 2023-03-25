import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type CustomPieChartType = {
	protein: number;
	fats: number;
	carbs: number;
};
function CustomPieChart({ protein, fats, carbs }: CustomPieChartType) {
	const data = {
		labels: ['Protein', 'Fats', 'Carbs'],
		datasets: [
			{
				label: 'Macro distribution',
				data: [protein, fats, carbs],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
				],
				borderWidth: 2,
			},
		],
	};

	return (
		<div className="p-6 m-6 container">
			<Pie data={data} />
		</div>
	);
}

export default CustomPieChart;
