import { number, string, TypeOf } from 'zod';
import { z } from 'zod';

export type TdeeProperties = {
	age: string;
	height: string;
	weight: string;
	metric: string;
	gender: string;
	activity: string;
};

export const tdeeSchema = z.object({
	age: z
		.string()
		.min(0, 'Age must be bigger than zero')
		.max(99, 'Age must not be greater than 99')
		.refine((val) => !Number.isNaN(parseInt(val, 10)), {
			message: 'Expected number, received a string',
		}),

	height: string({ required_error: 'Height is required' })
		.min(0, 'Height must be bigger than zero')
		.refine((val) => !Number.isNaN(parseInt(val, 10)), {
			message: 'Expected number, received a string',
		}),
	weight: string({ required_error: 'Weight is required' })
		.min(0, 'Weight must be bigger than zero')
		.refine((val) => !Number.isNaN(parseInt(val, 10)), {
			message: 'Expected number, received a string',
		}),
	metric: string({ required_error: 'Metric is required' }),
	gender: string({ required_error: 'Gender is required' }),
	activity: string({ required_error: 'Activity is required' }),
	objective: string({ required_error: 'Objective is required' }),
});

export type TdeeInput = TypeOf<typeof tdeeSchema>;
