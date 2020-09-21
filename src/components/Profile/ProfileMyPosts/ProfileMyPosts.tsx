import React from 'react';
import classes from './ProfileMyPosts.module.css';
import {Button} from "../../UI/Button/Button";
import {Post} from "./Post/Post";

export const ProfileMyPosts = () => {
	return (
		<div className={classes.ProfileMyPosts}>

			<div className={classes.BlockAddPost}>

				<div>
					<div className={classes.Textarea}>
					<textarea
						placeholder={'Add new post'}
					/>
					</div>

					<div>
						<Button
							title={'Add post'}
							styleButton={classes.ButtonAddPost}
						/>
					</div>
				</div>

				<div className={classes.Posts}>
					<Post/>
					<Post/>
				</div>

			</div>

			<div className={classes.ProfileMyPostsBlockInfo}>
				<h3>Information</h3>
			</div>

		</div>
	)
};