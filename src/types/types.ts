import {addNewPostActionCreator, changeTextActionCreator} from "../redux/profileReducer";

export const ADD_POST = 'profile-page/ADD-POST';
export const CHANGE_POST_TEXT = 'profile-page/CHANGE-POST-TEXT';

// profilePage
export type PostType = {
	id: number
	message: string
	likesCount: number
};

export type ProfilePageType = {
	posts: Array<PostType>
	changeText: string
};

export type ProfilePageActionTypes = AddNewPostActionType | ChangeTextActionType;
export type AddNewPostActionType = ReturnType<typeof addNewPostActionCreator>;
export type ChangeTextActionType = ReturnType<typeof changeTextActionCreator>;
// profilePage

// usersPage
export type UserLocationType = {
	city: string
	country: string
};

export type UserType = {
	id: number
	name: string
	lastName: string
	status: string
	followed: boolean
	location: UserLocationType
};

export type UsersType = {
	users: Array<UserType>
};
// usersPage