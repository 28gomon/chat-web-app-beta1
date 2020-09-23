import {UsersType} from "../types/types";

const initialState: UsersType = {
	users: [
		{
			id: 1,
			name: 'Alexandr',
			lastName: 'Homan',
			status: 'Learn ReactJS',
			followed: false,
			location: {
				city: 'Minsk',
				country: 'Belarus'
			}
		}
	]
};

export const usersReducer = (state = initialState, action: any) => {
	switch (action.type) {

		default:
			return state;
	}
};

export const followActionCreator = () => {
	return {

	};
};