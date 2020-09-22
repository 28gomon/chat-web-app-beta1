import React, {ChangeEvent} from 'react';
import classes from './ProfileMyPosts.module.css';
import {Button} from "../../UI/Button/Button";
import {Post} from "./Post/Post";
import {PostType} from "../../../types/types";

type ProfileMyPostsType = {
	posts: Array<PostType>
	changeText: string
	addNewPostAC: () => void
	changeTextAC: (postText: string) => void
}

export const ProfileMyPosts: React.FC<ProfileMyPostsType> = (
	{
		posts,
		changeText,
		addNewPostAC,
		changeTextAC
	}) => {

	const onChangePostText = (event: ChangeEvent<HTMLTextAreaElement>) => {
		changeTextAC(event.currentTarget.value);
	};

	const onClickAddNewPost = () => {
		addNewPostAC();
	};

	return (
		<div className={classes.ProfileMyPosts}>

			<div className={classes.BlockAddPost}>

				<div>
					<div className={classes.Textarea}>
					<textarea
						value={changeText}
						onChange={onChangePostText}
						placeholder={'Add new post'}
					/>
					</div>

					<div>
						<Button
							disabled={changeText === ''}
							title={'Add post'}
							styleButton={classes.ButtonAddPost}
							onClick={onClickAddNewPost}
						/>
					</div>
				</div>

				<div className={classes.Posts}>
					{
						posts.map((post, index) => {
							return (
								<Post
									key={index + '_' + post.id}
									message={post.message}
									likesCount={post.likesCount}
									id={post.id}
								/>
							)
						})
					}
				</div>

			</div>

			<div className={classes.ProfileMyPostsBlockInfo}>
				<h3>Information</h3>
			</div>

		</div>
	)
};