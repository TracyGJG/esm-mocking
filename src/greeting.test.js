import { jest } from '@jest/globals';

const { greet } = await import('./greeting.js');

describe('greet', () => {
	test('default', () => {
		expect(greet()).toBe('Hello, World!');
	});
	test('default', () => {
		expect(greet('Tracy')).toBe('Hello, Tracy!');
	});
});
