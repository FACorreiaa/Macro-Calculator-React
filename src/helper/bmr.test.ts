import { calculateBMR } from './bmr';
import { describe, it, expect, test, assert } from 'vitest';

test('calculateTDEE should return the correct value', () => {
	const age = 34;
	const weight = 86;
	const height = 185;
	const gender = 'Male';
	const metric = 'Metric';
	const expected = 2340;

	const result = calculateBMR(34, gender, metric, weight, height);
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
