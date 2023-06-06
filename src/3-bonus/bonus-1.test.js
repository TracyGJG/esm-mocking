import { jest } from '@jest/globals';

const combine = jest.fn((greeting, who) => `${greeting} "${who}"`);

jest.unstable_mockModule('../combine.js', () => ({
	combine,
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
