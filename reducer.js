import storage from "./ulti/storage.js";

const init = {
	todos: storage.get(),
	filter: "all",
	filters: {
		all: () => true,
		active: (todo) => !todo.isCompleted,
		completed: (todo) => todo.isCompleted,
	},
	editIndex: null,
};

const actions = {
	ADD({ todos }, title) {
		if (title) {
			todos.push({
				title,
				isCompleted: false,
			});
			storage.set(todos);
		}
	},
	TOGGLE_TODO({ todos }, index) {
		todos[index].isCompleted = !todos[index].isCompleted;
		storage.set(todos);
	},
	TOGGLE_ALL({ todos }, isCompleted) {
		todos.forEach((todo) => (todo.isCompleted = isCompleted));
		storage.set(todos);
	},
	SET_FILTER(state, type) {
		state.filter = type;
	},
	REMOVE({ todos }, index) {
		todos.splice(index, 1);
		storage.set(todos);
	},
	REMOVE_COMPLETED(state) {
		state.todos = state.todos.filter(state.filters.active);
		storage.set(state.todos);
	},
	EDIT_TODO(state, index) {
		state.editIndex = index;
	},
	UPDATE_TODO(state, title) {
		if (state.editIndex !== null) {
			if (title) {
				state.todos[state.editIndex].title = title;
				state.editIndex = null;
				storage.set(state.todos);
			} else {
				this.REMOVE(state, state.editIndex);
			}
		}
	},
	CANCEL_EDIT(state) {
		state.editIndex = null;
	},
};

export default function reducer(state = init, action, args) {
	actions[action] && actions[action](state, ...args);

	return state;
}
