import { ReactNode } from 'react';

export interface Option {
	label: string;
	value: number;
}
type DashboardTabsComponentProps = {
	planOptions: Option[];
	activePlanTab: string;
	onPlanOptionClick: (e: React.FormEvent<HTMLButtonElement>) => void;
	children: ReactNode;
};

const DashboardTabsComponent = ({
	planOptions,
	activePlanTab,
	onPlanOptionClick,
	children,
}: DashboardTabsComponentProps) => {
	return (
		<div className="max-w-7xl mx-auto pb-2 sm:px-6 lg:px-8">
			<div className=" pb-4 px-4 ">
				<div className="flex justify-between ">
					{planOptions.map(({ label, value }: Option) => {
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
				{children}
			</div>
		</div>
	);
};

export default DashboardTabsComponent;
