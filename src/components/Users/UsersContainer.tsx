import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {User} from "./User/User";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/users-reducer";
import {UsersType, UserType} from "../../types/types";
import axios from 'axios';

type UsersHocType = {
	users: Array<UserType>
	followUser: (userId: number) => void
	unfollowUser: (userId: number) => void
	setUsers: (state: UsersType) => void
};

const UsersHoc: React.FC<UsersHocType> = (
	{
		users,
		followUser,
		unfollowUser,
		setUsers
	}) => {

	const [usersArray, setUsersArray] = useState<Array<UserType>>([]);

	useEffect(() => {
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => {
				setUsers(response.data.items);
			});
		if (users) {setUsersArray(users);}
	}, [users]);

	return (
		<User
			users={usersArray}
			followUser={followUser}
			unfollowUser={unfollowUser}
		/>
	)
};

const mapStateToProps = (state: any) => {
	return {
		users: state.usersReducer.users
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		followUser: (userId: number) => dispatch(followActionCreator(userId)),
		unfollowUser: (userId: number) => dispatch(unfollowActionCreator(userId)),
		setUsers: (state: UsersType) => dispatch(setUsersActionCreator(state))
	};
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersHoc);