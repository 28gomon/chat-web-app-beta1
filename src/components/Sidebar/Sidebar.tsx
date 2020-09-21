import React from "react";
import classes from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

export const Sidebar = () => {
	return (
		<div className={classes.Sidebar}>
			<div className={classes.Nav}>
				<div><NavLink to={'/profile'} activeClassName={classes.Active}>Profile</NavLink></div>
				<div><NavLink to={'/dialogs'} activeClassName={classes.Active}>Dialogs</NavLink></div>
				<div><NavLink to={'/settings'} activeClassName={classes.Active}>Settings</NavLink></div>
			</div>
		</div>
	)
};