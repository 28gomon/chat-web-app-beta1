import React from "react";
import classes from "./Post.module.css";
import {Button} from "../../../UI/Button/Button";
import {PostType} from "../../../../types/types";


export const Post: React.FC<PostType> = ({id, message,  likesCount}) => {
	return (
		<div className={classes.Post}>
			<div className={classes.PostInfo}>
				<h3>Alexandr Homan</h3>
				<span>6 day a go</span>
				<Button
					styleButton={classes.EllipsisButton}
				/>
			</div>
			<img
				src="https://www.alvinailey.org/sites/default/files/styles/slideshow_image/public/melanie-person.jpg?itok=ocw3xkx_"
				alt=""/>
			<div className={classes.PostContent}>
				<p>{message}</p>
				<div>
					<span>Нравится: <b>{likesCount}</b></span>
				</div>
			</div>
		</div>
	)
};