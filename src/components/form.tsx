import React from 'react';
import useZodForm from '../hooks/useZodForm';
import { tdeeSchema } from '../types/tdeeSchema';

type RegisterPageProps = {
	name: string;
	email: string;
	password: string;
	cpassword: string;
};

function CUstomForm() {
	const methods = useZodForm({
		schema: tdeeSchema,
		defaultValues: {
			name: '',
			email: '',
			password: '',
			cpassword: '',
		},
	});

	async function onSumitRegisterValues(values: RegisterPageProps) {
		// return await mutation.mutate(values, {
		// 	onSuccess: async () => router.push('http://localhost:5005/login/signin'),
		// 	onError: async (error) => {
		// 		console.log(error);
		// 	},
		// });
	}

	return (
		<div>
			<form onSubmit={methods.handleSubmit(onSumitRegisterValues)}>
				<input />
			</form>
		</div>
	);
}

export default CUstomForm;
