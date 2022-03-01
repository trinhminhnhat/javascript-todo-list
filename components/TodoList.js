import html from "../core.js";
import { connect } from "../store.js";
import TodoItem from "./TodoItem.js";

function TodoList({ todos, filter, filters, editIndex }) {
	return html`
		<section class="main">
			<input
				id="toggle-all"
				class="toggle-all"
				type="checkbox"
				onchange="dispatch('TOGGLE_ALL', this.checked)"
				${todos.every(filters.completed) && "checked"}
			/>
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list">
				${todos.filter(filters[filter]).map((todo, index) => {
					return TodoItem({ todo, index, editIndex });
				})}
			</ul>
		</section>
	`;
}

export default connect()(TodoList);
