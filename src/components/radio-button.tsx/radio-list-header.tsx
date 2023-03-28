type RadioListHeader = {
	title: string;
};
function RadioListHeader({ title }: RadioListHeader) {
	return (
		<label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-950">
			{title}
		</label>
	);
}

export default RadioListHeader;
