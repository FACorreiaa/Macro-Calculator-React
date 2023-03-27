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

export const calculateTDEE = (bmr: number, activity: string): number => {
	const activityFactor = workoutVolumesList[activity];
	return bmr * activityFactor;
};

export const calculateCalorieTarget = (tdee: number, goal: string): number => {
	const goalAmount = goalList[goal];
	return tdee + goalAmount;
};

export const getallDietObjectives = (bmr: number) => {
	return {
		Maintenance: bmr,
		Cutting: calculateCalorieTarget(bmr, 'Cutting'),
		Bulking: calculateCalorieTarget(bmr, 'Bulking'),
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

export const getDietObjective = (bmr: number, objective: string) =>
	calculateCalorieTarget(bmr, objective);

export const calculateMacrosPerTab = (
	bmr: number,
	objective: string,
	activeCarbPlan = MEDIUM_CARB
): Macros => {
	const dietObjective = getDietObjective(bmr, objective);
	const macroRacios = CaloricDistribution[activeCarbPlan];
	const { protein, carbs, fats } = macroRacios;

	const proteinValues = calculateMacroDistribution(
		protein,
		dietObjective,
		PROTEIN_PER_GRAM
	);
	const carbValues = calculateMacroDistribution(
		carbs,
		dietObjective,
		CARB_PER_GRAM
	);
	const fatValues = calculateMacroDistribution(
		fats,
		dietObjective,
		FAT_PER_GRAM
	);

	return {
		protein: proteinValues,
		carbs: carbValues,
		fats: fatValues,
	};
};

// TO DO
//Write function to receive basic tdee and return the corresponding macros based on carb distribution
