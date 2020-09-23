import {connect} from "react-redux";
import {User} from "./User/User";
import {followActionCreator, unfollowActionCreator} from "../../redux/users-reducer";

const mapStateToProps = (state: any) => {
	return {
		users: state.usersReducer.users
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		followUser: (userId: number) => dispatch(followActionCreator(userId)),
		unfollowUser: (userId: number) => dispatch(unfollowActionCreator(userId))
	};
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(User);