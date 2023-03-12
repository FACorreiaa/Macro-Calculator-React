import {
	caloricDistribution,
	CARB_PER_GRAM,
	FAT_PER_GRAM,
	goalList,
	PROTEIN_PER_GRAM,
	workoutVolumesList,
} from './data';

type Macros = {
	protein: number;
	fats: number;
	carbs: number;
};

export const calculateCaloricGoal = (tdee: number, goal: string): number =>
	tdee + goalList[goal];

export const calculateCaloricGoalWithTrainning = (
	tdee: number,
	goal: string,
	objective: string
): number => calculateCaloricGoal(tdee, goal) * workoutVolumesList[objective];

const calculateMacroDistribution = (
	calorieFactor: number,
	calorieGoal: number,
	caloriesPerGram: number
): number => (calorieFactor * calorieGoal) / caloriesPerGram;

export const calculateMacros = (
	caloricFactor: string,
	coloricGoal: number
): Macros => {
	const macroRacios = caloricDistribution[caloricFactor];
	let protein = calculateMacroDistribution(
		macroRacios.protein,
		coloricGoal,
		PROTEIN_PER_GRAM
	);
	let carbs = calculateMacroDistribution(
		macroRacios.carbs,
		coloricGoal,
		CARB_PER_GRAM
	);
	let fats = calculateMacroDistribution(
		macroRacios.fats,
		coloricGoal,
		FAT_PER_GRAM
	);

	return {
		protein,
		carbs,
		fats,
	};
};
