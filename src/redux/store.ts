import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {usersReducer} from "./users-reducer";

const reducers = combineReducers({
	profileReducer,
	usersReducer
});

export const store = createStore(reducers);

// @ts-ignore
window.store = store