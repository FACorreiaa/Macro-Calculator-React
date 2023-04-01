import { BmrInput } from '../types/tdeeSchema';
import {
	CARB_PER_GRAM,
	FAT_PER_GRAM,
	goalList,
	PROTEIN_PER_GRAM,
	activityLevelValues,
	MEDIUM_CARB,
	HIGH_CARB,
	LOW_CARB,
	CaloricDistribution,
	DietPlan,
	MAINTENANCE,
	BULKING,
	CUTTING,
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

export const maleAgeFactor = 88.362;
export const femaleAgeFactor = 447.593;

type MetricSystem = 'Metric' | 'Imperial';
type Gender = 'Male' | 'Female';

const conversion = {
	Metric: {
		Male: {
			weightMultiplier: 13.4,
			heightMultiplier: 4.8,
			ageMultiplier: 5.7,
			ageFactor: 88.362,
		},
		Female: {
			weightMultiplier: 9.2,
			heightMultiplier: 3.1,
			ageMultiplier: 4.3,
			ageFactor: 447.593,
		},
	},
	Imperial: {
		Male: {
			weightMultiplier: 6.23,
			heightMultiplier: 12.7,
			ageMultiplier: 6.8,
			ageFactor: 88.362,
		},
		Female: {
			weightMultiplier: 4.35,
			heightMultiplier: 4.7,
			ageMultiplier: 4.7,
			ageFactor: 447.593,
		},
	},
};

export const calculateBMR = ({
	age,
	sex,
	metric,
	weight,
	height,
}: BmrInput): number => {
	return Math.trunc(
		conversion[metric as MetricSystem][sex as Gender].ageFactor +
			conversion[metric as MetricSystem][sex as Gender].weightMultiplier *
				Number(weight) +
			conversion[metric as MetricSystem][sex as Gender].heightMultiplier *
				Number(height) -
			conversion[metric as MetricSystem][sex as Gender].ageMultiplier *
				Number(age)
	);
};

export const calculateTDEE = (bmr: number, activity: string): number => {
	const activityFactor = activityLevelValues[activity];
	return Math.trunc(bmr * activityFactor);
};

export const calculateCalorieTarget = (tdee: number, goal: string): number => {
	const goalAmount = goalList[goal];
	if (goal === 'Cutting') {
		return Math.trunc(tdee - goalAmount);
	}

	return Math.trunc(tdee + goalAmount);
};

export const getallDietObjectives = (bmr: number): Plan => {
	return {
		Maintenance: calculateCalorieTarget(bmr, MAINTENANCE),
		Cutting: calculateCalorieTarget(bmr, CUTTING),
		Bulking: calculateCalorieTarget(bmr, BULKING),
	};
};

const calculateMacroDistribution = (
	calorieFactor: number,
	calorieGoal: number,
	caloriesPerGram: number
): number => Math.trunc((calorieFactor * calorieGoal) / caloriesPerGram);

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

export const getMacroDistribution = (
	caloriesObjectiveValue: number
): DietPlan => {
	const result: DietPlan = {
		'Moderate Carb': {
			protein: Math.trunc((0.4 * caloriesObjectiveValue) / 4),
			fats: Math.trunc((0.3 * caloriesObjectiveValue) / 9),
			carbs: Math.trunc((0.3 * caloriesObjectiveValue) / 4),
		},
		'High Carb': {
			protein: Math.trunc((0.4 * caloriesObjectiveValue) / 4),
			fats: Math.trunc((0.3 * caloriesObjectiveValue) / 9),
			carbs: Math.trunc((0.5 * caloriesObjectiveValue) / 4),
		},
		'Low Carb': {
			protein: Math.trunc((0.4 * caloriesObjectiveValue) / 4),
			fats: Math.trunc((0.4 * caloriesObjectiveValue) / 9),
			carbs: Math.trunc((0.2 * caloriesObjectiveValue) / 4),
		},
	};
	return result;
};
