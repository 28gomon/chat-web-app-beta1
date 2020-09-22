import {connect} from "react-redux";
import {ProfileMyPosts} from "./ProfileMyPosts";
import {addNewPostActionCreator, changeTextActionCreator} from "../../../redux/profileReducer";

const mapStateToProps = (state: any) => {
	return {
		posts: state.profileReducer.posts,
		changeText: state.profileReducer.changeText
	}
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		addNewPostAC: () => dispatch(addNewPostActionCreator()),
		changeTextAC: (postText: string) => dispatch(changeTextActionCreator(postText))
	}
};

export const ProfileMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileMyPosts);