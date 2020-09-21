import React from "react";
import classes from "./Post.module.css";
import {Button} from "../../../UI/Button/Button";

export const Post = () => {
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
				<p>Post text</p>
				<div>
					<span>Нравится: <b>12</b></span>
				</div>
			</div>
		</div>
	)
};