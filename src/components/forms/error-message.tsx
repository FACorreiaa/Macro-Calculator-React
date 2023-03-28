type FormErrorMessage = {
	message: string;
};
function FormErrorMessage({ message }: FormErrorMessage) {
	return (
		<div
			className="my-4 rounded-full border-2 border-red-950 bg-red-100 py-0 text-red-950 dark:bg-red-200 dark:text-red-950"
			role="alert">
			<span className="text-xs font-medium">{message}</span>
		</div>
	);
}

export default FormErrorMessage;
