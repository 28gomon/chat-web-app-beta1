import {ADD_POST, CHANGE_POST_TEXT, ProfilePageActionTypes, ProfilePageType} from "../types/types";

const initialState: ProfilePageType = {
	posts: [
		{id: 1, message: "Post 4", likesCount: 2},
		{id: 2, message: "Post 3", likesCount: 12},
		{id: 3, message: "Post 2", likesCount: 5},
		{id: 4, message: "Post 1", likesCount: 15},
	],
	changeText: ''
};

export const profileReducer = (state = initialState, action: ProfilePageActionTypes) => {
	switch (action.type) {

		case ADD_POST:
			const newPost = {
				id: state.posts.length + 1,
				message: state.changeText,
				likesCount: 0
			}
			return {
				...state, posts: [newPost, ...state.posts], changeText: ''
			};

		case CHANGE_POST_TEXT:
			return {
				...state, changeText: action.postText.trim() !== '' ? action.postText : ''
			};

		default:
			return state;
	}
};

export const addNewPostActionCreator = () => {
	return {
		type: ADD_POST
	} as const
};

export const changeTextActionCreator = (postText: string) => {
	return {
		type: CHANGE_POST_TEXT,
		postText
	} as const
};