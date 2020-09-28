import {addNewPostActionCreator, changeTextActionCreator} from "../redux/profileReducer";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../redux/users-reducer";

export const ADD_POST = 'profile-page/ADD-POST';
export const CHANGE_POST_TEXT = 'profile-page/CHANGE-POST-TEXT';

export const FOLLOW_USER = 'users/FOLLOW-USER';
export const UNFOLLOW_USER = 'users/UNFOLLOW-USER';
export const SET_USERS = 'users/SET-USERS';

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
export type UserPhotoType = {
	small: string
	large: string
}

export type UserType = {
	id: number
	name: string
	status: string
	followed: boolean
	photos: UserPhotoType
};

export type UsersType = {
	users: Array<UserType>
};

export type UsersPageActionType = ReturnType<typeof followActionCreator>
	| ReturnType<typeof unfollowActionCreator>
	| ReturnType<typeof setUsersActionCreator>;
// usersPage