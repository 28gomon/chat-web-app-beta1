import {FOLLOW_USER, SET_USERS, UNFOLLOW_USER, UsersPageActionType, UsersType} from "../types/types";
// https://social-network.samuraijs.com/api/1.0/
const initialState: UsersType = {
	users: [
		// {
		// 	id: 1,
		// 	name: 'Alexandr Homan',
		// 	status: 'Learn ReactJS',
		// 	followed: false,
		// 	photos: {
		// 		small: 'https://www.alvinailey.org/sites/default/files/styles/slideshow_image/public/melanie-person.jpg?itok=ocw3xkx_',
		// 		large: 'https://www.alvinailey.org/sites/default/files/styles/slideshow_image/public/melanie-person.jpg?itok=ocw3xkx_'
		// 	}
		// },
		// {
		// 	id: 2,
		// 	name: 'Alexandr Homan',
		// 	status: 'Learn ReactJS',
		// 	followed: false,
		// 	photos: {
		// 		small: 'https://www.alvinailey.org/sites/default/files/styles/slideshow_image/public/melanie-person.jpg?itok=ocw3xkx_',
		// 		large: 'https://www.alvinailey.org/sites/default/files/styles/slideshow_image/public/melanie-person.jpg?itok=ocw3xkx_'
		// 	}
		// }
	]
};

export const usersReducer = (state = initialState, action: UsersPageActionType) => {
	switch (action.type) {

		case FOLLOW_USER:
			return {
				...state, users: state.users.map(user => {
					if (user.id === action.userId) {
						return {...user, followed: true};
					}
					return user;
				})
			};

		case UNFOLLOW_USER:
			return {
				...state, users: state.users.map(user => {
					if (user.id === action.userId) {
						return {...user, followed: false};
					}
					return user;
				})
			};

		case SET_USERS:
			return {
				...state, users: [...state.users, action.state]
			};

		default:
			return state;
	}
};

export const followActionCreator = (userId: number) => {
	return {
		type: FOLLOW_USER,
		userId
	} as const;
};

export const unfollowActionCreator = (userId: number) => {
	return {
		type: UNFOLLOW_USER,
		userId
	} as const;
};

export const setUsersActionCreator = (state: UsersType) => {
	return {
		type: SET_USERS,
		state
	} as const;
};