import html from "../core.js";

function TodoItem({ todo, index, editIndex }) {
	return html`
		<li
			class="${todo.isCompleted && "completed"} ${editIndex === index &&
			"editing"}"
		>
			<div class="view">
				<input
					class="toggle"
					type="checkbox"
					${todo.isCompleted && "checked"}
					onchange="dispatch('TOGGLE_TODO', ${index})"
				/>
				<label ondblclick="dispatch('EDIT_TODO', ${index})"
					>${todo.title}</label
				>
				<button
					class="destroy"
					onclick="dispatch('REMOVE', ${index})"
				></button>
			</div>
			<input
				class="edit"
				value="${todo.title}"
				onkeyup="event.keyCode == 13 && dispatch('UPDATE_TODO', this.value.trim()) 
				|| event.keyCode == 27 && dispatch('CANCEL_EDIT')"
				onblur="dispatch('UPDATE_TODO', this.value)"
			/>
		</li>
	`;
}

export default TodoItem;
