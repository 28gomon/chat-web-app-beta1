import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Button} from "../UI/Button/Button";

export const Header = () => {
	return (
		<div className={classes.Header}>

			<div className={classes.HeaderContainer}>

				<div className={classes.Logo}>
					<NavLink to={'/'}>
						<i className="fa fa-xing"/>
					</NavLink>
				</div>

				<div className={classes.SearchPanel}>
					<div>
						<input type="text"/>
						<Button/>
					</div>
				</div>

				<div className={classes.InformationBlock}>
					<div>
						<Button
							styleButton={classes.Bell}
						/>
						<Button
							styleButton={classes.Settings}
						/>
					</div>
				</div>

			</div>

		</div>
	)
};