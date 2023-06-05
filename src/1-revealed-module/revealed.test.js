import { combine } from '../combine.js';

import revealed from './revealed.js';

describe('greet', () => {
	let greet;

	beforeAll(() => {
		({ greet } = revealed({ combine }));
	});

	test('default', () => {
		expect(greet()).toBe('Hello, World!');
	});
	test('default', () => {
		expect(greet('Tracy')).toBe('Hello, Tracy!');
	});
});
