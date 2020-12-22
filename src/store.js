import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

// create the store
const store = createStore(rootReducer, composeWithDevTools());
export default store;
