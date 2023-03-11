import {
	caloricDistribution,
	CALORIC_DISTRIBUTIONS,
	goalList,
	workoutVolumesList,
} from './data';

type Macros = {
	protein: number;
	fats: number;
	carbs: number;
};
export const calculateCaloricGoal = (
	tdee: number,
	goal: string,
	objective: string
): number => {
	return (tdee + goalList[goal]) * workoutVolumesList[objective];
};

const calculateMacroDistribution = (
	calorieFactor: number,
	calorieGoal: number,
	caloriesPerGram: number
): number => {
	return (calorieFactor * calorieGoal) / caloriesPerGram;
};

export const calculateMacros = (
	caloricFactor: string,
	coloricGoal: number
): Macros => {
	const macroRacios = caloricDistribution[caloricFactor];
	let protein = calculateMacroDistribution(macroRacios.protein, coloricGoal, 4);
	let carbs = calculateMacroDistribution(macroRacios.carbs, coloricGoal, 4);
	let fats = calculateMacroDistribution(macroRacios.fats, coloricGoal, 4);

	return {
		protein,
		carbs,
		fats,
	};
};
