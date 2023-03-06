import type { TypeOf } from 'zod';
import { string, z } from 'zod';

export const tdeeSchema = z
	.object({
		name: string({ required_error: 'Name is required' }).min(
			5,
			'Name must be more than 5 characters'
		),
		email: string({ required_error: 'Email is required' }).email(
			'Invalid email'
		),
		//photo: string({ required_error: "Photo is required" }),
		password: string({ required_error: 'Password is required' })
			.min(8, 'Password must be more than 8 characters')
			.max(32, 'Password must be less than 32 characters'),
		cpassword: string({ required_error: 'Please confirm your password' }),
	})
	.refine((data) => data.password === data.cpassword, {
		path: ['passwordConfirm'],
		message: 'Passwords do not match',
	});

export type TdeeInput = TypeOf<typeof tdeeSchema>;
