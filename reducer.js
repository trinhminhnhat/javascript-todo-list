const init = {
	todos: [
		{
			title: 'Learn React', 
			isComplete: false
		},
		{
			title: 'Learn Redux',
			isComplete: true
		},
		{
			title: 'Learn React Native',
			isComplete: false
		}
	],
};

export default function reducer(state = init, action, args) {
	console.log("action: ", action, args);

	switch (action) {
		case "ADD":
			const [newCar] = args;
			return {
				...state,
				cars: [...state.cars, newCar],
			};
		default:
			return state;
	}
}
