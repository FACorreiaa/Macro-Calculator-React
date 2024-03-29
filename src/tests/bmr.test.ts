import { calculateBMR } from '../helper/bmr';
import { describe, it, expect, test, assert } from 'vitest';

test('calculateTDEE should return the correct value', () => {
	const data = {
		age: '34',
		weight: '86',
		height: '185',
		sex: 'Male',
		metric: 'Metric',
	};
	const expected = 2340;
	// const age = 34;
	// const weight = 86;
	// const height = 185;
	// const sex = 'Male';
	// const metric = 'Metric';
	const result = calculateBMR(data);
	assert.equal(result, expected);
});

describe('something truthy and falsy', () => {
	it('true to be true', () => {
		expect(true).toBe(true);
	});

	it('false to be false', () => {
		expect(false).toBe(false);
	});
});
