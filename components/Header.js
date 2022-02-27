import html from "../core.js";

function Header() {
	return html`
		<header class="header">
			<h1>todos</h1>
			<input
				class="new-todo"
				placeholder="What needs to be done?"
				autofocus
                onkeyup="console.log(event)"
			/>
		</header>
	`;
}

export default Header;
