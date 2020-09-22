import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";

const reducers = combineReducers({
	profileReducer
});

export const store = createStore(reducers);