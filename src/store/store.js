import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import { userReducer } from "./reducer/user";
import { filereducer } from "./reducer/category";
import { Authuser } from "./reducer/Authuser"

const reducer = combineReducers({
    getUser : userReducer,
    getfile : filereducer,
    getAuthData : Authuser
});

const middleware = [thunk];

const INITIAL_STATE = {};

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;