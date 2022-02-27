import html from "../core.js";

function TodoItem({ todo }) {
    console.log('todo: ', todo);
	return html`
        <li class="${ todo.isComplete && 'completed' }">
            <div class="view">
                <input class="toggle" type="checkbox" ${ todo.isComplete && 'checked' }>
                <label>${ todo.title }</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="${ todo.title }">
        </li>
    `;
}

export default TodoItem;
