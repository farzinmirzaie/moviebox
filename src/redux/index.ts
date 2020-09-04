import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";
import actions from "./actions";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export { store, actions };
