import { createStore } from "./core.js";
import reducer from "./reducer.js";
import Logger from "./logger.js";

const { attach, connect, dispatch } = createStore(Logger(reducer));

window.dispatch = dispatch;

export { attach, connect };
