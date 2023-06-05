import { jest } from '@jest/globals';

jest.unstable_mockModule('../combine.js', () => ({
	combine: jest.fn((greeting, who) => `${greeting} "${who}"`),
}));
const { combine } = await import('../combine.js');

jest.unstable_mockModule('../greeting.js', () => ({
	greet: jest.fn((name = 'World') => combine('Hiya', name)),
}));

const { greet } = await import('../greeting.js');

describe('greet', () => {
	test('default', () => {
		expect(greet()).toBe('Hiya "World"');
	});
	test('default', () => {
		expect(greet('Tracy')).toBe('Hiya "Tracy"');
	});
});
