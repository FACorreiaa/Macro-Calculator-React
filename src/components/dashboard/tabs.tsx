export interface IOption {
	label: string;
	value: number;
}
type DashboardTabsComponentProps = {
	planOptions: IOption[];
	carbDistributionOptions: string[];
	activePlanTab: string;
	onPlanOptionClick: (e: React.MouseEvent<HTMLElement>) => void;
	onCarbDistributionClick: (e: React.MouseEvent<HTMLElement>) => void;
	activeCarbTab: string;
};

const DashboardTabsComponent = ({
	planOptions,
	carbDistributionOptions,
	activePlanTab,
	onPlanOptionClick,
	activeCarbTab,
	onCarbDistributionClick,
}: DashboardTabsComponentProps) => {
	return (
		<div className="max-w-7xl mx-auto pb-2 sm:px-6 lg:px-8">
			<div className=" pb-4 px-4 ">
				<div className="flex justify-between ">
					{planOptions.map(({ label, value }: IOption) => {
						return (
							<button
								value={label}
								key={value}
								id={label}
								className={`${
									activePlanTab === label
										? 'border-purple-900 font-bold text-purple-900'
										: 'border-transparent text-gray-900 hover:text-gray-700 hover:border-gray-300'
								} whitespace-nowrap	py-4 px-1 border-b-2 font-medium text-sm`}
								onClick={onPlanOptionClick}>
								{label}
							</button>
						);
					})}
				</div>
			</div>
			<div className=" pb-4 px-4 ">
				<div className="flex justify-between ">
					{carbDistributionOptions.map((value: string) => {
						return (
							<button
								value={value}
								key={value}
								className={`${
									activeCarbTab === value
										? 'border-purple-900 font-bold text-purple-900'
										: 'border-transparent text-gray-900 hover:text-gray-700 hover:border-gray-300'
								} whitespace-nowrap	py-4 px-1 border-b-2 font-medium text-sm`}
								onClick={onCarbDistributionClick}>
								{value}
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default DashboardTabsComponent;
