//file to aux on the bmr calculation

import { BmrInput } from '../types/tdeeSchema';

const maleAgeFactor = 5.0;
const femaleAgeFactor = -161.0;

const units: {
	[key: string]: {
		weightFactor: number;
		heightFactor: number;
		weightUnit: string;
		heightUnit: string;
	};
} = {
	Metric: {
		weightFactor: 1,
		heightFactor: 1,
		weightUnit: 'kg',
		heightUnit: 'cm',
	},
	Imperial: {
		weightFactor: 0.453592,
		heightFactor: 2.54,
		weightUnit: 'lbs',
		heightUnit: 'in',
	},
};

export const calculateBMR = ({
	age,
	gender,
	metric,
	weight,
	height,
}: BmrInput): number => {
	const ageFactor = gender === 'male' ? maleAgeFactor : femaleAgeFactor;
	console.log('metric', metric);
	const weightFactor = units[metric].weightFactor;
	const heightFactor = units[metric].heightFactor;

	const convertedWeight = Number(weight) * weightFactor;
	const convertedHeight = Number(height) * heightFactor;

	return (
		weightFactor * convertedWeight +
		heightFactor * convertedHeight -
		5.0 * parseFloat(age) +
		ageFactor
	);
};

export const getHeightUnit = (metric: string) => units[metric].heightUnit;
export const getWeightUnit = (metric: string) => units[metric].weightUnit;
