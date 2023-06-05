import { jest } from '@jest/globals';

jest.unstable_mockModule('../combine.js', () => ({
	combine: jest.fn((greeting, who) => `${greeting} "${who}"`),
}));
const { combine } = await import('../combine.js');

const { greet } = await import('../greeting.js');

describe('greet', () => {
	test('default', () => {
		expect(greet()).toBe('Hello "World"');
	});
	test('default', () => {
		expect(greet('Tracy')).toBe('Hello "Tracy"');
	});
});
