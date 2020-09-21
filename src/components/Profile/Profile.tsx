import React from "react";
import classes from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileMyPosts} from "./ProfileMyPosts/ProfileMyPosts";

export const Profile = () => {
	return (
		<div className={classes.Profile}>

			{/* ProfileInfoContainer */}
			<ProfileInfo/>

			{/* ProfileMyPostsContainer */}
			<ProfileMyPosts/>

		</div>
	)
};