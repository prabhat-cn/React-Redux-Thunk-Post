import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
// Thunk ready
import Thunk from 'redux-thunk'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk)));

export default store;
