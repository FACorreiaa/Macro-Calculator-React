import { BmrInput } from '../types/tdeeSchema';

export const maleAgeFactor = 5.0;
export const femaleAgeFactor = -161.0;

export const units: {
	[key: string]: {
		weightConvertor: number;
		heightConvertor: number;
		weightFactor: number;
		heightFactor: number;
		weightUnit: string;
		heightUnit: string;
	};
} = {
	Metric: {
		weightConvertor: 1,
		heightConvertor: 1,
		weightFactor: 10,
		heightFactor: 6.25,
		weightUnit: 'kg',
		heightUnit: 'cm',
	},
	Imperial: {
		weightConvertor: 0.453592,
		heightConvertor: 2.54,
		weightFactor: 4.536,
		heightFactor: 15.88,
		weightUnit: 'lbs',
		heightUnit: 'in',
	},
};

export const calculateBMR = ({
	age,
	sex,
	metric,
	weight,
	height,
}: BmrInput): number => {
	const ageFactor = sex === 'Male' ? maleAgeFactor : femaleAgeFactor;
	const weightConvertor = units[metric].weightConvertor;
	const heightConvertor = units[metric].heightConvertor;

	const convertedWeight = Number(weight) * weightConvertor;
	const convertedHeight = Number(height) * heightConvertor;

	const weightFactor = units[metric].weightFactor;
	const heightFactor = units[metric].heightFactor;

	const result =
		weightFactor * convertedWeight +
		heightFactor * convertedHeight -
		5.0 * parseFloat(age) +
		ageFactor;

	return result;
};

export const getHeightUnit = (metric: string) => units[metric].heightUnit;
export const getWeightUnit = (metric: string) => units[metric].weightUnit;
