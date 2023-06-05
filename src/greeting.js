import { combine } from './combine.js';

export function greet(name = 'World') {
	return combine('Hello', name);
}
