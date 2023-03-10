import { string, TypeOf } from 'zod';
import { z } from 'zod';

export const goalsSchema = z.object({
	activity: string({ required_error: 'Activity is required' }),
	objective: string({ required_error: 'Objective is required' }),
});

export type GoalsInput = TypeOf<typeof goalsSchema>;
