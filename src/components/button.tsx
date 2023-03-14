import React from 'react';

type CustomButtomProps = {
	type: 'submit' | 'reset' | 'button' | undefined;
	label: string;
	onClick?: () => void;
};
function CustomButtom({ type, label, onClick }: CustomButtomProps) {
	return (
		<button
			onClick={onClick}
			type={type}
			className="text-white disabled:bg-slate-300 disabled:cursor-not-allowed bg-gradient-to-r from-purple-500 to-indigo-900  hover:bg-gray-900 focus:outline-none  font-bold rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-from-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 hover:from-purple-800 hover:to-indigo-900">
			{label}
		</button>
	);
}

export default CustomButtom;
