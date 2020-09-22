import React from "react";
import classes from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileMyPostsContainer} from "./ProfileMyPosts/ProfileMyPostsContainer";

export const Profile = () => {
	return (
		<div className={classes.Profile}>

			{/* ProfileInfoContainer */}
			<ProfileInfo/>

			{/* ProfileMyPostsContainer */}
			<ProfileMyPostsContainer/>

		</div>
	)
};