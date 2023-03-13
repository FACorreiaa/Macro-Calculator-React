export const workoutVolume = [
	{
		label: 'I dont workout.',
		name: 'button-types',
		value: 1.2,
	},
	{
		label: 'Workout 1 to 2 days per week',
		name: 'button-types',
		value: 1.375,
	},
	{
		label: 'Workout 3-5 days per week',
		name: 'button-types',
		value: 1.55,
	},
	{
		label: 'Workout 5 to 7 days per week',
		name: 'button-types',
		value: 1.725,
	},
	{
		label: 'Giga Dog! Trainning twice a day!',
		name: 'button-types',
		value: 1.9,
	},
];

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

const genderValues: {
	[key: string]: number;
} = {
	Male: 5,
	Female: -161,
};

export const genderOptions = Object.entries(genderValues).map(
	([label, value]) => ({
		label,
		value,
	})
);

const goalList: {
	[key: string]: number;
} = {
	Maintenance: 0,
	Bulking: 450,
	Cutting: 350,
};

export const goalOptions = Object.entries(goalList).map(([label, value]) => ({
	label,
	value,
}));

export const workoutVolumesList: {
	[key: string]: number;
} = {
	'I dont workout.': 1.2,
	'Workout 1 to 2 days per week': 1.375,
	'Workout 3-5 days per week': 1.55,
	'Workout 5 to 7 days per week': 1.725,
	'Giga Dog! Trainning twice a day!': 1.9,
};

export const caloricDistribution: {
	[key: string]: {
		protein: number;
		fats: number;
		carbs: number;
	};
} = {
	ModerateCarb: {
		protein: 0.3,
		fats: 0.35,
		carbs: 0.35,
	},
	HighCarb: {
		protein: 0.3,
		carbs: 0.5,
		fats: 0.2,
	},
	LowCarb: {
		protein: 0.4,
		carbs: 0.2,
		fats: 0.4,
	},
};

export const CALORIC_DISTRIBUTIONS = ['ModerateCarb', 'LowCarb', 'HighCarb'];

export const PROTEIN_PER_GRAM = 4;
export const CARB_PER_GRAM = 4;
export const FAT_PER_GRAM = 9;
