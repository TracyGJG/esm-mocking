import { jest } from '@jest/globals';

import mockCombine, { getParams } from './mockCombinePlus.js';

jest.unstable_mockModule('../combine.js', () => ({
	combine: jest.fn(mockCombine),
}));

describe('greet', () => {
    let greet;

    beforeEach(async () => {
        ({greet} = await import('../greeting.js'));
    });

	test('default', () => {
        expect(getParams()).toBe('{"g":"","w":""}');
		expect(greet()).toBe('Hello "World"');
        expect(getParams()).toBe('{"g":"Hello","w":"World"}');
	});
	test('default', () => {
		expect(greet('Tracy')).toBe('Hello "Tracy"');
        expect(getParams()).toBe('{"g":"Hello","w":"Tracy"}');
	});
});
