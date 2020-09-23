import React from "react";
import classes from "./Users.module.css";
import { UsersContainer } from "./UsersContainer";

export const Users = () => {
	return (
		<div className={classes.Users}>
			<UsersContainer/>
		</div>
	)
};