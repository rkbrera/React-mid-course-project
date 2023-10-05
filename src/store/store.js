import postReducer from "../store/reducers/postReducer"
import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
    postReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));