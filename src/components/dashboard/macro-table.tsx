type MacroTableProps = {
	macroDistribution: any;
};

function MacroTable({ macroDistribution }: MacroTableProps) {
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							Macros
						</th>
						<th scope="col" className="px-6 py-3">
							Protein
						</th>
						<th scope="col" className="px-6 py-3">
							Fats
						</th>
						<th scope="col" className="px-6 py-3">
							Farbs
						</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(macroDistribution).map(([title]: any) => {
						return (
							<tr
								key={title}
								className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									{title}
								</th>
								<td className="px-6 py-4">
									{macroDistribution[title].protein}
								</td>
								<td className="px-6 py-4">{macroDistribution[title].fats}</td>
								<td className="px-6 py-4">{macroDistribution[title].carbs}</td>
							</tr>
						);
					})}
					{/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
							High Carb
						</th>
						<td className="px-6 py-4">x</td>
						<td className="px-6 py-4">y</td>
						<td className="px-6 py-4">$z</td>
					</tr>
					<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
							Low Carb
						</th>
						<td className="px-6 py-4">1</td>
						<td className="px-6 py-4">2</td>
						<td className="px-6 py-4">3</td>
					</tr>
					<tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
							Moderate Carb
						</th>
						<td className="px-6 py-4">a</td>
						<td className="px-6 py-4">b</td>
						<td className="px-6 py-4">$c</td>
					</tr> */}
				</tbody>
			</table>
		</div>
	);
}

export default MacroTable;
