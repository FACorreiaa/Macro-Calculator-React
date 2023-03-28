import {
	CARB_PER_GRAM,
	FAT_PER_GRAM,
	goalList,
	PROTEIN_PER_GRAM,
	workoutVolumesList,
	MEDIUM_CARB,
	HIGH_CARB,
	LOW_CARB,
	CaloricDistribution,
} from './data';

interface Macros {
	protein: number;
	fats: number;
	carbs: number;
}

interface Plan {
	Maintenance: number;
	Cutting: number;
	Bulking: number;
}

export const calculateTDEE = (bmr: number, activity: string): number => {
	const activityFactor = workoutVolumesList[activity];
	return bmr * activityFactor;
};

export const calculateCalorieTarget = (tdee: number, goal: string): number => {
	const goalAmount = goalList[goal];
	return goal === 'Cutting' ? tdee - goalAmount : tdee + goalAmount;
};

//askgpt
export const getallDietObjectives = (bmr: number, objective: string): Plan => {
	return {
		Maintenance: calculateCalorieTarget(bmr, objective),
		Cutting: calculateCalorieTarget(bmr, objective),
		Bulking: calculateCalorieTarget(bmr, objective),
	};
};

const calculateMacroDistribution = (
	calorieFactor: number,
	calorieGoal: number,
	caloriesPerGram: number
): number => (calorieFactor * calorieGoal) / caloriesPerGram;

export const calculateMacros = (
	coloricGoal: number
): Record<string, Macros> => {
	const values = [MEDIUM_CARB, LOW_CARB, HIGH_CARB];
	const result: Record<string, Macros> = CaloricDistribution;

	for (const value of values) {
		const macroRacios = CaloricDistribution[value];
		const { protein, carbs, fats } = macroRacios;

		result[value] = {
			protein: calculateMacroDistribution(
				protein,
				coloricGoal,
				PROTEIN_PER_GRAM
			),
			carbs: calculateMacroDistribution(carbs, coloricGoal, CARB_PER_GRAM),
			fats: calculateMacroDistribution(fats, coloricGoal, FAT_PER_GRAM),
		};
	}
	return result;
};

export const getMacroDistribution = (caloriesObjectiveValue: number) => {
	return {
		'Moderate Carb': {
			protein: (0.4 * caloriesObjectiveValue) / 4,
			fats: (0.3 * caloriesObjectiveValue) / 9,
			carbs: (0.3 * caloriesObjectiveValue) / 4,
		},
		'High Carb': {
			protein: (0.4 * caloriesObjectiveValue) / 4,
			carbs: (0.5 * caloriesObjectiveValue) / 4,
			fats: (0.3 * caloriesObjectiveValue) / 9,
		},
		'Low Carb': {
			protein: (0.4 * caloriesObjectiveValue) / 4,
			carbs: (0.2 * caloriesObjectiveValue) / 4,
			fats: (0.4 * caloriesObjectiveValue) / 9,
		},
	};
};
