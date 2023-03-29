export const PROTEIN_PER_GRAM = 4;
export const CARB_PER_GRAM = 4;
export const FAT_PER_GRAM = 9;
export const LOW_CARB = 'Low Carb';
export const HIGH_CARB = 'High Carb';
export const MEDIUM_CARB = 'Moderate Carb';

export const measureValues = [
	{
		label: 'Metric',
		value: 0,
	},
	{
		label: 'Imperial',
		value: 1,
	},
];

export const objectiveValues = [
	{
		label: 'Maintenance',
		value: 0,
	},
	{
		label: 'Bulking',
		value: 1,
	},
	{
		label: 'Cutting',
		value: 2,
	},
];

const sexValues: {
	[key: string]: number;
} = {
	Male: 5,
	Female: -161,
};

export const sexOptions = Object.entries(sexValues).map(([label, value]) => ({
	label,
	value,
}));

export const goalList: {
	[key: string]: number;
} = {
	Maintenance: 0,
	Bulking: 450,
	Cutting: 350,
};

export const dataOptions = (data: object) =>
	Object.entries(data).map(([label, value]) => ({
		label,
		value,
	}));

export const activityLevelValues: {
	[key: string]: number;
} = {
	'I dont workout.': 1.2,
	'Workout 1 to 2 days per week': 1.375,
	'Workout 3-5 days per week': 1.55,
	'Workout 5 to 7 days per week': 1.725,
	'Giga Dog! Trainning twice a day!': 1.9,
};

export const CaloricDistribution: {
	[key: string]: {
		protein: number;
		fats: number;
		carbs: number;
	};
} = {
	'Moderate Carb': {
		protein: 0.3,
		fats: 0.35,
		carbs: 0.35,
	},
	'High Carb': {
		protein: 0.3,
		carbs: 0.5,
		fats: 0.2,
	},
	'Low Carb': {
		protein: 0.4,
		carbs: 0.2,
		fats: 0.4,
	},
};

export interface DietPlan {
	[key: string]: {
		protein: number;
		fats: number;
		carbs: number;
	};
}

export enum CarbIntake {
	MODERATE = 'Moderate Carb',
	HIGH = 'High Carb',
	LOW = 'Low Carb',
}

export enum PersonalData {
	AGE = 'age',
	WEIGHT = 'weight',
	HEIGHT = 'height',
	OBJECTIVE = 'objective',
	ACTIVITY = 'activity',
	SEX = 'sex',
}
