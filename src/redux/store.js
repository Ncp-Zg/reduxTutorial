import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./Reducers/authReducer";

const middlewares = [thunk]


const store = createStore(authReducer,composeWithDevTools(applyMiddleware(...middlewares)))

export default store