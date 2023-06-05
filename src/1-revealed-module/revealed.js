export default function ({ combine }) {
	return {
		greet,
	};

	function greet(name = 'World') {
		return combine('Hello', name);
	}
}
