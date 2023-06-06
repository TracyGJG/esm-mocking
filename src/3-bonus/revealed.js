let combine;

export default function (dependencies) {
	combine = dependencies.combine;

	return {
		greet,
	};
}

function greet(name = 'World') {
	return combine('Hello', name);
}
