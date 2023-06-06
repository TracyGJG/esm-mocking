import { jest } from '@jest/globals';

import mockCombine from './mockCombine.js';

jest.unstable_mockModule('../combine.js', () => ({
	combine: jest.fn(mockCombine),
}));

const { greet } = await import('../greeting.js');

describe('greet', () => {
	test('default', () => {
		expect(greet()).toBe('Hello "World"');
	});
	test('default', () => {
		expect(greet('Tracy')).toBe('Hello "Tracy"');
	});
});
