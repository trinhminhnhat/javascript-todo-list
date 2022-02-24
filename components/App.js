import html from "../core.js";
import { connect } from "../store.js";
import Header from "./Header.js";
import TodoList from "./TodoList.js";
import Footer from "./Footer.js";

const connector = connect();

function App({ cars }) {
	return html`
        <section class="todoapp">
            ${Header()}
            ${TodoList()}
            ${Footer()}
        </section>
    `;
}

export default connector(App);
