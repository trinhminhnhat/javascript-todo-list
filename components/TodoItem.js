import html from "../core.js";

function TodoItem({ todo, index }) {
	return html`
		<li class="${todo.isCompleted && "completed"}">
			<div class="view">
				<input
					class="toggle"
					type="checkbox"
					${todo.isCompleted && "checked"}
					onchange="dispatch('TOGGLE_TODO', ${index})"
				/>
				<label>${todo.title}</label>
				<button
					class="destroy"
					onclick="dispatch('REMOVE', ${index})"
				></button>
			</div>
			<input class="edit" value="${todo.title}" />
		</li>
	`;
}

export default TodoItem;
