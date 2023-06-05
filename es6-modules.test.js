import { greet } from './es6-modules.js';

describe('es6-module', () => {
	test('default', () => {
		expect(greet()).toBe('Hello, World!');
	});
	test('default', () => {
		expect(greet('Tracy')).toBe('Hello, Tracy!');
	});
});
