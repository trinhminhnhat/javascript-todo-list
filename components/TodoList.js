import html from "../core.js";
import { connect } from "../store.js";
import TodoItem from "./TodoItem.js"

function TodoList({ todos }) {
	return html`
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todos.map(todo => {
                    return TodoItem({ todo });
                })}
                <li>
                    <div class="view">
                        <input class="toggle" type="checkbox">
                        <label>Buy a unicorn</label>
                        <button class="destroy"></button>
                    </div>
                    <input class="edit" value="Rule the web">
                </li>
            </ul>
        </section>
    `;
}

export default connect()(TodoList);
