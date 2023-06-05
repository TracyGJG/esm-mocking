import { jest } from '@jest/globals';

jest.unstable_mockModule('../greeting.js', () => ({
	greet: jest.fn((name = 'World') => `Hello ${name}`),
}));

const { greet } = await import('../greeting.js');

describe('greet', () => {
	test('default', () => {
		expect(greet()).toBe('Hello World');
	});
	test('default', () => {
		expect(greet('Tracy')).toBe('Hello Tracy');
	});
});
