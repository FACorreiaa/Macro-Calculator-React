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

type Macros = {
	protein: number;
	fats: number;
	carbs: number;
};

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
		const protein = calculateMacroDistribution(
			macroRacios.protein,
			coloricGoal,
			PROTEIN_PER_GRAM
		);
		const carbs = calculateMacroDistribution(
			macroRacios.carbs,
			coloricGoal,
			CARB_PER_GRAM
		);
		const fats = calculateMacroDistribution(
			macroRacios.fats,
			coloricGoal,
			FAT_PER_GRAM
		);

		result[value] = {
			protein,
			carbs,
			fats,
		};
	}
	return result;
};

export const getDietObjective = (bmr: number, objective: string) =>
	calculateCalorieTarget(bmr, objective);

export const calculateMacrosPerTab = (
	bmr: number,
	objective: string,
	activeCarbPlan: string
): Macros => {
	const dietObjective = getDietObjective(bmr, objective);
	const macroRacios = CaloricDistribution[activeCarbPlan];
	const protein = calculateMacroDistribution(
		macroRacios.protein,
		dietObjective,
		PROTEIN_PER_GRAM
	);
	const carbs = calculateMacroDistribution(
		macroRacios.carbs,
		dietObjective,
		CARB_PER_GRAM
	);
	const fats = calculateMacroDistribution(
		macroRacios.fats,
		dietObjective,
		FAT_PER_GRAM
	);

	return {
		protein,
		carbs,
		fats,
	};
};

// TO DO
//Write function to receive basic tdee and return the corresponding macros based on carb distribution
