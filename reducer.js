const init = {
    cars: ['Ford', 'Chevy', 'Honda'],
}

export default function reducer(state = init, action, args) {
    console.log('action: ', action, args);

    switch (action) {
        case 'ADD':
            const [newCar] = args;
            return {
                ...state,
                cars: [...state.cars, newCar]
            }
        default:
            return state;
    }
}