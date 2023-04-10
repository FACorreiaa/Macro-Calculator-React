import { CARBS, DietPlan, FATS, GRAMS, PROTEIN } from '../../helper/data';

type MacroTableProps = {
	macroDistribution: DietPlan;
};

function MacroTable({ macroDistribution }: MacroTableProps) {
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 sm:bg-white sm:shadow-lg">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr className="sm:table-row sm:rounded-none sm:mb-0 mb-2">
						<th scope="col" className="px-6 py-3">
							Macros
						</th>
						<th scope="col" className="px-6 py-3">
							{PROTEIN}
						</th>
						<th scope="col" className="px-6 py-3">
							{FATS}
						</th>
						<th scope="col" className="px-6 py-3">
							{CARBS}
						</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(macroDistribution).map(([title]: any) => {
						return (
							<tr
								key={title}
								className="sm:table-row sm:rounded-none sm:mb-0 mb-2 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									{title}
								</th>
								<td className="px-6 py-4">
									{macroDistribution[title].protein} {GRAMS}
								</td>
								<td className="px-6 py-4">
									{macroDistribution[title].fats} {GRAMS}
								</td>
								<td className="px-6 py-4">
									{macroDistribution[title].carbs} {GRAMS}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default MacroTable;
