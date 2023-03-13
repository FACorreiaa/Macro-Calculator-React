import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

// export interface IOption {
// 	label: string;
// 	value: number;
// }

export interface IOption {
	label: string;
	value: number;
}
type CustomTabsComponent = {
	options: IOption[];
	activeTab: string;
	onClick: (e: any) => void;
};

const CustomTabsComponent = ({
	options,
	activeTab,
	onClick,
}: CustomTabsComponent) => {
	return (
		<div className="max-w-7xl mx-auto pb-2 sm:px-6 lg:px-8">
			<div className=" pb-4 px-4 ">
				<div className="flex justify-between ">
					{options.map(({ label, value }: IOption) => {
						return (
							<button
								value={label}
								key={value}
								id={label}
								className={`${
									activeTab === label
										? 'border-purple-900 font-bold text-purple-900'
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

export default CustomTabsComponent;
