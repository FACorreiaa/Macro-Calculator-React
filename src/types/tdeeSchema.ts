import { number, TypeOf } from 'zod';
import { z } from 'zod';

export const tdeeSchema = z.object({
	age: number({ required_error: 'Age is required' }).min(
		0,
		'Age must be bigger than zero'
	),
	height: number({ required_error: 'Height is required' }).min(
		0,
		'Height must be bigger than zero'
	),
	weight: number({ required_error: 'Weight is required' }).min(
		0,
		'Weight must be bigger than zero'
	),
});

export type TdeeInput = TypeOf<typeof tdeeSchema>;
