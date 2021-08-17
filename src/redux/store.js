import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./Reducers/authReducer";
import postReducer from "./Reducers/postReducer";

const middlewares = [thunk]

const rootReducers = combineReducers({
    auth :authReducer,
    post: postReducer})

const store = createStore(rootReducers,composeWithDevTools(applyMiddleware(...middlewares)))

export default store