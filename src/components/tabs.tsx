export interface Option {
	label: string;
	value: number;
}
type TabsComponent = {
	options: Option[];
	activeTab: string;
	onClick: (e: any) => void;
};

const TabsComponent = ({ options, activeTab, onClick }: TabsComponent) => {
	return (
		<div className="max-w-7xl mx-auto pb-2 sm:px-6 lg:px-8">
			<div className=" pb-4 px-4 ">
				<div className="flex justify-between ">
					{options.map(({ label, value }: Option) => {
						return (
							<button
								value={label}
								key={value}
								id={label}
								className={`${
									activeTab === label
										? 'border-purple-950 font-bold text-purple-950'
										: 'border-transparent text-gray-100 hover:text-gray-700 hover:border-gray-300'
								} whitespace-nowrap	py-4 px-1 border-b-2 font-medium text-sm`}
								onClick={onClick}>
								{label}
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default TabsComponent;
